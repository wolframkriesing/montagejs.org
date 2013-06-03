montageDefine("749e350","lib/jsdom/level2/style",{dependencies:["./core","./html","../utils","cssom","cssstyle","assert"],factory:function(e,t,n){function f(e,t){i.resourceLoader.load(this,e,function(n,r){l.call(this,n,t,e)})}function l(e,t,n){var r=o.parse(e),i=r.cssRules;i.unshift(0,t.cssRules.length),Array.prototype.splice.apply(t.cssRules,i),c.call(this,t.cssRules,n)}function c(e,t){if(!e)return;for(var n=0;n<e.length;++n)e[n].cssRules?c.call(this,e[n].cssRules,t):e[n].href&&f.call(this,e[n].href,this.sheet)}function h(e){var t=o.parse("dummy{"+e+"}"),n=this.style;while(n.length)n.removeProperty(n[0]);if(t.cssRules.length>0&&t.cssRules[0].style){var r=t.cssRules[0].style;for(var i=0;i<r.length;++i){var s=r[i];n.setProperty(s,r.getPropertyValue(s),r.getPropertyPriority(s))}}}function p(e,t){this._node=e,r.Attr.call(this,e.ownerDocument,"style"),this.nodeValue=t}var r=e("./core").dom.level2.core,i=e("./html").dom.level2.html,s=e("../utils"),o=e("cssom"),u=e("cssstyle"),a=e("assert");r.StyleSheet=o.StyleSheet,r.MediaList=o.MediaList,r.CSSStyleSheet=o.CSSStyleSheet,r.CSSRule=o.CSSRule,r.CSSStyleRule=o.CSSStyleRule,r.CSSMediaRule=o.CSSMediaRule,r.CSSImportRule=o.CSSImportRule,r.CSSStyleDeclaration=u.CSSStyleDeclaration,r.StyleSheetList=r.NodeList,r.Document.prototype.__defineGetter__("styleSheets",function(){return this._styleSheets||(this._styleSheets=new r.StyleSheetList),this._styleSheets}),p.prototype={get nodeValue(){return this._node.style.cssText},set nodeValue(e){h.call(this._node,e)}},p.prototype.__proto__=r.Attr.prototype,s.intercept(r.AttrNodeMap,"setNamedItem",function(e,t,n){return n.name=="style"&&(n=new p(this._parentNode,n.nodeValue)),e.call(this,n)}),i.HTMLElement.prototype.__defineGetter__("style",function(){var e=this._cssStyleDeclaration;return e||(e=this._cssStyleDeclaration=new u.CSSStyleDeclaration,this.getAttributeNode("style")||this.setAttribute("style","")),e}),a.equal(undefined,i.HTMLLinkElement._init),i.HTMLLinkElement._init=function(){this.addEventListener("DOMNodeInsertedIntoDocument",function(){if(!/(?:[ \t\n\r\f]|^)stylesheet(?:[ \t\n\r\f]|$)/i.test(this.rel))return;this.href&&f.call(this,this.href,this.sheet)}),this.addEventListener("DOMNodeRemovedFromDocument",function(){})};var d=function(){return this._cssStyleSheet||(this._cssStyleSheet=new o.CSSStyleSheet),this._cssStyleSheet};i.HTMLLinkElement.prototype.__defineGetter__("sheet",d),a.equal(undefined,i.HTMLStyleElement._init),i.HTMLStyleElement._init=function(){this.addEventListener("DOMNodeInsertedIntoDocument",function(){if(this.type&&this.type!=="text/css")return;l.call(this,this.textContent,this.sheet,this._ownerDocument.URL)})},i.HTMLStyleElement.prototype.__defineGetter__("sheet",d),t.dom={level2:{html:i,core:r}}}})