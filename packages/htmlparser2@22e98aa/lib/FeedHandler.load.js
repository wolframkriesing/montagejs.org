montageDefine("22e98aa","lib/FeedHandler",{dependencies:["./index.js","util"],factory:function(e,t,n){function a(e){this.init(e,{ignoreWhitespace:!0})}function s(e,t){return c.getElementsByTagName(e,t,!0)}function r(e,t){return c.getElementsByTagName(e,t,!0,1)[0]}function i(e,t,n){return c.getText(c.getElementsByTagName(e,t,n,1))}var o=e("./index.js"),l=o.DomHandler,c=o.DomUtils;e("util").inherits(a,l),a.prototype.init=l;var p=function(e){return"rss"===e||"feed"===e||"rdf:RDF"===e};a.prototype.onend=function(){var e,t,n={},a=r(p,this.dom);a&&("feed"===a.name?(t=a.children,n.type="atom",(e=i("id",t))&&(n.id=e),(e=i("title",t))&&(n.title=e),(e=r("link",t))&&(e=e.attribs)&&(e=e.href)&&(n.link=e),(e=i("subtitle",t))&&(n.description=e),(e=i("updated",t))&&(n.updated=new Date(e)),(e=i("email",t,!0))&&(n.author=e),n.items=s("entry",t).map(function(e){var t,n={};return e=e.children,(t=i("id",e))&&(n.id=t),(t=i("title",e))&&(n.title=t),(t=r("link",e))&&(t=t.attribs)&&(t=t.href)&&(n.link=t),(t=i("summary",e))&&(n.description=t),(t=i("updated",e))&&(n.pubDate=new Date(t)),n})):(t=r("channel",a.children).children,n.type=a.name.substr(0,3),n.id="",(e=i("title",t))&&(n.title=e),(e=i("link",t))&&(n.link=e),(e=i("description",t))&&(n.description=e),(e=i("lastBuildDate",t))&&(n.updated=new Date(e)),(e=i("managingEditor",t))&&(n.author=e),n.items=s("item",a.children).map(function(e){var t,n={};return e=e.children,(t=i("guid",e))&&(n.id=t),(t=i("title",e))&&(n.title=t),(t=i("link",e))&&(n.link=t),(t=i("description",e))&&(n.description=t),(t=i("pubDate",e))&&(n.pubDate=new Date(t)),n}))),this.dom=n,l.prototype._handleCallback.call(this,a?null:Error("couldn't find root of feed"))},n.exports=a}});