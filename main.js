'use strict';
const Sortable = (function () {
  var module = { exports: {} }; var exports = module.exports;
/*! Sortable 1.15.6 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function e(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function I(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach(function(t){var e,n;e=o,t=i[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(i,t))})}return o}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o=function(t,e){if(null==t)return{};for(var n,o={},i=Object.keys(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);return o}function r(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var y=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),w=t(/Edge/i),s=t(/firefox/i),u=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),c=t(/iP(ad|od|hone)/i),n=t(/chrome/i)&&t(/android/i),d={capture:!1,passive:!1};function h(t,e,n){t.addEventListener(e,n,!y&&d)}function p(t,e,n){t.removeEventListener(e,n,!y&&d)}function f(t,e){if(e&&(">"===e[0]&&(e=e.substring(1)),t))try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return}}function g(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function P(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"!==e[0]||t.parentNode===n)&&f(t,e)||o&&t===n)return t}while(t!==n&&(t=g(t)))}return null}var m,v=/\s+/g;function k(t,e,n){var o;t&&e&&(t.classList?t.classList[n?"add":"remove"](e):(o=(" "+t.className+" ").replace(v," ").replace(" "+e+" "," "),t.className=(o+(n?" "+e:"")).replace(v," ")))}function R(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];o[e=!(e in o||-1!==e.indexOf("webkit"))?"-webkit-"+e:e]=n+("string"==typeof n?"":"px")}}function b(t,e){var n="";if("string"==typeof t)n=t;else do{var o=R(t,"transform")}while(o&&"none"!==o&&(n=o+" "+n),!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function D(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function O(){var t=document.scrollingElement;return t||document.documentElement}function X(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d=t!==window&&t.parentNode&&t!==O()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth);if((e||n)&&t!==window&&(i=i||t.parentNode,!y))do{if(i&&i.getBoundingClientRect&&("none"!==R(i,"transform")||n&&"static"!==R(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(R(i,"border-top-width")),l-=h.left+parseInt(R(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);return o&&t!==window&&(o=(e=b(i||t))&&e.a,t=e&&e.d,e&&(s=(a/=t)+(u/=t),c=(l/=o)+(d/=o))),{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function Y(t,e,n){for(var o=M(t,!0),i=X(t)[e];o;){var r=X(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===O())break;o=M(o,!1)}return!1}function B(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==jt.ghost&&(o||a[r]!==jt.dragged)&&P(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function F(t,e){for(var n=t.lastElementChild;n&&(n===jt.ghost||"none"===R(n,"display")||e&&!f(n,e));)n=n.previousElementSibling;return n||null}function j(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===jt.clone||e&&!f(t,e)||n++;return n}function E(t){var e=0,n=0,o=O();if(t)do{var i=b(t),r=i.a,i=i.d}while(e+=t.scrollLeft*r,n+=t.scrollTop*i,t!==o&&(t=t.parentNode));return[e,n]}function M(t,e){if(!t||!t.getBoundingClientRect)return O();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=R(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return O();if(o||e)return n;o=!0}}}while(n=n.parentNode);return O()}function S(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function _(e,n){return function(){var t;m||(1===(t=arguments).length?e.call(this,t[0]):e.apply(this,t),m=setTimeout(function(){m=void 0},n))}}function H(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function C(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function T(t,e){R(t,"position","absolute"),R(t,"top",e.top),R(t,"left",e.left),R(t,"width",e.width),R(t,"height",e.height)}function x(t){R(t,"position",""),R(t,"top",""),R(t,"left",""),R(t,"width",""),R(t,"height","")}function L(n,o,i){var r={};return Array.from(n.children).forEach(function(t){var e;P(t,o.draggable,n,!1)&&!t.animated&&t!==i&&(e=X(t),r.left=Math.min(null!==(t=r.left)&&void 0!==t?t:1/0,e.left),r.top=Math.min(null!==(t=r.top)&&void 0!==t?t:1/0,e.top),r.right=Math.max(null!==(t=r.right)&&void 0!==t?t:-1/0,e.right),r.bottom=Math.max(null!==(t=r.bottom)&&void 0!==t?t:-1/0,e.bottom))}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var K="Sortable"+(new Date).getTime();function A(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){var e,n;"none"!==R(t,"display")&&t!==jt.ghost&&(o.push({target:t,rect:X(t)}),e=I({},o[o.length-1].rect),!t.thisAnimationDuration||(n=b(t,!0))&&(e.top-=n.f,e.left-=n.e),t.fromRect=e)})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=X(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=b(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&S(r,i)&&!S(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(t=l,s=r,r=a,a=c.options,e=Math.sqrt(Math.pow(s.top-t.top,2)+Math.pow(s.left-t.left,2))/Math.sqrt(Math.pow(s.top-r.top,2)+Math.pow(s.left-r.left,2))*a.animation),S(i,o)||(n.prevFromRect=o,n.prevToRect=i,e=e||c.options.animation,c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){var i,r;o&&(R(t,"transition",""),R(t,"transform",""),i=(r=b(this.el))&&r.a,r=r&&r.d,i=(e.left-n.left)/(i||1),r=(e.top-n.top)/(r||1),t.animatingX=!!i,t.animatingY=!!r,R(t,"transform","translate3d("+i+"px,"+r+"px,0)"),this.forRepaintDummy=t.offsetWidth,R(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),R(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){R(t,"transition",""),R(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o))}}}var N=[],W={initializeByDefault:!0},z={mount:function(e){for(var t in W)!W.hasOwnProperty(t)||t in e||(e[t]=W[t]);N.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),N.push(e)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";N.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](I({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](I({sortable:n},o)))})},initializePlugins:function(n,o,i,t){for(var e in N.forEach(function(t){var e=t.pluginName;(n.options[e]||t.initializeByDefault)&&((t=new t(n,o,n.options)).sortable=n,t.options=n.options,n[e]=t,a(i,t.defaults))}),n.options){var r;n.options.hasOwnProperty(e)&&(void 0!==(r=this.modifyOption(n,e,n.options[e]))&&(n.options[e]=r))}},getEventProperties:function(e,n){var o={};return N.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return N.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function G(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,p=t.putSortable,f=t.extraEventProperties;if(e=e||n&&n[K]){var g,m=e.options,t="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||y||w?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=p?p.lastPutMode:void 0;var v,b=I(I({},f),z.getEventProperties(o,e));for(v in b)g[v]=b[v];n&&n.dispatchEvent(g),m[t]&&m[t].call(e,g)}}function U(t,e){var n=(o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).evt,o=i(o,q);z.pluginEvent.bind(jt)(t,e,I({dragEl:Z,parentEl:$,ghostEl:Q,rootEl:J,nextEl:tt,lastDownEl:et,cloneEl:nt,cloneHidden:ot,dragStarted:mt,putSortable:ct,activeSortable:jt.active,originalEvent:n,oldIndex:it,oldDraggableIndex:at,newIndex:rt,newDraggableIndex:lt,hideGhostForTarget:Xt,unhideGhostForTarget:Yt,cloneNowHidden:function(){ot=!0},cloneNowShown:function(){ot=!1},dispatchSortableEvent:function(t){V({sortable:e,name:t,originalEvent:n})}},o))}var q=["evt"];function V(t){G(I({putSortable:ct,cloneEl:nt,targetEl:Z,rootEl:J,oldIndex:it,oldDraggableIndex:at,newIndex:rt,newDraggableIndex:lt},t))}var Z,$,Q,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,pt,ft,gt,mt,vt,bt,yt,wt,Dt=!1,Et=!1,St=[],_t=!1,Ct=!1,Tt=[],xt=!1,Ot=[],Mt="undefined"!=typeof document,At=c,Nt=w||y?"cssFloat":"float",It=Mt&&!n&&!c&&"draggable"in document.createElement("div"),Pt=function(){if(Mt){if(y)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),kt=function(t,e){var n=R(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=B(t,0,e),r=B(t,1,e),a=i&&R(i),l=r&&R(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+X(i).width,t=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+X(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){e="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==e?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Nt]||r&&"none"===n[Nt]&&o<s+t)?"vertical":"horizontal"},Rt=function(t){function l(r,a){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==r&&(a||i))return!0;if(null==r||!1===r)return!1;if(a&&"clone"===r)return r;if("function"==typeof r)return l(r(t,e,n,o),a)(t,e,n,o);e=(a?t:e).options.group.name;return!0===r||"string"==typeof r&&r===e||r.join&&-1<r.indexOf(e)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=l(n.pull,!0),e.checkPut=l(n.put),e.revertClone=n.revertClone,t.group=e},Xt=function(){!Pt&&Q&&R(Q,"display","none")},Yt=function(){!Pt&&Q&&R(Q,"display","")};Mt&&!n&&document.addEventListener("click",function(t){if(Et)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),Et=!1},!0);function Bt(t){if(Z){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,St.some(function(t){var e=t[K].options.emptyInsertThreshold;if(e&&!F(t)){var n=X(t),o=i>=n.left-e&&i<=n.right+e,e=r>=n.top-e&&r<=n.bottom+e;return o&&e?a=t:void 0}}),a);if(e){var n,o={};for(n in t)t.hasOwnProperty(n)&&(o[n]=t[n]);o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[K]._onDragOver(o)}}var i,r,a}function Ft(t){Z&&Z.parentNode[K]._isOutsideThisEl(t.target)}function jt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[K]=this;var n,o,i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return kt(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==jt.supportPointer&&"PointerEvent"in window&&(!u||c),emptyInsertThreshold:5};for(n in z.initializePlugins(this,t,i),i)n in e||(e[n]=i[n]);for(o in Rt(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&It,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?h(t,"pointerdown",this._onTapStart):(h(t,"mousedown",this._onTapStart),h(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(h(t,"dragover",this),h(t,"dragenter",this)),St.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,A())}function Ht(t,e,n,o,i,r,a,l){var s,c,u=t[K],d=u.options.onMove;return!window.CustomEvent||y||w?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||X(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),c=d?d.call(u,s,a):c}function Lt(t){t.draggable=!1}function Kt(){xt=!1}function Wt(t){return setTimeout(t,0)}function zt(t){return clearTimeout(t)}jt.prototype={constructor:jt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(vt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Z):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(!function(t){Ot.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Ot.push(o)}}(o),!Z&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!u||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=P(l,t.draggable,o,!1))&&l.animated||et===l)){if(it=j(l),at=j(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return V({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),U("filter",n,{evt:e}),void(i&&e.preventDefault())}else if(c=c&&c.split(",").some(function(t){if(t=P(s,t.trim(),o,!1))return V({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),U("filter",n,{evt:e}),!0}))return void(i&&e.preventDefault());t.handle&&!P(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;n&&!Z&&n.parentNode===r&&(o=X(n),J=r,$=(Z=n).parentNode,tt=Z.nextSibling,et=n,st=a.group,ut={target:jt.dragged=Z,clientX:(e||t).clientX,clientY:(e||t).clientY},ft=ut.clientX-o.left,gt=ut.clientY-o.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,Z.style["will-change"]="all",o=function(){U("delayEnded",i,{evt:t}),jt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!s&&i.nativeDraggable&&(Z.draggable=!0),i._triggerDragStart(t,e),V({sortable:i,name:"choose",originalEvent:t}),k(Z,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){D(Z,t.trim(),Lt)}),h(l,"dragover",Bt),h(l,"mousemove",Bt),h(l,"touchmove",Bt),a.supportPointer?(h(l,"pointerup",i._onDrop),this.nativeDraggable||h(l,"pointercancel",i._onDrop)):(h(l,"mouseup",i._onDrop),h(l,"touchend",i._onDrop),h(l,"touchcancel",i._onDrop)),s&&this.nativeDraggable&&(this.options.touchStartThreshold=4,Z.draggable=!0),U("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(w||y)?o():jt.eventCanceled?this._onDrop():(a.supportPointer?(h(l,"pointerup",i._disableDelayedDrag),h(l,"pointercancel",i._disableDelayedDrag)):(h(l,"mouseup",i._disableDelayedDrag),h(l,"touchend",i._disableDelayedDrag),h(l,"touchcancel",i._disableDelayedDrag)),h(l,"mousemove",i._delayedDragTouchMoveHandler),h(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&h(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)))},_delayedDragTouchMoveHandler:function(t){t=t.touches?t.touches[0]:t;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){Z&&Lt(Z),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;p(t,"mouseup",this._disableDelayedDrag),p(t,"touchend",this._disableDelayedDrag),p(t,"touchcancel",this._disableDelayedDrag),p(t,"pointerup",this._disableDelayedDrag),p(t,"pointercancel",this._disableDelayedDrag),p(t,"mousemove",this._delayedDragTouchMoveHandler),p(t,"touchmove",this._delayedDragTouchMoveHandler),p(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?h(document,"pointermove",this._onTouchMove):h(document,e?"touchmove":"mousemove",this._onTouchMove):(h(Z,"dragend",this),h(J,"dragstart",this._onDragStart));try{document.selection?Wt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){var n;Dt=!1,J&&Z?(U("dragStarted",this,{evt:e}),this.nativeDraggable&&h(document,"dragover",Ft),n=this.options,t||k(Z,n.dragClass,!1),k(Z,n.ghostClass,!0),jt.active=this,t&&this._appendGhost(),V({sortable:this,name:"start",originalEvent:e})):this._nulling()},_emulateDragOver:function(){if(dt){this._lastX=dt.clientX,this._lastY=dt.clientY,Xt();for(var t=document.elementFromPoint(dt.clientX,dt.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(dt.clientX,dt.clientY))!==e;)e=t;if(Z.parentNode[K]._isOutsideThisEl(t),e)do{if(e[K])if(e[K]._onDragOver({clientX:dt.clientX,clientY:dt.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}while(e=g(t=e));Yt()}},_onTouchMove:function(t){if(ut){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Q&&b(Q,!0),a=Q&&r&&r.a,l=Q&&r&&r.d,e=At&&wt&&E(wt),a=(i.clientX-ut.clientX+o.x)/(a||1)+(e?e[0]-Tt[0]:0)/(a||1),l=(i.clientY-ut.clientY+o.y)/(l||1)+(e?e[1]-Tt[1]:0)/(l||1);if(!jt.active&&!Dt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}Q&&(r?(r.e+=a-(ht||0),r.f+=l-(pt||0)):r={a:1,b:0,c:0,d:1,e:a,f:l},r="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")"),R(Q,"webkitTransform",r),R(Q,"mozTransform",r),R(Q,"msTransform",r),R(Q,"transform",r),ht=a,pt=l,dt=i),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Q){var t=this.options.fallbackOnBody?document.body:J,e=X(Z,!0,At,!0,t),n=this.options;if(At){for(wt=t;"static"===R(wt,"position")&&"none"===R(wt,"transform")&&wt!==document;)wt=wt.parentNode;wt!==document.body&&wt!==document.documentElement?(wt===document&&(wt=O()),e.top+=wt.scrollTop,e.left+=wt.scrollLeft):wt=O(),Tt=E(wt)}k(Q=Z.cloneNode(!0),n.ghostClass,!1),k(Q,n.fallbackClass,!0),k(Q,n.dragClass,!0),R(Q,"transition",""),R(Q,"transform",""),R(Q,"box-sizing","border-box"),R(Q,"margin",0),R(Q,"top",e.top),R(Q,"left",e.left),R(Q,"width",e.width),R(Q,"height",e.height),R(Q,"opacity","0.8"),R(Q,"position",At?"absolute":"fixed"),R(Q,"zIndex","100000"),R(Q,"pointerEvents","none"),jt.ghost=Q,t.appendChild(Q),R(Q,"transform-origin",ft/parseInt(Q.style.width)*100+"% "+gt/parseInt(Q.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;U("dragStart",this,{evt:t}),jt.eventCanceled?this._onDrop():(U("setupClone",this),jt.eventCanceled||((nt=C(Z)).removeAttribute("id"),nt.draggable=!1,nt.style["will-change"]="",this._hideClone(),k(nt,this.options.chosenClass,!1),jt.clone=nt),n.cloneId=Wt(function(){U("clone",n),jt.eventCanceled||(n.options.removeCloneOnHide||J.insertBefore(nt,Z),n._hideClone(),V({sortable:n,name:"clone"}))}),e||k(Z,i.dragClass,!0),e?(Et=!0,n._loopId=setInterval(n._emulateDragOver,50)):(p(document,"mouseup",n._onDrop),p(document,"touchend",n._onDrop),p(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,Z)),h(document,"drop",n),R(Z,"transform","translateZ(0)")),Dt=!0,n._dragStartId=Wt(n._dragStarted.bind(n,e,t)),h(document,"selectstart",n),mt=!0,window.getSelection().removeAllRanges(),u&&R(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,t,e,a=this.el,l=n.target,s=this.options,c=s.group,u=jt.active,d=st===c,h=s.sort,p=ct||u,f=this,g=!1;if(!xt){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),l=P(l,s.draggable,a,!0),O("dragOver"),jt.eventCanceled)return g;if(Z.contains(n.target)||l.animated&&l.animatingX&&l.animatingY||f._ignoreWhileAnimating===l)return A(!1);if(Et=!1,u&&!s.disabled&&(d?h||(i=$!==J):ct===this||(this.lastPutMode=st.checkPull(this,u,Z,n))&&c.checkPut(this,u,Z,n))){if(r="vertical"===this._getDirection(n,l),o=X(Z),O("dragOverValid"),jt.eventCanceled)return g;if(i)return $=J,M(),this._hideClone(),O("revert"),jt.eventCanceled||(tt?J.insertBefore(Z,tt):J.appendChild(Z)),A(!0);var m=F(a,s.draggable);if(m&&(S=n,c=r,x=X(F((E=this).el,E.options.draggable)),E=L(E.el,E.options,Q),!(c?S.clientX>E.right+10||S.clientY>x.bottom&&S.clientX>x.left:S.clientY>E.bottom+10||S.clientX>x.right&&S.clientY>x.top)||m.animated)){if(m&&(t=n,e=r,C=X(B((_=this).el,0,_.options,!0)),_=L(_.el,_.options,Q),e?t.clientX<_.left-10||t.clientY<C.top&&t.clientX<C.right:t.clientY<_.top-10||t.clientY<C.bottom&&t.clientX<C.left)){var v=B(a,0,s,!0);if(v===Z)return A(!1);if(D=X(l=v),!1!==Ht(J,a,Z,o,l,D,n,!1))return M(),a.insertBefore(Z,v),$=a,N(),A(!0)}else if(l.parentNode===a){var b,y,w,D=X(l),E=Z.parentNode!==a,S=(S=Z.animated&&Z.toRect||o,x=l.animated&&l.toRect||D,_=(e=r)?S.left:S.top,t=e?S.right:S.bottom,C=e?S.width:S.height,v=e?x.left:x.top,S=e?x.right:x.bottom,x=e?x.width:x.height,!(_===v||t===S||_+C/2===v+x/2)),_=r?"top":"left",C=Y(l,"top","top")||Y(Z,"top","top"),v=C?C.scrollTop:void 0;if(vt!==l&&(y=D[_],_t=!1,Ct=!S&&s.invertSwap||E),0!==(b=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,t=o?n.top:n.left,o=o?n.bottom:n.right,n=!1;if(!a)if(l&&yt<c*i){if(_t=!_t&&(1===bt?t+c*r/2<s:s<o-c*r/2)?!0:_t)n=!0;else if(1===bt?s<t+yt:o-yt<s)return-bt}else if(t+c*(1-i)/2<s&&s<o-c*(1-i)/2)return function(t){return j(Z)<j(t)?1:-1}(e);if((n=n||a)&&(s<t+c*r/2||o-c*r/2<s))return t+c/2<s?1:-1;return 0}(n,l,D,r,S?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Ct,vt===l)))for(var T=j(Z);(w=$.children[T-=b])&&("none"===R(w,"display")||w===Q););if(0===b||w===l)return A(!1);bt=b;var x=(vt=l).nextElementSibling,E=!1,S=Ht(J,a,Z,o,l,D,n,E=1===b);if(!1!==S)return 1!==S&&-1!==S||(E=1===S),xt=!0,setTimeout(Kt,30),M(),E&&!x?a.appendChild(Z):l.parentNode.insertBefore(Z,E?x:l),C&&H(C,0,v-C.scrollTop),$=Z.parentNode,void 0===y||Ct||(yt=Math.abs(y-X(l)[_])),N(),A(!0)}}else{if(m===Z)return A(!1);if((l=m&&a===n.target?m:l)&&(D=X(l)),!1!==Ht(J,a,Z,o,l,D,n,!!l))return M(),m&&m.nextSibling?a.insertBefore(Z,m.nextSibling):a.appendChild(Z),$=a,N(),A(!0)}if(a.contains(Z))return A(!1)}return!1}function O(t,e){U(t,f,I({evt:n,isOwner:d,axis:r?"vertical":"horizontal",revert:i,dragRect:o,targetRect:D,canSort:h,fromSortable:p,target:l,completed:A,onMove:function(t,e){return Ht(J,a,Z,o,t,X(t),n,e)},changed:N},e))}function M(){O("dragOverAnimationCapture"),f.captureAnimationState(),f!==p&&p.captureAnimationState()}function A(t){return O("dragOverCompleted",{insertion:t}),t&&(d?u._hideClone():u._showClone(f),f!==p&&(k(Z,(ct||u).options.ghostClass,!1),k(Z,s.ghostClass,!0)),ct!==f&&f!==jt.active?ct=f:f===jt.active&&ct&&(ct=null),p===f&&(f._ignoreWhileAnimating=l),f.animateAll(function(){O("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(l===Z&&!Z.animated||l===a&&!l.animated)&&(vt=null),s.dragoverBubble||n.rootEl||l===document||(Z.parentNode[K]._isOutsideThisEl(n.target),t||Bt(n)),!s.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),g=!0}function N(){rt=j(Z),lt=j(Z,s.draggable),V({sortable:f,name:"change",toEl:a,newIndex:rt,newDraggableIndex:lt,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){p(document,"mousemove",this._onTouchMove),p(document,"touchmove",this._onTouchMove),p(document,"pointermove",this._onTouchMove),p(document,"dragover",Bt),p(document,"mousemove",Bt),p(document,"touchmove",Bt)},_offUpEvents:function(){var t=this.el.ownerDocument;p(t,"mouseup",this._onDrop),p(t,"touchend",this._onDrop),p(t,"pointerup",this._onDrop),p(t,"pointercancel",this._onDrop),p(t,"touchcancel",this._onDrop),p(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;rt=j(Z),lt=j(Z,n.draggable),U("drop",this,{evt:t}),$=Z&&Z.parentNode,rt=j(Z),lt=j(Z,n.draggable),jt.eventCanceled||(_t=Ct=Dt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),zt(this.cloneId),zt(this._dragStartId),this.nativeDraggable&&(p(document,"drop",this),p(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),u&&R(document.body,"user-select",""),R(Z,"transform",""),t&&(mt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),Q&&Q.parentNode&&Q.parentNode.removeChild(Q),(J===$||ct&&"clone"!==ct.lastPutMode)&&nt&&nt.parentNode&&nt.parentNode.removeChild(nt),Z&&(this.nativeDraggable&&p(Z,"dragend",this),Lt(Z),Z.style["will-change"]="",mt&&!Dt&&k(Z,(ct||this).options.ghostClass,!1),k(Z,this.options.chosenClass,!1),V({sortable:this,name:"unchoose",toEl:$,newIndex:null,newDraggableIndex:null,originalEvent:t}),J!==$?(0<=rt&&(V({rootEl:$,name:"add",toEl:$,fromEl:J,originalEvent:t}),V({sortable:this,name:"remove",toEl:$,originalEvent:t}),V({rootEl:$,name:"sort",toEl:$,fromEl:J,originalEvent:t}),V({sortable:this,name:"sort",toEl:$,originalEvent:t})),ct&&ct.save()):rt!==it&&0<=rt&&(V({sortable:this,name:"update",toEl:$,originalEvent:t}),V({sortable:this,name:"sort",toEl:$,originalEvent:t})),jt.active&&(null!=rt&&-1!==rt||(rt=it,lt=at),V({sortable:this,name:"end",toEl:$,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){U("nulling",this),J=Z=$=Q=tt=nt=et=ot=ut=dt=mt=rt=lt=it=at=vt=bt=ct=st=jt.dragged=jt.ghost=jt.clone=jt.active=null,Ot.forEach(function(t){t.checked=!0}),Ot.length=ht=pt=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":Z&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)P(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||function(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;for(;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach(function(t,e){e=o.children[e];P(e,this.options.draggable,o,!1)&&(n[t]=e)},this),e&&this.captureAnimationState(),t.forEach(function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return P(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=z.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Rt(n)},destroy:function(){U("destroy",this);var t=this.el;t[K]=null,p(t,"mousedown",this._onTapStart),p(t,"touchstart",this._onTapStart),p(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(p(t,"dragover",this),p(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),St.splice(St.indexOf(this.el),1),this.el=t=null},_hideClone:function(){ot||(U("hideClone",this),jt.eventCanceled||(R(nt,"display","none"),this.options.removeCloneOnHide&&nt.parentNode&&nt.parentNode.removeChild(nt),ot=!0))},_showClone:function(t){"clone"===t.lastPutMode?ot&&(U("showClone",this),jt.eventCanceled||(Z.parentNode!=J||this.options.group.revertClone?tt?J.insertBefore(nt,tt):J.appendChild(nt):J.insertBefore(nt,Z),this.options.group.revertClone&&this.animate(Z,nt),R(nt,"display",""),ot=!1)):this._hideClone()}},Mt&&h(document,"touchmove",function(t){(jt.active||Dt)&&t.cancelable&&t.preventDefault()}),jt.utils={on:h,off:p,css:R,find:D,is:function(t,e){return!!P(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:_,closest:P,toggleClass:k,clone:C,index:j,nextTick:Wt,cancelNextTick:zt,detectDirection:kt,getChild:B,expando:K},jt.get=function(t){return t[K]},jt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];(e=e[0].constructor===Array?e[0]:e).forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(jt.utils=I(I({},jt.utils),t.utils)),z.mount(t)})},jt.create=function(t,e){return new jt(t,e)};var Gt,Ut,qt,Vt,Zt,$t,Qt=[],Jt=!(jt.version="1.15.6");function te(){Qt.forEach(function(t){clearInterval(t.pid)}),Qt=[]}function ee(){clearInterval($t)}var ne,oe=_(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=O(),u=!1;Ut!==e&&(Ut=e,te(),Gt=t.scroll,i=t.scrollFn,!0===Gt&&(Gt=M(e,!0)));var d=0,h=Gt;do{var p=h,f=X(p),g=f.top,m=f.bottom,v=f.left,b=f.right,y=f.width,w=f.height,D=void 0,E=void 0,S=p.scrollWidth,_=p.scrollHeight,C=R(p),T=p.scrollLeft,f=p.scrollTop,E=p===c?(D=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(D=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY)),T=D&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(v-r)<=l&&!!T),f=E&&(Math.abs(m-a)<=l&&f+w<_)-(Math.abs(g-a)<=l&&!!f);if(!Qt[d])for(var x=0;x<=d;x++)Qt[x]||(Qt[x]={});Qt[d].vx==T&&Qt[d].vy==f&&Qt[d].el===p||(Qt[d].el=p,Qt[d].vx=T,Qt[d].vy=f,clearInterval(Qt[d].pid),0==T&&0==f||(u=!0,Qt[d].pid=setInterval(function(){o&&0===this.layer&&jt.active._onTouchMove(Zt);var t=Qt[this.layer].vy?Qt[this.layer].vy*s:0,e=Qt[this.layer].vx?Qt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(jt.dragged.parentNode[K],e,t,n,Zt,Qt[this.layer].el)||H(Qt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=M(h,!1)));Jt=u}},30),n=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,t=t.unhideGhostForTarget;e&&(i=n||i,a(),e=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e=document.elementFromPoint(e.clientX,e.clientY),t(),i&&!i.el.contains(e)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n})))};function ie(){}function re(){}ie.prototype={startIndex:null,dragStart:function(t){t=t.oldDraggableIndex;this.startIndex=t},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();t=B(this.sortable.el,this.startIndex,this.options);t?this.sortable.el.insertBefore(e,t):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:n},a(ie,{pluginName:"revertOnSpill"}),re.prototype={onSpill:function(t){var e=t.dragEl,t=t.putSortable||this.sortable;t.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),t.animateAll()},drop:n},a(re,{pluginName:"removeOnSpill"});var ae,le,se,ce,ue,de=[],he=[],pe=!1,fe=!1,ge=!1;function me(n,o){he.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)})}function ve(){de.forEach(function(t){t!==se&&t.parentNode&&t.parentNode.removeChild(t)})}return jt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){t=t.originalEvent;this.sortable.nativeDraggable?h(document,"dragover",this._handleAutoScroll):this.options.supportPointer?h(document,"pointermove",this._handleFallbackAutoScroll):t.touches?h(document,"touchmove",this._handleFallbackAutoScroll):h(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){t=t.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?p(document,"dragover",this._handleAutoScroll):(p(document,"pointermove",this._handleFallbackAutoScroll),p(document,"touchmove",this._handleFallbackAutoScroll),p(document,"mousemove",this._handleFallbackAutoScroll)),ee(),te(),clearTimeout(m),m=void 0},nulling:function(){Zt=Ut=Gt=Jt=$t=qt=Vt=null,Qt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o,i=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(r,a);Zt=e,n||this.options.forceAutoScrollFallback||w||y||u?(oe(e,this.options,t,n),o=M(t,!0),!Jt||$t&&r===qt&&a===Vt||($t&&ee(),$t=setInterval(function(){var t=M(document.elementFromPoint(r,a),!0);t!==o&&(o=t,te()),oe(e,i.options,t,n)},10),qt=r,Vt=a)):this.options.bubbleScroll&&M(t,!0)!==O()?oe(e,this.options,M(t,!1),!1):te()}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),jt.mount(re,ie),jt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){t=t.dragEl;ne=t},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;i.options.swap&&(t=this.sortable.el,i=this.options,n&&n!==t&&(t=ne,ne=!1!==o(n)?(k(n,i.swapClass,!0),n):null,t&&t!==ne&&k(t,i.swapClass,!1)),r(),e(!0),a())},drop:function(t){var e,n,o=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;ne&&k(ne,l.swapClass,!1),ne&&(l.swap||i&&i.options.swap)&&r!==ne&&(a.captureAnimationState(),a!==o&&o.captureAnimationState(),n=ne,t=(e=r).parentNode,l=n.parentNode,t&&l&&!t.isEqualNode(n)&&!l.isEqualNode(e)&&(i=j(e),r=j(n),t.isEqualNode(l)&&i<r&&r++,t.insertBefore(n,t.children[i]),l.insertBefore(e,l.children[r])),a.animateAll(),a!==o&&o.animateAll())},nulling:function(){ne=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:ne}}})}),jt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.avoidImplicitDeselect||(o.options.supportPointer?h(document,"pointerup",this._deselectMultiDrag):(h(document,"mouseup",this._deselectMultiDrag),h(document,"touchend",this._deselectMultiDrag))),h(document,"keydown",this._checkKeyDown),h(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,setData:function(t,e){var n="";de.length&&le===o?de.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){t=t.dragEl;se=t},delayEnded:function(){this.isMultiDrag=~de.indexOf(se)},setupClone:function(t){var e=t.sortable,t=t.cancel;if(this.isMultiDrag){for(var n=0;n<de.length;n++)he.push(C(de[n])),he[n].sortableIndex=de[n].sortableIndex,he[n].draggable=!1,he[n].style["will-change"]="",k(he[n],this.options.selectedClass,!1),de[n]===se&&k(he[n],this.options.chosenClass,!1);e._hideClone(),t()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,t=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||de.length&&le===e&&(me(!0,n),o("clone"),t()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,t=t.cancel;this.isMultiDrag&&(me(!1,n),he.forEach(function(t){R(t,"display","")}),e(),ue=!1,t())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),t=t.cancel;this.isMultiDrag&&(he.forEach(function(t){R(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),ue=!0,t())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&le&&le.multiDrag._deselectMultiDrag(),de.forEach(function(t){t.sortableIndex=j(t)}),de=de.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),ge=!0},dragStarted:function(t){var e,n=this,t=t.sortable;this.isMultiDrag&&(this.options.sort&&(t.captureAnimationState(),this.options.animation&&(de.forEach(function(t){t!==se&&R(t,"position","absolute")}),e=X(se,!1,!0,!0),de.forEach(function(t){t!==se&&T(t,e)}),pe=fe=!0)),t.animateAll(function(){pe=fe=!1,n.options.animation&&de.forEach(function(t){x(t)}),n.options.sort&&ve()}))},dragOver:function(t){var e=t.target,n=t.completed,t=t.cancel;fe&&~de.indexOf(e)&&(n(!1),t())},revert:function(t){var n,o,e=t.fromSortable,i=t.rootEl,r=t.sortable,a=t.dragRect;1<de.length&&(de.forEach(function(t){r.addAnimationState({target:t,rect:fe?X(t):a}),x(t),t.fromRect=a,e.removeAnimationState(t)}),fe=!1,n=!this.options.removeCloneOnHide,o=i,de.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)}))},dragOverCompleted:function(t){var e,n=t.sortable,o=t.isOwner,i=t.insertion,r=t.activeSortable,a=t.parentEl,l=t.putSortable,t=this.options;i&&(o&&r._hideClone(),pe=!1,t.animation&&1<de.length&&(fe||!o&&!r.options.sort&&!l)&&(e=X(se,!1,!0,!0),de.forEach(function(t){t!==se&&(T(t,e),a.appendChild(t))}),fe=!0),o||(fe||ve(),1<de.length?(o=ue,r._showClone(n),r.options.animation&&!ue&&o&&he.forEach(function(t){r.addAnimationState({target:t,rect:ce}),t.fromRect=ce,t.thisAnimationDuration=null})):r._showClone(n)))},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,t=t.activeSortable;de.forEach(function(t){t.thisAnimationDuration=null}),t.options.animation&&!n&&t.multiDrag.isMultiDrag&&(ce=a({},e),e=b(se,!0),ce.top-=e.f,ce.left-=e.e)},dragOverAnimationComplete:function(){fe&&(fe=!1,ve())},drop:function(t){var o,i,r,a,n,e,l,s=t.originalEvent,c=t.rootEl,u=t.parentEl,d=t.sortable,h=t.dispatchSortableEvent,p=t.oldIndex,t=t.putSortable,f=t||this.sortable;s&&(o=this.options,i=u.children,ge||(o.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),k(se,o.selectedClass,!~de.indexOf(se)),~de.indexOf(se)?(de.splice(de.indexOf(se),1),ae=null,G({sortable:d,rootEl:c,name:"deselect",targetEl:se,originalEvent:s})):(de.push(se),G({sortable:d,rootEl:c,name:"select",targetEl:se,originalEvent:s}),s.shiftKey&&ae&&d.el.contains(ae)?(r=j(ae),a=j(se),~r&&~a&&r!==a&&function(){for(var e,t=r<a?(e=r,a):(e=a,r+1),n=o.filter;e<t;e++)~de.indexOf(i[e])||P(i[e],o.draggable,u,!1)&&(n&&("function"==typeof n?n.call(d,s,i[e],d):n.split(",").some(function(t){return P(i[e],t.trim(),u,!1)}))||(k(i[e],o.selectedClass,!0),de.push(i[e]),G({sortable:d,rootEl:c,name:"select",targetEl:i[e],originalEvent:s})))}()):ae=se,le=f)),ge&&this.isMultiDrag&&(fe=!1,(u[K].options.sort||u!==c)&&1<de.length&&(n=X(se),e=j(se,":not(."+this.options.selectedClass+")"),!pe&&o.animation&&(se.thisAnimationDuration=null),f.captureAnimationState(),pe||(o.animation&&(se.fromRect=n,de.forEach(function(t){var e;t.thisAnimationDuration=null,t!==se&&(e=fe?X(t):n,t.fromRect=e,f.addAnimationState({target:t,rect:e}))})),ve(),de.forEach(function(t){i[e]?u.insertBefore(t,i[e]):u.appendChild(t),e++}),p===j(se)&&(l=!1,de.forEach(function(t){t.sortableIndex!==j(t)&&(l=!0)}),l&&(h("update"),h("sort")))),de.forEach(function(t){x(t)}),f.animateAll()),le=f),(c===u||t&&"clone"!==t.lastPutMode)&&he.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)}))},nullingGlobal:function(){this.isMultiDrag=ge=!1,he.length=0},destroyGlobal:function(){this._deselectMultiDrag(),p(document,"pointerup",this._deselectMultiDrag),p(document,"mouseup",this._deselectMultiDrag),p(document,"touchend",this._deselectMultiDrag),p(document,"keydown",this._checkKeyDown),p(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==ge&&ge||le!==this.sortable||t&&P(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;de.length;){var e=de[0];k(e,this.options.selectedClass,!1),de.shift(),G({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvent:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[K];e&&e.options.multiDrag&&!~de.indexOf(t)&&(le&&le!==e&&(le.multiDrag._deselectMultiDrag(),le=e),k(t,e.options.selectedClass,!0),de.push(t))},deselect:function(t){var e=t.parentNode[K],n=de.indexOf(t);e&&e.options.multiDrag&&~n&&(k(t,e.options.selectedClass,!1),de.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return de.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=fe&&t!==se?-1:fe?j(t,":not(."+n.options.selectedClass+")"):j(t),i.push({multiDragElement:t,index:e})}),{items:r(de),clones:[].concat(he),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),jt});
  return module.exports;
})();

/* marktile — the tile-family standalone editor. Opens any .md note in the SAME world-class editor as
   tugtile (headings grow while the '## ' markers stay; CJK-safe contenteditable; smart-Enter lists).
   It is a switchable pane: the leaf becomes marktile, with a header button back to Obsidian's editor — and
   Obsidian's editor gets a button over to marktile. No global hijack (registerExtensions), so the native
   editor is always one tap away and a bug can never lock you out of a note.
   Built by build-marktile.sh, which (1) injects i18n into the TR object below and (2) inlines the shared
   core blocks (marked core-start / core-end in ../plugin.src.js) at the core-inline line. */
const { Plugin, Notice, TextFileView, Modal, setIcon, Platform, PluginSettingTab, Setting } = require('obsidian');   // Modal/setIcon/Platform are used by the inlined core editor; PluginSettingTab/Setting for the settings tab

// ---- i18n (mirrors tugtile; the same i18n/*.json is injected at build) ----
const LOCALE = (() => {
  let lang = '';
  try { lang = (window.localStorage.getItem('language') || ''); } catch (e) { lang = ''; }
  if (lang === 'zh-TW') return 'zh-TW';
  if (lang === 'ja') return 'ja-JP';
  if (lang === 'ko') return 'ko-KR';
  return 'en-US';
})();
const TR = {"en-US": {"appName": "tugtile", "brandSuffix": "tugtile-ing", "brandSuffixLocked": "tugtile", "lockToggle": "Lock / unlock board", "lockedNotice": "Board is locked", "undoAction": "Undo", "redoAction": "Redo", "viewSwitchAction": "Switch view (Board / Table)", "boardSettingsAction": "Board settings", "openAsMarkdownAction": "Open as markdown", "archiveAction": "Stash (Archive)", "searchAction": "Search tiles", "emptyNoFile": "Open a board .md with the “Open as tugtile” command.", "fileNotFound": "File not found: {0}", "searchPlaceholder": "Find a tile", "viewBoard": "Board", "viewTable": "Table", "editMarkdown": "Edit raw markdown", "findPlaceholder": "Find", "replacePlaceholder": "Replace", "findPrev": "Previous", "findNext": "Next", "replaceOne": "Replace", "replaceAll": "Replace all", "colTile": "Tile", "colLane": "Lane", "colDate": "Date", "colTags": "Tags", "collapseExpand": "Collapse / expand", "laneActionsAria": "Lane actions (rename / insert / sort / stash / delete…)", "tileActionsAria": "More actions (edit / stash / delete…)", "relDateWrap": " ({0})", "today": "today", "tomorrow": "tomorrow", "yesterday": "yesterday", "dayAfterTomorrow": "in 2 days", "dayBeforeYesterday": "2 days ago", "daysLater": "in {0} days", "daysAgo": "{0} days ago", "yearMonth": "{0}-{1}", "weekdays": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], "edit": "Edit", "duplicateTile": "Duplicate", "insertTileAbove": "Insert tile above", "insertTileBelow": "Insert tile below", "splitTileMenu": "Split into tiles", "archiveTileMenu": "Stash (Archive)", "moveTileTop": "Move to top", "moveTileBottom": "Move to bottom", "untitledLane": "(untitled)", "moveToLane": "Move to “{0}”", "deleteTileMenu": "Delete", "splitNoNeed": "Only one line — nothing to split.", "splitDone": "Split into {0} tiles", "archivedTile": "Tile stashed", "deletedTile": "Tile deleted", "deletedLane": "Lane deleted", "toastUndoBtn": "Undo", "addTileBtn": "＋ Add a tile", "dropToArchive": "Drop here to stash", "cancel": "Cancel", "save": "Save", "discardConfirm": "Discard your changes?", "editLost": "Tile no longer exists — edit not saved.", "mobileSubmit": "Submit", "addLaneBtn": "＋ Add lane", "addLanePlaceholder": "Lane name — ⏎ to add", "newLane": "New lane", "newBoardName": "New board", "confirmDeleteLane": "This lane has {0} tiles. Delete the whole lane?", "boardListViewOnly": "Use this in Board view", "archivedCompleted": "Stashed {0} completed tiles", "noCompleted": "No completed tiles", "rename": "Rename", "insertLaneBefore": "Insert lane before", "insertLaneAfter": "Insert lane after", "sortTitleAsc": "Sort by tile title A→Z", "sortTitleDesc": "Sort by tile title Z→A", "sortDate": "Sort by date (soonest first)", "sortTag": "Sort by tag", "markLaneComplete": "Mark all in lane complete", "archiveLaneMenu": "Stash all tiles in lane", "deleteLaneMenu": "Delete lane", "confirmArchiveLane": "Stash all {0} tiles in this lane?", "archivedLane": "Stashed {0} tiles from lane", "noLaneToRestore": "tugtile: no lane to restore into — create a lane first", "externalModified": "tugtile: this file was changed elsewhere — reloaded to avoid overwrite (this step was not saved)", "backupFailed": "tugtile: backup failed — write cancelled to protect your data", "writeFailed": "tugtile write failed: {0}", "saved": "Saved", "persistFailed": "tugtile: save failed — {0}", "undoVerb": "undo", "redoVerb": "redo", "noStep": "tugtile: nothing left to {0}", "timeTraveled": "tugtile: {0} done (undo {1} / redo {2})", "archiveTitle": "Stash (Archive)", "archiveEmpty": "No stashed tiles.", "restore": "Restore", "deleteArchived": "Delete", "boardSettingsTitle": "Board settings", "boardSettingsDesc": "Affects only this board (saved with the board file). Blank = follow the global default.", "migrateBtn": "Upgrade to tugtile format", "migrateBtnDesc": "Remove obsidian-kanban markers so this board is tugtile-native. One-way.", "migrateConfirm": "Upgrade this board to tugtile’s own format? It will no longer open in obsidian-kanban, and kanban-only settings will be dropped.", "migrateDone": "Upgraded to tugtile format", "confirm": "Confirm", "setShowCheckboxes": "Show tile checkbox", "setHideCount": "Hide lane count", "setEnterBehavior": "Enter key behavior", "setEnterBehaviorDesc": "shift-enter = Enter submits (CJK friendly); enter = Enter newline", "optEnterSubmit": "Enter submits", "optEnterNewline": "Enter newline", "setNewCardPos": "New tile position", "optAppend": "At lane bottom", "optPrepend": "At lane top", "optPrependCompact": "At lane top (compact)", "setRelativeDate": "Show relative date", "setRelativeDateDesc": "today / tomorrow / in N days", "setDateFormat": "Date storage format", "setDateFormatDesc": "Format written into markdown (e.g. YYYY-MM-DD)", "setDateDisplay": "Date display format", "setDateDisplayDesc": "Format shown on tiles", "setDateTrigger": "Date trigger char", "setDateTriggerDesc": "Default @", "setTimeTrigger": "Time trigger char", "setTimeTriggerDesc": "Default @@", "setLinkDaily": "Link date to daily note", "setLinkDailyDesc": "Write date as @[[..]] linking to the daily note", "setTagAction": "Tag click action", "setTagActionDesc": "What clicking a tag does — search the whole vault, or filter just this board.", "optSearchVault": "Search whole vault", "optFilterBoard": "Filter this board", "setMoveTags": "Move tags to tile footer", "setArchiveWithDate": "Add timestamp on stash", "setMaxArchive": "Max stash size", "setMaxArchiveDesc": "-1 = unlimited", "settingsTitle": "tugtile settings", "settingsDesc": "These are global defaults; a board’s own settings of the same name take precedence.", "gShowCheckboxes": "Show tile checkbox", "gShowCheckboxesDesc": "Show a checkbox at the top-right of each tile (toggles - [ ] / - [x])", "gHideCount": "Hide lane count", "gHideCountDesc": "Don’t show the tile count in the lane header", "gResponsiveBoard": "Responsive board (stack on narrow panes)", "gResponsiveBoardDesc": "On a narrow pane, the board reflows into a single vertical stack.", "gLaneWidth": "Lane width", "gLaneWidthDesc": "Width of every lane — all lanes line up evenly", "gTableDensity": "Table row spacing", "gTableDensityDesc": "Vertical breathing room for each table row", "gFormatTools": "Text formatting buttons", "gFormatToolsDesc": "Which formatting buttons show in the editor", "gInsertTools": "Insert buttons", "gInsertToolsDesc": "Which insert buttons show (code, link, date, time)", "optDenseTight": "Tight", "optDenseMid": "Medium", "optDenseLoose": "Loose", "gEnterSubmit": "Enter submits", "gEnterSubmitDesc": "On: Enter submits, Shift+Enter newline (CJK-friendly default). Off: Enter newline, Shift/⌘+Enter submits", "gPrepend": "Add new tile at top", "gPrependDesc": "Default adds at the bottom; enable to add at the top", "gRelativeDate": "Show relative date", "gRelativeDateDesc": "Show “today / tomorrow / in N days” on tile dates", "gDateDisplay": "Date display format", "gDateDisplayDesc": "moment-style tokens: YYYY / MM / DD (default YYYY-MM-DD)", "gArchiveWithDate": "Add timestamp on stash", "gArchiveWithDateDesc": "Prepend **YYYY-MM-DD HH:mm** to the title when stashing", "gMaxArchive": "Max stash size", "gMaxArchiveDesc": "Max tiles kept in stash (-1 = unlimited; oldest dropped)", "gArchiveHeading": "Stash heading", "gArchiveHeadingDesc": "Heading text for a new stash (archive) section (e.g. Archive, 封存).", "gDanger": "Danger zone", "gReset": "Reset to defaults", "gResetDesc": "Restore the above global settings to defaults", "gResetBtn": "Reset", "cmdToggleView": "tugtile: toggle board / markdown", "cmdOpenAsBoard": "Open as tugtile", "cmdUndo": "tugtile: undo", "cmdRedo": "tugtile: redo", "cmdCreateBoard": "tugtile: create new board", "cmdSearch": "tugtile: search tiles (bindable to Cmd/Ctrl+F)", "cmdArchiveCompleted": "tugtile: stash all completed tiles", "cmdConvertToBoard": "tugtile: convert current note to board", "createBoardHere": "Create tugtile board here", "openAsBoard": "Open as tugtile board", "ribbonTitle": "tugtile board", "ribbonNoFile": "Open a board .md first", "convertFailed": "tugtile convert failed: {0}", "boardCreated": "Board created: {0} (rename it in the file explorer)", "createBoardFailed": "tugtile create board failed: {0}", "mtRibbon": "Edit in marktile", "mtOpenCmd": "marktile: edit current note", "mtNoFile": "Open a .md note first", "mtBackToObsidian": "Back to Obsidian editor", "openInMarktile": "Open in marktile", "mtToTugtile": "Open as tugtile board", "mtBrand": "marktile-ing", "mtBrandLocked": "marktile", "mtEssentialTools": "Essential buttons", "mtEssentialToolsDesc": "Search, undo, redo", "mtInsertToolsDesc": "Which insert buttons to show (code / link)", "mtDefaultEditor": "Make marktile the default Markdown editor", "mtDefaultEditorDesc": "Off by default. When on, .md files open in marktile instead of Obsidian's editor (board files too — hop to tugtile with its button). Reload Obsidian to apply; turn off anytime to restore the native editor.", "mtReloadRequired": "Reload Obsidian to apply", "mtSettings": "marktile settings", "mtSettingsTitle": "marktile settings", "mtSettingsDesc": "marktile opens any .md note in the tile-family editor. Choose which toolbar buttons appear (uncheck all to hide the toolbar entirely), or make marktile your default Markdown editor.", "mtModePlain": "Plain", "mtModeSeasoned": "Seasoned", "expandAllAction": "Expand all", "collapseAllAction": "Collapse all", "expandLanesAction": "Expand lanes", "mtModeToggle": "Toggle Seasoned / Plain", "mtLockToggle": "Lock editor (read-only)", "mtToc": "Table of contents", "mtTocEmpty": "No headings", "edH1": "Heading 1", "edH2": "Heading 2", "edH3": "Heading 3", "edBold": "Bold", "edItalic": "Italic", "edStrike": "Strikethrough", "edBullet": "Bullet list", "edNumber": "Numbered list", "edCheck": "Checklist", "edQuote": "Blockquote", "edCode": "Inline code", "edLink": "Wikilink", "edDate": "Insert date", "edTime": "Insert time", "edFind": "Find / replace"}, "ja-JP": {"appName": "タッグタイル", "brandSuffix": "tugtile-ing（タッグタイル中）", "brandSuffixLocked": "tugtile（タッグタイル）", "lockToggle": "ボードをロック／解除", "lockedNotice": "ボードはロックされています", "undoAction": "待った", "redoAction": "やり直し", "viewSwitchAction": "ビュー切替（ボード／表）", "boardSettingsAction": "このボードの設定", "openAsMarkdownAction": "Markdown で開く", "archiveAction": "アーカイブ", "searchAction": "タイルを検索", "emptyNoFile": "ボードの .md でコマンド「tugtile で開く」を使ってください。", "fileNotFound": "ファイルが見つかりません：{0}", "searchPlaceholder": "タイルを探す", "viewBoard": "ボード", "viewTable": "表", "editMarkdown": "Markdown を直接編集", "findPlaceholder": "検索", "replacePlaceholder": "置換後", "findPrev": "前へ", "findNext": "次へ", "replaceOne": "置換", "replaceAll": "すべて置換", "colTile": "タイル", "colLane": "列", "colDate": "日付", "colTags": "タグ", "collapseExpand": "折りたたみ / 展開", "laneActionsAria": "列の操作（名前変更／挿入／並べ替え／アーカイブ／削除…）", "tileActionsAria": "その他の操作（編集／アーカイブ／削除…）", "relDateWrap": "（{0}）", "today": "今日", "tomorrow": "明日", "yesterday": "昨日", "dayAfterTomorrow": "明後日", "dayBeforeYesterday": "一昨日", "daysLater": "{0} 日後", "daysAgo": "{0} 日前", "yearMonth": "{0}年 {1}月", "weekdays": ["日", "月", "火", "水", "木", "金", "土"], "edit": "編集", "duplicateTile": "タイルを複製", "insertTileAbove": "上にタイルを挿入", "insertTileBelow": "下にタイルを挿入", "splitTileMenu": "分割", "archiveTileMenu": "アーカイブ", "moveTileTop": "列の先頭へ", "moveTileBottom": "列の末尾へ", "untitledLane": "(無題)", "moveToLane": "「{0}」へ移動", "deleteTileMenu": "タイルを捨てる", "splitNoNeed": "1行のみ。分割は不要です。", "splitDone": "{0} 枚のタイルに分割しました", "archivedTile": "タイルをアーカイブしました", "deletedTile": "タイルを捨てました", "deletedLane": "列を削除しました", "toastUndoBtn": "待った", "addTileBtn": "＋ タイルを追加", "dropToArchive": "ここにドロップでアーカイブ", "cancel": "キャンセル", "save": "保存", "discardConfirm": "変更を破棄しますか？", "editLost": "このタイルは存在しません。編集は保存されませんでした。", "mobileSubmit": "送信", "addLaneBtn": "＋ 列を追加", "addLanePlaceholder": "列名　⏎ で追加", "newLane": "新しい列", "newBoardName": "新しいボード", "confirmDeleteLane": "この列には {0} 枚のタイルがあります。列ごと削除しますか？", "boardListViewOnly": "ボードビューで使ってください", "archivedCompleted": "完了したタイル {0} 枚をアーカイブしました", "noCompleted": "完了したタイルはありません", "rename": "名前を変更", "insertLaneBefore": "前に列を挿入", "insertLaneAfter": "後に列を挿入", "sortTitleAsc": "タイトルで並べ替え A→Z", "sortTitleDesc": "タイトルで並べ替え Z→A", "sortDate": "日付で並べ替え（近い順）", "sortTag": "タグで並べ替え", "markLaneComplete": "この列をすべて完了にする", "archiveLaneMenu": "この列のタイルをすべてアーカイブ", "deleteLaneMenu": "列を削除", "confirmArchiveLane": "この列の {0} 枚のタイルをすべてアーカイブしますか？", "archivedLane": "この列のタイル {0} 枚をアーカイブしました", "noLaneToRestore": "tugtile：戻せる列がありません。先に列を作成してください", "externalModified": "tugtile：このファイルが別の場所で変更されました。上書きを避けるため再読み込みしました（この操作は保存されていません）", "backupFailed": "tugtile：バックアップに失敗したため、データ保護のため書き込みを中止しました", "writeFailed": "tugtile 書き込み失敗：{0}", "saved": "保存しました", "persistFailed": "tugtile：保存に失敗しました──{0}", "undoVerb": "待った", "redoVerb": "やり直し", "noStep": "tugtile：{0}できる操作がありません", "timeTraveled": "tugtile：{0}しました（待った {1} / やり直し {2}）", "archiveTitle": "アーカイブ", "archiveEmpty": "アーカイブされたタイルはありません。", "restore": "戻す", "deleteArchived": "タイルを捨てる", "boardSettingsTitle": "このボードの設定", "boardSettingsDesc": "このボードだけを変更します（ボードのファイルに保存）。空白＝グローバル既定に従う。", "migrateBtn": "tugtile 形式にアップグレード", "migrateBtnDesc": "obsidian-kanban のマーカーを除去し、このボードを tugtile ネイティブにします。一方向。", "migrateConfirm": "このボードを tugtile 独自の形式にアップグレードしますか？以後 obsidian-kanban では開けなくなり、kanban 専用の設定は削除されます。", "migrateDone": "tugtile 形式にアップグレードしました", "confirm": "確定", "setShowCheckboxes": "タイルのチェックボックスを表示", "setHideCount": "列のカウントを隠す", "setEnterBehavior": "Enter キーの動作", "setEnterBehaviorDesc": "shift-enter＝Enter で送信（CJK 向け）；enter＝Enter で改行", "optEnterSubmit": "Enter で送信", "optEnterNewline": "Enter で改行", "setNewCardPos": "新しいタイルの位置", "optAppend": "列の末尾", "optPrepend": "列の先頭", "optPrependCompact": "列の先頭(コンパクト)", "setRelativeDate": "相対日付を表示", "setRelativeDateDesc": "今日 / 明日 / N 日後", "setDateFormat": "日付の保存形式", "setDateFormatDesc": "markdown に書き込む形式（例 YYYY-MM-DD）", "setDateDisplay": "日付の表示形式", "setDateDisplayDesc": "タイルに表示する形式", "setDateTrigger": "日付トリガー文字", "setDateTriggerDesc": "既定 @", "setTimeTrigger": "時刻トリガー文字", "setTimeTriggerDesc": "既定 @@", "setLinkDaily": "日付をデイリーノートにリンク", "setLinkDailyDesc": "日付を @[[..]] と書きデイリーノートにリンク", "setTagAction": "タグクリックの動作", "setTagActionDesc": "タグをクリックしたときの動作——vault 全体を検索、またはこのボードだけを絞り込み。", "optSearchVault": "vault 全体を検索", "optFilterBoard": "このボードを絞り込み", "setMoveTags": "タグをタイルの下部へ移動", "setArchiveWithDate": "アーカイブ時にタイムスタンプ", "setMaxArchive": "アーカイブ上限", "setMaxArchiveDesc": "-1＝無制限", "settingsTitle": "tugtile 設定", "settingsDesc": "これらはグローバル既定です。各ボードの同名設定が優先されます。", "gShowCheckboxes": "タイルのチェックボックスを表示", "gShowCheckboxesDesc": "各タイルの右上にチェックボックスを表示（- [ ] / - [x] を切替）", "gHideCount": "列のカウントを隠す", "gHideCountDesc": "列のヘッダーにタイル数を表示しない", "gResponsiveBoard": "レスポンシブボード（狭い画面で縦積み）", "gResponsiveBoardDesc": "画面が狭いとき、ボードを自動で縦一列に並べ替えます。", "gLaneWidth": "列の幅", "gLaneWidthDesc": "各列の幅。すべての列が同じ幅で揃います", "gTableDensity": "表の行間隔", "gTableDensityDesc": "表の各行の上下の間隔", "gFormatTools": "文字書式ボタン", "gFormatToolsDesc": "エディタに表示する書式ボタンを選択", "gInsertTools": "挿入ボタン", "gInsertToolsDesc": "表示する挿入ボタンを選択（コード／リンク／日付／時刻）", "optDenseTight": "詰める", "optDenseMid": "標準", "optDenseLoose": "ゆったり", "gEnterSubmit": "Enter で送信", "gEnterSubmitDesc": "オン：Enter で送信、Shift+Enter で改行（CJK 向け既定）。オフ：Enter で改行、Shift/⌘+Enter で送信", "gPrepend": "新しいタイルを先頭に追加", "gPrependDesc": "既定は末尾に追加。オンで先頭に追加", "gRelativeDate": "相対日付を表示", "gRelativeDateDesc": "タイルの日付に「今日 / 明日 / N 日後」を表示", "gDateDisplay": "日付の表示形式", "gDateDisplayDesc": "moment 形式トークン：YYYY / MM / DD（既定 YYYY-MM-DD）", "gArchiveWithDate": "アーカイブ時にタイムスタンプ", "gArchiveWithDateDesc": "アーカイブ時にタイトルの前へ **YYYY-MM-DD HH:mm** を付加", "gMaxArchive": "アーカイブ上限", "gMaxArchiveDesc": "アーカイブに残す最大枚数（-1 = 無制限；超過分は古いものから削除）", "gArchiveHeading": "アーカイブ見出し", "gArchiveHeadingDesc": "新しいアーカイブ節の見出し文字（例 Archive、封存）。", "gDanger": "危険な操作", "gReset": "既定値にリセット", "gResetDesc": "上記のグローバル設定を既定に戻す", "gResetBtn": "リセット", "cmdToggleView": "tugtile：ボード / markdown を切替", "cmdOpenAsBoard": "tugtile で開く", "cmdUndo": "tugtile：待った（元に戻す）", "cmdRedo": "tugtile：やり直し", "cmdCreateBoard": "tugtile：新しいボードを作成", "cmdSearch": "tugtile：タイルを検索（Cmd/Ctrl+F に割当可）", "cmdArchiveCompleted": "tugtile：完了したタイルをすべてアーカイブ", "cmdConvertToBoard": "tugtile：現在のノートをボードに変換", "createBoardHere": "ここに tugtile ボードを作成", "openAsBoard": "tugtile ボードで開く", "ribbonTitle": "tugtile ボード", "ribbonNoFile": "先にボードの .md を開いてください", "convertFailed": "tugtile 変換失敗：{0}", "boardCreated": "ボードを作成しました：{0}（ファイルエクスプローラーで名前変更可）", "createBoardFailed": "tugtile ボードの作成に失敗：{0}", "mtRibbon": "marktile で編集", "mtOpenCmd": "marktile：現在のノートを編集", "mtNoFile": "先に .md ノートを開いてください", "mtBackToObsidian": "Obsidian エディタに戻る", "openInMarktile": "marktile で開く", "mtToTugtile": "tugtile ボードで開く", "mtBrand": "marktile-ing", "mtBrandLocked": "marktile", "mtEssentialTools": "基本ボタン", "mtEssentialToolsDesc": "検索・待った・やり直し", "mtInsertToolsDesc": "表示する挿入ボタン（コード／リンク）", "mtDefaultEditor": "marktile を既定の Markdown エディタにする", "mtDefaultEditorDesc": "既定はオフ。オンにすると .md ファイルが Obsidian の標準エディタではなく marktile で開きます（ボードも同様、tugtile ボタンで移動）。反映には Obsidian の再読み込みが必要。いつでもオフにして標準エディタに戻せます。", "mtReloadRequired": "反映するには Obsidian を再読み込みしてください", "mtSettings": "marktile 設定", "mtSettingsTitle": "marktile 設定", "mtSettingsDesc": "marktile は任意の .md ノートを tile ファミリーのエディタで開きます。ツールバーに表示するボタンを選んだり（すべて外すとツールバーを完全に隠せます）、marktile を既定の Markdown エディタにできます。", "mtModePlain": "プレーン", "mtModeSeasoned": "アジツケ", "expandAllAction": "すべて展開", "collapseAllAction": "すべて折りたたむ", "expandLanesAction": "レーンを展開", "mtModeToggle": "アジツケ／プレーン切替", "mtLockToggle": "エディタをロック（読み取り専用）", "mtToc": "目次", "mtTocEmpty": "見出しなし", "edH1": "見出し 1", "edH2": "見出し 2", "edH3": "見出し 3", "edBold": "太字", "edItalic": "斜体", "edStrike": "取り消し線", "edBullet": "箇条書き", "edNumber": "番号付きリスト", "edCheck": "チェックリスト", "edQuote": "引用", "edCode": "インラインコード", "edLink": "ウィキリンク", "edDate": "日付を挿入", "edTime": "時刻を挿入", "edFind": "検索／置換"}, "ko-KR": {"appName": "태그타일", "brandSuffix": "tugtile-ing (태그타일 중)", "brandSuffixLocked": "tugtile (태그타일)", "lockToggle": "보드 잠금/해제", "lockedNotice": "보드가 잠겨 있습니다", "undoAction": "무르기", "redoAction": "다시 실행", "viewSwitchAction": "보기 전환 (보드 / 표)", "boardSettingsAction": "이 보드 설정", "openAsMarkdownAction": "마크다운으로 열기", "archiveAction": "보관함", "searchAction": "타일 검색", "emptyNoFile": "보드 .md에서 “tugtile로 열기” 명령을 사용하세요.", "fileNotFound": "파일을 찾을 수 없습니다: {0}", "searchPlaceholder": "타일 찾기", "viewBoard": "보드", "viewTable": "표", "editMarkdown": "Markdown 원본 편집", "findPlaceholder": "찾기", "replacePlaceholder": "바꿀 내용", "findPrev": "이전", "findNext": "다음", "replaceOne": "바꾸기", "replaceAll": "모두 바꾸기", "colTile": "타일", "colLane": "열", "colDate": "날짜", "colTags": "태그", "collapseExpand": "접기 / 펼치기", "laneActionsAria": "열 작업 (이름 변경 / 삽입 / 정렬 / 보관 / 삭제…)", "tileActionsAria": "추가 작업 (편집 / 보관 / 삭제…)", "relDateWrap": " ({0})", "today": "오늘", "tomorrow": "내일", "yesterday": "어제", "dayAfterTomorrow": "모레", "dayBeforeYesterday": "그저께", "daysLater": "{0}일 후", "daysAgo": "{0}일 전", "yearMonth": "{0}년 {1}월", "weekdays": ["일", "월", "화", "수", "목", "금", "토"], "edit": "편집", "duplicateTile": "타일 복제", "insertTileAbove": "위에 타일 삽입", "insertTileBelow": "아래에 타일 삽입", "splitTileMenu": "분할", "archiveTileMenu": "보관", "moveTileTop": "열 맨 위로", "moveTileBottom": "열 맨 아래로", "untitledLane": "(제목 없음)", "moveToLane": "“{0}”(으)로 이동", "deleteTileMenu": "타일 버리기", "splitNoNeed": "한 줄뿐이라 분할할 수 없습니다.", "splitDone": "{0}장의 타일로 분할했습니다", "archivedTile": "타일을 보관했습니다", "deletedTile": "타일을 버렸습니다", "deletedLane": "열을 삭제했습니다", "toastUndoBtn": "무르기", "addTileBtn": "＋ 타일 추가", "dropToArchive": "여기에 놓아 보관", "cancel": "취소", "save": "저장", "discardConfirm": "변경 사항을 취소할까요?", "editLost": "이 타일은 더 이상 존재하지 않아 편집이 저장되지 않았습니다.", "mobileSubmit": "전송", "addLaneBtn": "＋ 열 추가", "addLanePlaceholder": "열 이름　⏎ 추가", "newLane": "새 열", "newBoardName": "새 보드", "confirmDeleteLane": "이 열에 타일이 {0}장 있습니다. 열 전체를 삭제할까요?", "boardListViewOnly": "보드 보기에서 사용하세요", "archivedCompleted": "완료된 타일 {0}장을 보관했습니다", "noCompleted": "완료된 타일이 없습니다", "rename": "이름 변경", "insertLaneBefore": "앞에 열 삽입", "insertLaneAfter": "뒤에 열 삽입", "sortTitleAsc": "타일 제목 정렬 A→Z", "sortTitleDesc": "타일 제목 정렬 Z→A", "sortDate": "날짜 정렬 (가까운 순)", "sortTag": "태그 정렬", "markLaneComplete": "이 열 전체 완료 표시", "archiveLaneMenu": "이 열의 타일 모두 보관", "deleteLaneMenu": "열 삭제", "confirmArchiveLane": "이 열의 타일 {0}장을 모두 보관할까요?", "archivedLane": "이 열의 타일 {0}장을 보관했습니다", "noLaneToRestore": "tugtile: 복원할 열이 없습니다. 먼저 열을 만드세요", "externalModified": "tugtile: 이 파일이 다른 곳에서 변경되어 덮어쓰기를 막기 위해 다시 불러왔습니다(이 작업은 저장되지 않음)", "backupFailed": "tugtile: 백업에 실패하여 데이터 보호를 위해 저장을 취소했습니다", "writeFailed": "tugtile 저장 실패: {0}", "saved": "저장됨", "persistFailed": "tugtile: 저장 실패 — {0}", "undoVerb": "무르기", "redoVerb": "다시 실행", "noStep": "tugtile: {0}할 단계가 없습니다", "timeTraveled": "tugtile: {0} 완료(무르기 {1} / 다시 실행 {2})", "archiveTitle": "보관함", "archiveEmpty": "보관된 타일이 없습니다.", "restore": "복원", "deleteArchived": "타일 버리기", "boardSettingsTitle": "이 보드 설정", "boardSettingsDesc": "이 보드만 변경합니다(보드 파일에 저장). 비워두면 전역 기본값을 따릅니다.", "migrateBtn": "tugtile 형식으로 업그레이드", "migrateBtnDesc": "obsidian-kanban 마커를 제거하여 이 보드를 tugtile 네이티브로 만듭니다. 일방향.", "migrateConfirm": "이 보드를 tugtile 자체 형식으로 업그레이드할까요? 이후 obsidian-kanban으로 열 수 없으며 kanban 전용 설정은 삭제됩니다.", "migrateDone": "tugtile 형식으로 업그레이드됨", "confirm": "확인", "setShowCheckboxes": "타일 체크박스 표시", "setHideCount": "열 카운트 숨기기", "setEnterBehavior": "Enter 키 동작", "setEnterBehaviorDesc": "shift-enter＝Enter로 전송(CJK 친화); enter＝Enter로 줄바꿈", "optEnterSubmit": "Enter로 전송", "optEnterNewline": "Enter로 줄바꿈", "setNewCardPos": "새 타일 위치", "optAppend": "열 맨 아래", "optPrepend": "열 맨 위", "optPrependCompact": "열 맨 위(간단)", "setRelativeDate": "상대 날짜 표시", "setRelativeDateDesc": "오늘 / 내일 / N일 후", "setDateFormat": "날짜 저장 형식", "setDateFormatDesc": "마크다운에 기록하는 형식(예: YYYY-MM-DD)", "setDateDisplay": "날짜 표시 형식", "setDateDisplayDesc": "타일에 표시되는 형식", "setDateTrigger": "날짜 트리거 문자", "setDateTriggerDesc": "기본 @", "setTimeTrigger": "시간 트리거 문자", "setTimeTriggerDesc": "기본 @@", "setLinkDaily": "날짜를 데일리 노트에 링크", "setLinkDailyDesc": "날짜를 @[[..]]로 작성해 데일리 노트에 링크", "setTagAction": "태그 클릭 동작", "setTagActionDesc": "태그를 클릭할 때의 동작 — 전체 vault 검색, 또는 이 보드만 필터.", "optSearchVault": "전체 vault 검색", "optFilterBoard": "이 보드 필터", "setMoveTags": "태그를 타일 하단으로 이동", "setArchiveWithDate": "보관 시 타임스탬프 추가", "setMaxArchive": "보관함 최대 수", "setMaxArchiveDesc": "-1＝무제한", "settingsTitle": "tugtile 설정", "settingsDesc": "이것은 전역 기본값이며, 각 보드의 동일한 이름 설정이 우선합니다.", "gShowCheckboxes": "타일 체크박스 표시", "gShowCheckboxesDesc": "각 타일 오른쪽 위에 체크박스 표시(- [ ] / - [x] 전환)", "gHideCount": "열 카운트 숨기기", "gHideCountDesc": "열 헤더에 타일 수를 표시하지 않음", "gResponsiveBoard": "반응형 보드 (좁은 창에서 세로 정렬)", "gResponsiveBoardDesc": "창이 좁아지면 보드를 자동으로 세로 한 줄로 재배치합니다.", "gLaneWidth": "열 너비", "gLaneWidthDesc": "각 열의 너비 — 모든 열이 같은 너비로 정렬됩니다", "gTableDensity": "표 행 간격", "gTableDensityDesc": "표 각 행의 위아래 간격", "gFormatTools": "텍스트 서식 버튼", "gFormatToolsDesc": "에디터에 표시할 서식 버튼 선택", "gInsertTools": "삽입 버튼", "gInsertToolsDesc": "표시할 삽입 버튼 선택(코드/링크/날짜/시간)", "optDenseTight": "촘촘", "optDenseMid": "보통", "optDenseLoose": "넓게", "gEnterSubmit": "Enter로 전송", "gEnterSubmitDesc": "켬: Enter로 전송, Shift+Enter로 줄바꿈(CJK 친화 기본). 끔: Enter로 줄바꿈, Shift/⌘+Enter로 전송", "gPrepend": "새 타일을 맨 위에 추가", "gPrependDesc": "기본은 맨 아래에 추가; 켜면 맨 위에 추가", "gRelativeDate": "상대 날짜 표시", "gRelativeDateDesc": "타일 날짜에 “오늘 / 내일 / N일 후” 표시", "gDateDisplay": "날짜 표시 형식", "gDateDisplayDesc": "moment 형식 토큰: YYYY / MM / DD(기본 YYYY-MM-DD)", "gArchiveWithDate": "보관 시 타임스탬프 추가", "gArchiveWithDateDesc": "보관 시 제목 앞에 **YYYY-MM-DD HH:mm** 추가", "gMaxArchive": "보관함 최대 수", "gMaxArchiveDesc": "보관함에 유지할 최대 장수(-1 = 무제한; 초과 시 오래된 것부터 삭제)", "gArchiveHeading": "보관함 제목", "gArchiveHeadingDesc": "새 보관(아카이브) 섹션의 제목 문자(예: Archive, 封存).", "gDanger": "위험 작업", "gReset": "기본값으로 재설정", "gResetDesc": "위 전역 설정을 기본값으로 되돌립니다", "gResetBtn": "재설정", "cmdToggleView": "tugtile: 보드 / markdown 전환", "cmdOpenAsBoard": "tugtile로 열기", "cmdUndo": "tugtile: 무르기(실행 취소)", "cmdRedo": "tugtile: 다시 실행", "cmdCreateBoard": "tugtile: 새 보드 만들기", "cmdSearch": "tugtile: 타일 검색(Cmd/Ctrl+F에 바인딩 가능)", "cmdArchiveCompleted": "tugtile: 완료된 타일 모두 보관", "cmdConvertToBoard": "tugtile: 현재 노트를 보드로 변환", "createBoardHere": "여기에 tugtile 보드 만들기", "openAsBoard": "tugtile 보드로 열기", "ribbonTitle": "tugtile 보드", "ribbonNoFile": "먼저 보드 .md 파일을 여세요", "convertFailed": "tugtile 변환 실패: {0}", "boardCreated": "보드를 만들었습니다: {0}(파일 탐색기에서 이름 변경 가능)", "createBoardFailed": "tugtile 보드 생성 실패: {0}", "mtRibbon": "marktile로 편집", "mtOpenCmd": "marktile: 현재 노트 편집", "mtNoFile": ".md 노트를 먼저 여세요", "mtBackToObsidian": "Obsidian 편집기로", "openInMarktile": "marktile에서 열기", "mtToTugtile": "tugtile 보드로 열기", "mtBrand": "marktile-ing", "mtBrandLocked": "marktile", "mtEssentialTools": "기본 버튼", "mtEssentialToolsDesc": "검색・무르기・다시 실행", "mtInsertToolsDesc": "표시할 삽입 버튼 (코드 / 링크)", "mtDefaultEditor": "marktile을 기본 Markdown 편집기로 설정", "mtDefaultEditorDesc": "기본은 꺼짐. 켜면 .md 파일이 Obsidian 기본 편집기 대신 marktile로 열립니다(보드 파일도 포함, tugtile 버튼으로 이동). 적용하려면 Obsidian을 다시 로드하세요. 언제든 꺼서 기본 편집기로 되돌릴 수 있습니다.", "mtReloadRequired": "적용하려면 Obsidian을 다시 로드하세요", "mtSettings": "marktile 설정", "mtSettingsTitle": "marktile 설정", "mtSettingsDesc": "marktile은 모든 .md 노트를 tile 패밀리 편집기로 엽니다. 도구 모음에 표시할 버튼을 선택하거나(모두 해제하면 도구 모음을 완전히 숨길 수 있음), marktile을 기본 Markdown 편집기로 설정할 수 있습니다.", "mtModePlain": "담백", "mtModeSeasoned": "양념", "expandAllAction": "모두 펼치기", "collapseAllAction": "모두 접기", "expandLanesAction": "레인 펼치기", "mtModeToggle": "양념 / 담백 전환", "mtLockToggle": "편집기 잠금(읽기 전용)", "mtToc": "목차", "mtTocEmpty": "제목 없음", "edH1": "제목 1", "edH2": "제목 2", "edH3": "제목 3", "edBold": "굵게", "edItalic": "기울임", "edStrike": "취소선", "edBullet": "글머리 목록", "edNumber": "번호 목록", "edCheck": "체크리스트", "edQuote": "인용", "edCode": "인라인 코드", "edLink": "위키링크", "edDate": "날짜 삽입", "edTime": "시간 삽입", "edFind": "찾기 / 바꾸기"}, "zh-TW": {"appName": "理牌", "brandSuffix": "tugtile-ing（理牌中）", "brandSuffixLocked": "tugtile（理牌）", "lockToggle": "鎖定／解鎖牌桌", "lockedNotice": "牌桌已鎖定", "undoAction": "悔牌（復原）", "redoAction": "重出（重做）", "viewSwitchAction": "切換檢視（牌桌／牌表）", "boardSettingsAction": "本牌桌設定", "openAsMarkdownAction": "以 markdown 開啟", "archiveAction": "牌庫（收牌區）", "searchAction": "搜尋牌", "emptyNoFile": "在某張牌桌 .md 上用指令「以 tugtile 開啟」。", "fileNotFound": "找不到檔案：{0}", "searchPlaceholder": "找牌", "viewBoard": "牌桌", "viewTable": "牌表", "editMarkdown": "編輯 Markdown 原始碼", "findPlaceholder": "尋找", "replacePlaceholder": "取代為", "findPrev": "上一個", "findNext": "下一個", "replaceOne": "取代", "replaceAll": "全部取代", "colTile": "牌", "colLane": "牌列", "colDate": "日期", "colTags": "標籤", "collapseExpand": "收合 / 展開", "laneActionsAria": "牌列動作（改名／插入／排序／收牌／棄牌…）", "tileActionsAria": "更多動作（編輯／收牌／棄牌…）", "relDateWrap": "（{0}）", "today": "今天", "tomorrow": "明天", "yesterday": "昨天", "dayAfterTomorrow": "後天", "dayBeforeYesterday": "前天", "daysLater": "{0} 天後", "daysAgo": "{0} 天前", "yearMonth": "{0} 年 {1} 月", "weekdays": ["日", "一", "二", "三", "四", "五", "六"], "edit": "編輯", "duplicateTile": "複製牌", "insertTileAbove": "在上方新增牌", "insertTileBelow": "在下方新增牌", "splitTileMenu": "拆分成多張", "archiveTileMenu": "收牌（封存）", "moveTileTop": "移到牌列頂", "moveTileBottom": "移到牌列底", "untitledLane": "(未命名)", "moveToLane": "移到「{0}」", "deleteTileMenu": "棄牌", "splitNoNeed": "只有一行，無需拆分", "splitDone": "已拆分成 {0} 張牌", "archivedTile": "已收牌（封存）", "deletedTile": "已棄牌", "deletedLane": "已刪牌列", "toastUndoBtn": "悔牌", "addTileBtn": "＋ 新增一張牌", "dropToArchive": "拖到這裡收牌", "cancel": "取消", "save": "儲存", "discardConfirm": "放棄這次的變更？", "editLost": "這張牌已不存在，編輯未儲存。", "mobileSubmit": "送出", "addLaneBtn": "＋ 新增牌列", "addLanePlaceholder": "牌列名稱　⏎ 新增", "newLane": "新牌列", "newBoardName": "新牌桌", "confirmDeleteLane": "這個牌列有 {0} 張牌，確定刪除整列？", "boardListViewOnly": "請在牌桌檢視使用", "archivedCompleted": "已收 {0} 張已完成牌", "noCompleted": "沒有已完成的牌", "rename": "改名", "insertLaneBefore": "在前面插入牌列", "insertLaneAfter": "在後面插入牌列", "sortTitleAsc": "依牌面排序 A→Z", "sortTitleDesc": "依牌面排序 Z→A", "sortDate": "依日期排序（近→遠）", "sortTag": "依標籤排序", "markLaneComplete": "標記本列全部完成", "archiveLaneMenu": "收本列所有牌", "deleteLaneMenu": "刪除牌列", "confirmArchiveLane": "把這列的 {0} 張牌全部收進牌庫？", "archivedLane": "已收本列 {0} 張牌", "noLaneToRestore": "理牌：沒有可還原到的牌列，請先建一列", "externalModified": "理牌：偵測到此檔在別處被修改，已重新載入以免覆蓋（剛才這步未寫入）", "backupFailed": "理牌：備份失敗，為保護資料已取消這次寫回", "writeFailed": "理牌寫回失敗：{0}", "saved": "已儲存", "persistFailed": "理牌：存檔失敗──{0}", "undoVerb": "悔牌", "redoVerb": "重出", "noStep": "理牌：沒有可{0}的步驟了", "timeTraveled": "理牌：已{0}（可悔牌 {1} / 可重出 {2}）", "archiveTitle": "牌庫", "archiveEmpty": "牌庫裡沒有牌。", "restore": "取回", "deleteArchived": "棄牌", "boardSettingsTitle": "本牌桌設定", "boardSettingsDesc": "只改這個牌桌（隨牌桌檔案儲存）。空白＝跟隨全域預設。", "migrateBtn": "升級成 tugtile 格式", "migrateBtnDesc": "移除 obsidian-kanban 標記，讓這個牌桌成為 tugtile 原生格式。單向不可逆。", "migrateConfirm": "要把這個牌桌升級成 tugtile 原生格式嗎？升級後將無法用 obsidian-kanban 開啟，且會清掉 kanban 專屬設定。", "migrateDone": "已升級成 tugtile 格式", "confirm": "確定", "setShowCheckboxes": "顯示牌的勾選框", "setHideCount": "隱藏牌列計數", "setEnterBehavior": "Enter 鍵行為", "setEnterBehaviorDesc": "shift-enter＝Enter 送出（CJK 友善）；enter＝Enter 換行", "optEnterSubmit": "Enter 送出", "optEnterNewline": "Enter 換行", "setNewCardPos": "新牌位置", "optAppend": "加在牌列底", "optPrepend": "加在牌列頂", "optPrependCompact": "加在牌列頂(精簡)", "setRelativeDate": "顯示相對日期", "setRelativeDateDesc": "今天 / 明天 / N 天後", "setDateFormat": "日期儲存格式", "setDateFormatDesc": "插入日期寫進 markdown 的格式（如 YYYY-MM-DD）", "setDateDisplay": "日期顯示格式", "setDateDisplayDesc": "牌上顯示的格式", "setDateTrigger": "日期觸發字元", "setDateTriggerDesc": "預設 @", "setTimeTrigger": "時間觸發字元", "setTimeTriggerDesc": "預設 @@", "setLinkDaily": "日期連每日筆記", "setLinkDailyDesc": "日期寫成 @[[..]] 連到每日筆記", "setTagAction": "點標籤行為", "setTagActionDesc": "點標籤時的動作——搜尋整個 vault，或只篩這個牌桌。", "optSearchVault": "搜整個 vault", "optFilterBoard": "篩本牌桌", "setMoveTags": "標籤移到牌底", "setArchiveWithDate": "收牌時加時間戳", "setMaxArchive": "牌庫數上限", "setMaxArchiveDesc": "-1＝無限", "settingsTitle": "理牌設定", "settingsDesc": "這些是全域預設；個別牌桌的同名設定會優先。", "gShowCheckboxes": "顯示牌的勾選框", "gShowCheckboxesDesc": "在每張牌右上角顯示勾選框（可切換 - [ ] / - [x]）", "gHideCount": "隱藏牌列計數", "gHideCountDesc": "不在牌列標題列顯示牌數", "gResponsiveBoard": "自適應牌桌（窄面板直排）", "gResponsiveBoardDesc": "面板變窄時，牌桌自動改成單欄直向堆疊。", "gLaneWidth": "牌列寬度", "gLaneWidthDesc": "每個牌列的寬度，所有牌列等寬對齊", "gTableDensity": "牌表行距", "gTableDensityDesc": "牌表每列的上下間距", "gFormatTools": "文字格式按鈕", "gFormatToolsDesc": "選擇編輯器要顯示哪些文字格式按鈕", "gInsertTools": "插入按鈕", "gInsertToolsDesc": "選擇要顯示哪些插入按鈕（程式碼／連結／日期／時間）", "optDenseTight": "緊湊", "optDenseMid": "適中", "optDenseLoose": "寬鬆", "gEnterSubmit": "Enter 鍵送出", "gEnterSubmitDesc": "開：Enter 送出、Shift+Enter 換行（CJK 友善預設）。關：Enter 換行、Shift/⌘+Enter 送出", "gPrepend": "新牌加在牌列頂", "gPrependDesc": "預設加在牌列底；開啟改為加在牌列頂", "gRelativeDate": "顯示相對日期", "gRelativeDateDesc": "牌日期顯示「今天 / 明天 / N 天後」", "gDateDisplay": "日期顯示格式", "gDateDisplayDesc": "moment 風格 token：YYYY / MM / DD（預設 YYYY-MM-DD）", "gArchiveWithDate": "收牌時加時間戳", "gArchiveWithDateDesc": "收牌時在標題前加上 **YYYY-MM-DD HH:mm**", "gMaxArchive": "牌庫數上限", "gMaxArchiveDesc": "牌庫最多保留幾張（-1 = 無限；超過丟最舊）", "gArchiveHeading": "牌庫標題", "gArchiveHeadingDesc": "新建牌庫（封存）區段用的標題文字（例如 Archive、封存）。", "gDanger": "危險操作", "gReset": "重設為預設值", "gResetDesc": "把上述全域設定還原成預設", "gResetBtn": "重設", "cmdToggleView": "理牌：切換牌桌 / markdown", "cmdOpenAsBoard": "以 tugtile 開啟", "cmdUndo": "理牌：悔牌（復原）", "cmdRedo": "理牌：重出（重做）", "cmdCreateBoard": "理牌：建立新牌桌", "cmdSearch": "理牌：搜尋牌（可綁 Cmd/Ctrl+F）", "cmdArchiveCompleted": "理牌：收全牌桌已完成牌", "cmdConvertToBoard": "理牌：把目前筆記轉成牌桌", "createBoardHere": "在此建立 tugtile 牌桌", "openAsBoard": "以 tugtile 牌桌開啟", "ribbonTitle": "tugtile 牌桌", "ribbonNoFile": "請先開啟一個牌桌 .md 檔", "convertFailed": "理牌轉換失敗：{0}", "boardCreated": "已建立牌桌：{0}（可在檔案總管改名）", "createBoardFailed": "理牌建立牌桌失敗：{0}", "mtRibbon": "用 marktile 編輯", "mtOpenCmd": "marktile：編輯目前筆記", "mtNoFile": "請先開啟一個 .md 筆記", "mtBackToObsidian": "回 Obsidian 編輯器", "openInMarktile": "開進 marktile", "mtToTugtile": "以 tugtile 牌桌開啟", "mtBrand": "marktile-ing", "mtBrandLocked": "marktile", "mtEssentialTools": "基本按鈕", "mtEssentialToolsDesc": "搜尋、復原、重做", "mtInsertToolsDesc": "要顯示哪些插入按鈕（程式碼／連結）", "mtDefaultEditor": "將 marktile 設為預設 Markdown 編輯器", "mtDefaultEditorDesc": "預設關閉。開啟後 .md 檔會用 marktile 開啟，而非 Obsidian 內建編輯器（看板檔也是，可用 tugtile 按鈕跳過去）。需重新載入 Obsidian 生效；隨時可關閉以還原原生編輯器。", "mtReloadRequired": "請重新載入 Obsidian 以生效", "mtSettings": "marktile 設定", "mtSettingsTitle": "marktile 設定", "mtSettingsDesc": "marktile 用 tile 家族的編輯器打開任何 .md 筆記。在這裡選擇工具列要顯示哪些按鈕（全部取消即可完全隱藏工具列），或將 marktile 設為預設的 Markdown 編輯器。", "mtModePlain": "原味", "mtModeSeasoned": "調味", "expandAllAction": "全展開", "collapseAllAction": "全收起", "expandLanesAction": "展開牌列", "mtModeToggle": "切換 調味／原味", "mtLockToggle": "鎖定編輯器（唯讀）", "mtToc": "目錄", "mtTocEmpty": "沒有標題", "edH1": "標題 1", "edH2": "標題 2", "edH3": "標題 3", "edBold": "粗體", "edItalic": "斜體", "edStrike": "刪除線", "edBullet": "項目清單", "edNumber": "編號清單", "edCheck": "核取清單", "edQuote": "引言", "edCode": "行內程式碼", "edLink": "雙向連結", "edDate": "插入日期", "edTime": "插入時間", "edFind": "尋找／取代"}};   // injected by build-marktile.sh
function t(key, ...args) {
  let s = (TR[LOCALE] && TR[LOCALE][key]);
  if (s == null) s = TR['en-US'] && TR['en-US'][key];
  if (s == null) return key;
  if (typeof s === 'string' && args.length) s = s.replace(/\{(\d+)\}/g, (m, i) => (args[+i] != null ? args[+i] : m));
  return s;
}

/* tile-family shared editor core — the SINGLE source of the editor engine used by BOTH plugins.
   Extracted from tugtile's plugin.src.js (the former //#core-start/#core-end blocks). The builds
   inject this file at each plugin's core-inline marker. It uses Obsidian element helpers / setIcon /
   Platform / Modal, which both Obsidian-plugin consumers provide (de-Obsidian-ifying for ejecta is a
   later, separate step). EDITOR_TOOLS + escHtml + highlighters + listContinuation + tabEdit +
   tocHeadings + moveSection + mountEditor + TileEditModal. */

const EDITOR_TOOLS = [
  // fixed: always shown, not user-toggleable (essentials). tip = i18n key for the hover/aria label.
  { key: 'search', icon: 'search', fixed: true, tip: 'edFind' }, { key: 'undo', icon: 'undo', fixed: true, tip: 'undoAction' }, { key: 'redo', icon: 'redo', fixed: true, tip: 'redoAction' }, 'sep',
  // icons verified present in Obsidian's bundled Lucide subset (not all of Lucide ships); g = text fallback when no icon
  { key: 'h1', g: 'H1', icon: 'heading-1', cat: 'format', tip: 'edH1' }, { key: 'h2', g: 'H2', icon: 'heading-2', cat: 'format', tip: 'edH2' }, { key: 'h3', g: 'H3', icon: 'heading-3', cat: 'format', tip: 'edH3' }, 'sep',
  { key: 'bold', g: 'B', icon: 'bold', cat: 'format', tip: 'edBold' }, { key: 'italic', g: 'I', icon: 'italic', cat: 'format', tip: 'edItalic' }, { key: 'strike', g: 'S', icon: 'strikethrough', cat: 'format', tip: 'edStrike' }, 'rowbreak',   // phone: wrap to a third toolbar row here (desktop treats it as a separator)
  { key: 'bullet', g: '•', icon: 'list', cat: 'format', tip: 'edBullet' }, { key: 'number', g: '1.', icon: 'list-ordered', cat: 'format', tip: 'edNumber' }, { key: 'check', g: '☑', icon: 'list-checks', cat: 'format', tip: 'edCheck' }, { key: 'quote', g: '❝', icon: 'text-quote', cat: 'format', tip: 'edQuote' }, 'sep',
  { key: 'code', g: '</>', icon: 'code', cat: 'insert', tip: 'edCode' }, { key: 'link', g: '[[ ]]', icon: 'link', cat: 'insert', tip: 'edLink' }, 'sep',
  { key: 'date', g: '@', icon: 'calendar', cat: 'insert', tip: 'edDate' }, { key: 'time', g: '@@', icon: 'clock', cat: 'insert', tip: 'edTime' },
];

// Centered modal editor for cards: large centered card, darkened background, virtual keyboard adjusts modal container, saves changes on close
function escHtml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
// Synchronized syntax highlighter: renders raw markdown styling (bold, headings, lists, blockquotes, tags, links, dates).
// Modifies only font weights and colors (maintains font size) to match the textarea line-height, ensuring perfect layout alignment (crucial for this design).
// Highlights ONE markdown line into { cls, inner } for a <div class="tg-line"> block. Markers are KEPT
// (literal '## ' stays visible); heading lines just carry a level class so CSS can size them up. An empty
// line uses <br> (textContent '') so the text<->DOM round-trip stays exact. Shared by the full render and
// the in-place single-line re-highlight (so both produce byte-identical DOM).
function highlightLineParts(line) {
  let cls = 'tg-line';
  const hm = /^(#{1,6})\s/.exec(line);
  if (hm) cls += ' tg-h tg-h' + hm[1].length;
  else if (/^>\s?/.test(line)) cls += ' tg-quote';
  else if (/^\s*[-*]\s/.test(line)) cls += ' tg-li';
  const h = escHtml(line)
    .replace(/^(\s*[-*]\s)(\[[ xX]\])/, (m, p, box) => p + '<span class="tg-check' + (/[xX]/.test(box) ? ' tg-check-done' : '') + '">' + box + '</span>')
    .replace(/(\*\*[^*\n]+\*\*|\*[^*\s][^*\n]*?\*)/g, (m) => '<span class="' + (m.startsWith('**') ? 'tg-b' : 'tg-i') + '">' + m + '</span>')   // **bold** wins the alternation; single * needs a non-space after it so "a * b" isn't italicised
    .replace(/(~~[^~\n]+~~)/g, '<span class="tg-strike">$1</span>')
    .replace(/(`[^`\n]+`)/g, '<span class="tg-code">$1</span>')
    .replace(/(\[\[[^\]\n]+\]\])/g, '<span class="tg-link">$1</span>')
    .replace(/(@@?\{[^}\n]*\})/g, '<span class="tg-date">$1</span>')
    .replace(/(^|[^&\w])(#[^\s#<&]+)/g, '$1<span class="tg-tag">$2</span>')
    .replace(/\t/g, '<span class="tg-tab">\t</span>');   // wrap each literal tab LAST (after the line-start regexes) so CSS can mark tab-vs-space; span is transparent to the text round-trip
  if (/^\s*[-*]\s\[[ xX]\]/.test(line)) cls += ' tg-task' + (/^\s*[-*]\s\[[xX]\]/.test(line) ? ' tg-task-done' : '');
  return { cls: cls, inner: (h || '<br>') };
}
// Renders the whole markdown source into per-line <div> blocks for the contenteditable editor.
function highlightMarkdown(text) {
  const lines = (text === '' ? [''] : text.split('\n'));
  return lines.map((line) => { const p = highlightLineParts(line); return '<div class="' + p.cls + '">' + p.inner + '</div>'; }).join('');
}

// Smart-Enter list continuation (pure, so it's unit-testable without a DOM). Given the full text and a caret
// offset, returns the new { text, caret } when the caret line is a list item (- / * / 1. / - [ ]), or null
// when it isn't (so the caller lets the native newline happen). A list item that's empty past its marker
// exits the list (marker removed). Ordered markers increment; checkbox items continue UNCHECKED.
function listContinuation(v, s) {
  const ls = v.lastIndexOf('\n', s - 1) + 1;
  let le = v.indexOf('\n', s); if (le < 0) le = v.length;
  const line = v.slice(ls, le);
  let prefix = null, contentStart = 0;
  const mu = /^(\s*)([-*])\s+(\[[ xX]\]\s+)?/.exec(line);
  if (mu) { contentStart = mu[0].length; prefix = mu[1] + mu[2] + ' ' + (mu[3] ? '[ ] ' : ''); }
  else { const mo = /^(\s*)(\d+)([.)])\s+/.exec(line); if (mo) { contentStart = mo[0].length; prefix = mo[1] + (parseInt(mo[2], 10) + 1) + mo[3] + ' '; } }
  if (prefix === null) return null;
  if (line.slice(contentStart).trim() === '') return { text: v.slice(0, ls) + v.slice(le), caret: ls };   // empty item → exit the list
  return { text: v.slice(0, s) + '\n' + prefix + v.slice(s), caret: s + 1 + prefix.length };               // continue the list
}

// Tab inserts a literal tab at the caret (replacing any selection); Shift+Tab removes one tab immediately
// before a collapsed caret. Tugtile's tile structure is tab-indented (serializeTile re-adds it on write),
// so being able to type a real tab matters when editing a raw board file in marktile. Pure → unit-tested.
function tabEdit(v, s, e, outdent) {
  if (outdent) {
    if (s === e && s > 0 && v[s - 1] === '\t') return { text: v.slice(0, s - 1) + v.slice(s), caret: s - 1 };
    return null;   // nothing to outdent
  }
  return { text: v.slice(0, s) + '\t' + v.slice(e), caret: s + 1 };
}

// Table-of-contents model (pure → unit-tested). Scans markdown for H1–H3 headings OUTSIDE fenced code blocks,
// returning { level, text, line } per heading. `line` is the 0-based source line index, which maps 1:1 to the
// editor's .tg-line divs (highlightMarkdown emits one div per line) so the consumer can scroll straight to it.
function tocHeadings(text) {
  const lines = String(text).split('\n');
  const out = [];
  let fence = false;
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) { fence = !fence; continue; }   // a fence line toggles in/out of code (its own # are not headings)
    if (fence) continue;
    const m = /^(#{1,3})\s+(.*)$/.exec(lines[i]);
    if (m) out.push({ level: m[1].length, text: m[2].trim(), line: i });
  }
  return out;
}

// Drag-reorder a TOC section (pure → unit-tested). oldIndex/newIndex are heading positions in tocHeadings()
// order (= SortableJS evt.oldIndex/newIndex). A "section" = the heading line through everything up to the next
// heading of EQUAL-OR-HIGHER level (so dragging an H1 carries its H2/H3 children; level B: levels never change).
// Moving down lands it after the target's whole section; moving up lands it before the target.
function moveSection(text, oldIndex, newIndex) {
  if (oldIndex === newIndex) return text;
  const lines = String(text).split('\n');
  const heads = tocHeadings(text);
  const n = heads.length;
  if (oldIndex < 0 || oldIndex >= n || newIndex < 0 || newIndex >= n) return text;
  const sectionEnd = (idx) => { const lv = heads[idx].level; for (let j = idx + 1; j < n; j++) if (heads[j].level <= lv) return heads[j].line; return lines.length; };
  const start = heads[oldIndex].line, end = sectionEnd(oldIndex);
  const block = lines.slice(start, end);
  const insertAt = (newIndex > oldIndex) ? sectionEnd(newIndex) : heads[newIndex].line;   // after target's section (down) / before target (up)
  const rest = lines.slice(0, start).concat(lines.slice(end));
  const ins = (insertAt >= end) ? insertAt - block.length : insertAt;   // shift left if the removed block sat before the insertion point
  return rest.slice(0, ins).concat(block, rest.slice(ins)).join('\n');
}

// Builds the reusable contenteditable editor into a container; returns a controller. Hosted by the modal
// (kanban cards) and by marktile's file view (standalone .md). opts: { text, onCancel?, onSave?,
// onSubmit?, onEscape?, onChange? }. host = the board view or a minimal file host (see interface above).
function mountEditor(contentEl, opts, host) {
  const orig = opts.text || '';
    contentEl.empty(); contentEl.addClass('tugtile-edit-modal');

    // Title bar: Cancel (✕) on the left, tool actions in the center, Save (✓) on the right (positioned at the top to avoid virtual keyboard occlusion)
    const bar = contentEl.createDiv({ cls: 'tugtile-ed-bar' });
    // Virtual keyboard workaround: call preventDefault on mousedown/pointerdown to block focus transfer.
    // This keeps the keyboard open, prevents viewport reflows, and ensures the tap action is registered properly.
    // The textarea retains focus and values during execution before closing. This technique is verified and reused in tbtn shortcut buttons.
    const tap = (el, fn) => {
      el.addEventListener('mousedown', (e) => e.preventDefault());                                  // Prevents stealing focus from the textarea (mouse/synthetic events)
      el.addEventListener('pointerdown', (e) => e.preventDefault());                                // Touch/stylus: same as above (blocks focus transfer only, allows scrolling)
      el.addEventListener('touchstart', (e) => { e.preventDefault(); fn(); }, { passive: false });  // Touch: triggers immediately + retains focus + blocks synthetic click
      el.addEventListener('click', fn);                                                             // Mouse/desktop click
    };
    if (opts.onToc) { const tc = bar.createEl('button', { cls: 'tugtile-iconbtn tugtile-ed-toc' }); setIcon(tc.createSpan(), 'list-tree'); tc.setAttribute('aria-label', t('mtToc')); tap(tc, opts.onToc); }   // TOC toggle — sits in the ✕'s left slot; only when the host wants it (marktile passes onToc; tugtile's card modal doesn't)
    if (opts.onCancel) { const x = bar.createEl('button', { cls: 'tugtile-iconbtn tugtile-ed-x' }); setIcon(x.createSpan(), 'x'); x.setAttribute('aria-label', t('cancel')); tap(x, opts.onCancel); }   // ✕ — Lucide icon (matches the toolbar), span-nested for iPad; only when the host wants a cancel affordance (modal)
    const tools = bar.createDiv({ cls: 'tugtile-ed-tools' });
    if (opts.onSave) { const ok = bar.createEl('button', { cls: 'tugtile-iconbtn tugtile-ed-ok' }); setIcon(ok.createSpan(), 'check'); ok.setAttribute('aria-label', t('save')); tap(ok, opts.onSave); }   // ✓ — Lucide check; only for the modal (the file view autosaves)
    // Phone: split the toolbar — the top bar keeps the essentials (search/undo/redo, centered between ✕ ✓),
    // the format/insert tools drop to a second row below so the cramped phone bar isn't a long scroll.
    const twoRow = Platform.isPhone;
    // Phone: two rows. Top = the bar itself (✕ [undo·redo·headings·bold/italic/strike] ✓). Bottom = tools2
    // (search + lists/quote/code/link/date/time). The dedicated essentials bar is gone — everything moved up.
    const tools2 = twoRow ? contentEl.createDiv({ cls: 'tugtile-ed-tools2' }) : null;

    // Editor body: a single contenteditable surface. A <textarea> can only carry one uniform font, so it
    // can never size a heading line up. contenteditable can — each line keeps its literal markdown ('## ')
    // AND renders bigger (no Obsidian-style concealment). The visible text IS the editable text (one layer),
    // so the caret needs no overlay alignment. A scroll wrapper owns scrolling so touch-drag works unfocused.
    const scroll = contentEl.createDiv({ cls: 'tugtile-ed-scroll' });
    const ed = scroll.createDiv({ cls: 'tugtile-ed tugtile-ed-rich', attr: { contenteditable: 'true', spellcheck: 'false', autocapitalize: 'off' } });

    // --- Text <-> DOM model: each line is a top-level <div class="tg-line">; an empty line is <div><br></div>. ---
    const textOfLine = (d) => (d ? d.textContent : '');
    const getText = () => {
      const kids = ed.childNodes;
      let allDiv = kids.length > 0;
      for (const n of kids) { if (!(n.nodeType === 1 && n.tagName === 'DIV')) { allDiv = false; break; } }
      if (allDiv) return Array.from(kids).map((d) => d.textContent).join('\n');
      // Transient fallback (right after a native keystroke, before re-highlight normalizes the DOM back to clean line divs)
      let out = '';
      const walk = (n) => {
        if (n.nodeType === 3) { out += n.nodeValue; return; }
        if (n.tagName === 'BR') { out += '\n'; return; }
        if ((n.tagName === 'DIV' || n.tagName === 'P') && out && !out.endsWith('\n')) out += '\n';
        for (const ch of n.childNodes) walk(ch);
      };
      for (const n of kids) walk(n);
      return out.replace(/\u200b/g, '');
    };
    let lineCount = 0;
    const render = (text) => { ed.innerHTML = highlightMarkdown(text); lineCount = ed.children.length; };

    // --- Caret <-> character offset, so toolbar ops / find-replace / undo can address the document linearly ---
    const charsBeforeInLine = (lineEl, node, off) => {
      if (node === lineEl) { let c = 0; for (let i = 0; i < off; i++) c += (lineEl.childNodes[i].textContent || '').length; return c; }
      let count = 0, done = false;
      const walk = (n) => {
        if (done) return;
        if (n === node) { count += off; done = true; return; }
        if (n.nodeType === 3) { count += n.nodeValue.length; return; }
        for (const ch of n.childNodes) { walk(ch); if (done) return; }
      };
      walk(lineEl);
      return count;
    };
    const offsetAt = (node, off) => {
      const lines = Array.from(ed.children);
      if (node === ed) { let t = 0; for (let i = 0; i < off; i++) t += textOfLine(lines[i]).length + 1; return t; }
      let lineEl = node; while (lineEl && lineEl.parentNode !== ed) lineEl = lineEl.parentNode;
      const idx = lines.indexOf(lineEl); if (idx < 0) return 0;
      let t = 0; for (let i = 0; i < idx; i++) t += textOfLine(lines[i]).length + 1;
      return t + charsBeforeInLine(lineEl, node, off);
    };
    const locateInLine = (lineEl, within) => {
      let remaining = within, res = null;
      const walk = (n) => {
        if (res) return;
        if (n.nodeType === 3) { const L = n.nodeValue.length; if (remaining <= L) { res = { node: n, off: remaining }; return; } remaining -= L; return; }
        for (const ch of n.childNodes) { walk(ch); if (res) return; }
      };
      walk(lineEl);
      return res || { node: lineEl, off: 0 };
    };
    const locate = (target) => {
      const lines = Array.from(ed.children); let acc = 0;
      for (let i = 0; i < lines.length; i++) { const len = textOfLine(lines[i]).length; if (target <= acc + len) return locateInLine(lines[i], target - acc); acc += len + 1; }
      const last = lines[lines.length - 1];
      return last ? locateInLine(last, textOfLine(last).length) : { node: ed, off: 0 };
    };
    let lastSel = { start: 0, end: 0 };
    const readSel = () => {
      const s = window.getSelection();
      if (!s || s.rangeCount === 0) return null;
      const r = s.getRangeAt(0);
      if (!ed.contains(r.startContainer)) return null;
      return { start: offsetAt(r.startContainer, r.startOffset), end: offsetAt(r.endContainer, r.endOffset) };
    };
    const sel = () => readSel() || lastSel;
    const setSel = (s, e) => {
      const a = locate(s), b = locate(e === undefined ? s : e);
      const r = document.createRange(); r.setStart(a.node, a.off); r.setEnd(b.node, b.off);
      const ws = window.getSelection(); ws.removeAllRanges(); ws.addRange(r);
      lastSel = { start: s, end: (e === undefined ? s : e) };
    };
    ['keyup', 'mouseup', 'touchend'].forEach((ev) => ed.addEventListener(ev, () => { const r = readSel(); if (r) lastSel = r; }));

    // --- Undo / redo: our own snapshot stack (innerHTML rebuilds wipe the browser's native undo history) ---
    let hist = [], hi = -1;
    const pushHist = () => {
      const snap = { v: getText(), s: (readSel() || lastSel) };
      if (hi >= 0 && hist[hi].v === snap.v) { hist[hi].s = snap.s; return; }
      const seeded = hi >= 0;   // false only for the very first (seed) snapshot on mount
      hist = hist.slice(0, hi + 1); hist.push(snap); if (hist.length > 200) hist.shift(); hi = hist.length - 1;
      if (seeded && opts.onChange) opts.onChange();   // notify the host (marktile autosave) only for real edits, not the initial mount seed (B3)
    };
    const restore = (snap) => { render(snap.v); setSel(snap.s.start, snap.s.end); ed.focus(); };

    // --- Re-highlight, caret-preserving. Skipped while an IME is composing so CJK input is never interrupted. ---
    let composing = false, syncT = null;
    const rehighlight = () => { const r = readSel() || lastSel; render(getText()); setSel(r.start, r.end); };
    // Fast path: re-highlight ONLY the caret's line in place (no whole-document rebuild). Returns false —
    // forcing a full rehighlight — whenever the structure changed (line added/removed, content merged, or a
    // ranged selection), so the worst case is exactly the old behavior.
    const rehighlightLine = () => {
      const s = window.getSelection();
      if (!s || s.rangeCount === 0) return false;
      const r = s.getRangeAt(0);
      if (!r.collapsed || !ed.contains(r.startContainer)) return false;
      if (ed.children.length !== lineCount) return false;
      let lineEl = r.startContainer; while (lineEl && lineEl.parentNode !== ed) lineEl = lineEl.parentNode;
      if (!lineEl || lineEl.parentNode !== ed) return false;
      const text = lineEl.textContent;
      if (text.indexOf('\n') >= 0) return false;
      const within = charsBeforeInLine(lineEl, r.startContainer, r.startOffset);
      const p = highlightLineParts(text);
      lineEl.className = p.cls; lineEl.innerHTML = p.inner;
      const loc = locateInLine(lineEl, within);
      const nr = document.createRange(); nr.setStart(loc.node, loc.off); nr.collapse(true);
      s.removeAllRanges(); s.addRange(nr);
      const off = offsetAt(loc.node, loc.off); lastSel = { start: off, end: off };
      return true;
    };
    const scheduleSync = () => { clearTimeout(syncT); syncT = setTimeout(() => { if (composing) return; if (!rehighlightLine()) rehighlight(); pushHist(); }, 140); };
    ed.addEventListener('compositionstart', () => { composing = true; });
    ed.addEventListener('compositionend', () => { composing = false; scheduleSync(); });
    ed.addEventListener('input', () => { if (!composing) scheduleSync(); });

    render(orig); pushHist();
    const scrollCaretIntoView = () => { let el = locate(sel().start).node; if (el.nodeType === 3) el = el.parentElement; if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' }); };
    // Programmatic edit (toolbar / find-replace): replace whole text, set caret, snapshot for undo
    const applyEdit = (newText, s, e) => { if (ed.getAttribute('contenteditable') === 'false') return; render(newText); setSel(s, (e === undefined ? s : e)); ed.focus(); pushHist(); };   // read-only guard: blocks toolbar + find/replace edits when the host locks the editor (B2)

    // Adapter exposing the slice of the <textarea> API the rest of the modal (and attachDatePicker) relies on
    const ta = {
      get value() { return getText(); },
      set value(v) { render(v); },
      get selectionStart() { return sel().start; },
      get selectionEnd() { return sel().end; },
      setSelectionRange(s, e) { setSel(s, e); },
      focus() { ed.focus(); },
      get scrollTop() { return scroll.scrollTop; }, set scrollTop(y) { scroll.scrollTop = y; },
      get clientHeight() { return scroll.clientHeight; },
      getBoundingClientRect() { return ed.getBoundingClientRect(); },
      addEventListener(...a) { ed.addEventListener(...a); },
      setAttribute() {},
    };

    // ---- Find / replace (toggled by the 🔍 toolbar button) ----
    const findbar = contentEl.createDiv({ cls: 'tugtile-ed-find' });
    contentEl.insertBefore(findbar, scroll);   // Between the toolbar and the editor body
    findbar.style.display = 'none';
    const findInp = findbar.createEl('input', { cls: 'tugtile-ed-find-i', type: 'text', attr: { placeholder: t('findPlaceholder') } });
    const findN = findbar.createSpan({ cls: 'tugtile-ed-find-n' });
    const replInp = findbar.createEl('input', { cls: 'tugtile-ed-find-i', type: 'text', attr: { placeholder: t('replacePlaceholder') } });
    const lc = (s) => (s || '').toLowerCase();
    const updateN = () => { const term = findInp.value; findN.textContent = term ? String(lc(ta.value).split(lc(term)).length - 1) : ''; };
    const findNext = (back) => {
      const term = findInp.value; if (!term) return;
      const hay = lc(ta.value), needle = lc(term);
      let idx;
      if (back) { idx = hay.lastIndexOf(needle, Math.max(0, ta.selectionStart - 1)); if (idx < 0) idx = hay.lastIndexOf(needle); }
      else { idx = hay.indexOf(needle, ta.selectionEnd); if (idx < 0) idx = hay.indexOf(needle); }   // wrap around
      if (idx < 0) return;
      ed.focus(); setSel(idx, idx + term.length); scrollCaretIntoView();
    };
    const doReplace = () => {
      const term = findInp.value; if (!term) return;
      const v = getText(), s = sel().start, e = sel().end;
      if (lc(v.slice(s, e)) === lc(term)) applyEdit(v.slice(0, s) + replInp.value + v.slice(e), s + replInp.value.length);
      findNext(false); updateN();
    };
    const doReplaceAll = () => {
      const term = findInp.value; if (!term) return;
      const re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      applyEdit(getText().replace(re, replInp.value), sel().start); updateN();
    };
    const toggleFind = (show) => {
      const on = (show === undefined) ? (findbar.style.display === 'none') : show;
      findbar.style.display = on ? '' : 'none';
      if (on) { updateN(); setTimeout(() => findInp.focus(), 0); } else { ta.focus(); }
    };
    const mkFb = (icon, aria, fn) => { const b = findbar.createEl('button', { cls: 'tugtile-iconbtn tugtile-ed-find-b' }); setIcon(b.createSpan(), icon); b.setAttribute('aria-label', aria); b.addEventListener('mousedown', (e) => e.preventDefault()); b.addEventListener('click', fn); b.addEventListener('touchstart', (e) => { e.preventDefault(); fn(); }, { passive: false }); };
    mkFb('chevron-up', t('findPrev'), () => findNext(true));
    mkFb('chevron-down', t('findNext'), () => findNext(false));
    mkFb('replace', t('replaceOne'), doReplace);
    mkFb('replace-all', t('replaceAll'), doReplaceAll);
    mkFb('x', t('cancel'), () => toggleFind(false));
    findInp.addEventListener('input', updateN);
    findInp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); findNext(!!e.shiftKey); } else if (e.key === 'Escape') { e.preventDefault(); toggleFind(false); } });

    // Editor shortcuts: edit the text model directly, then applyEdit re-highlights + snapshots undo; mousedown preventDefault retains the caret
    const wrap = (pre, post) => { const v = getText(), s = sel().start, e = sel().end; applyEdit(v.slice(0, s) + pre + v.slice(s, e) + post + v.slice(e), s + pre.length, e + pre.length); };
    const lineStartOf = (v, pos) => v.lastIndexOf('\n', pos - 1) + 1;
    const togglePre = (pre) => { const v = getText(), s = sel().start, ls = lineStartOf(v, s); const ln = v.slice(ls); const has = ln.startsWith(pre); const nv = has ? v.slice(0, ls) + ln.slice(pre.length) : v.slice(0, ls) + pre + ln; const np = Math.max(ls, s + (has ? -pre.length : pre.length)); applyEdit(nv, np); };
    const setHeading = (hashes) => { const v = getText(), s = sel().start, ls = lineStartOf(v, s); const rest = v.slice(ls); const m = /^#{1,6}\s/.exec(rest); const cur = m ? m[0].length : 0; const repl = (m && m[0] === hashes) ? '' : hashes; const nv = v.slice(0, ls) + repl + rest.slice(cur); const np = Math.max(ls, s + (repl.length - cur)); applyEdit(nv, np); };
    // Bind a toolbar button so a TAP fires the action (keeping editor focus) but a SWIPE scrolls the row instead.
    // The old approach fired on touchstart+preventDefault, which was hair-trigger and blocked horizontal scrolling.
    const bindTap = (b, run) => {
      let tx = 0, ty = 0, moved = false;
      b.addEventListener('mousedown', (e) => e.preventDefault());   // Mouse: prevents focus loss in the editor
      b.addEventListener('click', run);                             // Mouse click path (suppressed on touch by the touchend below)
      b.addEventListener('touchstart', (e) => { const t = e.touches[0]; tx = t.clientX; ty = t.clientY; moved = false; }, { passive: true });
      b.addEventListener('touchmove', (e) => { const t = e.touches[0]; if (Math.abs(t.clientX - tx) > 10 || Math.abs(t.clientY - ty) > 10) moved = true; }, { passive: true });
      b.addEventListener('touchend', (e) => { if (!moved) { e.preventDefault(); run(); } }, { passive: false });   // Fire only on a tap, not a scroll; preventDefault retains focus + blocks the synthetic click
    };
    const tbtn = (label, fn, icon, target, tip) => {
      const b = (target || tools).createEl('button', { cls: 'tugtile-iconbtn tugtile-ed-tool' });
      if (tip) b.setAttribute('aria-label', t(tip));   // hover tooltip + accessible name (every tool button — was missing)
      if (icon) setIcon(b.createSpan(), icon); else b.textContent = label;   // setIcon into a child <span>, NOT the <button> directly — iPad WebKit won't render an inline svg that's a direct button child
      bindTap(b, () => { fn(); ed.focus(); });   // fn (applyEdit / undo / redo) already re-renders and refocuses
    };
    const insertTok = (tok) => { const v = getText(), s = sel().start; applyEdit(v.slice(0, s) + tok + v.slice(s), s + tok.length); };
    const runs = {
      undo: () => { if (hi > 0) { hi--; restore(hist[hi]); } }, redo: () => { if (hi < hist.length - 1) { hi++; restore(hist[hi]); } },
      h1: () => setHeading('# '), h2: () => setHeading('## '), h3: () => setHeading('### '),
      bold: () => wrap('**', '**'), italic: () => wrap('*', '*'), strike: () => wrap('~~', '~~'),
      bullet: () => togglePre('- '), number: () => togglePre('1. '), check: () => togglePre('- [ ] '), quote: () => togglePre('> '),
      code: () => wrap('`', '`'), link: () => wrap('[[', ']]'),
      date: () => insertTok(host.dateTrigger || '@'), time: () => insertTok(host.timeTrigger || '@@'),
    };
    // Build the toolbar from EDITOR_TOOLS, honoring the per-button on/off settings; separators only appear between non-empty groups
    const en = host.plugin.settings.editorTools || {};
    // Phone rows: TOP = the bar's `tools` (search·undo·redo, the essentials); BOTTOM = tools2 (ALL format/insert
    // tools in one horizontally-scrollable row). 'rowbreak' is now a plain separator (phone seps are hidden anyway).
    let pendingSep = false;
    EDITOR_TOOLS.forEach((tk) => {
      if (tk === 'sep' || tk === 'rowbreak') { pendingSep = true; return; }
      if (en[tk.key] === false) return;   // honor per-button settings for ALL tools incl. search/undo/redo (so marktile can disable them); tugtile never sets these false → they stay on
      const target = tk.fixed ? tools : (twoRow ? tools2 : tools);   // fixed → bar; others → the second row on phone (the bar on desktop)
      if (pendingSep && target.childElementCount > 0) target.createDiv({ cls: 'tugtile-ed-sep' });   // separators (hidden in the compact phone rows) only between non-empty groups
      pendingSep = false;
      if (tk.key === 'search') {   // Special: toggles the find/replace bar (don't focus back to the textarea)
        const b = target.createEl('button', { cls: 'tugtile-iconbtn tugtile-ed-tool' });
        b.setAttribute('aria-label', t(tk.tip));   // "Find / replace"
        setIcon(b.createSpan(), 'search');   // span child, not the button (iPad svg-in-button fix)
        bindTap(b, () => toggleFind());
      } else {
        tbtn(tk.g, runs[tk.key], tk.icon, target, tk.tip);
      }
    });
    // Pure-source mode: if every tool is disabled and there's no ✕/✓ (marktile), drop the whole toolbar.
    if (!opts.onCancel && !opts.onSave && !tools.childElementCount && (!tools2 || !tools2.childElementCount)) { bar.remove(); if (tools2) tools2.remove(); }

    // Smart Enter: continue a list on newline (- / * / 1. / - [ ]); a second Enter on an empty item exits the
    // list. Runs through the proven applyEdit text-model (never touches the native Enter path), and only when
    // the caret line is actually a list item — otherwise it returns false and the native newline happens.
    const tryListContinue = () => {
      const r = readSel(); if (!r || r.start !== r.end) return false;   // collapsed caret only
      const res = listContinuation(getText(), r.start);
      if (!res) return false;
      applyEdit(res.text, res.caret);
      return true;
    };

    host.attachDatePicker(ta);
    ta.addEventListener('keydown', (e) => {
      if (host.isSubmitKey(e)) { e.preventDefault(); if (opts.onSubmit) opts.onSubmit(); return; }
      if (e.key === 'Escape' && opts.onEscape) { e.preventDefault(); opts.onEscape(); return; }   // hosts without a cancel action (marktile) let Escape fall through naturally
      if (e.key === 'Enter' && !e.isComposing && e.keyCode !== 229 && tryListContinue()) e.preventDefault();   // newline-producing Enter (submit already handled above) → continue the list if on one
      if (e.key === 'Tab' && !e.isComposing) {   // insert/remove a literal tab (contenteditable's default Tab just moves focus)
        e.preventDefault();
        const r = readSel(); if (!r) return;
        const res = tabEdit(getText(), r.start, r.end, e.shiftKey);
        if (res) applyEdit(res.text, res.caret);
      }
    });
    // Only auto-focus a fresh (empty) card — then the keyboard is ready to type. For existing content, DON'T focus: leave it to the user's tap, so the caret lands where they tap instead of jumping to the end.
    if (!orig) setTimeout(() => ta.focus(), 0);

    // iOS virtual keyboard handling. Two defenses, because visualViewport doesn't reliably shrink in Obsidian's
    // webview: (1) if it DOES, cap the sizing container to the visible height so the scroll region ends above the
    // keyboard; (2) regardless, keep the caret line within the top ~45% of the scroll viewport — which is above
    // where the keyboard sits even when the scroll area itself extends under it. The editor content carries a
    // tall bottom padding (CSS) so there's always room to scroll the last real line up.
    const vv = window.visualViewport;
    const sizer = contentEl.closest('.tugtile-edit-modal-full');   // ONLY the full-screen card modal; null in marktile's pane (don't clamp a leaf to vv.height — that mis-sizes desktop split panes) (L4)
    const keepCaretVisible = () => {
      const n = locate(sel().start).node;
      const lineEl = (n && n.nodeType === 3) ? n.parentElement : n;
      if (!lineEl || !lineEl.getBoundingClientRect) return;
      const lr = lineEl.getBoundingClientRect(), sr = scroll.getBoundingClientRect();
      const upper = sr.top + sr.height * 0.45;
      if (lr.bottom > upper) scroll.scrollTop += (lr.bottom - upper);
    };
    const applyVV = () => { if (vv && sizer) { sizer.style.height = vv.height + 'px'; sizer.style.maxHeight = vv.height + 'px'; } setTimeout(keepCaretVisible, 0); };
    if (vv) { vv.addEventListener('resize', applyVV); vv.addEventListener('scroll', applyVV); applyVV(); }
    ed.addEventListener('input', () => setTimeout(keepCaretVisible, 0));   // keep the caret above the keyboard as you type

  return {
    getValue: () => getText().replace(/\s+$/, ''),
    rawValue: () => getText(),
    setText: (text) => { if (ed.getAttribute('contenteditable') === 'false') return; render(text); pushHist(); },   // programmatic whole-document replace (TOC drag-reorder); pushHist → undoable + fires onChange (autosave). read-only guard like applyEdit.
    isDirty: () => getText().replace(/\s+$/, '') !== orig.replace(/\s+$/, ''),
    focus: () => ta.focus(),
    destroy: () => { clearTimeout(syncT); if (vv) { vv.removeEventListener('resize', applyVV); vv.removeEventListener('scroll', applyVV); } if (sizer) { sizer.style.height = ''; sizer.style.maxHeight = ''; } },
  };
}

// Full-screen, keyboard-safe source editor. Callback-driven (opts.text / opts.onSave / opts.onDiscard) so board cards, table rows, and the whole markdown file all reuse it.
// Host interface the editor needs from whatever embeds it — the board view, or a minimal marktile file host.
// This is the seam that lets the SAME editor open a kanban card OR a standalone .md file. A host duck-types
// this surface (BoardView already does; a marktile host no-ops the board-only parts):
//   _editModalOpen (writable flag), freezeBoard(), unfreezeBoard(), closePopup(), consumePendingReload(),
//   attachDatePicker(taAdapter), isSubmitKey(e)->bool, dateTrigger, timeTrigger, plugin.settings.editorTools
class TileEditModal extends Modal {
  constructor(app, view, opts) { super(app); this.view = view; this.host = (opts && opts.host) || view; this._opts = opts || {}; }
  onOpen() {
    this.host._editModalOpen = true;
    this.host.freezeBoard();
    this.modalEl.addClass('tugtile-edit-modal-full');
    this._ctrl = mountEditor(this.contentEl, { text: this._opts.text || '', onCancel: () => this._requestClose(), onSave: () => this._doClose('save'), onSubmit: () => this._doClose('save'), onEscape: () => this._requestClose() }, this.host);
  }
  _dirty() { return !!this._ctrl && this._ctrl.isDirty(); }
  close() {
    if (this._forceClose) { this._animateClose(); return; }
    // Implicit closing (backdrop click or iOS virtual keyboard collapse) → ignored to prevent accidental close or save. Dismissed only via Save/Cancel/Escape.
  }
  _requestClose() {   // Explicit cancel (Cancel button or Escape key)
    if (!this._dirty()) { this._doClose('discard'); return; }
    if (typeof window.confirm === 'function') { if (window.confirm(t('discardConfirm'))) this._doClose('discard'); /* otherwise do nothing */ }
    else this._doClose('save');   // Mobile devices without confirm dialog → save changes to prevent data loss
  }
  _animateClose() {
    if (this._closing) { return; } this._closing = true;
    // Reverse exit animation: appends class to trigger pop-out animation, then closes. Saving has already finished in _doClose → _save; the animation is purely visual and does not delay saving.
    this.modalEl.addClass('tugtile-ed-closing');
    setTimeout(() => super.close(), 300);   // Align with pop-out animation duration (0.32s)
  }
  _doClose(mode) {
    this._forceClose = true;
    if (mode === 'save') this._save();
    else if (this._opts.onDiscard) this._opts.onDiscard();   // e.g. board discards a newly inserted empty card
    this.close();
  }
  onClose() {
    if (this._ctrl) this._ctrl.destroy();
    this.host._editModalOpen = false;
    this.host.unfreezeBoard();
    this.host.closePopup();
    this.contentEl.empty();
    this.host.consumePendingReload();   // Process external modifications deferred during modal editing
  }
  _save() {
    if (this._done) return; this._done = true;
    const v = this._ctrl ? this._ctrl.getValue() : '';
    if (this._opts.onSave) this._opts.onSave(v);
  }
}


const VIEW_TYPE = 'marktile-editor';

// marktile settings. editorTools: per-button on/off (missing key = on), same convention as tugtile — uncheck
// everything and the toolbar disappears. defaultEditor: opt-in to register marktile as the default .md editor
// (off by default, so Obsidian's native editor stays the no-surprise default).
const DEFAULTS = { editorTools: {}, defaultEditor: false };

// The editor's board-only hooks are no-ops; a .md file never "submits" on Enter (Enter is always a newline).
function makeFileHost(plugin) {
  const tools = (plugin && plugin.settings && plugin.settings.editorTools) || {};
  return {
    _editModalOpen: false,
    freezeBoard() {}, unfreezeBoard() {}, closePopup() {}, consumePendingReload() {},
    attachDatePicker() {}, isSubmitKey() { return false; },
    dateTrigger: '@', timeTrigger: '@@',
    // date/time buttons insert tugtile's kanban-only syntax (meaningless in a plain note) → always off; everything
    // else follows the user's toolbar settings.
    plugin: { settings: { editorTools: Object.assign({}, tools, { date: false, time: false }) } },
  };
}

// A real editor pane for a .md file. TextFileView handles file load/save; we mount the shared editor into it
// and autosave on change. A header action switches the leaf back to Obsidian's native markdown editor.
class MarktileView extends TextFileView {
  constructor(leaf, plugin) { super(leaf); this.plugin = plugin; }   // plugin ref → the editor reads its toolbar settings
  getViewType() { return VIEW_TYPE; }
  getDisplayText() { return this.file ? this.file.basename : 'marktile'; }
  getIcon() { return 'square-m'; }   // marktile's identity = an 'M' badge (= its Seasoned mode), like tugtile's board = layout-dashboard
  async onOpen() {
    // Header actions register RIGHT-TO-LEFT (addAction renders in reverse), and Obsidian's own ⋯ sits rightmost.
    // Target order L→R: [→ tugtile] [→ Obsidian] [settings] [⋯]. So register settings → Obsidian → tugtile.
    this.addAction('settings', t('mtSettings'), () => { try { this.app.setting.open(); this.app.setting.openTabById(this.plugin.manifest.id); } catch (e) {} });
    this.addAction('file-text', t('mtBackToObsidian'), () => this.toObsidian());   // file-text = the conventional "native markdown" icon (Obsidian/Kanban/Excalidraw all use it)
    // tile-family interop: hand this file off to tugtile (open it as a kanban board), if it's installed (leftmost)
    if (this.app.plugins && this.app.plugins.enabledPlugins && this.app.plugins.enabledPlugins.has('tugtile')) {
      this.addAction('layout-dashboard', t('mtToTugtile'), () => this.toTugtile());
    }
    this.watchHeaderTitle();   // take over the header title (clear the redundant filename, drop in the control strip) — see _buildHeaderCtl
  }
  // ── Header takeover, ported 1:1 from tugtile's BoardView (same CSS classes → identical look). The filename is
  //    redundant (the tab shows it), so it's cleared; the strip = viewcycle + brand/lock. Phone → a content-top
  //    .tugtile__ctlbar (built in setViewData); desktop → injected into the .view-header-title here.
  //    viewcycle toggles Seasoned⇄Plain (togglePlain); brand/lock toggles read-only (toggleLock).
  _headerTitleEl() { return this.containerEl ? this.containerEl.querySelector('.view-header-title') : null; }
  decorateHeaderTitle() {
    const el = this._headerTitleEl();
    if (!el) return;
    if (Platform.isPhone) { if (el.textContent !== '') el.textContent = ''; return; }   // Phone: strip lives in the content ctlbar; keep the header title empty
    if (el.querySelector('.tugtile-headerctl')) return;   // Already built; skip (also prevents observer loops). Obsidian wipes it on updateHeader → we rebuild.
    el.textContent = '';
    this._buildHeaderCtl(el);
  }
  watchHeaderTitle() {
    const el = this._headerTitleEl();
    if (!el || this._titleObserver) return;
    this._titleObserver = new MutationObserver(() => this.decorateHeaderTitle());   // Obsidian resets the title on updateHeader → re-apply
    this._titleObserver.observe(el, { childList: true });
    this.decorateHeaderTitle();
  }
  _buildHeaderCtl(parent) {
    const wrap = parent.createSpan({ cls: 'tugtile-headerctl' });
    const vc = wrap.createSpan({ cls: 'tugtile-viewcycle' });   // toggles styled-Markdown ⇄ plain-text
    vc.setAttribute('role', 'button');
    vc.setAttribute('aria-label', t('mtModeToggle'));   // toggles Seasoned ⇄ Plain (NOT tugtile's board/table view switch)
    vc.onclick = (e) => { e.preventDefault(); e.stopPropagation(); this.togglePlain(); };
    this._viewCycleEl = vc;
    wrap.createSpan({ cls: 'tugtile-sep', text: '·' });
    const lk = wrap.createSpan({ cls: 'tugtile-brand' });   // brand suffix + lock icon = the read-only toggle
    lk.setAttribute('role', 'button');
    lk.setAttribute('aria-label', t('mtLockToggle'));   // locks the EDITOR read-only (marktile has no board)
    lk.onclick = (e) => { e.preventDefault(); e.stopPropagation(); this.toggleLock(); };
    this._lockBtnEl = lk;
    this.refreshCtl();
    return wrap;
  }
  refreshCtl() {
    const vc = this._viewCycleEl;
    if (vc && vc.isConnected) {
      vc.empty();
      setIcon(vc.createSpan({ cls: 'tugtile-viewcycle-icon' }), this._plain ? 'square-code' : 'square-m');   // Seasoned = square-m (= marktile's identity); Plain = square-code (raw source)
      vc.createSpan({ cls: 'tugtile-viewcycle-name', text: this._plain ? t('mtModePlain') : t('mtModeSeasoned') });
    }
    const lk = this._lockBtnEl;
    if (lk && lk.isConnected) {
      lk.empty();
      lk.createSpan({ cls: 'tugtile-brand-text', text: this._locked ? t('mtBrandLocked') : t('mtBrand') });
      setIcon(lk.createSpan({ cls: 'tugtile-lock-icon' }), this._locked ? 'lock' : 'lock-open');
    }
  }
  // Plain mode: neutralize ALL editor styling (CSS: .tugtile-plain) → a bare plain-text markdown editor.
  // Mode 1 = the styled editor (headings grow, bold is bold); Mode 2 = plain. No rendering, pure CSS.
  togglePlain() {
    this._plain = !this._plain;
    this.contentEl.toggleClass('tugtile-plain', this._plain);
    this.refreshCtl();
  }
  // Lock: make the editor read-only. Obsidian has no save step (whatever you change IS saved), so this guards
  // against stray edits/taps. Disables the contenteditable + (via CSS) the toolbar.
  toggleLock() {
    this._locked = !this._locked;
    this._applyLock();
    this.refreshCtl();
  }
  _applyLock() {
    const ed = this.contentEl.querySelector('.tugtile-ed-rich');
    if (ed) ed.setAttribute('contenteditable', String(!this._locked));
    this.contentEl.toggleClass('tugtile--locked', !!this._locked);
  }
  // Table of contents: a toggle side panel of H1–H3. The toggle button is added by the shared editor (onToc hook)
  // in the ✕-close slot of marktile's ancestor, tugtile's card modal. Click a heading → scroll the editor to it.
  toggleToc(force) {
    this._tocOpen = (force === undefined) ? !this._tocOpen : !!force;
    if (this._tocOpen) this._ensureTocPanel();
    this.contentEl.toggleClass('marktile-toc-open', this._tocOpen);   // show/hide FIRST so the panel appears even if buildToc throws (and it slides in via the transition)
    if (this._tocOpen) this.buildToc();
  }
  _ensureTocPanel() {
    if (this._tocPanel && this._tocPanel.isConnected) return;
    this._tocPanel = this.contentEl.createDiv({ cls: 'marktile-toc' });   // absolute-positioned overlay; CSS slides it in when .marktile-toc-open is set
  }
  _refreshTocSoon() {   // headings change as you type → rebuild, debounced, only while the panel is open
    if (!this._tocOpen) return;
    clearTimeout(this._tocT);
    this._tocT = setTimeout(() => { if (this._tocOpen) this.buildToc(); }, 250);
  }
  buildToc() {
    const ed = this.contentEl.querySelector('.tugtile-ed-rich');
    if (!ed || !this._tocPanel) return;
    const scroll = this.contentEl.querySelector('.tugtile-ed-scroll');   // anchor the panel to the editor content top, BELOW the toolbar(s), so the toggle button stays tappable
    if (scroll) this._tocPanel.style.top = scroll.offsetTop + 'px';
    if (this._tocSortable) { try { this._tocSortable.destroy(); } catch (e) {} this._tocSortable = null; }   // rebuilt below; drop the stale instance bound to the old list
    this._tocPanel.empty();
    this._tocPanel.createDiv({ cls: 'marktile-toc-title', text: t('mtToc') });
    const list = this._tocPanel.createDiv({ cls: 'marktile-toc-list' });
    const lineEls = ed.querySelectorAll('.tg-line');   // index-aligned with source lines (one div per line)
    const heads = tocHeadings(this._ctrl ? this._ctrl.rawValue() : '');
    if (!heads.length) { list.createDiv({ cls: 'marktile-toc-empty', text: t('mtTocEmpty') }); return; }
    heads.forEach((h) => {
      const item = list.createDiv({ cls: 'marktile-toc-item marktile-toc-l' + h.level, text: h.text || '—' });
      item.onclick = () => {
        const el = lineEls[h.line];
        if (el) el.scrollIntoView({ block: 'start', behavior: 'smooth' });
        if (Platform.isPhone) this.toggleToc(false);   // phone TOC is a full-width overlay → close it so the jump is visible
      };
    });
    // Drag-reorder (level b: a section moves whole, levels never change). List items index-align with heads order.
    // Touch options borrowed 1:1 from tugtile's tile Sortable: forceFallback + fallbackOnBody fix the "ghost
    // detaches from the finger" offset (native HTML5 DnD mistracks on iOS; the clone is mis-positioned inside the
    // panel's transformed/absolute context — fallbackOnBody re-parents it to <body>). delay = long-press to start.
    // try/catch: drag is an enhancement — if Sortable is somehow unavailable, the TOC still lists + jumps.
    try {
      this._tocSortable = new Sortable(list, {
        draggable: '.marktile-toc-item',
        animation: 150,
        delay: 180, delayOnTouchOnly: true, touchStartThreshold: 8,
        forceFallback: true, fallbackOnBody: true, fallbackTolerance: 4,
        ghostClass: 'marktile-toc-item--ghost', chosenClass: 'marktile-toc-item--chosen', dragClass: 'marktile-toc-item--drag',
        onEnd: (evt) => this._reorderToc(evt.oldIndex, evt.newIndex),
      });
    } catch (e) {}
  }
  _reorderToc(from, to) {
    if (from == null || to == null || from === to) return;
    const text = this._ctrl ? this._ctrl.rawValue() : '';
    const next = moveSection(text, from, to);
    if (next !== text && this._ctrl && this._ctrl.setText) { this._ctrl.setText(next); this.requestSave(); }
    setTimeout(() => { if (this._tocOpen) this.buildToc(); }, 0);   // deferred: don't destroy the active Sortable from inside its own onEnd; rebuild reflects the new order (and reverts a no-op drag)
  }
  toTugtile() {
    if (!this.file) return;
    this.leaf.setViewState({ type: 'tugtile-board', active: true, state: { file: this.file.path } });
  }
  getViewData() { return this._ctrl ? this._ctrl.rawValue() : this.data; }
  setViewData(data, clear) {
    this.data = data;
    if (this._ctrl) { this._ctrl.destroy(); this._ctrl = null; }
    this.contentEl.empty();
    this._ctrl = mountEditor(this.contentEl, { text: data, onChange: () => { this.requestSave(); this._refreshTocSoon(); }, onToc: () => this.toggleToc() }, makeFileHost(this.plugin));
    // mountEditor() empties contentEl, so build the phone control strip AFTER it and prepend above the toolbar.
    if (Platform.isPhone) { const ctl = createDiv({ cls: 'tugtile__ctlbar' }); this._buildHeaderCtl(ctl); this.contentEl.prepend(ctl); }
    this.decorateHeaderTitle();   // desktop: inject into the header title; phone: keep the header filename cleared
    this.contentEl.toggleClass("tugtile-plain", !!this._plain);   // re-apply mode + lock state after the rebuild
    this.contentEl.addClass('marktile-ed');   // scope: marktile IS a markdown editor → monospace font in BOTH modes (not tugtile cards)
    this._applyLock();
    this._tocPanel = null;   // contentEl.empty() above destroyed the old panel node
    if (this._tocOpen) { this._ensureTocPanel(); this.contentEl.addClass('marktile-toc-open'); this.buildToc(); }   // restore the TOC across a reload
  }
  clear() {
    if (this._ctrl) { this._ctrl.destroy(); this._ctrl = null; }
    this.contentEl.empty();
    this.data = '';
  }
  async onClose() { clearTimeout(this._tocT); if (this._tocSortable) { try { this._tocSortable.destroy(); } catch (e) {} this._tocSortable = null; } this._tocPanel = null; if (this._titleObserver) { this._titleObserver.disconnect(); this._titleObserver = null; } if (this._ctrl) { this._ctrl.destroy(); this._ctrl = null; } }
  toObsidian() {
    if (!this.file) return;
    // tugtile globally hooks setViewState to reclaim board files as boards, so a plain setViewState('markdown')
    // on a board file bounces straight back to tugtile. Use tugtile's sanctioned escape-hatch API when present;
    // fall back to a direct switch when tugtile isn't installed (then there's no hook to dodge).
    const tg = this.app.plugins && this.app.plugins.plugins && this.app.plugins.plugins['tugtile'];
    if (tg && typeof tg.openAsObsidian === 'function') { tg.openAsObsidian(this.leaf); return; }
    this.leaf.setViewState({ type: 'markdown', active: true, state: { file: this.file.path, mode: 'source' } });
  }
}

// Settings tab: toolbar-button pickers (same style as tugtile; uncheck all → no toolbar) + the default-editor opt-in.
class MarktileSettingTab extends PluginSettingTab {
  constructor(app, plugin) { super(app, plugin); this.plugin = plugin; }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl('h3', { text: t('mtSettingsTitle') });
    containerEl.createEl('p', { cls: 'setting-item-description', text: t('mtSettingsDesc') });
    const toolPicker = (name, desc, filter) => new Setting(containerEl).setName(name).setDesc(desc).then((s) => {
      s.controlEl.addClass('tugtile-tools-pick');
      const et = this.plugin.settings.editorTools || (this.plugin.settings.editorTools = {});
      EDITOR_TOOLS.forEach((tk) => {
        if (tk === 'sep' || tk === 'rowbreak' || !filter(tk)) return;
        const lbl = s.controlEl.createEl('label', { cls: 'tugtile-tool-chk' });
        const cb = lbl.createEl('input', { type: 'checkbox' });
        cb.checked = et[tk.key] !== false;
        const glyph = lbl.createSpan({ cls: 'tugtile-tool-chk-i' });
        if (tk.icon) setIcon(glyph, tk.icon); else glyph.textContent = tk.g;   // same icon the toolbar uses
        cb.onchange = async () => { et[tk.key] = cb.checked; await this.plugin.saveSettings(); };
      });
    });
    toolPicker(t('mtEssentialTools'), t('mtEssentialToolsDesc'), (tk) => tk.fixed);             // search / undo / redo
    toolPicker(t('gFormatTools'), t('gFormatToolsDesc'), (tk) => tk.cat === 'format');           // headings / bold / lists…
    toolPicker(t('gInsertTools'), t('mtInsertToolsDesc'), (tk) => tk.cat === 'insert' && tk.key !== 'date' && tk.key !== 'time');   // code / link (date/time are board-only)
    new Setting(containerEl).setName(t('mtDefaultEditor')).setDesc(t('mtDefaultEditorDesc'))
      .addToggle((tg) => tg.setValue(this.plugin.settings.defaultEditor).onChange(async (v) => {
        this.plugin.settings.defaultEditor = v; await this.plugin.saveSettings(); new Notice(t('mtReloadRequired'));
      }));
  }
}

module.exports = class MarktilePlugin extends Plugin {
  async onload() {
    await this.loadSettings();
    this._mdBtns = [];   // injected native-header buttons, tracked so we can remove them on unload
    this.registerView(VIEW_TYPE, (leaf) => new MarktileView(leaf, this));
    this.addSettingTab(new MarktileSettingTab(this.app, this));
    // Opt-in (off by default): make marktile the default editor for .md. Board files still open here too — hop to
    // tugtile with the layout-dashboard button. Toggling needs an Obsidian reload to take effect.
    if (this.settings.defaultEditor) { try { this.registerExtensions(['md'], VIEW_TYPE); } catch (e) {} }
    this.addRibbonIcon('square-m', t('mtRibbon'), () => this.openActiveInMarktile());
    this.addCommand({
      id: 'open-in-marktile',
      name: t('mtOpenCmd'),
      checkCallback: (checking) => {
        const f = this.app.workspace.getActiveFile();
        const ok = !!(f && f.extension === 'md');
        if (ok && !checking) this.openActiveInMarktile();
        return ok;
      },
    });
    // Put an "open in marktile" button on every native markdown editor's header (the Obsidian → marktile hop)
    this.registerEvent(this.app.workspace.on('active-leaf-change', (leaf) => this.injectMdButton(leaf)));
    // Also inject into markdown panes already open when marktile loads (active-leaf-change won't fire for them)
    this.app.workspace.onLayoutReady(() => this.app.workspace.getLeavesOfType('markdown').forEach((l) => this.injectMdButton(l)));
  }
  onunload() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);   // Obsidian requirement: don't leave orphaned marktile views
    (this._mdBtns || []).forEach(({ view, el }) => { if (el) el.remove(); if (view) delete view._mtBtn; });   // Remove the buttons we injected into native headers
    this._mdBtns = [];
  }
  async loadSettings() { this.settings = Object.assign({}, DEFAULTS, await this.loadData()); }
  async saveSettings() { await this.saveData(this.settings); }
  injectMdButton(leaf) {
    this._mdBtns = (this._mdBtns || []).filter(({ el }) => el && el.isConnected);   // prune entries for closed leaves so dead MarkdownView refs can be GC'd (L3)
    const v = leaf && leaf.view;
    if (!v || typeof v.getViewType !== 'function' || v.getViewType() !== 'markdown' || v._mtBtn) return;
    try {
      const el = v.addAction('square-m', t('mtRibbon'), () => {
        const f = v.file;
        if (f) leaf.setViewState({ type: VIEW_TYPE, active: true, state: { file: f.path } });
      });
      v._mtBtn = el;
      this._mdBtns.push({ view: v, el });
    } catch (e) { /* header injection is best-effort; the command/ribbon are the reliable entry points */ }
  }
  openActiveInMarktile() {
    const f = this.app.workspace.getActiveFile();
    if (!f || f.extension !== 'md') { new Notice(t('mtNoFile')); return; }
    const leaf = this.app.workspace.getLeaf(false);
    leaf.setViewState({ type: VIEW_TYPE, active: true, state: { file: f.path } });
  }
};
