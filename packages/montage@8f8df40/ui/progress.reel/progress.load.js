montageDefine("8f8df40","ui/progress.reel/progress",{dependencies:["montage","ui/component","ui/native/progress.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/progress.reel").Progress;t.Progress=r.create(s,{hasTemplate:{value:!0},_barElement:{enumerable:!1,value:null},_value:{enumerable:!1,value:null},value:{get:function(){return this._value},set:function(e){e!==this._value&&(this._value=String.isString(e)?parseInt(e,10):e,this._max&&this._value>this._max&&(this._value=this._max),this._value<0&&(this._value=0),this.needsDraw=!0)}},_max:{enumerable:!1,value:null},max:{get:function(){return this._max},set:function(e){e!==this._max&&(this._max=String.isString(e)?parseInt(e,10):e,this._max<=0&&(this._max=1),this.needsDraw=!0)}},didCreate:{value:function(){s.didCreate&&s.didCreate.call(this)}},draw:{enumerable:!1,value:function(){var e=this._value/this._max;e=Math.min(Math.max(e,0),1);var t=e*100;this._barElement.style.width=t+"%"}}})}})