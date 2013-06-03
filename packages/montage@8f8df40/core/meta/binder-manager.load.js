montageDefine("8f8df40","core/meta/binder-manager",{dependencies:["montage","core/promise","core/meta/object-property","core/meta/binder","core/logger"],factory:function(e,t,n){"use strict";var r=e("montage").Montage,i=e("core/promise").Promise,s=e("core/meta/object-property").ObjectProperty,o=e("core/meta/binder"),u=e("core/logger").logger("blueprint"),a=t.BinderManager=r.create(r,{didCreate:{value:function(){this._binders=[],this._binderTable={}}},_binders:{value:null},_binderTable:{value:null},binders:{get:function(){return this._binders}},addBinder:{value:function(e){if(e!==null){this._binderTable[e.name]&&this.removeBinder(this._binderTable[e.name]);var t=this._binders.indexOf(e);t>=0&&this._binders.splice(t,1),this._binders.push(e),this._binderTable[e.name]=e}}},removeBinder:{value:function(e){if(e!==null){var t=this._binders.indexOf(e);t>=0&&this._binders.splice(t,1),this._binderTable[e.name]&&delete this._binderTable[e.name]}}},binderForName:{value:function(e){return this._binderTable[e]}},blueprintForPrototype:{value:function(e,t){var n,r,i;for(i=0;typeof (n=this.binders[i])!="undefined";i++){r=n.blueprintForPrototype(e,t);if(r!==null)return r}return null}},_defaultBlueprintObjectProperty:{serializable:!0,value:null},defaultBlueprintObjectProperty:{get:function(){return this._defaultBlueprintObjectProperty||(this._defaultBlueprintObjectProperty=s.create().init()),this._defaultBlueprintObjectProperty}},_defaultBinder:{serializable:!0,value:null},defaultBinder:{get:function(){return this._defaultBinder||(this._defaultBinder=o.Binder.create().initWithName("default"),this._defaultBinder.isDefault=!0,this.addBinder(this._defaultBinder)),this._defaultBinder}}})}})