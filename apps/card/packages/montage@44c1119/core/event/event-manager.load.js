montageDefine("44c1119","core/event/event-manager",{dependencies:["montage","core/uuid","core/event/mutable-event","core/serializer","core/deserializer"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/uuid"),s=e("core/event/mutable-event").MutableEvent,o=e("core/serializer").Serializer,u=e("core/deserializer").Deserializer,a;if(typeof window!="undefined"){typeof window.Touch=="undefined"&&"ontouchstart"in window&&(window.Touch=function(){},function(){var e;document.addEventListener("touchstart",e=function(t){window.Touch=t.touches[0].constructor,document.nativeRemoveEventListener?document.nativeRemoveEventListener("touchstart",e,!0):document.removeEventListener("touchstart",e,!0),a&&a.isStoringPointerEvents&&(a.isStoringPointerEvents=!1,a.isStoringPointerEvents=!0)},!0)}()),r.defineProperty(Element.prototype,"eventHandlerUUID",{value:undefined,enumerable:!1}),r.defineProperty(Element.prototype,"controller",{get:function(){return a._elementEventHandlerByUUID[this.eventHandlerUUID]},enumerable:!1}),r.defineProperty(Object.prototype,"addEventListener",{value:function(t,n,r){n&&a.registerEventListener(this,t,n,r)}}),r.defineProperty(Object.prototype,"removeEventListener",{value:function(t,n,r){n&&a.unregisterEventListener(this,t,n,r)}}),r.defineProperty(Object.prototype,"dispatchEvent",{value:function(e){var t=e;s.isPrototypeOf(e)||(t=s.fromEvent(e)),t.target=this,a.handleEvent(t)},enumerable:!1}),r.defineProperty(Object.prototype,"dispatchEventNamed",{value:function(e,t,n,r){var i=s.fromType(e,t,n,r);i.target=this,a.handleEvent(i)}});var f=r.create(r,{type:{value:null},listener:{value:null},capture:{value:null}});o.defineSerializationUnit("listeners",function(e,t){var n=a,r=e.uuid,i=[],s,o,u;for(var f in n.registeredEventListeners){s=n.registeredEventListeners[f],o=s&&s[r];if(o)for(var l in o.listeners)u=o.listeners[l],i.push({type:f,listener:t.addObjectReference(u.listener),capture:u.capture})}if(i.length>0)return i}),u.defineDeserializationUnit("listeners",function(e,t){for(var n=0,r;r=t[n];n++)e.addEventListener(r.type,r.listener,r.capture)});var l=Event.NONE,c=Event.CAPTURING_PHASE,h=Event.AT_TARGET,p=Event.BUBBLING_PHASE,d="function",v=t.EventManager=r.create(r,{eventDefinitions:{value:{abort:{bubbles:!1,cancelable:!1},beforeunload:{bubbles:!1},blur:{bubbles:!1,cancelable:!1},change:{bubbles:!0,cancelable:!1},click:{bubbles:!0,cancelable:!0},close:{bubbles:!1,cancelable:!1},compositionend:{bubbles:!0,cancelable:!1},compositionstart:{bubbles:!0,cancelable:!0},compositionupdate:{bubbles:!0,cancelable:!1},contextmenu:{bubbles:!0,cancelable:!0},copy:{bubbles:!0,cancelable:!0},cut:{bubbles:!0,cancelable:!0},dblclick:{bubbles:!0,cancelable:!1},DOMActivate:{bubbles:!0,cancelable:!0,deprecated:!0},DOMMouseScroll:{bubbles:!0},drag:{bubbles:!0,cancelable:!0},dragend:{bubbles:!0,cancelable:!1},dragenter:{bubbles:!0,cancelable:!0},dragleave:{bubbles:!0,cancelable:!1},dragover:{bubbles:!0,cancelable:!0},dragstart:{bubbles:!0,cancelable:!0},drop:{bubbles:!0,cancelable:!0},error:{bubbles:function(e){return!(XMLHttpRequest.prototype.isPrototypeOf(e)||e.tagName&&"VIDEO"===e.tagName.toUpperCase()||e.tagName&&"AUDIO"===e.tagName.toUpperCase())},cancelable:!1},focus:{bubbles:!1,cancelable:!1},focusin:{bubbles:!0,cancelable:!1},focusout:{bubbles:!0,cancelable:!1},input:{bubbles:!0,cancelable:!1},keydown:{bubbles:!0,cancelable:!1},keypress:{bubbles:!0,cancelable:!1},keyup:{bubbles:!0,cancelable:!1},load:{bubbles:!1,cancelable:!1},loadend:{bubbles:!1,cancelable:!1},loadstart:{bubbles:!1,cancelable:!1},message:{bubbles:!1,cancelable:!1},mousedown:{bubbles:!0,cancelable:!0},mouseenter:{bubbles:!1,cancelable:!1},mouseleave:{bubbles:!1,cancelable:!1},mousemove:{bubbles:!0,cancelable:!0},mouseout:{bubbles:!0,cancelable:!0},mouseover:{bubbles:!0,cancelable:!0},mouseup:{bubbles:!0,cancelable:!0},mousewheel:{bubbles:!0},orientationchange:{bubbles:!1},paste:{bubbles:!0,cancelable:!0},progress:{bubbles:!1,cancelable:!1},reset:{bubbles:!0,cancelable:!1},resize:{bubbles:!1,cancelable:!1},scroll:{bubbles:function(e){return!!e.defaultView},cancelable:!1},select:{bubbles:!0,cancelable:!1},submit:{bubbles:!0,cancelable:!0},touchcancel:{bubbles:!0,cancelable:!1},touchend:{bubbles:!0,cancelable:!0},touchmove:{bubbles:!0,cancelable:!0},touchstart:{bubbles:!0,cancelable:!0},unload:{bubbles:!1,cancelable:!1},wheel:{bubbles:!0,cancelable:!0}}},_DOMPasteboardElement:{value:null,enumerable:!1},_delegate:{value:null,enumerable:!1},delegate:{enumerable:!1,get:function(){return this._delegate},set:function(e){this._delegate=e}},_application:{value:null,enumerable:!1},application:{enumerable:!1,get:function(){return this._application},set:function(e){this._application=e}},_registeredWindows:{value:null,enumerable:!1},_windowsAwaitingFinalRegistration:{value:{},enumerable:!1},initWithWindow:{enumerable:!1,value:function(e){if(!this._registeredWindows)return this.registerWindow(e),this;throw"EventManager has already been initialized"}},registerWindow:{enumerable:!1,value:function(e){if(e.defaultEventManager&&e.defaultEventManager!==this)throw"EventManager cannot register a window already registered to another EventManager";if(this._registeredWindows&&this._registeredWindows.indexOf(e)>=0)throw"EventManager cannot register a window more than once";this._registeredWindows||(this._registeredWindows=[]);if(!e.uuid||e.uuid.length===0)e.uuid=i.generate();if(this._windowsAwaitingFinalRegistration[e.uuid]===e)return;e.Element.prototype.nativeAddEventListener=e.Element.prototype.addEventListener,Object.defineProperty(e,"nativeAddEventListener",{enumerable:!1,value:e.addEventListener}),Object.getPrototypeOf(e.document).nativeAddEventListener=e.document.addEventListener,e.XMLHttpRequest.prototype.nativeAddEventListener=e.XMLHttpRequest.prototype.addEventListener,e.Worker&&(e.Worker.prototype.nativeAddEventListener=e.Worker.prototype.addEventListener),e.Element.prototype.nativeRemoveEventListener=e.Element.prototype.removeEventListener,Object.defineProperty(e,"nativeRemoveEventListener",{enumerable:!1,value:e.removeEventListener}),Object.getPrototypeOf(e.document).nativeRemoveEventListener=e.document.removeEventListener,e.XMLHttpRequest.prototype.nativeRemoveEventListener=e.XMLHttpRequest.prototype.removeEventListener,e.Worker&&(e.Worker.prototype.nativeRemoveEventListener=e.Worker.prototype.removeEventListener),Object.defineProperty(e,"addEventListener",{enumerable:!1,value:e.XMLHttpRequest.prototype.addEventListener=e.Element.prototype.addEventListener=Object.getPrototypeOf(e.document).addEventListener=function(t,n,r){return e.defaultEventManager.registerEventListener(this,t,n,!!r)}}),e.Worker&&(e.Worker.prototype.addEventListener=e.addEventListener),Object.defineProperty(e,"removeEventListener",{enumerable:!1,value:e.XMLHttpRequest.prototype.removeEventListener=e.Element.prototype.removeEventListener=Object.getPrototypeOf(e.document).removeEventListener=function(t,n,r){return e.defaultEventManager.unregisterEventListener(this,t,n,!!r)}}),e.Worker&&(e.Worker.prototype.removeEventListener=e.removeEventListener);if(e.HTMLDivElement.prototype.addEventListener!==e.Element.prototype.nativeAddEventListener&&e.HTMLElement&&"addEventListener"in e.HTMLElement.prototype&&e.Components&&e.Components.interfaces){var n,r;for(n in Components.interfaces)if(n.match(/^nsIDOMHTML\w*Element$/)){n=n.replace(/^nsIDOM/,"");if(n=window[n])r=n.prototype,r.nativeAddEventListener=r.addEventListener,r.addEventListener=e.Element.prototype.addEventListener,r.nativeRemoveEventListener=r.removeEventListener,r.removeEventListener=e.Element.prototype.removeEventListener}}a=e.defaultEventManager=t.defaultEventManager=this,this._registeredWindows.push(e),this._windowsAwaitingFinalRegistration[e.uuid]=e,/loaded|complete|interactive/.test(e.document.readyState)?this._finalizeWindowRegistration(e):e.document.addEventListener("DOMContentLoaded",this,!0)}},_finalizeWindowRegistration:{enumerable:!1,value:function(e){if(this._windowsAwaitingFinalRegistration[e.uuid]!==e)throw"EventManager wasn't expecting to register this window";delete this._windowsAwaitingFinalRegistration[e.uuid],this._listenToWindow(e)}},unregisterWindow:{enumerable:!1,value:function(e){if(this._registeredWindows.indexOf(e)<0)throw"EventManager cannot unregister an unregistered window";var t=function(t){return e!==t};this._registeredWindows=this._registeredWindows.filter(t),this._stopListeningToWindow(e)}},unregisterWindows:{enumerable:!1,value:function(){this._registeredWindows.forEach(this.unregisterWindow)}},registeredEventListeners:{enumerable:!1,value:{}},registeredEventListenersForEventType_:{value:function(e){var t=this.registeredEventListeners[e],n,r,i,s;if(!t)return null;s={};for(n in t){r=t[n].listeners;for(i in r)s[i]=r[i]}return s}},registeredEventListenersForEventType_onTarget_:{enumerable:!1,value:function(e,t,n){var r,i;return t===n?r=n.eventManager.registeredEventListeners[e]:r=this.registeredEventListeners[e],r?(i=r[t.uuid],i?i.listeners:null):null}},registeredEventListenersOnTarget_:{value:function(e){var t,n,r=[];for(t in this.registeredEventListeners)n=this.registeredEventListeners[t],e.uuid in n&&r.push(n);return r}},registerEventListener:{enumerable:!1,value:function(e,t,n,r){var i=this.registeredEventListeners[t],s,o,u,a=!1,f=!1;if(typeof e.uuid=="undefined"){if(Array.isCanvasPixelArray(e))return;throw"EventManager cannot observe a target without a uuid"}return i?((s=i[e.uuid])||(s=i[e.uuid]={target:e,listeners:{}},a=!0),o=s.listeners[n.uuid],u=r?"capture":"bubble",o?(o[u]=!0,f=!0):(o={listener:n,capture:r,bubble:!r},s.listeners[n.uuid]=o,f=!0)):(i=this.registeredEventListeners[t]={},i[e.uuid]={target:e,listeners:{}},i[e.uuid].listeners[n.uuid]={listener:n,capture:r,bubble:!r},a=!0,f=!0),a&&typeof e.nativeAddEventListener=="function"&&this._observeTarget_forEventType_(e,t),f}},unregisterEventListener:{enumerable:!1,value:function(e,t,n,r){var i=this.registeredEventListeners[t],s,o,u,a,f;if(!i)return;s=i[e.uuid];if(!s)return;o=s.listeners[n.uuid];if(!o){for(a in s.listeners){f=s.listeners[a].listener;if(f.originalListener&&f.originalListener.uuid===n.uuid){o=s.listeners[a],n=f;break}}if(!o)return}u=r?"capture":"bubble",o[u]=!1,!o.bubble&&!o.capture&&(delete s.listeners[n.uuid],Object.keys(s.listeners).length===0&&(delete i[e.uuid],Object.keys(i).length===0&&(delete this.registeredEventListeners[t],this._stopObservingTarget_forEventType_(e,t))))}},actualDOMTargetForEventTypeOnTarget:{value:function(e,t){if(!t.nativeAddEventListener)return null;if(!t.defaultView){var n=this.eventDefinitions[e],r;return n?(r=typeof n.bubbles===d?n.bubbles(t):n.bubbles,r?t.screen?t.document:t.ownerDocument:t):t}return t}},_observedTarget_byEventType_:{value:{}},_observeTarget_forEventType_:{enumerable:!1,value:function(e,t){var n;(n=this.actualDOMTargetForEventTypeOnTarget(t,e))&&(!this._observedTarget_byEventType_[t]||!this._observedTarget_byEventType_[t][n.uuid])&&(this._observedTarget_byEventType_[t]||(this._observedTarget_byEventType_[t]={}),this._observedTarget_byEventType_[t][n.uuid]=this,n.nativeAddEventListener(t,this,!0))}},_stopObservingTarget_forEventType_:{enumerable:!1,value:function(e,t){var n;n=this.actualDOMTargetForEventTypeOnTarget(t,e),n&&(delete this._observedTarget_byEventType_[t][n.uuid],n.nativeRemoveEventListener(t,this,!0))}},_activationHandler:{enumerable:!0,value:null},_listenToWindow:{enumerable:!1,value:function(e){if(!this._activationHandler){var t=this;this._activationHandler=function(e){var n=e.type;t.registeredEventListeners[n]||t.handleEvent(e)}}e.Touch?e.document.nativeAddEventListener("touchstart",this._activationHandler,!0):e.document.nativeAddEventListener("mousedown",this._activationHandler,!0);if(this.application){var n=this.registeredEventListenersOnTarget_(this.application),r;for(r in n)this._observeTarget_forEventType_(e,r)}}},_stopListeningToWindow:{enumerable:!1,value:function(e){var t=this.registeredEventListenersOnTarget_(this.application),n=this.registeredEventListenersOnTarget_(e),r;for(r in t)this._stopObservingTarget_forEventType_(e,r);for(r in n)this._stopObservingTarget_forEventType_(e,r)}},reset:{enumerable:!1,value:function(){var e,t,n,r;for(e in this.registeredEventListeners){t=this.registeredEventListeners[e];for(n in t.targets)r=t.targets[n],this._stopObservingTarget_forEventType_(r.target,e)}this.registeredEventListeners={},this._claimedPointers={}}},unload:{enumerable:!1,value:function(){this._stopListening()}},methodNameForBubblePhaseOfEventType:{enumerable:!1,value:function(e){return function(t,n){var r=n?t+"+"+n:t;return e[r]||(e[r]="handle"+(n?n.toCapitalized():"")+t.toCapitalized())}}({})},_methodNameForCapturePhaseByEventType_:{value:{}},methodNameForCapturePhaseOfEventType:{enumerable:!1,value:function(e){return function(t,n){var r=n?t+"+"+n:t;return e[r]||(e[r]="capture"+(n?n.toCapitalized():"")+t.toCapitalized())}}({})},_claimedPointers:{enumerable:!1,distinct:!0,value:{}},componentClaimingPointer:{value:function(e){return this._claimedPointers[e]}},isPointerClaimedByComponent:{value:function(e,t){if(!t)throw"Must specify a valid component to see if it claims the specified pointer, '"+t+"' is not valid.";return this._claimedPointers[e]===t}},claimPointer:{value:function(e,t){if(!e&&e!==0)throw"Must specify a valid pointer to claim, '"+e+"' is not valid.";if(!t)throw"Must specify a valid component to claim a pointer, '"+t+"' is not valid.";var n=this._claimedPointers[e];return n===t?!0:n?n.surrenderPointer(e,t)?(this._claimedPointers[e]=t,!0):!1:(this._claimedPointers[e]=t,!0)}},forfeitPointer:{value:function(e,t){if(t!==this._claimedPointers[e])throw"Not allowed to forfeit pointer '"+e+"' claimed by another component";delete this._claimedPointers[e]}},forfeitAllPointers:{value:function(e){var t,n;for(t in this._claimedPointers)n=this._claimedPointers[t],e===n&&delete this._claimedPointers[t]}},_isStoringPointerEvents:{enumerable:!1,value:!1},isStoringPointerEvents:{enumerable:!0,get:function(){return this._isStoringPointerEvents},set:function(e){e===!0?this._isStoringPointerEvents||(this._isStoringPointerEvents=!0,window.Touch&&Object.defineProperty(Touch.prototype,"velocity",{get:function(){return a.pointerMotion(this.identifier).velocity},set:function(){}})):(this._isStoringPointerEvents=!1,this._pointerStorage.memory={},this._isMouseDragging=!1)}},_isStoringMouseEventsWhileDraggingOnly:{enumerable:!1,value:!0},isStoringMouseEventsWhileDraggingOnly:{enumerable:!0,get:function(){return this._isStoringMouseEventsWhileDraggingOnly},set:function(e){this._isStoringMouseEventsWhileDraggingOnly=e===!0?!0:!1}},_isMouseDragging:{enumerable:!1,value:!1},_pointerStorage:{enumerable:!1,value:{memory:{},add:function(e,t){this.memory[e]||(this.memory[e]={data:new Array(32),size:0,pos:0}),this.memory[e].data[this.memory[e].pos]=t,this.memory[e].size<this.memory[e].data.length&&this.memory[e].size++,this.memory[e].pos=(this.memory[e].pos+1)%this.memory[e].data.length},remove:function(e){delete this.memory[e]},clear:function(e){this.memory[e]&&(this.memory[e].size=0)},getMemory:function(e){return this.memory[e]},isStored:function(e){return this.memory[e]&&this.memory[e].size>0},storeEvent:function(e){var t;switch(e.type){case"mousedown":a._isMouseDragging=!0;case"mousemove":a._isStoringMouseEventsWhileDraggingOnly?a._isMouseDragging&&(this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return a.pointerMotion("mouse").velocity},set:function(){}})):(this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return a.pointerMotion("mouse").velocity},set:function(){}}));break;case"mouseup":this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return a.pointerMotion("mouse").velocity},set:function(){}});break;case"touchstart":case"touchmove":for(t=0;t<e.touches.length;t++)this.add(e.touches[t].identifier,{clientX:e.touches[t].clientX,clientY:e.touches[t].clientY,timeStamp:e.timeStamp});break;case"touchend":for(t=0;t<e.changedTouches.length;t++)this.add(e.changedTouches[t].identifier,{clientX:e.changedTouches[t].clientX,clientY:e.changedTouches[t].clientY,timeStamp:e.timeStamp})}},removeEvent:function(e){var t;switch(e.type){case"mouseup":a._isMouseDragging=!1,a._isStoringMouseEventsWhileDraggingOnly&&this.clear("mouse");break;case"touchend":for(t=0;t<e.changedTouches.length;t++)this.remove(e.changedTouches[t].identifier)}}}},_getPointerVelocityData:{enumerable:!1,value:function(e){var t=0,n,r,i,s,o,u,f,l,c,h=0,p=!0,d={x:[],y:[],time:[]};n=a._pointerStorage.getMemory(e),r=n.data.length,i=n.data[(n.pos-1+r)%r],s=o=u=i.timeStamp,f=i.clientX,l=i.clientY;while(p&&o>s-350&&t<n.size)i=n.data[(n.pos-t-1+r)%r],o=i.timeStamp,c=f*f+l*l,c>2&&u-o<=50?(d.x.push(i.clientX),d.y.push(i.clientY),d.time.push(o),u=o,f=i.clientX,l=i.clientY,t++):p=!1;return d}},_fitPointerCurve:{enumerable:!1,value:function(e,t){var n,r,i,s,o,u=1e-4,a=t.length,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U;do{v=0,m=0,g=0,y=0,b=0,w=0,S=0,x=0,T=0,N=0,C=0,k=0,A=0,O=0,M=0,_=0,D=0,P=0,B=0,j=0,F=0,I=0,q=0,R=0;for(d=0;d<a;d++)f=t[d],l=f.t,h=l*l,p=h*l,c=f.v,E=u*(6*(h-l)-p+2),L=u*6*(p-2*h+l),H=u*6*(h-p),U=u*2*p,w+=E*E,k+=L*L,P+=H*H,R+=U*U,v+=c*E,S+=c*L,A+=c*H,B+=c*U,g-=E,T-=L,M-=H,F-=U,m-=E*l,x-=L*l,O-=H*l,j-=U*l,y-=E*h,N-=L*h,_-=H*h,I-=U*h,b-=E*p,C-=L*p,D-=H*p,q-=U*p;u*=2}while(w===0||k===0||P===0||R===0);l=u/w,v*=l,m*=l*3,g*=l,y*=l*3,b*=l,l=u/k,S*=l,x*=l*3,T*=l,N*=l*3,C*=l,l=u/P,A*=l,O*=l*3,M*=l,_*=l*3,D*=l,l=u/R,B*=l,j*=l*3,F*=l,I*=l*3,q*=l,w=e[0],k=e[1],P=e[2],R=e[3],r=(k-P)*3+R-w,i=w+P-2*k,s=k-w,o=w;for(d=0;d<20;d++)l=v+o*g+s*m+i*y+r*b,w+=l,o+=l,r-=l,i+=l,s-=l,l=S+o*T+s*x+i*N+r*C,k+=l,r+=l*3,i-=l+l,s+=l,l=A+o*M+s*O+i*_+r*D,P+=l,r-=l*3,i+=l,l=B+o*F+s*j+i*I+r*q,R+=l,r+=l;e[0]=w,e[1]=k,e[2]=P,e[3]=R}},_pointerBezierValue:{enumerable:!1,value:function(e,t){var n=1-e;return n*n*n*t[0]+3*n*n*e*t[1]+3*n*e*e*t[2]+e*e*e*t[3]}},_calculatePointerVelocity:{enumerable:!1,value:function(e,t){var n=e.length,r=e[0],i=e[0],s,o=0,u;for(u=1;u<n;u++)e[u]<r&&(r=e[u],o=u);s=i-r;if(s){if(n>5){var a,f,l,c=[];for(u=0;u<n;u++)c[u]={v:t[u],t:(e[u]-r)/s};return a=c[o].v,f=c[0].v,l=[a,(a*2+f)/3,(a+f*2)/3,f],this._fitPointerCurve(l,c),(this._pointerBezierValue(.8,l)-this._pointerBezierValue(.6,l))*5e3/s}return n>1?(t[0]-t[o])*1e3/s:0}return 0}},pointerMotion:{value:function(e){if(a._pointerStorage.isStored(e)){var t={};return Object.defineProperties(t,{_data:{enumerable:!1,writable:!0,value:null},_x:{enumerable:!1,writable:!0,value:null},_y:{enumerable:!1,writable:!0,value:null},_speed:{enumerable:!1,writable:!0,value:null},_angle:{enumerable:!1,writable:!0,value:null},x:{get:function(){return this._x===null&&(this._data===null&&(this._data=a._getPointerVelocityData(e)),this._x=a._calculatePointerVelocity(this._data.time,this._data.x)),this._x},set:function(){}},y:{get:function(){return this._y===null&&(this._data===null&&(this._data=a._getPointerVelocityData(e)),this._y=a._calculatePointerVelocity(this._data.time,this._data.y)),this._y},set:function(){}},speed:{get:function(){return this._speed===null&&(this._speed=Math.sqrt(this.x*this.x+this.y*this.y)),this._speed},set:function(){}},angle:{get:function(){return this._angle===null&&(this._angle=Math.atan2(this.y,this.x)),this._angle},set:function(){}}}),{velocity:t}}return undefined}},monitorDOMModificationInEventHandling:{value:!1},domModificationEventHandler:{value:r.create(r,{handleEvent:{value:function(e){throw"DOM Modified"}},captureDOMSubtreeModified:{value:function(e){throw"DOMSubtreeModified"}},captureDOMAttrModified:{value:function(e){throw"DOMAttrModified"}},captureDOMCharacterDataModified:{value:function(e){throw"DOMCharacterDataModified"}}})},handleEvent:{enumerable:!1,value:function(e){this.monitorDOMModificationInEventHandling&&(document.body.addEventListener("DOMSubtreeModified",this.domModificationEventHandler,!0),document.body.addEventListener("DOMAttrModified",this.domModificationEventHandler,!0),document.body.addEventListener("DOMCharacterDataModified",this.domModificationEventHandler,!0));var t,n,r,i,o,u,a,f,v,m,g=e.type,y=e.bubbles,b,w,E,S,x,T;"DOMContentLoaded"===g&&(t=e.target.defaultView,t&&this._windowsAwaitingFinalRegistration[t.uuid]&&(this._finalizeWindowRegistration(t),e.target.removeEventListener("DOMContentLoaded",this,!0))),typeof e.propagationStopped!="boolean"?x=s.fromEvent(e):x=e;if("mousedown"===g||"touchstart"===g)if(x.changedTouches){T=x.changedTouches.length;for(n=0;n<T;n++)this._prepareComponentsForActivationEventTarget(x.changedTouches[n].target)}else this._prepareComponentsForActivationEventTarget(x.target);m=this._eventPathForTarget(x.target),x.target.identifier?E=this.methodNameForCapturePhaseOfEventType(g,x.target.identifier):E=null,x.target.identifier?S=this.methodNameForBubblePhaseOfEventType(g,x.target.identifier):S=null,b=this.methodNameForCapturePhaseOfEventType(g),w=this.methodNameForBubblePhaseOfEventType(g),this.delegate&&typeof this.delegate.willDistributeEvent===d&&this.delegate.willDistributeEvent(x),this._isStoringPointerEvents&&this._pointerStorage.storeEvent(x),x.eventPhase=c;for(n=m.length-1;!x.propagationStopped&&(r=m[n]);n--){x.currentTarget=r,i=this.registeredEventListenersForEventType_onTarget_(g,r);if(!i)continue;a=Object.keys(i);for(o=0;i&&!x.immediatePropagationStopped&&(u=i[a[o]]);o++){if(!u.capture)continue;v=u.listener,E&&typeof v[E]===d?v[E](x):typeof v[b]===d?v[b](x):typeof v.handleEvent===d?v.handleEvent(x):typeof v===d&&v.call(r,x)}}if(!x.propagationStopped){x.eventPhase=h,x.currentTarget=r=x.target,i=this.registeredEventListenersForEventType_onTarget_(g,r);if(i){a=Object.keys(i);for(o=0;i&&!x.immediatePropagationStopped&&(u=i[a[o]]);o++)v=u.listener,u.capture&&(E&&typeof v[E]===d?v[E](x):typeof v[b]===d?v[b](x):typeof v.handleEvent===d?v.handleEvent(x):typeof v===d&&v.call(r,x)),u.bubble&&(S&&typeof v[S]===d?v[S](x):typeof v[w]===d?v[w](x):typeof v.handleEvent===d?v.handleEvent(x):typeof v===d&&v.call(r,x))}}x.eventPhase=p;for(n=0;y&&!x.propagationStopped&&(r=m[n]);n++){x.currentTarget=r,i=this.registeredEventListenersForEventType_onTarget_(g,r);if(!i)continue;a=Object.keys(i);for(o=0;i&&!x.immediatePropagationStopped&&(u=i[a[o]]);o++){if(!u.bubble)continue;v=u.listener,S&&typeof v[S]===d?v[S](x):typeof v[w]===d?v[w](x):typeof v.handleEvent===d?v.handleEvent(x):typeof v===d&&v.call(r,x)}}x.eventPhase=l,x.currentTarget=null,this._isStoringPointerEvents&&this._pointerStorage.removeEvent(e),this.monitorDOMModificationInEventHandling&&(document.body.removeEventListener("DOMSubtreeModified",this.domModificationEventHandler,!0),document.body.removeEventListener("DOMAttrModified",this.domModificationEventHandler,!0),document.body.removeEventListener("DOMCharacterDataModified",this.domModificationEventHandler,!0))}},_prepareComponentsForActivationEventTarget:{value:function(e){var t=e,n,r=t&&t.defaultView?t.defaultView:window,i=r.document?r.document:document,s;do{if(t){s=this.eventHandlerForElement(t);if(s)if(!s._preparedForActivationEvents)s._prepareForActivationEvents(),s._preparedForActivationEvents=!0;else if(s._preparedForActivationEvents)return}n=t;switch(t){case r:t=null;break;case i:t=r;break;case i.documentElement:t=i;break;default:t=t.parentNode}}while(t&&n!==t)}},_eventPathForTarget:{enumerable:!1,value:function(e){if(!e)return[];var t=e,n=t&&t.defaultView?t.defaultView:window,r=n.document?n.document:document,i=this.application,s,o=[];do{t!==e&&o.push(t),s=t;switch(t){case i:t=t.parentApplication,t&&(i=t);break;case n:t=i;break;case r:t=n;break;case r.documentElement:t=r;break;default:t=t.parentProperty?t[t.parentProperty]:t.parentNode,t||(t=i)}}while(t&&s!==t);return o}},_elementEventHandlerByUUID:{enumerable:!1,value:{}},registerEventHandlerForElement:{enumerable:!1,value:function(e,t){var n=this.eventHandlerForElement(t);n&&this.unregisterEventHandlerForElement(t),this._elementEventHandlerByUUID[t.eventHandlerUUID=e.uuid]=e}},unregisterEventHandlerForElement:{enumerable:!1,value:function(e){delete this._elementEventHandlerByUUID[e.eventHandlerUUID],delete e.eventHandlerUUID}},eventHandlerForElement:{enumerable:!1,value:function(e){return this._elementEventHandlerByUUID[e.eventHandlerUUID]}}})}}})