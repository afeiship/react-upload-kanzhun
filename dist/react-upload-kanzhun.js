!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-file-upload"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom"),require("react-upload")):"function"==typeof define&&define.amd?define(["classnames","next-file-upload","noop","object-assign","prop-types","react","react-dom","react-upload"],t):"object"==typeof exports?exports.ReactUploadKanzhun=t(require("classnames"),require("next-file-upload"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom"),require("react-upload")):e.ReactUploadKanzhun=t(e.classnames,e["next-file-upload"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"],e["react-upload"])}(this,function(e,t,r,n,o,a,u,i){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,p,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(7),d=n(l),h=r(8),y=(n(h),r(6)),b=n(y),m=r(2),v=(n(m),r(4)),g=n(v),x=r(5),j=(n(x),r(9)),_=n(j),q=r(3),O=n(q),w="/kanzhun_api/question/pic/upload.json",C="http://img.kanzhun.com",P=(p=c=function(e){function t(){var e,r,n,o;a(this,t);for(var i=arguments.length,c=Array(i),p=0;p<i;p++)c[p]=arguments[p];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n._onChange=function(e){var t=n.props.onChange,r=e.target.value,o=nx.map(r,function(e,t){return(0,O.default)(w,{name:t})});Promise.all(o).then(function(e){var r=e.map(function(e){var t=JSON.parse(e);return t.url=C+"/"+t.imgFileUrl,t});t({target:{value:r}})})},o=r,u(n,o)}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=(e.onChange,o(e,["onChange"]));return d.default.createElement(_.default,f({onChange:this._onChange},t))}}]),t}(l.Component),c.propTypes={className:b.default.string,onChange:b.default.func},c.defaultProps={onChange:g.default},p);t.default=P},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=u},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-upload-kanzhun.js.map