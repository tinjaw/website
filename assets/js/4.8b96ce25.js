(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{116:function(t,n,e){},14:function(t,n,e){var r=e(30)("wks"),i=e(28),o=e(15).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},15:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},16:function(t,n,e){var r=e(15),i=e(25),o=e(17),a=e(27),s=e(38),c=function(t,n,e){var l,u,f,p,v=t&c.F,h=t&c.G,d=t&c.S,g=t&c.P,_=t&c.B,m=h?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,x=h?i:i[n]||(i[n]={}),y=x.prototype||(x.prototype={});for(l in h&&(e=n),e)f=((u=!v&&m&&void 0!==m[l])?m:e)[l],p=_&&u?s(f,r):g&&"function"==typeof f?s(Function.call,f):f,m&&a(m,l,f,t&c.U),x[l]!=f&&o(x,l,p),g&&y[l]!=f&&(y[l]=f)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},17:function(t,n,e){var r=e(24),i=e(33);t.exports=e(21)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},18:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},19:function(t,n,e){var r=e(20);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},20:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},21:function(t,n,e){t.exports=!e(18)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},22:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},23:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},24:function(t,n,e){var r=e(19),i=e(41),o=e(37),a=Object.defineProperty;n.f=e(21)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},25:function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},26:function(t,n,e){var r=e(44),i=e(22);t.exports=function(t){return r(i(t))}},27:function(t,n,e){var r=e(15),i=e(17),o=e(23),a=e(28)("src"),s=e(59),c=(""+s).split("toString");e(25).inspectSource=function(t){return s.call(t)},(t.exports=function(t,n,e,s){var l="function"==typeof e;l&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(l&&(o(e,a)||i(e,a,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:s?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[a]||s.call(this)}))},279:function(t,n,e){"use strict";var r=e(116);e.n(r).a},28:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},29:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},290:function(t,n,e){"use strict";e.r(n);e(72),e(67),e(68);var r={en:"English",nl:"Nederlands",zh:"中文",vi:"Tiếng Việt",pl:"Polski",pt:"Português",ru:"Русский",jp:"日本語",fr:"Français",de:"Deutsch",el:"Ελληνικά",es:"Español",hi:"हिंदी",fa:"فارسی",ko:"한국어",ro:"Română",uk:"Українська",no:"Norwegian"},i={data:function(){return{}},props:{profile:Object,titleVisible:Boolean},computed:{workHtml:function(){var t=this.profile.work,n="";return t.orgUrl?(n+='<a href="'+t.orgUrl+'" target="_blank" rel="noopener noreferrer">',t.org?n+=t.org:this.minimizeLink(t.orgUrl),n+="</a>"):t.org&&(n+=t.org),t.role&&(n=n.length>0?t.role+" @ "+n:t.role),n},textDistance:function(){var t=this.profile.distanceInKm||0;return this.$root.useMiles?roundDistance(kmToMi(t))+" miles":roundDistance(t)+" km"},languageListHtml:function(){return this.profile.languages?"<ul><li>"+this.profile.languages.map((function(t,n){return r[t]})).join(" • ")+"</li></ul>":""},hasSocialLinks:function(){return this.profile.github||this.profile.twitter||this.profile.codepen||this.profile.linkedin}},methods:{minimizeLink:function(t){return t.replace(/^https?:\/\/(www\.)?/,"").replace(/\/$/,"").replace(/^mailto:/,"")},githubUrl:function(t,n){return n&&n.url?n.url:n&&-1!==n.indexOf("/")?"https://github.com/"+n.replace(/\/\*$/,""):"https://github.com/"+t+"/"+(n||"")}}},o=(e(279),e(0)),a=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"fluer md:flex pt-8"},[e("div",{staticClass:"avatar rounded-full p-6"},[t.profile.imageUrl?e("img",{staticClass:"rounded-full",attrs:{src:t.profile.imageUrl,alt:t.profile.name,width:"80",height:"80"}}):t.profile.github?e("img",{staticClass:"rounded-full",attrs:{src:"https://github.com/"+t.profile.github+".png",alt:t.profile.name,width:"80",height:"80"}}):t.profile.twitter?e("img",{staticClass:"rounded-full",attrs:{src:"https://avatars.io/twitter/"+t.profile.twitter,alt:t.profile.name,width:"80",height:"80"}}):t._e()]),t._v(" "),e("div",{staticClass:"profile bg-white team-font pt-6 text-sm leading-loose"},[e("h3",{staticClass:"text-lg",attrs:{"data-official-title":t.profile.title}},[t._v("\n      "+t._s(t.profile.name)+"\n      "),t.profile.title&&t.titleVisible?e("sup",{domProps:{innerHTML:t._s(t.profile.title)}}):t._e()]),t._v(" "),e("dl",[t.profile.reposOfficial?[e("dt",{staticClass:"team-core-font inline"},[t._v("Core focus")]),t._v(" "),e("dd",{staticClass:"inline-block"},[e("ul",t._l(t.profile.reposOfficial,(function(n){return e("li",{staticClass:"inline text-sm text-blue-500 pl-2 flex-initial"},[e("a",{attrs:{href:t.githubUrl("fluejs",n),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(n.name||n))])])})),0)])]:t._e(),t._v(" "),t.profile.github&&t.profile.reposPersonal?[e("dt",[t._v("Ecosystem")]),t._v(" "),e("dd",[e("ul",t._l(t.profile.reposPersonal,(function(n){return e("li",[e("a",{attrs:{href:t.githubUrl(t.profile.github,n),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(n.name||n))])])})),0)])]:t._e(),t._v(" "),t.profile.work?[t._m(0),t._v(" "),e("img",{staticClass:"inline w-4 h-auto py-1",attrs:{src:"https://image.flaticon.com/icons/png/512/86/86081.png"}}),t._v(" "),e("dd",{staticClass:"inline pl-2",domProps:{innerHTML:t._s(t.workHtml)}})]:t._e(),t._v(" "),t.profile.distanceInKm?e("span",{staticClass:"distance"},[t._m(1),t._v(" "),e("dd",[t._v("\n          About\n          "),t.profile.distanceInKm<=150?e("span",{staticClass:"user-match",attrs:{title:t.profile.name+" is close enough to commute to your location."}},[t._v(t._s(t.textDistance)+" away")]):[t._v(t._s(t.textDistance)+" away")],t._v("\n          in "+t._s(t.profile.city)+"\n        ")],2)]):t.profile.city?[t._m(2),t._v(" "),e("img",{staticClass:"inline w-4 h-auto pb-1",attrs:{src:"https://image.flaticon.com/icons/png/512/67/67347.png"}}),t._v(" "),e("dd",{staticClass:"inline pl-2"},[t._v("\n          "+t._s(t.profile.city)+"\n        ")])]:t._e(),t._v(" "),t.profile.languages?[t._m(3),t._v(" "),e("div",{staticClass:"container inline-flex py-1"},[e("img",{staticClass:"w-4 h-auto py-1",attrs:{src:"https://image.flaticon.com/icons/png/512/115/115809.png"}}),t._v(" "),e("dd",{staticClass:"language-list pl-2",domProps:{innerHTML:t._s(t.languageListHtml)}})])]:t._e(),t._v(" "),t.profile.links?[t._m(4),t._v(" "),e("dd",{staticClass:"inline-flex pb-2"},[e("img",{staticClass:"flex-1 w-4 h-auto py-1",attrs:{src:"https://image.flaticon.com/icons/png/512/126/126481.png"}}),t._v(" "),e("ul",t._l(t.profile.links,(function(n){return e("li",{staticClass:"flex-1 pl-2"},[e("a",{attrs:{href:n,target:"_blank"}},[t._v(t._s(t.minimizeLink(n)))])])})),0)])]:t._e(),t._v(" "),t.hasSocialLinks?e("footer",{staticClass:"social"},[e("div",{staticClass:"inline-flex"},[t.profile.github?e("a",{staticClass:"github flex-1",attrs:{href:t.githubUrl(t.profile.github)}},[e("img",{staticClass:"w-6 h-auto pt-1",attrs:{src:"https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png"}}),t._v(" "),e("i",{staticClass:"fa fa-github"}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Github")])]):t._e(),t._v(" "),t.profile.twitter?e("a",{staticClass:"twitter flex-1 pl-2",attrs:{href:"https://twitter.com/"+t.profile.twitter}},[e("img",{staticClass:"w-6 h-auto pt-1",attrs:{src:"https://www.stickpng.com/assets/images/58e9196deb97430e819064f6.png"}}),t._v(" "),e("i",{staticClass:"fa fa-twitter"}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("Twitter")])]):t._e(),t._v(" "),t.profile.codepen?e("a",{staticClass:"codepen flex-1 pl-2",attrs:{href:"https://codepen.io/"+t.profile.codepen}},[e("img",{staticClass:"w-6 h-auto pt-1",attrs:{src:"https://cdn0.iconfinder.com/data/icons/social-media-2091/100/social-32-512.png"}}),t._v(" "),e("i",{staticClass:"fa fa-codepen"}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("CodePen")])]):t._e(),t._v(" "),t.profile.linkedin?e("a",{staticClass:"linkedin flex-1 pl-2",attrs:{href:"https://www.linkedin.com/in/"+t.profile.linkedin}},[e("img",{staticClass:"w-6 h-auto pt-1",attrs:{src:"https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/linkedin-512.png"}}),t._v(" "),e("i",{staticClass:"fa fa-linkedin"}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("LinkedIn")])]):t._e()])]):t._e()],2)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("dt",[n("i",{staticClass:"fa fa-briefcase"}),this._v(" "),n("span",{staticClass:"sr-only"},[this._v("Work")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("dt",[n("i",{staticClass:"fa fa-map-marker"}),this._v(" "),n("span",{staticClass:"sr-only"},[this._v("Distance")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("dt",[n("i",{staticClass:"fa fa-map-marker"}),this._v(" "),n("span",{staticClass:"sr-only"},[this._v("City")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("dt",[n("i",{staticClass:"fa fa-globe"}),this._v(" "),n("span",{staticClass:"sr-only"},[this._v("Languages")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("dt",[n("i",{staticClass:"fa fa-link"}),this._v(" "),n("span",{staticClass:"sr-only"},[this._v("Links")])])}],!1,null,"b0d59b86",null);n.default=a.exports},30:function(t,n,e){var r=e(25),i=e(15),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(35)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},31:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},32:function(t,n,e){var r=e(29),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},33:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},34:function(t,n,e){var r=e(22);t.exports=function(t){return Object(r(t))}},35:function(t,n){t.exports=!1},37:function(t,n,e){var r=e(20);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},38:function(t,n,e){var r=e(50);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},40:function(t,n,e){"use strict";var r=e(18);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},41:function(t,n,e){t.exports=!e(21)&&!e(18)((function(){return 7!=Object.defineProperty(e(42)("div"),"a",{get:function(){return 7}}).a}))},42:function(t,n,e){var r=e(20),i=e(15).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},44:function(t,n,e){var r=e(31);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},45:function(t,n,e){var r=e(26),i=e(32),o=e(61);t.exports=function(t){return function(n,e,a){var s,c=r(n),l=i(c.length),u=o(a,l);if(t&&e!=e){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===e)return t||u||0;return!t&&-1}}},48:function(t,n,e){var r=e(38),i=e(44),o=e(34),a=e(32),s=e(85);t.exports=function(t,n){var e=1==t,c=2==t,l=3==t,u=4==t,f=6==t,p=5==t||f,v=n||s;return function(n,s,h){for(var d,g,_=o(n),m=i(_),x=r(s,h,3),y=a(m.length),b=0,w=e?v(n,y):c?v(n,0):void 0;y>b;b++)if((p||b in m)&&(g=x(d=m[b],b,_),t))if(e)w[b]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return b;case 2:w.push(d)}else if(u)return!1;return f?-1:l||u?u:w}}},50:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},52:function(t,n,e){var r=e(31);t.exports=Array.isArray||function(t){return"Array"==r(t)}},53:function(t,n,e){"use strict";var r,i,o=e(71),a=RegExp.prototype.exec,s=String.prototype.replace,c=a,l=(r=/a/,i=/b*/g,a.call(r,"a"),a.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),u=void 0!==/()??/.exec("")[1];(l||u)&&(c=function(t){var n,e,r,i,c=this;return u&&(e=new RegExp("^"+c.source+"$(?!\\s)",o.call(c))),l&&(n=c.lastIndex),r=a.call(c,t),l&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),u&&r&&r.length>1&&s.call(r[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=c},59:function(t,n,e){t.exports=e(30)("native-function-to-string",Function.toString)},61:function(t,n,e){var r=e(29),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},62:function(t,n,e){"use strict";var r=e(92)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},63:function(t,n,e){"use strict";var r=e(93),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},64:function(t,n,e){"use strict";e(94);var r=e(27),i=e(17),o=e(18),a=e(22),s=e(14),c=e(53),l=s("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=s(t),v=!o((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),h=v?!o((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[l]=function(){return e}),e[p](""),!n})):void 0;if(!v||!h||"replace"===t&&!u||"split"===t&&!f){var d=/./[p],g=e(a,p,""[t],(function(t,n,e,r,i){return n.exec===c?v&&!i?{done:!0,value:d.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),_=g[0],m=g[1];r(String.prototype,t,_),i(RegExp.prototype,p,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}}},67:function(t,n,e){"use strict";var r=e(19),i=e(34),o=e(32),a=e(29),s=e(62),c=e(63),l=Math.max,u=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;e(64)("replace",2,(function(t,n,e,h){return[function(r,i){var o=t(this),a=null==r?void 0:r[n];return void 0!==a?a.call(r,o,i):e.call(String(o),r,i)},function(t,n){var i=h(e,t,this,n);if(i.done)return i.value;var f=r(t),p=String(this),v="function"==typeof n;v||(n=String(n));var g=f.global;if(g){var _=f.unicode;f.lastIndex=0}for(var m=[];;){var x=c(f,p);if(null===x)break;if(m.push(x),!g)break;""===String(x[0])&&(f.lastIndex=s(p,o(f.lastIndex),_))}for(var y,b="",w=0,C=0;C<m.length;C++){x=m[C];for(var k=String(x[0]),S=l(u(a(x.index),p.length),0),E=[],j=1;j<x.length;j++)E.push(void 0===(y=x[j])?y:String(y));var O=x.groups;if(v){var M=[k].concat(E,S,p);void 0!==O&&M.push(O);var P=String(n.apply(void 0,M))}else P=d(k,p,S,E,O,n);S>=w&&(b+=p.slice(w,S)+P,w=S+k.length)}return b+p.slice(w)}];function d(t,n,r,o,a,s){var c=r+t.length,l=o.length,u=v;return void 0!==a&&(a=i(a),u=p),e.call(s,u,(function(e,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":s=a[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var p=f(u/10);return 0===p?e:p<=l?void 0===o[p-1]?i.charAt(1):o[p-1]+i.charAt(1):e}s=o[u-1]}return void 0===s?"":s}))}}))},68:function(t,n,e){"use strict";var r=e(16),i=e(48)(1);r(r.P+r.F*!e(40)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},71:function(t,n,e){"use strict";var r=e(19);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},72:function(t,n,e){"use strict";var r=e(16),i=e(45)(!1),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!e(40)(o)),"Array",{indexOf:function(t){return a?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},85:function(t,n,e){var r=e(86);t.exports=function(t,n){return new(r(t))(n)}},86:function(t,n,e){var r=e(20),i=e(52),o=e(14)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},92:function(t,n,e){var r=e(29),i=e(22);t.exports=function(t){return function(n,e){var o,a,s=String(i(n)),c=r(e),l=s.length;return c<0||c>=l?t?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536}}},93:function(t,n,e){var r=e(31),i=e(14)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},94:function(t,n,e){"use strict";var r=e(53);e(16)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})}}]);