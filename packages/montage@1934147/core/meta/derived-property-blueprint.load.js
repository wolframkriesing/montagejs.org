montageDefine("1934147","core/meta/derived-property-blueprint",{dependencies:["montage","core/meta/property-blueprint","core/logger"],factory:function(e,n){"use strict";e("montage").Montage;var t=e("core/meta/property-blueprint").PropertyBlueprint;e("core/logger").logger("blueprint");var s={dependencies:[],getterDefinition:"",setterDefinition:""};n.DerivedPropertyBlueprint=t.specialize({constructor:{value:function(){this.super()}},serializeSelf:{value:function(e){this.dependencies.length>0&&this._setPropertyWithDefaults(e,"dependencies",this.dependencies),this._setPropertyWithDefaults(e,"getterDefinition",this.getterDefinition),this._setPropertyWithDefaults(e,"setterDefinition",this.setterDefinition)}},deserializeSelf:{value:function(e){this.dependencies=this._getPropertyWithDefaults(e,"dependencies"),this.getterDefinition=this._getPropertyWithDefaults(e,"getterDefinition"),this.setterDefinition=this._getPropertyWithDefaults(e,"setterDefinition")}},_setPropertyWithDefaults:{value:function(e,n,t){t!=s[n]&&e.setProperty(n,t)}},_getPropertyWithDefaults:{value:function(e,n){var t=e.getProperty(n);return t?t:s[n]}},isDerived:{get:function(){return!0},serializable:!1},dependencies:{value:[],distinct:!0},getterDefinition:{value:s.getterDefinition},setterDefinition:{value:s.setterDefinition}})}});