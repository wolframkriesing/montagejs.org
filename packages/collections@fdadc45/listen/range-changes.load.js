montageDefine("fdadc45","listen/range-changes",{dependencies:["weak-map","../dict"],factory:function(e,t,n){"use strict";function i(){throw Error("Can't construct. RangeChanges is a mixin.")}var r=e("weak-map"),a=e("../dict"),o=new r;n.exports=i,i.prototype.getAllRangeChangeDescriptors=function(){return o.has(this)||o.set(this,a()),o.get(this)},i.prototype.getRangeChangeDescriptor=function(e){var t=this.getAllRangeChangeDescriptors();return e=e||"",t.has(e)||t.set(e,{isActive:!1,changeListeners:[],willChangeListeners:[]}),t.get(e)},i.prototype.addRangeChangeListener=function(e,t,n){!this.isObservable&&this.makeObservable&&this.makeObservable();var i,r=this.getRangeChangeDescriptor(t);i=n?r.willChangeListeners:r.changeListeners,i.push(e),Object.defineProperty(this,"dispatchesRangeChanges",{value:!0,writable:!0,configurable:!0,enumerable:!1});var a=this;return function(){a&&(a.removeRangeChangeListener(e,t,n),a=null)}},i.prototype.removeRangeChangeListener=function(e,t,n){var i,r=this.getRangeChangeDescriptor(t);i=n?r.willChangeListeners:r.changeListeners;var a=i.lastIndexOf(e);if(-1===a)throw Error("Can't remove listener: does not exist.");i.splice(a,1)},i.prototype.dispatchRangeChange=function(e,t,n,i){var r=this.getAllRangeChangeDescriptors(),a="Range"+(i?"WillChange":"Change");r.forEach(function(r,o){if(!r.isActive){r.isActive=!0;var s;s=i?r.willChangeListeners:r.changeListeners;var l="handle"+(o.slice(0,1).toUpperCase()+o.slice(1))+a;try{s.forEach(function(r){if(r[l])r[l](e,t,n,this,i);else{if(!r.call)throw Error("Handler "+r+" has no method "+l+" and is not callable");r.call(this,e,t,n,this,i)}},this)}finally{r.isActive=!1}}},this)},i.prototype.addBeforeRangeChangeListener=function(e,t){return this.addRangeChangeListener(e,t,!0)},i.prototype.removeBeforeRangeChangeListener=function(e,t){return this.removeRangeChangeListener(e,t,!0)},i.prototype.dispatchBeforeRangeChange=function(e,t,n){return this.dispatchRangeChange(e,t,n,!0)}}});