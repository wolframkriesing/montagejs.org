"use strict";function SortedArray(e,t,n,a){return this instanceof SortedArray?(Array.isArray(e)?(this.array=e,e=e.splice(0,e.length)):this.array=[],this.contentEquals=t||Object.equals,this.contentCompare=n||Object.compare,this.getDefault=a||Function.noop,this.length=0,this.addEach(e),void 0):new SortedArray(e,t,n,a)}function search(e,t,n){for(var a=0,s=e.length-1;s>=a;){var i=a+s>>1,r=n(t,e[i]);if(r>0)a=i+1;else{if(!(0>r))return i;s=i-1}}return-(a+1)}function searchFirst(e,t,n,a){var s=search(e,t,n);if(0>s)return-1;for(;s>0&&a(t,e[s-1]);)s--;return a(t,e[s])?s:-1}function searchLast(e,t,n,a){var s=search(e,t,n);if(0>s)return-1;for(;e.length-1>s&&a(t,e[s+1]);)s++;return a(t,e[s])?s:-1}function searchForInsertionIndex(e,t,n){var a=search(e,t,n);if(0>a)return-a-1;for(var s=e.length-1;s>a&&0===n(t,e[a+1]);)a++;return a}module.exports=SortedArray;var Shim=require("./shim"),GenericCollection=require("./generic-collection"),PropertyChanges=require("./listen/property-changes"),RangeChanges=require("./listen/range-changes");Object.addEach(SortedArray.prototype,GenericCollection.prototype),Object.addEach(SortedArray.prototype,PropertyChanges.prototype),Object.addEach(SortedArray.prototype,RangeChanges.prototype),SortedArray.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)},SortedArray.prototype.has=function(e){var t=search(this.array,e,this.contentCompare);return t>=0&&this.contentEquals(this.array[t],e)},SortedArray.prototype.get=function(e){var t=searchFirst(this.array,e,this.contentCompare,this.contentEquals);return-1!==t?this.array[t]:this.getDefault(e)},SortedArray.prototype.add=function(e){var t=searchForInsertionIndex(this.array,e,this.contentCompare);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],t),this.array.splice(t,0,e),this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],t),!0},SortedArray.prototype["delete"]=function(e){var t=searchFirst(this.array,e,this.contentCompare,this.contentEquals);return-1!==t?(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],t),this.array.splice(t,1),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],t),!0):!1},SortedArray.prototype.indexOf=function(e){return searchFirst(this.array,e,this.contentCompare,this.contentEquals)},SortedArray.prototype.lastIndexOf=function(e){return searchLast(this.array,e,this.contentCompare,this.contentEquals)},SortedArray.prototype.find=function(e){return searchFirst(this.array,e,this.contentCompare,this.contentEquals)},SortedArray.prototype.findLast=function(e){return searchLast(this.array,e,this.contentCompare,this.contentEquals)},SortedArray.prototype.push=function(){this.addEach(arguments)},SortedArray.prototype.unshift=function(){this.addEach(arguments)},SortedArray.prototype.pop=function(){return this.array.pop()},SortedArray.prototype.shift=function(){return this.array.shift()},SortedArray.prototype.slice=function(){return this.array.slice.apply(this.array,arguments)},SortedArray.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},SortedArray.prototype.swap=function(e,t,n){if(void 0===e&&void 0===t)return[];e=e||0,0>e&&(e+=this.length),void 0===t&&(t=1/0);var a=this.slice(e,e+t);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange(n,a,e),this.array.splice(e,t),this.addEach(n),this.dispatchesRangeChanges&&this.dispatchRangeChange(n,a,e),a},SortedArray.prototype.reduce=function(e,t){var n=arguments[2];return this.array.reduce(function(t,a,s){return e.call(n,t,a,s,this)},t,this)},SortedArray.prototype.reduceRight=function(){var e=arguments[2];return this.array.reduceRight(function(t,n,a){return callback.call(e,t,n,a,this)},basis,this)},SortedArray.prototype.min=function(){return this.length?this.array[0]:void 0},SortedArray.prototype.max=function(){return this.length?this.array[this.length-1]:void 0},SortedArray.prototype.one=function(){return this.array.one()},SortedArray.prototype.clear=function(){var e;this.dispatchesRangeChanges&&(e=this.array.slice(),this.dispatchBeforeRangeChange([],e,0)),this.length=0,this.array.clear(),this.dispatchesRangeChanges&&this.dispatchRangeChange([],e,0)},SortedArray.prototype.equals=function(e,t){return this.array.equals(e,t)},SortedArray.prototype.compare=function(e,t){return this.array.compare(e,t)},SortedArray.prototype.iterate=function(e,t){return new this.Iterator(this.array,e,t)},SortedArray.prototype.Iterator=Array.prototype.Iterator;