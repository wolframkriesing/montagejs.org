exports.intercept=function(e,t,n){var r=e.prototype,i=r[t],s=n.length>2;r[t]=function(){if(s){var e=Array.prototype.slice.call(arguments);return e.unshift(i,arguments),n.apply(this,e)}return n.call(this,i,arguments)}}