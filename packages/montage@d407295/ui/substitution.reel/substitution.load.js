montageDefine("d407295","ui/substitution.reel/substitution",{dependencies:["montage","ui/component","ui/slot.reel","core/promise","core/logger"],factory:function(e,t){var n=(e("montage").Montage,e("ui/component").Component,e("ui/slot.reel").Slot),i=e("core/promise").Promise;e("core/logger").logger("substitution"),t.Substitution=n.specialize({hasTemplate:{enumerable:!1,value:!1},constructor:{value:function(){this._switchElements=Object.create(null),this._switchComponentTreeLoaded=Object.create(null)}},_allChildComponents:{value:null},deserializedFromTemplate:{value:function(){this._allChildComponents=this.childComponents.slice(0),this.switchValue&&this._loadSwitchComponentTree(this.switchValue)}},_switchElements:{value:null},_switchComponentTreeLoaded:{value:null},addSwitchElement:{value:function(e,t){if(t.parentNode)throw Error("Can't handle elements inside the DOM.");this._switchElements[e]=t,this._findFringeComponents(t,this._allChildComponents)}},_findFringeComponents:{value:function(e,t){var n;if(t=t||[],e.component)t.push(e.component);else{n=e.children;for(var i,r=0;i=n[r];r++)this._findFringeComponents(i,t)}return t}},_drawnSwitchValue:{value:null},_switchValue:{value:null},switchValue:{get:function(){return this._switchValue},set:function(e){this._switchValue===e||this._isSwitchingContent||(this._switchValue=e,this._firstDraw||this.isDeserializing||this._loadContent(e))}},enterDocument:{value:function(e){var t;if(n.enterDocument.apply(this,arguments),e){t=this.getDomArgumentNames();for(var i,r=0;i=t[r];r++)this._switchElements[i]=this.extractDomArgument(i);this._loadContent(this.switchValue),this._updateComponentDom()}}},_loadContent:{value:function(e){this.content=e===this._drawnSwitchValue?this.element.children[0]:this._switchElements[e]||null,this._switchComponentTreeLoaded[e]||this._loadSwitchComponentTree(e)}},contentDidChange:{value:function(e,t){this._drawnSwitchValue&&(this._switchElements[this._drawnSwitchValue]=t),this._drawnSwitchValue=this._switchValue}},_loadSwitchComponentTree:{value:function(e){var t,n,r=this,a=this._allChildComponents,o=this._switchElements[e],s=this.element,l=this.canDrawGate,u=[];o||(o=this._getDomArgument(s,e));for(var c=0;a.length>c;c++){for(t=a[c],n=t.element;n!==o&&n!==s&&n.parentNode;)n=n.parentNode;n===o&&u.push(t.loadComponentTree())}u.length>0?(l.setField(e+"ComponentTreeLoaded",!1),i.all(u).then(function(){r._switchComponentTreeLoaded[e]=!0,l.setField(e+"ComponentTreeLoaded",!0),r._canDraw=!0,r.needsDraw=!0}).done()):(this._switchComponentTreeLoaded[e]=!0,this.needsDraw=!0)}},shouldLoadComponentTree:{value:!1},transition:{value:null}})}});