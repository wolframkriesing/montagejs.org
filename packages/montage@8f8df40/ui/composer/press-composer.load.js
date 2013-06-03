montageDefine("8f8df40","ui/composer/press-composer",{dependencies:["montage","ui/composer/composer","core/event/mutable-event"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/composer/composer").Composer,s=e("core/event/mutable-event").MutableEvent,o=t.PressComposer=r.create(i,{load:{value:function(){window.Touch?this._element.addEventListener("touchstart",this,!0):this._element.addEventListener("mousedown",this,!0)}},unload:{value:function(){window.Touch?this._element.removeEventListener("touchstart",this):this._element.removeEventListener("mousedown",this)}},delegate:{value:null},cancelPress:{value:function(){return this._state===o.PRESSED?(this._dispatchPressCancel(),this._endInteraction(),!0):!1}},addEventListener:{value:function(e,t,n){i.addEventListener.call(this,e,t,n),e==="longPress"&&(this._shouldDispatchLongPress=!0)}},UNPRESSED:{value:0},PRESSED:{value:1},CANCELLED:{value:2},_state:{enumerable:!1,value:0},state:{get:function(){return this._state}},_shouldDispatchLongPress:{enumerable:!1,value:!1},_longPressThreshold:{enumerable:!1,value:1e3},longPressThreshold:{get:function(){return this._longPressThreshold},set:function(e){this._longPressThreshold!==e&&(this._longPressThreshold=e)}},_longPressTimeout:{enumberable:!1,value:null},_observedPointer:{enumerable:!1,value:null},_startInteraction:{enumerable:!1,value:function(e){if("disabled"in this.component&&this.component.disabled||this._observedPointer!==null)return!1;var t=0,n;if(e.type==="touchstart"){n=e.changedTouches.length;for(;t<n;t++)if(!this.component.eventManager.componentClaimingPointer(e.changedTouches[t].identifier)){this._observedPointer=e.changedTouches[t].identifier;break}if(this._observedPointer===null)return!1;document.addEventListener("touchend",this,!1),document.addEventListener("touchcancel",this,!1)}else e.type==="mousedown"&&(this._observedPointer="mouse",document.addEventListener("mouseup",this,!1),document.addEventListener("click",this,!1));this._element.addEventListener("dragstart",this,!1),this.component.eventManager.claimPointer(this._observedPointer,this),this._dispatchPressStart(e)}},_interpretInteraction:{value:function(e){var t,n,r;if(this._observedPointer===null){this._endInteraction(e);return}t=!this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this),n=e.target;while(n!==this._element&&n&&n.parentNode)n=n.parentNode;r=n===this._element;if(t&&e.type==="click"){e.preventDefault(),this._endInteraction(e);return}if(e.type==="mouseup"){if(!t&&r){this._dispatchPress(e),this._endInteraction(e);return}if(!t&&!r){this._dispatchPressCancel(e),this._endInteraction(e);return}t&&!r&&this._endInteraction(e)}}},_endInteraction:{value:function(e){if(!e||e.type==="touchend"||e.type==="touchcancel")document.removeEventListener("touchend",this),document.removeEventListener("touchcancel",this);else if(!e||e.type==="click"||e.type==="mouseup")document.removeEventListener("click",this),document.removeEventListener("mouseup",this);this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.component.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null,this._state=o.UNPRESSED}},_changedTouchisObserved:{value:function(e){if(this._observedPointer===null)return!1;var t=0,n=event.changedTouches.length;for(;t<n;t++)if(event.changedTouches[t].identifier===this._observedPointer)return t;return!1}},surrenderPointer:{value:function(e,t){var n=this.callDelegateMethod("surrenderPointer",e,t);return typeof n!="undefined"&&n===!1?!1:(this._dispatchPressCancel(),!0)}},captureTouchstart:{value:function(e){this._startInteraction(e)}},handleTouchend:{value:function(e){if(this._observedPointer===null){this._endInteraction(e);return}this._changedTouchisObserved(e.changedTouches)!==!1&&(this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?this._dispatchPress(e):e.preventDefault(),this._endInteraction(e))}},handleTouchcancel:{value:function(e){if(this._observedPointer===null||this._changedTouchisObserved(e.changedTouches)!==!1)this.component.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this._dispatchPressCancel(e),this._endInteraction(e)}},captureMousedown:{value:function(e){this._startInteraction(e)}},handleClick:{value:function(e){this._interpretInteraction(e)}},handleMouseup:{value:function(e){this._interpretInteraction(e)}},handleDragstart:{value:function(e){this._dispatchPressCancel(e),this._endInteraction()}},_createPressEvent:{enumerable:!1,value:function(e,t){var n,r,i;return t||(t=document.createEvent("CustomEvent"),t.initCustomEvent(e,!0,!0,null)),n=u.create(),n.event=t,n.type=e,n.pointer=this._observedPointer,t.changedTouches&&(i=this._changedTouchisObserved(t.changedTouches))!==!1&&(n.touch=t.changedTouches[i]),n}},_dispatchPressStart:{enumerable:!1,value:function(e){this._state=o.PRESSED,this.dispatchEvent(this._createPressEvent("pressStart",e));if(this._shouldDispatchLongPress){var t=this;this._longPressTimeout=setTimeout(function(){t._dispatchLongPress()},this._longPressThreshold)}}},_dispatchPress:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this.dispatchEvent(this._createPressEvent("press",e)),this._state=o.UNPRESSED}},_dispatchLongPress:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(this.dispatchEvent(this._createPressEvent("longPress",e)),this._longPressTimeout=null)}},_dispatchPressCancel:{enumerable:!1,value:function(e){this._shouldDispatchLongPress&&(clearTimeout(this._longPressTimeout),this._longPressTimeout=null),this._state=o.CANCELLED,this.dispatchEvent(this._createPressEvent("pressCancel",e))}}}),u=function(){var e,t,n,i,s,o;e=r.create(r,{type:{value:"press"},_event:{enumerable:!1,value:null},event:{get:function(){return this._event},set:function(e){this._event=e}},_touch:{enumerable:!1,value:null},touch:{get:function(){return this._touch},set:function(e){this._touch=e}}}),t=["altKey","ctrlKey","metaKey","shiftKey","cancelBubble","currentTarget","defaultPrevented","eventPhase","timeStamp","preventDefault","stopImmediatePropagation","stopPropagation"],n=["clientX","clientY","pageX","pageY","screenX","screenY","target"],i=function(e){return{get:function(){return this._event[e]}}},s=function(e){return{get:function(){return this._touch?this._touch[e]:this._event[e]}}};for(o=t.length-1;o>=0;o--)r.defineProperty(e,t[o],i(t[o]));for(o=n.length-1;o>=0;o--)r.defineProperty(e,n[o],s(n[o]));return e}()}})