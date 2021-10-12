(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(81),o=t.n(a),r=t(645),i=t.n(r),c=t(667),d=t.n(c),s=new URL(t(955),t.b),p=i()(o()),l=d()(s);p.push([e.id,"html, body{\n    background-image: url("+l+");\n    background-size:100% 100%;\n    background-repeat: no-repeat;\n    overflow: hidden;\n    margin: 0;\n    height:100%;\n}\n.header{\n    padding-top: 30px;\n    padding-bottom: 10px;\n    text-align:center;\n    background: rgb(0, 70, 0);\n    color:white;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n.tab {\n    display: inline;\n    border:4px solid;\n    border-color: black;\n    border-spacing:30px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n.header h3{\n    display: inline;\n    margin-right: 10px;\n    margin-left: 10px;\n    margin-top: 100px;\n}\n\n#content{\n    height:100%;\n}\n\n.page{\n    height: 100%;\n    background-color: rgba(0,0,0,0.4);\n}\n\n#frontpage {\n    height:100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#frontpage img{\n    margin-top: 40px;\n    border: 3px solid;\n    height: 400px;\n    width:auto;\n}\n\n#frontpage p{\n    border: 3px solid;\n    background-color: white;\n}\n\n.margin{\n    padding-bottom:20px;\n}\n\n.menu {\n    margin-bottom: 20px;\n    margin-right: auto;\n    margin-left: auto;\n    height:120px;\n    width:900px;\n    background-color: white;\n    border: 3px solid;\n}\n\n.menu img{\n    float: left;\n    height:120px;\n    width:282.53px;\n}\n.menu h2{\n    padding-top: 0px;\n    margin-left: 550px;\n    background-color: white;\n}\n.menu p{\n    padding-left: 340px;\n    padding-right:20px;\n    font-size: larger;\n}\n\n#Contact_Us{\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n#Contact_Us h1{\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n#contact{\n    display:flex;\n    align-items: center;\n    flex-direction: column;\n    min-height: 100%;\n}\n#contact h1{\n    color: white;\n    text-shadow: 3px 3px 3px black;\n}\n.contact{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    justify-content: space-between;\n    width:60%;\n}\n.info{\n    margin-top: 15px;\n    height:101.812px;\n    width:231.578px;\n    text-align: center;\n    color:white;\n    text-shadow: 3px 3px 3px black;\n}",""]);const m=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);a&&i[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var d=e[c],s=a.base?d[0]+a.base:d[0],p=r[s]||0,l="".concat(s," ").concat(p);r[s]=p+1;var m=t(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var h=o(u,a);a.byIndex=c,n.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var d=a(e,o),s=0;s<r.length;s++){var p=t(r[s]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},715:(e,n,t)=>{e.exports=t.p+"e0ed3183d11a4d8023fe.png"},629:(e,n,t)=>{e.exports=t.p+"0b2084fa77e7f0beaee4.png"},696:(e,n,t)=>{e.exports=t.p+"6828b365ddff62229cc8.png"},955:(e,n,t)=>{e.exports=t.p+"b2fef4a806deb15adea7.jpeg"},219:(e,n,t)=>{e.exports=t.p+"42fc3f6977b833e1ae48.jpeg"},89:(e,n,t)=>{e.exports=t.p+"87ebd75147f5f29b5dc2.jpeg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(715);const n=function(){const n=document.createElement("div"),t=new Image;t.src=e;const a=document.createElement("p");a.innerHTML="Michelin Star chef Artie Bucco brings the tastes of Italy to scenic New Jersey. Only at Nuovo Vesuvio.",n.appendChild(t),n.appendChild(a),n.classList.add("page"),n.id="frontpage",document.getElementById("content").appendChild(n)};var a=t(89),o=t(219),r=t(696);function i(e,n,t,a){const o=document.createElement("div");o.classList.add("menu"),o.id=e;const r=new Image;r.src=n;const i=document.createElement("h2");i.innerHTML=t;const c=document.createElement("p");return c.innerHTML=a,o.appendChild(r),o.appendChild(i),o.appendChild(c),o}var c=t(629);var d=t(379),s=t.n(d),p=t(795),l=t.n(p),m=t(569),u=t.n(m),h=t(565),g=t.n(h),f=t(216),v=t.n(f),x=t(589),b=t.n(x),C=t(426),y={};y.styleTagTransform=b(),y.setAttributes=g(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=v(),s()(C.Z,y),C.Z&&C.Z.locals&&C.Z.locals,document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");n.innerHTML="Nuovo Vesuvio";const t=document.createElement("h2");t.innerHTML="RISTORANTE",e.appendChild(n),e.appendChild(t);const a=document.createElement("h3");a.innerHTML="Home";const o=document.createElement("h3");o.innerHTML="Menu";const r=document.createElement("h3");r.innerHTML="Contact";const i=document.createElement("div");i.classList.add("tab"),i.id="Home";const c=document.createElement("div");c.classList.add("tab"),c.id="Menu";const d=document.createElement("div");return d.classList.add("tab"),d.id="Contact",i.appendChild(a),c.appendChild(o),d.appendChild(r),e.appendChild(i),e.appendChild(c),e.appendChild(d),e}()),document.getElementById("Home").addEventListener("click",(()=>{for(var e=document.getElementsByClassName("page");e[0];)e[0].parentNode.removeChild(e[0]);n()})),document.getElementById("Menu").addEventListener("click",(()=>{for(var e=document.getElementsByClassName("page");e[0];)e[0].parentNode.removeChild(e[0]);!function(){const e=a,n=o,t=r,c=document.createElement("div");c.classList.add("page");const d=document.createElement("div");d.classList.add("margin"),c.appendChild(d),c.appendChild(i("item1",e,"Pizza","Margherita, Parmigana, Pepperoni, BBQ Chicken, Prosciutto, Ham, Hawaiian, Meat Lovers")),c.appendChild(i("item2",n,"Pasta","Ricotta Pasta, Creamy Pasta with Spinach, Cherry Tomato Pasta Salad, Garlic Mushroom Pasta, Sun-Dried Tomato Pesto Pasta")),c.appendChild(i("item3",t,"Gabagool!","New Jersey's Finest")),document.getElementById("content").appendChild(c)}()})),document.getElementById("Contact").addEventListener("click",(()=>{for(var e=document.getElementsByClassName("page");e[0];)e[0].parentNode.removeChild(e[0]);!function(){const e=document.createElement("div");e.classList.add("page");const n=document.createElement("div");n.id="contact";const t=document.createElement("div");t.id="Contact_Us";const a=document.createElement("h1");a.innerHTML="Contact Us!",t.appendChild(a);const o=new Image;o.src=c;const r=document.createElement("div");r.classList.add("contact");const i=document.createElement("div");i.classList.add("info");const d=document.createElement("h2");d.innerHTML="Phone";const s=document.createElement("p");s.innerHTML="609-456-7844",i.appendChild(d),i.appendChild(s);const p=document.createElement("div");p.classList.add("info");const l=document.createElement("h2");l.innerHTML="Email";const m=document.createElement("p");m.innerHTML="NuovoVesuvo@gmail.com",p.appendChild(l),p.appendChild(m);const u=document.createElement("div");u.classList.add("info");const h=document.createElement("h2");h.innerHTML="Location";const g=document.createElement("p");g.innerHTML="123 Ridge Rd, Lyndhurst, NJ 07071",u.appendChild(h),u.appendChild(g),r.appendChild(i),r.appendChild(p),r.appendChild(u),n.appendChild(t),n.appendChild(o),n.appendChild(r),e.appendChild(n),document.getElementById("content").appendChild(e)}()})),n()})()})();