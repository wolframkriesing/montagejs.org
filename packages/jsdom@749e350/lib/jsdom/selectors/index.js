var createSizzle=require("./sizzle");exports.applyQuerySelector=function(e,t){var n=function(e){return e._sizzle||(e._sizzle=createSizzle(e)),e._sizzle};e.querySelector=function(e){return n(this)(e,this)[0]},e.querySelectorAll=function(e){return new t.NodeList(n(this)(e,this))};var r=e.createElement;e.createElement=function(){var e=r.apply(this,arguments);return e.querySelector=function(e){return n(this.ownerDocument)(e,this)[0]},e.querySelectorAll=function(e){var r=this;return this.parentNode||(r=this.ownerDocument.createElement("div"),r.appendChild(this)),new t.NodeList(n(this.ownerDocument)(e,r.parentNode||r))},e}}