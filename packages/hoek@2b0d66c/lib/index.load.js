montageDefine("2b0d66c","lib/index",{dependencies:["fs","./escape"],factory:function(e,t,n){var r=e("fs"),i=e("./escape"),s={};t.clone=function(e,n){if(typeof e!="object"||e===null)return e;n=n||{orig:[],copy:[]};var r=n.orig.indexOf(e);if(r!==-1)return n.copy[r];var i=e instanceof Array?[]:{};n.orig.push(e),n.copy.push(i);for(var s in e)if(e.hasOwnProperty(s))if(e[s]instanceof Buffer)i[s]=new Buffer(e[s]);else if(e[s]instanceof Date)i[s]=new Date(e[s].getTime());else if(e[s]instanceof RegExp){var o=""+(e[s].global?"g":"")+(e[s].ignoreCase?"i":"")+(e[s].multiline?"m":"");i[s]=new RegExp(e[s].source,o)}else i[s]=t.clone(e[s],n);return i},t.merge=function(e,n,r,i){return t.assert(e&&typeof e=="object","Invalid target value: must be an object"),t.assert(n===null||n===undefined||typeof n=="object","Invalid source value: must be null, undefined, or an object"),n?n instanceof Array?(t.assert(e instanceof Array,"Cannot merge array onto an object"),i===!1&&(e.length=0),n.forEach(function(t){e.push(t)}),e):(Object.keys(n).forEach(function(s){var o=n[s];o&&typeof o=="object"?!e[s]||typeof e[s]!="object"?e[s]=t.clone(o):t.merge(e[s],n[s],r,i):o!==null&&o!==undefined?e[s]=o:r!==!1&&(e[s]=o)}),e):e},t.applyToDefaults=function(e,n){t.assert(e&&typeof e=="object","Invalid defaults value: must be an object"),t.assert(!n||n===!0||typeof n=="object","Invalid options value: must be true, falsy or an object");if(!n)return null;var r=t.clone(e);return n===!0?r:t.merge(r,n,!1,!1)},t.unique=function(e,t){var n={},r=[];for(var i=0,s=e.length;i<s;++i){var o=t?e[i][t]:e[i];n[o]!==!0&&(r.push(e[i]),n[o]=!0)}return r},t.mapToObject=function(e,t){if(!e)return null;var n={};for(var r=0,i=e.length;r<i;++r)t?e[r][t]&&(n[e[r][t]]=!0):n[e[r]]=!0;return n},t.intersect=function(e,n){if(!e||!n)return[];var r=[],i=e instanceof Array?t.mapToObject(e):e,s={};for(var o=0,u=n.length;o<u;++o)i[n[o]]&&!s[n[o]]&&(r.push(n[o]),s[n[o]]=!0);return r},t.matchKeys=function(e,t){var n=[];for(var r=0,i=t.length;r<i;++r)e.hasOwnProperty(t[r])&&n.push(t[r]);return n},t.flatten=function(e,n){var r=n||[];for(var i=0,s=e.length;i<s;++i)Array.isArray(e[i])?t.flatten(e[i],r):r.push(e[i]);return r},t.removeKeys=function(e,t){for(var n=0,r=t.length;n<r;n++)delete e[t[n]]},t.reach=function(e,t){var n=t.split("."),r=e;return n.forEach(function(e){r&&(r=r[e])}),r},t.inheritAsync=function(e,t,n){n=n||null;for(var r in t)if(t.hasOwnProperty(r)){if(n instanceof Array&&n.indexOf(r)<0)continue;e.prototype[r]=function(e){return function(t){var n=null;try{n=e()}catch(r){return t(r)}return t(null,n)}}(t[r])}},t.formatStack=function(e){var t=[];return e.forEach(function(e){t.push([e.getFileName(),e.getLineNumber(),e.getColumnNumber(),e.getFunctionName(),e.isConstructor()])}),t},t.formatTrace=function(e){var t=[];return e.forEach(function(e){t.push((e[4]?"new ":"")+e[3]+" ("+e[0]+":"+e[1]+":"+e[2]+")")}),t},t.callStack=function(e){var n=Error.prepareStackTrace;Error.prepareStackTrace=function(e,t){return t};var r={};Error.captureStackTrace(r,arguments.callee);var i=r.stack;Error.prepareStackTrace=n;var s=t.formatStack(i);return e?s.slice(e):s},t.displayStack=function(e){var n=t.callStack(e===undefined?1:e+1);return t.formatTrace(n)},t.abortThrow=!1,t.abort=function(e,n){if(process.env.NODE_ENV==="test"||t.abortThrow===!0)throw new Error(e||"Unknown error");var r="";n||(r=t.displayStack(1).join("\n	")),console.log("ABORT: "+e+"\n	"+r),process.exit(1)},t.assert=function(e){if(e)return;var t=Array.prototype.slice.call(arguments,1);throw t=t.map(function(e){return typeof e=="string"?e:e instanceof Error?e.message:JSON.stringify(e)}),new Error(t.join(" ")||"Unknown error")},t.loadDirModules=function(t,n,i){var s={};for(var o=0,u=n.length;o<u;++o)s[n[o]+".js"]=!0;r.readdirSync(t).forEach(function(n){if(/\.js$/.test(n)&&!s[n]){var r=n.substr(0,n.lastIndexOf(".")),o=r.charAt(0).toUpperCase()+r.substr(1).toLowerCase();typeof i!="function"?i[o]=e(t+"/"+r):i(t+"/"+r,r,o)}})},t.rename=function(e,t,n){e[n]=e[t],delete e[t]},t.Timer=function(){this.reset()},t.Timer.prototype.reset=function(){this.ts=Date.now()},t.Timer.prototype.elapsed=function(){return Date.now()-this.ts},t.loadPackage=function(e){var t={},n=(e||process.env.PWD)+"/package.json";if(r.existsSync(n))try{t=JSON.parse(r.readFileSync(n))}catch(i){}return t},t.escapeRegex=function(e){return e.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g,"\\$&")},t.toss=function(e){var t=arguments.length===3?arguments[1]:"",n=arguments.length===3?arguments[2]:arguments[1],r=t instanceof Error?t:t?new Error(t):e instanceof Error?e:new Error;if(e instanceof Error||!e)return n(r)},t.base64urlEncode=function(e){return(new Buffer(e,"binary")).toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/\=/g,"")},t.base64urlDecode=function(e){if(e&&!e.match(/^[\w\-]*$/))return new Error("Invalid character");try{return(new Buffer(e.replace(/-/g,"+").replace(/:/g,"/"),"base64")).toString("binary")}catch(t){return t}},t.escapeHeaderAttribute=function(e){return t.assert(e.match(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/),"Bad attribute value ("+e+")"),e.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')},t.escapeHtml=function(e){return i.escapeHtml(e)},t.escapeJavaScript=function(e){return i.escapeJavaScript(e)},t.consoleFunc=console.log,t.printEvent=function(e){var n=function(e){return(e<10?"0":"")+e},r=new Date(e.timestamp),i=(r.getYear()-100).toString()+n(r.getMonth()+1)+n(r.getDate())+"/"+n(r.getHours())+n(r.getMinutes())+n(r.getSeconds())+"."+r.getMilliseconds(),s=e.data;if(typeof e.data!="string")try{s=JSON.stringify(e.data)}catch(o){s="JSON Error: "+o.message}var u=i+", "+e.tags[0]+", "+s;t.consoleFunc(u)},t.nextTick=function(e){return function(){var t=arguments;process.nextTick(function(){e.apply(null,t)})}}}})