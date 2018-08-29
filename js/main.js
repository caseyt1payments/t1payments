/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var e=function(){};e.version="2.0.5",window.addEventListener("mousewheel",function(){});var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var o,s,a="ScrollMagic.Controller",l="FORWARD",c="REVERSE",u="PAUSED",f=n.defaults,d=this,h=i.extend({},f,r),g=[],p=!1,v=0,m=u,w=!0,y=0,S=!0,b=function(){for(var e in h)f.hasOwnProperty(e)||delete h[e];if(h.container=i.get.elements(h.container)[0],!h.container)throw a+" init failed.";w=h.container===window||h.container===document.body||!document.body.contains(h.container),w&&(h.container=window),y=z(),h.container.addEventListener("resize",T),h.container.addEventListener("scroll",T),h.refreshInterval=parseInt(h.refreshInterval)||f.refreshInterval,E()},E=function(){h.refreshInterval>0&&(s=window.setTimeout(A,h.refreshInterval))},x=function(){return h.vertical?i.get.scrollTop(h.container):i.get.scrollLeft(h.container)},z=function(){return h.vertical?i.get.height(h.container):i.get.width(h.container)},C=this._setScrollPos=function(e){h.vertical?w?window.scrollTo(i.get.scrollLeft(),e):h.container.scrollTop=e:w?window.scrollTo(e,i.get.scrollTop()):h.container.scrollLeft=e},F=function(){if(S&&p){var e=i.type.Array(p)?p:g.slice(0);p=!1;var t=v;v=d.scrollPos();var n=v-t;0!==n&&(m=n>0?l:c),m===c&&e.reverse(),e.forEach(function(e){e.update(!0)})}},L=function(){o=i.rAF(F)},T=function(e){"resize"==e.type&&(y=z(),m=u),p!==!0&&(p=!0,L())},A=function(){if(!w&&y!=z()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){e=document.createEvent("Event"),e.initEvent("resize",!1,!1)}h.container.dispatchEvent(e)}g.forEach(function(e){e.refresh()}),E()};this._options=h;var O=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(i.type.Array(t))t.forEach(function(e){d.addScene(e)});else if(t instanceof e.Scene)if(t.controller()!==d)t.addTo(d);else if(g.indexOf(t)<0){g.push(t),g=O(g),t.on("shift.controller_sort",function(){g=O(g)});for(var n in h.globalSceneOptions)t[n]&&t[n].call(t,h.globalSceneOptions[n])}return d},this.removeScene=function(e){if(i.type.Array(e))e.forEach(function(e){d.removeScene(e)});else{var t=g.indexOf(e);t>-1&&(e.off("shift.controller_sort"),g.splice(t,1),e.remove())}return d},this.updateScene=function(t,n){return i.type.Array(t)?t.forEach(function(e){d.updateScene(e,n)}):n?t.update(!0):p!==!0&&t instanceof e.Scene&&(p=p||[],-1==p.indexOf(t)&&p.push(t),p=O(p),L()),d},this.update=function(e){return T({type:"resize"}),e&&F(),d},this.scrollTo=function(n,r){if(i.type.Number(n))C.call(h.container,n,r);else if(n instanceof e.Scene)n.controller()===d&&d.scrollTo(n.scrollOffset(),r);else if(i.type.Function(n))C=n;else{var o=i.get.elements(n)[0];if(o){for(;o.parentNode.hasAttribute(t);)o=o.parentNode;var s=h.vertical?"top":"left",a=i.get.offset(h.container),l=i.get.offset(o);w||(a[s]-=d.scrollPos()),d.scrollTo(l[s]-a[s],r)}}return d},this.scrollPos=function(e){return arguments.length?(i.type.Function(e)&&(x=e),d):x.call(d)},this.info=function(e){var t={size:y,vertical:h.vertical,scrollPos:v,scrollDirection:m,container:h.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(){return d},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,d.updateScene(g,!0)),d):S},this.destroy=function(e){window.clearTimeout(s);for(var t=g.length;t--;)g[t].destroy(e);return h.container.removeEventListener("resize",T),h.container.removeEventListener("scroll",T),i.cAF(o),null},b(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var o,s,a="BEFORE",l="DURING",c="AFTER",u=r.defaults,f=this,d=i.extend({},u,n),h=a,g=0,p={start:0,end:0},v=0,m=!0,w=function(){for(var e in d)u.hasOwnProperty(e)||delete d[e];for(var t in u)L(t);C()},y={};this.on=function(e,t){return i.type.Function(t)&&(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1];"*"!=r&&(y[r]||(y[r]=[]),y[r].push({namespace:i||"",callback:t}))})),f},this.off=function(e,t){return e?(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1]||"",o="*"===r?Object.keys(y):[r];o.forEach(function(e){for(var n=y[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete y[e]})}),f):f},this.trigger=function(t,n){if(t){var r=t.trim().split("."),i=r[0],o=r[1],s=y[i];s&&s.forEach(function(t){o&&o!==t.namespace||t.callback.call(f,new e.Event(i,t.namespace,f,n))})}return f},f.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&f.update())}).on("shift.internal",function(){S(),f.update()}),this.addTo=function(t){return t instanceof e.Controller&&s!=t&&(s&&s.removeScene(f),s=t,C(),b(!0),E(!0),S(),s.info("container").addEventListener("resize",x),t.addScene(f),f.trigger("add",{controller:s}),f.update()),f},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,f.update(!0)),f):m},this.remove=function(){if(s){s.info("container").removeEventListener("resize",x);var e=s;s=void 0,e.removeScene(f),f.trigger("remove")}return f},this.destroy=function(e){return f.trigger("destroy",{reset:e}),f.remove(),f.off("*.*"),null},this.update=function(e){if(s)if(e)if(s.enabled()&&m){var t,n=s.info("scrollPos");t=d.duration>0?(n-p.start)/(p.end-p.start):n>=p.start?1:0,f.trigger("update",{startPos:p.start,endPos:p.end,scrollPos:n}),f.progress(t)}else T&&h===l&&O(!0);else s.updateScene(f,!1);return f},this.refresh=function(){return b(),E(),f},this.progress=function(e){if(arguments.length){var t=!1,n=h,r=s?s.info("scrollDirection"):"PAUSED",i=d.reverse||e>=g;if(0===d.duration?(t=g!=e,g=1>e&&i?0:1,h=0===g?a:l):0>e&&h!==a&&i?(g=0,h=a,t=!0):e>=0&&1>e&&i?(g=e,h=l,t=!0):e>=1&&h!==c?(g=1,h=c,t=!0):h!==l||i||O(),t){var o={progress:g,state:h,scrollDirection:r},u=h!=n,p=function(e){f.trigger(e,o)};u&&n!==l&&(p("enter"),p(n===a?"start":"end")),p("progress"),u&&h!==l&&(p(h===a?"start":"end"),p("leave"))}return f}return g};var S=function(){p={start:v+d.offset},s&&d.triggerElement&&(p.start-=s.info("size")*d.triggerHook),p.end=p.start+d.duration},b=function(e){if(o){var t="duration";F(t,o.call(f))&&!e&&(f.trigger("change",{what:t,newval:d[t]}),f.trigger("shift",{reason:t}))}},E=function(e){var n=0,r=d.triggerElement;if(s&&r){for(var o=s.info(),a=i.get.offset(o.container),l=o.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=i.get.offset(r);o.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}var u=n!=v;v=n,u&&!e&&f.trigger("shift",{reason:"triggerElementPosition"})},x=function(){d.triggerHook>0&&f.trigger("shift",{reason:"containerResize"})},z=i.extend(r.validate,{duration:function(e){if(i.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(i.type.Function(e)){o=e;try{e=parseFloat(o())}catch(t){e=-1}}if(e=parseFloat(e),!i.type.Number(e)||0>e)throw o?(o=void 0,0):0;return e}}),C=function(e){e=arguments.length?[e]:Object.keys(z),e.forEach(function(e){var t;if(z[e])try{t=z[e](d[e])}catch(n){t=u[e]}finally{d[e]=t}})},F=function(e,t){var n=!1,r=d[e];return d[e]!=t&&(d[e]=t,C(e),n=r!=d[e]),n},L=function(e){f[e]||(f[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),F(e,t)&&(f.trigger("change",{what:e,newval:d[e]}),r.shifts.indexOf(e)>-1&&f.trigger("shift",{reason:e})),f):d[e]})};this.controller=function(){return s},this.state=function(){return h},this.scrollOffset=function(){return p.start},this.triggerPosition=function(){var e=d.offset;return s&&(e+=d.triggerElement?v:s.info("size")*f.triggerHook()),e};var T,A;f.on("shift.internal",function(e){var t="duration"===e.reason;(h===c&&t||h===l&&0===d.duration)&&O(),t&&_()}).on("progress.internal",function(){O()}).on("add.internal",function(){_()}).on("destroy.internal",function(e){f.removePin(e.reset)});var O=function(e){if(T&&s){var t=s.info(),n=A.spacer.firstChild;if(e||h!==l){var r={position:A.inFlow?"relative":"absolute",top:0,left:0},o=i.css(n,"position")!=r.position;A.pushFollowers?d.duration>0&&(h===c&&0===parseFloat(i.css(A.spacer,"padding-top"))?o=!0:h===a&&0===parseFloat(i.css(A.spacer,"padding-bottom"))&&(o=!0)):r[t.vertical?"top":"left"]=d.duration*g,i.css(n,r),o&&_()}else{"fixed"!=i.css(n,"position")&&(i.css(n,{position:"fixed"}),_());var u=i.get.offset(A.spacer,!0),f=d.reverse||0===d.duration?t.scrollPos-p.start:Math.round(g*d.duration*10)/10;u[t.vertical?"top":"left"]+=f,i.css(A.spacer.firstChild,{top:u.top,left:u.left})}}},_=function(){if(T&&s&&A.inFlow){var e=h===l,t=s.info("vertical"),n=A.spacer.firstChild,r=i.isMarginCollapseType(i.css(A.spacer,"display")),o={};A.relSize.width||A.relSize.autoFullWidth?e?i.css(T,{width:i.get.width(A.spacer)}):i.css(T,{width:"100%"}):(o["min-width"]=i.get.width(t?T:n,!0,!0),o.width=e?o["min-width"]:"auto"),A.relSize.height?e?i.css(T,{height:i.get.height(A.spacer)-(A.pushFollowers?d.duration:0)}):i.css(T,{height:"100%"}):(o["min-height"]=i.get.height(t?n:T,!0,!r),o.height=e?o["min-height"]:"auto"),A.pushFollowers&&(o["padding"+(t?"Top":"Left")]=d.duration*g,o["padding"+(t?"Bottom":"Right")]=d.duration*(1-g)),i.css(A.spacer,o)}},N=function(){s&&T&&h===l&&!s.info("isDocument")&&O()},P=function(){s&&T&&h===l&&((A.relSize.width||A.relSize.autoFullWidth)&&i.get.width(window)!=i.get.width(A.spacer.parentNode)||A.relSize.height&&i.get.height(window)!=i.get.height(A.spacer.parentNode))&&_()},D=function(e){s&&T&&h===l&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(n=i.extend({},r,n),e=i.get.elements(e)[0],!e)return f;if("fixed"===i.css(e,"position"))return f;if(T){if(T===e)return f;f.removePin()}T=e;var o=T.parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];T.parentNode.style.display="none";var a="absolute"!=i.css(T,"position"),l=i.css(T,s.concat(["display"])),c=i.css(T,["width","height"]);T.parentNode.style.display=o,!a&&n.pushFollowers&&(n.pushFollowers=!1);var u=T.parentNode.insertBefore(document.createElement("div"),T),d=i.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||i.extend(d,i.css(T,["width","height"])),i.css(u,d),u.setAttribute(t,""),i.addClass(u,n.spacerClass),A={spacer:u,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&a&&i.isMarginCollapseType(l.display)},pushFollowers:n.pushFollowers,inFlow:a},!T.___origStyle){T.___origStyle={};var h=T.style,g=s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);g.forEach(function(e){T.___origStyle[e]=h[e]||""})}return A.relSize.width&&i.css(u,{width:c.width}),A.relSize.height&&i.css(u,{height:c.height}),u.appendChild(T),i.css(T,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(A.relSize.width||A.relSize.autoFullWidth)&&i.css(T,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",N),window.addEventListener("resize",N),window.addEventListener("resize",P),T.addEventListener("mousewheel",D),T.addEventListener("DOMMouseScroll",D),O(),f},this.removePin=function(e){if(T){if(h===l&&O(!0),e||!s){var n=A.spacer.firstChild;if(n.hasAttribute(t)){var r=A.spacer.style,o=["margin","marginLeft","marginRight","marginTop","marginBottom"];margins={},o.forEach(function(e){margins[e]=r[e]||""}),i.css(n,margins)}A.spacer.parentNode.insertBefore(n,A.spacer),A.spacer.parentNode.removeChild(A.spacer),T.parentNode.hasAttribute(t)||(i.css(T,T.___origStyle),delete T.___origStyle)}window.removeEventListener("scroll",N),window.removeEventListener("resize",N),window.removeEventListener("resize",P),T.removeEventListener("mousewheel",D),T.removeEventListener("DOMMouseScroll",D),T=void 0}return f};var R,k=[];return f.on("destroy.internal",function(e){f.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=i.get.elements(e);return 0!==n.length&&i.type.String(t)?(k.length>0&&f.removeClassToggle(),R=t,k=n,f.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?i.addClass:i.removeClass;k.forEach(function(e){t(e,R)})}),f):f},this.removeClassToggle=function(e){return e&&k.forEach(function(e){i.removeClass(e,R)}),f.off("start.internal_class end.internal_class"),R=void 0,k=[],f},w(),f};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!i.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=i.get.elements(e)[0];if(!t)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(i.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(e,t,n,i){e in r.defaults||(r.defaults[e]=t,r.validate[e]=n,i&&r.shifts.push(e))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){r=r||{};for(var i in r)this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var i=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},o=function(t,n,o,s){if(n=n===document?e:n,n===e)s=!1;else if(!f.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(o?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(o&&s){var l=i(n);a+="Height"===t?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,l=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<l.length;++t)c=e[l[t]+"RequestAnimationFrame"],u=e[l[t]+"CancelAnimationFrame"]||e[l[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),i=e.setTimeout(function(){t(n+r)},r);return a=n+r,i}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};f.String=function(e){return"string"===f(e)},f.Function=function(e){return"function"===f(e)},f.Array=function(e){return Array.isArray(e)},f.Number=function(e){return!f.Array(e)&&e-parseFloat(e)+1>=0},f.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=n.get={};return d.elements=function(t){var n=[];if(f.String(t))try{t=document.querySelectorAll(t)}catch(e){return n}if("nodelist"===f(t)||f.Array(t))for(var r=0,i=n.length=t.length;i>r;r++){var o=t[r];n[r]=f.DomElement(o)?o:d.elements(o)}else(f.DomElement(t)||t===document||t===e)&&(n=[t]);return n},d.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},d.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},d.width=function(e,t,n){return o("width",e,t,n)},d.height=function(e,t,n){return o("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(f.String(t))return i(e)[s(t)];if(f.Array(t)){var n={},r=i(e);return t.forEach(function(e){n[e]=r[s(e)]}),n}for(var o in t){var a=t[o];a==parseFloat(a)&&(a+="px"),e.style[s(o)]=a}},n}(window||{});return e});

/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,i){var s,r,n=t.cycle;for(s in n)r=n[s],t[s]="function"==typeof r?r.call(e[i],i):r[i%r.length];delete t.cycle},n=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=n.prototype.render},a=1e-10,o=i._internals,l=o.isSelector,h=o.isArray,_=n.prototype=i.to({},.1,{}),u=[];n.version="1.18.0",_.constructor=n,_.kill()._gc=!1,n.killTweensOf=n.killDelayedCallsTo=i.killTweensOf,n.getTweensOf=i.getTweensOf,n.lagSmoothing=i.lagSmoothing,n.ticker=i.ticker,n.render=i.render,_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},_.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,l=1/(1-r),h=this._firstPT;h;)o=h.s+h.c,h.c*=l,h.s=o-h.c,h=h._next}return this},_.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,n,l,h,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._time,m=this._totalTime,d=this._cycle,g=this._duration,v=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===g&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>v||v===a)&&v!==t&&(i=!0,v>a&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||v===t?t:a)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&v>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===g&&(this._initted||!this.vars.lazy||i)&&(v>=0&&(i=!0),this._rawPrevTime=c=!e||t||v===t?t:a)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(l=g+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(h=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&h>=.5)&&(h=1-h),3===_&&(h*=2),1===u?h*=h:2===u?h*=h*h:3===u?h*=h*h*h:4===u&&(h*=h*h*h*h),this.ratio=1===_?1-h:2===_?h:.5>this._time/g?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/g)),p===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=p,this._totalTime=m,this._rawPrevTime=v,this._cycle=d,o.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===m&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===g&&this._rawPrevTime===a&&c!==a&&(this._rawPrevTime=0))},n.to=function(t,e,i){return new n(t,e,i)},n.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new n(t,e,i)},n.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new n(t,e,s)},n.staggerTo=n.allTo=function(t,e,a,o,_,c,f){o=o||0;var p,m,d,g,v=a.delay||0,y=[],T=function(){a.onComplete&&a.onComplete.apply(a.onCompleteScope||this,arguments),_.apply(f||a.callbackScope||this,c||u)},x=a.cycle,w=a.startAt&&a.startAt.cycle;for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),l(t)&&(t=s(t))),t=t||[],0>o&&(t=s(t),t.reverse(),o*=-1),p=t.length-1,d=0;p>=d;d++){m={};for(g in a)m[g]=a[g];if(x&&r(m,t,d),w){w=m.startAt={};for(g in a.startAt)w[g]=a.startAt[g];r(m.startAt,t,d)}m.delay=v,d===p&&_&&(m.onComplete=T),y[d]=new n(t[d],e,m),v+=o}return y},n.staggerFrom=n.allFrom=function(t,e,i,s,r,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,n.staggerTo(t,e,i,s,r,a,o)},n.staggerFromTo=n.allFromTo=function(t,e,i,s,r,a,o,l){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,n.staggerTo(t,e,s,r,a,o,l)},n.delayedCall=function(t,e,i,s,r){return new n(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:r,overwrite:0})},n.set=function(t,e){return new n(t,0,e)},n.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var c=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(c(n,e)),r=s.length),n=n._next;return s},f=n.getAllTweens=function(e){return c(t._rootTimeline,e).concat(c(t._rootFramesTimeline,e))};n.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,l=f(0!=r),h=l.length,_=i&&s&&r;for(o=0;h>o;o++)a=l[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},n.killChildTweensOf=function(t,e){if(null!=t){var r,a,_,u,c,f=o.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),l(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)n.killChildTweensOf(t[u],e);else{r=[];for(_ in f)for(a=f[_].target.parentNode;a;)a===t&&(r=r.concat(f[_].tweens)),a=a.parentNode;for(c=r.length,u=0;c>u;u++)e&&r[u].totalTime(r[u].totalDuration()),r[u]._enabled(!1,!1)}}};var p=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=f(r),l=i&&s&&r,h=o.length;--h>-1;)a=o[h],(l||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return n.pauseAll=function(t,e,i){p(!0,t,e,i)},n.resumeAll=function(t,e,i){p(!1,t,e,i)},n.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||a,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},_.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},_.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},_.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},n},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],l(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));l(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,l=n.isArray,h=n.lazyTweens,_=n.lazyRender,u=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},f=function(t,e,i){var s,r,n=t.cycle;for(s in n)r=n[s],t[s]="function"==typeof r?r.call(e[i],i):r[i%r.length];delete t.cycle},p=a.pauseCallback=function(){},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.18.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=d._hasPause=!1,d.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,l,h,_){var u,p,d=new s({onComplete:l,onCompleteParams:h,callbackScope:_,smoothChildTiming:this.smoothChildTiming}),g=r.cycle;for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),p=0;t.length>p;p++)u=c(r),u.startAt&&(u.startAt=c(u.startAt),u.startAt.cycle&&f(u.startAt,t,p)),g&&f(u,t,p),d.to(t[p],e,u,p*n);return this.add(d,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,l){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,l)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var h,_,u,c,f,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&l(r)){for(a=a||"normal",o=o||0,h=n,_=r.length,u=0;_>u;u++)l(c=r[u])&&(c=new s({tweens:c})),this.add(c,h),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?h=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),h+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,p=f.rawTime()>r._startTime;f._timeline;)p&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},d.remove=function(e){if(e instanceof t){this._remove(e,!1);var i=e._timeline=e.vars.useFrames?t._rootFramesTimeline:t._rootTimeline;return e._startTime=(e._paused?e._pauseTime:i._time)-(e._reversed?e.totalDuration()-e._totalTime:e._totalTime)/e._timeScale,this}if(e instanceof Array||e&&e.push&&l(e)){for(var s=e.length;--s>-1;)this.remove(e[s]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,s,r||this);return n.vars.onComplete=n.vars.onReverseComplete=e,n.data="isPause",this._hasPause=!0,this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&l(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,l,u,c=this._dirty?this.totalDuration():this._totalDuration,f=this._time,p=this._startTime,m=this._timeScale,d=this._paused;if(t>=c)this._totalTime=this._time=c,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",l=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=c+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(l=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(l=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!e){if(t>=f)for(s=this._first;s&&t>=s._startTime&&!u;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(u=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!u;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(u=s),s=s._prev;u&&(this._time=t=u._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=t}if(this._time!==f&&this._first||i||l||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(u===s&&this.pause(),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);){if(s._active||f>=s._startTime&&!s._paused&&!s._gc){if(u===s){for(u=s._prev;u&&u.endTime()>this._time;)u.render(u._reversed?u.totalDuration()-(t-u._startTime)*u._timeScale:(t-u._startTime)*u._timeScale,e,i),u=u._prev;u=null,this.pause()}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=a}this._onUpdate&&(e||(h.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(p===this._startTime||m!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(h.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=e._internals,a=n.lazyTweens,o=n.lazyRender,l=new i(null,null,1,0),h=s.prototype=new t;return h.constructor=s,h.kill()._gc=!1,s.version="1.18.0",h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},h.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},h.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},h.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},h.tweenTo=function(t,i){i=i||{};var s,r,n,a={ease:l,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)a[r]=i[r];return a.time=this._parseTimeOrLabel(t),s=Math.abs(Number(a.time)-this._time)/this._timeScale||.001,n=new e(this,s,a),a.onStart=function(){n.target.paused(!0),n.vars.time!==n.target.time()&&s===n.duration()&&n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale),i.onStart&&n._callback("onStart")},n},h.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},h.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,l,h,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,m=this._time,d=this._totalTime,g=this._startTime,v=this._timeScale,y=this._rawPrevTime,T=this._paused,x=this._cycle;if(t>=f)this._locked||(this._totalTime=f,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,h="onComplete",_=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(_=!0,y>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=p,t=p+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==m||0===p&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(h="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(_=n=!0,h="onReverseComplete"):y>=0&&this._first&&(_=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=p||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(_=!0)}else if(0===p&&0>y&&(_=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(u=p+this._repeatDelay,this._cycle=this._totalTime/u>>0,0!==this._cycle&&this._cycle===this._totalTime/u&&this._cycle--,this._time=this._totalTime-this._cycle*u,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,t=p+1e-4):0>this._time?this._time=t=0:t=this._time)),this._hasPause&&!this._forcingPlayhead&&!e){if(t=this._time,t>=m)for(s=this._first;s&&t>=s._startTime&&!c;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(c=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!c;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(c=s),s=s._prev;c&&(this._time=t=c._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==x&&!this._locked){var w=this._yoyo&&0!==(1&x),b=w===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,k=this._cycle,S=this._rawPrevTime,R=this._time;if(this._totalTime=x*p,x>this._cycle?w=!w:this._totalTime+=p,this._time=m,this._rawPrevTime=0===p?y-1e-4:y,this._cycle=x,this._locked=!0,m=w?0:p,this.render(m,e,0===p),e||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),b&&(m=w?p+1e-4:-1e-4,this.render(m,!0,!1)),this._locked=!1,this._paused&&!T)return;this._time=R,this._totalTime=P,this._cycle=k,this._rawPrevTime=S}if(!(this._time!==m&&this._first||i||_||c))return d!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this._callback("onStart")),this._time>=m)for(s=this._first;s&&(l=s._next,!this._paused||T);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(c===s&&this.pause(),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,!this._paused||T);){if(s._active||m>=s._startTime&&!s._paused&&!s._gc){if(c===s){for(c=s._prev;c&&c.endTime()>this._time;)c.render(c._reversed?c.totalDuration()-(t-c._startTime)*c._timeScale:(t-c._startTime)*c._timeScale,e,i),c=c._prev;c=null,this.pause()}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=l}this._onUpdate&&(e||(a.length&&o(),this._callback("onUpdate"))),h&&(this._locked||this._gc||(g===this._startTime||v!==this._timeScale)&&(0===this._time||f>=this.totalDuration())&&(n&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this._callback(h)))},h.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,l=a.length;for(s=0;l>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},h.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},h.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},h.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},h.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},h.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},h.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},h.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},h.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},h.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},h.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},h.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",l=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},l=(t+e)/2,h=(e+i)/2,_=(i+s)/2,u=(l+h)/2,c=(h+_)/2,f=(c-u)/8;return r.b=l+(t-l)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+c)/2,a.b=c-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,o){var h,_,u,c,f,p,m,d,g,v,y,T,x,w=t.length-1,b=0,P=t[0].a;for(h=0;w>h;h++)f=t[b],_=f.a,u=f.d,c=t[b+1].d,o?(y=e[h],T=i[h],x=.25*(T+y)*r/(a?.5:s[h]||.5),p=u-(u-_)*(a?.5*r:0!==y?x/y:0),m=u+(c-u)*(a?.5*r:0!==T?x/T:0),d=u-(p+((m-p)*(3*y/(y+T)+.5)/4||0))):(p=u-.5*(u-_)*r,m=u+.5*(c-u)*r,d=u-(p+m)/2),p+=d,m+=d,f.c=g=p,f.b=0!==h?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=l(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=l(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,l,h,_,u,c,f=[];if(n)for(t=[n].concat(t),l=t.length;--l>-1;)"string"==typeof(c=t[l][s])&&"="===c.charAt(1)&&(t[l][s]=n[s]+Number(c.charAt(0)+c.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),f;for(l=0;o>l;l++)h=t[l][s],_=t[l+1][s],f[l]=new a(h,0,0,_),r&&(u=t[l+2][s],e[l]=(e[l]||0)+(_-h)*(_-h),i[l]=(i[l]||0)+(u-_)*(u-_));return f[l]=new a(t[l][s],0,0,t[l+1][s]),f},u=function(t,n,a,l,u,c){var f,p,m,d,g,v,y,T,x={},w=[],b=c||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(p in t[0])w.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,f=w.length;--f>-1;)if(p=w[f],Math.abs(b[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),c&&t.unshift(c),t.push(t[1]),c=t[t.length-3])}for(e.length=i.length=s.length=0,f=w.length;--f>-1;)p=w[f],r[p]=-1!==u.indexOf(","+p+","),x[p]=_(t,p,r[p],c);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!l){for(f=w.length;--f>-1;)if(r[p])for(m=x[w[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(f=s.length;--f>-1;)s[f]=Math.sqrt(s[f])}for(f=w.length,d=a?4:1;--f>-1;)p=w[f],m=x[p],h(m,n,a,l,r[p]),y&&(m.splice(0,d),m.splice(m.length-d,d));return x},c=function(t,e,i){e=e||"soft";var s,r,n,o,l,h,_,u,c,f,p,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(c in t[0])v.push(c);for(h=v.length;--h>-1;){for(c=v[h],m[c]=l=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][c]:"string"==typeof(p=t[_][c])&&"="===p.charAt(1)?i[c]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&_>1&&u-1>_&&(l[f++]=(s+l[f-2])/2),l[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=l[_],r=l[_+1],n=l[_+2],o=2===d?0:l[_+3],l[f++]=p=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);l.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,l,h,_,u,c,f,p=1/i,m=t.length;--m>-1;)for(c=t[m],n=c.a,a=c.d-n,o=c.c-n,l=c.b-n,s=r=0,_=1;i>=_;_++)h=p*_,u=1-h,s=r-(r=(h*h*a+3*u*(h*o+u*l))*h),f=m*i+_-1,e[f]=(e[f]||0)+s*s},p=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],l=0,h=0,_=e-1,u=[],c=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)l+=Math.sqrt(a[s]),n=s%e,c[n]=l,n===_&&(h+=l,n=s/e>>0,u[n]=c,o[n]=h,l=0,c=[]);return{length:h,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,l=e.values||[],h={},_=l[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;
        for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],h[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||h[s]!==l[0][s]&&(o=h);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(l,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):c(l,e.type,h),this._segCount=this._beziers[s].length,this._timeRes){var m=p(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,l,h,_,u,c=this._segCount,f=this._func,p=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&c-1>r){for(h=c-1;h>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(h=u.length-1;h>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?c-1:c*e>>0,o=(e-i*(1/c))*c;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],l=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(l=Math.round(l)),f[n]?p[n](l):p[n]=l;if(this._autoRotate){var d,g,v,y,T,x,w,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],x=b[r][3]||0,w=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,l=m?Math.atan2(T-v,y-g)*w+x:this._initialRotations[r],f[n]?p[n](l):p[n]=l)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=l,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,l){e instanceof Array&&(e={values:e}),l=new m;var h,_,u,c=e.values,f=c.length-1,p=[],d={};if(0>f)return o;for(h=0;f>=h;h++)u=i(t,c[h],a,o,l,f!==h),p[h]=u.end;for(_ in e)d[_]=e[_];return d.values=p,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=l,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(h=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",h,!1]]:null!=u.end.x?[["x","y","rotation",h,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),l._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,l={},h=a.prototype=new t("css");h.constructor=a,a.version="1.18.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var _,u,c,f,p,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,k=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,O=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,F=180/Math.PI,I={},E=document,N=function(t){return E.createElementNS?E.createElementNS("http://www.w3.org/1999/xhtml",t):E.createElement(t)},L=N("div"),X=N("img"),B=a._internals={_specialProps:l},j=navigator.userAgent,Y=function(){var t=j.indexOf("Android"),e=N("a");return c=-1!==j.indexOf("Safari")&&-1===j.indexOf("Chrome")&&(-1===t||Number(j.substr(t+8,1))>3),p=c&&6>Number(j.substr(j.indexOf("Version/")+8,1)),f=-1!==j.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),U=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=E.defaultView?E.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return Y||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(k,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},$=B.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,l,h,_=A.test(i),u=t,c=L.style,f=0>s;if(f&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild&&"v"!==r.charAt(0)&&"rem"!==r)c[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||E.body,l=u._gsCache,h=e.ticker.frame,l&&_&&l.time===h)return l.width*s/100;c[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(l=u._gsCache=u._gsCache||{},l.time=h,l.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return f?-o:o},H=B.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r,n={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r=e[i],(-1===r.indexOf("-transform")||ke===r)&&(n[r.replace(S,O)]=e.getPropertyValue(r));else for(i in e)(-1===i.indexOf("Transform")||Pe===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(S,O)]=e[i]);return Y||(n.opacity=U(t)),s=Ne(t,e,!1),n.rotation=s.rotation,n.skewX=s.skewX,n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.x=s.x,n.y=s.y,Re&&(n.z=s.z,n.rotationX=s.rotationX,n.rotationY=s.rotationY,n.scaleZ=s.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,s,r){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==h[a]&&(o=new pe(h,a,h[a],o)));if(s)for(a in s)"className"!==a&&(l[a]=s[a]);return{difs:l,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";(null==t||""===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="center"===s?"50%":"0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+r+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,"")),e.v=t),e||t},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,l,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),l="="===t.charAt(1),a=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:F)-(l?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},le=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},he=a.parseColor=function(t,e){var i,s,r,n,a,o,l,h,_,u,c;if(t)if("number"==typeof t)i=[t>>16,255&t>>8,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t])i=oe[t];else if("#"===t.charAt(0))4===t.length&&(s=t.charAt(1),r=t.charAt(2),n=t.charAt(3),t="#"+s+s+r+r+n+n),t=parseInt(t.substr(1),16),i=[t>>16,255&t>>8,255&t];else if("hsl"===t.substr(0,3))if(i=c=t.match(d),e){if(-1!==t.indexOf("="))return t.match(g)}else a=Number(i[0])%360/360,o=Number(i[1])/100,l=Number(i[2])/100,r=.5>=l?l*(o+1):l+o-l*o,s=2*l-r,i.length>3&&(i[3]=Number(t[3])),i[0]=le(a+1/3,s,r),i[1]=le(a,s,r),i[2]=le(a-1/3,s,r);else i=t.match(d)||oe.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),i.length>3&&(i[3]=Number(i[3]))}else i=oe.black;return e&&!c&&(s=i[0]/255,r=i[1]/255,n=i[2]/255,h=Math.max(s,r,n),_=Math.min(s,r,n),l=(h+_)/2,h===_?a=o=0:(u=h-_,o=l>.5?u/(2-h-_):u/(h+_),a=h===s?(r-n)/u+(n>r?6:0):h===r?(n-s)/u+2:(s-r)/u+4,a*=60),i[0]=0|a+.5,i[1]=0|100*o+.5,i[2]=0|100*l+.5),i},_e=function(t,e){var i,s,r,n=t.match(ue)||[],a=0,o=n.length?"":t;for(i=0;n.length>i;i++)s=n[i],r=t.substr(a,t.indexOf(s,a)-a),a+=r.length+s.length,s=he(s,e),3===s.length&&s.push(1),o+=r+(e?"hsla("+s[0]+","+s[1]+"%,"+s[2]+"%,"+s[3]:"rgba("+s.join(","))+")";return o},ue="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in oe)ue+="|"+h+"\\b";ue=RegExp(ue+")","gi"),a.colorStringFilter=function(t){var e,i=t[0]+t[1];ue.lastIndex=0,ue.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=_e(t[0],e),t[1]=_e(t[1],e))},e.defaultStringFilter||(e.defaultStringFilter=a.colorStringFilter);var ce=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(ue)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,c,f,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(p=t.replace(M,"|").split("|"),f=0;p.length>f;f++)p[f]=r(p[f]);return p.join(",")}if(e=(t.match(ue)||[n])[0],c=t.split(e).join("").match(v)||[],f=c.length,_>f--)for(;_>++f;)c[f]=i?c[0|(f-1)/2]:a[f];return o+c.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),c=0;n.length>c;c++)n[c]=r(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,_>c--)for(;_>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(h)+l}:function(t){return t}},fe=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return r.parse(e,o,n,a)}},pe=(B._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),me=(B._parseToProxy=function(t,e,i,s,r,n){var a,o,l,h,_,u=s,c={},f={},p=i._transform,m=I;for(i._transform=null,I=e,s=_=i.parse(t,e,s,r),I=m,n&&(i._transform=p,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,c[o]=s.s,n||(h=new pe(s,"s",o,h,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)l="xn"+a,o=s.p+"_"+l,f[o]=s.data[l],c[o]=s[l],n||(h=new pe(s,l,o,h,s.rxp[l]));s=s._next}return{proxy:c,end:f,firstMPT:h,pt:_}},B.CSSPropTween=function(t,e,s,r,a,o,l,h,_,u,c){this.t=t,this.p=e,this.s=s,this.c=r,this.n=l||e,t instanceof me||n.push(this.n),this.r=h,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===c?s+r:c,a&&(this._next=a,a._prev=this)}),de=function(t,e,i,s,r,n){var a=new me(t,e,i,s-i,r,-1,n);return a.b=i,a.e=a.xs0=s,a},ge=a.parseComplex=function(t,e,i,s,r,n,a,o,l,h){i=i||n||"",a=new me(t,e,0,0,a,h?2:1,null,!1,o,i,s),s+="";var u,c,f,p,m,v,y,T,x,w,b,P,k,S=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),O=S.length,A=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(S=S.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),O=S.length),O!==R.length&&(S=(n||"").split(" "),O=S.length),a.plugin=l,a.setRatio=h,ue.lastIndex=0,u=0;O>u;u++)if(p=S[u],m=R[u],T=parseFloat(p),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),A&&-1!==m.indexOf("px"),!0);else if(r&&ue.test(p))P=","===m.charAt(m.length-1)?"),":")",k=-1!==m.indexOf("hsl")&&Y,p=he(p,k),m=he(m,k),x=p.length+m.length>6,x&&!Y&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(Y||(x=!1),k?a.appendXtra(x?"hsla(":"hsl(",p[0],re(m[0],p[0]),",",!1,!0).appendXtra("",p[1],re(m[1],p[1]),"%,",!1).appendXtra("",p[2],re(m[2],p[2]),x?"%,":"%"+P,!1):a.appendXtra(x?"rgba(":"rgb(",p[0],m[0]-p[0],",",!0,!0).appendXtra("",p[1],m[1]-p[1],",",!0).appendXtra("",p[2],m[2]-p[2],x?",":P,!0),x&&(p=4>p.length?1:p[3],a.appendXtra("",p,(4>m.length?1:m[3])-p,P,!1))),ue.lastIndex=0;else if(v=p.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(f=0,c=0;v.length>c;c++)b=v[c],w=p.indexOf(b,f),a.appendXtra(p.substr(f,w-f),Number(b),re(y[c],b),"",A&&"px"===p.substr(w+b.length,2),0===c),f=w+b.length;a["xs"+a.l]+=p.substr(f)}else a["xs"+a.l]+=a.l?" "+p:p;if(-1!==s.indexOf("=")&&a.data){for(P=a.xs0+a.data.s,u=1;a.l>u;u++)P+=a["xs"+u]+a.data["xn"+u];a.e=P+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ve=9;for(h=me.prototype,h.l=h.pr=0;--ve>0;)h["xn"+ve]=0,h["xs"+ve]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new me(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ye=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||ce(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},Te=B._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ye(n[s],e)},xe=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";Te(t,{parser:function(t,i,s,r,n,a,h){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),l[s].parse(t,i,s,r,n,a,h)):(q("Error: "+e+" js file not loaded."),n)}})}};h=ye.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,l,h,_,u,c=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),l=i.replace(M,"|").split("|")):c&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,c&&(_=e.indexOf(c),u=i.indexOf(c),_!==u&&(-1===u?o[a]=o[a].split(c).join(""):-1===_&&(o[a]+=" "+c)));e=o.join(", "),i=l.join(", ")}return ge(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){Te(t,{parser:function(t,s,r,n,a,o){var l=new me(t,r,0,0,a,2,r,!1,i);return l.plugin=o,l.setRatio=e(t,s,n._tween,r),l},priority:i})},a.useSVGTransformAttr=c||f;var we,be="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Pe=W("transform"),ke=V+"transform",Se=W("transformOrigin"),Re=null!==W("perspective"),Oe=B.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Re?a.defaultForce3D||"auto":!1},Ae=window.SVGElement,Ce=function(t,e,i){var s,r=E.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},De=E.documentElement,Me=function(){var t,e,i,s=m||/Android/i.test(j)&&!window.chrome;return E.createElementNS&&!s&&(t=Ce("svg",De),e=Ce("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[Se]="50% 50%",e.style[Pe]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(f&&Re),De.removeChild(t)),s}(),ze=function(t,e,i,s,r){var n,o,l,h,_,u,c,f,p,m,d,g,v,y,T=t._gsTransform,x=Ee(t,!0);T&&(v=T.xOrigin,y=T.yOrigin),(!s||2>(n=s.split(" ")).length)&&(c=t.getBBox(),e=se(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=h=parseFloat(n[0]),i.yOrigin=_=parseFloat(n[1]),s&&x!==Ie&&(u=x[0],c=x[1],f=x[2],p=x[3],m=x[4],d=x[5],g=u*p-c*f,o=h*(p/g)+_*(-f/g)+(f*d-p*m)/g,l=h*(-c/g)+_*(u/g)-(u*d-c*m)/g,h=i.xOrigin=n[0]=o,_=i.yOrigin=n[1]=l),T&&(r||r!==!1&&a.defaultSmoothOrigin!==!1?(o=h-v,l=_-y,T.xOffset+=o*x[0]+l*x[2]-o,T.yOffset+=o*x[1]+l*x[3]-l):T.xOffset=T.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},Fe=function(t){return!!(Ae&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Ie=[1,0,0,1,0,0],Ee=function(t,e){var i,s,r,n,a,o=t._gsTransform||new Oe,l=1e5;if(Pe?s=Q(t,ke,null,!0):t.currentStyle&&(s=t.currentStyle.filter.match(C),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),o.x||0,o.y||0].join(","):""),i=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,(o.svg||t.getBBox&&Fe(t))&&(i&&-1!==(t.style[Pe]+"").indexOf("matrix")&&(s=t.style[Pe],i=0),r=t.getAttribute("transform"),i&&r&&(-1!==r.indexOf("matrix")?(s=r,i=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Ie;for(r=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ve=r.length;--ve>-1;)n=Number(r[ve]),r[ve]=(a=n-(n|=0))?(0|a*l+(0>a?-.5:.5))/l+n:n;return e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r},Ne=B.getTransform=function(t,i,s,n){if(t._gsTransform&&s&&!n)return t._gsTransform;var o,l,h,_,u,c,f=s?t._gsTransform||new Oe:new Oe,p=0>f.scaleX,m=2e-5,d=1e5,g=Re?parseFloat(Q(t,Se,i,!1,"0 0 0").split(" ")[2])||f.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(f.svg=!(!t.getBBox||!Fe(t)),f.svg&&(ze(t,Q(t,Se,r,!1,"50% 50%")+"",f,t.getAttribute("data-svg-origin")),we=a.useSVGTransformAttr||Me),o=Ee(t),o!==Ie){if(16===o.length){var y,T,x,w,b,P=o[0],k=o[1],S=o[2],R=o[3],O=o[4],A=o[5],C=o[6],D=o[7],M=o[8],z=o[9],I=o[10],E=o[12],N=o[13],L=o[14],X=o[11],B=Math.atan2(C,I);f.zOrigin&&(L=-f.zOrigin,E=M*L-o[12],N=z*L-o[13],L=I*L+f.zOrigin-o[14]),f.rotationX=B*F,B&&(w=Math.cos(-B),b=Math.sin(-B),y=O*w+M*b,T=A*w+z*b,x=C*w+I*b,M=O*-b+M*w,z=A*-b+z*w,I=C*-b+I*w,X=D*-b+X*w,O=y,A=T,C=x),B=Math.atan2(M,I),f.rotationY=B*F,B&&(w=Math.cos(-B),b=Math.sin(-B),y=P*w-M*b,T=k*w-z*b,x=S*w-I*b,z=k*b+z*w,I=S*b+I*w,X=R*b+X*w,P=y,k=T,S=x),B=Math.atan2(k,P),f.rotation=B*F,B&&(w=Math.cos(-B),b=Math.sin(-B),P=P*w+O*b,T=k*w+A*b,A=k*-b+A*w,C=S*-b+C*w,k=T),f.rotationX&&Math.abs(f.rotationX)+Math.abs(f.rotation)>359.9&&(f.rotationX=f.rotation=0,f.rotationY+=180),f.scaleX=(0|Math.sqrt(P*P+k*k)*d+.5)/d,f.scaleY=(0|Math.sqrt(A*A+z*z)*d+.5)/d,f.scaleZ=(0|Math.sqrt(C*C+I*I)*d+.5)/d,f.skewX=0,f.perspective=X?1/(0>X?-X:X):0,f.x=E,f.y=N,f.z=L,f.svg&&(f.x-=f.xOrigin-(f.xOrigin*P-f.yOrigin*O),f.y-=f.yOrigin-(f.yOrigin*k-f.xOrigin*A))}else if(!(Re&&!n&&o.length&&f.x===o[4]&&f.y===o[5]&&(f.rotationX||f.rotationY)||void 0!==f.x&&"none"===Q(t,"display",i))){var j=o.length>=6,Y=j?o[0]:1,U=o[1]||0,q=o[2]||0,V=j?o[3]:1;f.x=o[4]||0,f.y=o[5]||0,h=Math.sqrt(Y*Y+U*U),_=Math.sqrt(V*V+q*q),u=Y||U?Math.atan2(U,Y)*F:f.rotation||0,c=q||V?Math.atan2(q,V)*F+u:f.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(p?(h*=-1,c+=0>=u?180:-180,u+=0>=u?180:-180):(_*=-1,c+=0>=c?180:-180)),f.scaleX=h,f.scaleY=_,f.rotation=u,f.skewX=c,Re&&(f.rotationX=f.rotationY=f.z=0,f.perspective=v,f.scaleZ=1),f.svg&&(f.x-=f.xOrigin-(f.xOrigin*Y+f.yOrigin*q),f.y-=f.yOrigin-(f.xOrigin*U+f.yOrigin*V))}f.zOrigin=g;for(l in f)m>f[l]&&f[l]>-m&&(f[l]=0)}return s&&(t._gsTransform=f,f.svg&&(we&&t.style[Pe]?e.delayedCall(.001,function(){je(t.style,Pe)}):!we&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),f},Le=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,l=(0|Math.sin(r)*s.scaleX*a)/a,h=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,c=this.t.currentStyle;if(c){i=l,l=-h,h=-i,e=c.filter,u.filter="";var f,p,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+_,w=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,p=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+p*l),b+=p-(f*h+p*_)),v?(f=d/2,p=g/2,y+=", Dx="+(f-(f*o+p*l)+w)+", Dy="+(p-(f*h+p*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,k,S,R=8>m?1:-1;for(f=s.ieOffsetX||0,p=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>l?-l:l)*g))/2+w),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>h?-h:h)*d))/2+b),ve=0;4>ve;ve++)k=ee[ve],P=c[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(T,""))||0,S=i!==s[k]?2>ve?-s.ieOffsetX:-s.ieOffsetY:2>ve?f-s.ieOffsetX:p-s.ieOffsetY,u[k]=(s[k]=Math.round(i-S*(0===ve||2===ve?1:R)))+"px"}}},Xe=B.set3DTransformRatio=B.setTransformRatio=function(t){var e,i,s,r,n,a,o,l,h,_,u,c,p,m,d,g,v,y,T,x,w,b,P,k=this.data,S=this.t.style,R=k.rotation,O=k.rotationX,A=k.rotationY,C=k.scaleX,D=k.scaleY,M=k.scaleZ,F=k.x,I=k.y,E=k.z,N=k.svg,L=k.perspective,X=k.force3D;if(!(((1!==t&&0!==t||"auto"!==X||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&X||E||L||A||O)&&(!we||!N)&&Re))return R||k.skewX||N?(R*=z,b=k.skewX*z,P=1e5,e=Math.cos(R)*C,r=Math.sin(R)*C,i=Math.sin(R-b)*-D,n=Math.cos(R-b)*D,b&&"simple"===k.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,k.skewY&&(e*=v,r*=v)),N&&(F+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,I+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset,we&&(k.xPercent||k.yPercent)&&(m=this.t.getBBox(),F+=.01*k.xPercent*m.width,I+=.01*k.yPercent*m.height),m=1e-6,m>F&&F>-m&&(F=0),m>I&&I>-m&&(I=0)),T=(0|e*P)/P+","+(0|r*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+F+","+I+")",N&&we?this.t.setAttribute("transform","matrix("+T):S[Pe]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+T):S[Pe]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+C+",0,0,"+D+","+F+","+I+")",void 0;if(f&&(m=1e-4,m>C&&C>-m&&(C=M=2e-5),m>D&&D>-m&&(D=M=2e-5),!L||k.z||k.rotationX||k.rotationY||(L=0)),R||k.skewX)R*=z,d=e=Math.cos(R),g=r=Math.sin(R),k.skewX&&(R-=k.skewX*z,d=Math.cos(R),g=Math.sin(R),"simple"===k.skewType&&(v=Math.tan(k.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v,k.skewY&&(e*=v,r*=v))),i=-g,n=d;else{if(!(A||O||1!==M||L||N))return S[Pe]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) translate3d(":"translate3d(")+F+"px,"+I+"px,"+E+"px)"+(1!==C||1!==D?" scale("+C+","+D+")":""),void 0;e=n=1,i=r=0}h=1,s=a=o=l=_=u=0,c=L?-1/L:0,p=k.zOrigin,m=1e-6,x=",",w="0",R=A*z,R&&(d=Math.cos(R),g=Math.sin(R),o=-g,_=c*-g,s=e*g,a=r*g,h=d,c*=d,e*=d,r*=d),R=O*z,R&&(d=Math.cos(R),g=Math.sin(R),v=i*d+s*g,y=n*d+a*g,l=h*g,u=c*g,s=i*-g+s*d,a=n*-g+a*d,h*=d,c*=d,i=v,n=y),1!==M&&(s*=M,a*=M,h*=M,c*=M),1!==D&&(i*=D,n*=D,l*=D,u*=D),1!==C&&(e*=C,r*=C,o*=C,_*=C),(p||N)&&(p&&(F+=s*-p,I+=a*-p,E+=h*-p+p),N&&(F+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,I+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset),m>F&&F>-m&&(F=w),m>I&&I>-m&&(I=w),m>E&&E>-m&&(E=0)),T=k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?w:e)+x+(m>r&&r>-m?w:r)+x+(m>o&&o>-m?w:o),T+=x+(m>_&&_>-m?w:_)+x+(m>i&&i>-m?w:i)+x+(m>n&&n>-m?w:n),O||A?(T+=x+(m>l&&l>-m?w:l)+x+(m>u&&u>-m?w:u)+x+(m>s&&s>-m?w:s),T+=x+(m>a&&a>-m?w:a)+x+(m>h&&h>-m?w:h)+x+(m>c&&c>-m?w:c)+x):T+=",0,0,0,0,1,0,",T+=F+x+I+x+E+x+(L?1+-E/L:1)+")",S[Pe]=T};h=Oe.prototype,h.x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=h.xOffset=h.yOffset=0,h.scaleX=h.scaleY=h.scaleZ=1,Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,s,n,o,l){if(s._lastParsedTransform===l)return n;s._lastParsedTransform=l;var h,_,u,c,f,p,m,d,g,v,y=t._gsTransform,T=t.style,x=1e-6,w=be.length,b=l,P={},k="transformOrigin";if(l.display?(c=Q(t,"display"),T.display="block",h=Ne(t,r,!0,l.parseTransform),T.display=c):h=Ne(t,r,!0,l.parseTransform),s._transform=h,"string"==typeof b.transform&&Pe)c=L.style,c[Pe]=b.transform,c.display="block",c.position="absolute",E.body.appendChild(L),_=Ne(L,null,!1),E.body.removeChild(L),_.perspective||(_.perspective=h.perspective),null!=b.xPercent&&(_.xPercent=ne(b.xPercent,h.xPercent)),null!=b.yPercent&&(_.yPercent=ne(b.yPercent,h.yPercent));else if("object"==typeof b){if(_={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,h.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,h.scaleY),scaleZ:ne(b.scaleZ,h.scaleZ),x:ne(b.x,h.x),y:ne(b.y,h.y),z:ne(b.z,h.z),xPercent:ne(b.xPercent,h.xPercent),yPercent:ne(b.yPercent,h.yPercent),perspective:ne(b.transformPerspective,h.perspective)},d=b.directionalRotation,null!=d)if("object"==typeof d)for(c in d)b[c]=d[c];else b.rotation=d;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(_.x=0,_.xPercent=ne(b.x,h.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(_.y=0,_.yPercent=ne(b.y,h.yPercent)),_.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:h.rotation,h.rotation,"rotation",P),Re&&(_.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":h.rotationX||0,h.rotationX,"rotationX",P),_.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":h.rotationY||0,h.rotationY,"rotationY",P)),_.skewX=null==b.skewX?h.skewX:ae(b.skewX,h.skewX),_.skewY=null==b.skewY?h.skewY:ae(b.skewY,h.skewY),(u=_.skewY-h.skewY)&&(_.skewX+=u,_.rotation+=u)}for(Re&&null!=b.force3D&&(h.force3D=b.force3D,m=!0),h.skewType=b.skewType||h.skewType||a.defaultSkewType,p=h.force3D||h.z||h.rotationX||h.rotationY||_.z||_.rotationX||_.rotationY||_.perspective,p||null==b.scale||(_.scaleZ=1);--w>-1;)i=be[w],f=_[i]-h[i],(f>x||-x>f||null!=b[i]||null!=I[i])&&(m=!0,n=new me(h,i,h[i],f,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return f=b.transformOrigin,h.svg&&(f||b.svgOrigin)&&(g=h.xOffset,v=h.yOffset,ze(t,se(f),_,b.svgOrigin,b.smoothOrigin),n=de(h,"xOrigin",(y?h:_).xOrigin,_.xOrigin,n,k),n=de(h,"yOrigin",(y?h:_).yOrigin,_.yOrigin,n,k),(g!==h.xOffset||v!==h.yOffset)&&(n=de(h,"xOffset",y?g:h.xOffset,h.xOffset,n,k),n=de(h,"yOffset",y?v:h.yOffset,h.yOffset,n,k)),f=we?null:"0px 0px"),(f||Re&&p&&h.zOrigin)&&(Pe?(m=!0,i=Se,f=(f||Q(t,i,r,!1,"50% 50%"))+"",n=new me(T,i,0,0,n,-1,k),n.b=T[i],n.plugin=o,Re?(c=h.zOrigin,f=f.split(" "),h.zOrigin=(f.length>2&&(0===c||"0px"!==f[2])?parseFloat(f[2]):c)||0,n.xs0=n.e=f[0]+" "+(f[1]||"50%")+" 0px",n=new me(h,"zOrigin",0,0,n,-1,n.n),n.b=c,n.xs0=n.e=h.zOrigin):n.xs0=n.e=f):se(f+"",h)),m&&(s._transformType=h.svg&&we||!p&&3!==this._transformType?2:3),n},prefix:!0}),Te("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Te("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,_,u,c,f,p,m,d,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=W(b[l])),u=_=Q(t,b[l],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),c=h=o[l],f=parseFloat(u),v=u.substr((f+"").length),y="="===c.charAt(1),y?(p=parseInt(c.charAt(0)+"1",10),c=c.substr(2),p*=parseFloat(c),g=c.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(c),g=c.substr((p+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),x=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(x/d)+"%"):"em"===g?(w=$(t,"borderLeft",1,"em"),u=T/w+"em",_=x/w+"em"):(u=T+"px",_=x+"px"),y&&(c=parseFloat(u)+p+g,h=parseFloat(_)+p+g)),a=ge(P,b[l],u+" "+_,c+" "+h,!1,"0px",a);return a},prefix:!0,formatter:ce("0px 0px 0px 0px",!1,!0)}),Te("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,l,h,_,u,c,f="background-position",p=r||Z(t,null),d=this.format((p?m?p.getPropertyValue(f+"-x")+" "+p.getPropertyValue(f+"-y"):p.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);
        if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(R,""),c&&"none"!==c)){for(o=d.split(" "),l=g.split(" "),X.setAttribute("src",c),h=2;--h>-1;)d=o[h],_=-1!==d.indexOf("%"),_!==(-1!==l[h].indexOf("%"))&&(u=0===h?t.offsetWidth-X.width:t.offsetHeight-X.height,o[h]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),Te("backgroundSize",{defaultValue:"0 0",formatter:se}),Te("perspective",{defaultValue:"0px",prefix:!0}),Te("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Te("transformStyle",{prefix:!0}),Te("backfaceVisibility",{prefix:!0}),Te("userSelect",{prefix:!0}),Te("margin",{parser:fe("marginTop,marginRight,marginBottom,marginLeft")}),Te("padding",{parser:fe("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Te("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,l,h;return 9>m?(l=t.currentStyle,h=8>m?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),Te("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Te("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),Te("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(ue)||["#000"])[0]}}),Te("borderWidth",{parser:fe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Te("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new me(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Be=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(x,"opacity="+r))};Te("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),Y?n=new me(l,"opacity",o,e-o,n):(n=new me(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Be),h&&(n=new me(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var je=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(k,"-$1").toLowerCase())):t.removeAttribute(e))},Ye=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:je(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};Te("className",{parser:function(t,e,s,n,a,o,l){var h,_,u,c,f,p=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new me(t,s,0,0,a,2),a.setRatio=Ye,a.pr=-11,i=!0,a.b=p,_=K(t,r),u=t._gsClassPT){for(c={},f=u.data;f;)c[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),h=J(t,_,K(t),l,c),t.setAttribute("class",p),a.data=h.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,h.difs,a,o)}});var Ue=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n,a=this.t.style,o=l.transform.parse;if("all"===this.e)a.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],l[i]&&(l[i].parse===o?r=!0:i="transformOrigin"===i?Se:l[i].p),je(a,i);r&&(je(a,Pe),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(Te("clearProps",{parser:function(t,e,s,r,n){return n=new me(t,s,0,0,n,2),n.setRatio=Ue,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ve=h.length;ve--;)xe(h[ve]);h=a.prototype,h._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var h,f,m,d,g,v,y,T,x,b=t.style;if(u&&""===b.zIndex&&(h=Q(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(d=b.cssText,h=K(t,r),b.cssText=d+";"+e,h=J(t,h,K(t)).difs,!Y&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,b.cssText=d),this._firstPT=f=e.className?l.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(x=3===this._transformType,Pe?c&&(u=!0,""===b.zIndex&&(y=Q(t,"zIndex",r),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),p&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):b.zoom=1,m=f;m&&m._next;)m=m._next;T=new me(t,"transform",0,0,null,2),this._linkCSSP(T,null,m),T.setRatio=Pe?Xe:Le,T.data=this._transform||Ne(t,r,!0),T.tween=o,T.pr=-1,n.pop()}if(i){for(;f;){for(v=f._next,m=d;m&&m.pr>f.pr;)m=m._next;(f._prev=m?m._prev:g)?f._prev._next=f:d=f,(f._next=m)?m._prev=f:g=f,f=v}this._firstPT=d}return!0},h.parse=function(t,e,i,n){var a,o,h,u,c,f,p,m,d,g,v=t.style;for(a in e)f=e[a],o=l[a],o?i=o.parse(t,f,a,this,i,n,e):(c=Q(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(f)?(d||(f=he(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=ge(v,a,c,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(h=parseFloat(c),p=h||0===h?c.substr((h+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(h=ie(t,a,r),p="px"):"left"===a||"top"===a?(h=H(t,a,r),p="px"):(h="opacity"!==a?0:1,p="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(T,"")):(u=parseFloat(f),m=d?f.replace(T,""):""),""===m&&(m=a in s?s[a]:p),f=u||0===u?(g?u+h:u)+m:e[a],p!==m&&""!==m&&(u||0===u)&&h&&(h=$(t,a,h,p),"%"===m?(h/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(c=h+"%")):"em"===m||"rem"===m?h/=$(t,a,1,m):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+h+m)),g&&(u+=h),!h&&0!==h||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new me(v,a,u||h||0,0,i,-1,a,!1,0,c,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:c):q("invalid "+a+" tween value: "+e[a]):(i=new me(v,a,h,u-h,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,c,f),i.xs0=m)):i=ge(v,a,c,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;){if(2!==r.type)if(r.r&&-1!==r.type)if(e=Math.round(r.s+r.c),r.type){if(1===r.type){for(s=r.l,i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}}else r.t[r.p]=e+r.xs0;else r.t[r.p]=r.e;else r.setRatio(t);r=r._next}},h._enableTransforms=function(t){this._transform=this._transform||Ne(this._target,r,!0),this._transformType=this._transform.svg&&we||!t&&3!==this._transformType?2:3};var qe=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var s=this._firstPT=new me(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=qe,s.data=this},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Ve=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Ve(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Ve(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o,l=e.to(t,i,s),h=[l],_=[],u=[],c=[],f=e._internals.reservedProps;for(t=l._targets||l.target,Ve(t,_,c),l.render(i,!0,!0),Ve(t,u),l.render(0,!0,!0),l._enabled(!0),r=c.length;--r>-1;)if(n=J(c[r],_[r],u[r]),n.firstMPT){n=n.difs;for(a in s)f[a]&&(n[a]=s[a]);o={};for(a in n)o[a]=_[r][a];h.push(e.fromTo(c[r],i,o,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=function(t){for(;t;)t.f||t.blob||(t.r=1),t=t._next},i=t.prototype;i._onInitAllProps=function(){for(var t,i,s,r=this._tween,n=r.vars.roundProps.join?r.vars.roundProps:r.vars.roundProps.split(","),a=n.length,o={},l=r._propLookup.roundProps;--a>-1;)o[n[a]]=1;for(a=n.length;--a>-1;)for(t=n[a],i=r._firstPT;i;)s=i._next,i.pg?i.t._roundProps(o,!0):i.n===t&&(2===i.f&&i.t?e(i.t._firstPT):(this._add(i.t,t,i.s,i.c),s&&(s._prev=i._prev),i._prev?i._prev._next=s:r._firstPT===i&&(r._firstPT=s),i._next=i._prev=null,r._propLookup[t]=l)),i=s;return!1},i._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(t,e){var i;if("function"!=typeof t.setAttribute)return!1;for(i in e)this._addTween(t,"setAttribute",t.getAttribute(i)+"",e[i]+"",i,!1,i),this._overwriteProps.push(i);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,l=e.useRadians===!0?2*Math.PI:360,h=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=l,a!==a%(l/2)&&(a=0>a?a+l:a-l)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*l)%l-(0|a/l)*l:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*l)%l-(0|a/l)*l)),(a>h||-h>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,l=n._class,h=function(e,i){var s=l("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=l("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=l("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=l("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=l("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=l("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,l=e.taper||"none",h=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===l?r=g:"out"===l?(n=1-i,r=n*n*g):"in"===l?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),h[_++]={x:i,y:s};for(h.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=h[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",h("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),h("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),h("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",h("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),h("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),h("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=l("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",h("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),h("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),h("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",h("SineOut",function(t){return Math.sin(t*o)}),h("SineIn",function(t){return-Math.cos(t*o)+1}),h("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),l("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,l=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},c=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),p={},m=function(s,r,n,a){this.sc=p[s]?p[s].sc:[],p[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(h){for(var _,u,c,f,d,g=r.length,v=g;--g>-1;)(_=p[r[g]]||new m(r[g],[])).gsClass?(o[g]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&n)for(u=("com.greensock."+s).split("."),c=u.pop(),f=l(u.join("."))[c]=this.gsClass=n.apply(n,o),a&&(i[c]=f,d="undefined"!=typeof module&&module.exports,!d&&"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&d&&(module.exports=f)),g=0;this.sc.length>g;g++)this.sc[g].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),x=T.map={},w=T.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?g("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],x[n+"."+o]=x[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,w(new T(null,null,1,r),n,"easeOut",!0),w(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),w(new T(null,null,3,r),n,"easeInOut");x.linear=h.easing.Linear.easeIn,x.swing=h.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)n=h[l],n.c===e&&n.s===i?h.splice(l,1):0===_&&r>n.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,k=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},R=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],k=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,l,h=this,u=S(),f=e!==!1&&P,p=500,m=33,d="tick",g=function(t){var e,a,o=S()-R;o>p&&(u+=o-m),R+=o,h.time=(R-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&h.dispatchEvent(d)};b.call(h),h.time=h.frame=0,h.tick=function(){g(!0)},h.lagSmoothing=function(t,e){p=t||1/_,m=Math.min(e,p,0)},h.sleep=function(){null!=r&&(f&&k?k(r):clearTimeout(r),s=c,r=null,h===a&&(o=!1))},h.wake=function(){null!==r?h.sleep():h.frame>10&&(R=S()-p+5),s=0===i?c:f&&P?P:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),g(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),l=this.time+n,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,h.fps(i),void 0):f},h.fps(t),setTimeout(function(){f&&5>h.frame&&h.useRAF(!1)},1500)}),n=h.Ticker.prototype=new h.events.EventDispatcher,n.constructor=h.Ticker;var O=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,W){o||a.wake();var i=this.vars.useFrames?G:W;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=O.ticker=new h.Ticker,n=O.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var A=function(){o&&S()-R>2e3&&a.wake(),setTimeout(A,2e3)};A(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||y)},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(F.length&&Q(),this.render(t,e,!1),F.length&&Q())}return this},n.progress=n.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&(e=s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){O.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new O,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(O.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?V[D.defaultOverwrite]:"number"==typeof l?l>>0:V[l],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=$(n,this,!1),1===l&&this._siblings[r].length>1&&K(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=$(e,this,!1),1===l&&this._siblings.length>1&&K(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!j[i]||j[i]&&j[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new O,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.18.0",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=120,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var F=[],I={},E=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},L=function(t,e,i,s){var r,n,a,o,l,h,_,u=[t,e],c=0,f="",p=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,r=t.match(E)||[],n=e.match(E)||[],s&&(s._next=null,s.blob=1,u._firstPT=s),l=n.length,o=0;l>o;o++)_=n[o],h=e.substr(c,e.indexOf(_,c)-c),f+=h||!o?h:",",c+=h.length,p?p=(p+1)%5:"rgba("===h.substr(-5)&&(p=1),_===r[o]||o>=r.length?f+=_:(f&&(u.push(f),f=""),a=parseFloat(r[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*parseFloat(_.substr(2)):parseFloat(_)-a)||0,f:0,r:p&&4>p}),c+=_.length;return f+=e.substr(c),f&&u.push(f),u.setRatio=N,u},X=function(t,e,i,s,r,n,a,o){var l,h,_="get"===i?t[e]:i,u=typeof t[e],c="string"==typeof s&&"="===s.charAt(1),f={t:t,p:e,s:_,f:"function"===u,pg:0,n:r||e,r:n,pr:0,c:c?parseInt(s.charAt(0)+"1",10)*parseFloat(s.substr(2)):parseFloat(s)-_||0};return"number"!==u&&("function"===u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),f.s=_=a?t[h](a):t[h]()),"string"==typeof _&&(a||isNaN(_))?(f.fp=a,l=L(_,s,o||D.defaultStringFilter,f),f={t:l,p:"setRatio",s:0,c:1,f:2,pg:0,n:r||e,pr:0}):c||(f.c=parseFloat(s)-parseFloat(_)||0)),f.c?((f._next=this._firstPT)&&(f._next._prev=f),this._firstPT=f,f):void 0},B=D._internals={isArray:f,isSelector:M,lazyTweens:F,blobDif:L},j=D._plugins={},Y=B.tweenLookup={},U=0,q=B.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=O._rootFramesTimeline=new C,W=O._rootTimeline=new C,Z=30,Q=B.lazyRender=function(){var t,e=F.length;for(I={};--e>-1;)t=F[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);F.length=0};W._startTime=a.time,G._startTime=a.frame,W._active=G._active=!0,setTimeout(Q,1),O._updateRoot=D.render=function(){var t,e,i;if(F.length&&Q(),W.render((a.time-W._startTime)*W._timeScale,!1,!1),G.render((a.frame-G._startTime)*G._timeScale,!1,!1),F.length&&Q(),a.frame>=Z){Z=a.frame+(parseInt(D.autoSleep,10)||120);
    for(i in Y){for(e=Y[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete Y[i]}if(i=W._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",O._updateRoot);var $=function(t,e,i){var s,r,n=t._gsTweenID;if(Y[n||(t._gsTweenID=n="t"+U++)]||(Y[n]={target:t,tweens:[]}),e&&(s=Y[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return Y[n].tweens},H=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},K=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,c=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||J(e,0,p),0===J(o,h,p)&&(c[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(c[f++]=o)));for(n=f;--n>-1;)if(o=c[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!H(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},J=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)q[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=D.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof T?h:"function"==typeof h?new T(h,n.easeParams):x[h]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;I[e._gsTweenID]&&Q(),this.vars.css||e.style&&e!==t&&e.nodeType&&j.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars)if(_=this.vars[n],q[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(j[n]&&(l=new j[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else i[n]=X.call(this,e,n,"get",_,n,0,null,this.vars.stringFilter);return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&K(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(I[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_&&"isPause"!==this.data)&&h!==t&&(i=!0,h>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,c=this._easeType,f=this._easePower;(1===c||3===c&&u>=.5)&&(u=1-u),3===c&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===c?1-u:2===c?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,F.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,l,h,_,u,c=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((f(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!H(this,i,e,u))return!1}for(n in h)(a=o[n])&&(c&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],O.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=$(s[i],this,!0);else this._siblings=$(this.target,this,!0)}return O.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((f(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=$(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var te=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=te.prototype},!0);if(n=te.prototype,te.version="1.18.0",te.API=2,n._firstPT=null,n._addTween=X,n.setRatio=N,n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},te.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===te.API&&(j[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){te.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new te(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,te.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in p)p[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");



/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 *
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic GSAP Animation Plugin.
 *
 * requires: GSAP ~1.14
 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 * Greensock License info at http://www.greensock.com/licensing/
 */
/**
 * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.
 * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
 *
 * Both the `lite` and the `max` versions of the GSAP library are supported.
 * The most basic requirement is `TweenLite`.
 *
 * To have access to this extension, please include `plugins/animation.gsap.js`.
 * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
 * @mixin animation.GSAP
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['ScrollMagic', 'TweenMax', 'TimelineMax'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        // Loads whole gsap package onto global scope.
        require('gsap');
        factory(require('scrollmagic'), TweenMax, TimelineMax);
    } else {
        // Browser globals
        factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic), root.TweenMax || root.TweenLite, root.TimelineMax || root.TimelineLite);
    }
}(this, function (ScrollMagic, Tween, Timeline) {
    "use strict";
    var NAMESPACE = "animation.gsap";

    var
        console = window.console || {},
        err = Function.prototype.bind.call(console.error || console.log ||
            function () {}, console);
    if (!ScrollMagic) {
        err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
    }
    if (!Tween) {
        err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
    }

    /*
         * ----------------------------------------------------------------
         * Extensions for Scene
         * ----------------------------------------------------------------
         */
    /**
     * Every instance of ScrollMagic.Scene now accepts an additional option.
     * See {@link ScrollMagic.Scene} for a complete list of the standard options.
     * @memberof! animation.GSAP#
     * @method new ScrollMagic.Scene(options)
     * @example
     * var scene = new ScrollMagic.Scene({tweenChanges: true});
     *
     * @param {object} [options] - Options for the Scene. The options can be updated at any time.
     * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.
     Does not affect animations where duration is `0`.
     */
    /**
     * **Get** or **Set** the tweenChanges option value.
     * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.
     * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
     * @memberof! animation.GSAP#
     * @method Scene.tweenChanges
     *
     * @example
     * // get the current tweenChanges option
     * var tweenChanges = scene.tweenChanges();
     *
     * // set new tweenChanges option
     * scene.tweenChanges(true);
     *
     * @fires {@link Scene.change}, when used as setter
     * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
     * @returns {boolean} `get` -  Current tweenChanges option value.
     * @returns {Scene} `set` -  Parent object for chaining.
     */
    // add option (TODO: DOC (private for dev))
    ScrollMagic.Scene.addOption("tweenChanges", // name
        false, // default


        function (val) { // validation callback
            return !!val;
        });
    // extend scene
    ScrollMagic.Scene.extend(function () {
        var Scene = this,
            _tween;

        var log = function () {
            if (Scene._log) { // not available, when main source minified
                Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
                Scene._log.apply(this, arguments);
            }
        };

        // set listeners
        Scene.on("progress.plugin_gsap", function () {
            updateTweenProgress();
        });
        Scene.on("destroy.plugin_gsap", function (e) {
            Scene.removeTween(e.reset);
        });

        /**
         * Update the tween progress to current position.
         * @private
         */
        var updateTweenProgress = function () {
            if (_tween) {
                var
                    progress = Scene.progress(),
                    state = Scene.state();
                if (_tween.repeat && _tween.repeat() === -1) {
                    // infinite loop, so not in relation to progress
                    if (state === 'DURING' && _tween.paused()) {
                        _tween.play();
                    } else if (state !== 'DURING' && !_tween.paused()) {
                        _tween.pause();
                    }
                } else if (progress != _tween.progress()) { // do we even need to update the progress?
                    // no infinite loop - so should we just play or go to a specific point in time?
                    if (Scene.duration() === 0) {
                        // play the animation
                        if (progress > 0) { // play from 0 to 1
                            _tween.play();
                        } else { // play from 1 to 0
                            _tween.reverse();
                        }
                    } else {
                        // go to a specific point in time
                        if (Scene.tweenChanges() && _tween.tweenTo) {
                            // go smooth
                            _tween.tweenTo(progress * _tween.duration());
                        } else {
                            // just hard set it
                            _tween.progress(progress).pause();
                        }
                    }
                }
            }
        };

        /**
         * Add a tween to the scene.
         * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).
         *
         * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.
         * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.
         * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
         *
         * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
         * @memberof! animation.GSAP#
         *
         * @example
         * // add a single tween directly
         * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
         *
         * // add a single tween via variable
         * var tween = TweenMax.to("obj"), 1, {x: 100};
         * scene.setTween(tween);
         *
         * // add multiple tweens, wrapped in a timeline.
         * var timeline = new TimelineMax();
         * var tween1 = TweenMax.from("obj1", 1, {x: 100});
         * var tween2 = TweenMax.to("obj2", 1, {y: 100});
         * timeline
         *		.add(tween1)
         *		.add(tween2);
         * scene.addTween(timeline);
         *
         * // short hand to add a TweenMax.to() tween
         * scene.setTween("obj3", 0.5, {y: 100});
         *
         * // short hand to add a TweenMax.to() tween for 1 second
         * // this is useful, when the scene has a duration and the tween duration isn't important anyway
         * scene.setTween("obj3", {y: 100});
         *
         * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
         * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
         * @param {object} params - The parameters for the tween
         * @returns {Scene} Parent object for chaining.
         */
        Scene.setTween = function (TweenObject, duration, params) {
            var newTween;
            if (arguments.length > 1) {
                if (arguments.length < 3) {
                    params = duration;
                    duration = 1;
                }
                TweenObject = Tween.to(TweenObject, duration, params);
            }
            try {
                // wrap Tween into a Timeline Object if available to include delay and repeats in the duration and standardize methods.
                if (Timeline) {
                    newTween = new Timeline({
                        smoothChildTiming: true
                    }).add(TweenObject);
                } else {
                    newTween = TweenObject;
                }
                newTween.pause();
            } catch (e) {
                log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
                return Scene;
            }
            if (_tween) { // kill old tween?
                Scene.removeTween();
            }
            _tween = newTween;

            // some properties need to be transferred it to the wrapper, otherwise they would get lost.
            if (TweenObject.repeat && TweenObject.repeat() === -1) { // TweenMax or TimelineMax Object?
                _tween.repeat(-1);
                _tween.yoyo(TweenObject.yoyo());
            }
            // Some tween validations and debugging helpers
            if (Scene.tweenChanges() && !_tween.tweenTo) {
                log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
            }

            // check if there are position tweens defined for the trigger and warn about it :)
            if (_tween && Scene.controller() && Scene.triggerElement() && Scene.loglevel() >= 2) { // controller is needed to know scroll direction.
                var
                    triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
                    vertical = Scene.controller().info("vertical");
                triggerTweens.forEach(function (value, index) {
                    var
                        tweenvars = value.vars.css || value.vars,
                        condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
                    if (condition) {
                        log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
                        return false;
                    }
                });
            }

            // warn about tween overwrites, when an element is tweened multiple times
            if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
                var
                    list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween],
                    // get all nested tween objects
                    newCallback = function () {
                        log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
                    };
                for (var i = 0, thisTween, oldCallback; i < list.length; i++) { /*jshint loopfunc: true */
                    thisTween = list[i];
                    if (oldCallback !== newCallback) { // if tweens is added more than once
                        oldCallback = thisTween.vars.onOverwrite;
                        thisTween.vars.onOverwrite = function () {
                            if (oldCallback) {
                                oldCallback.apply(this, arguments);
                            }
                            newCallback.apply(this, arguments);
                        };
                    }
                }
            }
            log(3, "added tween");

            updateTweenProgress();
            return Scene;
        };

        /**
         * Remove the tween from the scene.
         * This will terminate the control of the Scene over the tween.
         *
         * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
         * @memberof! animation.GSAP#
         *
         * @example
         * // remove the tween from the scene without resetting it
         * scene.removeTween();
         *
         * // remove the tween from the scene and reset it to initial position
         * scene.removeTween(true);
         *
         * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
         * @returns {Scene} Parent object for chaining.
         */
        Scene.removeTween = function (reset) {
            if (_tween) {
                if (reset) {
                    _tween.progress(0).pause();
                }
                _tween.kill();
                _tween = undefined;
                log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
            }
            return Scene;
        };

    });
}));

$( document ).ready(function(){
    // resize row js
    // function make div height equals
    equalheight = function(container){

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function() {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }

                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }

            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }

        });
    }

    $(window).load(function() {
        equalheight('.row .thumb-post-title');
    });

    $(window).resize(function(){
        equalheight('.row .thumb-post-title');
    });


    // Subnav Fix
    var $fixednav = $(".fixed-subnav-wrap");
    var $nav = $(".subnav-wrap");
    var $hidnav = $(".hidden-nav");



//Final working animations
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: ".anim-cont"
    })
        .setTween(".anim-item", 0.5, {opacity: 1}) // trigger a TweenMax.to tween
        .addTo(controller);

    var ind_scene = new ScrollMagic.Scene({
        triggerElement: ".ind-anim-cont"
    })
        .setTween(".ind-anim-item", 0.5, {opacity: 1}) // trigger a TweenMax.to tween
        .addTo(controller);

});

/*!
 * VERSION: 0.1.12
 * DATE: 2015-08-11
 * UPDATES AND DOCS AT: http://greensock.com/jquery-gsap-plugin/
 *
 * Requires TweenLite version 1.8.0 or higher and CSSPlugin.
 *
 * @license Copyright (c) 2013-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t){"use strict";var e,i,s,r=t.fn.animate,n=t.fn.stop,a=!0,o=function(t){var e,i={};for(e in t)i[e]=t[e];return i},l={overwrite:1,delay:1,useFrames:1,runBackwards:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,autoCSS:1},h=",scrollTop,scrollLeft,show,hide,toggle,",_=h,u=function(t,e){for(var i in l)l[i]&&void 0!==t[i]&&(e[i]=t[i])},c=function(t){return function(e){return t.getRatio(e)}},f={},m=function(){var r,n,a,o=window.GreenSockGlobals||window;if(e=o.TweenMax||o.TweenLite,e&&(r=(e.version+".0.0").split("."),n=!(Number(r[0])>0&&Number(r[1])>7),o=o.com.greensock,i=o.plugins.CSSPlugin,f=o.easing.Ease.map||{}),!e||!i||n)return e=null,!s&&window.console&&(window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)."+(n?" Version "+r.join(".")+" is too old.":"")),s=!0),void 0;if(t.easing){for(a in f)t.easing[a]=c(f[a]);m=!1}};t.fn.animate=function(s,n,l,h){if(s=s||{},m&&(m(),!e||!i))return r.call(this,s,n,l,h);if(!a||s.skipGSAP===!0||"object"==typeof n&&"function"==typeof n.step)return r.call(this,s,n,l,h);var c,p,d,g,v=t.speed(n,l,h),y={ease:f[v.easing]||(v.easing===!1?f.linear:f.swing)},T=this,w="object"==typeof n?n.specialEasing:null;for(p in s){if(c=s[p],c instanceof Array&&f[c[1]]&&(w=w||{},w[p]=c[1],c=c[0]),"show"===c||"hide"===c||"toggle"===c||-1!==_.indexOf(p)&&-1!==_.indexOf(","+p+","))return r.call(this,s,n,l,h);y[-1===p.indexOf("-")?p:t.camelCase(p)]=c}if(w){y=o(y),g=[];for(p in w)c=g[g.length]={},u(y,c),c.ease=f[w[p]]||y.ease,-1!==p.indexOf("-")&&(p=t.camelCase(p)),c[p]=y[p],delete y[p];0===g.length&&(g=null)}return d=function(i){var s,r=o(y);if(g)for(s=g.length;--s>-1;)e.to(this,t.fx.off?0:v.duration/1e3,g[s]);r.onComplete=function(){i?i():v.old&&t(this).each(v.old)},e.to(this,t.fx.off?0:v.duration/1e3,r)},v.queue!==!1?(T.queue(v.queue,d),"function"==typeof v.old&&t(T[T.length-1]).queue(v.queue,function(t){v.old.call(T),t()})):d.call(T),T},t.fn.stop=function(t,i){if(n.call(this,t,i),e){if(i)for(var s,r=e.getTweensOf(this),a=r.length;--a>-1;)s=r[a].totalTime()/r[a].totalDuration(),s>0&&1>s&&r[a].seek(r[a].totalDuration());e.killTweensOf(this)}return this},t.gsap={enabled:function(t){a=t},version:"0.1.12",legacyProps:function(t){_=h+t+","}}})(jQuery);

/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-video-touch-shiv-cssclasses-teststyles-prefixes-cssclassprefix:w!mod!
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},n.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" w-mod-"+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" w-mod-js w-mod-"+q.join(" w-mod-"):""),e}(this,this.document);
/**
 * Custom tests
 */
Modernizr.addTest('ios', /(ipod|iphone|ipad)/i.test(navigator.userAgent));

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
( function() {
    var isWebkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
        isOpera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
        isIe     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

    if ( ( isWebkit || isOpera || isIe ) && document.getElementById && window.addEventListener ) {
        window.addEventListener( 'hashchange', function() {
            var id = location.hash.substring( 1 ),
                element;

            if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
                return;
            }

            element = document.getElementById( id );

            if ( element ) {
                if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
                    element.tabIndex = -1;
                }

                element.focus();
            }
        }, false );
    }
})();


/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
(function () {
    'use strict';

    function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

    var webflowEnv = __commonjs(function (module, exports) {
        /**
         * Returns a Boolean representing whether or not the client is a mobile browser.
         *
         * NOTE: Many thanks to detectmobilebrowsers.com for this user agent detection
         * regex, without which the mobile internet probably wouldn't exist.
         */
        exports.isMobile = function() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
                    .test(userAgent) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    .test(userAgent.substr(0, 4));
        };
    });

    var require$$0 = (webflowEnv && typeof webflowEnv === 'object' && 'default' in webflowEnv ? webflowEnv['default'] : webflowEnv);

    /*!
   * tram.js v0.8.2-global
   * Cross-browser CSS3 transitions in JavaScript
   * https://github.com/bkwld/tram
   * MIT License
   */
    window.tram=function(a){function b(a,b){var c=new M.Bare;return c.init(a,b)}function c(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}function d(a){var b=parseInt(a.slice(1),16),c=b>>16&255,d=b>>8&255,e=255&b;return[c,d,e]}function e(a,b,c){return"#"+(1<<24|a<<16|b<<8|c).toString(16).slice(1)}function f(){}function g(a,b){j("Type warning: Expected: ["+a+"] Got: ["+typeof b+"] "+b)}function h(a,b,c){j("Units do not match ["+a+"]: "+b+", "+c)}function i(a,b,c){if(void 0!==b&&(c=b),void 0===a)return c;var d=c;return $.test(a)||!_.test(a)?d=parseInt(a,10):_.test(a)&&(d=1e3*parseFloat(a)),0>d&&(d=0),d===d?d:c}function j(a){U.debug&&window&&window.console.warn(a)}function k(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}var l=function(a,b,c){function d(a){return"object"==typeof a}function e(a){return"function"==typeof a}function f(){}function g(h,i){function j(){var a=new k;return e(a.init)&&a.init.apply(a,arguments),a}function k(){}i===c&&(i=h,h=Object),j.Bare=k;var l,m=f[a]=h[a],n=k[a]=j[a]=new f;return n.constructor=j,j.mixin=function(b){return k[a]=j[a]=g(j,b)[a],j},j.open=function(a){if(l={},e(a)?l=a.call(j,n,m,j,h):d(a)&&(l=a),d(l))for(var c in l)b.call(l,c)&&(n[c]=l[c]);return e(n.init)||(n.init=h),j},j.open(i)}return g}("prototype",{}.hasOwnProperty),m={ease:["ease",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(-2.75*f*e+11*e*e+-15.5*f+8*e+.25*a)}],"ease-in":["ease-in",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(-1*f*e+3*e*e+-3*f+2*e)}],"ease-out":["ease-out",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(.3*f*e+-1.6*e*e+2.2*f+-1.8*e+1.9*a)}],"ease-in-out":["ease-in-out",function(a,b,c,d){var e=(a/=d)*a,f=e*a;return b+c*(2*f*e+-5*e*e+2*f+2*e)}],linear:["linear",function(a,b,c,d){return c*a/d+b}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(a,b,c,d){return c*(a/=d)*a+b}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(a,b,c,d){return-c*(a/=d)*(a-2)+b}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(a,b,c,d){return c*(a/=d)*a*a+b}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(a,b,c,d){return c*((a=a/d-1)*a*a+1)+b}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a+b:c/2*((a-=2)*a*a+2)+b}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(a,b,c,d){return c*(a/=d)*a*a*a+b}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a+b:-c/2*((a-=2)*a*a*a-2)+b}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(a,b,c,d){return c*(a/=d)*a*a*a*a+b}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(a,b,c,d){return c*((a=a/d-1)*a*a*a*a+1)+b}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(a,b,c,d){return(a/=d/2)<1?c/2*a*a*a*a*a+b:c/2*((a-=2)*a*a*a*a+2)+b}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(a,b,c,d){return-c*Math.cos(a/d*(Math.PI/2))+c+b}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(a,b,c,d){return-c/2*(Math.cos(Math.PI*a/d)-1)+b}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(a,b,c,d){return 0===a?b:c*Math.pow(2,10*(a/d-1))+b}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(a,b,c,d){return a===d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(a,b,c,d){return 0===a?b:a===d?b+c:(a/=d/2)<1?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(a,b,c,d){return-c*(Math.sqrt(1-(a/=d)*a)-1)+b}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(a,b,c,d){return(a/=d/2)<1?-c/2*(Math.sqrt(1-a*a)-1)+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*(a/=d)*a*((e+1)*a-e)+b}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),c*((a=a/d-1)*a*((e+1)*a+e)+1)+b}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(a,b,c,d,e){return void 0===e&&(e=1.70158),(a/=d/2)<1?c/2*a*a*(((e*=1.525)+1)*a-e)+b:c/2*((a-=2)*a*(((e*=1.525)+1)*a+e)+2)+b}]},n={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},o=document,p=window,q="bkwld-tram",r=/[\-\.0-9]/g,s=/[A-Z]/,t="number",u=/^(rgb|#)/,v=/(em|cm|mm|in|pt|pc|px)$/,w=/(em|cm|mm|in|pt|pc|px|%)$/,x=/(deg|rad|turn)$/,y="unitless",z=/(all|none) 0s ease 0s/,A=/^(width|height)$/,B=" ",C=o.createElement("a"),D=["Webkit","Moz","O","ms"],E=["-webkit-","-moz-","-o-","-ms-"],F=function(a){if(a in C.style)return{dom:a,css:a};var b,c,d="",e=a.split("-");for(b=0;b<e.length;b++)d+=e[b].charAt(0).toUpperCase()+e[b].slice(1);for(b=0;b<D.length;b++)if(c=D[b]+d,c in C.style)return{dom:c,css:E[b]+a}},G=b.support={bind:Function.prototype.bind,transform:F("transform"),transition:F("transition"),backface:F("backface-visibility"),timing:F("transition-timing-function")};if(G.transition){var H=G.timing.dom;if(C.style[H]=m["ease-in-back"][0],!C.style[H])for(var I in n)m[I][0]=n[I]}var J=b.frame=function(){var a=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame;return a&&G.bind?a.bind(p):function(a){p.setTimeout(a,16)}}(),K=b.now=function(){var a=p.performance,b=a&&(a.now||a.webkitNow||a.msNow||a.mozNow);return b&&G.bind?b.bind(a):Date.now||function(){return+new Date}}(),L=l(function(b){function d(a,b){var c=k((""+a).split(B)),d=c[0];b=b||{};var e=Y[d];if(!e)return j("Unsupported property: "+d);if(!b.weak||!this.props[d]){var f=e[0],g=this.props[d];return g||(g=this.props[d]=new f.Bare),g.init(this.$el,c,e,b),g}}function e(a,b,c){if(a){var e=typeof a;if(b||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==e&&b)return this.timer=new S({duration:a,context:this,complete:h}),void(this.active=!0);if("string"==e&&b){switch(a){case"hide":o.call(this);break;case"stop":l.call(this);break;case"redraw":p.call(this);break;default:d.call(this,a,c&&c[1])}return h.call(this)}if("function"==e)return void a.call(this,this);if("object"==e){var f=0;u.call(this,a,function(a,b){a.span>f&&(f=a.span),a.stop(),a.animate(b)},function(a){"wait"in a&&(f=i(a.wait,0))}),t.call(this),f>0&&(this.timer=new S({duration:f,context:this}),this.active=!0,b&&(this.timer.complete=h));var g=this,j=!1,k={};J(function(){u.call(g,a,function(a){a.active&&(j=!0,k[a.name]=a.nextStyle)}),j&&g.$el.css(k)})}}}function f(a){a=i(a,0),this.active?this.queue.push({options:a}):(this.timer=new S({duration:a,context:this,complete:h}),this.active=!0)}function g(a){return this.active?(this.queue.push({options:a,args:arguments}),void(this.timer.complete=h)):j("No active transition timer. Use start() or wait() before then().")}function h(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var a=this.queue.shift();e.call(this,a.options,!0,a.args)}}function l(a){this.timer&&this.timer.destroy(),this.queue=[],this.active=!1;var b;"string"==typeof a?(b={},b[a]=1):b="object"==typeof a&&null!=a?a:this.props,u.call(this,b,v),t.call(this)}function m(a){l.call(this,a),u.call(this,a,w,x)}function n(a){"string"!=typeof a&&(a="block"),this.el.style.display=a}function o(){l.call(this),this.el.style.display="none"}function p(){this.el.offsetHeight}function r(){l.call(this),a.removeData(this.el,q),this.$el=this.el=null}function t(){var a,b,c=[];this.upstream&&c.push(this.upstream);for(a in this.props)b=this.props[a],b.active&&c.push(b.string);c=c.join(","),this.style!==c&&(this.style=c,this.el.style[G.transition.dom]=c)}function u(a,b,e){var f,g,h,i,j=b!==v,k={};for(f in a)h=a[f],f in Z?(k.transform||(k.transform={}),k.transform[f]=h):(s.test(f)&&(f=c(f)),f in Y?k[f]=h:(i||(i={}),i[f]=h));for(f in k){if(h=k[f],g=this.props[f],!g){if(!j)continue;g=d.call(this,f)}b.call(this,g,h)}e&&i&&e.call(this,i)}function v(a){a.stop()}function w(a,b){a.set(b)}function x(a){this.$el.css(a)}function y(a,c){b[a]=function(){return this.children?A.call(this,c,arguments):(this.el&&c.apply(this,arguments),this)}}function A(a,b){var c,d=this.children.length;for(c=0;d>c;c++)a.apply(this.children[c],b);return this}b.init=function(b){if(this.$el=a(b),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,U.keepInherited&&!U.fallback){var c=W(this.el,"transition");c&&!z.test(c)&&(this.upstream=c)}G.backface&&U.hideBackface&&V(this.el,G.backface.css,"hidden")},y("add",d),y("start",e),y("wait",f),y("then",g),y("next",h),y("stop",l),y("set",m),y("show",n),y("hide",o),y("redraw",p),y("destroy",r)}),M=l(L,function(b){function c(b,c){var d=a.data(b,q)||a.data(b,q,new L.Bare);return d.el||d.init(b),c?d.start(c):d}b.init=function(b,d){var e=a(b);if(!e.length)return this;if(1===e.length)return c(e[0],d);var f=[];return e.each(function(a,b){f.push(c(b,d))}),this.children=f,this}}),N=l(function(a){function b(){var a=this.get();this.update("auto");var b=this.get();return this.update(a),b}function c(a,b,c){return void 0!==b&&(c=b),a in m?a:c}function d(a){var b=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a);return(b?e(b[1],b[2],b[3]):a).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var f={duration:500,ease:"ease",delay:0};a.init=function(a,b,d,e){this.$el=a,this.el=a[0];var g=b[0];d[2]&&(g=d[2]),X[g]&&(g=X[g]),this.name=g,this.type=d[1],this.duration=i(b[1],this.duration,f.duration),this.ease=c(b[2],this.ease,f.ease),this.delay=i(b[3],this.delay,f.delay),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=A.test(this.name),this.unit=e.unit||this.unit||U.defaultUnit,this.angle=e.angle||this.angle||U.defaultAngle,U.fallback||e.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+B+this.duration+"ms"+("ease"!=this.ease?B+m[this.ease][0]:"")+(this.delay?B+this.delay+"ms":""))},a.set=function(a){a=this.convert(a,this.type),this.update(a),this.redraw()},a.transition=function(a){this.active=!0,a=this.convert(a,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==a&&(a=b.call(this))),this.nextStyle=a},a.fallback=function(a){var c=this.el.style[this.name]||this.convert(this.get(),this.type);a=this.convert(a,this.type),this.auto&&("auto"==c&&(c=this.convert(this.get(),this.type)),"auto"==a&&(a=b.call(this))),this.tween=new R({from:c,to:a,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},a.get=function(){return W(this.el,this.name)},a.update=function(a){V(this.el,this.name,a)},a.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,V(this.el,this.name,this.get()));var a=this.tween;a&&a.context&&a.destroy()},a.convert=function(a,b){if("auto"==a&&this.auto)return a;var c,e="number"==typeof a,f="string"==typeof a;switch(b){case t:if(e)return a;if(f&&""===a.replace(r,""))return+a;c="number(unitless)";break;case u:if(f){if(""===a&&this.original)return this.original;if(b.test(a))return"#"==a.charAt(0)&&7==a.length?a:d(a)}c="hex or rgb string";break;case v:if(e)return a+this.unit;if(f&&b.test(a))return a;c="number(px) or string(unit)";break;case w:if(e)return a+this.unit;if(f&&b.test(a))return a;c="number(px) or string(unit or %)";break;case x:if(e)return a+this.angle;if(f&&b.test(a))return a;c="number(deg) or string(angle)";break;case y:if(e)return a;if(f&&w.test(a))return a;c="number(unitless) or string(unit or %)"}return g(c,a),a},a.redraw=function(){this.el.offsetHeight}}),O=l(N,function(a,b){a.init=function(){b.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),u))}}),P=l(N,function(a,b){a.init=function(){b.init.apply(this,arguments),this.animate=this.fallback},a.get=function(){return this.$el[this.name]()},a.update=function(a){this.$el[this.name](a)}}),Q=l(N,function(a,b){function c(a,b){var c,d,e,f,g;for(c in a)f=Z[c],e=f[0],d=f[1]||c,g=this.convert(a[c],e),b.call(this,d,g,e)}a.init=function(){b.init.apply(this,arguments),this.current||(this.current={},Z.perspective&&U.perspective&&(this.current.perspective=U.perspective,V(this.el,this.name,this.style(this.current)),this.redraw()))},a.set=function(a){c.call(this,a,function(a,b){this.current[a]=b}),V(this.el,this.name,this.style(this.current)),this.redraw()},a.transition=function(a){var b=this.values(a);this.tween=new T({current:this.current,values:b,duration:this.duration,delay:this.delay,ease:this.ease});var c,d={};for(c in this.current)d[c]=c in b?b[c]:this.current[c];this.active=!0,this.nextStyle=this.style(d)},a.fallback=function(a){var b=this.values(a);this.tween=new T({current:this.current,values:b,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},a.update=function(){V(this.el,this.name,this.style(this.current))},a.style=function(a){var b,c="";for(b in a)c+=b+"("+a[b]+") ";return c},a.values=function(a){var b,d={};return c.call(this,a,function(a,c,e){d[a]=c,void 0===this.current[a]&&(b=0,~a.indexOf("scale")&&(b=1),this.current[a]=this.convert(b,e))}),d}}),R=l(function(b){function c(a){1===n.push(a)&&J(g)}function g(){var a,b,c,d=n.length;if(d)for(J(g),b=K(),a=d;a--;)c=n[a],c&&c.render(b)}function i(b){var c,d=a.inArray(b,n);d>=0&&(c=n.slice(d+1),n.length=d,c.length&&(n=n.concat(c)))}function j(a){return Math.round(a*o)/o}function k(a,b,c){return e(a[0]+c*(b[0]-a[0]),a[1]+c*(b[1]-a[1]),a[2]+c*(b[2]-a[2]))}var l={ease:m.ease[1],from:0,to:1};b.init=function(a){this.duration=a.duration||0,this.delay=a.delay||0;var b=a.ease||l.ease;m[b]&&(b=m[b][1]),"function"!=typeof b&&(b=l.ease),this.ease=b,this.update=a.update||f,this.complete=a.complete||f,this.context=a.context||this,this.name=a.name;var c=a.from,d=a.to;void 0===c&&(c=l.from),void 0===d&&(d=l.to),this.unit=a.unit||"","number"==typeof c&&"number"==typeof d?(this.begin=c,this.change=d-c):this.format(d,c),this.value=this.begin+this.unit,this.start=K(),a.autoplay!==!1&&this.play()},b.play=function(){this.active||(this.start||(this.start=K()),this.active=!0,c(this))},b.stop=function(){this.active&&(this.active=!1,i(this))},b.render=function(a){var b,c=a-this.start;if(this.delay){if(c<=this.delay)return;c-=this.delay}if(c<this.duration){var d=this.ease(c,0,1,this.duration);return b=this.startRGB?k(this.startRGB,this.endRGB,d):j(this.begin+d*this.change),this.value=b+this.unit,void this.update.call(this.context,this.value)}b=this.endHex||this.begin+this.change,this.value=b+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},b.format=function(a,b){if(b+="",a+="","#"==a.charAt(0))return this.startRGB=d(b),this.endRGB=d(a),this.endHex=a,this.begin=0,void(this.change=1);if(!this.unit){var c=b.replace(r,""),e=a.replace(r,"");c!==e&&h("tween",b,a),this.unit=c}b=parseFloat(b),a=parseFloat(a),this.begin=this.value=b,this.change=a-b},b.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=f};var n=[],o=1e3}),S=l(R,function(a){a.init=function(a){this.duration=a.duration||0,this.complete=a.complete||f,this.context=a.context,this.play()},a.render=function(a){var b=a-this.start;b<this.duration||(this.complete.call(this.context),this.destroy())}}),T=l(R,function(a,b){a.init=function(a){this.context=a.context,this.update=a.update,this.tweens=[],this.current=a.current;var b,c;for(b in a.values)c=a.values[b],this.current[b]!==c&&this.tweens.push(new R({name:b,from:this.current[b],to:c,duration:a.duration,delay:a.delay,ease:a.ease,autoplay:!1}));this.play()},a.render=function(a){var b,c,d=this.tweens.length,e=!1;for(b=d;b--;)c=this.tweens[b],c.context&&(c.render(a),this.current[c.name]=c.value,e=!0);return e?void(this.update&&this.update.call(this.context)):this.destroy()},a.destroy=function(){if(b.destroy.call(this),this.tweens){var a,c=this.tweens.length;for(a=c;a--;)this.tweens[a].destroy();this.tweens=null,this.current=null}}}),U=b.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!G.transition,agentTests:[]};b.fallback=function(a){if(!G.transition)return U.fallback=!0;U.agentTests.push("("+a+")");var b=new RegExp(U.agentTests.join("|"),"i");U.fallback=b.test(navigator.userAgent)},b.fallback("6.0.[2-5] Safari"),b.tween=function(a){return new R(a)},b.delay=function(a,b,c){return new S({complete:b,duration:a,context:c})},a.fn.tram=function(a){return b.call(null,this,a)};var V=a.style,W=a.css,X={transform:G.transform&&G.transform.css},Y={color:[O,u],background:[O,u,"background-color"],"outline-color":[O,u],"border-color":[O,u],"border-top-color":[O,u],"border-right-color":[O,u],"border-bottom-color":[O,u],"border-left-color":[O,u],"border-width":[N,v],"border-top-width":[N,v],"border-right-width":[N,v],"border-bottom-width":[N,v],"border-left-width":[N,v],"border-spacing":[N,v],"letter-spacing":[N,v],margin:[N,v],"margin-top":[N,v],"margin-right":[N,v],"margin-bottom":[N,v],"margin-left":[N,v],padding:[N,v],"padding-top":[N,v],"padding-right":[N,v],"padding-bottom":[N,v],"padding-left":[N,v],"outline-width":[N,v],opacity:[N,t],top:[N,w],right:[N,w],bottom:[N,w],left:[N,w],"font-size":[N,w],"text-indent":[N,w],"word-spacing":[N,w],width:[N,w],"min-width":[N,w],"max-width":[N,w],height:[N,w],"min-height":[N,w],"max-height":[N,w],"line-height":[N,y],"scroll-top":[P,t,"scrollTop"],"scroll-left":[P,t,"scrollLeft"]},Z={};G.transform&&(Y.transform=[Q],Z={x:[w,"translateX"],y:[w,"translateY"],rotate:[x],rotateX:[x],rotateY:[x],scale:[t],scaleX:[t],scaleY:[t],skew:[x],skewX:[x],skewY:[x]}),G.transform&&G.backface&&(Z.z=[w,"translateZ"],Z.rotateZ=[x],Z.scaleZ=[t],Z.perspective=[v]);var $=/ms/,_=/s|\./;return a.tram=b}(window.jQuery);

    var require$$0$2 = {};

    var underscoreCustom = __commonjs(function (module) {
        // Include tram for frame-throttling
        var $ = window.$;
        var tram = require$$0$2 && $.tram;

        /*eslint-disable */

        /*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   * _.each
   * _.map
   * _.find
   * _.filter
   * _.any
   * _.contains
   * _.delay
   * _.defer
   * _.throttle (webflow)
   * _.debounce
   * _.keys
   * _.has
   * _.now
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
        module.exports = (function() {
            var _ = {};

            // Current version.
            _.VERSION = '1.6.0-Webflow';

            // Establish the object that gets returned to break out of a loop iteration.
            var breaker = {};

            // Save bytes in the minified (but not gzipped) version:
            var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

            // Create quick reference variables for speed access to core prototypes.
            var
                push             = ArrayProto.push,
                slice            = ArrayProto.slice,
                concat           = ArrayProto.concat,
                toString         = ObjProto.toString,
                hasOwnProperty   = ObjProto.hasOwnProperty;

            // All **ECMAScript 5** native function implementations that we hope to use
            // are declared here.
            var
                nativeForEach      = ArrayProto.forEach,
                nativeMap          = ArrayProto.map,
                nativeReduce       = ArrayProto.reduce,
                nativeReduceRight  = ArrayProto.reduceRight,
                nativeFilter       = ArrayProto.filter,
                nativeEvery        = ArrayProto.every,
                nativeSome         = ArrayProto.some,
                nativeIndexOf      = ArrayProto.indexOf,
                nativeLastIndexOf  = ArrayProto.lastIndexOf,
                nativeIsArray      = Array.isArray,
                nativeKeys         = Object.keys,
                nativeBind         = FuncProto.bind;

            // Collection Functions
            // --------------------

            // The cornerstone, an `each` implementation, aka `forEach`.
            // Handles objects with the built-in `forEach`, arrays, and raw objects.
            // Delegates to **ECMAScript 5**'s native `forEach` if available.
            var each = _.each = _.forEach = function(obj, iterator, context) {
                /* jshint shadow:true */
                if (obj == null) return obj;
                if (nativeForEach && obj.forEach === nativeForEach) {
                    obj.forEach(iterator, context);
                } else if (obj.length === +obj.length) {
                    for (var i = 0, length = obj.length; i < length; i++) {
                        if (iterator.call(context, obj[i], i, obj) === breaker) return;
                    }
                } else {
                    var keys = _.keys(obj);
                    for (var i = 0, length = keys.length; i < length; i++) {
                        if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
                    }
                }
                return obj;
            };

            // Return the results of applying the iterator to each element.
            // Delegates to **ECMAScript 5**'s native `map` if available.
            _.map = _.collect = function(obj, iterator, context) {
                var results = [];
                if (obj == null) return results;
                if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
                each(obj, function(value, index, list) {
                    results.push(iterator.call(context, value, index, list));
                });
                return results;
            };

            // Return the first value which passes a truth test. Aliased as `detect`.
            _.find = _.detect = function(obj, predicate, context) {
                var result;
                any(obj, function(value, index, list) {
                    if (predicate.call(context, value, index, list)) {
                        result = value;
                        return true;
                    }
                });
                return result;
            };

            // Return all the elements that pass a truth test.
            // Delegates to **ECMAScript 5**'s native `filter` if available.
            // Aliased as `select`.
            _.filter = _.select = function(obj, predicate, context) {
                var results = [];
                if (obj == null) return results;
                if (nativeFilter && obj.filter === nativeFilter) return obj.filter(predicate, context);
                each(obj, function(value, index, list) {
                    if (predicate.call(context, value, index, list)) results.push(value);
                });
                return results;
            };

            // Determine if at least one element in the object matches a truth test.
            // Delegates to **ECMAScript 5**'s native `some` if available.
            // Aliased as `any`.
            var any = _.some = _.any = function(obj, predicate, context) {
                predicate || (predicate = _.identity);
                var result = false;
                if (obj == null) return result;
                if (nativeSome && obj.some === nativeSome) return obj.some(predicate, context);
                each(obj, function(value, index, list) {
                    if (result || (result = predicate.call(context, value, index, list))) return breaker;
                });
                return !!result;
            };

            // Determine if the array or object contains a given value (using `===`).
            // Aliased as `include`.
            _.contains = _.include = function(obj, target) {
                if (obj == null) return false;
                if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
                return any(obj, function(value) {
                    return value === target;
                });
            };

            // Function (ahem) Functions
            // --------------------

            // Delays a function for the given number of milliseconds, and then calls
            // it with the arguments supplied.
            _.delay = function(func, wait) {
                var args = slice.call(arguments, 2);
                return setTimeout(function(){ return func.apply(null, args); }, wait);
            };

            // Defers a function, scheduling it to run after the current call stack has
            // cleared.
            _.defer = function(func) {
                return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
            };

            // Returns a function, that, when invoked, will only be triggered once every
            // browser animation frame - using tram's requestAnimationFrame polyfill.
            _.throttle = function(func) {
                var wait, args, context;
                return function() {
                    if (wait) return;
                    wait = true;
                    args = arguments;
                    context = this;
                    tram.frame(function() {
                        wait = false;
                        func.apply(context, args);
                    });
                };
            };

            // Returns a function, that, as long as it continues to be invoked, will not
            // be triggered. The function will be called after it stops being called for
            // N milliseconds. If `immediate` is passed, trigger the function on the
            // leading edge, instead of the trailing.
            _.debounce = function(func, wait, immediate) {
                var timeout, args, context, timestamp, result;

                var later = function() {
                    var last = _.now() - timestamp;
                    if (last < wait) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                            context = args = null;
                        }
                    }
                };

                return function() {
                    context = this;
                    args = arguments;
                    timestamp = _.now();
                    var callNow = immediate && !timeout;
                    if (!timeout) {
                        timeout = setTimeout(later, wait);
                    }
                    if (callNow) {
                        result = func.apply(context, args);
                        context = args = null;
                    }

                    return result;
                };
            };

            // Object Functions
            // ----------------

            // Fill in a given object with default properties.
            _.defaults = function(obj) {
                if (!_.isObject(obj)) return obj;
                for (var i = 1, length = arguments.length; i < length; i++) {
                    var source = arguments[i];
                    for (var prop in source) {
                        if (obj[prop] === void 0) obj[prop] = source[prop];
                    }
                }
                return obj;
            };

            // Retrieve the names of an object's properties.
            // Delegates to **ECMAScript 5**'s native `Object.keys`
            _.keys = function(obj) {
                if (!_.isObject(obj)) return [];
                if (nativeKeys) return nativeKeys(obj);
                var keys = [];
                for (var key in obj) if (_.has(obj, key)) keys.push(key);
                return keys;
            };

            // Shortcut function for checking if an object has a given property directly
            // on itself (in other words, not on a prototype).
            _.has = function(obj, key) {
                return hasOwnProperty.call(obj, key);
            };

            // Is a given variable an object?
            _.isObject = function(obj) {
                return obj === Object(obj);
            };

            // Utility Functions
            // -----------------

            // A (possibly faster) way to get the current timestamp as an integer.
            _.now = Date.now || function() { return new Date().getTime(); };

            // By default, Underscore uses ERB-style template delimiters, change the
            // following template settings to use alternative delimiters.
            _.templateSettings = {
                evaluate    : /<%([\s\S]+?)%>/g,
                interpolate : /<%=([\s\S]+?)%>/g,
                escape      : /<%-([\s\S]+?)%>/g
            };

            // When customizing `templateSettings`, if you don't want to define an
            // interpolation, evaluation or escaping regex, we need one that is
            // guaranteed not to match.
            var noMatch = /(.)^/;

            // Certain characters need to be escaped so that they can be put into a
            // string literal.
            var escapes = {
                "'":      "'",
                '\\':     '\\',
                '\r':     'r',
                '\n':     'n',
                '\u2028': 'u2028',
                '\u2029': 'u2029'
            };

            var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

            var escapeChar = function(match) {
                return '\\' + escapes[match];
            };

            // JavaScript micro-templating, similar to John Resig's implementation.
            // Underscore templating handles arbitrary delimiters, preserves whitespace,
            // and correctly escapes quotes within interpolated code.
            // NB: `oldSettings` only exists for backwards compatibility.
            _.template = function(text, settings, oldSettings) {
                if (!settings && oldSettings) settings = oldSettings;
                settings = _.defaults({}, settings, _.templateSettings);

                // Combine delimiters into one regular expression via alternation.
                var matcher = RegExp([
                    (settings.escape || noMatch).source,
                    (settings.interpolate || noMatch).source,
                    (settings.evaluate || noMatch).source
                ].join('|') + '|$', 'g');

                // Compile the template source, escaping string literals appropriately.
                var index = 0;
                var source = "__p+='";
                text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
                    source += text.slice(index, offset).replace(escaper, escapeChar);
                    index = offset + match.length;

                    if (escape) {
                        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
                    } else if (interpolate) {
                        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
                    } else if (evaluate) {
                        source += "';\n" + evaluate + "\n__p+='";
                    }

                    // Adobe VMs need the match returned to produce the correct offest.
                    return match;
                });
                source += "';\n";

                // If a variable is not specified, place data values in local scope.
                if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

                source = "var __t,__p='',__j=Array.prototype.join," +
                    "print=function(){__p+=__j.call(arguments,'');};\n" +
                    source + 'return __p;\n';

                try {
                    var render = new Function(settings.variable || 'obj', '_', source);
                } catch (e) {
                    e.source = source;
                    throw e;
                }

                var template = function(data) {
                    return render.call(this, data, _);
                };

                // Provide the compiled source as a convenience for precompilation.
                var argument = settings.variable || 'obj';
                template.source = 'function(' + argument + '){\n' + source + '}';

                return template;
            };

            // Export underscore
            return _;
        }());

        /* eslint-enable */
    });

    var require$$1 = (underscoreCustom && typeof underscoreCustom === 'object' && 'default' in underscoreCustom ? underscoreCustom['default'] : underscoreCustom);

    var webflowLib = __commonjs(function (module) {
        /**
         * Webflow: Core site library
         */

        var Webflow = {};
        var modules = {};
        var primary = [];
        var secondary = window.Webflow || [];
        var $ = window.jQuery;
        var $win = $(window);
        var $doc = $(document);
        var isFunction = $.isFunction;
        var _ = Webflow._ = require$$1;
        var tram = require$$0$2 && $.tram;
        var domready = false;
        var destroyed = false;
        var Modernizr = window.Modernizr;
        tram.config.hideBackface = false;
        tram.config.keepInherited = true;

        /**
         * Webflow.define - Define a named module
         * @param  {string} name
         * @param  {function} factory
         * @param  {object} options
         * @return {object}
         */
        Webflow.define = function(name, factory, options) {
            if (modules[name]) unbindModule(modules[name]);
            var instance = modules[name] = factory($, _, options) || {};
            bindModule(instance);
            return instance;
        };

        /**
         * Webflow.require - Require a named module
         * @param  {string} name
         * @return {object}
         */
        Webflow.require = function(name) {
            return modules[name];
        };

        function bindModule(module) {
            // If running in Webflow app, subscribe to design/preview events
            if (Webflow.env()) {
                isFunction(module.design) && $win.on('__wf_design', module.design);
                isFunction(module.preview) && $win.on('__wf_preview', module.preview);
            }
            // Subscribe to front-end destroy event
            isFunction(module.destroy) && $win.on('__wf_destroy', module.destroy);
            // Look for ready method on module
            if (module.ready && isFunction(module.ready)) {
                addReady(module);
            }
        }

        function addReady(module) {
            // If domready has already happened, run ready method
            if (domready) {
                module.ready();
                return;
            }
            // Otherwise add ready method to the primary queue (only once)
            if (_.contains(primary, module.ready)) return;
            primary.push(module.ready);
        }

        function unbindModule(module) {
            // Unsubscribe module from window events
            isFunction(module.design) && $win.off('__wf_design', module.design);
            isFunction(module.preview) && $win.off('__wf_preview', module.preview);
            isFunction(module.destroy) && $win.off('__wf_destroy', module.destroy);
            // Remove ready method from primary queue
            if (module.ready && isFunction(module.ready)) {
                removeReady(module);
            }
        }

        function removeReady(module) {
            primary = _.filter(primary, function(readyFn) {
                return readyFn !== module.ready;
            });
        }

        /**
         * Webflow.push - Add a ready handler into secondary queue
         * @param {function} ready  Callback to invoke on domready
         */
        Webflow.push = function(ready) {
            // If domready has already happened, invoke handler
            if (domready) {
                isFunction(ready) && ready();
                return;
            }
            // Otherwise push into secondary queue
            secondary.push(ready);
        };

        /**
         * Webflow.env - Get the state of the Webflow app
         * @param {string} mode [optional]
         * @return {boolean}
         */
        Webflow.env = function(mode) {
            var designFlag = window.__wf_design;
            var inApp = typeof designFlag !== 'undefined';
            if (!mode) return inApp;
            if (mode === 'design') return inApp && designFlag;
            if (mode === 'preview') return inApp && !designFlag;
            if (mode === 'slug') return inApp && window.__wf_slug;
            if (mode === 'editor') return window.WebflowEditor;
            if (mode === 'test') return false || window.__wf_test;
            if (mode === 'frame') return window !== window.top;
        };

        // Feature detects + browser sniffs  ಠ_ಠ
        var userAgent = navigator.userAgent.toLowerCase();
        var appVersion = navigator.appVersion.toLowerCase();
        var touch = Webflow.env.touch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch;
        var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(appVersion.match(/chrome\/(\d+)\./)[1], 10);
        var ios = Webflow.env.ios = Modernizr && Modernizr.ios;
        Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;

        // Maintain current touch target to prevent late clicks on touch devices
        var touchTarget;
        // Listen for both events to support touch/mouse hybrid devices
        touch && $doc.on('touchstart mousedown', function(evt) {
            touchTarget = evt.target;
        });

        /**
         * Webflow.validClick - validate click target against current touch target
         * @param  {HTMLElement} clickTarget  Element being clicked
         * @return {Boolean}  True if click target is valid (always true on non-touch)
         */
        Webflow.validClick = touch ? function(clickTarget) {
            return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
        } : function() { return true; };

        /**
         * Webflow.resize, Webflow.scroll - throttled event proxies
         */
        var resizeEvents = 'resize.webflow orientationchange.webflow load.webflow';
        var scrollEvents = 'scroll.webflow ' + resizeEvents;
        Webflow.resize = eventProxy($win, resizeEvents);
        Webflow.scroll = eventProxy($win, scrollEvents);
        Webflow.redraw = eventProxy();

        // Create a proxy instance for throttled events
        function eventProxy(target, types) {

            // Set up throttled method (using custom frame-based _.throttle)
            var handlers = [];
            var proxy = {};
            proxy.up = _.throttle(function(evt) {
                _.each(handlers, function(h) { h(evt); });
            });

            // Bind events to target
            if (target && types) target.on(types, proxy.up);

            /**
             * Add an event handler
             * @param  {function} handler
             */
            proxy.on = function(handler) {
                if (typeof handler !== 'function') return;
                if (_.contains(handlers, handler)) return;
                handlers.push(handler);
            };

            /**
             * Remove an event handler
             * @param  {function} handler
             */
            proxy.off = function(handler) {
                // If no arguments supplied, clear all handlers
                if (!arguments.length) {
                    handlers = [];
                    return;
                }
                // Otherwise, remove handler from the list
                handlers = _.filter(handlers, function(h) {
                    return h !== handler;
                });
            };

            return proxy;
        }

        // Webflow.location - Wrap window.location in api
        Webflow.location = function(url) {
            window.location = url;
        };

        // Webflow.app - Designer-specific methods
        Webflow.app = Webflow.env() ? {} : null;
        if (Webflow.app) {

            // Trigger redraw for specific elements
            var redraw = new Event('__wf_redraw');
            Webflow.app.redrawElement = function(i, el) { el.dispatchEvent(redraw); };

            // Webflow.location - Re-route location change to trigger an event
            Webflow.location = function(url) {
                window.dispatchEvent(new CustomEvent('__wf_location', { detail: url }));
            };
        }

        // Webflow.ready - Call primary and secondary handlers
        Webflow.ready = function() {
            domready = true;

            // Restore modules after destroy
            if (destroyed) {
                restoreModules();

                // Otherwise run primary ready methods
            } else {
                _.each(primary, callReady);
            }

            // Run secondary ready methods
            _.each(secondary, callReady);

            // Trigger resize
            Webflow.resize.up();
        };

        function callReady(readyFn) {
            isFunction(readyFn) && readyFn();
        }

        function restoreModules() {
            destroyed = false;
            _.each(modules, bindModule);
        }

        /**
         * Webflow.load - Add a window load handler that will run even if load event has already happened
         * @param  {function} handler
         */
        var deferLoad;
        Webflow.load = function(handler) {
            deferLoad.then(handler);
        };

        function bindLoad() {
            // Reject any previous deferred (to support destroy)
            if (deferLoad) {
                deferLoad.reject();
                $win.off('load', deferLoad.resolve);
            }
            // Create deferred and bind window load event
            deferLoad = new $.Deferred();
            $win.on('load', deferLoad.resolve);
        }

        // Webflow.destroy - Trigger a destroy event for all modules
        Webflow.destroy = function(options) {
            options = options || {};
            destroyed = true;
            $win.triggerHandler('__wf_destroy');

            // Allow domready reset for tests
            if (options.domready != null) {
                domready = options.domready;
            }

            // Unbind modules
            _.each(modules, unbindModule);

            // Clear any proxy event handlers
            Webflow.resize.off();
            Webflow.scroll.off();
            Webflow.redraw.off();

            // Clear any queued ready methods
            primary = [];
            secondary = [];

            // If load event has not yet fired, replace the deferred
            if (deferLoad.state() === 'pending') bindLoad();
        };

        // Listen for domready
        $(Webflow.ready);

        // Listen for window.onload and resolve deferred
        bindLoad();

        // Export commonjs module
        module.exports = window.Webflow = Webflow;
    });

    var require$$0$1 = (webflowLib && typeof webflowLib === 'object' && 'default' in webflowLib ? webflowLib['default'] : webflowLib);

    var webflowBackgroundVideo = __commonjs(function (module) {
        /**
         * Webflow: Background Video component
         */

        var Webflow = require$$0$1;
        var WebflowEnv = require$$0;

        Webflow.define('backgroundVideo', module.exports = function ($) {

            function ready () {
                var backgroundVideoNodes = $(document).find('.w-background-video');
                if (backgroundVideoNodes.length === 0) {
                    return;
                }

                backgroundVideoNodes.each(function (_, node) {
                    $(node).prepend(createVideoNode(node));
                });
            }

            function createVideoNode (nativeNode) {
                var nodeData = $(nativeNode).data();

                if (!nodeData.videoUrls) {
                    return $('<video />');
                }

                // Prevent loading the videos on mobile browsers as its likely that they
                // are on low-bandwidth connections.
                if (WebflowEnv.isMobile()) {
                    return $('<video />').css('background-image', 'url(' + nodeData.posterUrl + ')');
                }

                var videoURLs = nodeData.videoUrls.split(',');
                var sourceNodes = videoURLs.map(function (url) {
                    return $('<source />').attr({
                        src: url,
                        'data-wf-ignore': '',
                    });
                });

                var videoNode = $('<video />').attr({
                    autoplay: nodeData.autoplay,
                    loop: nodeData.loop,
                })
                    .css('background-image', 'url(' + nodeData.posterUrl + ')');

                videoNode.append(sourceNodes);

                return videoNode;
            }

            return { ready: ready };
        });
    });

    var webflowBrand = __commonjs(function (module) {
        /**
         * Webflow: Brand pages on the subdomain
         */

        var Webflow = require$$0$1;

        Webflow.define('brand', module.exports = function($) {
            var api = {};
            var $html = $('html');
            var $body = $('body');
            var namespace = '.w-webflow-badge';
            var location = window.location;
            var isPhantom = /PhantomJS/i.test(navigator.userAgent);
            var brandElement;

            // -----------------------------------
            // Module methods

            api.ready = function() {
                var shouldBrand = $html.attr('data-wf-status');
                var publishedDomain = $html.attr('data-wf-domain') || '';
                if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
                    shouldBrand = true;
                }
                if (shouldBrand && !isPhantom) {
                    brandElement = brandElement || createBadge();
                    ensureBrand();
                    setTimeout(ensureBrand, 500);
                }
            };

            function createBadge() {
                var $brand = $('<a class="w-webflow-badge"></a>')
                    .attr('href', 'https://webflow.com?utm_campaign=brandjs');

                var $logoArt = $('<img>')
                    .attr('src', 'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg')
                    .css({
                        marginRight: '8px',
                        width: '16px',
                    });

                var $logoText = $('<img>')
                    .attr('src', 'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg');

                $brand.append($logoArt, $logoText);
                return $brand[0];
            }

            function ensureBrand() {
                var found = $body.children(namespace);
                var match = found.length && found.get(0) === brandElement;
                var inEditor = Webflow.env('editor');
                if (match) {
                    // Remove brand when Editor is active
                    if (inEditor) {
                        found.remove();
                    }
                    // Exit early, brand is in place
                    return;
                }
                // Remove any invalid brand elements
                if (found.length) {
                    found.remove();
                }
                // Append the brand (unless Editor is active)
                if (!inEditor) {
                    $body.append(brandElement);
                }
            }

            // Export module
            return api;
        });
    });

    var webflowIxEvents = __commonjs(function (module) {
        'use strict';

        /**
         * Webflow: IX Event triggers for other modules
         */

        var $ = window.jQuery;
        var api = {};
        var eventQueue = [];
        var namespace = '.w-ix';

        var eventTriggers = {
            reset: function(i, el) {
                el.__wf_intro = null;
            },
            intro: function(i, el) {
                if (el.__wf_intro) return;
                el.__wf_intro = true;
                $(el).triggerHandler(api.types.INTRO);
            },
            outro: function(i, el) {
                if (!el.__wf_intro) return;
                el.__wf_intro = null;
                $(el).triggerHandler(api.types.OUTRO);
            }
        };

        api.triggers = {};

        api.types = {
            INTRO: 'w-ix-intro' + namespace,
            OUTRO: 'w-ix-outro' + namespace
        };

        // Trigger any events in queue + restore trigger methods
        api.init = function() {
            var count = eventQueue.length;
            for (var i = 0; i < count; i++) {
                var memo = eventQueue[i];
                memo[0](0, memo[1]);
            }
            eventQueue = [];
            $.extend(api.triggers, eventTriggers);
        };

        // Replace all triggers with async wrapper to queue events until init
        api.async = function() {
            for (var key in eventTriggers) {
                var func = eventTriggers[key];
                if (!eventTriggers.hasOwnProperty(key)) continue;

                // Replace trigger method with async wrapper
                api.triggers[key] = function(i, el) {
                    eventQueue.push([func, el]);
                };
            }
        };

        // Default triggers to async queue
        api.async();

        module.exports = api;
    });

    var require$$0$3 = (webflowIxEvents && typeof webflowIxEvents === 'object' && 'default' in webflowIxEvents ? webflowIxEvents['default'] : webflowIxEvents);

    var webflowDropdown = __commonjs(function (module) {
        /**
         * Webflow: Dropdown component
         */

        var Webflow = require$$0$1;
        var IXEvents = require$$0$3;

        Webflow.define('dropdown', module.exports = function($, _) {
            var api = {};
            var $doc = $(document);
            var $dropdowns;
            var designer;
            var inApp = Webflow.env();
            var touch = Webflow.env.touch;
            var namespace = '.w-dropdown';
            var stateOpen = 'w--open';
            var closeEvent = 'w-close' + namespace;
            var ix = IXEvents.triggers;

            // -----------------------------------
            // Module methods

            api.ready = api.design = api.preview = init;

            // -----------------------------------
            // Private methods

            function init() {
                designer = inApp && Webflow.env('design');

                // Find all instances on the page
                $dropdowns = $doc.find(namespace);
                $dropdowns.each(build);
            }

            function build(i, el) {
                var $el = $(el);

                // Store state in data
                var data = $.data(el, namespace);
                if (!data) data = $.data(el, namespace, { open: false, el: $el, config: {} });
                data.list = $el.children('.w-dropdown-list');
                data.toggle = $el.children('.w-dropdown-toggle');
                data.links = data.list.children('.w-dropdown-link');
                data.outside = outside(data);
                data.complete = complete(data);
                data.leave = leave(data);

                // Remove old events
                $el.off(namespace);
                data.toggle.off(namespace);

                // Set config from data attributes
                configure(data);

                if (data.nav) data.nav.off(namespace);
                data.nav = $el.closest('.w-nav');
                data.nav.on(closeEvent, handler(data));

                // Add events based on mode
                if (designer) {
                    $el.on('setting' + namespace, handler(data));
                } else {
                    data.toggle.on('tap' + namespace, toggle(data));
                    if (data.config.hover) {
                        data.toggle.on('mouseenter' + namespace, enter(data));
                    }
                    $el.on(closeEvent, handler(data));
                    // Close in preview mode
                    inApp && close(data);
                }
            }

            function configure(data) {
                data.config = {
                    hover: Boolean(data.el.attr('data-hover')) && !touch,
                    delay: Number(data.el.attr('data-delay')) || 0
                };
            }

            function handler(data) {
                return function(evt, options) {
                    options = options || {};

                    if (evt.type === 'w-close') {
                        return close(data);
                    }

                    if (evt.type === 'setting') {
                        configure(data);
                        options.open === true && open(data, true);
                        options.open === false && close(data, true);
                        return;
                    }
                };
            }

            function toggle(data) {
                return _.debounce(function() {
                    data.open ? close(data) : open(data);
                });
            }

            function open(data) {
                if (data.open) return;
                closeOthers(data);
                data.open = true;
                data.list.addClass(stateOpen);
                data.toggle.addClass(stateOpen);
                ix.intro(0, data.el[0]);
                Webflow.redraw.up();

                // Listen for tap outside events
                if (!designer) $doc.on('tap' + namespace, data.outside);
                if (data.hovering) data.el.on('mouseleave' + namespace, data.leave);

                // Clear previous delay
                window.clearTimeout(data.delayId);
            }

            function close(data, immediate) {
                if (!data.open) return;

                // Do not close hover-based menus if currently hovering
                if (data.config.hover && data.hovering) return;

                data.open = false;
                var config = data.config;
                ix.outro(0, data.el[0]);

                // Stop listening for tap outside events
                $doc.off('tap' + namespace, data.outside);
                data.el.off('mouseleave' + namespace, data.leave);

                // Clear previous delay
                window.clearTimeout(data.delayId);

                // Skip delay during immediate
                if (!config.delay || immediate) return data.complete();

                // Optionally wait for delay before close
                data.delayId = window.setTimeout(data.complete, config.delay);
            }

            function closeOthers(data) {
                var self = data.el[0];
                $dropdowns.each(function(i, other) {
                    var $other = $(other);
                    if ($other.is(self) || $other.has(self).length) return;
                    $other.triggerHandler(closeEvent);
                });
            }

            function outside(data) {
                // Unbind previous tap handler if it exists
                if (data.outside) $doc.off('tap' + namespace, data.outside);

                // Close menu when tapped outside
                return _.debounce(function(evt) {
                    if (!data.open) return;
                    var $target = $(evt.target);
                    if ($target.closest('.w-dropdown-toggle').length) return;
                    if (!data.el.is($target.closest(namespace))) {
                        close(data);
                    }
                });
            }

            function complete(data) {
                return function() {
                    data.list.removeClass(stateOpen);
                    data.toggle.removeClass(stateOpen);
                };
            }

            function enter(data) {
                return function() {
                    data.hovering = true;
                    open(data);
                };
            }

            function leave(data) {
                return function() {
                    data.hovering = false;
                    close(data);
                };
            }

            // Export module
            return api;
        });
    });

    var webflowEdit = __commonjs(function (module) {
        /**
         * Webflow: Editor loader
         */

        var Webflow = require$$0$1;

        Webflow.define('edit', module.exports = function($, _, options) {
            options = options || {};

            // Exit early in test env or when inside an iframe
            if (Webflow.env('test') || Webflow.env('frame')) {
                // Allow test fixtures to continue
                if (!options.fixture) {
                    return {exit: 1};
                }
            }

            var api = {};
            var $win = $(window);
            var $html = $(document.documentElement);
            var location = document.location;
            var hashchange = 'hashchange';
            var loaded;
            var loadEditor = options.load || load;
            var hasLocalStorage = false;

            try {
                // Check localStorage for editor data
                hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem('WebflowEditor');
            } catch (e) {
                // SecurityError: browser storage has been disabled
            }

            if (hasLocalStorage) {
                loadEditor();

            } else if (location.search) {
                // Check url query for `edit` parameter or any url ending in `?edit`
                if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
                    loadEditor();
                }

            } else {
                // Check hash fragment to support `#hash?edit`
                $win.on(hashchange, checkHash).triggerHandler(hashchange);
            }

            function checkHash() {
                if (loaded) return;
                // Load editor when hash contains `?edit`
                if (/\?edit/.test(location.hash)) loadEditor();
            }

            function load() {
                loaded = true;
                // Predefine global immediately to benefit Webflow.env
                window.WebflowEditor = true;
                $win.off(hashchange, checkHash);
                $.ajax({
                    url: cleanSlashes("https://editor-api.webflow.com" + '/api/editor/view'),
                    data: { siteId: $html.attr('data-wf-site') },
                    xhrFields: { withCredentials: true },
                    dataType: 'json',
                    crossDomain: true,
                    success: success
                });
            }

            function success(data) {
                if (!data) {
                    console.error('Could not load editor data');
                    return;
                }
                getScript(prefix(data.scriptPath), function () {
                    window.WebflowEditor(data);
                });
            }

            function getScript(url, done) {
                $.ajax({ type: 'GET', url: url, dataType: 'script', cache: true }).then(done, error);
            }

            function error(jqXHR, textStatus, errorThrown) {
                console.error('Could not load editor script: ' + textStatus);
                throw errorThrown;
            }

            function prefix(url) {
                return (url.indexOf('//') >= 0) ? url : cleanSlashes("https://editor-api.webflow.com" + url);
            }

            function cleanSlashes(url) {
                return url.replace(/([^:])\/\//g, '$1/');
            }

            // Export module
            return api;
        });
    });

    var xdomainMin = __commonjs(function (module) {
        /*!
   * jQuery-ajaxTransport-XDomainRequest - v1.0.3
   * 2014-12-16 WEBFLOW - Removed UMD wrapper
   * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
   * Copyright (c) 2014 Jason Moon (@JSONMOON)
   * @license MIT (/blob/master/LICENSE.txt)
   */
        module.exports=function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var httpRegEx=/^https?:\/\//i;var getOrPostRegEx=/^get|post$/i;var sameSchemeRegEx=new RegExp("^"+location.protocol,"i");$.ajaxTransport("* text html xml json",function(options,userOptions,jqXHR){if(!options.crossDomain||!options.async||!getOrPostRegEx.test(options.type)||!httpRegEx.test(options.url)||!sameSchemeRegEx.test(options.url)){return}var xdr=null;return{send:function(headers,complete){var postData="";var userType=(userOptions.dataType||"").toLowerCase();xdr=new XDomainRequest;if(/^\d+$/.test(userOptions.timeout)){xdr.timeout=userOptions.timeout}xdr.ontimeout=function(){complete(500,"timeout")};xdr.onload=function(){var allResponseHeaders="Content-Length: "+xdr.responseText.length+"\r\nContent-Type: "+xdr.contentType;var status={code:200,message:"success"};var responses={text:xdr.responseText};try{if(userType==="html"||/text\/html/i.test(xdr.contentType)){responses.html=xdr.responseText}else if(userType==="json"||userType!=="text"&&/\/json/i.test(xdr.contentType)){try{responses.json=$.parseJSON(xdr.responseText)}catch(e){status.code=500;status.message="parseerror"}}else if(userType==="xml"||userType!=="text"&&/\/xml/i.test(xdr.contentType)){var doc=new ActiveXObject("Microsoft.XMLDOM");doc.async=false;try{doc.loadXML(xdr.responseText)}catch(e){doc=undefined}if(!doc||!doc.documentElement||doc.getElementsByTagName("parsererror").length){status.code=500;status.message="parseerror";throw"Invalid XML: "+xdr.responseText}responses.xml=doc}}catch(parseMessage){throw parseMessage}finally{complete(status.code,status.message,responses,allResponseHeaders)}};xdr.onprogress=function(){};xdr.onerror=function(){complete(500,"error",{text:xdr.responseText})};if(userOptions.data){postData=$.type(userOptions.data)==="string"?userOptions.data:$.param(userOptions.data)}xdr.open(options.type,options.url);xdr.send(postData)},abort:function(){if(xdr){xdr.abort()}}}})}(window.jQuery);
    });

    var webflowForms = __commonjs(function (module) {
        /**
         * Webflow: Forms
         */

        var Webflow = require$$0$1;

        Webflow.define('forms', module.exports = function($, _) {
            var api = {};

            // Cross-Domain AJAX for IE8


            var $doc = $(document);
            var $forms;
            var loc = window.location;
            var retro = window.XDomainRequest && !window.atob;
            var namespace = '.w-form';
            var siteId;
            var emailField = /e(-)?mail/i;
            var emailValue = /^\S+@\S+$/;
            var alert = window.alert;
            var inApp = Webflow.env();
            var listening;

            // MailChimp domains: list-manage.com + mirrors
            var chimpRegex = /list-manage[1-9]?.com/i;

            var disconnected = _.debounce(function() {
                alert('Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.');
            }, 100);

            api.ready = api.design = api.preview = function() {
                // Init forms
                init();

                // Wire document events on published site only once
                if (!inApp && !listening) {
                    addListeners();
                }
            };

            function init() {
                siteId = $('html').attr('data-wf-site');

                $forms = $(namespace + ' form');
                if (!$forms.length) return;
                $forms.each(build);
            }

            function build(i, el) {
                // Store form state using namespace
                var $el = $(el);
                var data = $.data(el, namespace);
                if (!data) data = $.data(el, namespace, { form: $el }); // data.form

                reset(data);
                var wrap = $el.closest('div.w-form');
                data.done = wrap.find('> .w-form-done');
                data.fail = wrap.find('> .w-form-fail');

                var action = data.action = $el.attr('action');
                data.handler = null;
                data.redirect = $el.attr('data-redirect');

                // MailChimp form
                if (chimpRegex.test(action)) { data.handler = submitMailChimp; return; }

                // Custom form action
                if (action) return;

                // Webflow form
                if (siteId) { data.handler = submitWebflow; return; }

                // Alert for disconnected Webflow forms
                disconnected();
            }

            function addListeners() {
                listening = true;

                // Handle form submission for Webflow forms
                $doc.on('submit', namespace + ' form', function(evt) {
                    var data = $.data(this, namespace);
                    if (data.handler) {
                        data.evt = evt;
                        data.handler(data);
                    }
                });
            }

            // Reset data common to all submit handlers
            function reset(data) {
                var btn = data.btn = data.form.find(':input[type="submit"]');
                data.wait = data.btn.attr('data-wait') || null;
                data.success = false;
                btn.prop('disabled', false);
                data.label && btn.val(data.label);
            }

            // Disable submit button
            function disableBtn(data) {
                var btn = data.btn;
                var wait = data.wait;
                btn.prop('disabled', true);
                // Show wait text and store previous label
                if (wait) {
                    data.label = btn.val();
                    btn.val(wait);
                }
            }

            // Find form fields, validate, and set value pairs
            function findFields(form, result) {
                var status = null;
                result = result || {};

                // The ":input" selector is a jQuery shortcut to select all inputs, selects, textareas
                form.find(':input:not([type="submit"])').each(function(i, el) {
                    var field = $(el);
                    var type = field.attr('type');
                    var name = field.attr('data-name') || field.attr('name') || ('Field ' + (i + 1));
                    var value = field.val();

                    if (type === 'checkbox') {
                        value = field.is(':checked');
                    } if (type === 'radio') {
                        // Radio group value already processed
                        if (result[name] === null || typeof result[name] === 'string') {
                            return;
                        }

                        value = form.find('input[name="' + field.attr('name') + '"]:checked').val() || null;
                    }

                    if (typeof value === 'string') value = $.trim(value);
                    result[name] = value;
                    status = status || getStatus(field, type, name, value);
                });

                return status;
            }

            function getStatus(field, type, name, value) {
                var status = null;

                if (type === 'password') {
                    status = 'Passwords cannot be submitted.';
                } else if (field.attr('required')) {
                    if (!value) {
                        status = 'Please fill out the required field: ' + name;
                    } else if (emailField.test(name) || emailField.test(field.attr('type'))) {
                        if (!emailValue.test(value)) status = 'Please enter a valid email address for: ' + name;
                    }
                }

                return status;
            }

            // Submit form to Webflow
            function submitWebflow(data) {
                reset(data);

                var form = data.form;
                var payload = {
                    name: form.attr('data-name') || form.attr('name') || 'Untitled Form',
                    source: loc.href,
                    test: Webflow.env(),
                    fields: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html())
                };

                preventDefault(data);

                // Find & populate all fields
                var status = findFields(form, payload.fields);
                if (status) return alert(status);

                // Disable submit button
                disableBtn(data);

                // Read site ID
                // NOTE: If this site is exported, the HTML tag must retain the data-wf-site attribute for forms to work
                if (!siteId) { afterSubmit(data); return; }
                var url = "https://webflow.com" + '/api/v1/form/' + siteId;

                // Work around same-protocol IE XDR limitation - without this IE9 and below forms won't submit
                if (retro && url.indexOf("https://webflow.com") >= 0) {
                    url = url.replace("https://webflow.com", "http://formdata.webflow.com");
                }

                $.ajax({
                    url: url,
                    type: 'POST',
                    data: payload,
                    dataType: 'json',
                    crossDomain: true
                }).done(function() {
                    data.success = true;
                    afterSubmit(data);
                }).fail(function() {
                    afterSubmit(data);
                });
            }

            // Submit form to MailChimp
            function submitMailChimp(data) {
                reset(data);

                var form = data.form;
                var payload = {};

                // Skip Ajax submission if http/s mismatch, fallback to POST instead
                if (/^https/.test(loc.href) && !/^https/.test(data.action)) {
                    form.attr('method', 'post');
                    return;
                }

                preventDefault(data);

                // Find & populate all fields
                var status = findFields(form, payload);
                if (status) return alert(status);

                // Disable submit button
                disableBtn(data);

                // Use special format for MailChimp params
                var fullName;
                _.each(payload, function(value, key) {
                    if (emailField.test(key)) payload.EMAIL = value;
                    if (/^((full[ _-]?)?name)$/i.test(key)) fullName = value;
                    if (/^(first[ _-]?name)$/i.test(key)) payload.FNAME = value;
                    if (/^(last[ _-]?name)$/i.test(key)) payload.LNAME = value;
                });

                if (fullName && !payload.FNAME) {
                    fullName = fullName.split(' ');
                    payload.FNAME = fullName[0];
                    payload.LNAME = payload.LNAME || fullName[1];
                }

                // Use the (undocumented) MailChimp jsonp api
                var url = data.action.replace('/post?', '/post-json?') + '&c=?';
                // Add special param to prevent bot signups
                var userId = url.indexOf('u=') + 2;
                userId = url.substring(userId, url.indexOf('&', userId));
                var listId = url.indexOf('id=') + 3;
                listId = url.substring(listId, url.indexOf('&', listId));
                payload['b_' + userId + '_' + listId] = '';

                $.ajax({
                    url: url,
                    data: payload,
                    dataType: 'jsonp'
                }).done(function(resp) {
                    data.success = (resp.result === 'success' || /already/.test(resp.msg));
                    if (!data.success) console.info('MailChimp error: ' + resp.msg);
                    afterSubmit(data);
                }).fail(function() {
                    afterSubmit(data);
                });
            }

            // Common callback which runs after all Ajax submissions
            function afterSubmit(data) {
                var form = data.form;
                var redirect = data.redirect;
                var success = data.success;

                // Redirect to a success url if defined
                if (success && redirect) {
                    Webflow.location(redirect);
                    return;
                }

                // Show or hide status divs
                data.done.toggle(success);
                data.fail.toggle(!success);

                // Hide form on success
                form.toggle(!success);

                // Reset data and enable submit button
                reset(data);
            }

            function preventDefault(data) {
                data.evt && data.evt.preventDefault();
                data.evt = null;
            }

            // Export module
            return api;
        });
    });

    var webflowGplus = __commonjs(function (module) {
        /**
         * Webflow: Google+ widget
         */

        var Webflow = require$$0$1;

        Webflow.define('gplus', module.exports = function($) {
            var $doc = $(document);
            var api = {};
            var loaded;

            api.ready = function() {
                // Load Google+ API on the front-end
                if (!Webflow.env() && !loaded) init();
            };

            function init() {
                $doc.find('.w-widget-gplus').length && load();
            }

            function load() {
                loaded = true;
                $.getScript('https://apis.google.com/js/plusone.js');
            }

            // Export module
            return api;
        });
    });

    var webflowIx = __commonjs(function (module) {
        /**
         * Webflow: Interactions
         */

        var Webflow = require$$0$1;
        var IXEvents = require$$0$3;

        Webflow.define('ix', module.exports = function($, _) {
            var api = {};
            var designer;
            var $win = $(window);
            var namespace = '.w-ix';
            var tram = $.tram;
            var env = Webflow.env;
            var inApp = env();
            var emptyFix = env.chrome && env.chrome < 35;
            var transNone = 'none 0s ease 0s';
            var $subs = $();
            var config = {};
            var anchors = [];
            var loads = [];
            var readys = [];
            var destroyed;
            var readyDelay = 1;

            // Component types and proxy selectors
            var components = {
                tabs: '.w-tab-link, .w-tab-pane',
                dropdown: '.w-dropdown',
                slider: '.w-slide',
                navbar: '.w-nav'
            };

            // -----------------------------------
            // Module methods

            api.init = function(list) {
                setTimeout(function() { configure(list); }, 1);
            };

            api.preview = function() {
                designer = false;
                readyDelay = 100;
                setTimeout(function() { configure(window.__wf_ix); }, 1);
            };

            api.design = function() {
                designer = true;
                api.destroy();
            };

            api.destroy = function() {
                destroyed = true;
                $subs.each(teardown);
                Webflow.scroll.off(scroll);
                IXEvents.async();
                anchors = [];
                loads = [];
                readys = [];
            };

            api.ready = function() {
                // Redirect IX init while in design/preview modes
                if (inApp) return env('design') ? api.design() : api.preview();

                // Ready should only be used after destroy, as a way to re-init
                if (config && destroyed) {
                    destroyed = false;
                    init();
                }
            };

            api.run = run;
            api.style = inApp ? styleApp : stylePub;

            // -----------------------------------
            // Private methods

            function configure(list) {
                if (!list) return;

                // Map all interactions by slug
                config = {};
                _.each(list, function(item) {
                    config[item.slug] = item.value;
                });

                // Init ix after config
                init();
            }

            function init() {
                // Build each element's interaction keying from data attribute
                var els = $('[data-ix]');
                if (!els.length) return;
                els.each(teardown);
                els.each(build);

                // Listen for scroll events if any anchors exist
                if (anchors.length) {
                    Webflow.scroll.on(scroll);
                    setTimeout(scroll, 1);
                }

                // Handle loads or readys if they exist
                if (loads.length) Webflow.load(runLoads);
                if (readys.length) setTimeout(runReadys, readyDelay);

                // Trigger queued events, must happen after init
                IXEvents.init();

                // Trigger a redraw to ensure all IX intros play
                Webflow.redraw.up();
            }

            function build(i, el) {
                var $el = $(el);
                var id = $el.attr('data-ix');
                var ix = config[id];
                if (!ix) return;
                var triggers = ix.triggers;
                if (!triggers) return;

                // Set styles immediately to provide tram with starting transform values
                api.style($el, ix.style);

                _.each(triggers, function(trigger) {
                    var state = {};
                    var type = trigger.type;
                    var stepsB = trigger.stepsB && trigger.stepsB.length;

                    function runA() { run(trigger, $el, { group: 'A' }); }
                    function runB() { run(trigger, $el, { group: 'B' }); }

                    if (type === 'load') {
                        (trigger.preload && !inApp) ? loads.push(runA) : readys.push(runA);
                        return;
                    }

                    if (type === 'click') {
                        $el.on('click' + namespace, function(evt) {
                            // Avoid late clicks on touch devices
                            if (!Webflow.validClick(evt.currentTarget)) return;

                            // Prevent default on empty hash urls
                            if ($el.attr('href') === '#') evt.preventDefault();

                            run(trigger, $el, { group: state.clicked ? 'B' : 'A' });
                            if (stepsB) state.clicked = !state.clicked;
                        });
                        $subs = $subs.add($el);
                        return;
                    }

                    if (type === 'hover') {
                        $el.on('mouseenter' + namespace, runA);
                        $el.on('mouseleave' + namespace, runB);
                        $subs = $subs.add($el);
                        return;
                    }

                    if (type === 'scroll') {
                        anchors.push({
                            el: $el, trigger: trigger, state: { active: false },
                            offsetTop: convert(trigger.offsetTop),
                            offsetBot: convert(trigger.offsetBot)
                        });
                        return;
                    }

                    // Check for a proxy component selector
                    // type == [tabs, dropdown, slider, navbar]
                    var proxy = components[type];
                    if (proxy) {
                        var $proxy = $el.closest(proxy);
                        $proxy.on(IXEvents.types.INTRO, runA).on(IXEvents.types.OUTRO, runB);
                        $subs = $subs.add($proxy);
                        return;
                    }
                });
            }

            function convert(offset) {
                if (!offset) return 0;
                offset = String(offset);
                var result = parseInt(offset, 10);
                if (result !== result) return 0;
                if (offset.indexOf('%') > 0) {
                    result /= 100;
                    if (result >= 1) result = 0.999;
                }
                return result;
            }

            function teardown(i, el) {
                $(el).off(namespace);
            }

            function scroll() {
                var viewTop = $win.scrollTop();
                var viewHeight = $win.height();

                // Check each anchor for a valid scroll trigger
                var count = anchors.length;
                for (var i = 0; i < count; i++) {
                    var anchor = anchors[i];
                    var $el = anchor.el;
                    var trigger = anchor.trigger;
                    var stepsB = trigger.stepsB && trigger.stepsB.length;
                    var state = anchor.state;
                    var top = $el.offset().top;
                    var height = $el.outerHeight();
                    var offsetTop = anchor.offsetTop;
                    var offsetBot = anchor.offsetBot;
                    if (offsetTop < 1 && offsetTop > 0) offsetTop *= viewHeight;
                    if (offsetBot < 1 && offsetBot > 0) offsetBot *= viewHeight;
                    var active = (top + height - offsetTop >= viewTop && top + offsetBot <= viewTop + viewHeight);
                    if (active === state.active) continue;
                    if (active === false && !stepsB) continue;
                    state.active = active;
                    run(trigger, $el, { group: active ? 'A' : 'B' });
                }
            }

            function runLoads() {
                var count = loads.length;
                for (var i = 0; i < count; i++) {
                    loads[i]();
                }
            }

            function runReadys() {
                var count = readys.length;
                for (var i = 0; i < count; i++) {
                    readys[i]();
                }
            }

            function run(trigger, $el, opts, replay) {
                opts = opts || {};
                var done = opts.done;
                var preserve3d = trigger.preserve3d;

                // Do not run in designer unless forced
                if (designer && !opts.force) return;

                // Operate on a set of grouped steps
                var group = opts.group || 'A';
                var loop = trigger['loop' + group];
                var steps = trigger['steps' + group];
                if (!steps || !steps.length) return;
                if (steps.length < 2) loop = false;

                // One-time init before any loops
                if (!replay) {

                    // Find selector within element descendants, siblings, or query whole document
                    var selector = trigger.selector;
                    if (selector) {
                        if (trigger.descend) {
                            $el = $el.find(selector);
                        } else if (trigger.siblings) {
                            $el = $el.siblings(selector);
                        } else {
                            $el = $(selector);
                        }
                        if (inApp) $el.attr('data-ix-affect', 1);
                    }

                    // Apply empty fix for certain Chrome versions
                    if (emptyFix) $el.addClass('w-ix-emptyfix');

                    // Set preserve3d for triggers with 3d transforms
                    if (preserve3d) $el.css('transform-style', 'preserve-3d');
                }

                var _tram = tram($el);

                // Add steps
                var meta = {omit3d: !preserve3d};
                for (var i = 0; i < steps.length; i++) {
                    addStep(_tram, steps[i], meta);
                }

                function fin() {
                    // Run trigger again if looped
                    if (loop) return run(trigger, $el, opts, true);

                    // Reset any 'auto' values
                    if (meta.width === 'auto') _tram.set({ width: 'auto' });
                    if (meta.height === 'auto') _tram.set({ height: 'auto' });

                    // Run callback
                    done && done();
                }

                // Add final step to queue if tram has started
                meta.start ? _tram.then(fin) : fin();
            }

            function addStep(_tram, step, meta) {
                var addMethod = 'add';
                var startMethod = 'start';

                // Once the transition has started, we will always use then() to add to the queue.
                if (meta.start) addMethod = startMethod = 'then';

                // Parse transitions string on the current step
                var transitions = step.transition;
                if (transitions) {
                    transitions = transitions.split(',');
                    for (var i = 0; i < transitions.length; i++) {
                        var transition = transitions[i];
                        _tram[addMethod](transition);
                    }
                }

                // Build a clean object to pass to the tram method
                var clean = tramify(step, meta) || {};

                // Store last width and height values
                if (clean.width != null) meta.width = clean.width;
                if (clean.height != null) meta.height = clean.height;

                // When transitions are not present, set values immediately and continue queue.
                if (transitions == null) {

                    // If we have started, wrap set() in then() and reset queue
                    if (meta.start) {
                        _tram.then(function() {
                            var queue = this.queue;
                            this.set(clean);
                            if (clean.display) {
                                _tram.redraw();
                                Webflow.redraw.up();
                            }
                            this.queue = queue;
                            this.next();
                        });
                    } else {
                        _tram.set(clean);

                        // Always redraw after setting display
                        if (clean.display) {
                            _tram.redraw();
                            Webflow.redraw.up();
                        }
                    }

                    // Use the wait() method to kick off queue in absence of transitions.
                    var wait = clean.wait;
                    if (wait != null) {
                        _tram.wait(wait);
                        meta.start = true;
                    }

                    // Otherwise, when transitions are present
                } else {

                    // If display is present, handle it separately
                    if (clean.display) {
                        var display = clean.display;
                        delete clean.display;

                        // If we've already started, we need to wrap it in a then()
                        if (meta.start) {
                            _tram.then(function() {
                                var queue = this.queue;
                                this.set({ display: display }).redraw();
                                Webflow.redraw.up();
                                this.queue = queue;
                                this.next();
                            });
                        } else {
                            _tram.set({ display: display }).redraw();
                            Webflow.redraw.up();
                        }
                    }

                    // Otherwise, start a transition using the current start method.
                    _tram[startMethod](clean);
                    meta.start = true;
                }
            }

            // (In app) Set styles immediately and manage upstream transition
            function styleApp(el, data) {
                var _tram = tram(el);

                // Exit early when data is empty to avoid clearing upstream
                if ($.isEmptyObject(data)) return;

                // Get computed transition value
                el.css('transition', '');
                var computed = el.css('transition');

                // If computed is set to none, clear upstream
                if (computed === transNone) computed = _tram.upstream = null;

                // Set upstream transition to none temporarily
                _tram.upstream = transNone;

                // Set values immediately
                _tram.set(tramify(data));

                // Only restore upstream in preview mode
                _tram.upstream = computed;
            }

            // (Published) Set styles immediately on specified jquery element
            function stylePub(el, data) {
                tram(el).set(tramify(data));
            }

            // Build a clean object for tram
            function tramify(obj, meta) {
                var omit3d = meta && meta.omit3d;
                var result = {};
                var found = false;
                for (var key in obj) {
                    if (key === 'transition') continue;
                    if (key === 'keysort') continue;
                    if (omit3d) {
                        if (key === 'z' || key === 'rotateX' || key === 'rotateY' || key === 'scaleZ') {
                            continue;
                        }
                    }
                    result[key] = obj[key];
                    found = true;
                }
                // If empty, return null for tram.set/stop compliance
                return found ? result : null;
            }

            // Export module
            return api;
        });
    });

    var webflowLightbox = __commonjs(function (module) {
        /*eslint no-shadow: 0*/

        /**
         * Webflow: Lightbox component
         */

        var Webflow = require$$0$1;

        function createLightbox(window, document, $) {
            var tram = $.tram;
            var isArray = Array.isArray;
            var namespace = 'w-lightbox';
            var prefix = namespace + '-';
            var prefixRegex = /(^|\s+)/g;

            // Array of objects describing items to be displayed.
            var items = [];

            // Index of the currently displayed item.
            var currentIndex;

            // Object holding references to jQuery wrapped nodes.
            var $refs;

            // Instance of Spinner
            var spinner;

            function lightbox(thing, index) {
                items = isArray(thing) ? thing : [thing];

                if (!$refs) {
                    lightbox.build();
                }

                if (items.length > 1) {
                    $refs.items = $refs.empty;

                    items.forEach(function (item) {
                        var $thumbnail = dom('thumbnail');
                        var $item = dom('item').append($thumbnail);

                        $refs.items = $refs.items.add($item);

                        loadImage(item.thumbnailUrl || item.url, function ($image) {
                            if ($image.prop('width') > $image.prop('height')) {
                                addClass($image, 'wide');
                            } else {
                                addClass($image, 'tall');
                            }
                            $thumbnail.append(addClass($image, 'thumbnail-image'));
                        });
                    });

                    $refs.strip.empty().append($refs.items);
                    addClass($refs.content, 'group');
                }

                tram(
                    // Focus the lightbox to receive keyboard events.
                    removeClass($refs.lightbox, 'hide').focus()
                )
                    .add('opacity .3s')
                    .start({opacity: 1});

                // Prevent document from scrolling while lightbox is active.
                addClass($refs.html, 'noscroll');

                return lightbox.show(index || 0);
            }

            /**
             * Creates the DOM structure required by the lightbox.
             */
            lightbox.build = function () {
                // In case `build` is called more than once.
                lightbox.destroy();

                $refs = {
                    html: $(document.documentElement),
                    // Empty jQuery object can be used to build new ones using `.add`.
                    empty: $()
                };

                $refs.arrowLeft = dom('control left inactive');
                $refs.arrowRight = dom('control right inactive');
                $refs.close = dom('control close');

                $refs.spinner = dom('spinner');
                $refs.strip = dom('strip');

                spinner = new Spinner($refs.spinner, prefixed('hide'));

                $refs.content = dom('content')
                    .append($refs.spinner, $refs.arrowLeft, $refs.arrowRight, $refs.close);

                $refs.container = dom('container')
                    .append($refs.content, $refs.strip);

                $refs.lightbox = dom('backdrop hide')
                    .append($refs.container);

                // We are delegating events for performance reasons and also
                // to not have to reattach handlers when images change.
                $refs.strip.on('tap', selector('item'), itemTapHandler);
                $refs.content
                    .on('swipe', swipeHandler)
                    .on('tap', selector('left'), handlerPrev)
                    .on('tap', selector('right'), handlerNext)
                    .on('tap', selector('close'), handlerHide)
                    .on('tap', selector('image, caption'), handlerNext);
                $refs.container
                    .on('tap', selector('view, strip'), handlerHide)
                    // Prevent images from being dragged around.
                    .on('dragstart', selector('img'), preventDefault);
                $refs.lightbox
                    .on('keydown', keyHandler)
                    // IE loses focus to inner nodes without letting us know.
                    .on('focusin', focusThis);

                // The `tabindex` attribute is needed to enable non-input elements
                // to receive keyboard events.
                $('body').append($refs.lightbox.prop('tabIndex', 0));

                return lightbox;
            };

            /**
             * Dispose of DOM nodes created by the lightbox.
             */
            lightbox.destroy = function () {
                if (!$refs) {
                    return;
                }

                // Event handlers are also removed.
                removeClass($refs.html, 'noscroll');
                $refs.lightbox.remove();
                $refs = undefined;
            };

            /**
             * Show a specific item.
             */
            lightbox.show = function (index) {
                // Bail if we are already showing this item.
                if (index === currentIndex) {
                    return;
                }

                var item = items[index];
                if (!item) { return lightbox.hide(); }

                var previousIndex = currentIndex;
                currentIndex = index;
                spinner.show();

                // For videos, load an empty SVG with the video dimensions to preserve
                // the video’s aspect ratio while being responsive.
                var url = item.html && svgDataUri(item.width, item.height) || item.url;
                loadImage(url, function ($image) {
                    // Make sure this is the last item requested to be shown since
                    // images can finish loading in a different order than they were
                    // requested in.
                    if (index !== currentIndex) {
                        return;
                    }

                    var $figure = dom('figure', 'figure').append(addClass($image, 'image'));
                    var $frame = dom('frame').append($figure);
                    var $newView = dom('view').append($frame);
                    var $html;
                    var isIframe;

                    if (item.html) {
                        $html = $(item.html);
                        isIframe = $html.is('iframe');

                        if (isIframe) {
                            $html.on('load', transitionToNewView);
                        }

                        $figure.append(addClass($html, 'embed'));
                    }

                    if (item.caption) {
                        $figure.append(dom('caption', 'figcaption').text(item.caption));
                    }

                    $refs.spinner.before($newView);

                    if (!isIframe) {
                        transitionToNewView();
                    }

                    function transitionToNewView() {
                        spinner.hide();

                        if (index !== currentIndex) {
                            $newView.remove();
                            return;
                        }


                        toggleClass($refs.arrowLeft, 'inactive', index <= 0);
                        toggleClass($refs.arrowRight, 'inactive', index >= items.length - 1);

                        if ($refs.view) {
                            tram($refs.view)
                                .add('opacity .3s')
                                .start({opacity: 0})
                                .then(remover($refs.view));

                            tram($newView)
                                .add('opacity .3s')
                                .add('transform .3s')
                                .set({x: index > previousIndex ? '80px' : '-80px'})
                                .start({opacity: 1, x: 0});
                        } else {
                            $newView.css('opacity', 1);
                        }

                        $refs.view = $newView;

                        if ($refs.items) {
                            // Mark proper thumbnail as active
                            addClass(removeClass($refs.items, 'active').eq(index), 'active');
                        }
                    }
                });

                return lightbox;
            };

            /**
             * Hides the lightbox.
             */
            lightbox.hide = function () {
                tram($refs.lightbox)
                    .add('opacity .3s')
                    .start({opacity: 0})
                    .then(hideLightbox);

                return lightbox;
            };

            lightbox.prev = function () {
                if (currentIndex > 0) {
                    lightbox.show(currentIndex - 1);
                }
            };

            lightbox.next = function () {
                if (currentIndex < items.length - 1) {
                    lightbox.show(currentIndex + 1);
                }
            };

            function createHandler(action) {
                return function (event) {
                    // We only care about events triggered directly on the bound selectors.
                    if (this !== event.target) {
                        return;
                    }

                    event.stopPropagation();
                    event.preventDefault();

                    action();
                };
            }

            var handlerPrev = createHandler(lightbox.prev);
            var handlerNext = createHandler(lightbox.next);
            var handlerHide = createHandler(lightbox.hide);

            var itemTapHandler = function(event) {
                var index = $(this).index();

                event.preventDefault();
                lightbox.show(index);
            };

            var swipeHandler = function (event, data) {
                // Prevent scrolling.
                event.preventDefault();

                if (data.direction === 'left') {
                    lightbox.next();
                } else if (data.direction === 'right') {
                    lightbox.prev();
                }
            };

            var focusThis = function () {
                this.focus();
            };

            function preventDefault(event) {
                event.preventDefault();
            }

            function keyHandler(event) {
                var keyCode = event.keyCode;

                // [esc]
                if (keyCode === 27) {
                    lightbox.hide();

                    // [◀]
                } else if (keyCode === 37) {
                    lightbox.prev();

                    // [▶]
                } else if (keyCode === 39) {
                    lightbox.next();
                }
            }

            function hideLightbox() {
                // If the lightbox hasn't been destroyed already
                if ($refs) {
                    removeClass($refs.html, 'noscroll');
                    addClass($refs.lightbox, 'hide');
                    $refs.strip.empty();
                    $refs.view && $refs.view.remove();

                    // Reset some stuff
                    removeClass($refs.content, 'group');
                    addClass($refs.arrowLeft, 'inactive');
                    addClass($refs.arrowRight, 'inactive');

                    currentIndex = $refs.view = undefined;
                }
            }

            function loadImage(url, callback) {
                var $image = dom('img', 'img');

                $image.one('load', function () {
                    callback($image);
                });

                // Start loading image.
                $image.attr('src', url);

                return $image;
            }

            function remover($element) {
                return function () {
                    $element.remove();
                };
            }

            /**
             * Spinner
             */
            function Spinner($spinner, className, delay) {
                this.$element = $spinner;
                this.className = className;
                this.delay = delay || 200;
                this.hide();
            }

            Spinner.prototype.show = function () {
                var spinner = this;

                // Bail if we are already showing the spinner.
                if (spinner.timeoutId) {
                    return;
                }

                spinner.timeoutId = setTimeout(function () {
                    spinner.$element.removeClass(spinner.className);
                    delete spinner.timeoutId;
                }, spinner.delay);
            };

            Spinner.prototype.hide = function () {
                var spinner = this;
                if (spinner.timeoutId) {
                    clearTimeout(spinner.timeoutId);
                    delete spinner.timeoutId;
                    return;
                }

                spinner.$element.addClass(spinner.className);
            };

            function prefixed(string, isSelector) {
                return string.replace(prefixRegex, (isSelector ? ' .' : ' ') + prefix);
            }

            function selector(string) {
                return prefixed(string, true);
            }

            /**
             * jQuery.addClass with auto-prefixing
             * @param  {jQuery} Element to add class to
             * @param  {string} Class name that will be prefixed and added to element
             * @return {jQuery}
             */
            function addClass($element, className) {
                return $element.addClass(prefixed(className));
            }

            /**
             * jQuery.removeClass with auto-prefixing
             * @param  {jQuery} Element to remove class from
             * @param  {string} Class name that will be prefixed and removed from element
             * @return {jQuery}
             */
            function removeClass($element, className) {
                return $element.removeClass(prefixed(className));
            }

            /**
             * jQuery.toggleClass with auto-prefixing
             * @param  {jQuery}  Element where class will be toggled
             * @param  {string}  Class name that will be prefixed and toggled
             * @param  {boolean} Optional boolean that determines if class will be added or removed
             * @return {jQuery}
             */
            function toggleClass($element, className, shouldAdd) {
                return $element.toggleClass(prefixed(className), shouldAdd);
            }

            /**
             * Create a new DOM element wrapped in a jQuery object,
             * decorated with our custom methods.
             * @param  {string} className
             * @param  {string} [tag]
             * @return {jQuery}
             */
            function dom(className, tag) {
                return addClass($(document.createElement(tag || 'div')), className);
            }

            function svgDataUri(width, height) {
                var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '"/>';
                return 'data:image/svg+xml;charset=utf-8,' + encodeURI(svg);
            }

            // Compute some dimensions manually for iOS < 8, because of buggy support for VH.
            // Also, Android built-in browser does not support viewport units.
            (function () {
                var ua = window.navigator.userAgent;
                var iOSRegex = /(iPhone|iPad|iPod);[^OS]*OS (\d)/;
                var iOSMatches = ua.match(iOSRegex);
                var android = ua.indexOf('Android ') > -1 && ua.indexOf('Chrome') === -1;

                if (!android && (!iOSMatches || iOSMatches[2] > 7)) {
                    return;
                }

                var styleNode = document.createElement('style');
                document.head.appendChild(styleNode);
                window.addEventListener('orientationchange', refresh, true);

                function refresh() {
                    var vh = window.innerHeight;
                    var vw = window.innerWidth;
                    var content =
                        '.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {' +
                        'height:' + vh + 'px' +
                        '}' +
                        '.w-lightbox-view {' +
                        'width:' + vw + 'px' +
                        '}' +
                        '.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {' +
                        'height:' + (0.86 * vh) + 'px' +
                        '}' +
                        '.w-lightbox-image {' +
                        'max-width:' + vw + 'px;' +
                        'max-height:' + vh + 'px' +
                        '}' +
                        '.w-lightbox-group .w-lightbox-image {' +
                        'max-height:' + (0.86 * vh) + 'px' +
                        '}' +
                        '.w-lightbox-strip {' +
                        'padding: 0 ' + (0.01 * vh) + 'px' +
                        '}' +
                        '.w-lightbox-item {' +
                        'width:' + (0.1 * vh) + 'px;' +
                        'padding:' + (0.02 * vh) + 'px ' + (0.01 * vh) + 'px' +
                        '}' +
                        '.w-lightbox-thumbnail {' +
                        'height:' + (0.1 * vh) + 'px' +
                        '}' +
                        '@media (min-width: 768px) {' +
                        '.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {' +
                        'height:' + (0.96 * vh) + 'px' +
                        '}' +
                        '.w-lightbox-content {' +
                        'margin-top:' + (0.02 * vh) + 'px' +
                        '}' +
                        '.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {' +
                        'height:' + (0.84 * vh) + 'px' +
                        '}' +
                        '.w-lightbox-image {' +
                        'max-width:' + (0.96 * vw) + 'px;' +
                        'max-height:' + (0.96 * vh) + 'px' +
                        '}' +
                        '.w-lightbox-group .w-lightbox-image {' +
                        'max-width:' + (0.823 * vw) + 'px;' +
                        'max-height:' + (0.84 * vh) + 'px' +
                        '}' +
                        '}';

                    styleNode.textContent = content;
                }

                refresh();
            })();

            return lightbox;
        }

        Webflow.define('lightbox', module.exports = function($) {
            var api = {};
            var lightbox = createLightbox(window, document, $);
            var $doc = $(document);
            var $lightboxes;
            var designer;
            var inApp = Webflow.env();
            var namespace = '.w-lightbox';
            var groups;

            // -----------------------------------
            // Module methods

            api.ready = api.design = api.preview = init;

            // -----------------------------------
            // Private methods

            function init() {
                designer = inApp && Webflow.env('design');

                // Reset Lightbox
                lightbox.destroy();

                // Reset groups
                groups = {};

                // Find all instances on the page
                $lightboxes = $doc.find(namespace);

                // Instantiate all lighboxes
                $lightboxes.webflowLightBox();
            }

            jQuery.fn.extend({
                webflowLightBox: function() {
                    var $el = this;
                    $.each($el, function(i, el) {
                        // Store state in data
                        var data = $.data(el, namespace);
                        if (!data) {
                            data = $.data(el, namespace, {
                                el: $(el),
                                mode: 'images',
                                images: [],
                                embed: ''
                            });
                        }

                        // Remove old events
                        data.el.off(namespace);

                        // Set config from json script tag
                        configure(data);

                        // Add events based on mode
                        if (designer) {
                            data.el.on('setting' + namespace, configure.bind(null, data));
                        } else {
                            data.el
                                .on('tap' + namespace, tapHandler(data))
                                // Prevent page scrolling to top when clicking on lightbox triggers.
                                .on('click' + namespace, function (e) { e.preventDefault(); });
                        }
                    });
                }
            });

            function configure(data) {
                var json = data.el.children('.w-json').html();
                var groupName;
                var groupItems;

                if (!json) {
                    data.items = [];
                    return;
                }

                try {
                    json = JSON.parse(json);
                } catch (e) {
                    console.error('Malformed lightbox JSON configuration.', e);
                }

                supportOldLightboxJson(json);

                groupName = json.group;

                if (groupName) {
                    groupItems = groups[groupName];
                    if (!groupItems) {
                        groupItems = groups[groupName] = [];
                    }

                    data.items = groupItems;

                    if (json.items.length) {
                        data.index = groupItems.length;
                        groupItems.push.apply(groupItems, json.items);
                    }
                } else {
                    data.items = json.items;
                }
            }

            function tapHandler(data) {
                return function () {
                    data.items.length && lightbox(data.items, data.index || 0);
                };
            }

            function supportOldLightboxJson(data) {
                if (data.images) {
                    data.images.forEach(function (item) {
                        item.type = 'image';
                    });
                    data.items = data.images;
                }

                if (data.embed) {
                    data.embed.type = 'video';
                    data.items = [data.embed];
                }

                if (data.groupId) {
                    data.group = data.groupId;
                }
            }

            // Export module
            return api;
        });
    });

    var webflowLinks = __commonjs(function (module) {
        /**
         * Webflow: Auto-select links to current page or section
         */

        var Webflow = require$$0$1;

        Webflow.define('links', module.exports = function($, _) {
            var api = {};
            var $win = $(window);
            var designer;
            var inApp = Webflow.env();
            var location = window.location;
            var tempLink = document.createElement('a');
            var linkCurrent = 'w--current';
            var validHash = /^#[a-zA-Z][\w:.-]*$/;
            var indexPage = /index\.(html|php)$/;
            var dirList = /\/$/;
            var anchors;
            var slug;

            // -----------------------------------
            // Module methods

            api.ready = api.design = api.preview = init;

            // -----------------------------------
            // Private methods

            function init() {
                designer = inApp && Webflow.env('design');
                slug = Webflow.env('slug') || location.pathname || '';

                // Reset scroll listener, init anchors
                Webflow.scroll.off(scroll);
                anchors = [];

                // Test all links for a selectable href
                var links = document.links;
                for (var i = 0; i < links.length; ++i) {
                    select(links[i]);
                }

                // Listen for scroll if any anchors exist
                if (anchors.length) {
                    Webflow.scroll.on(scroll);
                    scroll();
                }
            }

            function select(link) {
                var href = (designer && link.getAttribute('href-disabled')) || link.getAttribute('href');
                tempLink.href = href;

                // Ignore any hrefs with a colon to safely avoid all uri schemes
                if (href.indexOf(':') >= 0) return;

                var $link = $(link);

                // Check for valid hash links w/ sections and use scroll anchor
                if (href.indexOf('#') === 0 && validHash.test(href)) {
                    var $section = $(href);
                    $section.length && anchors.push({ link: $link, sec: $section, active: false });
                    return;
                }

                // Ignore empty # links
                if (href === '#') return;

                // Determine whether the link should be selected
                var match = (tempLink.href === location.href) || (href === slug) || (indexPage.test(href) && dirList.test(slug));
                setClass($link, linkCurrent, match);
            }

            function scroll() {
                var viewTop = $win.scrollTop();
                var viewHeight = $win.height();

                // Check each anchor for a section in view
                _.each(anchors, function(anchor) {
                    var $link = anchor.link;
                    var $section = anchor.sec;
                    var top = $section.offset().top;
                    var height = $section.outerHeight();
                    var offset = viewHeight * 0.5;
                    var active = ($section.is(':visible') &&
                        top + height - offset >= viewTop &&
                        top + offset <= viewTop + viewHeight);
                    if (anchor.active === active) return;
                    anchor.active = active;
                    setClass($link, linkCurrent, active);
                    if (designer) $link[0].__wf_current = active;
                });
            }

            function setClass($elem, className, add) {
                var exists = $elem.hasClass(className);
                if (add && exists) return;
                if (!add && !exists) return;
                add ? $elem.addClass(className) : $elem.removeClass(className);
            }

            // Export module
            return api;
        });
    });

    var webflowMaps = __commonjs(function (module) {
        /**
         * Webflow: Maps widget
         */

        var Webflow = require$$0$1;

        Webflow.define('maps', module.exports = function($, _) {
            var api = {};
            var $doc = $(document);
            var google = null;
            var $maps;
            var namespace = '.w-widget-map';
            var apiKey = 'AIzaSyBks0W0NawnPju70JQS5XXPOTTrguDQjWE';

            // -----------------------------------
            // Module methods

            api.ready = function() {
                // Init Maps on the front-end
                if (!Webflow.env()) initMaps();
            };

            api.preview = function() {
                // Update active map nodes
                $maps = $doc.find(namespace);
                // Listen for resize events
                Webflow.resize.off(triggerRedraw);
                if ($maps.length) {
                    Webflow.resize.on(triggerRedraw);
                    triggerRedraw();
                }
            };

            api.design = function() {
                // Update active map nodes
                $maps = $doc.find(namespace);
                // Stop listening for resize events
                Webflow.resize.off(triggerRedraw);
                // Redraw to account for page changes
                $maps.length && _.defer(triggerRedraw);
            };

            api.destroy = removeListeners;

            // -----------------------------------
            // Private methods

            // Trigger redraw in designer or preview mode
            function triggerRedraw() {
                if ($maps.length && Webflow.app) {
                    $maps.each(Webflow.app.redrawElement);
                }
            }

            function initMaps() {
                $maps = $doc.find(namespace);
                if (!$maps.length) return;

                if (google === null) {
                    $.getScript('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded&key=' + apiKey);
                    window._wf_maps_loaded = mapsLoaded;
                } else {
                    mapsLoaded();
                }

                function mapsLoaded() {
                    window._wf_maps_loaded = function() {};
                    google = window.google;
                    $maps.each(renderMap);
                    removeListeners();
                    addListeners();
                }
            }

            function removeListeners() {
                Webflow.resize.off(resizeMaps);
                Webflow.redraw.off(resizeMaps);
            }

            function addListeners() {
                Webflow.resize.on(resizeMaps);
                Webflow.redraw.on(resizeMaps);
            }

            // Render map onto each element
            function renderMap(i, el) {
                var data = $(el).data();
                getState(el, data);
            }

            function resizeMaps() {
                $maps.each(resizeMap);
            }

            // Resize map when window changes
            function resizeMap(i, el) {
                var state = getState(el);
                google.maps.event.trigger(state.map, 'resize');
                state.setMapPosition();
            }

            // Store state on element data
            var store = 'w-widget-map';
            function getState(el, data) {

                var state = $.data(el, store);
                if (state) return state;

                var $el = $(el);
                state = $.data(el, store, {
                    // Default options
                    latLng: '51.511214,-0.119824',
                    tooltip: '',
                    style: 'roadmap',
                    zoom: 12,

                    // Marker
                    marker: new google.maps.Marker({
                        draggable: false
                    }),

                    // Tooltip infowindow
                    infowindow: new google.maps.InfoWindow({
                        disableAutoPan: true
                    })
                });

                // LatLng center point
                var latLng = data.widgetLatlng || state.latLng;
                state.latLng = latLng;
                var coords = latLng.split(',');
                var latLngObj = new google.maps.LatLng(coords[0], coords[1]);
                state.latLngObj = latLngObj;

                // Disable touch events
                var mapDraggable = !(Webflow.env.touch && data.disableTouch);

                // Map instance
                state.map = new google.maps.Map(el, {
                    center: state.latLngObj,
                    zoom: state.zoom,
                    maxZoom: 18,
                    mapTypeControl: false,
                    panControl: false,
                    streetViewControl: false,
                    scrollwheel: !data.disableScroll,
                    draggable: mapDraggable,
                    zoomControl: true,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL
                    },
                    mapTypeId: state.style
                });
                state.marker.setMap(state.map);

                // Set map position and offset
                state.setMapPosition = function() {
                    state.map.setCenter(state.latLngObj);
                    var offsetX = 0;
                    var offsetY = 0;
                    var padding = $el.css(['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']);
                    offsetX -= parseInt(padding.paddingLeft, 10);
                    offsetX += parseInt(padding.paddingRight, 10);
                    offsetY -= parseInt(padding.paddingTop, 10);
                    offsetY += parseInt(padding.paddingBottom, 10);
                    if (offsetX || offsetY) {
                        state.map.panBy(offsetX, offsetY);
                    }
                    $el.css('position', ''); // Remove injected position
                };

                // Fix position after first tiles have loaded
                google.maps.event.addListener(state.map, 'tilesloaded', function() {
                    google.maps.event.clearListeners(state.map, 'tilesloaded');
                    state.setMapPosition();
                });

                // Set initial position
                state.setMapPosition();
                state.marker.setPosition(state.latLngObj);
                state.infowindow.setPosition(state.latLngObj);

                // Draw tooltip
                var tooltip = data.widgetTooltip;
                if (tooltip) {
                    state.tooltip = tooltip;
                    state.infowindow.setContent(tooltip);
                    if (!state.infowindowOpen) {
                        state.infowindow.open(state.map, state.marker);
                        state.infowindowOpen = true;
                    }
                }

                // Map style - options.style
                var style = data.widgetStyle;
                if (style) {
                    state.map.setMapTypeId(style);
                }

                // Zoom - options.zoom
                var zoom = data.widgetZoom;
                if (zoom != null) {
                    state.zoom = zoom;
                    state.map.setZoom(Number(zoom));
                }

                // Click marker to open in google maps
                google.maps.event.addListener(state.marker, 'click', function() {
                    window.open('https://maps.google.com/?z=' + state.zoom + '&daddr=' + state.latLng);
                });

                return state;
            }

            // Export module
            return api;
        });
    });

    var webflowNavbar = __commonjs(function (module) {
        /**
         * Webflow: Navbar component
         */

        var Webflow = require$$0$1;
        var IXEvents = require$$0$3;

        Webflow.define('navbar', module.exports = function($, _) {
            var api = {};
            var tram = $.tram;
            var $win = $(window);
            var $doc = $(document);
            var $body;
            var $navbars;
            var designer;
            var inApp = Webflow.env();
            var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
            var namespace = '.w-nav';
            var buttonOpen = 'w--open';
            var menuOpen = 'w--nav-menu-open';
            var linkOpen = 'w--nav-link-open';
            var ix = IXEvents.triggers;
            var menuSibling = $();

            // -----------------------------------
            // Module methods

            api.ready = api.design = api.preview = init;

            api.destroy = function() {
                menuSibling = $();
                removeListeners();
                if ($navbars && $navbars.length) {
                    $navbars.each(teardown);
                }
            };

            // -----------------------------------
            // Private methods

            function init() {
                designer = inApp && Webflow.env('design');
                $body = $(document.body);

                // Find all instances on the page
                $navbars = $doc.find(namespace);
                if (!$navbars.length) return;
                $navbars.each(build);

                // Wire events
                removeListeners();
                addListeners();
            }

            function removeListeners() {
                Webflow.resize.off(resizeAll);
            }

            function addListeners() {
                Webflow.resize.on(resizeAll);
            }

            function resizeAll() {
                $navbars.each(resize);
            }

            function build(i, el) {
                var $el = $(el);

                // Store state in data
                var data = $.data(el, namespace);
                if (!data) data = $.data(el, namespace, { open: false, el: $el, config: {} });
                data.menu = $el.find('.w-nav-menu');
                data.links = data.menu.find('.w-nav-link');
                data.dropdowns = data.menu.find('.w-dropdown');
                data.button = $el.find('.w-nav-button');
                data.container = $el.find('.w-container');
                data.outside = outside(data);

                // Remove old events
                data.el.off(namespace);
                data.button.off(namespace);
                data.menu.off(namespace);

                // Set config from data attributes
                configure(data);

                // Add events based on mode
                if (designer) {
                    removeOverlay(data);
                    data.el.on('setting' + namespace, handler(data));
                } else {
                    addOverlay(data);
                    data.button.on('click' + namespace, toggle(data));
                    data.menu.on('click' + namespace, 'a', navigate(data));
                }

                // Trigger initial resize
                resize(i, el);
            }

            function teardown(i, el) {
                var data = $.data(el, namespace);
                if (data) {
                    removeOverlay(data);
                    $.removeData(el, namespace);
                }
            }

            function removeOverlay(data) {
                if (!data.overlay) return;
                close(data, true);
                data.overlay.remove();
                data.overlay = null;
            }

            function addOverlay(data) {
                if (data.overlay) return;
                data.overlay = $(overlay).appendTo(data.el);
                data.parent = data.menu.parent();
                close(data, true);
            }

            function configure(data) {
                var config = {};
                var old = data.config || {};

                // Set config options from data attributes
                var animation = config.animation = data.el.attr('data-animation') || 'default';
                config.animOver = /^over/.test(animation);
                config.animDirect = /left$/.test(animation) ? -1 : 1;

                // Re-open menu if the animation type changed
                if (old.animation !== animation) {
                    data.open && _.defer(reopen, data);
                }

                config.easing = data.el.attr('data-easing') || 'ease';
                config.easing2 = data.el.attr('data-easing2') || 'ease';

                var duration = data.el.attr('data-duration');
                config.duration = duration != null ? Number(duration) : 400;

                config.docHeight = data.el.attr('data-doc-height');

                // Store config in data
                data.config = config;
            }

            function handler(data) {
                return function(evt, options) {
                    options = options || {};
                    var winWidth = $win.width();
                    configure(data);
                    options.open === true && open(data, true);
                    options.open === false && close(data, true);
                    // Reopen if media query changed after setting
                    data.open && _.defer(function() {
                        if (winWidth !== $win.width()) reopen(data);
                    });
                };
            }

            function reopen(data) {
                if (!data.open) return;
                close(data, true);
                open(data, true);
            }

            function toggle(data) {
                // Debounce toggle to wait for accurate open state
                return _.debounce(function() {
                    data.open ? close(data) : open(data);
                });
            }

            function navigate(data) {
                return function(evt) {
                    var link = $(this);
                    var href = link.attr('href');

                    // Avoid late clicks on touch devices
                    if (!Webflow.validClick(evt.currentTarget)) {
                        evt.preventDefault();
                        return;
                    }

                    // Close when navigating to an in-page anchor
                    if (href && href.indexOf('#') === 0 && data.open) {
                        close(data);
                    }
                };
            }

            function outside(data) {
                // Unbind previous tap handler if it exists
                if (data.outside) $doc.off('tap' + namespace, data.outside);

                // Close menu when tapped outside, debounced to wait for state
                return _.debounce(function(evt) {
                    if (!data.open) return;
                    var menu = $(evt.target).closest('.w-nav-menu');
                    if (!data.menu.is(menu)) {
                        close(data);
                    }
                });
            }

            function resize(i, el) {
                var data = $.data(el, namespace);
                // Check for collapsed state based on button display
                var collapsed = data.collapsed = data.button.css('display') !== 'none';
                // Close menu if button is no longer visible (and not in designer)
                if (data.open && !collapsed && !designer) close(data, true);
                // Set max-width of links + dropdowns to match container
                if (data.container.length) {
                    var updateEachMax = updateMax(data);
                    data.links.each(updateEachMax);
                    data.dropdowns.each(updateEachMax);
                }
                // If currently open, update height to match body
                if (data.open) {
                    setOverlayHeight(data);
                }
            }

            var maxWidth = 'max-width';
            function updateMax(data) {
                // Set max-width of each element to match container
                var containMax = data.container.css(maxWidth);
                if (containMax === 'none') containMax = '';
                return function(i, link) {
                    link = $(link);
                    link.css(maxWidth, '');
                    // Don't set the max-width if an upstream value exists
                    if (link.css(maxWidth) === 'none') link.css(maxWidth, containMax);
                };
            }

            function open(data, immediate) {
                if (data.open) return;
                data.open = true;
                data.menu.addClass(menuOpen);
                data.links.addClass(linkOpen);
                data.button.addClass(buttonOpen);
                var config = data.config;
                var animation = config.animation;
                if (animation === 'none' || !tram.support.transform) immediate = true;
                var bodyHeight = setOverlayHeight(data);
                var menuHeight = data.menu.outerHeight(true);
                var menuWidth = data.menu.outerWidth(true);
                var navHeight = data.el.height();
                var navbarEl = data.el[0];
                resize(0, navbarEl);
                ix.intro(0, navbarEl);
                Webflow.redraw.up();

                // Listen for tap outside events
                if (!designer) $doc.on('tap' + namespace, data.outside);

                // No transition for immediate
                if (immediate) return;

                var transConfig = 'transform ' + config.duration + 'ms ' + config.easing;

                // Add menu to overlay
                if (data.overlay) {
                    menuSibling = data.menu.prev();
                    data.overlay.show().append(data.menu);
                }

                // Over left/right
                if (config.animOver) {
                    tram(data.menu)
                        .add(transConfig)
                        .set({ x: config.animDirect * menuWidth, height: bodyHeight }).start({ x: 0 });
                    data.overlay && data.overlay.width(menuWidth);
                    return;
                }

                // Drop Down
                var offsetY = navHeight + menuHeight;
                tram(data.menu)
                    .add(transConfig)
                    .set({ y: -offsetY }).start({ y: 0 });
            }

            function setOverlayHeight(data) {
                var config = data.config;
                var bodyHeight = config.docHeight ? $doc.height() : $body.height();
                if (config.animOver) {
                    data.menu.height(bodyHeight);
                } else if (data.el.css('position') !== 'fixed') {
                    bodyHeight -= data.el.height();
                }
                data.overlay && data.overlay.height(bodyHeight);
                return bodyHeight;
            }

            function close(data, immediate) {
                if (!data.open) return;
                data.open = false;
                data.button.removeClass(buttonOpen);
                var config = data.config;
                if (config.animation === 'none' || !tram.support.transform || config.duration <= 0) immediate = true;
                ix.outro(0, data.el[0]);

                // Stop listening for tap outside events
                $doc.off('tap' + namespace, data.outside);

                if (immediate) {
                    tram(data.menu).stop();
                    complete();
                    return;
                }

                var transConfig = 'transform ' + config.duration + 'ms ' + config.easing2;
                var menuHeight = data.menu.outerHeight(true);
                var menuWidth = data.menu.outerWidth(true);
                var navHeight = data.el.height();

                // Over left/right
                if (config.animOver) {
                    tram(data.menu)
                        .add(transConfig)
                        .start({ x: menuWidth * config.animDirect }).then(complete);
                    return;
                }

                // Drop Down
                var offsetY = navHeight + menuHeight;
                tram(data.menu)
                    .add(transConfig)
                    .start({ y: -offsetY }).then(complete);

                function complete() {
                    data.menu.height('');
                    tram(data.menu).set({ x: 0, y: 0 });
                    data.menu.removeClass(menuOpen);
                    data.links.removeClass(linkOpen);
                    if (data.overlay && data.overlay.children().length) {
                        // Move menu back to parent at the original location
                        menuSibling.length ? data.menu.insertAfter(menuSibling) : data.menu.prependTo(data.parent);
                        data.overlay.attr('style', '').hide();
                    }

                    // Trigger event so other components can hook in (dropdown)
                    data.el.triggerHandler('w-close');
                }
            }

            // Export module
            return api;
        });
    });

    var webflowScroll = __commonjs(function (module) {
        /**
         * Webflow: Smooth scroll
         */

        var Webflow = require$$0$1;

        Webflow.define('scroll', module.exports = function($) {
            var $doc = $(document);
            var win = window;
            var loc = win.location;
            var history = inIframe() ? null : win.history;
            var validHash = /^[a-zA-Z0-9][\w:.-]*$/;

            function inIframe() {
                try {
                    return Boolean(win.frameElement);
                } catch (e) {
                    return true;
                }
            }

            function ready() {
                // If hash is already present on page load, scroll to it right away
                if (loc.hash) {
                    findEl(loc.hash.substring(1));
                }

                // The current page url without the hash part.
                var locHref = loc.href.split('#')[0];

                // When clicking on a link, check if it links to another part of the page
                $doc.on('click', 'a', function(e) {
                    if (Webflow.env('design')) {
                        return;
                    }

                    // Ignore links being used by jQuery mobile
                    if (window.$.mobile && $(e.currentTarget).hasClass('ui-link')) return;

                    // Ignore empty # links
                    if (this.getAttribute('href') === '#') {
                        e.preventDefault();
                        return;
                    }

                    // The href property always contains the full url so we can compare
                    // with the document’s location to only target links on this page.
                    var parts = this.href.split('#');
                    var hash = parts[0] === locHref ? parts[1] : null;
                    if (hash) {
                        findEl(hash, e);
                    }
                });
            }

            function findEl(hash, e) {
                if (!validHash.test(hash)) return;

                var el = $('#' + hash);
                if (!el.length) {
                    return;
                }

                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }

                // Push new history state
                if (
                    loc.hash !== hash &&
                    history && history.pushState &&
                    // Navigation breaks Chrome when the protocol is `file:`.
                    !(Webflow.env.chrome && loc.protocol === 'file:')
                ) {
                    var oldHash = history.state && history.state.hash;
                    if (oldHash !== hash) {
                        history.pushState({ hash: hash }, '', '#' + hash);
                    }
                }

                // If a fixed header exists, offset for the height
                var rootTag = Webflow.env('editor') ? '.w-editor-body' : 'body';
                var header = $('header, ' + rootTag + ' > .header, ' + rootTag + ' > .w-nav:not([data-no-scroll])');
                var offset = header.css('position') === 'fixed' ? header.outerHeight() : 0;

                win.setTimeout(function() {
                    scroll(el, offset);
                }, e ? 0 : 300);
            }

            function scroll(el, offset){
                var start = $(win).scrollTop();
                var end = el.offset().top - offset;

                // If specified, scroll so that the element ends up in the middle of the viewport
                if (el.data('scroll') === 'mid') {
                    var available = $(win).height() - offset;
                    var elHeight = el.outerHeight();
                    if (elHeight < available) {
                        end -= Math.round((available - elHeight) / 2);
                    }
                }

                var mult = 1;

                // Check for custom time multiplier on the body and the element
                $('body').add(el).each(function() {
                    var time = parseFloat($(this).attr('data-scroll-time'), 10);
                    if (!isNaN(time) && (time === 0 || time > 0)) {
                        mult = time;
                    }
                });

                // Shim for IE8 and below
                if (!Date.now) {
                    Date.now = function() { return new Date().getTime(); };
                }

                var clock = Date.now();
                var animate = win.requestAnimationFrame || win.mozRequestAnimationFrame || win.webkitRequestAnimationFrame || function(fn) { win.setTimeout(fn, 15); };
                var duration = (472.143 * Math.log(Math.abs(start - end) +125) - 2000) * mult;

                var step = function() {
                    var elapsed = Date.now() - clock;
                    win.scroll(0, getY(start, end, elapsed, duration));

                    if (elapsed <= duration) {
                        animate(step);
                    }
                };

                step();
            }

            function getY(start, end, elapsed, duration) {
                if (elapsed > duration) {
                    return end;
                }

                return start + (end - start) * ease(elapsed / duration);
            }

            function ease(t) {
                return t<0.5 ? 4 * t * t * t : (t-1) * (2 * t-2) * (2 * t-2)+1;
            }

            // Export module
            return { ready: ready };
        });
    });

    var webflowSlider = __commonjs(function (module) {
        /**
         * Webflow: Slider component
         */

        var Webflow = require$$0$1;
        var IXEvents = require$$0$3;

        Webflow.define('slider', module.exports = function($, _) {
            var api = {};
            var tram = $.tram;
            var $doc = $(document);
            var $sliders;
            var designer;
            var inApp = Webflow.env();
            var namespace = '.w-slider';
            var dot = '<div class="w-slider-dot" data-wf-ignore />';
            var ix = IXEvents.triggers;
            var fallback;
            var inRedraw;

            // -----------------------------------
            // Module methods

            api.ready = function() {
                designer = Webflow.env('design');
                init();
            };

            api.design = function() {
                designer = true;
                init();
            };

            api.preview = function() {
                designer = false;
                init();
            };

            api.redraw = function() {
                inRedraw = true;
                init();
            };

            api.destroy = removeListeners;

            // -----------------------------------
            // Private methods

            function init() {
                // Find all sliders on the page
                $sliders = $doc.find(namespace);
                if (!$sliders.length) return;
                $sliders.filter(':visible').each(build);
                inRedraw = null;
                if (fallback) return;

                removeListeners();
                addListeners();
            }

            function removeListeners() {
                Webflow.resize.off(renderAll);
                Webflow.redraw.off(api.redraw);
            }

            function addListeners() {
                Webflow.resize.on(renderAll);
                Webflow.redraw.on(api.redraw);
            }

            function renderAll() {
                $sliders.filter(':visible').each(render);
            }

            function build(i, el) {
                var $el = $(el);

                // Store slider state in data
                var data = $.data(el, namespace);
                if (!data) {
                    data = $.data(el, namespace, {
                        index: 0,
                        depth: 1,
                        el: $el,
                        config: {}
                    });
                }
                data.mask = $el.children('.w-slider-mask');
                data.left = $el.children('.w-slider-arrow-left');
                data.right = $el.children('.w-slider-arrow-right');
                data.nav = $el.children('.w-slider-nav');
                data.slides = data.mask.children('.w-slide');
                data.slides.each(ix.reset);
                if (inRedraw) data.maskWidth = 0;

                // Disable in old browsers
                if (!tram.support.transform) {
                    data.left.hide();
                    data.right.hide();
                    data.nav.hide();
                    fallback = true;
                    return;
                }

                // Remove old events
                data.el.off(namespace);
                data.left.off(namespace);
                data.right.off(namespace);
                data.nav.off(namespace);

                // Set config from data attributes
                configure(data);

                // Add events based on mode
                if (designer) {
                    data.el.on('setting' + namespace, handler(data));
                    stopTimer(data);
                    data.hasTimer = false;
                } else {
                    data.el.on('swipe' + namespace, handler(data));
                    data.left.on('tap' + namespace, previousFunction(data));
                    data.right.on('tap' + namespace, next(data));

                    // Start timer if autoplay is true, only once
                    if (data.config.autoplay && !data.hasTimer) {
                        data.hasTimer = true;
                        data.timerCount = 1;
                        startTimer(data);
                    }
                }

                // Listen to nav events
                data.nav.on('tap' + namespace, '> div', handler(data));

                // Remove gaps from formatted html (for inline-blocks)
                if (!inApp) {
                    data.mask.contents().filter(function() {
                        return this.nodeType === 3;
                    }).remove();
                }

                // Run first render
                render(i, el);
            }

            function configure(data) {
                var config = {};

                config.crossOver = 0;

                // Set config options from data attributes
                config.animation = data.el.attr('data-animation') || 'slide';
                if (config.animation === 'outin') {
                    config.animation = 'cross';
                    config.crossOver = 0.5;
                }
                config.easing = data.el.attr('data-easing') || 'ease';

                var duration = data.el.attr('data-duration');
                config.duration = duration != null ? parseInt(duration, 10) : 500;

                if (isAttrTrue(data.el.attr('data-infinite'))) {
                    config.infinite = true;
                }

                if (isAttrTrue(data.el.attr('data-disable-swipe'))) {
                    config.disableSwipe = true;
                }

                if (isAttrTrue(data.el.attr('data-hide-arrows'))) {
                    config.hideArrows = true;
                } else if (data.config.hideArrows) {
                    data.left.show();
                    data.right.show();
                }

                if (isAttrTrue(data.el.attr('data-autoplay'))) {
                    config.autoplay = true;
                    config.delay = parseInt(data.el.attr('data-delay'), 10) || 2000;
                    config.timerMax = parseInt(data.el.attr('data-autoplay-limit'), 10);
                    // Disable timer on first touch or mouse down
                    var touchEvents = 'mousedown' + namespace + ' touchstart' + namespace;
                    if (!designer) {
                        data.el.off(touchEvents).one(touchEvents, function() {
                            stopTimer(data);
                        });
                    }
                }

                // Use edge buffer to help calculate page count
                var arrowWidth = data.right.width();
                config.edge = arrowWidth ? arrowWidth + 40 : 100;

                // Store config in data
                data.config = config;
            }

            function isAttrTrue(value) {
                return value === '1' || value === 'true';
            }

            function previousFunction(data) {
                return function() {
                    change(data, { index: data.index - 1, vector: -1 });
                };
            }

            function next(data) {
                return function() {
                    change(data, { index: data.index + 1, vector: 1 });
                };
            }

            function select(data, value) {
                // Select page based on slide element index
                var found = null;
                if (value === data.slides.length) {
                    init(); layout(data); // Rebuild and find new slides
                }
                _.each(data.anchors, function(anchor, index) {
                    $(anchor.els).each(function(i, el) {
                        if ($(el).index() === value) found = index;
                    });
                });
                if (found != null) change(data, { index: found, immediate: true });
            }

            function startTimer(data) {
                stopTimer(data);
                var config = data.config;
                var timerMax = config.timerMax;
                if (timerMax && data.timerCount++ > timerMax) return;
                data.timerId = window.setTimeout(function() {
                    if (data.timerId == null || designer) return;
                    next(data)();
                    startTimer(data);
                }, config.delay);
            }

            function stopTimer(data) {
                window.clearTimeout(data.timerId);
                data.timerId = null;
            }

            function handler(data) {
                return function(evt, options) {
                    options = options || {};
                    var config = data.config;

                    // Designer settings
                    if (designer && evt.type === 'setting') {
                        if (options.select === 'prev') return previousFunction(data)();
                        if (options.select === 'next') return next(data)();
                        configure(data);
                        layout(data);
                        if (options.select == null) return;
                        select(data, options.select);
                        return;
                    }

                    // Swipe event
                    if (evt.type === 'swipe') {
                        if (config.disableSwipe) return;
                        if (Webflow.env('editor')) return;
                        if (options.direction === 'left') return next(data)();
                        if (options.direction === 'right') return previousFunction(data)();
                        return;
                    }

                    // Page buttons
                    if (data.nav.has(evt.target).length) {
                        change(data, { index: $(evt.target).index() });
                    }
                };
            }

            function change(data, options) {
                options = options || {};
                var config = data.config;
                var anchors = data.anchors;

                // Set new index
                data.previous = data.index;
                var index = options.index;
                var shift = {};
                if (index < 0) {
                    index = anchors.length - 1;
                    if (config.infinite) {
                        // Shift first slide to the end
                        shift.x = -data.endX;
                        shift.from = 0;
                        shift.to = anchors[0].width;
                    }
                } else if (index >= anchors.length) {
                    index = 0;
                    if (config.infinite) {
                        // Shift last slide to the start
                        shift.x = anchors[anchors.length - 1].width;
                        shift.from = -anchors[anchors.length - 1].x;
                        shift.to = shift.from - shift.x;
                    }
                }
                data.index = index;

                // Select page nav
                var active = data.nav.children().eq(data.index).addClass('w-active');
                data.nav.children().not(active).removeClass('w-active');

                // Hide arrows
                if (config.hideArrows) {
                    data.index === anchors.length - 1 ? data.right.hide() : data.right.show();
                    data.index === 0 ? data.left.hide() : data.left.show();
                }

                // Get page offset from anchors
                var lastOffsetX = data.offsetX || 0;
                var offsetX = data.offsetX = -anchors[data.index].x;
                var resetConfig = { x: offsetX, opacity: 1, visibility: '' };

                // Transition slides
                var targets = $(anchors[data.index].els);
                var prevTargs = $(anchors[data.previous] && anchors[data.previous].els);
                var others = data.slides.not(targets);
                var animation = config.animation;
                var easing = config.easing;
                var duration = Math.round(config.duration);
                var vector = options.vector || (data.index > data.previous ? 1 : -1);
                var fadeRule = 'opacity ' + duration + 'ms ' + easing;
                var slideRule = 'transform ' + duration + 'ms ' + easing;

                // Trigger IX events
                if (!designer) {
                    targets.each(ix.intro);
                    others.each(ix.outro);
                }

                // Set immediately after layout changes (but not during redraw)
                if (options.immediate && !inRedraw) {
                    tram(targets).set(resetConfig);
                    resetOthers();
                    return;
                }

                // Exit early if index is unchanged
                if (data.index === data.previous) return;

                // Cross Fade / Out-In
                if (animation === 'cross') {
                    var reduced = Math.round(duration - duration * config.crossOver);
                    var wait = Math.round(duration - reduced);
                    fadeRule = 'opacity ' + reduced + 'ms ' + easing;
                    tram(prevTargs)
                        .set({ visibility: '' })
                        .add(fadeRule)
                        .start({ opacity: 0 });
                    tram(targets)
                        .set({ visibility: '', x: offsetX, opacity: 0, zIndex: data.depth++ })
                        .add(fadeRule)
                        .wait(wait)
                        .then({ opacity: 1 })
                        .then(resetOthers);
                    return;
                }

                // Fade Over
                if (animation === 'fade') {
                    tram(prevTargs)
                        .set({ visibility: '' })
                        .stop();
                    tram(targets)
                        .set({ visibility: '', x: offsetX, opacity: 0, zIndex: data.depth++ })
                        .add(fadeRule)
                        .start({ opacity: 1 })
                        .then(resetOthers);
                    return;
                }

                // Slide Over
                if (animation === 'over') {
                    resetConfig = { x: data.endX };
                    tram(prevTargs)
                        .set({ visibility: '' })
                        .stop();
                    tram(targets)
                        .set({ visibility: '', zIndex: data.depth++, x: offsetX + anchors[data.index].width * vector })
                        .add(slideRule)
                        .start({ x: offsetX })
                        .then(resetOthers);
                    return;
                }

                // Slide - infinite scroll
                if (config.infinite && shift.x) {
                    tram(data.slides.not(prevTargs))
                        .set({ visibility: '', x: shift.x })
                        .add(slideRule)
                        .start({ x: offsetX });
                    tram(prevTargs)
                        .set({ visibility: '', x: shift.from })
                        .add(slideRule)
                        .start({ x: shift.to });
                    data.shifted = prevTargs;

                } else {
                    if (config.infinite && data.shifted) {
                        tram(data.shifted).set({ visibility: '', x: lastOffsetX });
                        data.shifted = null;
                    }

                    // Slide - basic scroll
                    tram(data.slides)
                        .set({ visibility: '' })
                        .add(slideRule)
                        .start({ x: offsetX });
                }

                // Helper to move others out of view
                function resetOthers() {
                    targets = $(anchors[data.index].els);
                    others = data.slides.not(targets);
                    if (animation !== 'slide') resetConfig.visibility = 'hidden';
                    tram(others).set(resetConfig);
                }
            }

            function render(i, el) {
                var data = $.data(el, namespace);
                if (maskChanged(data)) return layout(data);
                if (designer && slidesChanged(data)) layout(data);
            }

            function layout(data) {
                // Determine page count from width of slides
                var pages = 1;
                var offset = 0;
                var anchor = 0;
                var width = 0;
                var maskWidth = data.maskWidth;
                var threshold = maskWidth - data.config.edge;
                if (threshold < 0) threshold = 0;
                data.anchors = [{ els: [], x: 0, width: 0 }];
                data.slides.each(function(i, el) {
                    if (anchor - offset > threshold) {
                        pages++;
                        offset += maskWidth;
                        // Store page anchor for transition
                        data.anchors[pages - 1] = { els: [], x: anchor, width: 0 };
                    }
                    // Set next anchor using current width + margin
                    width = $(el).outerWidth(true);
                    anchor += width;
                    data.anchors[pages - 1].width += width;
                    data.anchors[pages - 1].els.push(el);
                });
                data.endX = anchor;

                // Build dots if nav exists and needs updating
                if (designer) data.pages = null;
                if (data.nav.length && data.pages !== pages){
                    data.pages = pages;
                    buildNav(data);
                }

                // Make sure index is still within range and call change handler
                var index = data.index;
                if (index >= pages) index = pages - 1;
                change(data, { immediate: true, index: index });
            }

            function buildNav(data) {
                var dots = [];
                var $dot;
                var spacing = data.el.attr('data-nav-spacing');
                if (spacing) spacing = parseFloat(spacing) + 'px';
                for (var i = 0; i < data.pages; i++) {
                    $dot = $(dot);
                    if (data.nav.hasClass('w-num')) $dot.text(i + 1);
                    if (spacing != null) {
                        $dot.css({
                            'margin-left': spacing,
                            'margin-right': spacing
                        });
                    }
                    dots.push($dot);
                }
                data.nav.empty().append(dots);
            }

            function maskChanged(data) {
                var maskWidth = data.mask.width();
                if (data.maskWidth !== maskWidth) {
                    data.maskWidth = maskWidth;
                    return true;
                }
                return false;
            }

            function slidesChanged(data) {
                var slidesWidth = 0;
                data.slides.each(function(i, el) {
                    slidesWidth += $(el).outerWidth(true);
                });
                if (data.slidesWidth !== slidesWidth) {
                    data.slidesWidth = slidesWidth;
                    return true;
                }
                return false;
            }

            // Export module
            return api;
        });
    });

    var webflowTabs = __commonjs(function (module) {
        /**
         * Webflow: Tabs component
         */

        var Webflow = require$$0$1;
        var IXEvents = require$$0$3;

        Webflow.define('tabs', module.exports = function($) {
            var api = {};
            var tram = $.tram;
            var $doc = $(document);
            var $tabs;
            var design;
            var env = Webflow.env;
            var safari = env.safari;
            var inApp = env();
            var tabAttr = 'data-w-tab';
            var namespace = '.w-tabs';
            var linkCurrent = 'w--current';
            var tabActive = 'w--tab-active';
            var ix = IXEvents.triggers;
            var inRedraw = false;

            // -----------------------------------
            // Module methods

            api.ready = api.design = api.preview = init;

            api.redraw = function() {
                inRedraw = true;
                init();
                inRedraw = false;
            };

            api.destroy = function() {
                $tabs = $doc.find(namespace);
                if (!$tabs.length) return;
                $tabs.each(resetIX);
                removeListeners();
            };

            // -----------------------------------
            // Private methods

            function init() {
                design = inApp && Webflow.env('design');

                // Find all instances on the page
                $tabs = $doc.find(namespace);
                if (!$tabs.length) return;
                $tabs.each(build);
                if (Webflow.env('preview') && !inRedraw) {
                    $tabs.each(resetIX);
                }

                removeListeners();
                addListeners();
            }

            function removeListeners() {
                Webflow.redraw.off(api.redraw);
            }

            function addListeners() {
                Webflow.redraw.on(api.redraw);
            }

            function resetIX(i, el) {
                var data = $.data(el, namespace);
                if (!data) return;
                data.links && data.links.each(ix.reset);
                data.panes && data.panes.each(ix.reset);
            }

            function build(i, el) {
                var $el = $(el);

                // Store state in data
                var data = $.data(el, namespace);
                if (!data) data = $.data(el, namespace, { el: $el, config: {} });
                data.current = null;
                data.menu = $el.children('.w-tab-menu');
                data.links = data.menu.children('.w-tab-link');
                data.content = $el.children('.w-tab-content');
                data.panes = data.content.children('.w-tab-pane');

                // Remove old events
                data.el.off(namespace);
                data.links.off(namespace);

                // Set config from data attributes
                configure(data);

                // Wire up events when not in design mode
                if (!design) {
                    data.links.on('click' + namespace, linkSelect(data));

                    // Trigger first intro event from current tab
                    var $link = data.links.filter('.' + linkCurrent);
                    var tab = $link.attr(tabAttr);
                    tab && changeTab(data, { tab: tab, immediate: true });
                }
            }

            function configure(data) {
                var config = {};

                // Set config options from data attributes
                config.easing = data.el.attr('data-easing') || 'ease';

                var intro = parseInt(data.el.attr('data-duration-in'), 10);
                intro = config.intro = intro === intro ? intro : 0;

                var outro = parseInt(data.el.attr('data-duration-out'), 10);
                outro = config.outro = outro === outro ? outro : 0;

                config.immediate = !intro && !outro;

                // Store config in data
                data.config = config;
            }

            function linkSelect(data) {
                return function(evt) {
                    var tab = evt.currentTarget.getAttribute(tabAttr);
                    tab && changeTab(data, { tab: tab });
                };
            }

            function changeTab(data, options) {
                options = options || {};

                var config = data.config;
                var easing = config.easing;
                var tab = options.tab;

                // Don't select the same tab twice
                if (tab === data.current) return;
                data.current = tab;

                // Select the current link
                data.links.each(function(i, el) {
                    var $el = $(el);
                    if (el.getAttribute(tabAttr) === tab) $el.addClass(linkCurrent).each(ix.intro);
                    else if ($el.hasClass(linkCurrent)) $el.removeClass(linkCurrent).each(ix.outro);
                });

                // Find the new tab panes and keep track of previous
                var targets = [];
                var previous = [];
                data.panes.each(function(i, el) {
                    var $el = $(el);
                    if (el.getAttribute(tabAttr) === tab) {
                        targets.push(el);
                    } else if ($el.hasClass(tabActive)) {
                        previous.push(el);
                    }
                });

                var $targets = $(targets);
                var $previous = $(previous);

                // Switch tabs immediately and bypass transitions
                if (options.immediate || config.immediate) {
                    $targets.addClass(tabActive).each(ix.intro);
                    $previous.removeClass(tabActive);
                    // Redraw to benefit components in the hidden tab pane
                    // But only if not currently in the middle of a redraw
                    if (!inRedraw) Webflow.redraw.up();
                    return;
                }

                // Fade out the currently active tab before intro
                if ($previous.length && config.outro) {
                    $previous.each(ix.outro);
                    tram($previous)
                        .add('opacity ' + config.outro + 'ms ' + easing, { fallback: safari })
                        .start({ opacity: 0 })
                        .then(intro);
                } else {
                    // Skip the outro and play intro
                    intro();
                }

                // Fade in the new target
                function intro() {
                    // Clear previous active class + styles touched by tram
                    // We cannot remove the whole inline style because it could be dynamically bound
                    $previous.removeClass(tabActive).css({
                        opacity: '',
                        transition: '',
                        transform: '',
                        width: '',
                        height: ''
                    });

                    // Add active class to new target
                    $targets.addClass(tabActive).each(ix.intro);
                    Webflow.redraw.up();

                    // Set opacity immediately if intro is zero
                    if (!config.intro) return tram($targets).set({ opacity: 1 });

                    // Otherwise fade in opacity
                    tram($targets)
                        .set({ opacity: 0 })
                        .redraw()
                        .add('opacity ' + config.intro + 'ms ' + easing, { fallback: safari })
                        .start({ opacity: 1 });
                }
            }

            // Export module
            return api;
        });
    });

    var webflowTouch = __commonjs(function (module) {
        /**
         * Webflow: Touch events
         */

        var Webflow = require$$0$1;

        Webflow.define('touch', module.exports = function($) {
            var api = {};
            var fallback = !document.addEventListener;
            var getSelection = window.getSelection;

            // Fallback to click events in old IE
            if (fallback) {
                $.event.special.tap = { bindType: 'click', delegateType: 'click' };
            }

            api.init = function(el) {
                if (fallback) return null;
                el = typeof el === 'string' ? $(el).get(0) : el;
                return el ? new Touch(el) : null;
            };

            function Touch(el) {
                var active = false;
                var dirty = false;
                var useTouch = false;
                var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
                var startX;
                var startY;
                var lastX;

                el.addEventListener('touchstart', start, false);
                el.addEventListener('touchmove', move, false);
                el.addEventListener('touchend', end, false);
                el.addEventListener('touchcancel', cancel, false);
                el.addEventListener('mousedown', start, false);
                el.addEventListener('mousemove', move, false);
                el.addEventListener('mouseup', end, false);
                el.addEventListener('mouseout', cancel, false);

                function start(evt) {
                    // We don’t handle multi-touch events yet.
                    var touches = evt.touches;
                    if (touches && touches.length > 1) {
                        return;
                    }

                    active = true;
                    dirty = false;

                    if (touches) {
                        useTouch = true;
                        startX = touches[0].clientX;
                        startY = touches[0].clientY;
                    } else {
                        startX = evt.clientX;
                        startY = evt.clientY;
                    }

                    lastX = startX;
                }

                function move(evt) {
                    if (!active) return;

                    if (useTouch && evt.type === 'mousemove') {
                        evt.preventDefault();
                        evt.stopPropagation();
                        return;
                    }

                    var touches = evt.touches;
                    var x = touches ? touches[0].clientX : evt.clientX;
                    var y = touches ? touches[0].clientY : evt.clientY;

                    var velocityX = x - lastX;
                    lastX = x;

                    // Allow swipes while pointer is down, but prevent them during text selection
                    if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === '') {
                        triggerEvent('swipe', evt, { direction: velocityX > 0 ? 'right' : 'left' });
                        cancel();
                    }

                    // If pointer moves more than 10px flag to cancel tap
                    if (Math.abs(x - startX) > 10 || Math.abs(y - startY) > 10) {
                        dirty = true;
                    }
                }

                function end(evt) {
                    if (!active) return;
                    active = false;

                    if (useTouch && evt.type === 'mouseup') {
                        evt.preventDefault();
                        evt.stopPropagation();
                        useTouch = false;
                        return;
                    }

                    if (!dirty) triggerEvent('tap', evt);
                }

                function cancel() {
                    active = false;
                }

                function destroy() {
                    el.removeEventListener('touchstart', start, false);
                    el.removeEventListener('touchmove', move, false);
                    el.removeEventListener('touchend', end, false);
                    el.removeEventListener('touchcancel', cancel, false);
                    el.removeEventListener('mousedown', start, false);
                    el.removeEventListener('mousemove', move, false);
                    el.removeEventListener('mouseup', end, false);
                    el.removeEventListener('mouseout', cancel, false);
                    el = null;
                }

                // Public instance methods
                this.destroy = destroy;
            }

            // Wrap native event to supoprt preventdefault + stopPropagation
            function triggerEvent(type, evt, data) {
                var newEvent = $.Event(type, { originalEvent: evt });
                $(evt.target).trigger(newEvent, data);
            }

            // Listen for touch events on all nodes by default.
            api.instance = api.init(document);

            // Export module
            return api;
        });
    });

}());

/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([
    {"slug":"show-solid-header","name":"show-solid-header","value":{"style":{},"triggers":[{"type":"scroll","selector":".solid-header","preserve3d":true,"stepsA":[{"transition":"transform 200 ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[{"transition":"transform 200 ease 0","x":"0px","y":"52px","z":"0px"}]}]}},
    {"slug":"open-acc","name":"open-acc","value":{"style":{},"triggers":[{"type":"click","selector":".acc-content","siblings":true,"stepsA":[{"height":"auto","transition":"height 200 ease 0"}],"stepsB":[{"height":"0px","transition":"height 200 ease 0"}]}]}},
    {"slug":"close-alert-wrap","name":"close-alert-wrap","value":{"style":{},"triggers":[{"type":"click","selector":".alert-wrapper","stepsA":[{"opacity":0,"transition":"opacity 200 ease 0"},{"display":"none"}],"stepsB":[]}]}},
    {"slug":"show-fixed-subnav","name":"show-fixed-subnav","value":{"style":{},"triggers":[{"type":"scroll","selector":".fixed-subnav-wrap","stepsA":[{"display":"none","opacity":0,"transition":"opacity 200 ease 0"}],"stepsB":[{"display":"block","opacity":1,"transition":"opacity 200 ease 0"}]}]}},
    {"slug":"scale-thumb","name":"scale-thumb","value":{"style":{},"triggers":[{"type":"hover","selector":".thumbnail","descend":true,"preserve3d":true,"stepsA":[{"transition":"transform 200 ease 0","scaleX":1.06,"scaleY":1.06,"scaleZ":1}],"stepsB":[{"transition":"transform 200 ease 0","scaleX":1,"scaleY":1,"scaleZ":1}]}]}}
]);
