var Montage=require("core/core").Montage,Promise=require("core/promise").Promise,UnitDeserializer=Montage.specialize({_context:{value:null},create:{value:function(){return new this}},initWithContext:{value:function(e){return this._context=e,this}},getObjectByLabel:{value:function(e){var t=this._context.getObject(e);return Promise.isPromise(t)?void 0:t}}});exports.UnitDeserializer=UnitDeserializer;