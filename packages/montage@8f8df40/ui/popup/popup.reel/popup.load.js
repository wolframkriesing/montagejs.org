montageDefine("8f8df40","ui/popup/popup.reel/popup",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=t.Popup=r.create(i,{hasTemplate:{value:!0},anchorElement:{value:null},_anchor:{value:null},anchor:{get:function(){return this._anchor},set:function(e){e&&(this._anchor=e,e.nodeName?this.anchorElement=e:this.anchorElement=e.element)}},delegate:{value:null},contentEl:{value:null},containerEl:{value:null},_slot:{value:null},slot:{get:function(){return this._slot},set:function(e){this._slot=e,this.content&&(this._slot.content=this.content)}},_content:{value:null},content:{get:function(){return this._content},set:function(e){this._content!==e&&this.slot&&(this.slot.content=e),this._content=e,this._content.popup=this,this.needsDraw=!0}},_modal:{value:!1},modal:{get:function(){return this._modal},set:function(e){e=!!e,this._modal!==e&&(this._modal=e,this.needsDraw=!0)}},_position:{value:null},position:{get:function(){return this._position},set:function(e){this._position=e}},autoHide:{value:0},_displayed:{value:!1},displayed:{get:function(){return this._displayed},set:function(e){this._displayed!==e&&(this.needsDraw=!0),this._displayed=e}},focusOnShow:{value:!0},prepareForDraw:{value:function(){this.type=this.type||"custom"}},_popupSlot:{value:null},_modalDialogMask:{value:null},_getElementPosition:{value:function(e){var t=0,n=0,r=0,i=0;if(e.offsetParent)do t+=e.offsetLeft,n+=e.offsetTop,r+=e.offsetHeight,i+=e.offsetWidth;while(e=e.offsetParent);return{top:n,left:t,height:r,width:i}}},_getCSSValue:{value:function(e){return e!=null?(typeof e=="number"&&(e+="px"),e):""}},_positionPopup:{value:function(){var e,t,n=this.delegate,r=this.anchorElement,i=this.type;if(this.position!==null)e=this.position;else{var s=this.contentEl||this.content.element,o=parseFloat(s.style.height||0)||s.offsetHeight||0,u=parseFloat(s.style.width||0)||s.offsetWidth||0,a=window.innerHeight,f=window.innerWidth;if(r){var l=this._getElementPosition(r),c=parseFloat(r.style.height||0)||r.offsetHeight||0,h=parseFloat(r.style.width||0)||r.offsetWidth||0;e={top:l.top+c,left:l.left+h/2-u/2},e.left<0&&(e.left=l.left,this._showHidePointer(!1))}else e={top:a/2-o/2,left:f/2-u/2}}n&&typeof n.willPositionPopup=="function"?t=n.willPositionPopup(this,e):t=e;var p=this._popupSlot;t&&(p.element.style.top=this._getCSSValue(t.top),p.element.style.left=this._getCSSValue(t.left),p.element.style.right=this._getCSSValue(t.right),p.element.style.bottom=this._getCSSValue(t.bottom))}},_createModalMask:{value:function(){var e=document.createElement("div");return e.classList.add("montage-Popup-modal-mask"),e.style.zIndex=6999,e.classList.add("montage-invisible"),document.body.appendChild(e),e}},_showHidePointer:{value:function(e){}},_addEventListeners:{value:function(){window.Touch?this.element.ownerDocument.addEventListener("touchstart",this,!1):(this.element.ownerDocument.addEventListener("mousedown",this,!1),this.element.ownerDocument.addEventListener("keyup",this,!1)),window.addEventListener("resize",this)}},_removeEventListeners:{value:function(){window.Touch?this.element.ownerDocument.removeEventListener("touchstart",this,!1):(this.element.ownerDocument.removeEventListener("mousedown",this,!1),this.element.ownerDocument.removeEventListener("keyup",this,!1)),window.removeEventListener("resize",this)}},show:{value:function(){var e=this.type,t=this;this.application.getPopupSlot(e,this,function(e){t._popupSlot=e,t.displayed=!0,t._addEventListeners()})}},hide:{value:function(){var e=this.type,t=this;this.application.getPopupSlot(e,this,function(e){t._removeEventListeners(),t.displayed=!1})}},_showModalMask:{value:function(){this._modalDialogMask=document.querySelector(".montage-Popup-modal-mask"),this._modalDialogMask=this._modalDialogMask||this._createModalMask(),this._modalDialogMask.classList.remove("montage-invisible")}},_hideModalMask:{value:function(){var e=this.application._getActivePopupSlots(),t=0;if(e&&e.length>0){var n,r=e.length;for(n=0;n<r;n++)e[n].content&&e[n].content.modal===!0&&e[n].content.displayed===!0&&t++}t<=0&&this._modalDialogMask.classList.add("montage-invisible")}},draw:{value:function(){if(this.displayed){if(this.modal===!0)this.element.classList.add("montage-Popup--modal");else{this.element.classList.remove("montage-Popup--modal");if(this.autoHide){var e=this;setTimeout(function(){e.hide()},this.autoHide)}}this.element.classList.remove("montage-invisible"),this.content.element.style.display="block",this.content.element.classList.remove("montage-invisible"),this.content.element.setAttribute("tabindex","0")}else this.element.classList.contains("montage-invisible")||this.element.classList.add("montage-invisible"),this.content.element.classList.add("montage-invisible"),this._popupSlot&&(this._popupSlot.content=null)}},didDraw:{value:function(){this._displayed?(this.modal===!0&&this._showModalMask(),this._positionPopup(),this.focusOnShow===!0&&this.content.element.focus()):this.modal===!0&&this._hideModalMask();var e=document.createEvent("CustomEvent");e.initCustomEvent(this._displayed===!0?"show":"hide",!0,!0,this),this.dispatchEvent(e)}},getZIndex:{value:function(e){var t,n,r;while(e&&e!==document){t=e.style.position;if(t==="absolute"||t==="relative"||t==="fixed"){r=e.style["z-index"],n=parseInt(r,10);if(!isNaN(n)&&n!==0)return n}e=e.parentNode}return 0}},_handleTouchMouseup:{value:function(e){var t=this.getZIndex(e.target),n=this.getZIndex(this.element);this.displayed===!0&&t<n&&this.modal!==!0&&(this.displayed=!1)}},_timeoutId:{value:null},handleResize:{value:function(e){var t=this;this.displayed===!0&&(window.clearTimeout(this._timeoutId),this._timeoutId=setTimeout(function(){t.needsDraw=!0},100))}},handleMousedown:{value:function(e){this._handleTouchMouseup(e)}},handleTouchstart:{value:function(e){this._handleTouchMouseup(e)}},handleKeyup:{value:function(e){this.displayed===!0&&!this.modal&&e.keyCode===27&&this.hide()}}})}})