montageDefine("605491b","ui/radio-button.reel/radio-button",{dependencies:["montage","ui/component","ui/check-input"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/check-input").CheckInput,o=t.RadioButton=r.create(s,{_fakeCheck:{enumerable:!1,value:function(){var e;this._element.checked||(this._element.checked=!0,e=document.createEvent("HTMLEvents"),e.initEvent("change",!0,!0),this._element.dispatchEvent(e))}},_checkedSyncedWithInputField:{enumerable:!1,value:!1},_checked:{enumerable:!1,value:null},checked:{get:function(){return this._checkedSyncedWithInputField===!0&&(this._checked=this._element.checked),this._checked},set:function(e,t){this._checked=e,t?this._valueSyncedWithInputField=!0:(this._valueSyncedWithInputField=!1,this.needsDraw=!0);if(this._checked===!0&&this.name&&this.name!==null){var n=document.createEvent("CustomEvent");n.initCustomEvent("checked",!0,!0,{name:this.name}),o.dispatchEvent(n),o.addEventListener("checked",this)}}},handleChecked:{value:function(e){this.name===e.detail.name&&(this.checked=!1,o.removeEventListener("checked",this))}},draw:{value:function(){this._valueSyncedWithInputField||(this._element.checked=this._checked),Object.getPrototypeOf(o).draw.call(this)}}});o.addAttributes({autofocus:{value:!1,dataType:"boolean"},disabled:{value:!1,dataType:"boolean"},checked:{value:!1,dataType:"boolean"},form:null,name:null,readonly:{value:!1,dataType:"boolean"},title:null,value:{value:"on"}})}})