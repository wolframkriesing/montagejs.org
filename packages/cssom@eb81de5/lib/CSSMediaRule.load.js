montageDefine("eb81de5","lib/CSSMediaRule",{dependencies:["./CSSRule","./MediaList"],factory:function(e,t,n){var r={CSSRule:e("./CSSRule").CSSRule,MediaList:e("./MediaList").MediaList};r.CSSMediaRule=function(){r.CSSRule.call(this),this.media=new r.MediaList,this.cssRules=[]},r.CSSMediaRule.prototype=new r.CSSRule,r.CSSMediaRule.prototype.constructor=r.CSSMediaRule,r.CSSMediaRule.prototype.type=4,r.CSSMediaRule.prototype.__defineGetter__("cssText",function(){var e=[];for(var t=0,n=this.cssRules.length;t<n;t++)e.push(this.cssRules[t].cssText);return"@media "+this.media.mediaText+" {"+e.join("")+"}"}),t.CSSMediaRule=r.CSSMediaRule}})