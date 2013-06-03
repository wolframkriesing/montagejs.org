montageDefine("8f8df40","data/transaction-id",{dependencies:["montage","core/uuid","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/uuid").Uuid,s=e("core/logger").logger("transaction-id"),o=Date.now(),u=1,a=null,f=t.TransactionId=r.create(r,{_mappingFolderName:{serializable:!0,enumerable:!1,value:""},mappingFolderName:{get:function(){return this._mappingFolderName}},_uuid:{serializable:!0,enumerable:!1,value:null},_timestamp:{serializable:!0,enumerable:!1,value:null},_nanos:{serializable:!0,enumerable:!1,value:null},initWithMappingSetName:{serializable:!1,enumerable:!1,value:function(e){this._mappingFolderName=e,this._uuid=i.generate();var t=Date.now();return o===t?u+=1:(o=t,u=1),this._timestamp=o,this._nanos=u,s.isDebug&&s.debug(this,"New Transaction ID: "+this._timestamp),this}},factory:{value:function(){return this.factory.delegate&&typeof this.factory.delegate.createTransactionId=="function"?this.factory.delegate.createTransactionId():f.create().init()}},before:{value:function(e){return this._timestamp===e._timestamp?this._nanos<e._nanos:this._timestamp<e._timestamp}},after:{value:function(e){return this._timestamp===e._timestamp?this._nanos>e._nanos:this._timestamp>e._timestamp}},manager:{get:function(){return a===null&&(a=l.create().init()),a}}}),l=t.TransactionManager=r.create(r,{_currentTransaction:{serializable:!1,enumerable:!1,value:null},traceTransactionStart:{serializable:!1,enumerable:!1,value:!1},init:{serializable:!1,enumerable:!1,value:function(){return this}},startTransaction:{value:function(e){if(this._currentTransaction)throw new Error("Transaction Open: "+JSON.stringify(this._currentTransaction));return this._currentTransaction=f.create().initWithMappingSetName(e),this._currentTransaction}},currentTransaction:{value:function(){return this._currentTransaction}},hasCurrentTransaction:{value:function(){return this._currentTransaction!=null}},openTransaction:{value:function(e){if(this._currentTransaction)throw new Error("Transaction Open: "+JSON.stringify(this._currentTransaction));return this._currentTransaction=e,this._currentTransaction}},closeTransaction:{value:function(e){if(this._currentTransaction!==e)throw new Error("Transaction Not Open: "+JSON.stringify(this._currentTransaction));return this._currentTransaction=null,this._currentTransaction}}})}})