montageDefine("5d3b9c0","new/htmlparser",{dependencies:[],factory:function(e,t,n){(function(){function r(){return typeof e=="function"&&typeof t=="object"&&typeof n=="object"&&typeof __filename=="string"&&typeof __dirname=="string"}function o(e){var t;e.isScript?(s.lastIndex=e.pos,t=s.exec(e.data),t=t?t.index:-1):t=e.data.indexOf("<",e.pos);var n=t===-1?e.data.substring(e.pos,e.data.length):e.data.substring(e.pos,t);t<0&&e.done&&(t=e.data.length);if(t<0){if(e.isScript){e.needData=!0;return}e.pendingText||(e.pendingText=[]),e.pendingText.push(e.data.substring(e.pos,e.data.length)),e.pos=e.data.length}else e.pendingText?(e.pendingText.push(e.data.substring(e.pos,t)),n=e.pendingText.join(""),e.pendingText=null):n=e.data.substring(e.pos,t),n!==""&&e.output.push({type:i.Text,data:n}),e.pos=t+1,e.mode=i.Tag}function a(e){u.lastIndex=e.pos;var t=u.exec(e.data);if(t){if(!t[1]&&t[2].substr(0,3)==="!--"){e.mode=i.Comment,e.pos+=3;return}if(!t[1]&&t[2].substr(0,8)==="![CDATA["){e.mode=i.CData,e.pos+=8;return}if(!e.done&&e.pos+t[0].length===e.data.length){e.needData=!0;return}var n;t[4]===">"?(e.mode=i.Text,n=t[0].substr(0,t[0].length-1)):(e.mode=i.Attr,n=t[0]),e.pos+=t[0].length;var r={type:i.Tag,name:t[1]+t[2],raw:n};e.mode===i.Attr&&(e.lastTag=r),r.name.toLowerCase()==="script"?e.isScript=!0:r.name.toLowerCase()==="/script"&&(e.isScript=!1),e.output.push(r)}else e.needData=!0}function l(e){f.lastIndex=e.pos;var t=f.exec(e.data);return t?e.pos+t[0].length!==f.lastIndex?null:{match:t[0],name:t[1]}:null}function p(e){c.lastIndex=e.pos;var t=c.exec(e.data);return t?e.pos+t[0].length!==c.lastIndex?null:{match:t[0],value:t[1]||t[2]||t[3]}:e.done?(h.lastIndex=e.pos,t=h.exec(e.data),t?{match:t[0],value:t[1]!==""?t[1]:null}:null):null}function m(e){var t=l(e);if(!t){v.lastIndex=e.pos;var n=v.exec(e.data);if(n&&n.index===e.pos){if(!e.done&&!n[2]&&e.pos+n[0].length===e.data.length){e.needData=!0;return}e.lastTag.raw+=n[1],e.output.push({type:i.Tag,name:"/"+e.lastTag.name,raw:null}),e.pos+=n[1].length}var r=e.data.indexOf(">",e.pos);if(r<0){if(e.done){e.lastTag.raw+=e.data.substr(e.pos),e.pos=e.data.length;return}e.needData=!0}else e.pos=r+1,e.mode=i.Text;return}if(!e.done&&e.pos+t.match.length===e.data.length)return e.needData=!0,null;e.pos+=t.match.length;var s=p(e);if(s){if(!e.done&&e.pos+s.match.length===e.data.length){e.needData=!0,e.pos-=t.match.length;return}e.pos+=s.match.length}else{d.lastIndex=e.pos;if(d.exec(e.data)){e.needData=!0,e.pos-=t.match.length;return}s={match:"",value:null}}e.lastTag.raw+=t.match+s.match,e.output.push({type:i.Attr,name:t.name,data:s.value})}function y(e){var t=e.data.indexOf("]]>",e.pos);t<0&&e.done&&(t=e.data.length);if(t<0){g.lastIndex=e.pos;var n=g.exec(e.data);if(n){e.needData=!0;return}e.pendingText||(e.pendingText=[]),e.pendingText.push(e.data.substr(e.pos,e.data.length)),e.pos=e.data.length,e.needData=!0}else{var r;e.pendingText?(e.pendingText.push(e.data.substring(e.pos,t)),r=e.pendingText.join(""),e.pendingText=null):r=e.data.substring(e.pos,t),e.output.push({type:i.CData,data:r}),e.mode=i.Text,e.pos=t+3}}function w(e){var t=e.data.indexOf("-->",e.pos);t<0&&e.done&&(t=e.data.length);if(t<0){b.lastIndex=e.pos;var n=b.exec(e.data);if(n){e.needData=!0;return}e.pendingText||(e.pendingText=[]),e.pendingText.push(e.data.substr(e.pos,e.data.length)),e.pos=e.data.length,e.needData=!0}else{var r;e.pendingText?(e.pendingText.push(e.data.substring(e.pos,t)),r=e.pendingText.join(""),e.pendingText=null):r=e.data.substring(e.pos,t),e.output.push({type:i.Comment,data:r}),e.mode=i.Text,e.pos=t+3}}function E(e){switch(e.mode){case i.Text:return o(e);case i.Tag:return a(e);case i.Attr:return m(e);case i.CData:return y(e);case i.Comment:return w(e)}}function S(e,t){this._options=t?t:{},this._options.includeLocation==undefined&&(this._options.includeLocation=!1),this.validateHandler(e);var n=this;this._handler=e,this.reset()}function x(e,t){this.reset(),this._options=e?e:{},this._options.ignoreWhitespace==undefined&&(this._options.ignoreWhitespace=!1),this._options.trackPosition==undefined&&(this._options.trackPosition=!1),this._options.verbose==undefined&&(this._options.verbose=!0),this._options.enforceEmptyTags==undefined&&(this._options.enforceEmptyTags=!0),this._options.caseSensitiveTags==undefined&&(this._options.caseSensitiveTags=!1),this._options.caseSensitiveAttr==undefined&&(this._options.caseSensitiveAttr=!1),typeof t=="function"&&(this._callback=t)}if(!r()){if(!this.Tautologistics)this.Tautologistics={};else if(this.Tautologistics.NodeHtmlParser)return;this.Tautologistics.NodeHtmlParser={},t=this.Tautologistics.NodeHtmlParser}var i={Text:"text",Tag:"tag",Attr:"attr",CData:"cdata",Comment:"comment"},s=/<\s*\/\s*script/ig,u=/\s*(\/?)\s*([^\s>\/]+)(\s*)(>?)/g,f=/\s*([^=<>\s'"\/]+)\s*/g,c=/\s*=\s*(?:'([^']*)'|"([^"]*)"|([^'"\s\/>]+))\s*/g,h=/\s*=\s*['"]?(.*)$/g,d=/\s*=\s*['"]?/g,v=/(\s*\/\s*)(>?)/g,g=/\]{1,2}$/,b=/\-{1,2}$/;S.prototype.reset=function(){this.state={mode:i.Text,pos:0,data:null,pendingText:null,lastTag:null,isScript:!1,needData:!1,done:!1}},S.prototype.parseChunk=function(t){this.state.needData=!1,this.state.data=this.state.data!==null?this.state.data.substr(this.pos)+t:t;while(this.state.pos<this.state.data.length&&!this.state.needData)E(this.state)},S.prototype.parseComplete=function(t){this.reset(),this.parseChunk(t),this.done()},S.prototype.done=function(){this.state.done=!0,E(this.state)},S.prototype.validateHandler=function(t){if(typeof t!="object")throw new Error("Handler is not an object");if(typeof t.reset!="function")throw new Error("Handler method 'reset' is invalid");if(typeof t.done!="function")throw new Error("Handler method 'done' is invalid");if(typeof t.write!="function")throw new Error("Handler method 'write' is invalid");if(typeof t.error!="function")throw new Error("Handler method 'error' is invalid")},x._emptyTags={area:1,base:1,basefont:1,br:1,col:1,frame:1,hr:1,img:1,input:1,isindex:1,link:1,meta:1,param:1,embed:1},x.reWhitespace=/^\s*$/,x.prototype.dom=null,x.prototype.reset=function(){this.dom=[],this._done=!1,this._tagStack=[],this._tagStack.last=function(){return this.length?this[this.length-1]:null}},x.prototype.done=function(){this._done=!0,this.handleCallback(null)},x.prototype.error=function(t){this.handleCallback(t)},x.prototype.handleCallback=function(t){if(typeof this._callback!="function"){if(t)throw t;return}this._callback(t,this.dom)},x.prototype.isEmptyTag=function(t){var n=t.name.toLowerCase();return n.charAt(0)=="/"&&(n=n.substring(1)),this._options.enforceEmptyTags&&!!x._emptyTags[n]},x.prototype._copyElement=function(t){var n={type:t.type};this._options.verbose&&t.raw!==undefined&&(n.raw=t.raw);if(t.name!==undefined)switch(t.type){case i.Tag:n.name=this._options.caseSensitiveTags?t.name:t.name.toLowerCase();break;case i.Attr:n.name=this._options.caseSensitiveAttr?t.name:t.name.toLowerCase();break;default:n.name=this._options.caseSensitiveTags?t.name:t.name.toLowerCase()}return t.data!==undefined&&(n.data=t.name),n},x.prototype.write=function(t){this._done&&this.handleCallback(new Error("Writing to the handler after done() called is not allowed without a reset()"));if(t.type===i.Text&&this._options.ignoreWhitespace&&x.reWhitespace.test(t.data))return;var n;this._options.verbose||(delete t.raw,(t.type=="tag"||t.type=="script"||t.type=="style")&&delete t.data);if(!this._tagStack.last())t.type!=i.Text&&t.type!=i.Comment&&t.type!=i.CData?t.name.charAt(0)!="/"&&(n=this._copyElement(t),this.dom.push(n),this.isEmptyTag(n)||this._tagStack.push(n)):this.dom.push(this._copyElement(t));else if(t.type!=i.Text&&t.type!=i.Comment&&t.type!=i.CData)if(t.name.charAt(0)=="/"){var r=this._options.caseSensitiveTags?t.name.substring(1):t.name.substring(1).toLowerCase();if(!this.isEmptyTag(t)){var s=this._tagStack.length-1;while(s>-1&&this._tagStack[s--].name!=r);if(s>-1||this._tagStack[0].name==r)while(s<this._tagStack.length-1)this._tagStack.pop()}}else this._tagStack.last().children||(this._tagStack.last().children=[]),n=this._copyElement(t),this._tagStack.last().children.push(n),this.isEmptyTag(n)||this._tagStack.push(n);else this._tagStack.last().children||(this._tagStack.last().children=[]),this._tagStack.last().children.push(this._copyElement(t))},x.prototype._options=null,x.prototype._callback=null,x.prototype._done=!1,x.prototype._tagStack=null,t.Parser=S,t.HtmlHandler=x,t.ElementType=i})()}})