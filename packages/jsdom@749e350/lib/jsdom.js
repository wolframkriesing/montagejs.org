var dom=exports.dom=require("./jsdom/level3/index").dom,features=require("./jsdom/browser/documentfeatures"),fs=require("fs"),pkg=JSON.parse(fs.readFileSync(__dirname+"/../package.json")),request=require("request"),URL=require("url"),style=require("./jsdom/level2/style");exports.defaultLevel=dom.level3.html,exports.browserAugmentation=require("./jsdom/browser/index").browserAugmentation,exports.windowAugmentation=require("./jsdom/browser/index").windowAugmentation,["availableDocumentFeatures","defaultDocumentFeatures","applyDocumentFeatures"].forEach(function(e){exports.__defineGetter__(e,function(){return features[e]}),exports.__defineSetter__(e,function(t){return features[e]=t})}),exports.debugMode=!1;var createWindow=exports.createWindow=require("./jsdom/browser/index").createWindow;exports.__defineGetter__("version",function(){return pkg.version}),exports.level=function(e,t){return t||(t="core"),require("./jsdom/level"+e+"/"+t).dom["level"+e][t]},exports.jsdom=function(e,t,n){n=n||{},typeof t=="string"?t=exports.level(t,"html"):t=t||exports.defaultLevel,n.url||(n.url=module.parent.id==="jsdom"?module.parent.parent.filename:module.parent.filename,n.url=n.url.replace(/\\/g,"/"),n.url[0]!=="/"&&(n.url="/"+n.url),n.url="file://"+n.url);var r=exports.browserAugmentation(t,n),i=r.HTMLDocument?new r.HTMLDocument(n):new r.Document(n);return n.features&&n.features.QuerySelector&&require("./jsdom/selectors/index").applyQuerySelector(i,t),features.applyDocumentFeatures(i,n.features),typeof e=="undefined"||e===null?i.write("<html><head></head><body></body></html>"):i.write(e+""),i.close&&!n.deferClose&&i.close(),i.createWindow=function(){return i.createWindow&&delete i.createWindow,i.parentWindow},i},exports.html=function(e,t,n){e+="";var r=e.toLowerCase();return~r.indexOf("<body")||(e="<body>"+e+"</body>"),~r.indexOf("<html")||(e="<html>"+e+"</html>"),exports.jsdom(e,t,n)},exports.jQueryify=exports.jsdom.jQueryify=function(e){if(!e||!e.document)return;var t=Array.prototype.slice.call(arguments),n=typeof t[t.length-1]=="function"&&t.pop(),r,i=e.document.createElement("script");i.className="jsdom",t.length>1&&typeof (t[1]==="string")&&(r=t[1]);var s=e.document.implementation._features;return e.document.implementation.addFeature("FetchExternalResources",["script"]),e.document.implementation.addFeature("ProcessExternalResources",["script"]),e.document.implementation.addFeature("MutationEvents",["1.0"]),i.src=r||"http://code.jquery.com/jquery-latest.js",e.document.body.appendChild(i),i.onload=function(){n&&n(e,e.jQuery),e.document.implementation._features=s},e},exports.env=exports.jsdom.env=function(){var e=Array.prototype.slice.call(arguments),t=exports.env.processArguments(e),n=t.done,r=function(e,r){r+="";if(e)return n(e);t.scripts=t.scripts||[],typeof t.scripts=="string"&&(t.scripts=[t.scripts]),t.src=t.src||[],typeof t.src=="string"&&(t.src=[t.src]);var i={features:t.features||{FetchExternalResources:!1,ProcessExternalResources:!1,SkipExternalResources:!1},url:t.url},s=exports.html(r,null,i).createWindow(),o=JSON.parse(JSON.stringify(s.document.implementation._features)),u=0,a=t.scripts.length+t.src.length,f=null,l=null;if(!s||!s.document)return n(new Error("JSDOM: a window object could not be created."));t.document&&(s.document._referrer=t.document.referrer,s.document._cookie=t.document.cookie),s.document.implementation.addFeature("FetchExternalResources",["script"]),s.document.implementation.addFeature("ProcessExternalResources",["script"]),s.document.implementation.addFeature("MutationEvents",["1.0"]);var c=function(){u++,u>=a&&(s.document.implementation._features=o,l&&(l=l.concat(s.document.errors||[])),process.nextTick(function(){n(l,s)}))};t.scripts.length>0||t.src.length>0?(t.scripts.forEach(function(e){var t=s.document.createElement("script");t.className="jsdom",t.onload=function(){c()},t.onerror=function(e){l||(l=[]),l.push(e.error),c()},t.src=e;try{s.document.documentElement.appendChild(t)}catch(n){l||(l=[]),l.push(n.error||n.message),c()}}),t.src.forEach(function(e){var t=s.document.createElement("script");t.onload=function(){process.nextTick(c)},t.onerror=function(e){l||(l=[]),l.push(e.error||e.message),process.nextTick(c)},t.text=e,s.document.documentElement.appendChild(t),s.document.documentElement.removeChild(t)})):c()};t.html+="";if(t.html.indexOf("\n")>0||t.html.match(/^\W*</))r(null,t.html);else{var i=URL.parse(t.html);t.url=t.url||i.href,i.hostname?request({uri:i,encoding:t.encoding||"utf8",headers:t.headers||{},proxy:t.proxy||null},function(e,t,n){r(e,n)}):fs.readFile(t.html,r)}},exports.env.processArguments=function(e){if(!e||!e.length||e.length<1)throw new Error("No arguments passed to jsdom.env().");var t={html:!0,done:!0,scripts:!1,config:!1,url:!1,document:!1},n=Object.keys(t),r={code:[]},i=e.length;return i===1?r=e[0]:e.forEach(function(e){var t=typeof e;if(!e)return;t==="string"||e+""===e?r.html=e:t==="object"?e.length&&e[0]?r.scripts=e:(n.forEach(function(t){typeof e[t]!="undefined"&&typeof r[t]=="undefined"&&(r[t]=e[t],delete e[t])}),r.config=e):t==="function"&&(r.done=e)}),n.forEach(function(e){var n=t[e];if(n&&typeof r[e]=="undefined")throw new Error("jsdom.env requires a '"+e+"' argument")}),r}