montageDefine("605491b","ui/video-player.reel/video-player",{dependencies:["montage","ui/component","core/logger","core/event/action-event-listener","ui/controller/media-controller"],factory:function(e,t,n){"use strict";var r=e("montage").Montage,i=e("ui/component").Component,s=e("core/logger").logger("video-player"),o=e("core/event/action-event-listener").ActionEventListener,u=e("ui/controller/media-controller").MediaController,a=t.VideoPlayer=r.create(i,{CONTROL_SHOW_TIME:{enumerable:!0,value:5e3,writable:!1},playButton:{value:null,enumerable:!1},repeatButton:{value:null,enumerable:!1},volumeLevel:{value:null,enumerable:!1},controls:{value:null,enumerable:!1},fullScreenPanel:{value:null,enumerable:!1},fullScreenButton:{value:null,enumerable:!1},positionText:{value:null,enumerable:!1},durationText:{value:null,enumerable:!1},slider:{value:null,enumerable:!1},controller:{value:null,enumerable:!1},src:{value:null},autoHide:{value:!0},supportsFullScreen:{value:!0},_isFullScreen:{value:!1},templateDidLoad:{value:function(){s.isDebug&&s.debug("MediaController:templateDidLoad"),Object.defineBinding(this.positionText,"value",{boundObject:this.controller,boundObjectPropertyPath:"position",boundValueMutator:this._prettyTime}),Object.defineBinding(this.durationText,"value",{boundObject:this.controller,boundObjectPropertyPath:"duration",boundValueMutator:this._prettyTime}),Object.defineBinding(this.slider,"maxValue",{boundObject:this.controller,boundObjectPropertyPath:"duration",boundValueMutator:this._roundTime,oneWay:!1})}},_prettyTime:{value:function(e){var t,n,r;return e=parseInt(e,10),isNaN(e)||e<0?"":(t=e%60,n=Math.floor(e/60)%60,r=Math.floor(e/3600),(r>0?r+":":"")+(n<10?"0"+n:n)+":"+(t<10?"0"+t:t))}},_roundTime:{value:function(e){return e<0?0:Math.floor(e)}},handleMediaStateChange:{value:function(){this.needsDraw=!0}},_showControls:{value:!0,enumerable:!1},_hideControlsId:{value:null,enumerable:!1},handleMouseup:{value:function(){this.showControlsForInterval()}},handleTouchend:{value:function(){this.showControlsForInterval()}},showControlsForInterval:{value:function(){this._showControls=!0,this.needsDraw=!0;var e=this,t=function(){e._showControls=!1,e._hideControlsId=null,e.needsDraw=!0};this._hideControlsId&&window.clearTimeout(this._hideControlsId),this._hideControlsId=window.setTimeout(t,this.CONTROL_SHOW_TIME)}},toggleFullScreen:{value:function(){this.supportsFullScreen&&(this._isFullScreen=!this._isFullScreen,this.needsDraw=!0)}},_installMediaEventListeners:{value:function(){this.controller.addEventListener("mediaStateChange",this,!1)}},_installUserActionDetector:{value:function(){window.touch&&this.autoHide?this.element.addEventListener("touchstart",this,!1):this.autoHide&&this.element.addEventListener("mouseup",this,!1)}},prepareForDraw:{value:function(){this._installUserActionDetector(),this.controller._installControlEventHandlers(),this._installMediaEventListeners(),this.autoHide||(this.element.style.paddingBottom="50px")}},draw:{value:function(){var e;this.controller.status===this.controller.EMPTY?this.controller.loadMedia():(this.controller.status===this.controller.PLAYING?this.playButton.classList.contains("playing")||this.playButton.classList.add("playing"):this.playButton.classList.contains("playing")&&this.playButton.classList.remove("playing"),this.volumeLevel&&(e=Math.floor(this.controller.volume),this.volumeLevel.style.width=e+"%"),this.controller.repeat?this.repeatButton.classList.contains("loop")||this.repeatButton.classList.add("loop"):this.repeatButton.classList.contains("loop")&&this.repeatButton.classList.remove("loop"),this._showControls?(this.controls.classList.remove("hide-controls"),this.controls.classList.add("show-controls")):(this.controls.classList.remove("show-controls"),this.controls.classList.add("hide-controls")),this.supportsFullScreen?(this.fullScreenPanel.classList.add("support-fullscreen"),this.fullScreenPanel.classList.remove("hide-fullscreen"),this._isFullScreen?(this.fullScreenButton.classList.add("exit-fullscreen"),this.fullScreenButton.classList.remove("enter-fullscreen"),this.element.classList.add("fullscreen")):(this.fullScreenButton.classList.add("enter-fullscreen"),this.fullScreenButton.classList.remove("exit-fullscreen"),this.element.classList.remove("fullscreen"))):(this.fullScreenPanel.classList.remove("support-fullscreen"),this.fullScreenPanel.classList.add("hide-fullscreen"),this.element.classList.remove("fullscreen")))}}})}})