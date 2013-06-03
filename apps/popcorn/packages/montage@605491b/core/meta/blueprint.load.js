montageDefine("605491b","core/meta/blueprint",{dependencies:["montage","core/promise","core/deserializer","core/meta/object-property","core/enum","core/meta/binder","core/meta/blueprint-reference","core/meta/property-blueprint","core/meta/association-blueprint","core/meta/derived-property-blueprint","core/meta/validation-rule","core/logger"],factory:function(e,t,n){"use strict";var r=e("montage").Montage,i=e("core/promise").Promise,s=e("core/deserializer").Deserializer,o=e("core/meta/object-property").ObjectProperty,u=e("core/enum").Enum,a=e("core/meta/binder"),f=e("core/meta/blueprint-reference").BlueprintReference,l=e("core/meta/property-blueprint").PropertyBlueprint,c=e("core/meta/association-blueprint").AssociationBlueprint,h=e("core/meta/derived-property-blueprint").DerivedPropertyBlueprint,p=e("core/meta/validation-rule").PropertyValidationRule,d=e("core/logger").logger("blueprint"),v=t.Blueprint=r.create(r,{initWithName:{value:function(e){return this.initWithNameAndModuleId(e,null)}},initWithNameAndModuleId:{value:function(e,t){return this._name=e!==null?e:"default",this.prototypeName=this.name,this.moduleId=t,this.customPrototype=!1,this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),this._binder&&!this.binder.isDefault&&e.setProperty("binder",this._binder,"reference"),e.setProperties(),this._parentReference&&e.setProperty("parent",this._parentReference),e.setProperty("propertyBlueprints",this._propertyBlueprints),e.setProperty("propertyBlueprintGroups",this._propertyBlueprintGroups),e.setProperty("propertyValidationRules",this._propertyValidationRules)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name");var t=e.getProperty("binder");t&&(this._binder=t),this._parentReference=e.getProperty("parent"),this._propertyBlueprints=e.getProperty("propertyBlueprints"),this._propertyBlueprintGroups=e.getProperty("propertyBlueprintGroups"),this._propertyValidationRules=e.getProperty("propertyValidationRules");var n=r.getSerializablePropertyNames(this);for(var i=0,s=n.length;i<s;i++){var o=n[i];this[o]=e.getProperty(o)}}},_name:{value:null},name:{get:function(){return this._name}},create:{value:function(e,t){if(typeof e=="undefined"||v.isPrototypeOf(e)){var n=Object.getPrototypeOf(v).create;return n.call(this,typeof e=="undefined"?this:e,t)}var i=r.create(e,t);return this.ObjectProperty.applyWithBlueprint(i,this),this.customPrototype=!0,i}},newInstance:{value:function(){var e=this.newInstancePrototype();return e?e.create():null}},newInstancePrototype:{value:function(){var n=this;if(this.customPrototype){var s=i.defer();return e.async(this.moduleId,function(e){s.resolve(e)}),s.promise.then(function(e){var t=e[n.prototypeName];return t?t:null})}if(typeof t[n.prototypeName]=="undefined"){var o=this.parent?this.parent.newInstancePrototype():r,u=r.create(o,{init:{value:function(){return this}}});this.ObjectProperty.applyWithBlueprint(u,this),t[n.prototypeName]=u}var a=t[n.prototypeName];return a?a:null}},ObjectProperty:{serializable:!1,enumerable:!0,get:function(){return this.binder?this.binder.ObjectProperty:a.Binder.manager.defaultBlueprintObjectProperty}},blueprintModuleId:{value:null},getBlueprintWithModuleId:{value:function(e,t){var n=i.defer(),r=t;return r||(r=this.require),r.async(e).then(function(t){try{s.create().initWithObjectAndRequire(t,r,e).deserializeObject(function(t){if(t){var i=t._binder?t._binder:a.Binder.manager.defaultBinder,s=i.blueprintForPrototype(t.prototypeName,t.moduleId);s?n.resolve(s):(i.addBlueprint(t),t.blueprintModuleId=e,t._parentReference?t._parentReference.promise(r).then(function(e){t._parent=e,n.resolve(t)}):n.resolve(t))}else n.reject(new Error("No Blueprint found "+e))},r)}catch(i){n.reject(new Error("Error deserializing Blueprint "+e+" "+JSON.stringfy(i)))}},n.reject),n.promise}},createDefaultBlueprintForObject:{value:function(e){if(e){var t=v.create().initWithName(e.identifier);for(var n in e)if(n.charAt(0)!=="_"){var r=e.name,i;Array.isArray(r)?i=t.addToManyPropertyBlueprintNamed(n):i=t.addToOnePropertyBlueprintNamed(n)}return t}return m}},identifier:{get:function(){return["blueprint",this.name.toLowerCase()].join("_")}},_binder:{value:null},binder:{serializable:!1,get:function(){return this._binder||(this._binder=a.Binder.manager.defaultBinder,this._binder.addBlueprint(this)),this._binder},set:function(e){this._binder=e}},_parentReference:{value:null},_parent:{value:null},parent:{serializable:!1,get:function(){return this._parent},set:function(e){e?(this._parentReference=f.create().initWithValue(e),this._parent=e):(this._parentReference=null,this._parent=null)}},moduleId:{value:""},prototypeName:{value:null},customPrototype:{value:!1},_propertyBlueprints:{value:[],distinct:!0},propertyBlueprints:{get:function(){var e=[];return e=e.concat(this._propertyBlueprints),this.parent&&(e=e.concat(this.parent.propertyBlueprints)),e}},_propertyBlueprintsTable:{value:{},distinct:!0,writable:!1},addPropertyBlueprint:{value:function(e){if(e!==null&&e.name!==null){var t=this._propertyBlueprints.indexOf(e);t<0&&(e.blueprint!==null&&e.blueprint!==this&&e.blueprint.removePropertyBlueprint(e),this._propertyBlueprints.push(e),this._propertyBlueprintsTable[e.name]=e,e._blueprint=this)}return e}},removePropertyBlueprint:{value:function(e){if(e!==null&&e.name!==null){var t=this._propertyBlueprints.indexOf(e);t>=0&&(this._propertyBlueprints.splice(t,1),delete this._propertyBlueprintsTable[e.name],e._blueprint=null)}return e}},newPropertyBlueprint:{value:function(e,t){return l.create().initWithNameBlueprintAndCardinality(e,this,t)}},newAssociationBlueprint:{value:function(e,t){return c.create().initWithNameBlueprintAndCardinality(e,this,t)}},newDerivedPropertyBlueprint:{value:function(e,t){return h.create().initWithNameBlueprintAndCardinality(e,this,t)}},addToOnePropertyBlueprintNamed:{value:function(e){return this.addPropertyBlueprint(this.newPropertyBlueprint(e,1))}},addToManyPropertyBlueprintNamed:{value:function(e){return this.addPropertyBlueprint(this.newPropertyBlueprint(e,Infinity))}},addToOneAssociationBlueprintNamed:{value:function(e,t){var n=this.addPropertyBlueprint(this.newAssociationBlueprint(e,1));return t&&(n.targetBlueprint=t.blueprint,t.targetBlueprint=this),n}},addToManyAssociationBlueprintNamed:{value:function(e,t){var n=this.addPropertyBlueprint(this.newAssociationBlueprint(e,Infinity));return t&&(n.targetBlueprint=t.blueprint,t.targetBlueprint=this),n}},propertyBlueprintForName:{value:function(e){var t=this._propertyBlueprintsTable[e];if(typeof t=="undefined"){t=y;var n,r;for(r=0;typeof (n=this._propertyBlueprints[r])!="undefined";r++)if(n.name===e){t=n;break}this._propertyBlueprintsTable[e]=t}return t===y&&(t=null),!t&&this.parent&&(t=this.parent.propertyBlueprintForName(e)),t}},_propertyBlueprintGroups:{distinct:!0,value:{}},propertyBlueprintGroups:{get:function(){var e=[];for(var t in this._propertyBlueprintGroups)e.push(t);return e}},propertyBlueprintGroupForName:{value:function(e){var t=this._propertyBlueprintGroups[e];return!t&&this.parent&&(t=this.parent.propertyBlueprintGroupForName(e)),t!=null?t:[]}},addPropertyBlueprintGroupNamed:{value:function(e){var t=this._propertyBlueprintGroups[e];return t==null&&(t=[],this._propertyBlueprintGroups[e]=t),t}},removePropertyBlueprintGroupNamed:{value:function(e){var t=this._propertyBlueprintGroups[e];return t!=null&&delete this._propertyBlueprintGroups[e],t}},addPropertyBlueprintToGroupNamed:{value:function(e,t){var n=this._propertyBlueprintGroups[t];n==null&&(n=this.addPropertyBlueprintGroupNamed(t));var r=n.indexOf(e);return r<0&&n.push(e),n}},removePropertyBlueprintFromGroupNamed:{value:function(e,t){var n=this._propertyBlueprintGroups[t];if(n!=null&&e!=null){var r=n.indexOf(e);r>=0&&n.splice(r,1)}return n!=null?n:[]}},_propertyValidationRules:{value:{}},propertyValidationRules:{get:function(){var e=[];for(var t in this._propertyValidationRules)e.push(this._propertyValidationRules[t]);return e}},propertyValidationRuleForName:{value:function(e){return this._propertyValidationRules[e]}},addPropertyValidationRule:{value:function(e){var t=this._propertyValidationRules[e];return t==null&&(t=p.create().initWithNameAndBlueprint(e,this),this._propertyValidationRules[e]=t),t}},removePropertyValidationRule:{value:function(e){var t=this._propertyValidationRules[e];return t!=null&&delete this._propertyValidationRules[e],t}},evaluateRules:{value:function(e){var t=[];for(var n in this._propertyValidationRules){var r=this._propertyValidationRules[n];r.evaluateRule(e)&&t.push(r.messageKey)}return t}}}),m=Object.freeze(v.create().initWithName("Unknown")),g=u.create().initWithMembers("string","number","boolean","date","enum","set","list","map","url","object"),y=Object.freeze(l.create().initWithNameBlueprintAndCardinality("Unknown",null,1))}})