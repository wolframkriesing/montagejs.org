montageDefine("605491b","ui/bluemoon/tabs.reel/tabs",{dependencies:["montage","ui/component","ui/repetition.reel","ui/substitution.reel","ui/dynamic-text.reel","ui/image.reel","core/uuid"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/repetition.reel").Repetition,o=e("ui/substitution.reel").Substitution,u=e("ui/dynamic-text.reel").DynamicText,a=e("ui/image.reel").Image,f=e("core/uuid").Uuid,l=t.Tabs=r.create(i,{_repetition:{value:null},_indicator:{value:null},tabs:{distinct:!0,value:[]},navController:{value:null},content:{value:null},_selectedTabs:{value:null},selectedTabs:{get:function(){return this._selectedTabs},set:function(e){e&&e.length>0&&(this._selectedTabs=e,this.selectedTab=e[0])}},_selectedTabValue:{value:null},selectedTabValue:{get:function(){return this._selectedTabValue},set:function(e){this._selectedTabValue=e;if(this.navController){var t=this._indexOf(e);this.navController.selectedIndexes=[t]}}},_selectedTab:{value:null},selectedTab:{get:function(){return this._selectedTab},set:function(e){e&&e!==this._selectedTab&&(this._selectedTab=e,this.needsDraw=!0)}},_indexOf:{value:function(e){var t=0,n=0,r=this.tabs.length;for(;n<r;n++)this.tabs[n].value===e&&(t=n);return t}},propertyChangeBindingListener:{value:function(e,t,n,r,i,s,o){return o.boundObjectPropertyPath.match(/objectAtCurrentIteration/)?this._repetition?(o.boundObject=this._repetition,this._repetition.propertyChangeBindingListener.apply(this._repetition,arguments)):null:Object.prototype.propertyChangeBindingListener.apply(this,arguments)}},deserializedFromTemplate:{value:function(){this._orphanedChildren=this.childComponents,this.childComponents=null}},templateDidLoad:{value:function(){var e,t=this.element.ownerDocument.createRange();t.selectNodeContents(this.element),e=t.extractContents(),this._repetition.element.querySelector("li").appendChild(e),this._repetition.childComponents=this._orphanedChildren,this._repetition.needsDraw=!0,this.content&&Object.defineBinding(this.content,"switchValue",{boundObject:this,boundObjectPropertyPath:"selectedTab.value"});var n=this.selectedTabValue?this._indexOf(this.selectedTabValue):0;this.navController.selectedIndexes=[n]}},draw:{value:function(){}}})}})