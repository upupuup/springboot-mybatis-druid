(function(){var h={},mt={},c={id:"104e825088869ff9c5855f24ab8204c2",dm:["v4.demo.jeesite.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,aet:'',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(b,a,d){var f;d.V&&(f=new Date,f.setTime(f.getTime()+d.V));document.cookie=b+"="+a+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(f?"; expires="+f.toGMTString():"")+(d.Ib?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:t};mt.lang={};mt.lang.d=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};
mt.lang.ta=function(b){return mt.lang.d(b,"Number")&&isFinite(b)};mt.lang.aa=function(){return mt.lang.d(c.aet,"String")};mt.lang.j=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.C=function(b,a){var d=u;if(b==t||!mt.lang.d(b,"Array")||a===r)return d;if(Array.prototype.indexOf)d=-1!==b.indexOf(a);else for(var f=0;f<b.length;f++)if(b[f]===a){d=s;break}return d};
(function(){var b=mt.lang;mt.e={};mt.e.Na=function(a){return document.getElementById(a)};mt.e.Z=function(a,d){var b=[],g=[];if(!a)return g;for(;a.parentNode!=t;){for(var l=0,n=0,p=a.parentNode.childNodes.length,e=0;e<p;e++){var k=a.parentNode.childNodes[e];if(k.nodeName===a.nodeName&&(l++,k===a&&(n=l),0<n&&1<l))break}if((p=""!==a.id)&&d){b.unshift("#"+encodeURIComponent(a.id));break}else p&&(p="#"+encodeURIComponent(a.id),p=0<b.length?p+">"+b.join(">"):p,g.push(p)),b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+
(1<l?"["+n+"]":""));a=a.parentNode}g.push(b.join(">"));return g};mt.e.Ta=function(a){return(a=mt.e.Z(a,s))&&a.length?String(a[0]):""};mt.e.Db=function(a){return mt.e.Z(a,u)};mt.e.Bb=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.e.Oa=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.e.Cb=function(a){var b={top:0,left:0};if(!a)return b;var f=mt.e.Oa(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());
return{top:b.top+(window.pageYOffset||f.scrollTop)-(f.clientTop||0),left:b.left+(window.pageXOffset||f.scrollLeft)-(f.clientLeft||0)}};mt.e.getAttribute=function(a,b){var f=a.getAttribute&&a.getAttribute(b)||t;if(!f&&a.attributes&&a.attributes.length)for(var g=a.attributes,l=g.length,n=0;n<l;n++)g[n].nodeName===b&&(f=g[n].nodeValue);return f};mt.e.J=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.e.Va=function(a){var d="";a.textContent?d=b.trim(a.textContent):
a.innerText&&(d=b.trim(a.innerText));d&&(d=d.replace(/\s+/g," ").substring(0,255));return d};mt.e.Pa=function(a){var b=mt.e.J(a);"input"===b&&("button"===a.type||"submit"===a.type)?a=a.value||"":"img"===b?(b=mt.e.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.e.Va(a);return String(a).substring(0,255)};(function(){(mt.e.gb=function(){function a(){if(!a.M){a.M=s;for(var b=0,d=g.length;b<d;b++)g[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(f){setTimeout(b,
1);return}a()}var f=u,g=[],l;document.addEventListener?l=function(){document.removeEventListener("DOMContentLoaded",l,u);a()}:document.attachEvent&&(l=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",l),a())});(function(){if(!f)if(f=s,"complete"===document.readyState)a.M=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",l,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",
l);window.attachEvent("onload",a);var g=u;try{g=window.frameElement==t}catch(p){}document.documentElement.doScroll&&g&&b()}})();return function(b){a.M?b():g.push(b)}}()).M=u})();return mt.e})();mt.event={};mt.event.c=function(b,a,d){b.attachEvent?b.attachEvent("on"+a,function(a){d.call(b,a)}):b.addEventListener&&b.addEventListener(a,d,u)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=u};
(function(){var b=mt.event;mt.g={};mt.g.sa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.cb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.ib=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.K=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.B=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a}a();b.c(window,"orientationchange",a)})();return mt.g})();
mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return b(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var g=["["],l=d.length,n,p,e;for(p=0;p<l;p++)switch(e=d[p],typeof e){case "undefined":case "function":case "unknown":break;default:n&&g.push(","),g.push(mt.l.stringify(e)),n=1}g.push("]");return g.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+a(d.getMonth()+1)+"-"+a(d.getDate())+"T"+a(d.getHours())+":"+a(d.getMinutes())+":"+a(d.getSeconds())+'"';n=["{"];p=mt.l.stringify;for(l in d)if(Object.prototype.hasOwnProperty.call(d,l))switch(e=
d[l],typeof e){case "undefined":case "unknown":case "function":break;default:g&&n.push(","),g=1,n.push(p(l)+":"+p(e))}n.push("}");return n.join("")}}}();mt.localStorage={};mt.localStorage.P=function(){if(!mt.localStorage.i)try{mt.localStorage.i=document.createElement("input"),mt.localStorage.i.type="hidden",mt.localStorage.i.style.display="none",mt.localStorage.i.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.i)}catch(b){return u}return s};
mt.localStorage.set=function(b,a,d){var f=new Date;f.setTime(f.getTime()+d||31536E6);try{window.localStorage?(a=f.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.P()&&(mt.localStorage.i.expires=f.toUTCString(),mt.localStorage.i.load(document.location.hostname),mt.localStorage.i.setAttribute(b,a),mt.localStorage.i.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),d=b.substring(0,a)-0;if(d&&d>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.P())try{return mt.localStorage.i.load(document.location.hostname),mt.localStorage.i.getAttribute(b)}catch(f){}return t};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.P())try{mt.localStorage.i.load(document.location.hostname),mt.localStorage.i.removeAttribute(b),mt.localStorage.i.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){if(window.sessionStorage)try{window.sessionStorage.setItem(b,a)}catch(d){}};
mt.sessionStorage.get=function(b){return window.sessionStorage?window.sessionStorage.getItem(b):t};mt.sessionStorage.remove=function(b){window.sessionStorage&&window.sessionStorage.removeItem(b)};mt.xa={};mt.xa.log=function(b,a){var d=new Image,f="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[f]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=t;d=window[f]=t;a&&a(b)};d.src=b};mt.ha={};
mt.ha.Wa=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return b};
mt.ha.Ab=function(b,a,d,f,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+d+'" height="'+f+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+d+'" height="'+f+'" src="'+a+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.k=function(b,a){var d=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return d?d[3]:t};mt.url.Eb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:t};mt.url.Ra=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):t};mt.url.Y=function(b){return(b=mt.url.Ra(b))?b.replace(/:\d+$/,""):b};mt.url.Z=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function b(){for(var a=u,b=document.getElementsByTagName("script"),f=b.length,f=100<f?100:f,g=0;g<f;g++){var l=b[g].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.Ma=b})();var A=h.Ma;
h.p={Fb:"http://tongji.baidu.com/hm-web/welcome/ico",wa:"hm.baidu.com/hm.gif",Ca:"tongji.baidu.com",$a:"hmmd",ab:"hmpl",ub:"utm_medium",Za:"hmkw",wb:"utm_term",Xa:"hmci",tb:"utm_content",bb:"hmsr",vb:"utm_source",Ya:"hmcu",rb:"utm_campaign",w:0,m:Math.round(+new Date/1E3),z:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",ca:A()||"https:"===document.location.protocol?"https:":"http:",Gb:0,yb:6E5,fb:6E5,Hb:5E3,zb:5,T:1024,xb:1,da:2147483647,ya:"kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" "),
D:s,na:["a","input","button"],Ea:{id:"data-hm-id",S:"data-hm-class",ka:"data-hm-xpath",content:"data-hm-content",O:"data-hm-tag",link:"data-hm-link"},ma:"data-hm-enabled",la:"data-hm-disabled"};(function(){var b={r:{},c:function(a,b){this.r[a]=this.r[a]||[];this.r[a].push(b)},I:function(a,b){this.r[a]=this.r[a]||[];for(var f=this.r[a].length,g=0;g<f;g++)this.r[a][g](b)}};return h.A=b})();
(function(){function b(b,f){var g=document.createElement("script");g.charset="utf-8";a.d(f,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=t,f()}:g.onload=function(){f()});g.src=b;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(g,l)}var a=mt.lang;return h.load=b})();
(function(){var b=mt.lang,a=mt.e,d=mt.event,f=mt.g,g=h.p,l=h.A,n=+new Date,p=[],e={oa:function(){return function(k){if(h.a&&h.a.D&&c.aet&&c.aet.length){var d=k.target||k.srcElement;if(d){var m=h.a.na,q=a.getAttribute(d,g.ma)!=t?s:u;if(a.getAttribute(d,g.la)==t)if(q)e.Q(e.X(d,k));else{var f=a.J(d);if(b.C(m,"*")||b.C(m,f))e.Q(e.X(d,k));else for(;d.parentNode!=t;){var q=d.parentNode,f=a.J(q),v="a"===f&&b.C(m,"a")?s:u,f="button"===f&&b.C(m,"button")?s:u,l=a.getAttribute(q,g.ma)!=t?s:u;if(a.getAttribute(q,
g.la)==t&&(v||f||l)){e.Q(e.X(q,k));break}d=d.parentNode}}}}}},X:function(k,d){var m={},q=g.Ea;m.id=a.getAttribute(k,q.id)||a.getAttribute(k,"id")||"";m.S=a.getAttribute(k,q.S)||a.getAttribute(k,"class")||"";m.ka=a.getAttribute(k,q.ka)||a.Ta(k);m.content=a.getAttribute(k,q.content)||a.Pa(k);m.O=a.getAttribute(k,q.O)||a.J(k);m.link=a.getAttribute(k,q.link)||a.getAttribute(k,"href")||"";m.type=d.type||"click";q=b.ta(k.offsetTop)?k.offsetTop:0;"click"===d.type?q=f.sa?d.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):d.pageY:"touchend"===d.type&&(d.ea&&b.d(d.ea.changedTouches,"Array")&&d.ea.changedTouches.length)&&(q=d.ea.changedTouches[0].pageY);m.qb=q;return m},Q:function(a){var d=b.j,d=[+new Date-(h.a.s!==r?h.a.s:n),d(a.id),d(a.S),d(a.O),d(a.ka),d(a.link),d(a.content),a.type,a.qb].join("*");e.R(d);b.C(["a"],a.O)&&b.d(this.G(),"Function")&&this.G()()},R:function(a){a.length>g.T||(encodeURIComponent(p.join("!")+a).length>g.T&&(e.H(p.join("!")),p=[]),p.push(a))},H:function(a){h.a.b.et=
5;h.a.b.ep=a;h.a.h()},G:function(){return function(){p&&p.length&&(e.H(p.join("!")),p=[])}}};b.aa()&&""!==c.aet&&l.c("pv-b",function(){d.c(document,"click",e.oa());"ontouchend"in document&&d.c(window,"touchend",e.oa());d.c(window,"unload",e.G())});return e})();
(function(){var b=mt.event,a=mt.g,d=h.p,f=h.A,g=+new Date,l=[],n=t,p={Ia:function(){return function(){h.a&&(h.a.D&&c.aet&&c.aet.length)&&(window.clearTimeout(n),n=window.setTimeout(function(){p.Aa(a.K()+a.B())},150))}},Aa:function(a){p.R([+new Date-(h.a.s!==r?h.a.s:g),a].join("*"))},R:function(a){if(encodeURIComponent(l.join("!")+a).length>d.T||5<l.length)p.H(l.join("!")),l=[];l.push(a)},H:function(b){h.a.b.et=6;h.a.b.vh=a.B();h.a.b.ep=b;h.a.h()},G:function(){return function(){l&&l.length&&(p.H(l.join("!")),
l=[])}}};mt.lang.aa()&&""!==c.aet&&f.c("pv-b",function(){b.c(window,"scroll",p.Ia());b.c(window,"unload",p.G())});return p})();
(function(){function b(){return function(){h.a.b.nv=0;h.a.b.st=4;h.a.b.et=3;h.a.b.ep=h.U.Sa()+","+h.U.Qa();h.a.h()}}function a(){clearTimeout(z);var b;v&&(b="visible"==document[v]);y&&(b=!document[y]);p="undefined"==typeof b?s:b;if((!n||!e)&&p&&k)x=s,m=+new Date;else if(n&&e&&(!p||!k))x=u,q+=+new Date-m;n=p;e=k;z=setTimeout(a,100)}function d(a){var k=document,b="";if(a in k)b=a;else for(var m=["webkit","ms","moz","o"],d=0;d<m.length;d++){var q=m[d]+a.charAt(0).toUpperCase()+a.slice(1);if(q in k){b=
q;break}}return b}function f(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))k="focus"==b.type||"focusin"==b.type?s:u,a()}var g=mt.event,l=h.A,n=s,p=s,e=s,k=s,w=+new Date,m=w,q=0,x=s,v=d("visibilityState"),y=d("hidden"),z;a();(function(){var b=v.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,b,a);g.c(window,"pageshow",a);g.c(window,"pagehide",a);"object"==typeof document.onfocusin?(g.c(document,"focusin",f),g.c(document,"focusout",f)):(g.c(window,"focus",f),
g.c(window,"blur",f))})();h.U={Sa:function(){return+new Date-w},Qa:function(){return x?+new Date-m+q:q}};l.c("pv-b",function(){g.c(window,"unload",b())});return h.U})();
(function(){var b=mt.lang,a=h.p,d=h.load,f={eb:function(g){if((window._dxt===r||b.d(window._dxt,"Array"))&&"undefined"!==typeof h.a){var f=h.a.W();d([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(f)].join(""),g)}},pb:function(a){if(b.d(a,"String")||b.d(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Ga=f})();
(function(){function b(a,b,m,d){if(!(a===r||b===r||d===r)){if(""===a)return[b,m,d].join("*");a=String(a).split("!");for(var e,f=u,g=0;g<a.length;g++)if(e=a[g].split("*"),String(b)===e[0]){e[1]=m;e[2]=d;a[g]=e.join("*");f=s;break}f||a.push([b,m,d].join("*"));return a.join("!")}}function a(b){for(var e in b)if({}.hasOwnProperty.call(b,e)){var m=b[e];d.d(m,"Object")||d.d(m,"Array")?a(m):b[e]=String(m)}}var d=mt.lang,f=mt.l,g=mt.g,l=h.p,n=h.A,p=h.Ga,e={F:[],N:0,ua:u,o:{ia:"",page:""},init:function(){e.f=
0;n.c("pv-b",function(){e.Ha();e.Ka()});n.c("pv-d",function(){e.La();e.o.page=""});n.c("stag-b",function(){h.a.b.api=e.f||e.N?e.f+"_"+e.N:"";h.a.b.ct=[decodeURIComponent(h.a.getData("Hm_ct_"+c.id)||""),e.o.ia,e.o.page].join("!")});n.c("stag-d",function(){h.a.b.api=0;e.f=0;e.N=0})},Ha:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var k=arguments[b];d.d(k,"Array")&&(a.cmd[a.id].push(k),"_setAccount"===
k[0]&&(1<k.length&&/^[0-9a-f]{32}$/.test(k[1]))&&(k=k[1],a.id=k,a.cmd[k]=a.cmd[k]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},Ka:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,q=0,f=b.length;q<f;q++){var g=b[q];d.test(g[0])?e.F.push(g):e.fa(g)}a.cmd[c.id]={push:e.fa}},La:function(){if(0<e.F.length)for(var a=0,b=e.F.length;a<b;a++)e.fa(e.F[a]);e.F=t},fa:function(a){var b=a[0];if(e.hasOwnProperty(b)&&
d.d(e[b],"Function"))e[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(e.f|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||s===a))e.f|=2,h.a.qa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){e.f|=4;h.a.b.et=0;h.a.b.ep="";h.a.b.vl=g.K()+g.B();h.a.b.kb=0;h.a.$?(h.a.b.nv=0,h.a.b.st=4):h.a.$=s;var b=h.a.b.u,d=h.a.b.su;h.a.b.u=l.protocol+"//"+document.location.host+a[1];e.ua||(h.a.b.su=document.location.href);h.a.h();h.a.b.u=b;h.a.b.su=
d;h.a.s=+new Date}},_trackEvent:function(a){2<a.length&&(e.f|=8,h.a.b.nv=0,h.a.b.st=4,h.a.b.et=4,h.a.b.ep=d.j(a[1])+"*"+d.j(a[2])+(a[3]?"*"+d.j(a[3]):"")+(a[4]?"*"+d.j(a[4]):""),h.a.h())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],m=a[4]||3;if(0<b&&6>b&&0<m&&4>m){e.N++;for(var q=(h.a.b.cv||"*").split("!"),f=q.length;f<b-1;f++)q.push("*");q[b-1]=m+"*"+d.j(a[2])+"*"+d.j(a[3]);h.a.b.cv=q.join("!");a=h.a.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.a.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.a.hb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var e=d.j(a[1]);a=d.j(a[2]);if(e!==r&&a!==r){var m=decodeURIComponent(h.a.getData("Hm_ct_"+c.id)||""),m=b(m,e,1,a);h.a.setData("Hm_ct_"+c.id,encodeURIComponent(m),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var f=d.j(a[1]);a=d.j(a[2]);if(f!==r&&a!==r){var m=e.o.ia,m=b(m,f,2,a);e.o.ia=m}}},_setPageTag:function(a){if(!(3>a.length)){var f=d.j(a[1]);a=d.j(a[2]);if(f!==r&&a!==r){var m=e.o.page,
m=b(m,f,3,a);e.o.page=m}}},_setReferrerOverride:function(a){1<a.length&&(h.a.b.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],e.ua=s)},_trackOrder:function(b){b=b[1];d.d(b,"Object")&&(a(b),e.f|=16,h.a.b.nv=0,h.a.b.st=4,h.a.b.et=94,h.a.b.ep=f.stringify(b),h.a.h())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])e.f|=32,h.a.b.et=93,h.a.b.ep=a,h.a.h()},_trackRTPageview:function(b){b=b[1];d.d(b,"Object")&&(a(b),b=f.stringify(b),
512>=encodeURIComponent(b).length&&(e.f|=64,h.a.b.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.d(b,"Object")){a(b);b=encodeURIComponent(f.stringify(b));var g=function(a){var b=h.a.b.rt;e.f|=128;h.a.b.et=90;h.a.b.rt=a;h.a.h();h.a.b.rt=b},m=b.length;if(900>=m)g.call(this,b);else for(var m=Math.ceil(m/900),q="block|"+Math.round(Math.random()*l.da).toString(16)+"|"+m+"|",n=[],v=0;v<m;v++)n.push(v),n.push(b.substring(900*v,900*v+900)),g.call(this,q+n.join("|")),n=[]}},_setUserId:function(a){a=a[1];p.eb();
p.pb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.a.ra=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.a.D=a}};e.init();h.Da=e;return h.Da})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.b={},this.ra=this.qa=s,this.D=k.D,this.na=g.aa()&&0<c.aet.length?c.aet.split(","):"",this.$=u,this.init())}var a=mt.url,d=mt.xa,f=mt.ha,g=mt.lang,l=mt.cookie,n=mt.g,p=mt.localStorage,e=mt.sessionStorage,k=h.p,w=h.A;b.prototype={ba:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},va:function(a,b){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(b)},L:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.va(b,c.dm[d]))return s}else{var e=a.Y(b);if(e&&this.ba(e,c.dm[d]))return s}return u},W:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.ba(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},pa:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.va(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+
"/"}return"/"},Ua:function(){if(!document.referrer)return k.m-k.w>c.vdur?1:4;var b=u;this.L(document.referrer)&&this.L(document.location.href)?b=s:(b=a.Y(document.referrer),b=this.ba(b||"",document.location.hostname));return b?k.m-k.w>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||e.get(a)||p.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.W(),path:this.pa(),V:d}),d?p.set(a,b,d):e.set(a,b)}catch(f){}},hb:function(a){try{l.set(a,"",{domain:this.W(),path:this.pa(),V:-1}),
e.remove(a),p.remove(a)}catch(b){}},nb:function(){var a,b,d,e,f;k.w=this.getData("Hm_lpvt_"+c.id)||0;13===k.w.length&&(k.w=Math.round(k.w/1E3));b=this.Ua();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<k.m-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(k.m);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=k.m,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,
k.m);d=k.m===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.L(document.location.href)&&(""===document.referrer||this.L(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=e;this.b.lv=f},mb:function(){for(var a=[],b=this.b.et,d=+new Date,e=0,f=k.ya.length;e<f;e++){var g=k.ya[e],l=this.b[g];"undefined"!==typeof l&&""!==l&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(l))}switch(b){case 0:a.push("sn="+
k.z);this.b.rt&&a.push("rt="+encodeURIComponent(this.b.rt));break;case 3:a.push("sn="+k.z);break;case 5:a.push("sn="+k.z);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 6:a.push("sn="+k.z);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 85:a.push("sn="+k.z);break;case 90:this.b.rt&&a.push("rt="+this.b.rt)}return a.join("&")},ob:function(){this.nb();this.b.si=c.id;this.b.su=document.referrer;this.b.ds=n.ib;this.b.cl=n.colorDepth+"-bit";this.b.ln=String(n.language).toLowerCase();this.b.ja=n.javaEnabled?
1:0;this.b.ck=n.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=f.Wa();this.b.v="1.2.38";this.b.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=n.K()+n.B();var b=document.location.href;this.b.cm=a.k(b,k.$a)||"";this.b.cp=a.k(b,k.ab)||a.k(b,k.ub)||"";this.b.cw=a.k(b,k.Za)||a.k(b,k.wb)||"";this.b.ci=a.k(b,k.Xa)||a.k(b,k.tb)||"";this.b.cf=a.k(b,k.bb)||a.k(b,k.vb)||"";this.b.cu=a.k(b,k.Ya)||a.k(b,k.rb)||""},init:function(){try{this.ob(),
0===this.b.nv?this.lb():this.ga(".*"),h.a=this,this.Fa(),w.I("pv-b"),this.jb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(k.ca+"//"+k.wa+"?"+b.join("&"))}},jb:function(){function a(){w.I("pv-d")}this.qa?(this.$=s,this.b.et=0,this.b.ep="",this.b.vl=n.K()+n.B(),this.h(a)):a();this.s=+new Date},h:function(a){if(this.ra){var b=this;b.b.rnd=Math.round(Math.random()*k.da);
w.I("stag-b");var e=k.ca+"//"+k.wa+"?"+b.mb();w.I("stag-d");b.Ba(e);d.log(e,function(d){b.ga(d);g.d(a,"Function")&&a.call(b)})}},Fa:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.Y(document.referrer)===k.Ca?1:0,f=a.k(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&g)&&(this.b.rnd=Math.round(Math.random()*k.da),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",k.protocol+
"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(b,f))},Ba:function(a){var b=e.get("Hm_unsent_"+c.id)||"",d=this.b.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");e.set("Hm_unsent_"+c.id,b)},ga:function(a){var b=e.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,
"").replace(/,$/,""))?e.set("Hm_unsent_"+c.id,b):e.remove("Hm_unsent_"+c.id))},lb:function(){var a=this,b=e.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),f=function(b){d.log(k.ca+"//"+decodeURIComponent(b),function(b){a.ga(b)})},g=0,l=b.length;g<l;g++)f(b[g])}};return new b})();
(function(){var b=mt.event,a=mt.lang,d=h.p;if(c.kbtrk&&"undefined"!==typeof h.a){h.a.b.kb=a.ta(h.a.b.kb)?h.a.b.kb:0;var f=function(){h.a.b.et=85;h.a.b.ep=h.a.b.kb;h.a.h()};b.c(document,"keyup",function(){h.a.b.kb++});b.c(window,"unload",function(){f()});setInterval(f,d.fb)}})();var B=h.p,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.event,a=mt.l;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.a){var d=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},f=function(){var b;b=d("navigation");var f=d("request");b={netAll:f.start-b.start,netDns:d("domainLookup").value,netTcp:d("connect").value,srv:d("response").start-f.start,dom:performance.timing.domInteractive-performance.timing.fetchStart,loadEvent:d("loadEvent").end-
b.start};h.a.b.et=87;h.a.b.ep=a.stringify(b);h.a.h()};b.c(window,"load",function(){setTimeout(f,500)})}}catch(g){}})();
(function(){var b=mt.g,a=mt.lang,d=mt.event,f=mt.l;if("undefined"!==typeof h.a&&(c.med||(!b.sa||7<b.cb)&&c.cvcc)){var g,l,n,p,e=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},k=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},w=function(b,d){var e={};e.n=g;e.t="clk";e.v=b;if(d){var k=d.getAttribute("href"),l=d.getAttribute("onclick")?""+d.getAttribute("onclick"):t,m=d.getAttribute("id")||"";n.test(k)?(e.sn="mediate",
e.snv=k):a.d(l,"String")&&n.test(l)&&(e.sn="wrap",e.snv=l);e.id=m}h.a.b.et=86;h.a.b.ep=f.stringify(e);h.a.h();for(e=+new Date;400>=+new Date-e;);};if(c.med)l="/zoosnet",g="swt",n=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,p={click:function(){for(var a=[],b=e(document.getElementsByTagName("a")),b=[].concat.apply(b,e(document.getElementsByTagName("area"))),b=[].concat.apply(b,e(document.getElementsByTagName("img"))),d,f,g=0,k=b.length;g<k;g++)d=b[g],f=d.getAttribute("onclick"),
d=d.getAttribute("href"),(n.test(f)||n.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){l="/other-comm";g="other";n=c.cvcc.q||r;var m=c.cvcc.id||r;p={click:function(){for(var a=[],b=e(document.getElementsByTagName("a")),b=[].concat.apply(b,e(document.getElementsByTagName("area"))),b=[].concat.apply(b,e(document.getElementsByTagName("img"))),d,f,g,k=0,l=b.length;k<l;k++)d=b[k],n!==r?(f=d.getAttribute("onclick"),g=d.getAttribute("href"),m?(d=d.getAttribute("id"),(n.test(f)||n.test(g)||m.test(d))&&
a.push(b[k])):(n.test(f)||n.test(g))&&a.push(b[k])):m!==r&&(d=d.getAttribute("id"),m.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof p&&"undefined"!==typeof n){var q;l+=/\/$/.test(l)?"":"/";var x=function(b,d){if(q===d)return w(l+b,d),u;if(a.d(d,"Array")||a.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return w(l+b+"/"+(e+1),d[e]),u};d.c(document,"mousedown",function(b){b=b||window.event;q=b.target||b.srcElement;var d={};for(k(p,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&k(d,x)!==u;)q=q.parentNode})}}})();(function(){var b=mt.e,a=mt.lang,d=mt.event,f=mt.l;if("undefined"!==typeof h.a&&a.d(c.cvcf,"Array")&&0<c.cvcf.length){var g={za:function(){for(var a=c.cvcf.length,f,p=0;p<a;p++)(f=b.Na(decodeURIComponent(c.cvcf[p])))&&d.c(f,"click",g.Ja())},Ja:function(){return function(){h.a.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.a.b.ep=f.stringify(a);h.a.h()}}};b.gb(function(){g.za()})}})();
(function(){var b=mt.event,a=mt.l;if(c.med&&"undefined"!==typeof h.a){var d=+new Date,f={n:"anti",sb:0,kb:0,clk:0},g=function(){h.a.b.et=86;h.a.b.ep=a.stringify(f);h.a.h()};b.c(document,"click",function(){f.clk++});b.c(document,"keyup",function(){f.kb=1});b.c(window,"scroll",function(){f.sb++});b.c(window,"unload",function(){f.t=+new Date-d;g()});b.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
