montageDefine("605491b","ui/anchor.reel/anchor",{dependencies:["montage","ui/component","ui/native/anchor.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/anchor.reel").Anchor;t.Anchor=r.create(s,{hasTemplate:{value:!1},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-anchor")}}})}})