var Montage=require("montage/core/core").Montage,Template=require("montage/ui/template").Template,Effect=require("effect/effect").Effect;EffectLoader=exports.EffectLoader=Montage.create(Montage,{loadEffect:{value:function(e,t,n,r,i){if(!this._isTemplateLoaded||!this._isTemplateLoading){this._isTemplateLoading=!0;var s=this,o,u,a=function(n){s._template=n,n.instantiateWithOwnerAndDocument(null,window.document,function(n){n.name=t,e&&e(n,i)}),s._isTemplateLoaded=!0,s._isTemplateLoading=!1},f;r?(o=Montage.getInfoForObject(this),f=o.require):f=window.require,Template.templateWithModuleId(f,n,a)}}}})