var Http=require("http"),NodeUtil=require("util"),Hoek=require("hoek"),internals={};exports=module.exports=internals.Boom=function(){var e=this;Hoek.assert(this.constructor===internals.Boom,"Error must be instantiated using new"),Error.call(this),this.isBoom=!0,this.response={code:0,payload:{},headers:{}};if(arguments[0]instanceof Error){var t=arguments[0];this.data=t,this.response.code=t.code||500,t.message&&(this.message=t.message)}else{var n=arguments[0],r=arguments[1];Hoek.assert(!isNaN(parseFloat(n))&&isFinite(n)&&n>=400,"First argument must be a number (400+)"),this.response.code=n,r&&(this.message=r)}return this.reformat(),this},NodeUtil.inherits(internals.Boom,Error),internals.Boom.prototype.reformat=function(){this.response.payload.code=this.response.code,this.response.payload.error=Http.STATUS_CODES[this.response.code]||"Unknown",this.message&&(this.response.payload.message=Hoek.escapeHtml(this.message))},internals.Boom.badRequest=function(e){return new internals.Boom(400,e)},internals.Boom.unauthorized=function(e,t,n){var r=new internals.Boom(401,e);if(!t)return r;var i="";if(typeof t=="string"){i=t;if(n){var s=Object.keys(n);for(var o=0,u=s.length;o<u;++o){o&&(i+=",");var a=n[s[o]];if(a===null||a===undefined)a="";i+=" "+s[o]+'="'+Hoek.escapeHeaderAttribute(a.toString())+'"'}}e?(n&&(i+=","),i+=' error="'+Hoek.escapeHeaderAttribute(e)+'"'):r.isMissing=!0}else{var f=t;for(var o=0,u=f.length;o<u;++o)o&&(i+=", "),i+=f[o]}return r.response.headers["WWW-Authenticate"]=i,r},internals.Boom.clientTimeout=function(e){return new internals.Boom(408,e)},internals.Boom.serverTimeout=function(e){return new internals.Boom(503,e)},internals.Boom.forbidden=function(e){return new internals.Boom(403,e)},internals.Boom.notFound=function(e){return new internals.Boom(404,e)},internals.Boom.internal=function(e,t){var n=new internals.Boom(500,e);return t&&t.stack?(n.trace=t.stack.split("\n"),n.outterTrace=Hoek.displayStack(1)):n.trace=Hoek.displayStack(1),n.data=t,n.response.payload.message="An internal server error occurred",n},internals.Boom.passThrough=function(e,t,n,r){var i=new internals.Boom(500,"Pass-through");return i.data={code:e,payload:t,type:n},i.response.code=e,i.response.type=n,i.response.headers=r,i.response.payload=t,i}