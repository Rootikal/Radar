let tablesMetadata = [];

//Function to fetch each tables' data and call createAgTablesHS function after promises resolve
const fetchIsheetDataHS = (data) => {
	$j("#ag-tables-main-container").before(
		"<div class='ag-isheet-tables-loader'></div>"
	);
	tablesMetadata = [...data];
	Promise.all(
		tablesMetadata.map((item) => {
			return Promise.resolve(
				$j.ajax({
					url: `https://www.extranet.ag/ag/api/14/isheet/${item.sheetId}/items?sheetviewid=${item.sheetViewId}&limit=1000&offset=0`,
					method: "GET",
					beforeSend: function (XMLHttpRequest) {
						XMLHttpRequest.setRequestHeader("accept", "application/json");
					},
					error: function (error) {
						console.log(error);
					},
				})
			);
		})
	).then((results) => {
		createAgTablesHS(results);
	});
};

//Function to dinamically build tabs, tables and store requiered data in tablesMetadata array
const createAgTablesHS = (isheets) => {
	isheets.forEach((item, index) => {
		//Store sheet's name on tablesMetadata
		tablesMetadata[index].sheetName = item.isheet.metadata.sheetname.content;

		//Create tabs
		$j("#isheet-tabs").append(
			`<li class="tab-list-item"><a data-target="#tab${index}" data-toggle="tab">${item.isheet.metadata.sheetname.content}</a></li>`
		);

		//Create the table and its columns
		let table = `<div class="tab-pane" id="tab${index}">
		             <table class="display wrap ag-isheet-table" data-toggle="tab">
			         <thead>
					 <tr></tr>
					 </thead>
			         <tbody></tbody>
		             </table>
	                 </div>`;

		$j("#isheet-tables").append(table);
		let tableHead = $j(`#tab${index} thead tr`);

		//Store required columns data in tablesMetadata
		item.isheet.head.headcolumn.forEach((column, i) => {
			//If the iSheet has no records, skip adding the first "Edit" colum as DataTable returns an error when encounters columns without a name
			if (i == 0) {
				if (item.isheet.recordcount != "0") {
					tableHead.append(`<th></th>`);
				}
			}
			tableHead.append(
				`<th>									
						${column.columnvalue}									
					</th>`
			);

			tablesMetadata[index].columnsData.push({
				name: column.columnvalue,
				id: column.columnid,
				type: column.columntypealias,
			});
		});

		/*Append rows
		The item property in the json provided by HighQ returns an array when the iSheet contains more than one row and an object when it contains a single row*/
		if (Array.isArray(item.isheet.data.item)) {
			let tBody = $j(`div[id=tab${index}] table tbody`);
			for (let i = 0; i < item.isheet.data.item.length; i++) {
				addRowsToAgTableHS(
					item.isheet.data.item[i],
					index,
					item.isheet.metadata.sitename.siteid,
					item.isheet.metadata.sheetname.sheetid,
					item.isheet.metadata.viewname.viewid,
					tBody
				);
			}
		} else {
			//Check there exists a single record and the iSheet is not empty. DataTable will handle custom message for empty tables.
			if (item.isheet.recordcount == "1") {
				let tBody = $j(`div[id=tab${index}] table tbody`);
				addRowsToAgTableHS(
					item.isheet.data.item,
					index,
					item.isheet.metadata.sitename.siteid,
					item.isheet.metadata.sheetname.sheetid,
					item.isheet.metadata.viewname.viewid,
					tBody
				);
			}
		}

		//Call DataTables plugin on the table and configure it accordingly
		$j(`#tab${index} table`).DataTable({
			// Display all records by default
			pageLength: -1,
			
			//Manage "Show entries" menu
			lengthMenu: [
				[5, 10, 15, 20, -1],
				[5, 10, 15, 20, "All"],
			],
			columnDefs: [
				//Remove ordering arrows for the "Edit" column and don't pre-select any ordering for the rest of the columns
				{ width: "200px", orderable: false, targets: 0 },
				//Add Read more/Read less to cells when appropiate
				{
					targets: "_all",
					createdCell: function (td) {
						if ($j(td).text().length > 125 || $j(td).children().length > 2) {
							let cell = $j(td);
							cell.contents().wrapAll("<div class='ag-cell-content'></div>");
							let content = cell.find(".ag-cell-content");
							cell.append($j("<a>Read more</a>"));
							let anchor = cell.find("a");
							content.css({
								height: "50px",
								overflow: "hidden",
							});
							cell.data("isLess", true);
							anchor.click(function () {
								let isLess = cell.data("isLess");
								content.css("height", isLess ? "auto" : "50px");
								$j(this).text(isLess ? "Read less" : "Read more");
								cell.data("isLess", !isLess);
							});
						}
					},
				},
			],
			order: [],
		});

		//Display first table after loading the DOM
		if (index == 0) {
			$j(`a[data-target=#tab${index}]`).parent().addClass("active");
			$j(`div[id=tab${index}]`).addClass("active");
		}
	});

	$j(".ag-isheet-table").each(function () {
		$j(this).parent().css("overflow-x", "auto");
	});
	$j(".ag-isheet-tables-loader").remove();
	document
		.getElementById("ag-tables-main-container")
		.classList.replace("ag-tables-invisible", "ag-tables-visible");
};

//Function to call to append rows to tables
const addRowsToAgTableHS = (row, isheetIndex, siteId, sheetId, viewId, tBody) => {
	tBody.append(`<tr id="row-${row.itemid}" data-ag-id=${row.itemid}></tr>`);
	let tableRow = $j(`div[id=tab${isheetIndex}] #row-${row.itemid}`);

	tableRow.append(
		`<td>
			<a onclick="window.open(this.href,'_blank')" href='https://www.extranet.ag/ag/sheetHome.action?metaData.siteID=${siteId}&metaData.sheetId=${sheetId}&metaData.sheetViewID=${viewId}&editItemId=${row.itemid}'>Edit</a>			
		</td>`
	);

	row.column.forEach((column) => {
		//Columns type "Choice"
		if (column.displaydata.hasOwnProperty("choices")) {
			//Handle checkboxes (multiple choices)
			if (Array.isArray(column.displaydata.choices.choice)) {
				let td = $j("<td></td>");
				for (let i = 0; i < column.displaydata.choices.choice.length; i++) {
					td.append(`<p>${column.displaydata.choices.choice[i].label}</p>`);
				}
				tableRow.append(td);
			} else {
				tableRow.append(`<td>${column.displaydata.choices.choice.label}</td>`);
			}
		}
		//Columns type "Single Line Text", "Multiple Line Text", "Number", "Date and Time"
		else if (column.displaydata.hasOwnProperty("value")) {
			//Handle line breaks
			column.displaydata.value = column.displaydata.value.replace(
				/(?:\r\n|\r|\n)/g,
				"<br>"
			);
			tableRow.append(`<td>${column.displaydata.value}</td>`);
		}
		//Columns type "User Look up"
		else if (column.displaydata.hasOwnProperty("lookupusers")) {
			//Handle multiple values
			if (Array.isArray(column.displaydata.lookupusers.lookupuser)) {
				let td = $j("<td></td>");
				for (
					let i = 0;
					i < column.displaydata.lookupusers.lookupuser.length;
					i++
				) {
					td.append(
						`<p>${column.displaydata.lookupusers.lookupuser[i].userdisplayname}</p>`
					);
				}
				tableRow.append(td);
			} else {
				tableRow.append(
					`<td>${column.displaydata.lookupusers.lookupuser.userdisplayname}</td>`
				);
			}
		}
		//Columns type "Hyperlink"
		else if (column.displaydata.hasOwnProperty("linkdisplayurl")) {
			tableRow.append(
				`<td><a href='${column.displaydata.linkdisplayurl}' onclick="window.open(this.href,'_blank')">${column.displaydata.linkdisplayname}</a></td>`
			);
		}
		//Columns type "Image"
		else if (column.displaydata.hasOwnProperty("apiurl")) {
			const imgUrl = new URL(column.displaydata.apiurl).searchParams;
			const attachmentId = imgUrl.get("attachmentID");
			tableRow.append(
				`<td>
					<img class="img-responsive cursorPointer" onclick="AddSheetItemCollection.displayImageModal(&quot;downloadItemAttachment.action&quot;,${siteId},${sheetId},${row.itemid},${column.attributecolumnid},${attachmentId},&quot;FALSE&quot;, this)" src="downloadItemAttachment.action?metaData.siteID=${siteId}&amp;metaData.sheetId=${sheetId}&amp;metaData.itemId=${row.itemid}&amp;isheetColumn.columnID=${column.attributecolumnid}&amp;displaySize=0&amp;attachmentID=${attachmentId}"  data-modal="#ISheet_module_image_imagePreviewModal">
					</td>`
			);
		}
		//Columns type "File Link"
		else if (column.displaydata.hasOwnProperty("documents")) {
			//Handle multiple documents
			if (Array.isArray(column.displaydata.documents.document)) {
				let td = $j("<td></td>");
				for (let i = 0; i < column.displaydata.documents.document.length; i++) {
					const folderUrl = new URL(
						column.displaydata.documents.document[i].httplink
					).searchParams;
					const parentFolderId = folderUrl.get("metaData.parentFolderID");
					td.append(
						`	<p>
						<a
							id="docid_${column.displaydata.documents.document[i].docid}"
							siteid=${siteId}
							version="4"
							onclick='return GriffinCommon.checkDocumentAccess(event,${siteId},${column.displaydata.documents.document[i].docid},4 ,false,0,"",0);return true;'
							href="documentHome.action?metaData.siteID=${siteId}&amp;metaData.parentFolderID=${parentFolderId}&amp;metaData.documentID=${column.displaydata.documents.document[i].docid}"
							data-modal="#FILE_MODULE_ADEPTOL"
							>${column.displaydata.documents.document[i].docname}.${column.displaydata.documents.document[i].docextension}</a
						><a
							href="javascript:void(0);"
							aria-label="Download"
							class="icon-arrow-circle-down tooltipShow margLeft5"
							data-toggle="tooltip"
							data-placement="top"
							onclick="DownloadDocumentCollection.downloadPerticularVersionOfDocument(${column.displaydata.documents.document[i].docid},${siteId},4); return false;"
						></a>
					</p>`
					);
				}
				tableRow.append(td);
			} else {
				const folderUrl = new URL(
					column.displaydata.documents.document.httplink
				).searchParams;
				const parentFolderId = folderUrl.get("metaData.parentFolderID");
				tableRow.append(
					`<td>
					<div>
					<a
						id="docid_${column.displaydata.documents.document.docid}"
						siteid=${siteId}
						version="4"
						onclick='return GriffinCommon.checkDocumentAccess(event,${siteId},${column.displaydata.documents.document.docid},4 ,false,0,"",0);return true;'
						href="documentHome.action?metaData.siteID=${siteId}&amp;metaData.parentFolderID=${parentFolderId}&amp;metaData.documentID=${column.displaydata.documents.document.docid}"
						data-modal="#FILE_MODULE_ADEPTOL"
						>${column.displaydata.documents.document.docname}.${column.displaydata.documents.document.docextension}</a
					><a
						href="javascript:void(0);"
						aria-label="Download"
						class="icon-arrow-circle-down tooltipShow margLeft5"
						data-toggle="tooltip"
						data-placement="top"
						onclick="DownloadDocumentCollection.downloadPerticularVersionOfDocument(${column.displaydata.documents.document.docid},${siteId},4); return false;"
					></a>
				</div>						
				</td>`
				);
			}
		}
		//Columns type "Folder Link"
		else if (column.displaydata.hasOwnProperty("folders")) {
			//Handle multiple folders
			if (Array.isArray(column.displaydata.folders.folder)) {
				let td = $j("<td></td>");
				for (let i = 0; i < column.displaydata.folders.folder.length; i++) {
					const folderUrl = new URL(
						column.displaydata.folders.folder[i].httplink
					).searchParams;
					const parentFolderId = folderUrl.get("metaData.parentFolderID");
					td.append(
						`<p>
					<a
						aria-label=${column.displaydata.folders.folder[i].folderpath}
						onclick="GriffinCommon.checkContentAccess(event,'FOLDER',${siteId},${column.displaydata.folders.folder[i].folderid},0,0,'')"
						href="documentHome.action?metaData.siteID=${siteId}&amp;metaData.parentFolderID=${parentFolderId}"					
						><span
							aria-hidden="true"
							class="icon icon-folder"
						></span></a>
						<a
							aria-label=${column.displaydata.folders.folder[i].folderpath}
							onclick="GriffinCommon.checkContentAccess(event,'FOLDER',${siteId},${column.displaydata.folders.folder[i].folderid},0,0,'')"
							href="documentHome.action?metaData.siteID=${siteId}&amp;metaData.parentFolderID=${parentFolderId}"
							>/${column.displaydata.folders.folder[i].foldername}</a>										
						</p>`
					);
				}
				tableRow.append(td);
			} else {
				const folderUrl = new URL(column.displaydata.folders.folder.httplink)
					.searchParams;
				const parentFolderId = folderUrl.get("metaData.parentFolderID");
				tableRow.append(
					`<td>
					<a
						aria-label=${column.displaydata.folders.folder.folderpath}
						onclick="GriffinCommon.checkContentAccess(event,'FOLDER',${siteId},${column.displaydata.folders.folder.folderid},0,0,'')"
						href="documentHome.action?metaData.siteID=${siteId}&amp;metaData.parentFolderID=${parentFolderId}"					
						><span
							aria-hidden="true"
							class="icon icon-folder"
						></span></a>
						<a
							aria-label=${column.displaydata.folders.folder.folderpath}
							onclick="GriffinCommon.checkContentAccess(event,'FOLDER',${siteId},${column.displaydata.folders.folder.folderid},0,0,'')"
							href="documentHome.action?metaData.siteID=${siteId}&amp;metaData.parentFolderID=${parentFolderId}"
							>/${column.displaydata.folders.folder.foldername}</a>										
						</td>`
				);
			}
		}
		//Columns type "iSheet Link"
		else if (column.displaydata.hasOwnProperty("isheetitems")) {
			let isheetURL;
			let isheetId;
			if (Array.isArray(column.displaydata.isheetitems.isheetitem)) {
				//Handle multiple items
				tableRow.append(
					`<td id=isheet-item-col-${column.attributecolumnid}></td>`
				);
				let td = $j(
					`div[id=tab${isheetIndex}] #row-${row.itemid} #isheet-item-col-${column.attributecolumnid}`
				);

				column.displaydata.isheetitems.isheetitem.forEach((item) => {
					isheetURL = `${item.apilink}`;
					isheetId = isheetURL.match(/\/isheet\/(\d+)\//);
					td.append(
						`<p>
						<span
						   class="nextPreviousSpan nextPreviousParent"
						   siteid=${siteId}
						   sheetid=${sheetId}
						   itemid=${item.recordid}
						   ><a
							   href="javascript:void(0);"
							   onclick="AddSheetItemCollection.viewItemModalForinjectItem(${item.recordid},${siteId},${isheetId[1]},1,1,true,this);return false;"
							   >${item.linkname}</a
						   ></a></span></p>`
					);
				});
			} else {
				isheetURL = `${column.displaydata.isheetitems.isheetitem.apilink}`;
				isheetId = isheetURL.match(/\/isheet\/(\d+)\//);
				tableRow.append(
					`<td>
					   <span
					   class="nextPreviousSpan nextPreviousParent"
					   siteid=${siteId}
					   sheetid=${sheetId}
					   itemid=${column.displaydata.isheetitems.isheetitem.recordid}
					   ><a
						   href="javascript:void(0);"
						   onclick="AddSheetItemCollection.viewItemModalForinjectItem(${column.displaydata.isheetitems.isheetitem.recordid},${siteId},${isheetId[1]},1,1,true,this);return false;"
						   >${column.displaydata.isheetitems.isheetitem.linkname}</a
					   ></a></span>
						   </td>`
				);
			}
		}
		//TODO: Columns type "Attachment"
		// else if (column.displaydata.hasOwnProperty("attachments")) {
		// }
		else {
			tableRow.append(`<td></td>`);
		}
	});
};

const sendUserToAddRecordHS = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const siteId = urlParams.get("metaData.siteID");
	let activeTab = document.querySelector(".tab-list-item.active");
	let tabName = activeTab.textContent;
	tablesMetadata.some((site) => {
		if (tabName == site.sheetName) {
			window.open(
				`https://www.extranet.ag/ag/sheetHome.action?metaData.siteID=${siteId}&metaData.sheetId=${site.sheetId}`,
				"_blank"
			);
		}
	});
};

/*Function to add in the Announcements section of the site. It observs DOM changes in the iSheet module
and detects if the user has been redirected from the tables to edit a record. It then opens up the edit modal*/
const handleAgTablesIsheetFunctionalitiesHS = () => {
	const urlParams = new URLSearchParams(window.location.search);
	//Select body tag for the iSheet module to be observed
	const isheetBody = document.querySelector("body.iSheets");
	// Options for the observer (which mutations to observe)
	const config = { attributes: true, childList: true, subtree: true };
	let itemNum = null;

	// Callback function to execute when mutations are observed
	const mutationObserverCallback = () => {
		const itemId = urlParams.get("editItemId");
		const sheetId = urlParams.get("metaData.sheetId");
		const siteId = urlParams.get("metaData.siteID");
		const viewId = urlParams.get("metaData.sheetViewID");

		if (itemId !== null) {
			if (itemNum != itemId) {
				itemNum = itemId;
				AddSheetItemCollection.editItem(itemNum, sheetId, siteId, viewId);
			}
		}
	};
	// Create an observer instance to watch for changes to the DOM
	const observer = new MutationObserver(mutationObserverCallback);

	// Start observing the DOM for mutations
	observer.observe(isheetBody, config);
};
