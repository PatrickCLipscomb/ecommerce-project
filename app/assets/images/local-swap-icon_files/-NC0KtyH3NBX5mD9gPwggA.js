(function() {var n="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this,p={};function q(a,b){(p[a]=p[a]||[]).push(b);var c=n;a=a.split(".");for(var d=0;d<a.length-1&&c;d++)c=c[a[d]];a=a[a.length-1];c&&c[a]instanceof Function&&(c[a]=b(c[a]))}
function r(){r=function(){};if(!n.Symbol){n.Symbol=u;var a=[],b=function(b){return function(d){a=[];d=b(d);for(var f=[],g=0,l=d.length;g<l;g++){var k;a:if(k=d[g],14>k.length)k=!1;else{for(var h=0;14>h;h++)if(k[h]!="jscomp_symbol_"[h]){k=!1;break a}k=!0}k?a.push(d[g]):f.push(d[g])}return f}};q("Object.keys",b);q("Object.getOwnPropertyNames",b);q("Object.getOwnPropertySymbols",function(c){return function(d){b.W=Object.getOwnPropertyNames(d);a.push.apply(c(d));return a}})}}var v=0;
function u(a){return"jscomp_symbol_"+a+v++}function w(){r();n.Symbol.iterator||(n.Symbol.iterator=n.Symbol("iterator"));w=function(){}}function x(a,b){w();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}
for(var y="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},z=n,A=["Array","prototype","keys"],B=0;B<A.length-1;B++){var C=A[B];C in z||(z[C]={});z=z[C]}var D=A[A.length-1],E=z[D],F=E?E:function(){return x(this,function(a){return a})};
if(F!=E){for(var G=p["Array.prototype.keys"]||[],B=0;B<G.length;B++)F=G[B](F);y(z,D,{configurable:!0,writable:!0,value:F})}function I(a,b){this.v=a;this.namespace=void 0===b?null:b}I.prototype.setItem=function(a,b){try{return this.v.setItem(null==this.namespace?a:this.namespace+"."+a,b),!0}catch(c){return!1}};I.prototype.getItem=function(a){return this.v.getItem(null==this.namespace?a:this.namespace+"."+a)};
I.prototype.removeItem=function(a){this.v.removeItem(null==this.namespace?a:this.namespace+"."+a)};function J(){this.xhr=null}J.prototype.cancel=function(){this.xhr&&(this.xhr.abort(),this.xhr=null)};J.prototype.finish=function(){this.xhr=null};function K(a){this.C=a&&a.analyticsContext||null;this.o=a&&a.authToken||null;this.u=a&&a.authzToken||null;this.D=a&&a.brandRestriction||null;this.F=a&&a.buildName||null;this.G=a&&a.buildSha||null;this.i=a&&a.csrfTokens||{};this.w=a&&a.serverRoot||null;this.O=!!this.w;this.R=this.w?this.w+"/_ajax":"/_ajax"}
function L(a){var b=a.indexOf("/",1);return-1==b?a:a.substring(0,b)}K.prototype.get=function(a,b){var c=new J;this.send("GET",a,null,!0,null,c,null,b);return c};K.prototype.post=function(a,b,c,d){var f=new J;M(this,"POST",a,b,!0,0,f,c,d);return f};
function M(a,b,c,d,f,g,l,k,h){var m=L(c);if(m in a.i){var e=a.i[m];a.send(b,c,d,f,e,l,k,function(t,H){418==t&&1>g?(a.i[m]==e&&delete a.i[m],M(a,b,c,d,f,g+1,l,k,h)):(h&&h(t,H),l.finish())})}else a.send("GET","/csrf"+m,null,f,null,l,null,function(e,H){200==e?(m in a.i||(a.i[m]=String(H)),M(a,b,c,d,f,g,l,k,h)):(h(e,null),l.finish())})}
K.prototype.send=function(a,b,c,d,f,g,l,k){function h(){4==e.readyState&&m()}function m(){var a,b,c;try{a=e.status;var d,f;try{d=e.getResponseHeader("X-Canva-Auth")}catch(h){}try{f=e.getResponseHeader("X-Canva-Authz")}catch(h){}d&&(t.o="!"!=d?d:null);f&&(t.u="!"!=f?f:null);b=e.responseText}catch(h){if(h.message&&h.message.match(/c00c023f/))a=0,b="";else throw g.finish(),h;}b=b&&b.trim?b.trim():"";d=b.substring(0,20);if(0<d.length){if("'\"])}while(1);\x3c/x\x3e//"!=d){k(500,null);g.finish();return}b=
b.substring(20);try{c=JSON.parse(b)}catch(h){k(500,null);g.finish();return}}else c=null;k(a,c);g.finish()}b=this.R+b;var e=g.xhr=new XMLHttpRequest,t=this;e.open(a,b,d);this.O&&(e.withCredentials=!0);"GET"!=a&&f&&e.setRequestHeader("X-Csrf-Token",f);this.C&&e.setRequestHeader("X-Canva-Analytics",this.C);this.o&&e.setRequestHeader("X-Canva-Auth",this.o);this.u&&e.setRequestHeader("X-Canva-Authz",this.u);this.D&&e.setRequestHeader("X-Canva-Brand",this.D);this.F&&e.setRequestHeader("X-Canva-Build-Name",
this.F);this.G&&e.setRequestHeader("X-Canva-Build-Sha",this.G);null===c?a=null:"object"==typeof c&&"undefined"!==typeof Blob&&c instanceof Blob?(e.setRequestHeader("Content-Type",c.type),l&&e.upload.addEventListener("progress",l,!1),a=c):(e.setRequestHeader("Content-Type","application/json;charset\x3dUTF-8"),a=JSON.stringify(c));d?(e.onreadystatechange=h,e.send(a)):(e.send(a),m())};function N(){this.view=null}N.prototype.j=function(a){var b=this;this.view&&(this.view.remove(),this.view=null);a&&(this.view=new O,this.view.render(a).$el.appendTo("body"),this.view.once("hide",function(){return b.trigger("hide")}))};N.prototype.on=Backbone.Events.on;N.prototype.off=Backbone.Events.off;N.prototype.trigger=Backbone.Events.trigger;function O(){}O=Backbone.View.extend({className:"systemAlert"});O.prototype.events=function(){return{"click .systemAlertHide":this.hide}};
O.prototype.hide=function(a){a.preventDefault();this.trigger("hide")};O.prototype.render=function(a){var b=this.el;soy.asserts.assertType(goog.isString(a)||a instanceof goog.soy.data.SanitizedContent,"message",a,"string|goog.soy.data.SanitizedContent");a=soydata.VERY_UNSAFE.ordainSanitizedHtml('\x3cp class\x3d"systemAlertMessage"\x3e'+soy.$$escapeHtml(a)+'\x3c/p\x3e\x3ca class\x3d"systemAlertHide" href\x3d"#"\x3eOK, hide\x3c/a\x3e');b.innerHTML=a;return this};function Q(){}Q.prototype.now=function(){return Date.now()};var R=new Q;var T=new S;function S(){}S.prototype.setInterval=function(a,b){return window.setInterval(a,b)};S.prototype.clearInterval=function(a){window.clearInterval(a)};S.prototype.setTimeout=function(a,b){return window.setTimeout(a,b)};S.prototype.clearTimeout=function(a){window.clearTimeout(a)};S.prototype.requestAnimationFrame=function(a){return window.requestAnimationFrame(a)};S.prototype.cancelAnimationFrame=function(a){window.cancelAnimationFrame(a)};function U(a,b,c,d,f){var g=this;this.view=a;this.g=this.message=null;this.H=c;this.N=b;this.K=d;this.J=f;this.l=null;this.view.on("hide",function(){if(g.message){var a=g.H,b="acknowledged."+g.message,c=g.J.now();try{var d=JSON.stringify(c);a.setItem(b,d)}catch(e){}g.j(null)}})}function V(a){a.g&&a.g.cancel();a.g=a.N.get("/alerts/active",function(b,c){a.g=null;200===b&&a.j(c)})}
U.prototype.start=function(a){var b=this;null==this.l&&(this.j(void 0!==a?a:null),this.l=this.K.setInterval(function(){return V(b)},18E5))};U.prototype.stop=function(){null!=this.g&&(this.g.cancel(),this.g=null);null!=this.l&&this.K.clearInterval(this.l)};U.prototype.j=function(a){if(a){var b;try{var c=this.H.getItem("acknowledged."+a);b=null!==c?JSON.parse(c):null}catch(d){b=null}if(null!=b&&864E5>this.J.now()-b)return}this.message=a;this.view.j(a)};$(function(){var a;if(window.localStorage)a=new I(window.localStorage,"SystemAlertController");else throw Error("ClientStore: localStorage is not defined on window, likely an unsupported browser");(new U(new N,new K(window.httpServiceConfig),a,T,R)).start(window.systemAlert)});})();