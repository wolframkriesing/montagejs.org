montageDefine("44c1119","ui/token-field/token.reel/token",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component;t.Token=r.create(i,{_text:{value:null},text:{dependencies:["value","textPropertyPath"],get:function(){var e,t,n;return this._text==null&&(this._adHoc=!1,e=this.textPropertyPath,t=this.value,e!=null&&t!=null?typeof t[e]=="undefined"&&this.allowAdHocValues?(this._adHoc=!0,this._text=t):this._text=t[e]:this._text=t),this._text}},allowAdHocValues:{value:null},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value=e,this._text=null}},textPropertyPath:{value:null},tokensController:{value:null},__adHoc:{value:null},_adHoc:{get:function(){return this.__adHoc},set:function(e){this.__adHoc=e,this.needsDraw=!0}},_deleteEl:{value:null},prepareForDraw:{value:function(){window.Touch?this._deleteEl.addEventListener("touchend",this):this._deleteEl.addEventListener("click",this)}},draw:{value:function(){this.element.classList[this._adHoc?"add":"remove"]("montage-Token--adhoc")}},removeSelf:{value:function(){this.tokensController.selectedObjects=[this.value],this.tokensController.removeObjectsAtSelectedIndexes(),this.tokensController.selectedIndexes=[]}},handleClick:{value:function(e){this.removeSelf()}},handleTouchend:{value:function(e){this.removeSelf()}}})}})