var CSSOM={CSSRule:require("./CSSRule").CSSRule};CSSOM.CSSKeyframesRule=function(){CSSOM.CSSRule.call(this),this.name="",this.cssRules=[]},CSSOM.CSSKeyframesRule.prototype=new CSSOM.CSSRule,CSSOM.CSSKeyframesRule.prototype.constructor=CSSOM.CSSKeyframesRule,CSSOM.CSSKeyframesRule.prototype.type=8,CSSOM.CSSKeyframesRule.prototype.__defineGetter__("cssText",function(){var e=[];for(var t=0,n=this.cssRules.length;t<n;t++)e.push("  "+this.cssRules[t].cssText);return"@"+(this._vendorPrefix||"")+"keyframes "+this.name+" { \n"+e.join("\n")+"\n}"}),exports.CSSKeyframesRule=CSSOM.CSSKeyframesRule