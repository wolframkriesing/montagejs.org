montageDefine("24deacf","bindings",{dependencies:["fs","path"],factory:function(e,t,n){function f(n){typeof n=="string"?n={bindings:n}:n||(n={}),n.__proto__=a,n.module_root||(n.module_root=t.getRoot(t.getFileName())),i.extname(n.bindings)!=".node"&&(n.bindings+=".node");var r=[],o=0,u=n.try.length,f,l,c;for(;o<u;o++){f=s.apply(null,n.try[o].map(function(e){return n[e]||e})),r.push(f);try{return l=n.path?e.resolve(f):e(f),n.path||(l.path=f),l}catch(h){if(!/not find/i.test(h.message))throw h}}throw c=new Error("Could not locate the bindings file. Tried:\n"+r.map(function(e){return n.arrow+e}).join("\n")),c.tries=r,c}var r=e("fs"),i=e("path"),s=i.join,o=i.dirname,u=r.existsSync||i.existsSync,a={arrow:process.env.NODE_BINDINGS_ARROW||" → ",compiled:process.env.NODE_BINDINGS_COMPILED_DIR||"compiled",platform:process.platform,arch:process.arch,version:process.versions.node,bindings:"bindings.node","try":[["module_root","build","bindings"],["module_root","build","Debug","bindings"],["module_root","build","Release","bindings"],["module_root","out","Debug","bindings"],["module_root","Debug","bindings"],["module_root","out","Release","bindings"],["module_root","Release","bindings"],["module_root","build","default","bindings"],["module_root","compiled","version","platform","arch","bindings"]]};n.exports=t=f,t.getFileName=function(){var t=Error.prepareStackTrace,n={},r;return Error.prepareStackTrace=function(e,t){for(var n=0,i=t.length;n<i;n++){r=t[n].getFileName();if(r!==__filename)return}},Error.captureStackTrace(n),n.stack,Error.prepareStackTrace=t,r},t.getRoot=function(t){var n=o(t),r;for(;;){n==="."&&(n=process.cwd());if(u(s(n,"package.json"))||u(s(n,"node_modules")))return n;if(r===n)throw new Error('Could not find module root given file: "'+t+'". Do you have a `package.json` file? ');r=n,n=s(n,"..")}}}})