montageDefine("44c1119","data/store-connection-information",{dependencies:["montage","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/logger").logger("store-connection-information"),s=t.StoreConnectionInformation=r.create(r,{initWithNameAndInformation:{value:function(e,t,n,r){return this._name=e,this._url=t,this._username=n,this._password=r,this}},equals:{value:function(e){if(!e)return!1;var t=r.getInfoForObject(e);if(!t)return!1;var n=r.getInfoForObject(this);return t.objectName===n.objectName&&t.moduleId===n.moduleId?this._name===e._name&&this._url===e._url&&this._username===e._username&&this._password===e._password:!1}},_name:{serializable:!0,enumerable:!1,value:null},name:{get:function(){return this._name}},_url:{serializable:!0,enumerable:!1,value:null},url:{get:function(){return this._url}},_username:{serializable:!0,enumerable:!1,value:null},username:{get:function(){return this._username}},_password:{serializable:!0,enumerable:!1,value:null},password:{get:function(){return this._password}}})}})