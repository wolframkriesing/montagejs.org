montageDefine("8f8df40","ui/image.reel/image",{dependencies:["montage","ui/component","ui/native/image.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/image.reel").Image;t.Image=r.create(s,{willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-image")}}})}})