!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";var r=n(3),o=Object.prototype.toString;function i(e){return Array.isArray(e)}function s(e){return void 0===e}function a(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function f(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:a,isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&a(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:c,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:f,isStream:function(e){return u(e)&&f(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t,n){"use strict";var r=n(0),o=n(17),i=n(5),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=n(6)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||c.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},function(e,t,n){"use strict";var r=n(0),o=n(18),i=n(19),s=n(4),a=n(20),u=n(23),c=n(24),f=n(7),l=n(1),p=n(2);e.exports=function(e){return new Promise((function(t,n){var d,h=e.data,m=e.headers,v=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}r.isFormData(h)&&delete m["Content-Type"];var g=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+x)}var w=a(e.baseURL,e.url);function E(){if(g){var r="getAllResponseHeaders"in g?u(g.getAllResponseHeaders()):null,i={data:v&&"text"!==v&&"json"!==v?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:r,config:e,request:g};o((function(e){t(e),y()}),(function(e){n(e),y()}),i),g=null}}if(g.open(e.method.toUpperCase(),s(w,e.params,e.paramsSerializer),!0),g.timeout=e.timeout,"onloadend"in g?g.onloadend=E:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(E)},g.onabort=function(){g&&(n(f("Request aborted",e,"ECONNABORTED",g)),g=null)},g.onerror=function(){n(f("Network Error",e,null,g)),g=null},g.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},r.isStandardBrowserEnv()){var O=(e.withCredentials||c(w))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;O&&(m[e.xsrfHeaderName]=O)}"setRequestHeader"in g&&r.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:g.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(g.withCredentials=!!e.withCredentials),v&&"json"!==v&&(g.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&g.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){g&&(n(!e||e&&e.type?new p("canceled"):e),g.abort(),g=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),h||(h=null),g.send(h)}))}},function(e,t,n){"use strict";var r=n(5);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function u(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||i,o=t(e);r.isUndefined(o)&&t!==u||(n[e]=o)})),n}},function(e,t){e.exports={version:"0.26.0"}},function(e,t,n){e.exports=n(12)},function(e,t,n){"use strict";var r=n(0),o=n(3),i=n(13),s=n(9);var a=function e(t){var n=new i(t),a=o(i.prototype.request,n);return r.extend(a,i.prototype,n),r.extend(a,n),a.create=function(n){return e(s(t,n))},a}(n(1));a.Axios=i,a.Cancel=n(2),a.CancelToken=n(26),a.isCancel=n(8),a.VERSION=n(10).version,a.all=function(e){return Promise.all(e)},a.spread=n(27),a.isAxiosError=n(28),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";var r=n(0),o=n(4),i=n(14),s=n(15),a=n(9),u=n(25),c=u.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,f=[];if(this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)})),!o){var l=[s,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(f),i=Promise.resolve(t);l.length;)i=i.then(l.shift(),l.shift());return i}for(var p=t;r.length;){var d=r.shift(),h=r.shift();try{p=d(p)}catch(e){h(e);break}}try{i=s(p)}catch(e){return Promise.reject(e)}for(;f.length;)i=i.then(f.shift(),f.shift());return i},f.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,n,r){return this.request(a(r||{},{method:e,url:t,data:n}))}})),e.exports=f},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(16),i=n(8),s=n(1),a=n(2);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0),o=n(1);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(21),o=n(22);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(10).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,s){if(!1===e)throw new Error(o(r," has been removed"+(t?" in "+t:"")));return t&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:o}},function(e,t,n){"use strict";var r=n(2);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}}])}))
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(l,z,A){l instanceof String&&(l=String(l));for(var q=l.length,E=0;E<q;E++){var P=l[E];if(z.call(A,P,E,l))return{i:E,v:P}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(l,z,A){if(l==Array.prototype||l==Object.prototype)return l;l[z]=A.value;return l};$jscomp.getGlobal=function(l){l=["object"==typeof globalThis&&globalThis,l,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var z=0;z<l.length;++z){var A=l[z];if(A&&A.Math==Math)return A}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(l,z){var A=$jscomp.propertyToPolyfillSymbol[z];if(null==A)return l[z];A=l[A];return void 0!==A?A:l[z]};
$jscomp.polyfill=function(l,z,A,q){z&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(l,z,A,q):$jscomp.polyfillUnisolated(l,z,A,q))};$jscomp.polyfillUnisolated=function(l,z,A,q){A=$jscomp.global;l=l.split(".");for(q=0;q<l.length-1;q++){var E=l[q];if(!(E in A))return;A=A[E]}l=l[l.length-1];q=A[l];z=z(q);z!=q&&null!=z&&$jscomp.defineProperty(A,l,{configurable:!0,writable:!0,value:z})};
$jscomp.polyfillIsolated=function(l,z,A,q){var E=l.split(".");l=1===E.length;q=E[0];q=!l&&q in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var P=0;P<E.length-1;P++){var ma=E[P];if(!(ma in q))return;q=q[ma]}E=E[E.length-1];A=$jscomp.IS_SYMBOL_NATIVE&&"es6"===A?q[E]:null;z=z(A);null!=z&&(l?$jscomp.defineProperty($jscomp.polyfills,E,{configurable:!0,writable:!0,value:z}):z!==A&&($jscomp.propertyToPolyfillSymbol[E]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(E):$jscomp.POLYFILL_PREFIX+E,
E=$jscomp.propertyToPolyfillSymbol[E],$jscomp.defineProperty(q,E,{configurable:!0,writable:!0,value:z})))};$jscomp.polyfill("Array.prototype.find",function(l){return l?l:function(z,A){return $jscomp.findInternal(this,z,A).v}},"es6","es3");
(function(l){"function"===typeof define&&define.amd?define(["jquery"],function(z){return l(z,window,document)}):"object"===typeof exports?module.exports=function(z,A){z||(z=window);A||(A="undefined"!==typeof window?require("jquery"):require("jquery")(z));return l(A,z,z.document)}:window.DataTable=l(jQuery,window,document)})(function(l,z,A,q){function E(a){var b,c,d={};l.each(a,function(e,h){(b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" ")&&(c=e.replace(b[0],
b[2].toLowerCase()),d[c]=e,"o"===b[1]&&E(a[e]))});a._hungarianMap=d}function P(a,b,c){a._hungarianMap||E(a);var d;l.each(b,function(e,h){d=a._hungarianMap[e];d===q||!c&&b[d]!==q||("o"===d.charAt(0)?(b[d]||(b[d]={}),l.extend(!0,b[d],b[e]),P(a[d],b[d],c)):b[d]=b[e])})}function ma(a){var b=u.defaults.oLanguage,c=b.sDecimal;c&&Xa(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&d&&"No data available in table"===b.sEmptyTable&&X(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&d&&"Loading..."===b.sLoadingRecords&&
X(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&Xa(a)}}function zb(a){S(a,"ordering","bSort");S(a,"orderMulti","bSortMulti");S(a,"orderClasses","bSortClasses");S(a,"orderCellsTop","bSortCellsTop");S(a,"order","aaSorting");S(a,"orderFixed","aaSortingFixed");S(a,"paging","bPaginate");S(a,"pagingType","sPaginationType");S(a,"pageLength","iDisplayLength");S(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":
"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&P(u.models.oSearch,a[b])}function Ab(a){S(a,"orderable","bSortable");S(a,"orderData","aDataSort");S(a,"orderSequence","asSorting");S(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"!==typeof b||Array.isArray(b)||(a.aDataSort=[b])}function Bb(a){if(!u.__browser){var b={};u.__browser=b;var c=l("<div/>").css({position:"fixed",top:0,left:-1*l(z).scrollLeft(),height:1,
width:1,overflow:"hidden"}).append(l("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(l("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}l.extend(a.oBrowser,u.__browser);a.oScroll.iBarWidth=u.__browser.barWidth}
function Cb(a,b,c,d,e,h){var f=!1;if(c!==q){var g=c;f=!0}for(;d!==e;)a.hasOwnProperty(d)&&(g=f?b(g,a[d],d,a):a[d],f=!0,d+=h);return g}function Ya(a,b){var c=u.defaults.column,d=a.aoColumns.length;c=l.extend({},u.models.oColumn,c,{nTh:b?b:A.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=l.extend({},u.models.oSearch,c[d]);Ga(a,d,l(b).data())}function Ga(a,b,c){b=a.aoColumns[b];
var d=a.oClasses,e=l(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var h=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);h&&(b.sWidthOrig=h[1])}c!==q&&null!==c&&(Ab(c),P(u.defaults.column,c,!0),c.mDataProp===q||c.mData||(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),l.extend(b,c),X(b,c,"sWidth","sWidthOrig"),c.iDataSort!==q&&(b.aDataSort=[c.iDataSort]),X(b,c,"aDataSort"));var f=b.mData,g=na(f),
k=b.mRender?na(b.mRender):null;c=function(m){return"string"===typeof m&&-1!==m.indexOf("@")};b._bAttrSrc=l.isPlainObject(f)&&(c(f.sort)||c(f.type)||c(f.filter));b._setter=null;b.fnGetData=function(m,n,p){var t=g(m,n,q,p);return k&&n?k(t,n,m,p):t};b.fnSetData=function(m,n,p){return ha(f)(m,n,p)};"number"!==typeof f&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==l.inArray("asc",b.asSorting);c=-1!==l.inArray("desc",b.asSorting);b.bSortable&&(a||c)?a&&!c?
(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI):(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI="")}function sa(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Za(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;""===b.sY&&""===b.sX||Ha(a);F(a,null,"column-sizing",[a])}function ta(a,b){a=Ia(a,"bVisible");
return"number"===typeof a[b]?a[b]:null}function ua(a,b){a=Ia(a,"bVisible");b=l.inArray(b,a);return-1!==b?b:null}function oa(a){var b=0;l.each(a.aoColumns,function(c,d){d.bVisible&&"none"!==l(d.nTh).css("display")&&b++});return b}function Ia(a,b){var c=[];l.map(a.aoColumns,function(d,e){d[b]&&c.push(e)});return c}function $a(a){var b=a.aoColumns,c=a.aoData,d=u.ext.type.detect,e,h,f;var g=0;for(e=b.length;g<e;g++){var k=b[g];var m=[];if(!k.sType&&k._sManualType)k.sType=k._sManualType;else if(!k.sType){var n=
0;for(h=d.length;n<h;n++){var p=0;for(f=c.length;p<f;p++){m[p]===q&&(m[p]=T(a,p,g,"type"));var t=d[n](m[p],a);if(!t&&n!==d.length-1)break;if("html"===t&&!Z(m[p]))break}if(t){k.sType=t;break}}k.sType||(k.sType="string")}}}function Db(a,b,c,d){var e,h,f,g=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){var k=b[e];var m=k.targets!==q?k.targets:k.aTargets;Array.isArray(m)||(m=[m]);var n=0;for(h=m.length;n<h;n++)if("number"===typeof m[n]&&0<=m[n]){for(;g.length<=m[n];)Ya(a);d(m[n],k)}else if("number"===typeof m[n]&&
0>m[n])d(g.length+m[n],k);else if("string"===typeof m[n]){var p=0;for(f=g.length;p<f;p++)("_all"==m[n]||l(g[p].nTh).hasClass(m[n]))&&d(p,k)}}if(c)for(e=0,a=c.length;e<a;e++)d(e,c[e])}function ia(a,b,c,d){var e=a.aoData.length,h=l.extend(!0,{},u.models.oRow,{src:c?"dom":"data",idx:e});h._aData=b;a.aoData.push(h);for(var f=a.aoColumns,g=0,k=f.length;g<k;g++)f[g].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==q&&(a.aIds[b]=h);!c&&a.oFeatures.bDeferRender||ab(a,e,c,d);return e}function Ja(a,
b){var c;b instanceof l||(b=l(b));return b.map(function(d,e){c=bb(a,e);return ia(a,c.data,e,c.cells)})}function T(a,b,c,d){"search"===d?d="filter":"order"===d&&(d="sort");var e=a.iDraw,h=a.aoColumns[c],f=a.aoData[b]._aData,g=h.sDefaultContent,k=h.fnGetData(f,d,{settings:a,row:b,col:c});if(k===q)return a.iDrawError!=e&&null===g&&(da(a,0,"Requested unknown parameter "+("function"==typeof h.mData?"{function}":"'"+h.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),g;if((k===f||null===k)&&null!==
g&&d!==q)k=g;else if("function"===typeof k)return k.call(f);if(null===k&&"display"===d)return"";"filter"===d&&(a=u.ext.type.search,a[h.sType]&&(k=a[h.sType](k)));return k}function Eb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function cb(a){return l.map(a.match(/(\\.|[^\.])+/g)||[""],function(b){return b.replace(/\\\./g,".")})}function db(a){return U(a.aoData,"_aData")}function Ka(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}
function La(a,b,c){for(var d=-1,e=0,h=a.length;e<h;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===q&&a.splice(d,1)}function va(a,b,c,d){var e=a.aoData[b],h,f=function(k,m){for(;k.childNodes.length;)k.removeChild(k.firstChild);k.innerHTML=T(a,b,m,"display")};if("dom"!==c&&(c&&"auto"!==c||"dom"!==e.src)){var g=e.anCells;if(g)if(d!==q)f(g[d],d);else for(c=0,h=g.length;c<h;c++)f(g[c],c)}else e._aData=bb(a,e,d,d===q?q:e._aData).data;e._aSortData=null;e._aFilterData=null;f=a.aoColumns;if(d!==q)f[d].sType=null;
else{c=0;for(h=f.length;c<h;c++)f[c].sType=null;eb(a,e)}}function bb(a,b,c,d){var e=[],h=b.firstChild,f,g=0,k,m=a.aoColumns,n=a._rowReadObject;d=d!==q?d:n?{}:[];var p=function(x,w){if("string"===typeof x){var r=x.indexOf("@");-1!==r&&(r=x.substring(r+1),ha(x)(d,w.getAttribute(r)))}},t=function(x){if(c===q||c===g)f=m[g],k=x.innerHTML.trim(),f&&f._bAttrSrc?(ha(f.mData._)(d,k),p(f.mData.sort,x),p(f.mData.type,x),p(f.mData.filter,x)):n?(f._setter||(f._setter=ha(f.mData)),f._setter(d,k)):d[g]=k;g++};if(h)for(;h;){var v=
h.nodeName.toUpperCase();if("TD"==v||"TH"==v)t(h),e.push(h);h=h.nextSibling}else for(e=b.anCells,h=0,v=e.length;h<v;h++)t(e[h]);(b=b.firstChild?b:b.nTr)&&(b=b.getAttribute("id"))&&ha(a.rowId)(d,b);return{data:d,cells:e}}function ab(a,b,c,d){var e=a.aoData[b],h=e._aData,f=[],g,k;if(null===e.nTr){var m=c||A.createElement("tr");e.nTr=m;e.anCells=f;m._DT_RowIndex=b;eb(a,e);var n=0;for(g=a.aoColumns.length;n<g;n++){var p=a.aoColumns[n];e=(k=c?!1:!0)?A.createElement(p.sCellType):d[n];e._DT_CellIndex={row:b,
column:n};f.push(e);if(k||!(!p.mRender&&p.mData===n||l.isPlainObject(p.mData)&&p.mData._===n+".display"))e.innerHTML=T(a,b,n,"display");p.sClass&&(e.className+=" "+p.sClass);p.bVisible&&!c?m.appendChild(e):!p.bVisible&&c&&e.parentNode.removeChild(e);p.fnCreatedCell&&p.fnCreatedCell.call(a.oInstance,e,T(a,b,n),h,b,n)}F(a,"aoRowCreatedCallback",null,[m,h,b,f])}}function eb(a,b){var c=b.nTr,d=b._aData;if(c){if(a=a.rowIdFn(d))c.id=a;d.DT_RowClass&&(a=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?Ma(b.__rowc.concat(a)):
a,l(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&l(c).attr(d.DT_RowAttr);d.DT_RowData&&l(c).data(d.DT_RowData)}}function Fb(a){var b,c,d=a.nTHead,e=a.nTFoot,h=0===l("th, td",d).length,f=a.oClasses,g=a.aoColumns;h&&(c=l("<tr/>").appendTo(d));var k=0;for(b=g.length;k<b;k++){var m=g[k];var n=l(m.nTh).addClass(m.sClass);h&&n.appendTo(c);a.oFeatures.bSort&&(n.addClass(m.sSortingClass),!1!==m.bSortable&&(n.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),fb(a,m.nTh,
k)));m.sTitle!=n[0].innerHTML&&n.html(m.sTitle);gb(a,"header")(a,n,m,f)}h&&wa(a.aoHeader,d);l(d).children("tr").children("th, td").addClass(f.sHeaderTH);l(e).children("tr").children("th, td").addClass(f.sFooterTH);if(null!==e)for(a=a.aoFooter[0],k=0,b=a.length;k<b;k++)m=g[k],m.nTf=a[k].cell,m.sClass&&l(m.nTf).addClass(m.sClass)}function xa(a,b,c){var d,e,h=[],f=[],g=a.aoColumns.length;if(b){c===q&&(c=!1);var k=0;for(d=b.length;k<d;k++){h[k]=b[k].slice();h[k].nTr=b[k].nTr;for(e=g-1;0<=e;e--)a.aoColumns[e].bVisible||
c||h[k].splice(e,1);f.push([])}k=0;for(d=h.length;k<d;k++){if(a=h[k].nTr)for(;e=a.firstChild;)a.removeChild(e);e=0;for(b=h[k].length;e<b;e++){var m=g=1;if(f[k][e]===q){a.appendChild(h[k][e].cell);for(f[k][e]=1;h[k+g]!==q&&h[k][e].cell==h[k+g][e].cell;)f[k+g][e]=1,g++;for(;h[k][e+m]!==q&&h[k][e].cell==h[k][e+m].cell;){for(c=0;c<g;c++)f[k+c][e+m]=1;m++}l(h[k][e].cell).attr("rowspan",g).attr("colspan",m)}}}}}function ja(a,b){var c="ssp"==Q(a),d=a.iInitDisplayStart;d!==q&&-1!==d&&(a._iDisplayStart=c?
d:d>=a.fnRecordsDisplay()?0:d,a.iInitDisplayStart=-1);c=F(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==l.inArray(!1,c))V(a,!1);else{c=[];var e=0;d=a.asStripeClasses;var h=d.length,f=a.oLanguage,g="ssp"==Q(a),k=a.aiDisplay,m=a._iDisplayStart,n=a.fnDisplayEnd();a.bDrawing=!0;if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,V(a,!1);else if(!g)a.iDraw++;else if(!a.bDestroying&&!b){Gb(a);return}if(0!==k.length)for(b=g?a.aoData.length:n,f=g?0:m;f<b;f++){g=k[f];var p=a.aoData[g];null===p.nTr&&ab(a,g);var t=
p.nTr;if(0!==h){var v=d[e%h];p._sRowStripe!=v&&(l(t).removeClass(p._sRowStripe).addClass(v),p._sRowStripe=v)}F(a,"aoRowCallback",null,[t,p._aData,e,f,g]);c.push(t);e++}else e=f.sZeroRecords,1==a.iDraw&&"ajax"==Q(a)?e=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(e=f.sEmptyTable),c[0]=l("<tr/>",{"class":h?d[0]:""}).append(l("<td />",{valign:"top",colSpan:oa(a),"class":a.oClasses.sRowEmpty}).html(e))[0];F(a,"aoHeaderCallback","header",[l(a.nTHead).children("tr")[0],db(a),m,n,k]);F(a,"aoFooterCallback",
"footer",[l(a.nTFoot).children("tr")[0],db(a),m,n,k]);d=l(a.nTBody);d.children().detach();d.append(l(c));F(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function ka(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&Hb(a);d?ya(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;ja(a);a._drawHold=!1}function Ib(a){var b=a.oClasses,c=l(a.nTable);c=l("<div/>").insertBefore(c);var d=a.oFeatures,e=l("<div/>",{id:a.sTableId+"_wrapper",
"class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var h=a.sDom.split(""),f,g,k,m,n,p,t=0;t<h.length;t++){f=null;g=h[t];if("<"==g){k=l("<div/>")[0];m=h[t+1];if("'"==m||'"'==m){n="";for(p=2;h[t+p]!=m;)n+=h[t+p],p++;"H"==n?n=b.sJUIHeader:"F"==n&&(n=b.sJUIFooter);-1!=n.indexOf(".")?(m=n.split("."),k.id=m[0].substr(1,m[0].length-1),k.className=m[1]):"#"==n.charAt(0)?k.id=n.substr(1,n.length-1):k.className=n;t+=p}e.append(k);
e=l(k)}else if(">"==g)e=e.parent();else if("l"==g&&d.bPaginate&&d.bLengthChange)f=Jb(a);else if("f"==g&&d.bFilter)f=Kb(a);else if("r"==g&&d.bProcessing)f=Lb(a);else if("t"==g)f=Mb(a);else if("i"==g&&d.bInfo)f=Nb(a);else if("p"==g&&d.bPaginate)f=Ob(a);else if(0!==u.ext.feature.length)for(k=u.ext.feature,p=0,m=k.length;p<m;p++)if(g==k[p].cFeature){f=k[p].fnInit(a);break}f&&(k=a.aanFeatures,k[g]||(k[g]=[]),k[g].push(f),e.append(f))}c.replaceWith(e);a.nHolding=null}function wa(a,b){b=l(b).children("tr");
var c,d,e;a.splice(0,a.length);var h=0;for(e=b.length;h<e;h++)a.push([]);h=0;for(e=b.length;h<e;h++){var f=b[h];for(c=f.firstChild;c;){if("TD"==c.nodeName.toUpperCase()||"TH"==c.nodeName.toUpperCase()){var g=1*c.getAttribute("colspan");var k=1*c.getAttribute("rowspan");g=g&&0!==g&&1!==g?g:1;k=k&&0!==k&&1!==k?k:1;var m=0;for(d=a[h];d[m];)m++;var n=m;var p=1===g?!0:!1;for(d=0;d<g;d++)for(m=0;m<k;m++)a[h+m][n+d]={cell:c,unique:p},a[h+m].nTr=f}c=c.nextSibling}}}function Na(a,b,c){var d=[];c||(c=a.aoHeader,
b&&(c=[],wa(c,b)));b=0;for(var e=c.length;b<e;b++)for(var h=0,f=c[b].length;h<f;h++)!c[b][h].unique||d[h]&&a.bSortCellsTop||(d[h]=c[b][h].cell);return d}function Oa(a,b,c){F(a,"aoServerParams","serverParams",[b]);if(b&&Array.isArray(b)){var d={},e=/(.*?)\[\]$/;l.each(b,function(n,p){(n=p.name.match(e))?(n=n[0],d[n]||(d[n]=[]),d[n].push(p.value)):d[p.name]=p.value});b=d}var h=a.ajax,f=a.oInstance,g=function(n){var p=a.jqXHR?a.jqXHR.status:null;if(null===n||"number"===typeof p&&204==p)n={},za(a,n,[]);
(p=n.error||n.sError)&&da(a,0,p);a.json=n;F(a,null,"xhr",[a,n,a.jqXHR]);c(n)};if(l.isPlainObject(h)&&h.data){var k=h.data;var m="function"===typeof k?k(b,a):k;b="function"===typeof k&&m?m:l.extend(!0,b,m);delete h.data}m={data:b,success:g,dataType:"json",cache:!1,type:a.sServerMethod,error:function(n,p,t){t=F(a,null,"xhr",[a,null,a.jqXHR]);-1===l.inArray(!0,t)&&("parsererror"==p?da(a,0,"Invalid JSON response",1):4===n.readyState&&da(a,0,"Ajax error",7));V(a,!1)}};a.oAjaxData=b;F(a,null,"preXhr",[a,
b]);a.fnServerData?a.fnServerData.call(f,a.sAjaxSource,l.map(b,function(n,p){return{name:p,value:n}}),g,a):a.sAjaxSource||"string"===typeof h?a.jqXHR=l.ajax(l.extend(m,{url:h||a.sAjaxSource})):"function"===typeof h?a.jqXHR=h.call(f,b,g,a):(a.jqXHR=l.ajax(l.extend(m,h)),h.data=k)}function Gb(a){a.iDraw++;V(a,!0);Oa(a,Pb(a),function(b){Qb(a,b)})}function Pb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,h=a.aoPreSearchCols,f=[],g=pa(a);var k=a._iDisplayStart;var m=!1!==d.bPaginate?
a._iDisplayLength:-1;var n=function(x,w){f.push({name:x,value:w})};n("sEcho",a.iDraw);n("iColumns",c);n("sColumns",U(b,"sName").join(","));n("iDisplayStart",k);n("iDisplayLength",m);var p={draw:a.iDraw,columns:[],order:[],start:k,length:m,search:{value:e.sSearch,regex:e.bRegex}};for(k=0;k<c;k++){var t=b[k];var v=h[k];m="function"==typeof t.mData?"function":t.mData;p.columns.push({data:m,name:t.sName,searchable:t.bSearchable,orderable:t.bSortable,search:{value:v.sSearch,regex:v.bRegex}});n("mDataProp_"+
k,m);d.bFilter&&(n("sSearch_"+k,v.sSearch),n("bRegex_"+k,v.bRegex),n("bSearchable_"+k,t.bSearchable));d.bSort&&n("bSortable_"+k,t.bSortable)}d.bFilter&&(n("sSearch",e.sSearch),n("bRegex",e.bRegex));d.bSort&&(l.each(g,function(x,w){p.order.push({column:w.col,dir:w.dir});n("iSortCol_"+x,w.col);n("sSortDir_"+x,w.dir)}),n("iSortingCols",g.length));b=u.ext.legacy.ajax;return null===b?a.sAjaxSource?f:p:b?f:p}function Qb(a,b){var c=function(f,g){return b[f]!==q?b[f]:b[g]},d=za(a,b),e=c("sEcho","draw"),h=
c("iTotalRecords","recordsTotal");c=c("iTotalDisplayRecords","recordsFiltered");if(e!==q){if(1*e<a.iDraw)return;a.iDraw=1*e}d||(d=[]);Ka(a);a._iRecordsTotal=parseInt(h,10);a._iRecordsDisplay=parseInt(c,10);e=0;for(h=d.length;e<h;e++)ia(a,d[e]);a.aiDisplay=a.aiDisplayMaster.slice();ja(a,!0);a._bInitComplete||Pa(a,b);V(a,!1)}function za(a,b,c){a=l.isPlainObject(a.ajax)&&a.ajax.dataSrc!==q?a.ajax.dataSrc:a.sAjaxDataProp;if(!c)return"data"===a?b.aaData||b[a]:""!==a?na(a)(b):b;ha(a)(b,c)}function Kb(a){var b=
a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,h=a.aanFeatures,f='<input type="search" class="'+b.sFilterInput+'"/>',g=d.sSearch;g=g.match(/_INPUT_/)?g.replace("_INPUT_",f):g+f;b=l("<div/>",{id:h.f?null:c+"_filter","class":b.sFilter}).append(l("<label/>").append(g));var k=function(n){var p=this.value?this.value:"";e.return&&"Enter"!==n.key||p==e.sSearch||(ya(a,{sSearch:p,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive,"return":e.return}),a._iDisplayStart=0,ja(a))};h=
null!==a.searchDelay?a.searchDelay:"ssp"===Q(a)?400:0;var m=l("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",h?hb(k,h):k).on("mouseup",function(n){setTimeout(function(){k.call(m[0],n)},10)}).on("keypress.DT",function(n){if(13==n.keyCode)return!1}).attr("aria-controls",c);l(a.nTable).on("search.dt.DT",function(n,p){if(a===p)try{m[0]!==A.activeElement&&m.val(e.sSearch)}catch(t){}});return b[0]}function ya(a,b,c){var d=a.oPreviousSearch,
e=a.aoPreSearchCols,h=function(g){d.sSearch=g.sSearch;d.bRegex=g.bRegex;d.bSmart=g.bSmart;d.bCaseInsensitive=g.bCaseInsensitive;d.return=g.return},f=function(g){return g.bEscapeRegex!==q?!g.bEscapeRegex:g.bRegex};$a(a);if("ssp"!=Q(a)){Rb(a,b.sSearch,c,f(b),b.bSmart,b.bCaseInsensitive,b.return);h(b);for(b=0;b<e.length;b++)Sb(a,e[b].sSearch,b,f(e[b]),e[b].bSmart,e[b].bCaseInsensitive);Tb(a)}else h(b);a.bFiltered=!0;F(a,null,"search",[a])}function Tb(a){for(var b=u.ext.search,c=a.aiDisplay,d,e,h=0,f=
b.length;h<f;h++){for(var g=[],k=0,m=c.length;k<m;k++)e=c[k],d=a.aoData[e],b[h](a,d._aFilterData,e,d._aData,k)&&g.push(e);c.length=0;l.merge(c,g)}}function Sb(a,b,c,d,e,h){if(""!==b){var f=[],g=a.aiDisplay;d=ib(b,d,e,h);for(e=0;e<g.length;e++)b=a.aoData[g[e]]._aFilterData[c],d.test(b)&&f.push(g[e]);a.aiDisplay=f}}function Rb(a,b,c,d,e,h){e=ib(b,d,e,h);var f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster;h=[];0!==u.ext.search.length&&(c=!0);var k=Ub(a);if(0>=b.length)a.aiDisplay=g.slice();else{if(k||
c||d||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)e.test(a.aoData[b[c]]._sFilterRow)&&h.push(b[c]);a.aiDisplay=h}}function ib(a,b,c,d){a=b?a:jb(a);c&&(a="^(?=.*?"+l.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(e){if('"'===e.charAt(0)){var h=e.match(/^"(.*)"$/);e=h?h[1]:e}return e.replace('"',"")}).join(")(?=.*?")+").*$");return new RegExp(a,d?"i":"")}function Ub(a){var b=a.aoColumns,c,d;var e=!1;var h=0;for(c=a.aoData.length;h<c;h++){var f=
a.aoData[h];if(!f._aFilterData){var g=[];e=0;for(d=b.length;e<d;e++){var k=b[e];k.bSearchable?(k=T(a,h,e,"filter"),null===k&&(k=""),"string"!==typeof k&&k.toString&&(k=k.toString())):k="";k.indexOf&&-1!==k.indexOf("&")&&(Qa.innerHTML=k,k=tc?Qa.textContent:Qa.innerText);k.replace&&(k=k.replace(/[\r\n\u2028]/g,""));g.push(k)}f._aFilterData=g;f._sFilterRow=g.join("  ");e=!0}}return e}function Vb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Wb(a){return{sSearch:a.search,
bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function Nb(a){var b=a.sTableId,c=a.aanFeatures.i,d=l("<div/>",{"class":a.oClasses.sInfo,id:c?null:b+"_info"});c||(a.aoDrawCallback.push({fn:Xb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),l(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Xb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),h=a.fnRecordsTotal(),f=a.fnRecordsDisplay(),g=
f?c.sInfo:c.sInfoEmpty;f!==h&&(g+=" "+c.sInfoFiltered);g+=c.sInfoPostFix;g=Yb(a,g);c=c.fnInfoCallback;null!==c&&(g=c.call(a.oInstance,a,d,e,h,f,g));l(b).html(g)}}function Yb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,h=a.fnRecordsDisplay(),f=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,h)).replace(/_PAGE_/g,c.call(a,f?1:Math.ceil(d/e))).replace(/_PAGES_/g,
c.call(a,f?1:Math.ceil(h/e)))}function Aa(a){var b=a.iInitDisplayStart,c=a.aoColumns;var d=a.oFeatures;var e=a.bDeferLoading;if(a.bInitialised){Ib(a);Fb(a);xa(a,a.aoHeader);xa(a,a.aoFooter);V(a,!0);d.bAutoWidth&&Za(a);var h=0;for(d=c.length;h<d;h++){var f=c[h];f.sWidth&&(f.nTh.style.width=K(f.sWidth))}F(a,null,"preInit",[a]);ka(a);c=Q(a);if("ssp"!=c||e)"ajax"==c?Oa(a,[],function(g){var k=za(a,g);for(h=0;h<k.length;h++)ia(a,k[h]);a.iInitDisplayStart=b;ka(a);V(a,!1);Pa(a,g)},a):(V(a,!1),Pa(a))}else setTimeout(function(){Aa(a)},
200)}function Pa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&sa(a);F(a,null,"plugin-init",[a,b]);F(a,"aoInitComplete","init",[a,b])}function kb(a,b){b=parseInt(b,10);a._iDisplayLength=b;lb(a);F(a,null,"length",[a,b])}function Jb(a){var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=Array.isArray(d[0]),h=e?d[0]:d;d=e?d[1]:d;e=l("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect});for(var f=0,g=h.length;f<g;f++)e[0][f]=new Option("number"===typeof d[f]?a.fnFormatNumber(d[f]):d[f],
h[f]);var k=l("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(k[0].id=c+"_length");k.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));l("select",k).val(a._iDisplayLength).on("change.DT",function(m){kb(a,l(this).val());ja(a)});l(a.nTable).on("length.dt.DT",function(m,n,p){a===n&&l("select",k).val(p)});return k[0]}function Ob(a){var b=a.sPaginationType,c=u.ext.pager[b],d="function"===typeof c,e=function(f){ja(f)};b=l("<div/>").addClass(a.oClasses.sPaging+b)[0];
var h=a.aanFeatures;d||c.fnInit(a,b,e);h.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(f){if(d){var g=f._iDisplayStart,k=f._iDisplayLength,m=f.fnRecordsDisplay(),n=-1===k;g=n?0:Math.ceil(g/k);k=n?1:Math.ceil(m/k);m=c(g,k);var p;n=0;for(p=h.p.length;n<p;n++)gb(f,"pageButton")(f,h.p[n],n,m,g,k)}else c.fnUpdate(f,e)},sName:"pagination"}));return b}function Ra(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,h=a.fnRecordsDisplay();0===h||-1===e?d=0:"number"===typeof b?(d=b*e,d>h&&
(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<h&&(d+=e):"last"==b?d=Math.floor((h-1)/e)*e:da(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(F(a,null,"page",[a]),c&&ja(a));return b}function Lb(a){return l("<div/>",{id:a.aanFeatures.r?null:a.sTableId+"_processing","class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function V(a,b){a.oFeatures.bProcessing&&l(a.aanFeatures.r).css("display",b?"block":"none");
F(a,null,"processing",[a,b])}function Mb(a){var b=l(a.nTable),c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,h=a.oClasses,f=b.children("caption"),g=f.length?f[0]._captionSide:null,k=l(b[0].cloneNode(!1)),m=l(b[0].cloneNode(!1)),n=b.children("tfoot");n.length||(n=null);k=l("<div/>",{"class":h.sScrollWrapper}).append(l("<div/>",{"class":h.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?d?K(d):null:"100%"}).append(l("<div/>",{"class":h.sScrollHeadInner}).css({"box-sizing":"content-box",
width:c.sXInner||"100%"}).append(k.removeAttr("id").css("margin-left",0).append("top"===g?f:null).append(b.children("thead"))))).append(l("<div/>",{"class":h.sScrollBody}).css({position:"relative",overflow:"auto",width:d?K(d):null}).append(b));n&&k.append(l("<div/>",{"class":h.sScrollFoot}).css({overflow:"hidden",border:0,width:d?d?K(d):null:"100%"}).append(l("<div/>",{"class":h.sScrollFootInner}).append(m.removeAttr("id").css("margin-left",0).append("bottom"===g?f:null).append(b.children("tfoot")))));
b=k.children();var p=b[0];h=b[1];var t=n?b[2]:null;if(d)l(h).on("scroll.DT",function(v){v=this.scrollLeft;p.scrollLeft=v;n&&(t.scrollLeft=v)});l(h).css("max-height",e);c.bCollapse||l(h).css("height",e);a.nScrollHead=p;a.nScrollBody=h;a.nScrollFoot=t;a.aoDrawCallback.push({fn:Ha,sName:"scrolling"});return k[0]}function Ha(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY;b=b.iBarWidth;var h=l(a.nScrollHead),f=h[0].style,g=h.children("div"),k=g[0].style,m=g.children("table");g=a.nScrollBody;var n=l(g),p=
g.style,t=l(a.nScrollFoot).children("div"),v=t.children("table"),x=l(a.nTHead),w=l(a.nTable),r=w[0],C=r.style,G=a.nTFoot?l(a.nTFoot):null,aa=a.oBrowser,L=aa.bScrollOversize;U(a.aoColumns,"nTh");var O=[],I=[],H=[],ea=[],Y,Ba=function(D){D=D.style;D.paddingTop="0";D.paddingBottom="0";D.borderTopWidth="0";D.borderBottomWidth="0";D.height=0};var fa=g.scrollHeight>g.clientHeight;if(a.scrollBarVis!==fa&&a.scrollBarVis!==q)a.scrollBarVis=fa,sa(a);else{a.scrollBarVis=fa;w.children("thead, tfoot").remove();
if(G){var ba=G.clone().prependTo(w);var la=G.find("tr");ba=ba.find("tr")}var mb=x.clone().prependTo(w);x=x.find("tr");fa=mb.find("tr");mb.find("th, td").removeAttr("tabindex");c||(p.width="100%",h[0].style.width="100%");l.each(Na(a,mb),function(D,W){Y=ta(a,D);W.style.width=a.aoColumns[Y].sWidth});G&&ca(function(D){D.style.width=""},ba);h=w.outerWidth();""===c?(C.width="100%",L&&(w.find("tbody").height()>g.offsetHeight||"scroll"==n.css("overflow-y"))&&(C.width=K(w.outerWidth()-b)),h=w.outerWidth()):
""!==d&&(C.width=K(d),h=w.outerWidth());ca(Ba,fa);ca(function(D){var W=z.getComputedStyle?z.getComputedStyle(D).width:K(l(D).width());H.push(D.innerHTML);O.push(W)},fa);ca(function(D,W){D.style.width=O[W]},x);l(fa).css("height",0);G&&(ca(Ba,ba),ca(function(D){ea.push(D.innerHTML);I.push(K(l(D).css("width")))},ba),ca(function(D,W){D.style.width=I[W]},la),l(ba).height(0));ca(function(D,W){D.innerHTML='<div class="dataTables_sizing">'+H[W]+"</div>";D.childNodes[0].style.height="0";D.childNodes[0].style.overflow=
"hidden";D.style.width=O[W]},fa);G&&ca(function(D,W){D.innerHTML='<div class="dataTables_sizing">'+ea[W]+"</div>";D.childNodes[0].style.height="0";D.childNodes[0].style.overflow="hidden";D.style.width=I[W]},ba);Math.round(w.outerWidth())<Math.round(h)?(la=g.scrollHeight>g.offsetHeight||"scroll"==n.css("overflow-y")?h+b:h,L&&(g.scrollHeight>g.offsetHeight||"scroll"==n.css("overflow-y"))&&(C.width=K(la-b)),""!==c&&""===d||da(a,1,"Possible column misalignment",6)):la="100%";p.width=K(la);f.width=K(la);
G&&(a.nScrollFoot.style.width=K(la));!e&&L&&(p.height=K(r.offsetHeight+b));c=w.outerWidth();m[0].style.width=K(c);k.width=K(c);d=w.height()>g.clientHeight||"scroll"==n.css("overflow-y");e="padding"+(aa.bScrollbarLeft?"Left":"Right");k[e]=d?b+"px":"0px";G&&(v[0].style.width=K(c),t[0].style.width=K(c),t[0].style[e]=d?b+"px":"0px");w.children("colgroup").insertBefore(w.children("thead"));n.trigger("scroll");!a.bSorted&&!a.bFiltered||a._drawHold||(g.scrollTop=0)}}function ca(a,b,c){for(var d=0,e=0,h=
b.length,f,g;e<h;){f=b[e].firstChild;for(g=c?c[e].firstChild:null;f;)1===f.nodeType&&(c?a(f,g,d):a(f,d),d++),f=f.nextSibling,g=c?g.nextSibling:null;e++}}function Za(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,h=d.sX,f=d.sXInner,g=c.length,k=Ia(a,"bVisible"),m=l("th",a.nTHead),n=b.getAttribute("width"),p=b.parentNode,t=!1,v,x=a.oBrowser;d=x.bScrollOversize;(v=b.style.width)&&-1!==v.indexOf("%")&&(n=v);for(v=0;v<k.length;v++){var w=c[k[v]];null!==w.sWidth&&(w.sWidth=Zb(w.sWidthOrig,p),t=!0)}if(d||
!t&&!h&&!e&&g==oa(a)&&g==m.length)for(v=0;v<g;v++)k=ta(a,v),null!==k&&(c[k].sWidth=K(m.eq(v).width()));else{g=l(b).clone().css("visibility","hidden").removeAttr("id");g.find("tbody tr").remove();var r=l("<tr/>").appendTo(g.find("tbody"));g.find("thead, tfoot").remove();g.append(l(a.nTHead).clone()).append(l(a.nTFoot).clone());g.find("tfoot th, tfoot td").css("width","");m=Na(a,g.find("thead")[0]);for(v=0;v<k.length;v++)w=c[k[v]],m[v].style.width=null!==w.sWidthOrig&&""!==w.sWidthOrig?K(w.sWidthOrig):
"",w.sWidthOrig&&h&&l(m[v]).append(l("<div/>").css({width:w.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(v=0;v<k.length;v++)t=k[v],w=c[t],l($b(a,t)).clone(!1).append(w.sContentPadding).appendTo(r);l("[name]",g).removeAttr("name");w=l("<div/>").css(h||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(g).appendTo(p);h&&f?g.width(f):h?(g.css("width","auto"),g.removeAttr("width"),g.width()<p.clientWidth&&n&&g.width(p.clientWidth)):e?g.width(p.clientWidth):
n&&g.width(n);for(v=e=0;v<k.length;v++)p=l(m[v]),f=p.outerWidth()-p.width(),p=x.bBounding?Math.ceil(m[v].getBoundingClientRect().width):p.outerWidth(),e+=p,c[k[v]].sWidth=K(p-f);b.style.width=K(e);w.remove()}n&&(b.style.width=K(n));!n&&!h||a._reszEvt||(b=function(){l(z).on("resize.DT-"+a.sInstance,hb(function(){sa(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0)}function Zb(a,b){if(!a)return 0;a=l("<div/>").css("width",K(a)).appendTo(b||A.body);b=a[0].offsetWidth;a.remove();return b}function $b(a,b){var c=
ac(a,b);if(0>c)return null;var d=a.aoData[c];return d.nTr?d.anCells[b]:l("<td/>").html(T(a,c,b,"display"))[0]}function ac(a,b){for(var c,d=-1,e=-1,h=0,f=a.aoData.length;h<f;h++)c=T(a,h,b,"display")+"",c=c.replace(uc,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=h);return e}function K(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function pa(a){var b=[],c=a.aoColumns;var d=a.aaSortingFixed;var e=l.isPlainObject(d);var h=[];var f=function(n){n.length&&
!Array.isArray(n[0])?h.push(n):l.merge(h,n)};Array.isArray(d)&&f(d);e&&d.pre&&f(d.pre);f(a.aaSorting);e&&d.post&&f(d.post);for(a=0;a<h.length;a++){var g=h[a][0];f=c[g].aDataSort;d=0;for(e=f.length;d<e;d++){var k=f[d];var m=c[k].sType||"string";h[a]._idx===q&&(h[a]._idx=l.inArray(h[a][1],c[k].asSorting));b.push({src:g,col:k,dir:h[a][1],index:h[a]._idx,type:m,formatter:u.ext.type.order[m+"-pre"]})}}return b}function Hb(a){var b,c=[],d=u.ext.type.order,e=a.aoData,h=0,f=a.aiDisplayMaster;$a(a);var g=
pa(a);var k=0;for(b=g.length;k<b;k++){var m=g[k];m.formatter&&h++;bc(a,m.col)}if("ssp"!=Q(a)&&0!==g.length){k=0;for(b=f.length;k<b;k++)c[f[k]]=k;h===g.length?f.sort(function(n,p){var t,v=g.length,x=e[n]._aSortData,w=e[p]._aSortData;for(t=0;t<v;t++){var r=g[t];var C=x[r.col];var G=w[r.col];C=C<G?-1:C>G?1:0;if(0!==C)return"asc"===r.dir?C:-C}C=c[n];G=c[p];return C<G?-1:C>G?1:0}):f.sort(function(n,p){var t,v=g.length,x=e[n]._aSortData,w=e[p]._aSortData;for(t=0;t<v;t++){var r=g[t];var C=x[r.col];var G=
w[r.col];r=d[r.type+"-"+r.dir]||d["string-"+r.dir];C=r(C,G);if(0!==C)return C}C=c[n];G=c[p];return C<G?-1:C>G?1:0})}a.bSorted=!0}function cc(a){var b=a.aoColumns,c=pa(a);a=a.oLanguage.oAria;for(var d=0,e=b.length;d<e;d++){var h=b[d];var f=h.asSorting;var g=h.ariaTitle||h.sTitle.replace(/<.*?>/g,"");var k=h.nTh;k.removeAttribute("aria-sort");h.bSortable&&(0<c.length&&c[0].col==d?(k.setAttribute("aria-sort","asc"==c[0].dir?"ascending":"descending"),h=f[c[0].index+1]||f[0]):h=f[0],g+="asc"===h?a.sSortAscending:
a.sSortDescending);k.setAttribute("aria-label",g)}}function nb(a,b,c,d){var e=a.aaSorting,h=a.aoColumns[b].asSorting,f=function(g,k){var m=g._idx;m===q&&(m=l.inArray(g[1],h));return m+1<h.length?m+1:k?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=l.inArray(b,U(e,"0")),-1!==c?(b=f(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=h[b],e[c]._idx=b)):(e.push([b,h[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=f(e[0]),e.length=1,e[0][1]=h[b],
e[0]._idx=b):(e.length=0,e.push([b,h[0]]),e[0]._idx=0);ka(a);"function"==typeof d&&d(a)}function fb(a,b,c,d){var e=a.aoColumns[c];ob(b,{},function(h){!1!==e.bSortable&&(a.oFeatures.bProcessing?(V(a,!0),setTimeout(function(){nb(a,c,h.shiftKey,d);"ssp"!==Q(a)&&V(a,!1)},0)):nb(a,c,h.shiftKey,d))})}function Sa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=pa(a),e=a.oFeatures,h;if(e.bSort&&e.bSortClasses){e=0;for(h=b.length;e<h;e++){var f=b[e].src;l(U(a.aoData,"anCells",f)).removeClass(c+(2>e?e+1:3))}e=
0;for(h=d.length;e<h;e++)f=d[e].src,l(U(a.aoData,"anCells",f)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function bc(a,b){var c=a.aoColumns[b],d=u.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ua(a,b)));for(var h,f=u.ext.type.order[c.sType+"-pre"],g=0,k=a.aoData.length;g<k;g++)if(c=a.aoData[g],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)h=d?e[g]:T(a,g,b,"sort"),c._aSortData[b]=f?f(h):h}function Ca(a){if(!a._bLoadingState){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,
order:l.extend(!0,[],a.aaSorting),search:Vb(a.oPreviousSearch),columns:l.map(a.aoColumns,function(c,d){return{visible:c.bVisible,search:Vb(a.aoPreSearchCols[d])}})};a.oSavedState=b;F(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oFeatures.bStateSave&&!a.bDestroying&&a.fnStateSaveCallback.call(a.oInstance,a,b)}}function dc(a,b,c){if(a.oFeatures.bStateSave)return b=a.fnStateLoadCallback.call(a.oInstance,a,function(d){pb(a,d,c)}),b!==q&&pb(a,b,c),!0;c()}function pb(a,b,c){var d,e=a.aoColumns;a._bLoadingState=
!0;var h=a._bInitComplete?new u.Api(a):null;if(b&&b.time){var f=F(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1!==l.inArray(!1,f))a._bLoadingState=!1;else if(f=a.iStateDuration,0<f&&b.time<+new Date-1E3*f)a._bLoadingState=!1;else if(b.columns&&e.length!==b.columns.length)a._bLoadingState=!1;else{a.oLoadedState=l.extend(!0,{},b);b.start!==q&&(null===h?(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start):Ra(a,b.start/b.length));b.length!==q&&(a._iDisplayLength=b.length);b.order!==q&&(a.aaSorting=
[],l.each(b.order,function(k,m){a.aaSorting.push(m[0]>=e.length?[0,m[1]]:m)}));b.search!==q&&l.extend(a.oPreviousSearch,Wb(b.search));if(b.columns){f=0;for(d=b.columns.length;f<d;f++){var g=b.columns[f];g.visible!==q&&(h?h.column(f).visible(g.visible,!1):e[f].bVisible=g.visible);g.search!==q&&l.extend(a.aoPreSearchCols[f],Wb(g.search))}h&&h.columns.adjust()}a._bLoadingState=!1;F(a,"aoStateLoaded","stateLoaded",[a,b])}}else a._bLoadingState=!1;c()}function Ta(a){var b=u.settings;a=l.inArray(a,U(b,
"nTable"));return-1!==a?b[a]:null}function da(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)z.console&&console.log&&console.log(c);else if(b=u.ext,b=b.sErrMode||b.errMode,a&&F(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function X(a,b,c,d){Array.isArray(c)?l.each(c,function(e,h){Array.isArray(h)?X(a,b,h[0],h[1]):
X(a,b,h)}):(d===q&&(d=c),b[c]!==q&&(a[d]=b[c]))}function qb(a,b,c){var d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];l.isPlainObject(e)?(l.isPlainObject(a[d])||(a[d]={}),l.extend(!0,a[d],e)):c&&"data"!==d&&"aaData"!==d&&Array.isArray(e)?a[d]=e.slice():a[d]=e}return a}function ob(a,b,c){l(a).on("click.DT",b,function(d){l(a).trigger("blur");c(d)}).on("keypress.DT",b,function(d){13===d.which&&(d.preventDefault(),c(d))}).on("selectstart.DT",function(){return!1})}function R(a,b,c,d){c&&a[b].push({fn:c,
sName:d})}function F(a,b,c,d){var e=[];b&&(e=l.map(a[b].slice().reverse(),function(h,f){return h.fn.apply(a.oInstance,d)}));null!==c&&(b=l.Event(c+".dt"),l(a.nTable).trigger(b,d),e.push(b.result));return e}function lb(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function gb(a,b){a=a.renderer;var c=u.ext.renderer[b];return l.isPlainObject(a)&&a[b]?c[a[b]]||c._:"string"===typeof a?c[a]||c._:c._}function Q(a){return a.oFeatures.bServerSide?
"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Da(a,b){var c=ec.numbers_length,d=Math.floor(c/2);b<=c?a=qa(0,b):a<=d?(a=qa(0,c-2),a.push("ellipsis"),a.push(b-1)):(a>=b-1-d?a=qa(b-(c-2),b):(a=qa(a-d+2,a+d-1),a.push("ellipsis"),a.push(b-1)),a.splice(0,0,"ellipsis"),a.splice(0,0,0));a.DT_el="span";return a}function Xa(a){l.each({num:function(b){return Ua(b,a)},"num-fmt":function(b){return Ua(b,a,rb)},"html-num":function(b){return Ua(b,a,Va)},"html-num-fmt":function(b){return Ua(b,a,Va,rb)}},function(b,
c){M.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(M.type.search[b+a]=M.type.search.html)})}function fc(a){return function(){var b=[Ta(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return u.ext.internal[a].apply(this,b)}}var u=function(a,b){if(this instanceof u)return l(a).DataTable(b);b=a;this.$=function(f,g){return this.api(!0).$(f,g)};this._=function(f,g){return this.api(!0).rows(f,g).data()};this.api=function(f){return f?new B(Ta(this[M.iApiIndex])):new B(this)};this.fnAddData=
function(f,g){var k=this.api(!0);f=Array.isArray(f)&&(Array.isArray(f[0])||l.isPlainObject(f[0]))?k.rows.add(f):k.row.add(f);(g===q||g)&&k.draw();return f.flatten().toArray()};this.fnAdjustColumnSizing=function(f){var g=this.api(!0).columns.adjust(),k=g.settings()[0],m=k.oScroll;f===q||f?g.draw(!1):(""!==m.sX||""!==m.sY)&&Ha(k)};this.fnClearTable=function(f){var g=this.api(!0).clear();(f===q||f)&&g.draw()};this.fnClose=function(f){this.api(!0).row(f).child.hide()};this.fnDeleteRow=function(f,g,k){var m=
this.api(!0);f=m.rows(f);var n=f.settings()[0],p=n.aoData[f[0][0]];f.remove();g&&g.call(this,n,p);(k===q||k)&&m.draw();return p};this.fnDestroy=function(f){this.api(!0).destroy(f)};this.fnDraw=function(f){this.api(!0).draw(f)};this.fnFilter=function(f,g,k,m,n,p){n=this.api(!0);null===g||g===q?n.search(f,k,m,p):n.column(g).search(f,k,m,p);n.draw()};this.fnGetData=function(f,g){var k=this.api(!0);if(f!==q){var m=f.nodeName?f.nodeName.toLowerCase():"";return g!==q||"td"==m||"th"==m?k.cell(f,g).data():
k.row(f).data()||null}return k.data().toArray()};this.fnGetNodes=function(f){var g=this.api(!0);return f!==q?g.row(f).node():g.rows().nodes().flatten().toArray()};this.fnGetPosition=function(f){var g=this.api(!0),k=f.nodeName.toUpperCase();return"TR"==k?g.row(f).index():"TD"==k||"TH"==k?(f=g.cell(f).index(),[f.row,f.columnVisible,f.column]):null};this.fnIsOpen=function(f){return this.api(!0).row(f).child.isShown()};this.fnOpen=function(f,g,k){return this.api(!0).row(f).child(g,k).show().child()[0]};
this.fnPageChange=function(f,g){f=this.api(!0).page(f);(g===q||g)&&f.draw(!1)};this.fnSetColumnVis=function(f,g,k){f=this.api(!0).column(f).visible(g);(k===q||k)&&f.columns.adjust().draw()};this.fnSettings=function(){return Ta(this[M.iApiIndex])};this.fnSort=function(f){this.api(!0).order(f).draw()};this.fnSortListener=function(f,g,k){this.api(!0).order.listener(f,g,k)};this.fnUpdate=function(f,g,k,m,n){var p=this.api(!0);k===q||null===k?p.row(g).data(f):p.cell(g,k).data(f);(n===q||n)&&p.columns.adjust();
(m===q||m)&&p.draw();return 0};this.fnVersionCheck=M.fnVersionCheck;var c=this,d=b===q,e=this.length;d&&(b={});this.oApi=this.internal=M.internal;for(var h in u.ext.internal)h&&(this[h]=fc(h));this.each(function(){var f={},g=1<e?qb(f,b,!0):b,k=0,m;f=this.getAttribute("id");var n=!1,p=u.defaults,t=l(this);if("table"!=this.nodeName.toLowerCase())da(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{zb(p);Ab(p.column);P(p,p,!0);P(p.column,p.column,!0);P(p,l.extend(g,t.data()),!0);var v=
u.settings;k=0;for(m=v.length;k<m;k++){var x=v[k];if(x.nTable==this||x.nTHead&&x.nTHead.parentNode==this||x.nTFoot&&x.nTFoot.parentNode==this){var w=g.bRetrieve!==q?g.bRetrieve:p.bRetrieve;if(d||w)return x.oInstance;if(g.bDestroy!==q?g.bDestroy:p.bDestroy){x.oInstance.fnDestroy();break}else{da(x,0,"Cannot reinitialise DataTable",3);return}}if(x.sTableId==this.id){v.splice(k,1);break}}if(null===f||""===f)this.id=f="DataTables_Table_"+u.ext._unique++;var r=l.extend(!0,{},u.models.oSettings,{sDestroyWidth:t[0].style.width,
sInstance:f,sTableId:f});r.nTable=this;r.oApi=c.internal;r.oInit=g;v.push(r);r.oInstance=1===c.length?c:t.dataTable();zb(g);ma(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=Array.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=qb(l.extend(!0,{},p),g);X(r.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));X(r,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod",
"aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);X(r.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);X(r.oLanguage,g,"fnInfoCallback");
R(r,"aoDrawCallback",g.fnDrawCallback,"user");R(r,"aoServerParams",g.fnServerParams,"user");R(r,"aoStateSaveParams",g.fnStateSaveParams,"user");R(r,"aoStateLoadParams",g.fnStateLoadParams,"user");R(r,"aoStateLoaded",g.fnStateLoaded,"user");R(r,"aoRowCallback",g.fnRowCallback,"user");R(r,"aoRowCreatedCallback",g.fnCreatedRow,"user");R(r,"aoHeaderCallback",g.fnHeaderCallback,"user");R(r,"aoFooterCallback",g.fnFooterCallback,"user");R(r,"aoInitComplete",g.fnInitComplete,"user");R(r,"aoPreDrawCallback",
g.fnPreDrawCallback,"user");r.rowIdFn=na(g.rowId);Bb(r);var C=r.oClasses;l.extend(C,u.ext.classes,g.oClasses);t.addClass(C.sTable);r.iInitDisplayStart===q&&(r.iInitDisplayStart=g.iDisplayStart,r._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(r.bDeferLoading=!0,f=Array.isArray(g.iDeferLoading),r._iRecordsDisplay=f?g.iDeferLoading[0]:g.iDeferLoading,r._iRecordsTotal=f?g.iDeferLoading[1]:g.iDeferLoading);var G=r.oLanguage;l.extend(!0,G,g.oLanguage);G.sUrl?(l.ajax({dataType:"json",url:G.sUrl,
success:function(I){P(p.oLanguage,I);ma(I);l.extend(!0,G,I);F(r,null,"i18n",[r]);Aa(r)},error:function(){Aa(r)}}),n=!0):F(r,null,"i18n",[r]);null===g.asStripeClasses&&(r.asStripeClasses=[C.sStripeOdd,C.sStripeEven]);f=r.asStripeClasses;var aa=t.children("tbody").find("tr").eq(0);-1!==l.inArray(!0,l.map(f,function(I,H){return aa.hasClass(I)}))&&(l("tbody tr",this).removeClass(f.join(" ")),r.asDestroyStripes=f.slice());f=[];v=this.getElementsByTagName("thead");0!==v.length&&(wa(r.aoHeader,v[0]),f=Na(r));
if(null===g.aoColumns)for(v=[],k=0,m=f.length;k<m;k++)v.push(null);else v=g.aoColumns;k=0;for(m=v.length;k<m;k++)Ya(r,f?f[k]:null);Db(r,g.aoColumnDefs,v,function(I,H){Ga(r,I,H)});if(aa.length){var L=function(I,H){return null!==I.getAttribute("data-"+H)?H:null};l(aa[0]).children("th, td").each(function(I,H){var ea=r.aoColumns[I];if(ea.mData===I){var Y=L(H,"sort")||L(H,"order");H=L(H,"filter")||L(H,"search");if(null!==Y||null!==H)ea.mData={_:I+".display",sort:null!==Y?I+".@data-"+Y:q,type:null!==Y?
I+".@data-"+Y:q,filter:null!==H?I+".@data-"+H:q},Ga(r,I)}})}var O=r.oFeatures;f=function(){if(g.aaSorting===q){var I=r.aaSorting;k=0;for(m=I.length;k<m;k++)I[k][1]=r.aoColumns[k].asSorting[0]}Sa(r);O.bSort&&R(r,"aoDrawCallback",function(){if(r.bSorted){var Y=pa(r),Ba={};l.each(Y,function(fa,ba){Ba[ba.src]=ba.dir});F(r,null,"order",[r,Y,Ba]);cc(r)}});R(r,"aoDrawCallback",function(){(r.bSorted||"ssp"===Q(r)||O.bDeferRender)&&Sa(r)},"sc");I=t.children("caption").each(function(){this._captionSide=l(this).css("caption-side")});
var H=t.children("thead");0===H.length&&(H=l("<thead/>").appendTo(t));r.nTHead=H[0];var ea=t.children("tbody");0===ea.length&&(ea=l("<tbody/>").insertAfter(H));r.nTBody=ea[0];H=t.children("tfoot");0===H.length&&0<I.length&&(""!==r.oScroll.sX||""!==r.oScroll.sY)&&(H=l("<tfoot/>").appendTo(t));0===H.length||0===H.children().length?t.addClass(C.sNoFooter):0<H.length&&(r.nTFoot=H[0],wa(r.aoFooter,r.nTFoot));if(g.aaData)for(k=0;k<g.aaData.length;k++)ia(r,g.aaData[k]);else(r.bDeferLoading||"dom"==Q(r))&&
Ja(r,l(r.nTBody).children("tr"));r.aiDisplay=r.aiDisplayMaster.slice();r.bInitialised=!0;!1===n&&Aa(r)};R(r,"aoDrawCallback",Ca,"state_save");g.bStateSave?(O.bStateSave=!0,dc(r,g,f)):f()}});c=null;return this},M,y,J,sb={},gc=/[\r\n\u2028]/g,Va=/<.*?>/g,vc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,wc=/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,rb=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,Z=function(a){return a&&!0!==a&&"-"!==a?!1:!0},hc=
function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},ic=function(a,b){sb[b]||(sb[b]=new RegExp(jb(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(sb[b],"."):a},tb=function(a,b,c){var d="string"===typeof a;if(Z(a))return!0;b&&d&&(a=ic(a,b));c&&d&&(a=a.replace(rb,""));return!isNaN(parseFloat(a))&&isFinite(a)},jc=function(a,b,c){return Z(a)?!0:Z(a)||"string"===typeof a?tb(a.replace(Va,""),b,c)?!0:null:null},U=function(a,b,c){var d=[],e=0,h=a.length;if(c!==q)for(;e<
h;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<h;e++)a[e]&&d.push(a[e][b]);return d},Ea=function(a,b,c,d){var e=[],h=0,f=b.length;if(d!==q)for(;h<f;h++)a[b[h]][c]&&e.push(a[b[h]][c][d]);else for(;h<f;h++)e.push(a[b[h]][c]);return e},qa=function(a,b){var c=[];if(b===q){b=0;var d=a}else d=b,b=a;for(a=b;a<d;a++)c.push(a);return c},kc=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},Ma=function(a){a:{if(!(2>a.length)){var b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<
e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();b=[];e=a.length;var h,f=0;d=0;a:for(;d<e;d++){c=a[d];for(h=0;h<f;h++)if(b[h]===c)continue a;b.push(c);f++}return b},lc=function(a,b){if(Array.isArray(b))for(var c=0;c<b.length;c++)lc(a,b[c]);else a.push(b);return a},mc=function(a,b){b===q&&(b=0);return-1!==this.indexOf(a,b)};Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});Array.prototype.includes||(Array.prototype.includes=mc);
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});String.prototype.includes||(String.prototype.includes=mc);u.util={throttle:function(a,b){var c=b!==q?b:200,d,e;return function(){var h=this,f=+new Date,g=arguments;d&&f<d+c?(clearTimeout(e),e=setTimeout(function(){d=q;a.apply(h,g)},c)):(d=f,a.apply(h,g))}},escapeRegex:function(a){return a.replace(wc,"\\$1")},set:function(a){if(l.isPlainObject(a))return u.util.set(a._);if(null===
a)return function(){};if("function"===typeof a)return function(c,d,e){a(c,"set",d,e)};if("string"!==typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(c,d){c[a]=d};var b=function(c,d,e){e=cb(e);var h=e[e.length-1];for(var f,g,k=0,m=e.length-1;k<m;k++){if("__proto__"===e[k]||"constructor"===e[k])throw Error("Cannot set prototype values");f=e[k].match(Fa);g=e[k].match(ra);if(f){e[k]=e[k].replace(Fa,"");c[e[k]]=[];h=e.slice();h.splice(0,k+1);f=h.join(".");if(Array.isArray(d))for(g=
0,m=d.length;g<m;g++)h={},b(h,d[g],f),c[e[k]].push(h);else c[e[k]]=d;return}g&&(e[k]=e[k].replace(ra,""),c=c[e[k]](d));if(null===c[e[k]]||c[e[k]]===q)c[e[k]]={};c=c[e[k]]}if(h.match(ra))c[h.replace(ra,"")](d);else c[h.replace(Fa,"")]=d};return function(c,d){return b(c,d,a)}},get:function(a){if(l.isPlainObject(a)){var b={};l.each(a,function(d,e){e&&(b[d]=u.util.get(e))});return function(d,e,h,f){var g=b[e]||b._;return g!==q?g(d,e,h,f):d}}if(null===a)return function(d){return d};if("function"===typeof a)return function(d,
e,h,f){return a(d,e,h,f)};if("string"!==typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(d,e){return d[a]};var c=function(d,e,h){if(""!==h){var f=cb(h);for(var g=0,k=f.length;g<k;g++){h=f[g].match(Fa);var m=f[g].match(ra);if(h){f[g]=f[g].replace(Fa,"");""!==f[g]&&(d=d[f[g]]);m=[];f.splice(0,g+1);f=f.join(".");if(Array.isArray(d))for(g=0,k=d.length;g<k;g++)m.push(c(d[g],e,f));d=h[0].substring(1,h[0].length-1);d=""===d?m:m.join(d);break}else if(m){f[g]=f[g].replace(ra,
"");d=d[f[g]]();continue}if(null===d||d[f[g]]===q)return q;d=d[f[g]]}}return d};return function(d,e){return c(d,e,a)}}};var S=function(a,b,c){a[b]!==q&&(a[c]=a[b])},Fa=/\[.*?\]$/,ra=/\(\)$/,na=u.util.get,ha=u.util.set,jb=u.util.escapeRegex,Qa=l("<div>")[0],tc=Qa.textContent!==q,uc=/<.*?>/g,hb=u.util.throttle,nc=[],N=Array.prototype,xc=function(a){var b,c=u.settings,d=l.map(c,function(h,f){return h.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase()){var e=
l.inArray(a,d);return-1!==e?[c[e]]:null}if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?b=l(a):a instanceof l&&(b=a)}else return[];if(b)return b.map(function(h){e=l.inArray(this,d);return-1!==e?c[e]:null}).toArray()};var B=function(a,b){if(!(this instanceof B))return new B(a,b);var c=[],d=function(f){(f=xc(f))&&c.push.apply(c,f)};if(Array.isArray(a))for(var e=0,h=a.length;e<h;e++)d(a[e]);else d(a);this.context=Ma(c);b&&l.merge(this,b);this.selector={rows:null,
cols:null,opts:null};B.extend(this,this,nc)};u.Api=B;l.extend(B.prototype,{any:function(){return 0!==this.count()},concat:N.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new B(b[a],this[a]):null},filter:function(a){var b=[];if(N.filter)b=N.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);
return new B(this.context,b)},flatten:function(){var a=[];return new B(this.context,a.concat.apply(a,this.toArray()))},join:N.join,indexOf:N.indexOf||function(a,b){b=b||0;for(var c=this.length;b<c;b++)if(this[b]===a)return b;return-1},iterator:function(a,b,c,d){var e=[],h,f,g=this.context,k,m=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);var n=0;for(h=g.length;n<h;n++){var p=new B(g[n]);if("table"===b){var t=c.call(p,g[n],n);t!==q&&e.push(t)}else if("columns"===b||"rows"===b)t=c.call(p,g[n],
this[n],n),t!==q&&e.push(t);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){var v=this[n];"column-rows"===b&&(k=Wa(g[n],m.opts));var x=0;for(f=v.length;x<f;x++)t=v[x],t="cell"===b?c.call(p,g[n],t.row,t.column,n,x):c.call(p,g[n],t,n,x,k),t!==q&&e.push(t)}}return e.length||d?(a=new B(g,a?e.concat.apply([],e):e),b=a.selector,b.rows=m.rows,b.cols=m.cols,b.opts=m.opts,a):this},lastIndexOf:N.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,
map:function(a){var b=[];if(N.map)b=N.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new B(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:N.pop,push:N.push,reduce:N.reduce||function(a,b){return Cb(this,a,b,0,this.length,1)},reduceRight:N.reduceRight||function(a,b){return Cb(this,a,b,this.length-1,-1,-1)},reverse:N.reverse,selector:null,shift:N.shift,slice:function(){return new B(this.context,this)},sort:N.sort,
splice:N.splice,toArray:function(){return N.slice.call(this)},to$:function(){return l(this)},toJQuery:function(){return l(this)},unique:function(){return new B(this.context,Ma(this))},unshift:N.unshift});B.extend=function(a,b,c){if(c.length&&b&&(b instanceof B||b.__dt_wrapper)){var d,e=function(g,k,m){return function(){var n=k.apply(g,arguments);B.extend(n,n,m.methodExt);return n}};var h=0;for(d=c.length;h<d;h++){var f=c[h];b[f.name]="function"===f.type?e(a,f.val,f):"object"===f.type?{}:f.val;b[f.name].__dt_wrapper=
!0;B.extend(a,b[f.name],f.propExt)}}};B.register=y=function(a,b){if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++)B.register(a[c],b);else{d=a.split(".");var e=nc,h;a=0;for(c=d.length;a<c;a++){var f=(h=-1!==d[a].indexOf("()"))?d[a].replace("()",""):d[a];a:{var g=0;for(var k=e.length;g<k;g++)if(e[g].name===f){g=e[g];break a}g=null}g||(g={name:f,val:{},methodExt:[],propExt:[],type:"object"},e.push(g));a===c-1?(g.val=b,g.type="function"===typeof b?"function":l.isPlainObject(b)?"object":"other"):e=h?
g.methodExt:g.propExt}}};B.registerPlural=J=function(a,b,c){B.register(a,c);B.register(b,function(){var d=c.apply(this,arguments);return d===this?this:d instanceof B?d.length?Array.isArray(d[0])?new B(d.context,d[0]):d[0]:q:d})};var oc=function(a,b){if(Array.isArray(a))return l.map(a,function(d){return oc(d,b)});if("number"===typeof a)return[b[a]];var c=l.map(b,function(d,e){return d.nTable});return l(c).filter(a).map(function(d){d=l.inArray(this,c);return b[d]}).toArray()};y("tables()",function(a){return a!==
q&&null!==a?new B(oc(a,this.context)):this});y("table()",function(a){a=this.tables(a);var b=a.context;return b.length?new B(b[0]):a});J("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});J("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});J("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});J("tables().footer()","table().footer()",
function(){return this.iterator("table",function(a){return a.nTFoot},1)});J("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});y("draw()",function(a){return this.iterator("table",function(b){"page"===a?ja(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),ka(b,!1===a))})});y("page()",function(a){return a===q?this.page.info().page:this.iterator("table",function(b){Ra(b,a)})});y("page.info()",function(a){if(0===this.context.length)return q;
a=this.context[0];var b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===Q(a)}});y("page.len()",function(a){return a===q?0!==this.context.length?this.context[0]._iDisplayLength:q:this.iterator("table",function(b){kb(b,a)})});var pc=function(a,b,c){if(c){var d=new B(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==
Q(a))ka(a,b);else{V(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();Oa(a,[],function(h){Ka(a);h=za(a,h);for(var f=0,g=h.length;f<g;f++)ia(a,h[f]);ka(a,b);V(a,!1)})}};y("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});y("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});y("ajax.reload()",function(a,b){return this.iterator("table",function(c){pc(c,!1===b,a)})});y("ajax.url()",function(a){var b=this.context;if(a===q){if(0===b.length)return q;
b=b[0];return b.ajax?l.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(c){l.isPlainObject(c.ajax)?c.ajax.url=a:c.ajax=a})});y("ajax.url().load()",function(a,b){return this.iterator("table",function(c){pc(c,!1===b,a)})});var ub=function(a,b,c,d,e){var h=[],f,g,k;var m=typeof b;b&&"string"!==m&&"function"!==m&&b.length!==q||(b=[b]);m=0;for(g=b.length;m<g;m++){var n=b[m]&&b[m].split&&!b[m].match(/[\[\(:]/)?b[m].split(","):[b[m]];var p=0;for(k=n.length;p<k;p++)(f=
c("string"===typeof n[p]?n[p].trim():n[p]))&&f.length&&(h=h.concat(f))}a=M.selector[a];if(a.length)for(m=0,g=a.length;m<g;m++)h=a[m](d,e,h);return Ma(h)},vb=function(a){a||(a={});a.filter&&a.search===q&&(a.search=a.filter);return l.extend({search:"none",order:"current",page:"all"},a)},wb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Wa=function(a,b){var c=[],d=a.aiDisplay;var e=a.aiDisplayMaster;
var h=b.search;var f=b.order;b=b.page;if("ssp"==Q(a))return"removed"===h?[]:qa(0,e.length);if("current"==b)for(f=a._iDisplayStart,a=a.fnDisplayEnd();f<a;f++)c.push(d[f]);else if("current"==f||"applied"==f)if("none"==h)c=e.slice();else if("applied"==h)c=d.slice();else{if("removed"==h){var g={};f=0;for(a=d.length;f<a;f++)g[d[f]]=null;c=l.map(e,function(k){return g.hasOwnProperty(k)?null:k})}}else if("index"==f||"original"==f)for(f=0,a=a.aoData.length;f<a;f++)"none"==h?c.push(f):(e=l.inArray(f,d),(-1===
e&&"removed"==h||0<=e&&"applied"==h)&&c.push(f));return c},yc=function(a,b,c){var d;return ub("row",b,function(e){var h=hc(e),f=a.aoData;if(null!==h&&!c)return[h];d||(d=Wa(a,c));if(null!==h&&-1!==l.inArray(h,d))return[h];if(null===e||e===q||""===e)return d;if("function"===typeof e)return l.map(d,function(k){var m=f[k];return e(k,m._aData,m.nTr)?k:null});if(e.nodeName){h=e._DT_RowIndex;var g=e._DT_CellIndex;if(h!==q)return f[h]&&f[h].nTr===e?[h]:[];if(g)return f[g.row]&&f[g.row].nTr===e.parentNode?
[g.row]:[];h=l(e).closest("*[data-dt-row]");return h.length?[h.data("dt-row")]:[]}if("string"===typeof e&&"#"===e.charAt(0)&&(h=a.aIds[e.replace(/^#/,"")],h!==q))return[h.idx];h=kc(Ea(a.aoData,d,"nTr"));return l(h).filter(e).map(function(){return this._DT_RowIndex}).toArray()},a,c)};y("rows()",function(a,b){a===q?a="":l.isPlainObject(a)&&(b=a,a="");b=vb(b);var c=this.iterator("table",function(d){return yc(d,a,b)},1);c.selector.rows=a;c.selector.opts=b;return c});y("rows().nodes()",function(){return this.iterator("row",
function(a,b){return a.aoData[b].nTr||q},1)});y("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return Ea(a.aoData,b,"_aData")},1)});J("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){b=b.aoData[c];return"search"===a?b._aFilterData:b._aSortData},1)});J("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){va(b,c,a)})});J("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,
b){return b},1)});J("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var h=0,f=this[d].length;h<f;h++){var g=c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);b.push((!0===a?"#":"")+g)}return new B(c,b)});J("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,h=e[c],f,g;e.splice(c,1);var k=0;for(f=e.length;k<f;k++){var m=e[k];var n=m.anCells;null!==m.nTr&&(m.nTr._DT_RowIndex=k);if(null!==n)for(m=0,g=n.length;m<
g;m++)n[m]._DT_CellIndex.row=k}La(b.aiDisplayMaster,c);La(b.aiDisplay,c);La(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;lb(b);c=b.rowIdFn(h._aData);c!==q&&delete b.aIds[c]});this.iterator("table",function(b){for(var c=0,d=b.aoData.length;c<d;c++)b.aoData[c].idx=c});return this});y("rows.add()",function(a){var b=this.iterator("table",function(d){var e,h=[];var f=0;for(e=a.length;f<e;f++){var g=a[f];g.nodeName&&"TR"===g.nodeName.toUpperCase()?h.push(Ja(d,g)[0]):h.push(ia(d,g))}return h},1),
c=this.rows(-1);c.pop();l.merge(c,b);return c});y("row()",function(a,b){return wb(this.rows(a,b))});y("row().data()",function(a){var b=this.context;if(a===q)return b.length&&this.length?b[0].aoData[this[0]]._aData:q;var c=b[0].aoData[this[0]];c._aData=a;Array.isArray(a)&&c.nTr&&c.nTr.id&&ha(b[0].rowId)(a,c.nTr.id);va(b[0],this[0],"data");return this});y("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});y("row.add()",function(a){a instanceof
l&&a.length&&(a=a[0]);var b=this.iterator("table",function(c){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?Ja(c,a)[0]:ia(c,a)});return this.row(b[0])});l(A).on("plugin-init.dt",function(a,b){a=new B(b);a.on("stateSaveParams",function(d,e,h){d=e.rowIdFn;e=e.aoData;for(var f=[],g=0;g<e.length;g++)e[g]._detailsShow&&f.push("#"+d(e[g]._aData));h.childRows=f});var c=a.state.loaded();c&&c.childRows&&a.rows(l.map(c.childRows,function(d){return d.replace(/:/g,"\\:")})).every(function(){F(b,null,"requestChild",
[this])})});var zc=function(a,b,c,d){var e=[],h=function(f,g){if(Array.isArray(f)||f instanceof l)for(var k=0,m=f.length;k<m;k++)h(f[k],g);else f.nodeName&&"tr"===f.nodeName.toLowerCase()?e.push(f):(k=l("<tr><td></td></tr>").addClass(g),l("td",k).addClass(g).html(f)[0].colSpan=oa(a),e.push(k[0]))};h(c,d);b._details&&b._details.detach();b._details=l(e);b._detailsShow&&b._details.insertAfter(b.nTr)},qc=u.util.throttle(function(a){Ca(a[0])},500),xb=function(a,b){var c=a.context;c.length&&(a=c[0].aoData[b!==
q?b:a[0]])&&a._details&&(a._details.remove(),a._detailsShow=q,a._details=q,l(a.nTr).removeClass("dt-hasChild"),qc(c))},rc=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];d._details&&((d._detailsShow=b)?(d._details.insertAfter(d.nTr),l(d.nTr).addClass("dt-hasChild")):(d._details.detach(),l(d.nTr).removeClass("dt-hasChild")),F(c[0],null,"childRow",[b,a.row(a[0])]),Ac(c[0]),qc(c))}},Ac=function(a){var b=new B(a),c=a.aoData;b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
0<U(c,"_details").length&&(b.on("draw.dt.DT_details",function(d,e){a===e&&b.rows({page:"current"}).eq(0).each(function(h){h=c[h];h._detailsShow&&h._details.insertAfter(h.nTr)})}),b.on("column-visibility.dt.DT_details",function(d,e,h,f){if(a===e)for(e=oa(e),h=0,f=c.length;h<f;h++)d=c[h],d._details&&d._details.children("td[colspan]").attr("colspan",e)}),b.on("destroy.dt.DT_details",function(d,e){if(a===e)for(d=0,e=c.length;d<e;d++)c[d]._details&&xb(b,d)}))};y("row().child()",function(a,b){var c=this.context;
if(a===q)return c.length&&this.length?c[0].aoData[this[0]]._details:q;!0===a?this.child.show():!1===a?xb(this):c.length&&this.length&&zc(c[0],c[0].aoData[this[0]],a,b);return this});y(["row().child.show()","row().child().show()"],function(a){rc(this,!0);return this});y(["row().child.hide()","row().child().hide()"],function(){rc(this,!1);return this});y(["row().child.remove()","row().child().remove()"],function(){xb(this);return this});y("row().child.isShown()",function(){var a=this.context;return a.length&&
this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var Bc=/^([^:]+):(name|visIdx|visible)$/,sc=function(a,b,c,d,e){c=[];d=0;for(var h=e.length;d<h;d++)c.push(T(a,e[d],b));return c},Cc=function(a,b,c){var d=a.aoColumns,e=U(d,"sName"),h=U(d,"nTh");return ub("column",b,function(f){var g=hc(f);if(""===f)return qa(d.length);if(null!==g)return[0<=g?g:d.length+g];if("function"===typeof f){var k=Wa(a,c);return l.map(d,function(p,t){return f(t,sc(a,t,0,0,k),h[t])?t:null})}var m="string"===typeof f?f.match(Bc):
"";if(m)switch(m[2]){case "visIdx":case "visible":g=parseInt(m[1],10);if(0>g){var n=l.map(d,function(p,t){return p.bVisible?t:null});return[n[n.length+g]]}return[ta(a,g)];case "name":return l.map(e,function(p,t){return p===m[1]?t:null});default:return[]}if(f.nodeName&&f._DT_CellIndex)return[f._DT_CellIndex.column];g=l(h).filter(f).map(function(){return l.inArray(this,h)}).toArray();if(g.length||!f.nodeName)return g;g=l(f).closest("*[data-dt-column]");return g.length?[g.data("dt-column")]:[]},a,c)};
y("columns()",function(a,b){a===q?a="":l.isPlainObject(a)&&(b=a,a="");b=vb(b);var c=this.iterator("table",function(d){return Cc(d,a,b)},1);c.selector.cols=a;c.selector.opts=b;return c});J("columns().header()","column().header()",function(a,b){return this.iterator("column",function(c,d){return c.aoColumns[d].nTh},1)});J("columns().footer()","column().footer()",function(a,b){return this.iterator("column",function(c,d){return c.aoColumns[d].nTf},1)});J("columns().data()","column().data()",function(){return this.iterator("column-rows",
sc,1)});J("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});J("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,h){return Ea(b.aoData,h,"search"===a?"_aFilterData":"_aSortData",c)},1)});J("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return Ea(a.aoData,e,"anCells",b)},1)});J("columns().visible()","column().visible()",
function(a,b){var c=this,d=this.iterator("column",function(e,h){if(a===q)return e.aoColumns[h].bVisible;var f=e.aoColumns,g=f[h],k=e.aoData,m;if(a!==q&&g.bVisible!==a){if(a){var n=l.inArray(!0,U(f,"bVisible"),h+1);f=0;for(m=k.length;f<m;f++){var p=k[f].nTr;e=k[f].anCells;p&&p.insertBefore(e[h],e[n]||null)}}else l(U(e.aoData,"anCells",h)).detach();g.bVisible=a}});a!==q&&this.iterator("table",function(e){xa(e,e.aoHeader);xa(e,e.aoFooter);e.aiDisplay.length||l(e.nTBody).find("td[colspan]").attr("colspan",
oa(e));Ca(e);c.iterator("column",function(h,f){F(h,null,"column-visibility",[h,f,a,b])});(b===q||b)&&c.columns.adjust()});return d});J("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?ua(b,c):c},1)});y("columns.adjust()",function(){return this.iterator("table",function(a){sa(a)},1)});y("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return ta(c,b);if("fromData"===
a||"toVisible"===a)return ua(c,b)}});y("column()",function(a,b){return wb(this.columns(a,b))});var Dc=function(a,b,c){var d=a.aoData,e=Wa(a,c),h=kc(Ea(d,e,"anCells")),f=l(lc([],h)),g,k=a.aoColumns.length,m,n,p,t,v,x;return ub("cell",b,function(w){var r="function"===typeof w;if(null===w||w===q||r){m=[];n=0;for(p=e.length;n<p;n++)for(g=e[n],t=0;t<k;t++)v={row:g,column:t},r?(x=d[g],w(v,T(a,g,t),x.anCells?x.anCells[t]:null)&&m.push(v)):m.push(v);return m}if(l.isPlainObject(w))return w.column!==q&&w.row!==
q&&-1!==l.inArray(w.row,e)?[w]:[];r=f.filter(w).map(function(C,G){return{row:G._DT_CellIndex.row,column:G._DT_CellIndex.column}}).toArray();if(r.length||!w.nodeName)return r;x=l(w).closest("*[data-dt-row]");return x.length?[{row:x.data("dt-row"),column:x.data("dt-column")}]:[]},a,c)};y("cells()",function(a,b,c){l.isPlainObject(a)&&(a.row===q?(c=a,a=null):(c=b,b=null));l.isPlainObject(b)&&(c=b,b=null);if(null===b||b===q)return this.iterator("table",function(n){return Dc(n,a,vb(c))});var d=c?{page:c.page,
order:c.order,search:c.search}:{},e=this.columns(b,d),h=this.rows(a,d),f,g,k,m;d=this.iterator("table",function(n,p){n=[];f=0;for(g=h[p].length;f<g;f++)for(k=0,m=e[p].length;k<m;k++)n.push({row:h[p][f],column:e[p][k]});return n},1);d=c&&c.selected?this.cells(d,c):d;l.extend(d.selector,{cols:b,rows:a,opts:c});return d});J("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:q},1)});y("cells().data()",function(){return this.iterator("cell",
function(a,b,c){return T(a,b,c)},1)});J("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});J("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return T(b,c,d,a)},1)});J("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:ua(a,c)}},1)});J("cells().invalidate()","cell().invalidate()",
function(a){return this.iterator("cell",function(b,c,d){va(b,c,a,d)})});y("cell()",function(a,b,c){return wb(this.cells(a,b,c))});y("cell().data()",function(a){var b=this.context,c=this[0];if(a===q)return b.length&&c.length?T(b[0],c[0].row,c[0].column):q;Eb(b[0],c[0].row,c[0].column,a);va(b[0],c[0].row,"data",c[0].column);return this});y("order()",function(a,b){var c=this.context;if(a===q)return 0!==c.length?c[0].aaSorting:q;"number"===typeof a?a=[[a,b]]:a.length&&!Array.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));
return this.iterator("table",function(d){d.aaSorting=a.slice()})});y("order.listener()",function(a,b,c){return this.iterator("table",function(d){fb(d,a,b,c)})});y("order.fixed()",function(a){if(!a){var b=this.context;b=b.length?b[0].aaSortingFixed:q;return Array.isArray(b)?{pre:b}:b}return this.iterator("table",function(c){c.aaSortingFixed=l.extend(!0,{},a)})});y(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];l.each(b[d],function(h,
f){e.push([f,a])});c.aaSorting=e})});y("search()",function(a,b,c,d){var e=this.context;return a===q?0!==e.length?e[0].oPreviousSearch.sSearch:q:this.iterator("table",function(h){h.oFeatures.bFilter&&ya(h,l.extend({},h.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});J("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,h){var f=e.aoPreSearchCols;if(a===q)return f[h].sSearch;e.oFeatures.bFilter&&
(l.extend(f[h],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ya(e,e.oPreviousSearch,1))})});y("state()",function(){return this.context.length?this.context[0].oSavedState:null});y("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});y("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});y("state.save()",function(){return this.iterator("table",function(a){Ca(a)})});
u.versionCheck=u.fnVersionCheck=function(a){var b=u.version.split(".");a=a.split(".");for(var c,d,e=0,h=a.length;e<h;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};u.isDataTable=u.fnIsDataTable=function(a){var b=l(a).get(0),c=!1;if(a instanceof u.Api)return!0;l.each(u.settings,function(d,e){d=e.nScrollHead?l("table",e.nScrollHead)[0]:null;var h=e.nScrollFoot?l("table",e.nScrollFoot)[0]:null;if(e.nTable===b||d===b||h===b)c=!0});return c};u.tables=u.fnTables=function(a){var b=
!1;l.isPlainObject(a)&&(b=a.api,a=a.visible);var c=l.map(u.settings,function(d){if(!a||a&&l(d.nTable).is(":visible"))return d.nTable});return b?new B(c):c};u.camelToHungarian=P;y("$()",function(a,b){b=this.rows(b).nodes();b=l(b);return l([].concat(b.filter(a).toArray(),b.find(a).toArray()))});l.each(["on","one","off"],function(a,b){y(b+"()",function(){var c=Array.prototype.slice.call(arguments);c[0]=l.map(c[0].split(/\s/),function(e){return e.match(/\.dt\b/)?e:e+".dt"}).join(" ");var d=l(this.tables().nodes());
d[b].apply(d,c);return this})});y("clear()",function(){return this.iterator("table",function(a){Ka(a)})});y("settings()",function(){return new B(this.context,this.context)});y("init()",function(){var a=this.context;return a.length?a[0].oInit:null});y("data()",function(){return this.iterator("table",function(a){return U(a.aoData,"_aData")}).flatten()});y("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,h=b.nTBody,f=b.nTHead,
g=b.nTFoot,k=l(e);h=l(h);var m=l(b.nTableWrapper),n=l.map(b.aoData,function(t){return t.nTr}),p;b.bDestroying=!0;F(b,"aoDestroyCallback","destroy",[b]);a||(new B(b)).columns().visible(!0);m.off(".DT").find(":not(tbody *)").off(".DT");l(z).off(".DT-"+b.sInstance);e!=f.parentNode&&(k.children("thead").detach(),k.append(f));g&&e!=g.parentNode&&(k.children("tfoot").detach(),k.append(g));b.aaSorting=[];b.aaSortingFixed=[];Sa(b);l(n).removeClass(b.asStripeClasses.join(" "));l("th, td",f).removeClass(d.sSortable+
" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);h.children().detach();h.append(n);f=a?"remove":"detach";k[f]();m[f]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),k.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&h.children().each(function(t){l(this).addClass(b.asDestroyStripes[t%p])}));c=l.inArray(b,u.settings);-1!==c&&u.settings.splice(c,1)})});l.each(["column","row","cell"],function(a,b){y(b+"s().every()",function(c){var d=this.selector.opts,e=
this;return this.iterator(b,function(h,f,g,k,m){c.call(e[b](f,"cell"===b?g:d,"cell"===b?d:q),f,g,k,m)})})});y("i18n()",function(a,b,c){var d=this.context[0];a=na(a)(d.oLanguage);a===q&&(a=b);c!==q&&l.isPlainObject(a)&&(a=a[c]!==q?a[c]:a._);return a.replace("%d",c)});u.version="1.11.5";u.settings=[];u.models={};u.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0,"return":!1};u.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",
src:null,idx:-1};u.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};u.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,
25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,
fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){return{}}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},
fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",
sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:l.extend({},u.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};E(u.defaults);u.defaults.column={aDataSort:null,
iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};E(u.defaults.column);u.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,
iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],
aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,jqXHR:null,json:q,oAjaxData:q,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,
bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==Q(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==Q(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,h=
e.bPaginate;return e.bServerSide?!1===h||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!h||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};u.ext=M={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:u.fnVersionCheck,
iApiIndex:0,oJUIClasses:{},sVersion:u.version};l.extend(M,{afnFiltering:M.search,aTypes:M.type.detect,ofnSearch:M.type.search,oSort:M.type.order,afnSortData:M.order,aoFeatures:M.feature,oApi:M.internal,oStdClasses:M.classes,oPagination:M.pager});l.extend(u.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",
sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_desc_disabled",sSortableDesc:"sorting_asc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",
sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var ec=u.ext.pager;l.extend(ec,{simple:function(a,b){return["previous","next"]},full:function(a,b){return["first","previous","next","last"]},numbers:function(a,b){return[Da(a,b)]},simple_numbers:function(a,b){return["previous",Da(a,b),"next"]},
full_numbers:function(a,b){return["first","previous",Da(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",Da(a,b),"last"]},_numbers:Da,numbers_length:7});l.extend(!0,u.ext.renderer,{pageButton:{_:function(a,b,c,d,e,h){var f=a.oClasses,g=a.oLanguage.oPaginate,k=a.oLanguage.oAria.paginate||{},m,n,p=0,t=function(x,w){var r,C=f.sPageButtonDisabled,G=function(I){Ra(a,I.data.action,!0)};var aa=0;for(r=w.length;aa<r;aa++){var L=w[aa];if(Array.isArray(L)){var O=l("<"+(L.DT_el||"div")+"/>").appendTo(x);
t(O,L)}else{m=null;n=L;O=a.iTabIndex;switch(L){case "ellipsis":x.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=g.sFirst;0===e&&(O=-1,n+=" "+C);break;case "previous":m=g.sPrevious;0===e&&(O=-1,n+=" "+C);break;case "next":m=g.sNext;if(0===h||e===h-1)O=-1,n+=" "+C;break;case "last":m=g.sLast;if(0===h||e===h-1)O=-1,n+=" "+C;break;default:m=a.fnFormatNumber(L+1),n=e===L?f.sPageButtonActive:""}null!==m&&(O=l("<a>",{"class":f.sPageButton+" "+n,"aria-controls":a.sTableId,"aria-label":k[L],
"data-dt-idx":p,tabindex:O,id:0===c&&"string"===typeof L?a.sTableId+"_"+L:null}).html(m).appendTo(x),ob(O,{action:L},G),p++)}}};try{var v=l(b).find(A.activeElement).data("dt-idx")}catch(x){}t(l(b).empty(),d);v!==q&&l(b).find("[data-dt-idx="+v+"]").trigger("focus")}}});l.extend(u.ext.type.detect,[function(a,b){b=b.oLanguage.sDecimal;return tb(a,b)?"num"+b:null},function(a,b){if(a&&!(a instanceof Date)&&!vc.test(a))return null;b=Date.parse(a);return null!==b&&!isNaN(b)||Z(a)?"date":null},function(a,
b){b=b.oLanguage.sDecimal;return tb(a,b,!0)?"num-fmt"+b:null},function(a,b){b=b.oLanguage.sDecimal;return jc(a,b)?"html-num"+b:null},function(a,b){b=b.oLanguage.sDecimal;return jc(a,b,!0)?"html-num-fmt"+b:null},function(a,b){return Z(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);l.extend(u.ext.type.search,{html:function(a){return Z(a)?a:"string"===typeof a?a.replace(gc," ").replace(Va,""):""},string:function(a){return Z(a)?a:"string"===typeof a?a.replace(gc," "):a}});var Ua=function(a,
b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=ic(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};l.extend(M.type.order,{"date-pre":function(a){a=Date.parse(a);return isNaN(a)?-Infinity:a},"html-pre":function(a){return Z(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return Z(a)?"":"string"===typeof a?a.toLowerCase():a.toString?a.toString():""},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<
b?1:a>b?-1:0}});Xa("");l.extend(!0,u.ext.renderer,{header:{_:function(a,b,c,d){l(a.nTable).on("order.dt.DT",function(e,h,f,g){a===h&&(e=c.idx,b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass("asc"==g[e]?d.sSortAsc:"desc"==g[e]?d.sSortDesc:c.sSortingClass))})},jqueryui:function(a,b,c,d){l("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(l("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);l(a.nTable).on("order.dt.DT",function(e,h,f,g){a===h&&(e=c.idx,b.removeClass(d.sSortAsc+
" "+d.sSortDesc).addClass("asc"==g[e]?d.sSortAsc:"desc"==g[e]?d.sSortDesc:c.sSortingClass),b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass("asc"==g[e]?d.sSortJUIAsc:"desc"==g[e]?d.sSortJUIDesc:c.sSortingClassJUI))})}}});var yb=function(a){Array.isArray(a)&&(a=a.join(","));return"string"===typeof a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};u.render=
{number:function(a,b,c,d,e){return{display:function(h){if("number"!==typeof h&&"string"!==typeof h)return h;var f=0>h?"-":"",g=parseFloat(h);if(isNaN(g))return yb(h);g=g.toFixed(c);h=Math.abs(g);g=parseInt(h,10);h=c?b+(h-g).toFixed(c).substring(2):"";0===g&&0===parseFloat(h)&&(f="");return f+(d||"")+g.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+h+(e||"")}}},text:function(){return{display:yb,filter:yb}}};l.extend(u.ext.internal,{_fnExternApiFunc:fc,_fnBuildAjax:Oa,_fnAjaxUpdate:Gb,_fnAjaxParameters:Pb,
_fnAjaxUpdateDraw:Qb,_fnAjaxDataSrc:za,_fnAddColumn:Ya,_fnColumnOptions:Ga,_fnAdjustColumnSizing:sa,_fnVisibleToColumnIndex:ta,_fnColumnIndexToVisible:ua,_fnVisbleColumns:oa,_fnGetColumns:Ia,_fnColumnTypes:$a,_fnApplyColumnDefs:Db,_fnHungarianMap:E,_fnCamelToHungarian:P,_fnLanguageCompat:ma,_fnBrowserDetect:Bb,_fnAddData:ia,_fnAddTr:Ja,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==q?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return l.inArray(c,a.aoData[b].anCells)},_fnGetCellData:T,
_fnSetCellData:Eb,_fnSplitObjNotation:cb,_fnGetObjectDataFn:na,_fnSetObjectDataFn:ha,_fnGetDataMaster:db,_fnClearTable:Ka,_fnDeleteIndex:La,_fnInvalidate:va,_fnGetRowElements:bb,_fnCreateTr:ab,_fnBuildHead:Fb,_fnDrawHead:xa,_fnDraw:ja,_fnReDraw:ka,_fnAddOptionsHtml:Ib,_fnDetectHeader:wa,_fnGetUniqueThs:Na,_fnFeatureHtmlFilter:Kb,_fnFilterComplete:ya,_fnFilterCustom:Tb,_fnFilterColumn:Sb,_fnFilter:Rb,_fnFilterCreateSearch:ib,_fnEscapeRegex:jb,_fnFilterData:Ub,_fnFeatureHtmlInfo:Nb,_fnUpdateInfo:Xb,
_fnInfoMacros:Yb,_fnInitialise:Aa,_fnInitComplete:Pa,_fnLengthChange:kb,_fnFeatureHtmlLength:Jb,_fnFeatureHtmlPaginate:Ob,_fnPageChange:Ra,_fnFeatureHtmlProcessing:Lb,_fnProcessingDisplay:V,_fnFeatureHtmlTable:Mb,_fnScrollDraw:Ha,_fnApplyToChildren:ca,_fnCalculateColumnWidths:Za,_fnThrottle:hb,_fnConvertToWidth:Zb,_fnGetWidestNode:$b,_fnGetMaxLenString:ac,_fnStringToCss:K,_fnSortFlatten:pa,_fnSort:Hb,_fnSortAria:cc,_fnSortListener:nb,_fnSortAttachListener:fb,_fnSortingClasses:Sa,_fnSortData:bc,_fnSaveState:Ca,
_fnLoadState:dc,_fnImplementState:pb,_fnSettingsFromNode:Ta,_fnLog:da,_fnMap:X,_fnBindAction:ob,_fnCallbackReg:R,_fnCallbackFire:F,_fnLengthOverflow:lb,_fnRenderer:gb,_fnDataSource:Q,_fnRowAttributes:eb,_fnExtend:qb,_fnCalculateEnd:function(){}});l.fn.dataTable=u;u.$=l;l.fn.dataTableSettings=u.settings;l.fn.dataTableExt=u.ext;l.fn.DataTable=function(a){return l(this).dataTable(a).api()};l.each(u,function(a,b){l.fn.DataTable[a]=b});return u});
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var e=a.length,d=0;d<e;d++){var f=a[d];if(b.call(c,f,d,a))return{i:d,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,e){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,e):$jscomp.polyfillUnisolated(a,b,c,e))};$jscomp.polyfillUnisolated=function(a,b,c,e){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];if(!(d in c))return;c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,e){var d=a.split(".");a=1===d.length;e=d[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<d.length-1;f++){var l=d[f];if(!(l in e))return;e=e[l]}d=d[d.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?e[d]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,d,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[d]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(d):$jscomp.POLYFILL_PREFIX+d,d=
$jscomp.propertyToPolyfillSymbol[d],$jscomp.defineProperty(e,d,{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(b,c){return $jscomp.findInternal(this,b,c).v}},"es6","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)}):"object"===typeof exports?module.exports=function(b,c){b||(b=window);c&&c.fn.dataTable||(c=require("datatables.net")(b,c).$);return a(c,b,b.document)}:a(jQuery,window,document)})(function(a,b,c,e){var d=a.fn.dataTable;a.extend(!0,d.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
renderer:"bootstrap"});a.extend(d.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap5",sFilterInput:"form-control form-control-sm",sLengthSelect:"form-select form-select-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});d.ext.renderer.pageButton.bootstrap=function(f,l,A,B,m,t){var u=new d.Api(f),C=f.oClasses,n=f.oLanguage.oPaginate,D=f.oLanguage.oAria.paginate||{},h,k,v=0,y=function(q,w){var x,E=function(p){p.preventDefault();a(p.currentTarget).hasClass("disabled")||
u.page()==p.data.action||u.page(p.data.action).draw("page")};var r=0;for(x=w.length;r<x;r++){var g=w[r];if(Array.isArray(g))y(q,g);else{k=h="";switch(g){case "ellipsis":h="&#x2026;";k="disabled";break;case "first":h=n.sFirst;k=g+(0<m?"":" disabled");break;case "previous":h=n.sPrevious;k=g+(0<m?"":" disabled");break;case "next":h=n.sNext;k=g+(m<t-1?"":" disabled");break;case "last":h=n.sLast;k=g+(m<t-1?"":" disabled");break;default:h=g+1,k=m===g?"active":""}if(h){var F=a("<li>",{"class":C.sPageButton+
" "+k,id:0===A&&"string"===typeof g?f.sTableId+"_"+g:null}).append(a("<a>",{href:"#","aria-controls":f.sTableId,"aria-label":D[g],"data-dt-idx":v,tabindex:f.iTabIndex,"class":"page-link"}).html(h)).appendTo(q);f.oApi._fnBindAction(F,{action:g},E);v++}}}};try{var z=a(l).find(c.activeElement).data("dt-idx")}catch(q){}y(a(l).empty().html('<ul class="pagination"/>').children("ul"),B);z!==e&&a(l).find("[data-dt-idx="+z+"]").trigger("focus")};return d});
function HighQAPI(options) {

     /**
     * Create instance of API
     * @param {string} url URL of instance of HighQ API
     * @param {number} version Version of API
     * @param {string} authentication Type of authentication mechanism cookie or api
     * @param {string} apiKey API Key if required
     * @return {number} - Version of API
     */
    var settings = {
        url: "https://www.extranet.ag/ag/api/",
        version: 13,
        authentication: "cookie",
        apiKey: null
    };

    var self = this;

    if (options == null) {

    } else {
        settings = options;
    }

    /**
     * Get records for a sheet
     * @param {number} sheetId Sheet ID
     * @return {object} - List of iSheet records
     */
    this.getSheetRecords = function (sheetId) {

        var url = `${settings.url}${settings.version}/isheet/${sheetId}/items`;

        return self.get(url);
    } 
    
    /**
     * Get Folders within a folder 
     * @param {number} folderId Site ID
     * @return {object} - Folders list
     */
    this.getFolders = function (folderId) {

        var url = `${settings.url}${settings.version}/folders/${folderId}`;
        
        return self.get(url);
    } 

     /**
     * Get Sheets for Site
     * @param {number} siteId Site ID
     * @return {object} - Sheets in the site
     */
    this.getSheets = function (siteId) {

        var url = `${settings.url}${settings.version}/isheets?siteid=${siteId}`;
        
        return self.get(url);
    } 
    
    /**
     * Get Audit for Item
     * @param {number} sheetId Sheet ID
     * @param {number} itemId Item ID
     * @return {object} - Audit for Item
     */
    this.getItemAudit = function (sheetId, itemId) {

        var url = `${settings.url}${settings.version}/isheet/${sheetId}/items/${itemId}/audit`;
        
        return self.get(url);
    }

     /**
     * Get user details by ID
     * @param {number} userId User ID
     * @return {object} - User Details
     */
    this.getUser = function (userId) {

        var url = `${settings.url}${settings.version}/users/${userId}`;
        
        return self.get(url);

    }

     /**
     * Get sheets for Site
     * @param {number} siteId Site ID
     */
    this.getSheets = function (siteId) {

        var url = `${settings.url}${settings.version}/isheets?siteid=${siteId}`;
        
        return self.get(url);
    }

    /**
     * Get events
     * @param {string} sites A comma delimited list of site IDs: 1,2,3
     * @param {string} authorId  A comma delimited list of User IDs: 19900,20020
     * @param {string} period Time period for the events:  PERIOD_TYPE_ALL_UPCOMING, PERIOD_TYPE_TODAY, PERIOD_TYPE_THIS_WEEK, PERIOD_TYPE_NEXT_7_DAYS, PERIOD_TYPE_NEXT_30_DAYS, PERIOD_TYPE_LAST_30_DAYS, PERIOD_TYPE_LAST_90_DAYS, PERIOD_TYPE_LAST_180_DAYS, PERIOD_TYPE_LAST_YEAR
     * @param {string} categories A comma delimited list of category IDs: 1,2,3
     * @param {string} orderby Order of the events by: START_DATE, END_DATE, PUBLISHED_DATE
    */
    this.getEvents = function (sites,authorId,period,categories,orderby) {

        var url = `${settings.url}${settings.version}/events?siteidcsv=${sites}`;

        if(authorId){
            url += `&authoridcsv=${authorId}`;
        }

        if(period){
            url += `&period=${period}`;
        }
        
        if(categories){
            url += `&categorycsv=${categories}`;
        }
        
        if(orderby){
            url += `&orderby=${orderby}`;
        }
        
        return self.get(url);

    } 

     /**
     * Get current user
     * @return {object} - User Details
     */
    this.getCurrentUser = function () {

        var url = `${settings.url}${settings.version}/users/${collab_common_userID}`;
        
        return self.get(url);

    } 
    
    this.get = async function(url) {

        var response;

        if(settings.authentication == "cookie"){
            response = await fetch(url, { credentials: 'include', headers: { 'Accept': 'application/json' } });
        }

        if(settings.authentication == "api"){
            response = await fetch(url, { credentials: 'include', headers: {'Authorization': "Bearer " + settings.apiKey, 'Accept': 'application/json' } });
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
        }

    }
}
function HighQ(options) {

    var settings = {
        url: "https://www.extranet.ag/ag/",
    };

    var self = this;

    if (options == null) {

    } else {
        settings = options;
    }

    this.generateFilterQuery = function (filters) {
        var url = "&advanceSearch=true";

        if (filters.type == "Any") {
            url = url + "&anySearch=" + filters.items[0].value;
        } else {
            if (filters.items) {
                $j.each(filter, function () {
                    url = url + "&filterValue_" + this.field + "=" + this.value;
                });
            }
        }

        return url;
    }

    this.getColumnValueByName = function (xmlElement, name, headers) {

        var content = {
            value: null,
            type: null,
            id: null,
            raw: null,
        };

        $j(headers).find('headColumn').each(function () {

            if ($j(this).find('columnValue').text() == name) {

                var typeOfColumn = $j(this).attr('columnTypeAlias');
                var position = $j(this).attr('position');

                content.id = $j(this).attr("columnid");
                content.type = typeOfColumn;

                switch (typeOfColumn) {
                    case "SHEET_COLUMN_TYPE_SINGLE_LINE_TEXT":
                        content.value = self.getColumnValue(xmlElement, position);
                        content.id += "_1";
                        break;
                    case "SHEET_COLUMN_TYPE_CHOICE":
                        content.value = self.getColumnValue(xmlElement, position);
                        content.id += "_3";
                        break;
                    case "SHEET_COLUMN_TYPE_DATE_AND_TIME":
                        content.raw = self.getRawColumnValue(xmlElement, position);
                        content.value = self.getColumnValue(xmlElement, position);
                        content.id += "_5";
                        break;
                    case "SHEET_COLUMN_TYPE_MULTIPLE_LINE_TEXT":
                        content.value = self.getColumnValue(xmlElement, position);
                        content.id += "_2";
                        break;
                    case "SHEET_COLUMN_TYPE_NUMBER":
                        content.value = self.getColumnValue(xmlElement, position);
                        content.id += "_4";
                        break;
                    case "SHEET_COLUMN_TYPE_HYPERLINK":
                        content.value = self.getHyperlink(xmlElement, position);
                        content.id += "_7"
                        break;
                    case "SHEET_COLUMN_TYPE_LOOKUP":
                        content.value = self.getUser(xmlElement, position);
                        content.id += "_6"
                        break;
                    default:
                        content.value = self.getColumnValue(xmlElement, position);
                }
            }
        });

        return content;

    }

    this.getColumnValue = function (xmlElement, id) {
        return $j(xmlElement).find('column[position=' + id + '] displayData').text();
    }


    this.getRawColumnValue = function (xmlElement, id) {
        return $j(xmlElement).find('column[position=' + id + '] rawData').text();
    }


    this.getUser = function (xmlElement, id) {

        var user = {
            text: $j(xmlElement).find('column[position=' + id + '] displayData lookupuser userDisplayName').text(),
            email: $j(xmlElement).find('column[position=' + id + '] displayData lookupuser email').text(),
        }

        return user;
    }

    this.getHyperlink = function (xmlElement, id) {

        var hyperlink = {
            text: $j(xmlElement).find('column[position=' + id + '] rawData linkDisplayName').text(),
            link: $j(xmlElement).find('column[position=' + id + '] rawData linkDisplayURL').text(),
        }

        return hyperlink;
    }

    this.getRecordId = function (xmlElement) {
        return $j(xmlElement).find('itemID').text();
    }

    this.generateSheetUrl = function (siteId, sheetId, viewId, itemId, type) {
        var url = settings.url + "sheetHome.action?metaData.siteID=" + siteId + "&metaData.sheetId=" + sheetId + "&metaData.sheetViewID=" + viewId;

        if (type == "View") {
            if (itemId) {
                url += "&itemId=" + itemId;
            }
        }

        if (type == "Edit") {
            if (itemId) {
                url += "&editItemId=" + itemId;
            }
        }

        return url;


    }

    this.isLocalHost = function () {
        console.log("Checking if localhost: " + location.hostname)

        if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
            console.log("We are local")
            return true;
        } else {
            console.log("We are not local")
            return false;
        }
    }

    this.generateXmlUrl = function (siteId, sheetId, viewId) {

        var url = settings.url + "sheetViewExportXML.action?metaData.siteID=" + siteId + "&metaData.sheetId=" + sheetId + "&metaData.sheetViewID=" + viewId + "&metaData.isheetExportType=xml&errorWithoutRedirection=false";

        return url + "&ts=" + Date.now();
    }

    this.generateViewUrl = function (siteId, sheetId, viewId, itemId) {
        return settings.url + "sheetHome.action?metaData.siteID=" + siteId + "&metaData.sheetId=" + sheetId + "&metaData.sheetViewID=" + viewId + "&viewItemId=" + itemId;
    }

    this.generateEditUrl = function (siteId, sheetId, viewId, itemId) {
        return settings.url + "sheetHome.action?metaData.siteID=" + siteId + "&metaData.sheetId=" + sheetId + "&metaData.sheetViewID=" + viewId + "&editItemId=" + itemId;
    }

    this.getSheetData = function (siteId, sheetId, viewId) {

        var xmlUrl = this.generateXmlUrl(siteId, sheetId, viewId);

        console.log("Generating URL with " + siteId + " " + sheetId + " " + viewId)

        var dataSet = {
            records: null,
            headers: null,
            overview: null,
            count: 0,
        };

        if (xmlUrl.includes('undefined')) {
            console.log("Error with the url " + xmlUrl)
        } else {

            console.log("Requesting data for: " + xmlUrl)

            $j.ajax({
                url: xmlUrl,
                dataType: "xml",
                async: false,
                success: function (data) {
                    console.log("Request success");
                    var view = $j('view', data);

                    dataSet.count = view[0].attributes["recordCount"].value;
                    dataSet.records = $j('data', data);
                    dataSet.headers = $j('head', data);
                    dataSet.overview = $j('metaData', data);

                },
                error: function () {
                    console.log("Request failed")
                }
            });

        }

        return dataSet;


    }

    this.canUserAccessView = function (siteId, sheetId, viewId) {

        console.log("Requesting access check for: " + siteId + " " + sheetId + " " + viewId);

        var canAccess = false;

        $j.ajax({
            url: settings.url + "checkContentAccess.action?metaData.siteID=" + siteId + "&metaData.sheetId=" + sheetId + "&metaData.sheetViewID=" + viewId + "&contentTypeAlias=sheet",
            async: false,

        }).done(function (data) {
            console.log("Has access: " + data.access);
            canAccess = data.access;
        });

        return canAccess;
    }


    //Pass an array of objects
    // [  {siteId: 1, sheetId: 2, viewId: 3 }, {siteId: 1, sheetId: 3, viewId: 9 } ]
    this.getMultipleSheetData = function(sheets) {

        requestArray = [];

        sheets.forEach(element => {
            var xmlUrl = this.generateXmlUrl(element.siteId, element.id, element.viewId);
            requestArray.push(xmlUrl);
        });

        var response = [];

        return axios.all(requestArray.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {

            res.forEach(item => {

                var responseObject = {
                    sheet: null,
                    data: null,
                }

                var urlParams = new URLSearchParams(item.request.responseURL);

                var sheet = {
                    siteId: urlParams.get('metaData.siteID'),
                    sheetId: urlParams.get('metaData.sheetId'),
                    viewId: urlParams.get('metaData.sheetViewID'),
                }

                var dataSet = {
                    records: null,
                    headers: null,
                    overview: null,
                    count: 0,
                };

                var view = $j('view', item.data);

                dataSet.count = view[0].attributes["recordCount"].value;
                dataSet.records = $j('data', item.data);
                dataSet.headers = $j('head', item.data);
                dataSet.overview = $j('metaData', item.data);

                responseObject.data = dataSet;
                responseObject.sheet = sheet;

                response.push(responseObject);

            });

            return response;
        }));

    }


    this.getUserGroups = function (groups) {

        var userGroups = [];

        groups.forEach(function(group) {
            var canAccess = self.canUserAccessView(group.siteId,group.sheetId,group.viewId);

            if(canAccess){
                userGroups.push(group.name);
            }
        });

        return userGroups;

    }

    this.getParameterByName = function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    this.getViewLink = function (a) {
        var viewId = a.href.split(new RegExp('\\((.*)\\)'))[1].split(",")[0];
        return settings.url + "sheetHome.action?metaData.siteID=" + getParameterByName("metaData.siteID") + "&metaData.sheetId=" + getParameterByName("metaData.sheetId") + "&metaData.sheetViewID=" + viewId;
    }
}
let map;
let infowindow;
let xmlLink;
let xmlData;
let countries = [];
let dataValues = {
	siteId: null,
	sheetId: null,
	viewId: null,
	countryColumn: null,
	colourColumn: null,
	latitudeColumn: null,
	longitudeColumn: null,
	contentColumn: null,
	hyperlinkColumn: null,
};

const loadData = (values) => {
	values.forEach((item, i) => {
		Object.entries(dataValues).forEach(([key, value], index) => {
			if (i == index) {
				dataValues[key] = Number(item);
			}
		});
	});
	xmlLink = `https://www.extranet.ag/ag/sheetViewExportXML.action?metaData.siteID=${dataValues.siteId}&metaData.sheetId=${dataValues.sheetId}&metaData.sheetViewID=${dataValues.viewId}&metaData.isheetExportType=xml&errorWithoutRedirection=false`;
	$j.ajax({
		url: xmlLink,
		dataType: "xml",
		success: function (data) {
			xmlData = $j("data", data);
			getColumnsData();
		},
	});
};

const getColumnsData = () => {
	xmlData.find("item").each(function () {
		var self = this;
		var country = $j(self)
			.find(`column[columnid=${dataValues.countryColumn}] displayData`)
			.text();
		var colour = $j(self)
			.find(`column[columnid=${dataValues.colourColumn}] displayData`)
			.text();
		var hyperlinkText = $j(self)
			.find(`column[columnid=${dataValues.contentColumn}] displayData`)
			.text();
		var hyperlink = $j(self)
			.find(`column[columnid=${dataValues.hyperlinkColumn}] displayData`)
			.text();
		var latitude = $j(self)
			.find(`column[columnid=${dataValues.latitudeColumn}] displayData`)
			.text();
		var longitude = $j(self)
			.find(`column[columnid=${dataValues.longitudeColumn}] displayData`)
			.text();

		if (countries.length == 0) {
			countries.push({
				country: country,
				colour: colour,
				coords: { lat: Number(latitude), lng: Number(longitude) },
				infoWindow: {
					hyperlinkText: hyperlinkText,
					hyperlink: hyperlink,
				},
			});
		} else {
			var counter = 0;
			countries.forEach(function (item) {
				if (item.country == country || country == "") {
					counter++;
				}
			});
			if (counter == 0) {
				countries.push({
					country: country,
					colour: colour,
					coords: { lat: Number(latitude), lng: Number(longitude) },
					infoWindow: {
						hyperlinkText: hyperlinkText,
						hyperlink: hyperlink,
					},
				});
			}
		}
	});
	createMap(countries);
};

const createMap = async (allCountries) => {
	let options = {
		zoom: 2,
		center: new google.maps.LatLng(0.0, 0.0),
		styles: [
			{ elementType: "geometry", stylers: [{ color: "#DCDCDC" }] },
			{
				elementType: "labels.text.stroke",
				stylers: [{ color: "#FFFFFF" }],
			},
			{
				elementType: "labels.text.fill",
				stylers: [{ color: "#435B76" }],
			},
			{
				featureType: "administrative.country",
				elementType: "geometry",
				stylers: [{ color: "#FFFFFF" }],
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [{ color: "#FFFFFF" }],
			},
			{
				featureType: "administrative.country",
				elementType: "geometry.stroke",
				stylers: [
					{
						color: "#435B76",
					},
				],
			},
		],
	};

	try {
		map = new google.maps.Map(document.getElementById("map"), options);
		map.setOptions({ disableDoubleClickZoom: true });

		// Load GeoJSON
		await map.data.loadGeoJson(
			"https://black-rock-057ca3b03.1.azurestaticapps.net/json/world-geojson.json"
		);

		map.data.setStyle((feature) => {
			let colour;
			let state = feature.getProperty("admin");
			let filteredCountries = allCountries.filter((item) => {
				if (item.country === state && item.colour) {
					colour = item.colour;

					// TODO: learn how to automate the process of finding centred coords
					// coords = feature.getGeometry();
					// coords.forEachLatLng((latLng) => {
					// 	const lat = latLng.lat();
					// 	const lng = latLng.lng();
					// 	item.coords.lat = lat;
					// 	item.coords.lng = lng;
					// });

					return true;
				}
			});
			if (filteredCountries.length > 0) {
				return {
					fillColor: colour,
					fillOpacity: 0.5,
					strokeColor: colour,
					strokeWeight: 1,
					visible: true,
				};
			} else {
				return {
					visible: false,
				};
			}
		});

		map.data.addListener("mouseover", function (event) {
			map.data.revertStyle();
			map.data.overrideStyle(event.feature, {
				fillOpacity: 1,
			});
		});
		map.data.addListener("mouseout", (event) => {
			map.data.revertStyle();
		});

		let loop = 0;

		allCountries.forEach(function () {
			addInfoWindows(allCountries[loop]);
			loop++;
		});
	} catch (err) {
		console.log(err);
	}

	document
		.getElementById("map")
		.classList.replace("map-invisible", "map-visible");
};

const addInfoWindows = (props) => {
	if (props.coords.lat && props.coords.lng) {
		let marker = new google.maps.Marker({
			position: props.coords,
			map: map,
			optimized: false,
		});
		if (props.infoWindow.hyperlinkText && props.infoWindow.hyperlink) {
			let iwContent = `<a href=${props.infoWindow.hyperlink} target='_blank' class="btn standard-btn-map"">${props.infoWindow.hyperlinkText}</a>`;
			marker.addListener("click", function () {
				if (infowindow) {
					infowindow.close();
				}
				infowindow = new google.maps.InfoWindow({
					content: iwContent,
					disableAutoPan: true,
				});
				infowindow.open(map, marker);
			});
		} else if (props.infoWindow.hyperlinkText && !props.infoWindow.hyperlink) {
			let iwContent = `<a href="#" class="btn standard-btn-map" style="text-decoration: none; cursor: default;">${props.infoWindow.hyperlinkText}</a>`;
			marker.addListener("click", function () {
				if (infowindow) {
					infowindow.close();
				}
				infowindow = new google.maps.InfoWindow({
					content: iwContent,
					disableAutoPan: true,
				});
				infowindow.open(map, marker);
			});
		}
	}
};

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function f(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;for(var t in e)if(m(e,t))return;return 1}function r(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function a(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function d(e,t){for(var n=[],s=0;s<e.length;++s)n.push(t(e[s],s));return n}function c(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function _(e,t,n,s){return xt(e,t,n,s,!0).utc()}function y(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function g(e){if(null==e._isValid){var t=y(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function w(e){var t=_(NaN);return null!=e?c(y(t),e):y(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var p=f.momentProperties=[],t=!1;function v(e,t){var n,s,i;if(r(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),r(t._i)||(e._i=t._i),r(t._f)||(e._f=t._f),r(t._l)||(e._l=t._l),r(t._strict)||(e._strict=t._strict),r(t._tzm)||(e._tzm=t._tzm),r(t._isUTC)||(e._isUTC=t._isUTC),r(t._offset)||(e._offset=t._offset),r(t._pf)||(e._pf=y(t)),r(t._locale)||(e._locale=t._locale),0<p.length)for(n=0;n<p.length;n++)r(i=t[s=p[n]])||(e[s]=i);return e}function k(e){v(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,f.updateOffset(this),t=!1)}function M(e){return e instanceof k||null!=e&&null!=e._isAMomentObject}function D(e){!1===f.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return c(function(){if(null!=f.deprecationHandler&&f.deprecationHandler(null,i),a){for(var e,t,n=[],s=0;s<arguments.length;s++){if(e="","object"==typeof arguments[s]){for(t in e+="\n["+s+"] ",arguments[0])m(arguments[0],t)&&(e+=t+": "+arguments[0][t]+", ");e=e.slice(0,-2)}else e=arguments[s];n.push(e)}D(i+"\nArguments: "+Array.prototype.slice.call(n).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,S={};function Y(e,t){null!=f.deprecationHandler&&f.deprecationHandler(e,t),S[e]||(D(t),S[e]=!0)}function O(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=c({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},c(s[n],e[n]),c(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=c({},s[n]));return s}function x(e){null!=e&&this.set(e)}f.suppressDeprecationWarnings=!1,f.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};function T(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,P=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,R={},W={};function C(e,t,n,s){var i="string"==typeof s?function(){return this[s]()}:s;e&&(W[e]=i),t&&(W[t[0]]=function(){return T(i.apply(this,arguments),t[1],t[2])}),n&&(W[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function U(e,t){return e.isValid()?(t=H(t,e.localeData()),R[t]=R[t]||function(s){for(var e,i=s.match(N),t=0,r=i.length;t<r;t++)W[i[t]]?i[t]=W[i[t]]:i[t]=(e=i[t]).match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");return function(e){for(var t="",n=0;n<r;n++)t+=O(i[n])?i[n].call(e,s):i[n];return t}}(t),R[t](e)):e.localeData().invalidDate()}function H(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(P.lastIndex=0;0<=n&&P.test(e);)e=e.replace(P,s),P.lastIndex=0,--n;return e}var F={};function L(e,t){var n=e.toLowerCase();F[n]=F[n+"s"]=F[t]=e}function V(e){return"string"==typeof e?F[e]||F[e.toLowerCase()]:void 0}function G(e){var t,n,s={};for(n in e)m(e,n)&&(t=V(n))&&(s[t]=e[n]);return s}var E={};function A(e,t){E[e]=t}function j(e){return e%4==0&&e%100!=0||e%400==0}function I(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Z(e){var t=+e,n=0;return 0!=t&&isFinite(t)&&(n=I(t)),n}function z(t,n){return function(e){return null!=e?(q(this,t,e),f.updateOffset(this,n),this):$(this,t)}}function $(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function q(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&j(e.year())&&1===e.month()&&29===e.date()?(n=Z(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),xe(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}var B,J=/\d/,Q=/\d\d/,X=/\d{3}/,K=/\d{4}/,ee=/[+-]?\d{6}/,te=/\d\d?/,ne=/\d\d\d\d?/,se=/\d\d\d\d\d\d?/,ie=/\d{1,3}/,re=/\d{1,4}/,ae=/[+-]?\d{1,6}/,oe=/\d+/,ue=/[+-]?\d+/,le=/Z|[+-]\d\d:?\d\d/gi,he=/Z|[+-]\d\d(?::?\d\d)?/gi,de=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function ce(e,n,s){B[e]=O(n)?n:function(e,t){return e&&s?s:n}}function fe(e,t){return m(B,e)?B[e](t._strict,t._locale):new RegExp(me(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function me(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}B={};var _e={};function ye(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=Z(e)}),t=0;t<e.length;t++)_e[e[t]]=s}function ge(e,i){ye(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var we,pe=0,ve=1,ke=2,Me=3,De=4,Se=5,Ye=6,Oe=7,be=8;function xe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1==s?j(e)?29:28:31-s%7%2}we=Array.prototype.indexOf?Array.prototype.indexOf:function(e){for(var t=0;t<this.length;++t)if(this[t]===e)return t;return-1},C("M",["MM",2],"Mo",function(){return this.month()+1}),C("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),C("MMMM",0,0,function(e){return this.localeData().months(this,e)}),L("month","M"),A("month",8),ce("M",te),ce("MM",te,Q),ce("MMM",function(e,t){return t.monthsShortRegex(e)}),ce("MMMM",function(e,t){return t.monthsRegex(e)}),ye(["M","MM"],function(e,t){t[ve]=Z(e)-1}),ye(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[ve]=i:y(n).invalidMonth=e});var Te="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ne="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Pe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Re=de,We=de;function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=Z(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),xe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Ce(this,e),f.updateOffset(this,!0),this):$(this,"Month")}function He(){function e(e,t){return t.length-e.length}for(var t,n=[],s=[],i=[],r=0;r<12;r++)t=_([2e3,r]),n.push(this.monthsShort(t,"")),s.push(this.months(t,"")),i.push(this.months(t,"")),i.push(this.monthsShort(t,""));for(n.sort(e),s.sort(e),i.sort(e),r=0;r<12;r++)n[r]=me(n[r]),s[r]=me(s[r]);for(r=0;r<24;r++)i[r]=me(i[r]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function Fe(e){return j(e)?366:365}C("Y",0,0,function(){var e=this.year();return e<=9999?T(e,4):"+"+e}),C(0,["YY",2],0,function(){return this.year()%100}),C(0,["YYYY",4],0,"year"),C(0,["YYYYY",5],0,"year"),C(0,["YYYYYY",6,!0],0,"year"),L("year","y"),A("year",1),ce("Y",ue),ce("YY",te,Q),ce("YYYY",re,K),ce("YYYYY",ae,ee),ce("YYYYYY",ae,ee),ye(["YYYYY","YYYYYY"],pe),ye("YYYY",function(e,t){t[pe]=2===e.length?f.parseTwoDigitYear(e):Z(e)}),ye("YY",function(e,t){t[pe]=f.parseTwoDigitYear(e)}),ye("Y",function(e,t){t[pe]=parseInt(e,10)}),f.parseTwoDigitYear=function(e){return Z(e)+(68<Z(e)?1900:2e3)};var Le=z("FullYear",!0);function Ve(e){var t,n;return e<100&&0<=e?((n=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ge(e,t,n){var s=7+t-n;return s-(7+Ve(e,0,s).getUTCDay()-t)%7-1}function Ee(e,t,n,s,i){var r,a=1+7*(t-1)+(7+n-s)%7+Ge(e,s,i),o=a<=0?Fe(r=e-1)+a:a>Fe(e)?(r=e+1,a-Fe(e)):(r=e,a);return{year:r,dayOfYear:o}}function Ae(e,t,n){var s,i,r=Ge(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+je(i=e.year()-1,t,n):a>je(e.year(),t,n)?(s=a-je(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function je(e,t,n){var s=Ge(e,t,n),i=Ge(e+1,t,n);return(Fe(e)-s+i)/7}C("w",["ww",2],"wo","week"),C("W",["WW",2],"Wo","isoWeek"),L("week","w"),L("isoWeek","W"),A("week",5),A("isoWeek",5),ce("w",te),ce("ww",te,Q),ce("W",te),ce("WW",te,Q),ge(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=Z(e)});function Ie(e,t){return e.slice(t,7).concat(e.slice(0,t))}C("d",0,"do","day"),C("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),C("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),C("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),C("e",0,0,"weekday"),C("E",0,0,"isoWeekday"),L("day","d"),L("weekday","e"),L("isoWeekday","E"),A("day",11),A("weekday",11),A("isoWeekday",11),ce("d",te),ce("e",te),ce("E",te),ce("dd",function(e,t){return t.weekdaysMinRegex(e)}),ce("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ce("dddd",function(e,t){return t.weekdaysRegex(e)}),ge(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:y(n).invalidWeekday=e}),ge(["d","e","E"],function(e,t,n,s){t[s]=Z(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),$e="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),qe=de,Be=de,Je=de;function Qe(){function e(e,t){return t.length-e.length}for(var t,n,s,i,r=[],a=[],o=[],u=[],l=0;l<7;l++)t=_([2e3,1]).day(l),n=me(this.weekdaysMin(t,"")),s=me(this.weekdaysShort(t,"")),i=me(this.weekdays(t,"")),r.push(n),a.push(s),o.push(i),u.push(n),u.push(s),u.push(i);r.sort(e),a.sort(e),o.sort(e),u.sort(e),this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){C(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}C("H",["HH",2],0,"hour"),C("h",["hh",2],0,Xe),C("k",["kk",2],0,function(){return this.hours()||24}),C("hmm",0,0,function(){return""+Xe.apply(this)+T(this.minutes(),2)}),C("hmmss",0,0,function(){return""+Xe.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),C("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),C("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),L("hour","h"),A("hour",13),ce("a",et),ce("A",et),ce("H",te),ce("h",te),ce("k",te),ce("HH",te,Q),ce("hh",te,Q),ce("kk",te,Q),ce("hmm",ne),ce("hmmss",se),ce("Hmm",ne),ce("Hmmss",se),ye(["H","HH"],Me),ye(["k","kk"],function(e,t,n){var s=Z(e);t[Me]=24===s?0:s}),ye(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ye(["h","hh"],function(e,t,n){t[Me]=Z(e),y(n).bigHour=!0}),ye("hmm",function(e,t,n){var s=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s)),y(n).bigHour=!0}),ye("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s,2)),t[Se]=Z(e.substr(i)),y(n).bigHour=!0}),ye("Hmm",function(e,t,n){var s=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s))}),ye("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[Me]=Z(e.substr(0,s)),t[De]=Z(e.substr(s,2)),t[Se]=Z(e.substr(i))});var tt=z("Hours",!0);var nt,st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Te,monthsShort:Ne,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ut(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&function(e,t){for(var n=Math.min(e.length,t.length),s=0;s<n;s+=1)if(e[s]!==t[s])return s;return n}(i,n)>=t-1)break;t--}r++}return nt}function ut(t){var e;if(void 0===it[t]&&"undefined"!=typeof module&&module&&module.exports)try{e=nt._abbr,require("./locale/"+t),lt(e)}catch(e){it[t]=null}return it[t]}function lt(e,t){var n;return e&&((n=r(t)?dt(e):ht(e,t))?nt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),nt._abbr}function ht(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])Y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ut(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new x(b(s,t)),rt[e]&&rt[e].forEach(function(e){ht(e.name,e.config)}),lt(e),it[e]}function dt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return nt;if(!o(e)){if(t=ut(e))return t;e=[e]}return ot(e)}function ct(e){var t,n=e._a;return n&&-2===y(e).overflow&&(t=n[ve]<0||11<n[ve]?ve:n[ke]<1||n[ke]>xe(n[pe],n[ve])?ke:n[Me]<0||24<n[Me]||24===n[Me]&&(0!==n[De]||0!==n[Se]||0!==n[Ye])?Me:n[De]<0||59<n[De]?De:n[Se]<0||59<n[Se]?Se:n[Ye]<0||999<n[Ye]?Ye:-1,y(e)._overflowDayOfYear&&(t<pe||ke<t)&&(t=ke),y(e)._overflowWeeks&&-1===t&&(t=Oe),y(e)._overflowWeekday&&-1===t&&(t=be),y(e).overflow=t),e}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],wt=/^\/?Date\((-?\d+)/i,pt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,vt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function kt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(y(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Ot(e)}else e._isValid=!1}function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Ne.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}function Dt(e){var t,n,s,i,r=pt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(r){if(t=Mt(r[4],r[3],r[2],r[5],r[6],r[7]),n=r[1],s=t,i=e,n&&ze.indexOf(n)!==new Date(s[0],s[1],s[2]).getDay()&&(y(i).weekdayMismatch=!0,!void(i._isValid=!1)))return;e._a=t,e._tzm=function(e,t,n){if(e)return vt[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return 60*((s-i)/100)+i}(r[8],r[9],r[10]),e._d=Ve.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),y(e).rfc2822=!0}else e._isValid=!1}function St(e,t,n){return null!=e?e:null!=t?t:n}function Yt(e){var t,n,s,i,r,a,o,u=[];if(!e._d){for(a=e,o=new Date(f.now()),s=a._useUTC?[o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()]:[o.getFullYear(),o.getMonth(),o.getDate()],e._w&&null==e._a[ke]&&null==e._a[ve]&&function(e){var t,n,s,i,r,a,o,u,l;null!=(t=e._w).GG||null!=t.W||null!=t.E?(r=1,a=4,n=St(t.GG,e._a[pe],Ae(Tt(),1,4).year),s=St(t.W,1),((i=St(t.E,1))<1||7<i)&&(u=!0)):(r=e._locale._week.dow,a=e._locale._week.doy,l=Ae(Tt(),r,a),n=St(t.gg,e._a[pe],l.year),s=St(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r);s<1||s>je(n,r,a)?y(e)._overflowWeeks=!0:null!=u?y(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[pe]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=St(e._a[pe],s[pe]),(e._dayOfYear>Fe(r)||0===e._dayOfYear)&&(y(e)._overflowDayOfYear=!0),n=Ve(r,0,e._dayOfYear),e._a[ve]=n.getUTCMonth(),e._a[ke]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=u[t]=s[t];for(;t<7;t++)e._a[t]=u[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[Me]&&0===e._a[De]&&0===e._a[Se]&&0===e._a[Ye]&&(e._nextDay=!0,e._a[Me]=0),e._d=(e._useUTC?Ve:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,u),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Me]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(y(e).weekdayMismatch=!0)}}function Ot(e){if(e._f!==f.ISO_8601)if(e._f!==f.RFC_2822){e._a=[],y(e).empty=!0;for(var t,n,s,i,r,a,o,u=""+e._i,l=u.length,h=0,d=H(e._f,e._locale).match(N)||[],c=0;c<d.length;c++)n=d[c],(t=(u.match(fe(n,e))||[])[0])&&(0<(s=u.substr(0,u.indexOf(t))).length&&y(e).unusedInput.push(s),u=u.slice(u.indexOf(t)+t.length),h+=t.length),W[n]?(t?y(e).empty=!1:y(e).unusedTokens.push(n),r=n,o=e,null!=(a=t)&&m(_e,r)&&_e[r](a,o._a,o,r)):e._strict&&!t&&y(e).unusedTokens.push(n);y(e).charsLeftOver=l-h,0<u.length&&y(e).unusedInput.push(u),e._a[Me]<=12&&!0===y(e).bigHour&&0<e._a[Me]&&(y(e).bigHour=void 0),y(e).parsedDateParts=e._a.slice(0),y(e).meridiem=e._meridiem,e._a[Me]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[Me],e._meridiem),null!==(i=y(e).era)&&(e._a[pe]=e._locale.erasConvertYear(i,e._a[pe])),Yt(e),ct(e)}else Dt(e);else kt(e)}function bt(e){var t,n,s=e._i,i=e._f;return e._locale=e._locale||dt(e._l),null===s||void 0===i&&""===s?w({nullInput:!0}):("string"==typeof s&&(e._i=s=e._locale.preparse(s)),M(s)?new k(ct(s)):(a(s)?e._d=s:o(i)?function(e){var t,n,s,i,r,a,o=!1;if(0===e._f.length)return y(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,a=!1,t=v({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Ot(t),g(t)&&(a=!0),r+=y(t).charsLeftOver,r+=10*y(t).unusedTokens.length,y(t).score=r,o?r<s&&(s=r,n=t):(null==s||r<s||a)&&(s=r,n=t,a&&(o=!0));c(e,n||t)}(e):i?Ot(e):r(n=(t=e)._i)?t._d=new Date(f.now()):a(n)?t._d=new Date(n.valueOf()):"string"==typeof n?function(e){var t=wt.exec(e._i);null===t?(kt(e),!1===e._isValid&&(delete e._isValid,Dt(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:f.createFromInputFallback(e)))):e._d=new Date(+t[1])}(t):o(n)?(t._a=d(n.slice(0),function(e){return parseInt(e,10)}),Yt(t)):u(n)?function(e){var t,n;e._d||(n=void 0===(t=G(e._i)).day?t.date:t.day,e._a=d([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),Yt(e))}(t):h(n)?t._d=new Date(n):f.createFromInputFallback(t),g(e)||(e._d=null),e))}function xt(e,t,n,s,i){var r,a={};return!0!==t&&!1!==t||(s=t,t=void 0),!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&l(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new k(ct(bt(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tt(e,t,n,s){return xt(e,t,n,s,!1)}f.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),f.ISO_8601=function(){},f.RFC_2822=function(){};var Nt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:w()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:w()});function Rt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ct(e){var t=G(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){var t,n,s=!1;for(t in e)if(m(e,t)&&(-1===we.call(Wt,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<Wt.length;++n)if(e[Wt[n]]){if(s)return!1;parseFloat(e[Wt[n]])!==Z(e[Wt[n]])&&(s=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=dt(),this._bubble()}function Ut(e){return e instanceof Ct}function Ht(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){C(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+T(~~(e/60),2)+n+T(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ce("Z",he),ce("ZZ",he),ye(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Vt(he,e)});var Lt=/([\+\-]|\d\d)/gi;function Vt(e,t){var n,s,i=(t||"").match(e);return null===i?null:0===(s=60*(n=((i[i.length-1]||[])+"").match(Lt)||["-",0,0])[1]+Z(n[2]))?0:"+"===n[0]?s:-s}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(M(e)||a(e)?e.valueOf():Tt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),f.updateOffset(n,!1),n):Tt(e).local()}function Et(e){return-Math.round(e._d.getTimezoneOffset())}function At(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}f.updateOffset=function(){};var jt=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Zt(e,t){var n,s,i,r=e,a=null;return Ut(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(a=jt.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:Z(a[ke])*n,h:Z(a[Me])*n,m:Z(a[De])*n,s:Z(a[Se])*n,ms:Z(Ht(1e3*a[Ye]))*n}):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:zt(a[2],n),M:zt(a[3],n),w:zt(a[4],n),d:zt(a[5],n),h:zt(a[6],n),m:zt(a[7],n),s:zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=$t(e,t):((n=$t(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ct(r),Ut(e)&&m(e,"_locale")&&(s._locale=e._locale),Ut(e)&&m(e,"_isValid")&&(s._isValid=e._isValid),s}function zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function $t(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=t-e.clone().add(n.months,"M"),n}function qt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(Y(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),Bt(this,Zt(e,t),s),this}}function Bt(e,t,n,s){var i=t._milliseconds,r=Ht(t._days),a=Ht(t._months);e.isValid()&&(s=null==s||s,a&&Ce(e,$(e,"Month")+a*n),r&&q(e,"Date",$(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&f.updateOffset(e,r||a))}Zt.fn=Ct.prototype,Zt.invalid=function(){return Zt(NaN)};var Jt=qt(1,"add"),Qt=qt(-1,"subtract");function Xt(e){return"string"==typeof e||e instanceof String}function Kt(e){return M(e)||a(e)||Xt(e)||h(e)||function(t){var e=o(t),n=!1;e&&(n=0===t.filter(function(e){return!h(e)&&Xt(t)}).length);return e&&n}(e)||function(e){var t,n,s=u(e)&&!l(e),i=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"];for(t=0;t<r.length;t+=1)n=r[t],i=i||m(e,n);return s&&i}(e)||null==e}function en(e,t){if(e.date()<t.date())return-en(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months"),i=t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(1+n,"months")-s);return-(n+i)||0}function tn(e){var t;return void 0===e?this._locale._abbr:(null!=(t=dt(e))&&(this._locale=t),this)}f.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",f.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var nn=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function sn(){return this._locale}var rn=126227808e5;function an(e,t){return(e%t+t)%t}function on(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-rn:new Date(e,t,n).valueOf()}function un(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-rn:Date.UTC(e,t,n)}function ln(e,t){return t.erasAbbrRegex(e)}function hn(){for(var e=[],t=[],n=[],s=[],i=this.eras(),r=0,a=i.length;r<a;++r)t.push(me(i[r].name)),e.push(me(i[r].abbr)),n.push(me(i[r].narrow)),s.push(me(i[r].name)),s.push(me(i[r].abbr)),s.push(me(i[r].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}function dn(e,t){C(0,[e,e.length],0,t)}function cn(e,t,n,s,i){var r;return null==e?Ae(this,s,i).year:((r=je(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ve(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}C("N",0,0,"eraAbbr"),C("NN",0,0,"eraAbbr"),C("NNN",0,0,"eraAbbr"),C("NNNN",0,0,"eraName"),C("NNNNN",0,0,"eraNarrow"),C("y",["y",1],"yo","eraYear"),C("y",["yy",2],0,"eraYear"),C("y",["yyy",3],0,"eraYear"),C("y",["yyyy",4],0,"eraYear"),ce("N",ln),ce("NN",ln),ce("NNN",ln),ce("NNNN",function(e,t){return t.erasNameRegex(e)}),ce("NNNNN",function(e,t){return t.erasNarrowRegex(e)}),ye(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,s){var i=n._locale.erasParse(e,s,n._strict);i?y(n).era=i:y(n).invalidEra=e}),ce("y",oe),ce("yy",oe),ce("yyy",oe),ce("yyyy",oe),ce("yo",function(e,t){return t._eraYearOrdinalRegex||oe}),ye(["y","yy","yyy","yyyy"],pe),ye(["yo"],function(e,t,n,s){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[pe]=n._locale.eraYearOrdinalParse(e,i):t[pe]=parseInt(e,10)}),C(0,["gg",2],0,function(){return this.weekYear()%100}),C(0,["GG",2],0,function(){return this.isoWeekYear()%100}),dn("gggg","weekYear"),dn("ggggg","weekYear"),dn("GGGG","isoWeekYear"),dn("GGGGG","isoWeekYear"),L("weekYear","gg"),L("isoWeekYear","GG"),A("weekYear",1),A("isoWeekYear",1),ce("G",ue),ce("g",ue),ce("GG",te,Q),ce("gg",te,Q),ce("GGGG",re,K),ce("gggg",re,K),ce("GGGGG",ae,ee),ce("ggggg",ae,ee),ge(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=Z(e)}),ge(["gg","GG"],function(e,t,n,s){t[s]=f.parseTwoDigitYear(e)}),C("Q",0,"Qo","quarter"),L("quarter","Q"),A("quarter",7),ce("Q",J),ye("Q",function(e,t){t[ve]=3*(Z(e)-1)}),C("D",["DD",2],"Do","date"),L("date","D"),A("date",9),ce("D",te),ce("DD",te,Q),ce("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ye(["D","DD"],ke),ye("Do",function(e,t){t[ke]=Z(e.match(te)[0])});var fn=z("Date",!0);C("DDD",["DDDD",3],"DDDo","dayOfYear"),L("dayOfYear","DDD"),A("dayOfYear",4),ce("DDD",ie),ce("DDDD",X),ye(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Z(e)}),C("m",["mm",2],0,"minute"),L("minute","m"),A("minute",14),ce("m",te),ce("mm",te,Q),ye(["m","mm"],De);var mn=z("Minutes",!1);C("s",["ss",2],0,"second"),L("second","s"),A("second",15),ce("s",te),ce("ss",te,Q),ye(["s","ss"],Se);var _n,yn,gn=z("Seconds",!1);for(C("S",0,0,function(){return~~(this.millisecond()/100)}),C(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),C(0,["SSS",3],0,"millisecond"),C(0,["SSSS",4],0,function(){return 10*this.millisecond()}),C(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),C(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),C(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),C(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),C(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),L("millisecond","ms"),A("millisecond",16),ce("S",ie,J),ce("SS",ie,Q),ce("SSS",ie,X),_n="SSSS";_n.length<=9;_n+="S")ce(_n,oe);function wn(e,t){t[Ye]=Z(1e3*("0."+e))}for(_n="S";_n.length<=9;_n+="S")ye(_n,wn);yn=z("Milliseconds",!1),C("z",0,0,"zoneAbbr"),C("zz",0,0,"zoneName");var pn=k.prototype;function vn(e){return e}pn.add=Jt,pn.calendar=function(e,t){1===arguments.length&&(arguments[0]?Kt(arguments[0])?(e=arguments[0],t=void 0):function(e){for(var t=u(e)&&!l(e),n=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i=0;i<s.length;i+=1)n=n||m(e,s[i]);return t&&n}(arguments[0])&&(t=arguments[0],e=void 0):t=e=void 0);var n=e||Tt(),s=Gt(n,this).startOf("day"),i=f.calendarFormat(this,s)||"sameElse",r=t&&(O(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,Tt(n)))},pn.clone=function(){return new k(this)},pn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=V(t)){case"year":r=en(this,s)/12;break;case"month":r=en(this,s);break;case"quarter":r=en(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:I(r)},pn.endOf=function(e){var t,n;if(void 0===(e=V(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?un:on,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-an(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-an(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-an(t,1e3)-1;break}return this._d.setTime(t),f.updateOffset(this,!0),this},pn.format=function(e){e=e||(this.isUtc()?f.defaultFormatUtc:f.defaultFormat);var t=U(this,e);return this.localeData().postformat(t)},pn.from=function(e,t){return this.isValid()&&(M(e)&&e.isValid()||Tt(e).isValid())?Zt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},pn.fromNow=function(e){return this.from(Tt(),e)},pn.to=function(e,t){return this.isValid()&&(M(e)&&e.isValid()||Tt(e).isValid())?Zt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},pn.toNow=function(e){return this.to(Tt(),e)},pn.get=function(e){return O(this[e=V(e)])?this[e]():this},pn.invalidAt=function(){return y(this).overflow},pn.isAfter=function(e,t){var n=M(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},pn.isBefore=function(e,t){var n=M(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},pn.isBetween=function(e,t,n,s){var i=M(e)?e:Tt(e),r=M(t)?t:Tt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&(("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n)))},pn.isSame=function(e,t){var n,s=M(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},pn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},pn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},pn.isValid=function(){return g(this)},pn.lang=nn,pn.locale=tn,pn.localeData=sn,pn.max=Pt,pn.min=Nt,pn.parsingFlags=function(){return c({},y(this))},pn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t,n=[];for(t in e)m(e,t)&&n.push({unit:t,priority:E[t]});return n.sort(function(e,t){return e.priority-t.priority}),n}(e=G(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(O(this[e=V(e)]))return this[e](t);return this},pn.startOf=function(e){var t,n;if(void 0===(e=V(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?un:on,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=an(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=an(t,6e4);break;case"second":t=this._d.valueOf(),t-=an(t,1e3);break}return this._d.setTime(t),f.updateOffset(this,!0),this},pn.subtract=Qt,pn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},pn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},pn.toDate=function(){return new Date(this.valueOf())},pn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?U(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):O(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",U(n,"Z")):U(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},pn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,n,s="moment",i="";return this.isLocal()||(s=0===this.utcOffset()?"moment.utc":"moment.parseZone",i="Z"),e="["+s+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n=i+'[")]',this.format(e+t+"-MM-DD[T]HH:mm:ss.SSS"+n)},"undefined"!=typeof Symbol&&null!=Symbol.for&&(pn[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),pn.toJSON=function(){return this.isValid()?this.toISOString():null},pn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},pn.unix=function(){return Math.floor(this.valueOf()/1e3)},pn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},pn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},pn.eraName=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].name;if(t[n].until<=e&&e<=t[n].since)return t[n].name}return""},pn.eraNarrow=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].narrow;if(t[n].until<=e&&e<=t[n].since)return t[n].narrow}return""},pn.eraAbbr=function(){for(var e,t=this.localeData().eras(),n=0,s=t.length;n<s;++n){if(e=this.clone().startOf("day").valueOf(),t[n].since<=e&&e<=t[n].until)return t[n].abbr;if(t[n].until<=e&&e<=t[n].since)return t[n].abbr}return""},pn.eraYear=function(){for(var e,t,n=this.localeData().eras(),s=0,i=n.length;s<i;++s)if(e=n[s].since<=n[s].until?1:-1,t=this.clone().startOf("day").valueOf(),n[s].since<=t&&t<=n[s].until||n[s].until<=t&&t<=n[s].since)return(this.year()-f(n[s].since).year())*e+n[s].offset;return this.year()},pn.year=Le,pn.isLeapYear=function(){return j(this.year())},pn.weekYear=function(e){return cn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},pn.isoWeekYear=function(e){return cn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},pn.quarter=pn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},pn.month=Ue,pn.daysInMonth=function(){return xe(this.year(),this.month())},pn.week=pn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},pn.isoWeek=pn.isoWeeks=function(e){var t=Ae(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},pn.weeksInYear=function(){var e=this.localeData()._week;return je(this.year(),e.dow,e.doy)},pn.weeksInWeekYear=function(){var e=this.localeData()._week;return je(this.weekYear(),e.dow,e.doy)},pn.isoWeeksInYear=function(){return je(this.year(),1,4)},pn.isoWeeksInISOWeekYear=function(){return je(this.isoWeekYear(),1,4)},pn.date=fn,pn.day=pn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},pn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},pn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},pn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},pn.hour=pn.hours=tt,pn.minute=pn.minutes=mn,pn.second=pn.seconds=gn,pn.millisecond=pn.milliseconds=yn,pn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Et(this);if("string"==typeof e){if(null===(e=Vt(he,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Et(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?Bt(this,Zt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,f.updateOffset(this,!0),this._changeInProgress=null)),this},pn.utc=function(e){return this.utcOffset(0,e)},pn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Et(this),"m")),this},pn.parseZone=function(){var e;return null!=this._tzm?this.utcOffset(this._tzm,!1,!0):"string"==typeof this._i&&(null!=(e=Vt(le,this._i))?this.utcOffset(e):this.utcOffset(0,!0)),this},pn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},pn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},pn.isLocal=function(){return!!this.isValid()&&!this._isUTC},pn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},pn.isUtc=At,pn.isUTC=At,pn.zoneAbbr=function(){return this._isUTC?"UTC":""},pn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},pn.dates=n("dates accessor is deprecated. Use date instead.",fn),pn.months=n("months accessor is deprecated. Use month instead",Ue),pn.years=n("years accessor is deprecated. Use year instead",Le),pn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),pn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!r(this._isDSTShifted))return this._isDSTShifted;var e,t={};return v(t,this),(t=bt(t))._a?(e=(t._isUTC?_:Tt)(t._a),this._isDSTShifted=this.isValid()&&0<function(e,t,n){for(var s=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),r=0,a=0;a<s;a++)(n&&e[a]!==t[a]||!n&&Z(e[a])!==Z(t[a]))&&r++;return r+i}(t._a,e.toArray())):this._isDSTShifted=!1,this._isDSTShifted});var kn=x.prototype;function Mn(e,t,n,s){var i=dt(),r=_().set(s,t);return i[n](r,e)}function Dn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return Mn(e,t,n,"month");for(var s=[],i=0;i<12;i++)s[i]=Mn(e,i,n,"month");return s}function Sn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=dt(),a=e?r._week.dow:0,o=[];if(null!=n)return Mn(t,(n+a)%7,s,"day");for(i=0;i<7;i++)o[i]=Mn(t,(i+a)%7,s,"day");return o}kn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return O(s)?s.call(t,n):s},kn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(N).map(function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e}).join(""),this._longDateFormat[e])},kn.invalidDate=function(){return this._invalidDate},kn.ordinal=function(e){return this._ordinal.replace("%d",e)},kn.preparse=vn,kn.postformat=vn,kn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return O(i)?i(e,t,n,s):i.replace(/%d/i,e)},kn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return O(n)?n(t):n.replace(/%s/i,t)},kn.set=function(e){var t,n;for(n in e)m(e,n)&&(O(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},kn.eras=function(e,t){for(var n,s=this._eras||dt("en")._eras,i=0,r=s.length;i<r;++i){switch(typeof s[i].since){case"string":n=f(s[i].since).startOf("day"),s[i].since=n.valueOf();break}switch(typeof s[i].until){case"undefined":s[i].until=1/0;break;case"string":n=f(s[i].until).startOf("day").valueOf(),s[i].until=n.valueOf();break}}return s},kn.erasParse=function(e,t,n){var s,i,r,a,o,u=this.eras();for(e=e.toUpperCase(),s=0,i=u.length;s<i;++s)if(r=u[s].name.toUpperCase(),a=u[s].abbr.toUpperCase(),o=u[s].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return u[s];break;case"NNNN":if(r===e)return u[s];break;case"NNNNN":if(o===e)return u[s];break}else if(0<=[r,a,o].indexOf(e))return u[s]},kn.erasConvertYear=function(e,t){var n=e.since<=e.until?1:-1;return void 0===t?f(e.since).year():f(e.since).year()+(t-e.offset)*n},kn.erasAbbrRegex=function(e){return m(this,"_erasAbbrRegex")||hn.call(this),e?this._erasAbbrRegex:this._erasRegex},kn.erasNameRegex=function(e){return m(this,"_erasNameRegex")||hn.call(this),e?this._erasNameRegex:this._erasRegex},kn.erasNarrowRegex=function(e){return m(this,"_erasNarrowRegex")||hn.call(this),e?this._erasNarrowRegex:this._erasRegex},kn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Pe).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},kn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Pe.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},kn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=_([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=we.call(this._shortMonthsParse,a))?i:null:-1!==(i=we.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=we.call(this._shortMonthsParse,a))||-1!==(i=we.call(this._longMonthsParse,a))?i:null:-1!==(i=we.call(this._longMonthsParse,a))||-1!==(i=we.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=_([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},kn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||He.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=We),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},kn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||He.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Re),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},kn.week=function(e){return Ae(e,this._week.dow,this._week.doy).week},kn.firstDayOfYear=function(){return this._week.doy},kn.firstDayOfWeek=function(){return this._week.dow},kn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Ie(n,this._week.dow):e?n[e.day()]:n},kn.weekdaysMin=function(e){return!0===e?Ie(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},kn.weekdaysShort=function(e){return!0===e?Ie(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},kn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=_([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=we.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=we.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=we.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=we.call(this._weekdaysParse,a))||-1!==(i=we.call(this._shortWeekdaysParse,a))||-1!==(i=we.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=we.call(this._shortWeekdaysParse,a))||-1!==(i=we.call(this._weekdaysParse,a))||-1!==(i=we.call(this._minWeekdaysParse,a))?i:null:-1!==(i=we.call(this._minWeekdaysParse,a))||-1!==(i=we.call(this._weekdaysParse,a))||-1!==(i=we.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=_([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},kn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},kn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Be),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},kn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},kn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},kn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},lt("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===Z(e%100/10)?"th":1==t?"st":2==t?"nd":3==t?"rd":"th")}}),f.lang=n("moment.lang is deprecated. Use moment.locale instead.",lt),f.langData=n("moment.langData is deprecated. Use moment.localeData instead.",dt);var Yn=Math.abs;function On(e,t,n,s){var i=Zt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function bn(e){return e<0?Math.floor(e):Math.ceil(e)}function xn(e){return 4800*e/146097}function Tn(e){return 146097*e/4800}function Nn(e){return function(){return this.as(e)}}var Pn=Nn("ms"),Rn=Nn("s"),Wn=Nn("m"),Cn=Nn("h"),Un=Nn("d"),Hn=Nn("w"),Fn=Nn("M"),Ln=Nn("Q"),Vn=Nn("y");function Gn(e){return function(){return this.isValid()?this._data[e]:NaN}}var En=Gn("milliseconds"),An=Gn("seconds"),jn=Gn("minutes"),In=Gn("hours"),Zn=Gn("days"),zn=Gn("months"),$n=Gn("years");var qn=Math.round,Bn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Jn(e,t,n,s){var i=Zt(e).abs(),r=qn(i.as("s")),a=qn(i.as("m")),o=qn(i.as("h")),u=qn(i.as("d")),l=qn(i.as("M")),h=qn(i.as("w")),d=qn(i.as("y")),c=(r<=n.ss?["s",r]:r<n.s&&["ss",r])||a<=1&&["m"]||a<n.m&&["mm",a]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return null!=n.w&&(c=c||h<=1&&["w"]||h<n.w&&["ww",h]),(c=c||l<=1&&["M"]||l<n.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=t,c[3]=0<+e,c[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,c)}var Qn=Math.abs;function Xn(e){return(0<e)-(e<0)||+e}function Kn(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,s,i,r,a,o,u=Qn(this._milliseconds)/1e3,l=Qn(this._days),h=Qn(this._months),d=this.asSeconds();return d?(e=I(u/60),t=I(e/60),u%=60,e%=60,n=I(h/12),h%=12,s=u?u.toFixed(3).replace(/\.?0+$/,""):"",i=d<0?"-":"",r=Xn(this._months)!==Xn(d)?"-":"",a=Xn(this._days)!==Xn(d)?"-":"",o=Xn(this._milliseconds)!==Xn(d)?"-":"",i+"P"+(n?r+n+"Y":"")+(h?r+h+"M":"")+(l?a+l+"D":"")+(t||e||u?"T":"")+(t?o+t+"H":"")+(e?o+e+"M":"")+(u?o+s+"S":"")):"P0D"}var es=Ct.prototype;return es.isValid=function(){return this._isValid},es.abs=function(){var e=this._data;return this._milliseconds=Yn(this._milliseconds),this._days=Yn(this._days),this._months=Yn(this._months),e.milliseconds=Yn(e.milliseconds),e.seconds=Yn(e.seconds),e.minutes=Yn(e.minutes),e.hours=Yn(e.hours),e.months=Yn(e.months),e.years=Yn(e.years),this},es.add=function(e,t){return On(this,e,t,1)},es.subtract=function(e,t){return On(this,e,t,-1)},es.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=V(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+xn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Tn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},es.asMilliseconds=Pn,es.asSeconds=Rn,es.asMinutes=Wn,es.asHours=Cn,es.asDays=Un,es.asWeeks=Hn,es.asMonths=Fn,es.asQuarters=Ln,es.asYears=Vn,es.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*Z(this._months/12):NaN},es._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*bn(Tn(o)+a),o=a=0),u.milliseconds=r%1e3,e=I(r/1e3),u.seconds=e%60,t=I(e/60),u.minutes=t%60,n=I(t/60),u.hours=n%24,a+=I(n/24),o+=i=I(xn(a)),a-=bn(Tn(i)),s=I(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},es.clone=function(){return Zt(this)},es.get=function(e){return e=V(e),this.isValid()?this[e+"s"]():NaN},es.milliseconds=En,es.seconds=An,es.minutes=jn,es.hours=In,es.days=Zn,es.weeks=function(){return I(this.days()/7)},es.months=zn,es.years=$n,es.humanize=function(e,t){if(!this.isValid())return this.localeData().invalidDate();var n,s,i=!1,r=Bn;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(i=e),"object"==typeof t&&(r=Object.assign({},Bn,t),null!=t.s&&null==t.ss&&(r.ss=t.s-1)),n=this.localeData(),s=Jn(this,!i,r,n),i&&(s=n.pastFuture(+this,s)),n.postformat(s)},es.toISOString=Kn,es.toString=Kn,es.toJSON=Kn,es.locale=tn,es.localeData=sn,es.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Kn),es.lang=nn,C("X",0,0,"unix"),C("x",0,0,"valueOf"),ce("x",ue),ce("X",/[+-]?\d+(\.\d{1,3})?/),ye("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e))}),ye("x",function(e,t,n){n._d=new Date(Z(e))}),f.version="2.29.1",e=Tt,f.fn=pn,f.min=function(){return Rt("isBefore",[].slice.call(arguments,0))},f.max=function(){return Rt("isAfter",[].slice.call(arguments,0))},f.now=function(){return Date.now?Date.now():+new Date},f.utc=_,f.unix=function(e){return Tt(1e3*e)},f.months=function(e,t){return Dn(e,t,"months")},f.isDate=a,f.locale=lt,f.invalid=w,f.duration=Zt,f.isMoment=M,f.weekdays=function(e,t,n){return Sn(e,t,n,"weekdays")},f.parseZone=function(){return Tt.apply(null,arguments).parseZone()},f.localeData=dt,f.isDuration=Ut,f.monthsShort=function(e,t){return Dn(e,t,"monthsShort")},f.weekdaysMin=function(e,t,n){return Sn(e,t,n,"weekdaysMin")},f.defineLocale=ht,f.updateLocale=function(e,t){var n,s,i;return null!=t?(i=st,null!=it[e]&&null!=it[e].parentLocale?it[e].set(b(it[e]._config,t)):(null!=(s=ut(e))&&(i=s._config),t=b(i,t),null==s&&(t.abbr=e),(n=new x(t)).parentLocale=it[e],it[e]=n),lt(e)):null!=it[e]&&(null!=it[e].parentLocale?(it[e]=it[e].parentLocale,e===lt()&&lt(e)):null!=it[e]&&delete it[e]),it[e]},f.locales=function(){return s(it)},f.weekdaysShort=function(e,t,n){return Sn(e,t,n,"weekdaysShort")},f.normalizeUnits=V,f.relativeTimeRounding=function(e){return void 0===e?qn:"function"==typeof e&&(qn=e,!0)},f.relativeTimeThreshold=function(e,t){return void 0!==Bn[e]&&(void 0===t?Bn[e]:(Bn[e]=t,"s"===e&&(Bn.ss=t-1),!0))},f.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},f.prototype=pn,f.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},f});
//# sourceMappingURL=moment.min.js.map
let xmlPath;
let sheetData;
let sheetValues = [];
let values = {
	siteId: null,
	sheetId: null,
	viewId: null,
	contentColumn: null,
	recordColumn: null,
	latitude: null,
	longitude: null,
};
let singleMap;
let markerContent;

const loadSheetData = (dataValues) => {
	dataValues.forEach((item, i) => {
		Object.entries(values).forEach(([key, value], index) => {
			if (i == index) {
				values[key] = Number(item);
			}
		});
	});
	xmlPath = `https://www.extranet.ag/ag/sheetViewExportXML.action?metaData.siteID=${values.siteId}&metaData.sheetId=${values.sheetId}&metaData.sheetViewID=${values.viewId}&metaData.isheetExportType=xml&errorWithoutRedirection=false`;
	$j.ajax({
		url: xmlPath,
		dataType: "xml",
		success: function (data) {
			sheetData = $j("data", data);
			sortColumnsData(values.contentColumn, values.recordColumn);
		},
	});
};

const sortColumnsData = (nameColumn, addressColumn) => {
	sheetData.find("item").each(function () {
		let self = this;
		let nameCol = $j(self)
			.find(`column[columnid=${nameColumn}] displayData`)
			.text();
		let addressCol = $j(self)
			.find(`column[columnid=${addressColumn}] displayData`)
			.text();
		let id = $j(this).find("itemID").text();
		sheetValues.push({ name: nameCol, address: addressCol, recordId: id });
	});
	initializeMap(sheetValues, values.latitude, values.longitude);
};

const initializeMap = (records, lt, ln) => {
	let options = {
		zoom: 6,
		center: { lat: lt, lng: ln },
		styles: [
			{ elementType: "geometry", stylers: [{ color: "#DCDCDC" }] },
			{
				elementType: "labels.text.stroke",
				stylers: [{ color: "#FFFFFF" }],
			},
			{
				elementType: "labels.text.fill",
				stylers: [{ color: "#435B76" }],
			},
			{
				featureType: "administrative.country",
				elementType: "geometry",
				stylers: [{ color: "#FFFFFF" }],
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [{ color: "#FFFFFF" }],
			},
			{
				featureType: "administrative.country",
				elementType: "geometry.stroke",
				stylers: [
					{
						color: "#435B76",
					},
				],
			},
		],
	};

	try {
		singleMap = new google.maps.Map(
			document.getElementById("map-single-country"),
			options
		);
		singleMap.setOptions({ disableDoubleClickZoom: true });
		records.forEach((element) => {
			geocodeAddress(element);
		});
	} catch (error) {
		console.log(error);
	}

	document
		.getElementById("map-single-country")
		.classList.replace("map-invisible", "map-visible");
};

const geocodeAddress = (val) => {
	$j.get(
		"https://atlas.microsoft.com/search/address/json",
		{
			"subscription-key": "Br52cqSUxQpFZ3rPR_PFUMI7i1RXVFgzMEy-65HzU24",
			"api-version": "1.0",
			query: val.address,
		},
		function (returnedData) {
			if (returnedData !== undefined && returnedData.results[0] !== undefined) {
				createMarkers(generateGeoJson(returnedData.results[0]), val);
			}
		}
	);
};

const createMarkers = (record, obj) => {
	let marker = new google.maps.Marker({
		map: singleMap,
		position: record,
	});
	if (obj.name) {
		let iwContent = `<div class="single-map-iw"><h1>${obj.name}</h1><br/><a target='_blank' href='https://www.extranet.ag/ag/sheetHome.action?metaData.siteID=${values.siteId}&metaData.sheetId=${values.sheetId}&metaData.itemId=${obj.recordId}&view=readonly&injectSheetLinkView=true&isPrintPreview=true'>Click here to view record</a></div>`;
		marker.addListener("click", function () {
			if (markerContent) {
				markerContent.close();
			}
			markerContent = new google.maps.InfoWindow({
				content: iwContent,
				disableAutoPan: true,
			});
			markerContent.open(singleMap, marker);
		});
	}
};

const generateGeoJson = (result) => {
	let item = { lat: result.position.lat, lng: result.position.lon };
	return item;
};

var $j = jQuery.noConflict();
var highq = new HighQ();

var sheetsLoaded = false;
var homeLoaded = false;
var wikiLoaded = false;

$j(document).ready(function () {

    console.info("Loading Standardisation JS");

    if (window.location.href.indexOf("siteHomePage") > -1) {

        var checkGridExists = setInterval(function () {
            if ($j('#gridContainer').length) {

                console.info("Bootstrap 5 grid loaded");

                $j('#gridContainer').addClass("bs-5");

                clearInterval(checkGridExists);
            }
        }, 50);

        var checkHomePageLoaded = setInterval(function () {

            if ($j('#siteHomeMainSectionID').length) {

                loadTables();
                loadKPIs();
                homeLoaded = true;
                clearInterval(checkHomePageLoaded);
            }
        }, 50);

    }


    if (window.location.href.indexOf("viewWikiPage") > -1) {

        var checkWikiLoaded = setInterval(function () {
            if ($j('#wikiCKContentInlineContainerDiv').length) {

                console.info("Bootstrap 5 grid loaded");
                $j('#wikiCKContentInlineContainerDiv').addClass("bs-5");

                loadTables();
                loadKPIs();
                wikiLoaded = true;
                clearInterval(checkWikiLoaded);
            }
        }, 50);

    }

    if (window.location.href.indexOf("sheetHome") > -1) {

        var checkSheetPageLoded = setInterval(function () {
            if ($j('#gridbox').length) {
                sheetsLoaded = true;
                clearInterval(checkSheetPageLoded);
            }
        }, 50);

    }

});

function getBaseDataAttributes(element) {

    var core = {
        siteId: $j(element).data("site-id"),
        sheetId: $j(element).data("sheet-id"),
        viewId: $j(element).data("view-id"),
    }

    return core;
}

function loadKPIs() {

    $j("div[data-type='kpi-count']").each(function () {

        var base = getBaseDataAttributes(this);

        var column = $j(this).data("date-column");
        var title = $j(this).data("title");
        var filterType = $j(this).data("filter-type");
        var dateType = $j(this).data("date-type");

        var kpiValue = 0;
        var html;

        if (base.sheetId && base.viewId && base.siteId && dateType && column) {

            var sheetContent = highq.getSheetData(base.siteId, base.sheetId, base.viewId);

            console.log(base);

            if (dateType == "all") {
                kpiValue = sheetContent.count;
            }
            else {

                $j(sheetContent.records).find('item').each(function (index, record) {

                    var item = highq.getColumnValueByName(record, column, sheetContent.headers);

                    if (item.type === "SHEET_COLUMN_TYPE_DATE_AND_TIME") {

                        if (dateType == "week") {

                            var currentWeek = moment().isoWeek();

                            if (filterType == "current") {
                                if (new Date(item.raw) > moment()
                                    .isoWeek(currentWeek)
                                    .startOf('week') && new Date(item.raw) < moment()
                                        .isoWeek(currentWeek)
                                        .endOf('week')) {
                                    console.log(item.raw + " is in current week")
                                    kpiValue += 1;
                                }
                                else {
                                    console.log(item.raw + " is not in current week")

                                }
                            }

                            if (filterType == "previous") {
                                if (new Date(item.raw) > moment()
                                    .isoWeek(currentWeek - 1)
                                    .startOf('week') && new Date(item.raw) < moment()
                                        .isoWeek(currentWeek - 1)
                                        .endOf('week')) {
                                    kpiValue += 1;
                                }
                            }
                        }

                        if (dateType == "month") {

                            if (filterType == "current") {
                                if (new Date(item.raw) > moment()
                                    .startOf('month') && new Date(item.raw) < moment()
                                        .endOf('month')) {
                                    console.log(item.raw + " is in current month")
                                    kpiValue += 1;
                                }
                                else {
                                    console.log(item.raw + " is not in current month")

                                }
                            }

                            if (filterType == "previous") {
                                if (new Date(item.raw) > moment()
                                    .subtract(1, 'months')
                                    .startOf('month') &&
                                    new Date(item.raw) < moment()
                                        .subtract(1, 'months')
                                        .endOf('month')) {
                                    {
                                        kpiValue += 1;
                                    }
                                }
                            }
                        }

                        if (dateType == "year") {

                            if (filterType == "current") {
                                if (new Date(item.raw) > moment()
                                    .startOf('year') && new Date(item.raw) < moment()
                                        .endOf('year')) {
                                    console.log(item.raw + " is in current year")
                                    kpiValue += 1;
                                }
                                else {
                                    console.log(item.raw + " is not in current year")

                                }
                            }

                            if (filterType == "previous") {
                                if (new Date(item.raw) > moment()
                                    .subtract(1, 'year')
                                    .startOf('year') &&
                                    new Date(item.raw) < moment()
                                        .subtract(1, 'year')
                                        .endOf('year')) {
                                    {
                                        kpiValue += 1;
                                    }
                                }
                            }
                        }

                    }
                    else {
                        html = `<div class="card bg-danger">
                        <div class="card-body">
                        <h5 class="card-title">Column provided isn't a date</h5>
                        <p class="card-text">You provided ${column} - however that isn't a date field we can filter on.</p>
                        </div>
                    </div>`
                    }

                });
            }


            var url = highq.generateSheetUrl(base.siteId, base.sheetId, base.viewId);

            html = `<div class="card kpi-card" style="height:140px">
                            <div class="card-body">
                                <div class="row">                                
                                    <div class="col overflow-hidden">
                                        <p class="h4 text-uppercase float-start" style="color:#FFF !important; margin-top:35px !important;">${title}</p>
                                    </div>
                                    <div class="col pt-3 overflow-hidden">
                                        <a target="_new" style="color:#FFF !important; !important;" href="${url}"><p class="kpi-number h-100 float-end">${kpiValue}</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>`
        }
        else {
            console.log(base.sheetId);
            console.log(column);
            console.log(base.siteId);
            console.log(base.dateType);

            console.log("Not got all variables");

            html = `<p>Missing data attributes</p>`
        }

        $j(this).html(html);

    });

}

function loadTables() {

    $j("div[data-type='table']").each(function () {

        var base = getBaseDataAttributes(this);

        var columns = $j(this).data("columns").split(',');
        var includeEdit = $j(this).data("include-edit");
        var includeView = $j(this).data("include-view");

        //Check we have everything
        if (base.sheetId && base.viewId && columns && base.siteId) {

            var sheetContent = highq.getSheetData(base.siteId, base.sheetId, base.viewId);

            var tableHtml = "<table class='table table-striped'><thead>";

            tableHtml += `<tr>`;

            columns.forEach((element) => {
                tableHtml += `<td>${element}</td>`;
            });

            if (includeView) {
                tableHtml += `<td>View</td>`;
            }

            if (includeEdit) {
                tableHtml += `<td>Edit</td>`;
            }

            tableHtml += `</tr></thead><tbody>`;

            $j(sheetContent.records).find('item').each(function () {
                var item = $j(this);

                tableHtml += `<tr>`;

                var recordId = highq.getRecordId(this);

                columns.forEach((element) => {

                    var values = highq.getColumnValueByName(item, element, sheetContent.headers);

                    tableHtml += `<td>`;

                    switch (values.type) {
                        case "SHEET_COLUMN_TYPE_SINGLE_LINE_TEXT":
                            tableHtml += values.value
                            break;
                        case "SHEET_COLUMN_TYPE_CHOICE":
                            tableHtml += values.value
                            break;
                        case "SHEET_COLUMN_TYPE_DATE_AND_TIME":
                            tableHtml += values.value
                            break;
                        case "SHEET_COLUMN_TYPE_MULTIPLE_LINE_TEXT":
                            tableHtml += values.value
                            break;
                        case "SHEET_COLUMN_TYPE_NUMBER":
                            tableHtml += values.value
                            break;
                        case "SHEET_COLUMN_TYPE_HYPERLINK":
                            tableHtml += `<a href="${values.value.link}">${values.value.text}</a>`
                            break;
                        case "SHEET_COLUMN_TYPE_LOOKUP":
                            tableHtml += `<a href="mailto:${values.value.email}">${values.value.text}</a>`
                            break;
                        default:
                            tableHtml += values.value
                    }

                    tableHtml += `</td>`;
                });

                if (includeView) {
                    tableHtml += `  <td class="text-center align-middle">
                                        <a class="CKContextLink" style="font-size:14px;" target="_new" href="${highq.generateViewUrl(base.siteId, base.sheetId, base.viewId, recordId)}">View</a>
                                    </td>`;
                }

                if (includeEdit) {
                    tableHtml += `  <td class="text-center align-middle">
                                        <a class="CKContextLink" style="font-size:14px;" target="_new" href="${highq.generateEditUrl(base.siteId, base.sheetId, base.viewId, recordId)}">Edit</a>
                                    </td>`;
                }


                tableHtml += `</tr>`;

            });

            tableHtml += `</tbody></table>`;
        }
        else {
            console.log(base.sheetId && base.viewId && columns && includeEdit && includeView && base.siteId);
            console.log("Not got all variables")
        }

        $j(this).html(tableHtml);
    });
}

function loadContactCards() {

    var contactPeople = [
        {
            name: null,
            jobTitle: null,
            image: null,
            telephone: null,
            fullDescription: null,
            shortDescription: null,
            email: null,
            id: null,
        },
    ];

    // Get Data from div //
    $j("div[data-type='contacts']").each(function () {
        var container = this;
        var cardBase = getBaseDataAttributes(this);

        var sheetContent = highq.getSheetData(
            cardBase.siteId,
            cardBase.sheetId,
            cardBase.viewId
        );

        var contacts = $j(this).data("contacts").split(",");

        $j(sheetContent.records)
            .find("item")
            .each(function () {
                var item = $j(this);

                var fullName = highq.getColumnValueByName(
                    item,
                    "Full Name",
                    sheetContent.headers
                );
                contactPeople.name = fullName.value;
                var photo = highq.getColumnValueByName(
                    item,
                    "Photo",
                    sheetContent.headers
                );
                contactPeople.image = photo.value;
                var jobTitle = highq.getColumnValueByName(
                    item,
                    "Job Title",
                    sheetContent.headers
                );
                contactPeople.jobTitle = jobTitle.value;
                var description = highq.getColumnValueByName(
                    item,
                    "Detail",
                    sheetContent.headers
                );
                contactPeople.fullDescription = description.value;
                var email = highq.getColumnValueByName(
                    item,
                    "E-Mail Address",
                    sheetContent.headers
                );
                contactPeople.email = email.value;
                var id = highq.getColumnValueByName(item, "Id", sheetContent.headers);
                contactPeople.id = id.value;
                var telephone = highq.getColumnValueByName(
                    item,
                    "Telephone",
                    sheetContent.headers
                );
                contactPeople.telephone = telephone.value;

                contactPeople.forEach(function (element, index, array) {
                    if (contacts.includes(contactPeople.id)) {                        

                        var content = `  
                                <div class="col" id="heading-${array.id}">
                                    <div class="card contact-cards">
                                    
                                    <img src="${array.image}" alt="${array.name}">
                                        <div class="card-body">
                                        <h3 class="card-title mt-0 text-uppercase ag-dark-silver-100">${array.name}</h3>
                                        <h5 class="card-title ag-dark-silver-100">${array.jobTitle}</h5>
                                        <ul class="list-group list-group-flush" >
                                            <li class=""><a href="mailto:${array.email}">${array.email}</a></li>
                                            <li class=""><a href="tel:${array.telephone}">${array.telephone}</a></li>
                                        </ul>
                                        <div class="d-grid gap-2">
                                        <button class="btn ag-btn--light-blue" onclick="showBio('first-${array.id}', 'toggle${array.id}')" id="toggle${array.id}" >Bio</button>
                                        </div>
                                            <div class="card-text bio" id="first-${array.id}" style="display: none;">${array.fullDescription}</div>
                                        
                                        </div>
                                    </div>                                
                                </div>`;

                        container.innerHTML += content;
                    }
                });
            });
    });
}

function showBio(target, target2) {
    const targetDiv = document.getElementById(`${target}`);
    targetDiv.style.display = "block";
    const theButton = document.getElementById(`${target2}`);
    theButton.style.display = "none";
}
let tablesMetadata = [];

//Function to fetch each tables' data and call createAgTables function after promises resolve
const fetchIsheetData = (data) => {
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
		createAgTables(results);
	});
};

//Function to dinamically build tabs, tables and store requiered data in tablesMetadata array
const createAgTables = (isheets) => {
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
				addRowsToAgTable(
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
				addRowsToAgTable(
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
const addRowsToAgTable = (row, isheetIndex, siteId, sheetId, viewId, tBody) => {
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

const sendUserToAddRecord = () => {
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
const handleAgTablesIsheetFunctionalities = () => {
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

var eventsMinDistance = 60;

//Initialize the timeline
function initTimeline(timelines) {
	timelines.each(function () {
		var timeline = $j(this);
		var timelineComponents = {};
		//Cache timeline components

		//data-date attributes and filling line
		timelineComponents["timelineWrapper"] = timeline.find(
			".standardised-timeline-events-wrapper"
		);

		//data-date attributes and filling line (children)
		timelineComponents["eventsWrapper"] = timelineComponents[
			"timelineWrapper"
		].children(".standardised-timeline-events");

		//Filling line
		timelineComponents["fillingLine"] = timelineComponents[
			"eventsWrapper"
		].children(".standardised-timeline-filling-line");

		//Anchor tags with data-date attributes
		timelineComponents["timelineEvents"] =
			timelineComponents["eventsWrapper"].find("a");

		//Parse dates saved data-date attributes
		timelineComponents["timelineDates"] = parseDate(
			timelineComponents["timelineEvents"]
		);

		//Save the minimum distance among events
		timelineComponents["eventsMinLapse"] = minLapse(
			timelineComponents["timelineDates"]
		);

		//Timeline's Prev and Next controllers
		timelineComponents["timelineNavigation"] = timeline.find(
			".standardised-timeline-navigation"
		);

		//List items that contain each date's content
		timelineComponents["eventsContent"] = timeline.children(
			".standardised-timeline-events-content"
		);

		//Assign a left position to the single dates along the timeline
		setDatePosition(timelineComponents, eventsMinDistance);

		//Assign a width to the timeline
		var timelineTotWidth = setTimelineWidth(
			timelineComponents,
			eventsMinDistance
		);

		//The timeline has been initialize - show it
		timeline.addClass("loaded");

		//Detect click on the "next" controller
		timelineComponents["timelineNavigation"].on(
			"click",
			".next",
			function (event) {
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, "next");
			}
		);
		//Detect click on the "prev" controller
		timelineComponents["timelineNavigation"].on(
			"click",
			".prev",
			function (event) {
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, "prev");
			}
		);
		//Detect click on the a single event - show new event content
		timelineComponents["eventsWrapper"].on("click", "a", function (event) {
			event.preventDefault();
			timelineComponents["timelineEvents"].removeClass("selected");
			$j(this).addClass("selected");
			updateOlderEvents($j(this));
			updateFilling(
				$j(this),
				timelineComponents["fillingLine"],
				timelineTotWidth
			);
			updateVisibleContent($j(this), timelineComponents["eventsContent"]);
		});

		//On swipe, show next/prev event content
		timelineComponents["eventsContent"].on("swipeleft", function () {
			var mq = checkMQ();
			mq == "mobile" &&
				showNewContent(timelineComponents, timelineTotWidth, "next");
		});
		timelineComponents["eventsContent"].on("swiperight", function () {
			var mq = checkMQ();
			mq == "mobile" &&
				showNewContent(timelineComponents, timelineTotWidth, "prev");
		});

		//keyboard navigation
		$j(document).keyup(function (event) {
			if (event.which == "37" && elementInViewport(timeline.get(0))) {
				showNewContent(timelineComponents, timelineTotWidth, "prev");
			} else if (event.which == "39" && elementInViewport(timeline.get(0))) {
				showNewContent(timelineComponents, timelineTotWidth, "next");
			}
		});
	});
}

// Function to fire translateTimeline() with the corresponding arguments
function updateSlide(timelineComponents, timelineTotWidth, string) {
	//retrieve translateX value of timelineComponents['eventsWrapper']
	var translateValue = getTranslateValue(timelineComponents["eventsWrapper"]);
	var wrapperWidth = Number(
		timelineComponents["timelineWrapper"].css("width").replace("px", "")
	);
	//translate the timeline to the left('next')/right('prev')
	string == "next"
		? translateTimeline(
				timelineComponents,
				translateValue - wrapperWidth + eventsMinDistance,
				wrapperWidth - timelineTotWidth
		  )
		: translateTimeline(
				timelineComponents,
				translateValue + wrapperWidth - eventsMinDistance
		  );
}

//Function to parse dates stored on data-date attributes
function parseDate(events) {
	var dateArrays = [];
	events.each(function () {
		var singleDate = $j(this);
		var dateComp = singleDate.data("date").split("T");
		if (dateComp.length > 1) {
			//both DD/MM/YEAR and time are provided
			var dayComp = dateComp[0].split("/");
			var timeComp = dateComp[1].split(":");
		} else if (dateComp[0].indexOf(":") >= 0) {
			//only time is provide
			var dayComp = ["2000", "0", "0"];
			var timeComp = dateComp[0].split(":");
		} else {
			//only DD/MM/YEAR
			var dayComp = dateComp[0].split("/");
			var timeComp = ["0", "0"];
		}
		var newDate = new Date(
			dayComp[2],
			dayComp[1] - 1,
			dayComp[0],
			timeComp[0],
			timeComp[1]
		);
		dateArrays.push(newDate);
	});
	return dateArrays;
}

//Function to calculate the minimum distance among events
function minLapse(dates) {
	var dateDistances = [];
	for (var i = 1; i < dates.length; i++) {
		var distance = daydiff(dates[i - 1], dates[i]);
		dateDistances.push(distance);
	}
	return Math.min.apply(null, dateDistances);
}

//Function to dinamically set an in-line css "left" rule on each anchor (date) element and calculate the correct value in px
function setDatePosition(timelineComponents, min) {
	for (var i = 0; i < timelineComponents["timelineDates"].length; i++) {
		//Calculate the distance of each date along the timeline from the first one
		var distance = daydiff(
			timelineComponents["timelineDates"][0],
			timelineComponents["timelineDates"][i]
		);
		var distanceNorm =
			Math.round(distance / timelineComponents["eventsMinLapse"]) + 2;
		timelineComponents["timelineEvents"]
			.eq(i)
			.css("left", distanceNorm * min + "px");
	}
}

//Function to calculate the timeline's width
function setTimelineWidth(timelineComponents, width) {
	var timeSpan = daydiff(
		timelineComponents["timelineDates"][0],
		timelineComponents["timelineDates"][
			timelineComponents["timelineDates"].length - 1
		]
	);
	var timeSpanNorm = timeSpan / timelineComponents["eventsMinLapse"];
	var timeSpanNorm = Math.round(timeSpanNorm) + 4;
	var totalWidth = timeSpanNorm * width;
	//Add in-line css rule to set up the width on .standardised-timeline-events
	timelineComponents["eventsWrapper"].css("width", totalWidth + "px");
	updateFilling(
		timelineComponents["eventsWrapper"].find("a.selected"),
		timelineComponents["fillingLine"],
		totalWidth
	);
	updateTimelinePosition(
		"next",
		timelineComponents["eventsWrapper"].find("a.selected"),
		timelineComponents
	);

	return totalWidth;
}

//Update .standardised-timeline-filling-line length according to the selected date
function updateFilling(selectedEvent, filling, totWidth) {
	var eventStyle = window.getComputedStyle(selectedEvent.get(0), null);
	var eventLeft = eventStyle.getPropertyValue("left");
	var eventWidth = eventStyle.getPropertyValue("width");
	eventLeft =
		Number(eventLeft.replace("px", "")) +
		Number(eventWidth.replace("px", "")) / 2;
	var scaleValue = eventLeft / totWidth;
	setTransformValue(filling.get(0), "scaleX", scaleValue);
}

//Translate timeline to the left/right according to the position of the selected event
function updateTimelinePosition(string, event, timelineComponents) {
	var eventStyle = window.getComputedStyle(event.get(0), null);
	var eventLeft = Number(eventStyle.getPropertyValue("left").replace("px", ""));
	var timelineWidth = Number(
		timelineComponents["timelineWrapper"].css("width").replace("px", "")
	);
	var timelineTotWidth = Number(
		timelineComponents["eventsWrapper"].css("width").replace("px", "")
	);
	var timelineTranslate = getTranslateValue(
		timelineComponents["eventsWrapper"]
	);

	if (
		(string == "next" && eventLeft > timelineWidth - timelineTranslate) ||
		(string == "prev" && eventLeft < -timelineTranslate)
	) {
		translateTimeline(
			timelineComponents,
			-eventLeft + timelineWidth / 2,
			timelineWidth - timelineTotWidth
		);
	}
}

//Function to obtain in-line css "transform" rule value from .standardised-timeline-events
function getTranslateValue(timeline) {
	var timelineStyle = window.getComputedStyle(timeline.get(0), null),
		timelineTranslate =
			timelineStyle.getPropertyValue("-webkit-transform") ||
			timelineStyle.getPropertyValue("-moz-transform") ||
			timelineStyle.getPropertyValue("-ms-transform") ||
			timelineStyle.getPropertyValue("-o-transform") ||
			timelineStyle.getPropertyValue("transform");

	if (timelineTranslate.indexOf("(") >= 0) {
		var timelineTranslate = timelineTranslate.split("(")[1];
		timelineTranslate = timelineTranslate.split(")")[0];
		timelineTranslate = timelineTranslate.split(",");
		var translateValue = timelineTranslate[4];
	} else {
		var translateValue = 0;
	}

	return Number(translateValue);
}

//Function to translate the timeline accordingly when clicking controllers - left('next')/right('prev')
function translateTimeline(timelineComponents, value, totWidth) {
	var eventsWrapper = timelineComponents["eventsWrapper"].get(0);
	value = value > 0 ? 0 : value; //Only negative translate value
	value =
		!(typeof totWidth === "undefined") && value < totWidth ? totWidth : value; //Do not translate more than timeline width
	setTransformValue(eventsWrapper, "translateX", value + "px");
	//Update navigation arrows visibility
	value == 0
		? timelineComponents["timelineNavigation"]
				.find(".prev")
				.addClass("inactive")
		: timelineComponents["timelineNavigation"]
				.find(".prev")
				.removeClass("inactive");
	value == totWidth
		? timelineComponents["timelineNavigation"]
				.find(".next")
				.addClass("inactive")
		: timelineComponents["timelineNavigation"]
				.find(".next")
				.removeClass("inactive");
}

//Function to dinamically set an in-line css "transform" rule in .standardised-timeline-filling-line
function setTransformValue(element, property, value) {
	element.style["-webkit-transform"] = property + "(" + value + ")";
	element.style["-moz-transform"] = property + "(" + value + ")";
	element.style["-ms-transform"] = property + "(" + value + ")";
	element.style["-o-transform"] = property + "(" + value + ")";
	element.style["transform"] = property + "(" + value + ")";
}

//Function to be called to aid calculations. It calculates the difference between Date objects in milliseconds.
function daydiff(first, second) {
	return Math.round(second - first);
}

//Update "older-event" classes on anchors tags (date) based on selected event
function updateOlderEvents(event) {
	event
		.parent("li")
		.prevAll("li")
		.children("a")
		.addClass("older-event")
		.end()
		.end()
		.nextAll("li")
		.children("a")
		.removeClass("older-event");
}

//Show the corresponding event-content based on selected date
function updateVisibleContent(event, eventsContent) {
	var eventDate = event.data("date");
	var visibleContent = eventsContent.find(".selected");
	var selectedContent = eventsContent.find('[data-date="' + eventDate + '"]');

	if (selectedContent.index() > visibleContent.index()) {
		var classEnetering = "selected enter-right";
		var classLeaving = "leave-left";
	} else {
		var classEnetering = "selected enter-left";
		var classLeaving = "leave-right";
	}

	selectedContent.attr("class", classEnetering);
	visibleContent
		.attr("class", classLeaving)
		.one(
			"webkitAnimationEnd oanimationend msAnimationEnd animationend",
			function () {
				visibleContent.removeClass("leave-right leave-left");
				selectedContent.removeClass("enter-left enter-right");
			}
		);
	eventsContent.css("height", "200px");
}

function showNewContent(timelineComponents, timelineTotWidth, string) {
	//go from one event to the next/previous one
	var visibleContent = timelineComponents["eventsContent"].find(".selected");
	var newContent =
		string == "next" ? visibleContent.next() : visibleContent.prev();

	if (newContent.length > 0) {
		//if there's a next/prev event - show it
		var selectedDate = timelineComponents["eventsWrapper"].find(".selected");
		var newEvent =
			string == "next"
				? selectedDate.parent("li").next("li").children("a")
				: selectedDate.parent("li").prev("li").children("a");

		updateFilling(
			newEvent,
			timelineComponents["fillingLine"],
			timelineTotWidth
		);
		updateVisibleContent(newEvent, timelineComponents["eventsContent"]);
		newEvent.addClass("selected");
		selectedDate.removeClass("selected");
		updateOlderEvents(newEvent);
		updateTimelinePosition(string, newEvent, timelineComponents);
	}
}

//Function to check if timeline being seen from mobile or desktop device
function checkMQ() {
	return window
		.getComputedStyle(
			document.querySelector(".standardised-horizontal-timeline"),
			"::before"
		)
		.getPropertyValue("content")
		.replace(/'/g, "")
		.replace(/"/g, "");
}
//Function to tell if a DOM element is visible in the current viewport?
function elementInViewport(el) {
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	return (
		top < window.pageYOffset + window.innerHeight &&
		left < window.pageXOffset + window.innerWidth &&
		top + height > window.pageYOffset &&
		left + width > window.pageXOffset
	);
}
