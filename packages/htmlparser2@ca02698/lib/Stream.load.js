montageDefine("ca02698","lib/Stream",{dependencies:["./WritableStream.js","util","../"],factory:function(e,t,n){function i(e){o.call(this,new r(this),e)}function r(e){this.scope=e}n.exports=i;var o=e("./WritableStream.js");e("util").inherits(i,o),i.prototype.readable=!0;var a=e("../").EVENTS;Object.keys(a).forEach(function(e){if(0===a[e])r.prototype["on"+e]=function(){this.scope.emit(e)};else if(1===a[e])r.prototype["on"+e]=function(t){this.scope.emit(e,t)};else{if(2!==a[e])throw Error("wrong number of arguments!");r.prototype["on"+e]=function(t,n){this.scope.emit(e,t,n)}}})}});