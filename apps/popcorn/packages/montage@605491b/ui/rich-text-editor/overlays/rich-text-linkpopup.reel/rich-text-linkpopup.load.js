montageDefine("605491b","ui/rich-text-editor/overlays/rich-text-linkpopup.reel/rich-text-linkpopup",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component;t.RichTextLinkPopup=r.create(i,{_isActive:{enumerable:!1,value:!1},_editor:{enumerable:!1,value:null},target:{enumerable:!1,value:null},_needsReset:{enumerable:!1,value:!1},initWithEditor:{value:function(e){this._editor=e}},editorMouseUp:{value:function(e){var t;if(this._editor.activeOverlay!=this&&e.target.nodeName=="IMG"){t=e.target;while(t&&t!=this._element){if(t.nodeName=="A")return t!=this.target&&(this.target=t,this._needsReset=!0,this._isActive?this.needsDraw=!0:this._editor.showOverlay(this)),!0;t=t.parentElement}}}},editorTouchEnd:{value:function(e){this.editorMouseUp(e)}},editorSelectionDidChange:{value:function(e){var t;if(e&&e.collapsed){t=e.commonAncestorContainer;while(t&&t!=this._element){if(t.nodeName=="A")return t!=this.target&&(this.target=t,this._needsReset=!0,this._isActive?this.needsDraw=!0:this._editor.showOverlay(this)),!0;t=t.parentElement}}return this._editor.activeOverlay==this&&this._editor.hideOverlay(),this.target=null,!1}},didBecomeActive:{value:function(){this._isActive=!0,window.addEventListener("resize",this,!1)}},didBecomeInactive:{value:function(){this._isActive=!1,window.removeEventListener("resize",this,!1),this.target=null,this._needsReset=!1}},prepareForDraw:{enumerable:!1,value:function(){this._popupExtraWidth=this.element.offsetWidth}},draw:{enumerable:!1,value:function(){var e=this.element,t=this.target,n=this._editor.innerElement;if(this._needsReset){var r,i,s=n.offsetHeight,o=n.offsetWidth,u=n.scrollTop,a=n.scrollLeft,f=t.offsetWidth,l=t.offsetHeight,c,h,p,d,v,m,g="",y=function(e){i=e.offsetTop,r=e.offsetLeft;while((e=e.offsetParent)&&e!=n)i+=e.offsetTop,r+=e.offsetLeft};y(t),c=r,h=i,h>60&&h-u+l+50>s?g="bottom: "+(s-h+5)+"px;":g="top: "+(h+l+5)+"px;",p=a,v=a+o,d=v-c,m=c+f-p,d>m?d<150?(g+=" left: "+(p+5)+"px;",g+=" max-width: "+(o-10-this._popupExtraWidth)+"px;"):(g+=" left: "+(p+c)+"px;",g+=" max-width: "+(d-5-this._popupExtraWidth)+"px;"):m<150?(g+=" right: "+(p+5)+"px;",g+=" max-width: "+(o-10-this._popupExtraWidth)+"px;"):(g+=" right: "+(v-(p+c+f+1))+"px;",g+=" max-width: "+(m-this._popupExtraWidth)+"px;"),e.setAttribute("style",g),this.link.href=t.href,this.link.textContent=t.href,this._needsReset=!1}}},handleResize:{enumerable:!1,value:function(){this._needsReset=!0,this.needsDraw=!0}}})}})