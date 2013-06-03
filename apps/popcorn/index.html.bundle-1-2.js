montageDefine("605491b","ui/repetition.reel/repetition",{dependencies:["montage","ui/component","ui/template","core/logger","core/gate","core/change-notification"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/template").Template,o=e("core/logger").logger("repetition"),u=e("core/gate").Gate,a=e("core/change-notification").ChangeNotification,f=e("core/change-notification").PropertyChangeNotification,l=r.create(Object.prototype,{_repetition:{value:null},_fakeIndex:{value:null},_unusedIndexes:{value:null},initWithRepetition:{value:function(e){return this._repetition=e,this._fakeIndex=[],this._unusedIndexes=[],this}},automaticallyDispatchPropertyChangeListener:{value:function(){return!1}},undefinedGet:{value:function(e){if(this._repetition.objects)return this._repetition.objects[this._fakeIndex.indexOf(e)]}},0:{set:function(){throw'You cannot use a two-way binding on the "objectAtCurrentIteration" or "current" property.'},get:function(){if(this._repetition.objects)return this._repetition.objects[this._fakeIndex.indexOf("0")]}},addFakeObjectAtPosition:{value:function(e){var t;return this._unusedIndexes.length>0?t=this._unusedIndexes.pop():t=String(this._fakeIndex.length),this._fakeIndex.splice(e,0,t),t}},resetFakeObjects:{value:function(){var e=this._repetition.objects;this._fakeIndex.length=0;if(e)for(var t=0,n=e.length;t<n;t++)this._fakeIndex[t]=String(t)}},removeFakeObjectAtPosition:{value:function(e){var t;return this._unusedIndexes.unshift(this._fakeIndex.splice(e,1)[0]),this._unusedIndexes[0]}},_dispatchFakePropertyChange:{value:function(e,t){var n,r;n=a.getPropertyChangeDescriptor(this,e),n&&(r=Object.create(f),r.target=this,r.propertyPath=e,r.minus=t,r.plus=this.undefinedGet(e),t!==r.plus&&n.handleChange(r))}}}),c=t.Repetition=r.create(i,{hasTemplate:{value:!1},didCreate:{value:function(){this.addPropertyChangeListener("objects",this),this._fakeObjects=Object.create(l).initWithRepetition(this)}},clonesChildComponents:{value:!0},_emptyFunction:{value:function(){}},_updateItems:{value:function(e,t,n){var r=this._fakeObjects,i,s=e?e.length:0,o=t?t.length:0,u,a,f;u=Math.max(s,o),a=Math.min(s,o),f=o-s;for(var l=0;l<a;l++)r._dispatchFakePropertyChange(r._fakeIndex[n+l],e[n+l]);if(f>0){this._expectedChildComponentsCount+=(this._iterationChildComponentsCount||1)*f,this.canDrawGate.setField("iterationLoaded",!1);for(;l<u;l++)r.addFakeObjectAtPosition(n+l),this._addItem({index:n+l,insertionIndex:n+l})}else if(f<0){var c=n+a;for(;l<u;l++)i=r.removeFakeObjectAtPosition(c),r._dispatchFakePropertyChange(i,e[l]),this._deleteItem(c)}}},handleChange:{enumerable:!1,value:function(e){"objects"===e.currentPropertyPath&&this._isComponentExpanded&&this._updateItems(e.minus,e.plus,e.index||0)}},_fakeObjects:{value:null},_hasBeenDeserialized:{value:!1,enumerable:!1},_nextDeserializedItemIx:{enumerable:!1,value:0,distinct:!0},init:{enumerable:!1,value:function(){return this._items=[],this._itemsToAppend=[],this._nextDeserializedItemIx=0,this._itemsToRemove=[],this._deletedItems=[],this}},_contentController:{value:null},contentController:{get:function(){return this._contentController},set:function(e){if(this._contentController===e)return;this._contentController&&(Object.deleteBinding(this,"objects"),Object.deleteBinding(this,"selectedIndexes")),this._contentController=e;if(this._contentController){this._bindingDescriptors&&Object.deleteBinding(this,"objects");var t,n;t={boundObject:this._contentController,boundObjectPropertyPath:"organizedObjects",oneway:!0},n={boundObject:this._contentController,boundObjectPropertyPath:"selectedIndexes"},this._hasBeenDeserialized?(Object.defineBinding(this,"objects",t),Object.defineBinding(this,"selectedIndexes",n)):(this._controllerBindingsToInstall||(this._controllerBindingsToInstall={}),this._controllerBindingsToInstall.objects=t,this._controllerBindingsToInstall.selectedIndexes=n)}}},_objects:{enumerable:!1,value:null},_mappedObjects:{enumerable:!1,value:null},objects:{dependencies:["indexMap","indexMapEnabled"],enumerable:!1,serializable:!0,get:function(){return!this.indexMap||!this.indexMapEnabled?this._objects:(this._objects&&!this._mappedObjects&&(this._mappedObjects=this.indexMap.map(function(e){return isNaN(e)?undefined:this._objects.getProperty(e)},this)),this._mappedObjects)},set:function(e){o.isDebug&&o.debug(this," set objects:",e?e.length:null,e,"same objects?",e===this._objects),this._mappedObjects=null,this._objects=e,this.contentController||(this.selectedIndexes=null)}},_isSelectionEnabled:{enumerable:!1,value:!1},isSelectionEnabled:{get:function(){return this._isSelectionEnabled},set:function(e){if(e===this._isSelectionEnabled)return;this._isSelectionEnabled=e,this._isComponentExpanded&&this._refreshSelectionTracking()}},_childLoadedCount:{enumerable:!1,value:0},_iterationChildComponentsCount:{enumerable:!1,value:null},_expectedChildComponentsCount:{enumerable:!1,value:null},_indexMap:{enumerable:!1,value:null},indexMap:{get:function(){return this._indexMap}},_indexMapEnabled:{enumerable:!1,value:!1},indexMapEnabled:{get:function(){return this._indexMapEnabled},set:function(e){if(e===this._indexMapEnabled)return;!this._indexMap&&e&&(this._indexMap=[]),this._indexMapEnabled=e,this.refreshIndexMap()}},_drawnIndexMap:{enumerable:!1,value:null},drawnIndexMap:{get:function(){return this._drawnIndexMap}},mapIndexToIndex:{value:function(e,t,n){this._indexMap||(this._indexMap=[]);if(t===this._indexMap[e]||!isNaN(t)&&this._indexMap.indexOf(t)>-1)return;this._indexMap[e]=t,this._indexMapAffectedIndexes[e]=!0,this._indexMapChanged=!0,(n||typeof n=="undefined")&&this.refreshIndexMap()}},clearIndexMap:{value:function(){this._indexMap.clear()}},refreshIndexMap:{value:function(){var e=this._mappedObjects;this._mappedObjects=null,this._isComponentExpanded&&(this._updateItems(e,this.objects,0),this.needsDraw=!0)}},_indexMapChanged:{enumerable:!1,value:!1},_indexMapAffectedIndexes:{enumerable:!1,distinct:!0,value:{}},_dirtyIndexes:{enumerable:!1,distinct:!0,value:{}},_items:{enumerable:!1,value:[],distinct:!0},_itemsToAppend:{enumerable:!1,value:[],distinct:!0},_itemsToRemove:{enumerable:!1,value:[],distinct:!0},_deletedItems:{enumerable:!1,value:[],distinct:!0},_updatingItems:{value:!1},_refreshItems:{value:function(){if(this._updatingItems)return;this._updatingItems=!0;var e=this._objects?this._objects.length:0,t=this._items.length+this._itemsToAppend.length,n,r,i=this._addItem,s=this._deleteItem;this._objects&&this.indexMap&&this._indexMapEnabled&&(e=this.indexMap.length),n=e-t,0!==n&&(this.needsDraw=!0);if(n>0){this._expectedChildComponentsCount+=(this._iterationChildComponentsCount||1)*n,this.canDrawGate.setField("iterationLoaded",!1);for(r=0;r<n;r++)i.call(this)}else if(n<0)for(r=n;r<0;r++)s.call(this);this._updatingItems=!1}},_addItems:{value:function(e,t){var n=e.length;if(this._updatingItems)return;this._updatingItems=!0,this._expectedChildComponentsCount+=(this._iterationChildComponentsCount||1)*n,this.canDrawGate.setField("iterationLoaded",!1);for(var r=0;r<n;r++)this._addItem({index:t+r,insertionIndex:t+r});this._updatingItems=!1}},_addItem:{value:function(e){var t=this,n=this._items,r,i,s,o,u=this._itemsToAppend,a,f,l,c=t.canDrawGate,h;e||(e={}),a=u.push(e)-1,o=n.length+a;if("index"in e)for(h=0;h<a;h++){var p=u[h];p.index>=e.index&&p.index++}t._canDraw=!1,s=this._iterationChildComponentsCount,this._iterationTemplate.instantiateWithComponent(this,function(){if(s===0)++t._childLoadedCount===t._expectedChildComponentsCount&&(c.setField("iterationLoaded",!0),t.needsDraw=!0);else{r=t.childComponents,f=o*t._iterationChildComponentsCount,l=f+s;for(h=f;h<l;h++)i=r[h],i.needsDraw=!0,i.loadComponentTree(function(){++t._childLoadedCount===t._expectedChildComponentsCount&&(c.setField("iterationLoaded",!0),t.needsDraw=!0)})}})}},_deleteItem:{value:function(e){var t,n=e,r,i=this.childComponents,s=this._iterationChildComponentsCount,o=this._itemsToAppend,u=o.length,a=!1,f=0;for(var l=0;l<u;l++){var c=o[l];c.index>e?c.index--:c.index<e?f++:a=c.removed=!0}if(!a){if(!(this._items.length>0))throw"BUG: _deleteItem was called on the repetition but no elements exist to be removed";n=e-f,t=this._items.splice(n,1)[0],t.removalIndex=n,this._itemsToRemove.push(t),this._removeIterationChildComponents(t.childComponentsIndex)}this.needsDraw=!0}},_removeIterationChildComponents:{value:function(e){var t=this.childComponents,n=this._iterationChildComponentsCount,r,i,s;if(n>0){r=t.splice(e,n),this._childLoadedCount-=n,this._expectedChildComponentsCount-=n;for(var o=0,u=r.length;o<u;o++)r[o].cleanupDeletedComponentTree(!0);i=this._items;for(var o=0;s=i[o];o++)s.childComponentsIndex>e&&(s.childComponentsIndex-=n);i=this._itemsToAppend;for(var o=0;s=i[o];o++)s.childComponentsIndex>e&&(s.childComponentsIndex-=n)}else this._childLoadedCount--,this._expectedChildComponentsCount--}},_iterationTemplate:{enumerable:!1,value:null},expandComponent:{value:function(e){this._updatingItems||this._setupIterationTemplate(),this._isComponentExpanded=!0,e&&e()}},templateDidDeserializeObject:{value:null},_setupIterationTemplate:{value:function(){var e=this._element,t=this.childComponents,n;this.setupIterationSerialization(),this.setupIterationDeserialization(),this._iterationChildComponentsCount=t.length,this._iterationChildCount=e.childNodes.length,this._iterationChildElementCount=e.children.length,this._iterationChildComponentsCount>0?(this._templateId=t[0]._suuid||t[0].uuid,this._iterationTemplate=s.templateWithComponent(this,this._templateDelegate)):(this._iterationTemplate=s.create(),this._iterationTemplate.delegate=this._templateDelegate,this._iterationTemplate.initWithComponent(this)),this._iterationTemplate.optimize(),this._removeOriginalContent=!0,o.isDebug&&o.debug(this._iterationTemplate.exportToString()),this.removeIterationSerialization();while(n=t.shift())n.needsDraw=!1;this.objects&&this.objects.length!==this._items.length&&this._updateItems([],this.objects,0)}},_templateDelegate:{value:{serializeObjectProperties:function(e,t){e.set("ownerComponent",t.ownerComponent,"reference")}}},templateDidLoad:{value:function(){var e=this._deserializedItem,t;if(e){t=e.element.childNodes,e.fragment=document.createDocumentFragment(),e.childComponentsIndex=this.childComponents.length-this._iterationChildComponentsCount;while(t.length>0)e.fragment.appendChild(t[0]);delete e.element}}},contentWillChange:{value:function(e){this._updatingItems=!0,this.reset()}},contentDidChange:{value:function(){this._updatingItems=!1,this._setupIterationTemplate()}},reset:{value:function(){this._items.clear(),this._itemsToAppend.clear(),this._nextDeserializedItemIx=0,this._itemsToRemove.clear(),this._deletedItems.clear()}},deserializedFromTemplate:{value:function(){this._isComponentExpanded&&this.setupIterationSerialization();var e=this._controllerBindingsToInstall,t;if(e){for(t in e)Object.defineBinding(this,t,e[t]);delete this._controllerBindingsToInstall}this._hasBeenDeserialized=!0}},canDraw:{value:function(){var e=this.canDrawGate.value,t,n,r=this.childComponents.length;if(e)for(n=0;n<r;n++)if(!this.childComponents[n].canDraw()){e=!1;break}return e}},prepareForDraw:{value:function(){this._refreshSelectionTracking()}},_selectedIndexesToDeselectOnDraw:{value:null},_selectedIndexes:{value:null},selectedIndexes:{get:function(){return this._selectedIndexes},set:function(e){this._selectedIndexes=e,this._markIndexesDirty(e),this._isComponentExpanded&&(this.needsDraw=!0)}},_activeIndexes:{value:null},activeIndexes:{get:function(){return this._activeIndexes},set:function(e){this._activeIndexes=e,this._markIndexesDirty(e),this._isComponentExpanded&&(this.needsDraw=!0)}},_markIndexesDirty:{value:function(e){if(e)for(var t=0,n=e.length;t<n;t++)this._dirtyIndexes[this._indexMap?this._indexMap.indexOf(e[t]):e[t]]=!0}},_refreshSelectionTracking:{value:function(){this.isSelectionEnabled?window.Touch?this.element.addEventListener("touchstart",this,!0):this.element.addEventListener("mousedown",this,!0):window.Touch?this.element.removeEventListener("touchstart",this,!0):this.element.removeEventListener("mousedown",this,!0)}},_itemIndexOfElement:{value:function(e){var t=e,n=null,r,i;if(t===this.element)return n;while(t&&t.parentNode!==this.element)t=t.parentNode;return t?(i=this.element.ownerDocument.createRange(),i.setStart(this.element,0),i.setEndAfter(t),r=this._iterationChildCount>1?1:0,n=(i.endOffset+r)/this._iterationChildCount-1,this.indexMap?this.indexMap[n]:n):null}},captureTouchstart:{value:function(e){if(this._selectionPointer||0===this._selectionPointer)return;this._observeSelectionPointer(e.changedTouches[0].identifier);var t=this._itemIndexOfElement(e.target);null!==t?this.activeIndexes=[t]:this._ignoreSelectionPointer()}},handleTouchend:{value:function(e){var t=0,n;while(t<e.changedTouches.length&&e.changedTouches[t].identifier!==this._selectionPointer)t++;t<e.changedTouches.length&&(this.eventManager.isPointerClaimedByComponent(this._selectionPointer,this)&&(n=this._itemIndexOfElement(e.target),null!==n&&(this.selectedIndexes=[n])),this._ignoreSelectionPointer())}},handleTouchcancel:{value:function(){this._ignoreSelectionPointer()}},captureMousedown:{value:function(e){this._observeSelectionPointer("mouse");var t=this._itemIndexOfElement(e.target);null!==t?this.activeIndexes=[t]:this._ignoreSelectionPointer()}},handleMouseup:{value:function(e){var t=this._itemIndexOfElement(e.target);null!==t&&(this.selectedIndexes=[t]),this._ignoreSelectionPointer()}},surrenderPointer:{value:function(e,t){return this._ignoreSelectionPointer(),!0}},_selectionPointer:{value:null},_observeSelectionPointer:{value:function(e){this._selectionPointer=e,this.eventManager.claimPointer(e,this),window.Touch?(document.addEventListener("touchend",this,!1),document.addEventListener("touchcancel",this,!1)):document.addEventListener("mouseup",this,!1)}},_ignoreSelectionPointer:{value:function(){this.eventManager.forfeitPointer(this._selectionPointer,this),this._selectionPointer=null,this.activeIndexes=[],window.Touch?(document.removeEventListener("touchend",this,!1),document.removeEventListener("touchcancel",this,!1)):document.removeEventListener("mouseup",this,!1)}},_iterationChildCount:{value:null},_iterationChildElementCount:{value:null},draw:{value:function(){var e,t,n,r,i=this._items.length,s,o=this.element,u=o.ownerDocument,a,f,l,c,h,p,d,v,m=this._indexMapChanged,g,y,b=this._iterationChildCount,w;if(!this.canDrawGate.value)return;this._removeOriginalContent&&(this._removeOriginalContent=!1,o.innerHTML="");if(1===this._iterationChildElementCount){l=o.children;for(e=0;e<l.length;e++)d=l.item(e),d&&this._dirtyIndexes[e]&&(v=d.classList,v.remove("active"),v.remove("selected"),v.remove("no-transition"),m&&this._indexMapAffectedIndexes[e]&&(v.add("no-transition"),this._dirtyIndexes[e]=!1))}m&&(this._indexMapAffectedIndexes.clear(),this._indexMapChanged=!1,this.needsDraw=!0);var E;if(this._itemsToRemove.length>0){f=document.createRange();for(e=0;t=this._itemsToRemove[e];e++)E=t.removalIndex,f.setStart(o,E*b),f.setEnd(o,E*b+b),f.extractContents();this._itemsToRemove.clear()}var S;if(this._itemsToAppend.length>0){for(e=0;t=this._itemsToAppend[e];e++){if(t.removed){this._removeIterationChildComponents(t.childComponentsIndex);continue}n=t.fragment,S=t.insertionIndex,delete t.fragment,delete t.insertionIndex,delete t.index,isNaN(S)?o.appendChild(n):o.insertBefore(n,o.childNodes[S*this._iterationChildCount]),this._items.splice(S,0,t)}i=this._items.length,this._itemsToAppend.clear(),this._nextDeserializedItemIx=0}if(null!==this.selectedIndexes&&this.selectedIndexes.length>0&&1===this._iterationChildElementCount){l=o.children,a=this.selectedIndexes.length,c=Math.min(a,l.length);for(e=0;e<c;e++)y=this.indexMap?this.indexMap.indexOf(this.selectedIndexes[e]):this.selectedIndexes[e],d=l.item(y),d&&(d.classList.add("selected"),this._dirtyIndexes[y]=!0)}if(null!==this._activeIndexes&&this._activeIndexes.length>0&&1===this._iterationChildElementCount){l=this.element.children,h=this._activeIndexes.length,p=Math.min(h,l.length);for(e=0;e<p;e++)g=this.indexMap?this.indexMap.indexOf(this._activeIndexes[e]):this._activeIndexes[e],d=l.item(g),d&&(d.classList.add("active"),this._dirtyIndexes[g]=!0)}this._drawnIndexMap=this._indexMap?this.indexMap.slice(0):null}},setupIterationSerialization:{value:function(){r.defineProperty(this,"serializeSelf",{value:this.serializeIteration})}},setupIterationDeserialization:{value:function(){this.deserializeProperties=this.deserializeIteration}},removeIterationSerialization:{value:function(){delete this.serializeSelf}},propertyChangeBindingListener:{value:function(e,t,n,r,i,s,o){var u=o,a=e,f,l,c,h,p,d;if(o&&o.boundObjectPropertyPath.match(/objectAtCurrentIteration/)){if(!this._deserializedItem)return null;l=this._fakeObjects._fakeIndex[this._deserializedItem.index],u={},c=Object.keys(o),h=c.length;for(var v=0;v<h;v++)p=c[v],u[p]=o[p];d=o.boundObjectPropertyPath.replace(/objectAtCurrentIteration/,"_fakeObjects."+l),u.boundObjectPropertyPath=d,a=e.replace(/objectAtCurrentIteration/,"_fakeObjects."+l)}else if(o&&o.boundObjectPropertyPath.match(/selectionAtCurrentIteration/)){if(!this._deserializedItem)return null;l=this._fakeObjects._fakeIndex[this._deserializedItem.index],u={},c=Object.keys(o),h=c.length;for(var v=0;v<h;v++)p=c[v],u[p]=o[p];d=o.boundObjectPropertyPath.replace(/selectionAtCurrentIteration/,"contentController.selections."+l),u.boundObjectPropertyPath=d,a=e.replace(/selectionAtCurrentIteration/,"contentController.selections."+l)}return u.boundObject===this?Object.prototype.propertyChangeBindingListener.call(this,a,t,n,r,i,s,u):u.boundObject.propertyChangeBindingListener(a,t,n,r,i,s,u)}},serializeIteration:{value:function(e){e.setProperty("element",this.element);var t=this.childComponents,n=e.addObject,r,i=t.length;for(r=0;r<i;r++)n.call(e,t[r]);e.setProperty("_isComponentExpanded",!0)}},deserializeIteration:{value:function(e){var t=this._itemsToAppend[this._nextDeserializedItemIx++];t?(this._deserializedItem=t,t.element=e.get("element"),this.eventManager.registerEventHandlerForElement(this,t.element),o.debug&&o.debug(this._montage_metadata.objectName+":deserializeIteration","childNodes: ",t.element)):this._deserializedItem=null}}})}}),montageDefine("605491b","ui/scroll-bars.reel/scroll-bars",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=t.ScrollBars=r.create(i,{_verticalScroll:{value:0},_horizontalScroll:{value:0},_verticalLength:{value:0},_horizontalLength:{value:0},verticalScroll:{get:function(){return this._verticalScroll},set:function(e){this._verticalScroll=e,this.needsDraw=!0}},horizontalScroll:{get:function(){return this._horizontalScroll},set:function(e){this._horizontalScroll=e,this.needsDraw=!0}},verticalLength:{get:function(){return this._verticalLength},set:function(e){this._verticalLength=e,this.needsDraw=!0}},horizontalLength:{get:function(){return this._horizontalLength},set:function(e){this._horizontalLength=e,this.needsDraw=!0}},_opacity:{value:0},opacity:{get:function(){return this._opacity},set:function(e){this._opacity=e,this.needsDraw=!0}},_isDisplayUpdated:{value:!1},_displayVertical:{value:!1},displayVertical:{get:function(){return this._displayVertical},set:function(e){this._displayVertical!==e&&(this._displayVertical=e,this._isDisplayUpdated=!0,this.needsDraw=!0)}},_displayHorizontal:{value:!1},displayHorizontal:{get:function(){return this._displayHorizontal},set:function(e){this._displayHorizontal!==e&&(this._displayHorizontal=e,this._isDisplayUpdated=!0,this.needsDraw=!0)}},_top:{value:!1},_bottomClip:{value:!1},_bottom:{value:!1},_left:{value:!1},_rightClip:{value:!1},_right:{value:!1},_hasResizedHorizontal:{value:!1},_hasResizedVertical:{value:!1},willDraw:{value:function(){this._offsetWidth!==this._element.offsetWidth&&(this._offsetWidth=this._element.offsetWidth,this._hasResizedHorizontal=!0),this._offsetHeight!==this._element.offsetHeight&&(this._offsetHeight=this._element.offsetHeight,this._hasResizedVertical=!0)}},draw:{value:function(){var e,t,n,r;if(this._isDisplayUpdated){var i=this._displayVertical?"block":"none",s=this._displayHorizontal?"block":"none";this._top.style.display=this._bottomClip.style.display=i,this._left.style.display=this._rightClip.style.display=s,this._isDisplayUpdated=!1}this._hasResizedHorizontal&&this._displayHorizontal&&(this._rightClip.style.width=this._right.style.width=this._offsetWidth-4+"px",this._rightClip.style.clip="rect(-1px,"+(this._offsetWidth-3)+"px,6px,3px)",this._hasResizedHorizontal=!1),this._hasResizedVertical&&this._displayVertical&&(this._bottomClip.style.height=this._bottom.style.height=this._offsetHeight-4+"px",this._bottomClip.style.clip="rect(3px,6px,"+(this._offsetHeight-3)+"px,-1px)",this._hasResizedVertical=!1);if(this._opacity){if(this._displayHorizontal){n=this._offsetWidth-9-(this._displayVertical?6:0),e=Math.floor(n*this._horizontalLength),r=n-e,1-this._horizontalLength?t=Math.floor(r*this._horizontalScroll/(1-this._horizontalLength)):t=0,t<0&&(e+=t,e<0&&(e=0),t=0),t>r&&(e+=Math.floor(r-t),e<0&&(e=0),t=n-e);var o=e-this._offsetWidth+9+"px,0px",u=t+2+"px,0px";this._right.style.webkitTransform="translate3d("+o+",0)",this._right.style.MozTransform="translate("+o+")",this._right.style.transform="translate("+o+")",this._left.style.webkitTransform=this._rightClip.style.webkitTransform="translate3d("+u+",0)",this._left.style.MozTransform=this._rightClip.style.MozTransform="translate("+u+")",this._left.style.transform=this._rightClip.style.transform="translate("+u+")",this._left.style.webkitTransition=this._right.style.webkitTransition="none",this._left.style.MozTransition=this._right.style.MozTransition="none",this._left.style.transition=this._right.style.transition="none",this._left.style.opacity=this._right.style.opacity=this._opacity}if(this._displayVertical){n=this._offsetHeight-9-(this._displayHorizontal?6:0),e=Math.floor(n*this._verticalLength),r=n-e,1-this._verticalLength?t=Math.floor(r*this._verticalScroll/(1-this._verticalLength)):t=0,t<0&&(e+=t,e<0&&(e=0),t=0),t>r&&(e+=Math.floor(r-t),e<0&&(e=0),t=n-e);var a="0px,"+(e-this._offsetHeight+9)+"px",f="0px,"+(t+2)+"px";this._bottom.style.webkitTransform="translate3d("+a+",0)",this._bottom.style.MozTransform="translate("+a+")",this._bottom.style.transform="translate("+a+")",this._top.style.webkitTransform=this._bottomClip.style.webkitTransform="translate3d("+f+",0)",this._top.style.MozTransform=this._bottomClip.style.MozTransform="translate("+f+")",this._top.style.transform=this._bottomClip.style.transform="translate("+f+")",this._top.style.webkitTransition=this._bottom.style.webkitTransition="none",this._top.style.MozTransition=this._bottom.style.MozTransition="none",this._top.style.transition=this._bottom.style.transition="none",this._top.style.opacity=this._bottom.style.opacity=this._opacity}}else this._displayHorizontal&&(this._left.style.webkitTransition=this._right.style.webkitTransition="300ms opacity",this._left.style.opacity=this._right.style.opacity=0),this._displayVertical&&(this._top.style.webkitTransition=this._bottom.style.webkitTransition="300ms opacity",this._top.style.opacity=this._bottom.style.opacity=0)}}})}}),montageDefine("f45ced6","ui/facadeflow.reel/facadeflow",{dependencies:["montage","montage/ui/component","montage/ui/controller/array-controller"],factory:function(e,t,n){var r=e("montage").Montage,i=e("montage/ui/component").Component,s=e("montage/ui/controller/array-controller").ArrayController;t.Facadeflow=r.create(i,{didCreate:{value:function(){var e=s.create();e.automaticallyOrganizeObjects=!0,Object.defineBinding(e,"content",{boundObject:this,boundObjectPropertyPath:"category",oneway:!0}),this.buttonController=e,this.application.addEventListener("dataReceived",this,!1)}},selectedMovie:{value:null},_scroll:{value:null},scroll:{set:function(e){this._scroll=e,e%1==0&&this.category?(this.selectedMovie=this.category[e],this.detailsFadeIn=!0,this.detailsFadeOut=!1,this.needsDraw=!0):e%1!=0&&this.category&&(this.detailsFadeOut=!0,this.detailsFadeIn=!1,this.needsDraw=!0)},get:function(){return this._scroll}},_fadeIn:{value:!1},_fadeOut:{value:!1},latestBoxofficeMovies:{value:null},upcomingMovies:{value:null},inTheaters:{value:null},topDvdRentals:{value:null},category:{value:null},buttonController:{value:null},_switchValue:{value:null},switchValue:{set:function(e){this._switchValue=e},get:function(){return this._switchValue}},_categoryId:{value:null},categoryId:{get:function(){return this._categoryId},set:function(e){e&&(this._categoryId=e,this._changeCategory(e))}},pointInCircleAt:{value:function(e){return[Math.cos(e),Math.sin(e)]}},tangentInCircleAt:{value:function(e){return[-Math.sin(e),Math.cos(e)]}},scaleVector:{value:function(e,t){return[e[0]*t,e[1]*t]}},_changeCategory:{value:function(e){var t=this;this.detailsFadeOut=!0,this._fadeOut=!0,this.needsDraw=!0,setTimeout(function(){t.templateObjects&&t.templateObjects.flow&&(t.templateObjects.flow.scroll=0),t.category=t[e],t.selectedMovie=t.category[0],t._fadeIn=!0,t._fadeOut=!1,t.detailsFadeIn=!0,t.detailsFadeOut=!1,t.needsDraw=!0},500)}},handleDataReceived:{value:function(e){this.category=this.latestBoxofficeMovies,this.selectedMovie=this.category[0],this.detailsFadeIn=!0,this._fadeIn=!0,this.needsDraw=!0}},draw:{value:function(e){var t=this.templateObjects.flow,n=this.templateObjects.details;this._fadeIn&&(t.element.classList.remove("flow-fade-out"),this._fadeIn=!1),this._fadeOut&&(t.element.classList.add("flow-fade-out"),this._fadeOut=!1),this.detailsFadeIn&&(n.element.classList.remove("details-fade-out"),this.detailsFadeIn=!1),this.detailsFadeOut&&(n.element.classList.contains("details-fade-out")==0&&n.element.classList.add("details-fade-out"),this.detailsFadeOut=!1)}},prepareForDraw:{value:function(){var e=[],t,n,r,i=480,s=.130976446,o,u=this.templateObjects.flow;for(o=0;o<=8;o++)r=Math.PI-o*Math.PI/8,t=this.scaleVector(this.pointInCircleAt(r),i),n=this.scaleVector(this.tangentInCircleAt(r),i*s),e.push({knotPosition:[t[0],0,-t[1]],previousHandlerPosition:[t[0]+n[0],0,-t[1]-n[1]],nextHandlerPosition:[t[0]-n[0],0,-t[1]+n[1]],previousDensity:1,nextDensity:1,rotateY:r-Math.PI/2});e[4].knotPosition[2]=-200,e[4].nextHandlerPosition[2]=-200,e[4].previousHandlerPosition[2]=-200,u.cameraPosition=[0,0,400];var a=0,f=0;u.paths=[{knots:e,headOffset:4,tailOffset:4,units:{rotateY:"rad"}}]}}})}}),montageDefine("f45ced6","model/remotemediator",{dependencies:["montage/core/core"],factory:function(e,t,n){var r=e("montage/core/core").Montage,i="gp967ctbkuhh32ztc2knmj9p";t.Remotemediator=r.create(r,{TRAILERS_FEED:{value:"https://gdata.youtube.com/feeds/api/videos?q=%s+official+trailer&max-results=1&v=2&alt=json"},BOXOFFICE_FEED:{value:"http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=15&country=us&apikey="+i},UPCOMING_FEED:{value:"http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?page_limit=30&page=1&country=us&apikey="+i},TOPRENTALS_FEED:{value:"http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json?limit=20&country=us&apikey="+i},INTHEATERS_FEED:{value:"http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=30&page=1&country=us&apikey="+i},load:{value:function(){this.loadLatestBoxofficeMovies(),this.loadUpcomingMovies(),this.loadTopDvdRentals(),this.loadInTheaters()}},jsonpCall:{value:function(e,t){var n="scriptCallback"+t.uuid.replace(/-/g,"_"),r=document.createElement("script");window[n]=function(e){delete window[n],r.parentNode&&r.parentNode.removeChild(r),t.apply(this,arguments)},r.type="text/javascript",r.src=e+"&callback="+n,document.head.appendChild(r)}},searchYoutubeTrailer:{value:function(e,t){var n=e.split(" "),r="",i;for(var s=0,o=n.length;s<o;s++)i=n[s],s!=0&&(r+="+"),r+=i;var u=this.TRAILERS_FEED.replace("%s",r);this.jsonpCall(u,function(e){t(e.feed.entry[0].media$group.yt$videoid.$t)})}},loadLatestBoxofficeMovies:{value:function(e){this.jsonpCall(this.BOXOFFICE_FEED,this.latestBoxofficeMoviesCallback)}},latestBoxofficeMoviesCallback:{value:function(e){var t=e.movies;t?this.dispatchEventNamed("remoteDataReceived",!0,!0,{type:"latestBoxofficeMovies",data:t}):alert("flixter api error, please try again")}},loadUpcomingMovies:{value:function(e){this.jsonpCall(this.UPCOMING_FEED,this.upcomingMoviesCallback)}},upcomingMoviesCallback:{value:function(e){var t=e.movies;t?this.dispatchEventNamed("remoteDataReceived",!0,!1,{type:"upcomingMovies",data:t}):alert("flixter api error, please try again")}},loadTopDvdRentals:{value:function(e){this.jsonpCall(this.TOPRENTALS_FEED,this.topDvdRentalsCallback)}},topDvdRentalsCallback:{value:function(e){var t=e.movies;t?this.dispatchEventNamed("remoteDataReceived",!0,!1,{type:"topDvdRentals",data:t}):alert("flixter api error, please try again")}},loadInTheaters:{value:function(e){this.jsonpCall(this.INTHEATERS_FEED,this.inTheatersCallback)}},inTheatersCallback:{value:function(e){var t=e.movies;t?this.dispatchEventNamed("remoteDataReceived",!0,!1,{type:"inTheaters",data:t}):alert("flixter api error, please try again")}}})}}),montageDefine("f45ced6","ui/facadeflow.reel/facadeflow.html",{text:'<!DOCTYPE html>\n\n<html>\n    <head>\n        <meta http-equiv=content-type content="text/html; charset=utf-8">\n        <link rel=stylesheet type="text/css" href=facadeflow.css>\n        <script type="text/montage-serialization">{"flow":{"prototype":"montage/ui/flow.reel","properties":{"element":{"#":"flow"},"isSelectionEnabled":false,"cameraFov":36.99,"cameraTargetPoint":[0,0,0],"stride":1},"bindings":{"contentController":{"<-":"@owner.buttonController"}}},"image":{"prototype":"ui/image.reel","properties":{"element":{"#":"image"}},"bindings":{"src":{"<-":"@flow.objectAtCurrentIteration.posters.detailed"}}},"details":{"prototype":"ui/details.reel","properties":{"element":{"#":"details"}},"bindings":{"data":{"<-":"@owner.selectedMovie"}}},"owner":{"properties":{"element":{"#":"facade-flow"}},"bindings":{"scroll":{"<-":"@flow.scroll"}}}}</script>\n    </head>\n\n    <body>\n        <div data-montage-id=facade-flow class=facade-flow>\n            <div data-montage-id=flow class="flow flow-fade-out" style="width: 1024px; height: 420px">\n                <div data-montage-id=image class=Image></div>\n            </div>\n            <div class=film></div>\n            <div data-montage-id=details class="details details-fade-out"></div>\n        </div>\n    </body>\n\n</html>'}),montageDefine("605491b","ui/composer/composer",{dependencies:["montage"],factory:function(e,t,n){var r=e("montage").Montage;t.Composer=r.create(r,{_component:{value:null},component:{get:function(){return this._component},set:function(e){this._component=e}},_element:{value:null},element:{get:function(){return this._element},set:function(e){this._element=e}},lazyLoad:{value:!1},_needsFrame:{value:!1},needsFrame:{set:function(e){this._needsFrame!==e&&(this._needsFrame=e,this._component&&e&&this._component.scheduleComposer(this))},get:function(){return this._needsFrame}},frame:{value:function(e){}},_resolveDefaults:{value:function(){this.element==null&&this.component!=null&&(this.element=this.component.element)}},_load:{value:function(){this.element||this._resolveDefaults(),this.load()}},load:{value:function(){}},unload:{value:function(){}},deserializedFromTemplate:{value:function(){this.component&&this.component.addComposer(this)}}})}}),montageDefine("605491b","ui/native-control",{dependencies:["montage","ui/component"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=t.NativeControl=r.create(i,{hasTemplate:{value:!1},willPrepareForDraw:{value:function(){}}});s.addAttributes({accesskey:null,contenteditable:null,contextmenu:null,dir:null,draggable:null,dropzone:null,hidden:{dataType:"boolean"},lang:null,spellcheck:null,style:null,tabindex:null,title:null})}}),montageDefine("605491b","ui/button.reel/button",{dependencies:["montage","ui/component","ui/native/button.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/button.reel").Button;t.Button=r.create(s,{hasTemplate:{value:!0},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-Button")}}})}}),montageDefine("605491b","ui/button.reel/button.html",{text:"<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=button.css>\n</head>\n<body>\n</body>\n</html>"})
bundleLoaded("index.html.bundle-1-2.js")