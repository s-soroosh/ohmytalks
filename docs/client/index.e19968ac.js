import{K as e,L as t,S as n,i as r,s as o,e as a,A as s,a as i,b as c,B as u,d as l,f,h,l as d,C as p,j as m,k as g,M as v,F as y,y as w,G as b,N as E,D as x,v as j,w as C,x as A,o as k,p as N,z as $,r as R,q as S}from"./client.23d1db7c.js";var T=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},O=Object.prototype.toString;function U(e){return"[object Array]"===O.call(e)}function P(e){return void 0===e}function B(e){return null!==e&&"object"==typeof e}function D(e){if("[object Object]"!==O.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function I(e){return"[object Function]"===O.call(e)}function L(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),U(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var q={isArray:U,isArrayBuffer:function(e){return"[object ArrayBuffer]"===O.call(e)},isBuffer:function(e){return null!==e&&!P(e)&&null!==e.constructor&&!P(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:B,isPlainObject:D,isUndefined:P,isDate:function(e){return"[object Date]"===O.call(e)},isFile:function(e){return"[object File]"===O.call(e)},isBlob:function(e){return"[object Blob]"===O.call(e)},isFunction:I,isStream:function(e){return B(e)&&I(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:L,merge:function e(){var t={};function n(n,r){D(t[r])&&D(n)?t[r]=e(t[r],n):D(n)?t[r]=e({},n):U(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)L(arguments[r],n);return t},extend:function(e,t,n){return L(t,(function(t,r){e[r]=n&&"function"==typeof t?T(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function z(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var V=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(q.isURLSearchParams(t))r=t.toString();else{var o=[];q.forEach(t,(function(e,t){null!=e&&(q.isArray(e)?t+="[]":e=[e],q.forEach(e,(function(e){q.isDate(e)?e=e.toISOString():q.isObject(e)&&(e=JSON.stringify(e)),o.push(z(t)+"="+z(e))})))})),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function F(){this.handlers=[]}F.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},F.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},F.prototype.forEach=function(e){q.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var H=F,G=function(e,t,n){return q.forEach(n,(function(n){e=n(e,t)})),e},M=function(e){return!(!e||!e.__CANCEL__)},X=function(e,t){q.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},_=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},J=q.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),q.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),q.isString(r)&&s.push("path="+r),q.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},Y=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],K=q.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=q.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},W=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;q.isFormData(r)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+i)}var c,u,l=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(a.open(e.method.toUpperCase(),V(l,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var r,o,s,i,c,u="getAllResponseHeaders"in a?(r=a.getAllResponseHeaders(),c={},r?(q.forEach(r.split("\n"),(function(e){if(i=e.indexOf(":"),o=q.trim(e.substr(0,i)).toLowerCase(),s=q.trim(e.substr(i+1)),o){if(c[o]&&Y.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([s]):c[o]?c[o]+", "+s:s}})),c):c):null,l={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:u,config:e,request:a};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(_("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,l),a=null}},a.onabort=function(){a&&(n(_("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){n(_("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(_(t,e,"ECONNABORTED",a)),a=null},q.isStandardBrowserEnv()){var f=(e.withCredentials||K(l))&&e.xsrfCookieName?J.read(e.xsrfCookieName):void 0;f&&(o[e.xsrfHeaderName]=f)}if("setRequestHeader"in a&&q.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),q.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),n(e),a=null)})),r||(r=null),a.send(r)}))},Q={"Content-Type":"application/x-www-form-urlencoded"};function Z(e,t){!q.isUndefined(e)&&q.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ee,te={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(ee=W),ee),transformRequest:[function(e,t){return X(t,"Accept"),X(t,"Content-Type"),q.isFormData(e)||q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)?e:q.isArrayBufferView(e)?e.buffer:q.isURLSearchParams(e)?(Z(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):q.isObject(e)?(Z(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};te.headers={common:{Accept:"application/json, text/plain, */*"}},q.forEach(["delete","get","head"],(function(e){te.headers[e]={}})),q.forEach(["post","put","patch"],(function(e){te.headers[e]=q.merge(Q)}));var ne=te;function re(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var oe=function(e){return re(e),e.headers=e.headers||{},e.data=G(e.data,e.headers,e.transformRequest),e.headers=q.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),q.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||ne.adapter)(e).then((function(t){return re(e),t.data=G(t.data,t.headers,e.transformResponse),t}),(function(t){return M(t)||(re(e),t&&t.response&&(t.response.data=G(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ae=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function i(e,t){return q.isPlainObject(e)&&q.isPlainObject(t)?q.merge(e,t):q.isPlainObject(t)?q.merge({},t):q.isArray(t)?t.slice():t}function c(r){q.isUndefined(t[r])?q.isUndefined(e[r])||(n[r]=i(void 0,e[r])):n[r]=i(e[r],t[r])}q.forEach(r,(function(e){q.isUndefined(t[e])||(n[e]=i(void 0,t[e]))})),q.forEach(o,c),q.forEach(a,(function(r){q.isUndefined(t[r])?q.isUndefined(e[r])||(n[r]=i(void 0,e[r])):n[r]=i(void 0,t[r])})),q.forEach(s,(function(r){r in t?n[r]=i(e[r],t[r]):r in e&&(n[r]=i(void 0,e[r]))}));var u=r.concat(o).concat(a).concat(s),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return q.forEach(l,c),n};function se(e){this.defaults=e,this.interceptors={request:new H,response:new H}}se.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ae(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[oe,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},se.prototype.getUri=function(e){return e=ae(this.defaults,e),V(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},q.forEach(["delete","get","head","options"],(function(e){se.prototype[e]=function(t,n){return this.request(ae(n||{},{method:e,url:t,data:(n||{}).data}))}})),q.forEach(["post","put","patch"],(function(e){se.prototype[e]=function(t,n,r){return this.request(ae(r||{},{method:e,url:t,data:n}))}}));var ie=se;function ce(e){this.message=e}ce.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ce.prototype.__CANCEL__=!0;var ue=ce;function le(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new ue(e),t(n.reason))}))}le.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},le.source=function(){var e;return{token:new le((function(t){e=t})),cancel:e}};var fe=le;function he(e){var t=new ie(e),n=T(ie.prototype.request,t);return q.extend(n,ie.prototype,t),q.extend(n,t),n}var de=he(ne);de.Axios=ie,de.create=function(e){return he(ae(de.defaults,e))},de.Cancel=ue,de.CancelToken=fe,de.isCancel=M,de.all=function(e){return Promise.all(e)},de.spread=function(e){return function(t){return e.apply(null,t)}},de.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var pe=de,me=de;pe.default=me;var ge=pe;const ve=t(void 0),ye={subscribe:ve.subscribe,login:e=>ge.post("https://xo-backend-soroosh.fandogh.cloud/auth/local",{identifier:e.email,password:e.password}).then((e=>ve.set(e.data))),register:e=>ge.post("https://xo-backend-soroosh.fandogh.cloud/auth/local/register",{...e,username:e.email}).then((e=>ve.set(e.data)))},we=t(void 0),be={subscribe:we.subscribe,newGame:e=>ge.post("https://xo-backend-soroosh.fandogh.cloud/games",{size:3},{headers:{Authorization:`Bearer ${e}`}}).then((e=>we.set(e.data))),joinGame:(e,t)=>ge.post(`https://xo-backend-soroosh.fandogh.cloud/games/${t}/join`,{},{headers:{Authorization:`Bearer ${e}`}}).then((e=>we.set(e.data)))},Ee=e([ve,we],(([e,t],n)=>{if(e&&t){const r=setInterval((()=>{ge.get(`https://xo-backend-soroosh.fandogh.cloud/games/${t.code}`,{headers:{Authorization:`Bearer ${e.jwt}`}}).then((e=>n(e.data)))}),1e3);return()=>{clearInterval(r)}}}),void 0);function xe(e){let t,n,r=e[1].data.message[0].messages[0].message+"";return{c(){t=a("div"),n=s(r),this.h()},l(e){t=i(e,"DIV",{class:!0});var o=c(t);n=u(o,r),o.forEach(l),this.h()},h(){f(t,"class","error svelte-fn5c6r")},m(e,r){h(e,t,r),d(t,n)},p(e,t){2&t&&r!==(r=e[1].data.message[0].messages[0].message+"")&&p(n,r)},d(e){e&&l(t)}}}function je(e){let t,n,r,o,p,E,x,j,C,A,k,N,$,R,S,T,O=e[1]&&xe(e);return{c(){t=a("div"),n=a("h3"),r=s("Please login or register to play XO"),o=m(),p=a("div"),E=a("input"),x=m(),j=a("input"),C=m(),O&&O.c(),A=m(),k=a("div"),N=a("input"),$=m(),R=a("input"),this.h()},l(e){t=i(e,"DIV",{class:!0});var a=c(t);n=i(a,"H3",{});var s=c(n);r=u(s,"Please login or register to play XO"),s.forEach(l),o=g(a),p=i(a,"DIV",{});var f=c(p);E=i(f,"INPUT",{type:!0,placeholder:!0}),x=g(f),j=i(f,"INPUT",{type:!0,placeholder:!0}),f.forEach(l),C=g(a),O&&O.l(a),A=g(a),k=i(a,"DIV",{});var h=c(k);N=i(h,"INPUT",{type:!0,value:!0}),$=g(h),R=i(h,"INPUT",{type:!0,value:!0}),h.forEach(l),a.forEach(l),this.h()},h(){f(E,"type","text"),f(E,"placeholder","Email"),f(j,"type","password"),f(j,"placeholder","Password"),f(N,"type","button"),N.value="Login",f(R,"type","button"),R.value="Register",f(t,"class","form svelte-fn5c6r")},m(a,s){h(a,t,s),d(t,n),d(n,r),d(t,o),d(t,p),d(p,E),v(E,e[0].email),d(p,x),d(p,j),v(j,e[0].password),d(t,C),O&&O.m(t,null),d(t,A),d(t,k),d(k,N),d(k,$),d(k,R),S||(T=[y(E,"input",e[4]),y(j,"input",e[5]),y(N,"click",e[2]),y(R,"click",e[3])],S=!0)},p(e,[n]){1&n&&E.value!==e[0].email&&v(E,e[0].email),1&n&&j.value!==e[0].password&&v(j,e[0].password),e[1]?O?O.p(e,n):(O=xe(e),O.c(),O.m(t,A)):O&&(O.d(1),O=null)},i:w,o:w,d(e){e&&l(t),O&&O.d(),S=!1,b(T)}}}function Ce(e,t,n){let r,o={email:"",password:""};return[o,r,function(){ye.login(o).catch((e=>{n(1,r=e.response),console.log(r)}))},function(){ye.register(o).catch((e=>n(1,r=e.response)))},function(){o.email=this.value,n(0,o)},function(){o.password=this.value,n(0,o)}]}class Ae extends n{constructor(e){super(),r(this,e,Ce,je,o,{})}}function ke(e){let t,n,r,o,p,w,E,x,j,C,A,k,N,$,R;return{c(){t=a("div"),n=a("h3"),r=s("Click here to create a new game"),o=m(),p=a("input"),w=m(),E=a("div"),x=a("h3"),j=s("Please fill the code if you already have one"),C=m(),A=a("input"),k=m(),N=a("input"),this.h()},l(e){t=i(e,"DIV",{});var a=c(t);n=i(a,"H3",{});var s=c(n);r=u(s,"Click here to create a new game"),s.forEach(l),o=g(a),p=i(a,"INPUT",{type:!0,value:!0}),a.forEach(l),w=g(e),E=i(e,"DIV",{});var f=c(E);x=i(f,"H3",{});var h=c(x);j=u(h,"Please fill the code if you already have one"),h.forEach(l),C=g(f),A=i(f,"INPUT",{type:!0}),k=g(f),N=i(f,"INPUT",{type:!0,value:!0}),f.forEach(l),this.h()},h(){f(p,"type","button"),p.value="New Game",f(A,"type","text"),f(N,"type","button"),N.value="Join Game"},m(a,s){h(a,t,s),d(t,n),d(n,r),d(t,o),d(t,p),h(a,w,s),h(a,E,s),d(E,x),d(x,j),d(E,C),d(E,A),v(A,e[0]),d(E,k),d(E,N),$||(R=[y(p,"click",e[2]),y(A,"input",e[4]),y(N,"click",e[3])],$=!0)},p(e,t){1&t&&A.value!==e[0]&&v(A,e[0])},d(e){e&&l(t),e&&l(w),e&&l(E),$=!1,b(R)}}}function Ne(e){let t,n,r,o=e[1].code+"";return{c(){t=s("Your game code is "),n=s(o),r=s(", feel free to share with anyone you want to play with.")},l(e){t=u(e,"Your game code is "),n=u(e,o),r=u(e,", feel free to share with anyone you want to play with.")},m(e,o){h(e,t,o),h(e,n,o),h(e,r,o)},p(e,t){2&t&&o!==(o=e[1].code+"")&&p(n,o)},d(e){e&&l(t),e&&l(n),e&&l(r)}}}function $e(e){let t,n,r=!e[1]&&ke(e),o=e[1]&&Ne(e);return{c(){t=a("div"),r&&r.c(),n=m(),o&&o.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var a=c(t);r&&r.l(a),n=g(a),o&&o.l(a),a.forEach(l),this.h()},h(){f(t,"class","form svelte-1u34jo3")},m(e,a){h(e,t,a),r&&r.m(t,null),d(t,n),o&&o.m(t,null)},p(e,[a]){e[1]?r&&(r.d(1),r=null):r?r.p(e,a):(r=ke(e),r.c(),r.m(t,n)),e[1]?o?o.p(e,a):(o=Ne(e),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},i:w,o:w,d(e){e&&l(t),r&&r.d(),o&&o.d()}}}function Re(e,t,n){let r,o;E(e,ye,(e=>n(5,r=e))),E(e,be,(e=>n(1,o=e)));let a=null;return[a,o,function(){be.newGame(r.jwt)},function(){be.joinGame(r.jwt,a)},function(){a=this.value,n(0,a)}]}class Se extends n{constructor(e){super(),r(this,e,Re,$e,o,{})}}function Te(e,t,n){const r=e.slice();return r[9]=t[n],r}function Oe(e,t,n){const r=e.slice();return r[12]=t[n],r}function Ue(e){let t,n,r,o,v,y=e[0].code+"";function w(e,t){return e[1]?Be:Pe}let b=w(e),E=b(e);return{c(){t=a("div"),n=s("The game code is "),r=s(y),o=m(),v=a("div"),E.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var a=c(t);n=u(a,"The game code is "),r=u(a,y),a.forEach(l),o=g(e),v=i(e,"DIV",{class:!0});var s=c(v);E.l(s),s.forEach(l),this.h()},h(){f(t,"class","svelte-to5jpo"),f(v,"class","svelte-to5jpo")},m(e,a){h(e,t,a),d(t,n),d(t,r),h(e,o,a),h(e,v,a),E.m(v,null)},p(e,t){1&t&&y!==(y=e[0].code+"")&&p(r,y),b===(b=w(e))&&E?E.p(e,t):(E.d(1),E=b(e),E&&(E.c(),E.m(v,null)))},d(e){e&&l(t),e&&l(o),e&&l(v),E.d()}}}function Pe(e){let t;return{c(){t=s("Waiting for another player... please share the code with one of your friends")},l(e){t=u(e,"Waiting for another player... please share the code with one of your friends")},m(e,n){h(e,t,n)},p:w,d(e){e&&l(t)}}}function Be(e){let t,n,r=e[1].email+"";return{c(){t=s("Your opponent is "),n=s(r)},l(e){t=u(e,"Your opponent is "),n=u(e,r)},m(e,r){h(e,t,r),h(e,n,r)},p(e,t){2&t&&r!==(r=e[1].email+"")&&p(n,r)},d(e){e&&l(t),e&&l(n)}}}function De(e){let t,n=e[2],r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(Te(e,n,t));return{c(){t=a("table");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=i(e,"TABLE",{class:!0});var n=c(t);for(let e=0;e<r.length;e+=1)r[e].l(n);n.forEach(l),this.h()},h(){f(t,"class","svelte-to5jpo")},m(e,n){h(e,t,n);for(let e=0;e<r.length;e+=1)r[e].m(t,null)},p(e,o){if(20&o){let a;for(n=e[2],a=0;a<n.length;a+=1){const s=Te(e,n,a);r[a]?r[a].p(s,o):(r[a]=qe(s),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(e){e&&l(t),x(r,e)}}}function Ie(e){let t,n,r,o,a=(e[3]()||"")+"",i=e[0].winner.username+"";return{c(){t=s(a),n=m(),r=s(i),o=s(" won the game :tada:")},l(e){t=u(e,a),n=g(e),r=u(e,i),o=u(e," won the game :tada:")},m(e,a){h(e,t,a),h(e,n,a),h(e,r,a),h(e,o,a)},p(e,t){1&t&&i!==(i=e[0].winner.username+"")&&p(r,i)},d(e){e&&l(t),e&&l(n),e&&l(r),e&&l(o)}}}function Le(e){let t,n,r,o,m=e[12].marker+"";function g(){return e[5](e[12])}return{c(){t=a("td"),n=s(m),this.h()},l(e){t=i(e,"TD",{class:!0});var r=c(t);n=u(r,m),r.forEach(l),this.h()},h(){f(t,"class","cell svelte-to5jpo")},m(e,a){h(e,t,a),d(t,n),r||(o=y(t,"click",g),r=!0)},p(t,r){e=t,4&r&&m!==(m=e[12].marker+"")&&p(n,m)},d(e){e&&l(t),r=!1,o()}}}function qe(e){let t,n,r=e[9],o=[];for(let t=0;t<r.length;t+=1)o[t]=Le(Oe(e,r,t));return{c(){t=a("tr");for(let e=0;e<o.length;e+=1)o[e].c();n=m(),this.h()},l(e){t=i(e,"TR",{class:!0});var r=c(t);for(let e=0;e<o.length;e+=1)o[e].l(r);n=g(r),r.forEach(l),this.h()},h(){f(t,"class","row")},m(e,r){h(e,t,r);for(let e=0;e<o.length;e+=1)o[e].m(t,null);d(t,n)},p(e,a){if(20&a){let s;for(r=e[9],s=0;s<r.length;s+=1){const i=Oe(e,r,s);o[s]?o[s].p(i,a):(o[s]=Le(i),o[s].c(),o[s].m(t,n))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},d(e){e&&l(t),x(o,e)}}}function ze(e){let t,n,r=e[0]&&Ue(e);function o(e,t){return e[0]&&e[0].winner?Ie:De}let s=o(e),u=s(e);return{c(){t=a("div"),r&&r.c(),n=m(),u.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var o=c(t);r&&r.l(o),n=g(o),u.l(o),o.forEach(l),this.h()},h(){f(t,"class","svelte-to5jpo")},m(e,o){h(e,t,o),r&&r.m(t,null),d(t,n),u.m(t,null)},p(e,[a]){e[0]?r?r.p(e,a):(r=Ue(e),r.c(),r.m(t,n)):r&&(r.d(1),r=null),s===(s=o(e))&&u?u.p(e,a):(u.d(1),u=s(e),u&&(u.c(),u.m(t,null)))},i:w,o:w,d(e){e&&l(t),r&&r.d(),u.d()}}}function Ve(e,t,n){let r,o,a,s;E(e,ye,(e=>n(6,a=e)));const i=Ee.subscribe((e=>{n(0,s=e)}));function c(e){ge.post("https://xo-backend-soroosh.fandogh.cloud/moves",{...e,game:s.code},{headers:{Authorization:`Bearer ${a.jwt}`}})}return e.$$.update=()=>{1&e.$$.dirty&&n(1,r=function(e){if(!e)return null;const t=a.user.id;return e.player1.id==t?e.player2:e.player1}(s)),1&e.$$.dirty&&n(2,o=function(e){if(console.log({b:e}),!e)return[];let t=e.moves;const n=[];for(let r=0;r<e.size;r++){const o=[];for(let n=0;n<e.size;n++){const e=t.filter((e=>e.x==r&&e.y==n));e.length>0?e[0].player==a.user.id?o.push({x:r,y:n,marker:"X"}):o.push({x:r,y:n,marker:"O"}):o.push({x:r,y:n,marker:""})}n.push(o)}return n}(s))},[s,r,o,i,c,e=>c(e)]}class Fe extends n{constructor(e){super(),r(this,e,Ve,ze,o,{})}}function He(e){let t,n;return t=new Ae({}),{c(){j(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){A(t,e,r),n=!0},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function Ge(e){let t,n;return t=new Se({}),{c(){j(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){A(t,e,r),n=!0},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function Me(e){let t,n;return t=new Fe({}),{c(){j(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,r){A(t,e,r),n=!0},i(e){n||(k(t.$$.fragment,e),n=!0)},o(e){N(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function Xe(e){let t,n,r,o,s=!e[0]&&He(),u=e[0]&&!e[1]&&Ge(),p=e[0]&&e[1]&&Me();return{c(){t=a("div"),s&&s.c(),n=m(),u&&u.c(),r=m(),p&&p.c(),this.h()},l(e){t=i(e,"DIV",{class:!0});var o=c(t);s&&s.l(o),n=g(o),u&&u.l(o),r=g(o),p&&p.l(o),o.forEach(l),this.h()},h(){f(t,"class","content svelte-1g4k5jt")},m(e,a){h(e,t,a),s&&s.m(t,null),d(t,n),u&&u.m(t,null),d(t,r),p&&p.m(t,null),o=!0},p(e,[o]){e[0]?s&&(S(),N(s,1,1,(()=>{s=null})),R()):s?1&o&&k(s,1):(s=He(),s.c(),k(s,1),s.m(t,n)),e[0]&&!e[1]?u?3&o&&k(u,1):(u=Ge(),u.c(),k(u,1),u.m(t,r)):u&&(S(),N(u,1,1,(()=>{u=null})),R()),e[0]&&e[1]?p?3&o&&k(p,1):(p=Me(),p.c(),k(p,1),p.m(t,null)):p&&(S(),N(p,1,1,(()=>{p=null})),R())},i(e){o||(k(s),k(u),k(p),o=!0)},o(e){N(s),N(u),N(p),o=!1},d(e){e&&l(t),s&&s.d(),u&&u.d(),p&&p.d()}}}function _e(e,t,n){let r,o;return E(e,ye,(e=>n(0,r=e))),E(e,be,(e=>n(1,o=e))),[r,o]}export default class extends n{constructor(e){super(),r(this,e,_e,Xe,o,{})}}