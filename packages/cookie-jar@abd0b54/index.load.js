montageDefine("abd0b54","index",{dependencies:["url","./jar"],factory:function(e,t,n){var r=e("url"),i=t=n.exports=function(t,n){this.str=t,t.split(/ *; */).reduce(function(e,t){var n=t.indexOf("="),r=n>0?t.substring(0,n).trim():t.trim(),i=r.toLowerCase(),s=n>0?t.substring(n+1).trim():!0;return e.name?i==="httponly"?e.httpOnly=s:e[i]=s:(e.name=r,e.value=s),e},this),this.expires=this.expires?new Date(this.expires):Infinity,this.path=this.path?this.path.trim():n?r.parse(n.url).pathname:"/"};i.prototype.toString=function(){return this.str},n.exports.Jar=e("./jar")}})