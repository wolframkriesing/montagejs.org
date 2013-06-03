montageDefine("2b0d66c","test/index",{dependencies:["lab","../lib"],factory:function(e,t,n){var r=e("lab"),i=e("../lib"),s={},o=r.expect,u=r.before,a=r.after,f=r.experiment,l=r.test;f("Hoek",function(){var e={v:[7,8,9],w:/^something$/igm,x:{a:[1,2,3],b:123456,c:new Date,d:/hi/igm,e:/hello/},y:"y",z:new Date},t=[e,{z:"z"},e],n=[e,{z:"z"}];f("#clone",function(){l("should clone a nested object",function(t){var n=e,r=i.clone(n);o(n).to.deep.equal(r),o(n.z.getTime()).to.equal(r.z.getTime()),t()}),l("should clone a null object",function(e){var t=i.clone(null);o(t).to.equal(null),e()}),l("should not convert undefined properties to null",function(e){var t={something:undefined},n=i.clone(t);o(typeof n.something).to.equal("undefined"),e()}),l("should not throw on circular reference",function(e){var t={};t.x=t;var n=function(){var e=i.clone(t)};o(n).to.not.throw(),e()}),l("should properly clone circular reference",function(e){var t={z:new Date};t.y=t;var n=i.clone(t);o(Object.keys(n.y)).to.deep.equal(Object.keys(t)),o(n.z).to.not.equal(t.z),o(n.y).to.not.equal(t.y),o(n.y.z).to.not.equal(t.y.z),o(n.y).to.equal(n),o(n.y.y.y.y).to.equal(n),e()}),l("should properly clone deeply nested object",function(e){var t={x:{y:{a:[1,2,3],b:123456,c:new Date,d:/hi/igm,e:/hello/}}},n=i.clone(t);o(t).to.deep.equal(n),o(t.x.y.c.getTime()).to.equal(n.x.y.c.getTime()),e()}),l("should properly clone arrays",function(e){var t=[1,2,3],n=i.clone(t);o(t).to.deep.equal(n),e()}),l("should perform actual copy for shallow keys (no pass by reference)",function(t){var n=i.clone(e),r=i.clone(e);o(n.z).to.not.equal(e.z),o(n.z).to.not.equal(r.z),o(n.w).to.not.equal(e.w),o(n.w).to.not.equal(r.w),o(n.v).to.not.equal(e.v),o(n.v).to.not.equal(r.v),n.y=5,o(n.y).to.not.equal(e.y),o(n.y).to.not.equal(r.y),t()}),l("should perform actual copy for deep keys (no pass by reference)",function(t){var n=i.clone(e),r=i.clone(e);o(n.x.c).to.not.equal(e.x.c),o(n.x.c).to.not.equal(r.x.c),o(n.x.c.getTime()).to.equal(e.x.c.getTime()),o(n.x.c.getTime()).to.equal(r.x.c.getTime()),t()}),l("copies functions with properties",function(e){var t={x:function(){return 1},y:{}};t.x.z="string in function",t.x.v=function(){return 2},t.y.u=t.x;var n=i.clone(t);o(n.x()).to.equal(1),o(n.x.v()).to.equal(2),o(n.y.u).to.equal(n.x),o(n.x.z).to.equal("string in function"),e()}),l("should copy a buffer",function(e){var t={key:new Buffer([1,2,3,4,5]),cert:new Buffer([1,2,3,4,5,6,10])};copiedTls=i.clone(t),o(Buffer.isBuffer(copiedTls.key)).to.equal(!0),o(JSON.stringify(copiedTls.key)).to.equal(JSON.stringify(t.key)),o(Buffer.isBuffer(copiedTls.cert)).to.equal(!0),o(JSON.stringify(copiedTls.cert)).to.equal(JSON.stringify(t.cert)),e()})}),f("#merge",function(){l("does not throw if source is null",function(e){var t={},n=null,r=null;o(function(){r=i.merge(t,n)}).to.not.throw(),o(r).to.equal(t),e()}),l("does not throw if source is undefined",function(e){var t={},n=undefined,r=null;o(function(){r=i.merge(t,n)}).to.not.throw(),o(r).to.equal(t),e()}),l("throws if source is not an object",function(e){o(function(){var e={},t=0;i.merge(e,t)}).to.throw("Invalid source value: must be null, undefined, or an object"),e()}),l("throws if target is not an object",function(e){o(function(){var e=0,t={};i.merge(e,t)}).to.throw("Invalid target value: must be an object"),e()}),l("throws if target is not an array and source is",function(e){o(function(){var e={},t=[1,2];i.merge(e,t)}).to.throw("Cannot merge array onto an object"),e()}),l("returns the same object when merging arrays",function(e){var t=[],n=[1,2];o(i.merge(t,n)).to.equal(t),e()}),l("should combine an empty object with a non-empty object",function(t){var n={},r=e,s=i.merge(n,r);o(n).to.deep.equal(r),o(s).to.deep.equal(r),t()}),l("should override values in target",function(e){var t={x:1,y:2,z:3,v:5,t:"test",m:"abc"},n={x:null,z:4,v:0,t:{u:6},m:"123"},r=i.merge(t,n);o(r.x).to.equal(null),o(r.y).to.equal(2),o(r.z).to.equal(4),o(r.v).to.equal(0),o(r.m).to.equal("123"),o(r.t).to.deep.equal({u:6}),e()}),l("should override values in target (flip)",function(e){var t={x:1,y:2,z:3,v:5,t:"test",m:"abc"},n={x:null,z:4,v:0,t:{u:6},m:"123"},r=i.merge(n,t);o(r.x).to.equal(1),o(r.y).to.equal(2),o(r.z).to.equal(3),o(r.v).to.equal(5),o(r.m).to.equal("abc"),o(r.t).to.deep.equal("test"),e()})}),f("#applyToDefaults",function(){var e={a:1,b:2,c:{d:3,e:[5,6]},f:6,g:"test"};l("should return null if options is false",function(t){var n=i.applyToDefaults(e,!1);o(n).to.equal(null),t()}),l("should return a copy of defaults if options is true",function(t){var n=i.applyToDefaults(e,!0);o(n).to.deep.equal(n),t()}),l("should apply object to defaults",function(t){var n={a:null,c:{e:[4]},f:0,g:{h:5}},r=i.applyToDefaults(e,n);o(r.c.e).to.deep.equal([4]),o(r.a).to.equal(1),o(r.b).to.equal(2),o(r.f).to.equal(0),o(r.g).to.deep.equal({h:5}),t()})}),f("#unique",function(){l("should ensure uniqueness within array of objects based on subkey",function(e){var r=i.unique(t,"x");o(r).to.deep.equal(n),e()}),l("removes duplicated without key",function(e){o(i.unique([1,2,3,4,2,1,5])).to.deep.equal([1,2,3,4,5]),e()})}),f("#mapToObject",function(){l("should return null on null array",function(e){var t=i.mapToObject(null);o(t).to.equal(null),e()}),l("should convert basic array to existential object",function(e){var t=[1,2,3,4],n=i.mapToObject(t);for(var r in t)o(n[t[r]]).to.equal(!0);e()}),l("should convert array of objects to existential object",function(e){var t=[{x:1},{x:2},{x:3}],n="x",r=i.mapToObject(t,n);for(var s in t)o(r[t[s][n]]).to.equal(!0);e()})}),f("#intersect",function(){l("should return the common objects of two arrays",function(e){var t=[1,2,3,4,4,5,5],n=[5,4,5,6,7],r=i.intersect(t,n);o(r.length).to.equal(2),e()}),l("should return an empty array if either input is null",function(e){o(i.intersect([1],null).length).to.equal(0),o(i.intersect(null,[1]).length).to.equal(0),e()}),l("should return the common objects of object and array",function(e){var t=[1,2,3,4,4,5,5],n=[5,4,5,6,7],r=i.intersect(i.mapToObject(t),n);o(r.length).to.equal(2),e()})}),f("#matchKeys",function(){l("should match the existing object keys",function(e){var t={a:1,b:2,c:3,d:null};o(i.matchKeys(t,["b","c","d","e"])).to.deep.equal(["b","c","d"]),e()})}),f("#flatten",function(){l("should return a flat array",function(e){var t=i.flatten([1,2,[3,4,[5,6],[7],8],[9],[10,[11,12]],13]);o(t.length).to.equal(13),o(t).to.deep.equal([1,2,3,4,5,6,7,8,9,10,11,12,13]),e()})}),f("#removeKeys",function(){var e={location:{name:"San Bruno"},company:{name:"@WalmartLabs"}};l("should delete params with definition's hide set to true",function(t){var n=i.removeKeys(e,["location"]);o(e.location).to.not.exist,o(e.company).to.exist,t()})}),f("#reach",function(){var e={a:{b:{c:{d:1,e:2},f:"hello"},g:{h:3}},i:function(){}};l("returns a valid member",function(t){o(i.reach(e,"a.b.c.d")).to.equal(1),t()}),l("returns null on null object",function(e){o(i.reach(null,"a.b.c.d")).to.not.exist,e()}),l("returns null on missing member",function(t){o(i.reach(e,"a.b.c.d.x")).to.not.exist,t()}),l("returns null on invalid member",function(t){o(i.reach(e,"a.b.c.d-.x")).to.not.exist,t()}),l("returns function member",function(t){o(typeof i.reach(e,"i")).to.equal("function"),t()})}),f("#inheritAsync",function(){l("should inherit selected methods and wrap in async call",function(e){var t={a:function(){return"a!"},b:function(){return"b!"},c:function(){throw new Error("c!")}},n=function(){};n.prototype.c=function(){return"oops"},i.inheritAsync(n,t,["a","c"]);var r=new n;o(typeof r.a).to.equal("function"),o(typeof r.c).to.equal("function"),o(r.b).to.not.exist,r.a(function(t,n){o(t).to.not.exist,o(n).to.equal("a!"),r.c(function(t,n){o(n).to.not.exist,o(t.message).to.equal("c!"),e()})})})}),f("#callStack",function(){l("should return the full call stack",function(e){var t=i.callStack();o(t[0][0]).to.contain("index.js"),o(t[0][2]).to.equal(30),e()})}),f("#displayStack ",function(){l("should return the full call stack for display",function(e){var t=i.displayStack();o(t[0]).to.contain("test/index.js:"),e()}),l("should include constructor functions correctly",function(e){var t=function(e){e()},n=new t(function(){var t=i.displayStack();o(t[1]).to.contain("new Something"),e()})})}),f("#abort",function(){l("should exit process when not in test mode",function(e){var t=process.env.NODE_ENV,n=process.stdout.write,r=process.exit;process.env.NODE_ENV="nottatest",process.stdout.write=function(){},process.exit=function(i){process.exit=r,process.env.NODE_ENV=t,process.stdout.write=n,o(i).to.equal(1),e()},i.abort("Boom")}),l("should throw when not in test mode and abortThrow is true",function(e){var t=process.env.NODE_ENV;process.env.NODE_ENV="nottatest",i.abortThrow=!0;var n=function(){i.abort("my error message")};o(n).to.throw("my error message"),i.abortThrow=!1,process.env.NODE_ENV=t,e()}),l("should respect hideStack argument",function(e){var t=process.env.NODE_ENV,n=process.stdout.write,r=process.exit,s="";process.exit=function(){},process.env.NODE_ENV="",process.stdout.write=function(e){s=e},i.abort("my error message",!0),process.env.NODE_ENV=t,process.stdout.write=n,process.exit=r,o(s).to.equal("ABORT: my error message\n	\n"),e()}),l("should default to showing stack",function(e){var t=process.env.NODE_ENV,n=process.stdout.write,r=process.exit,s="";process.exit=function(){},process.env.NODE_ENV="",process.stdout.write=function(e){s=e},i.abort("my error message"),process.env.NODE_ENV=t,process.stdout.write=n,process.exit=r,o(s).to.contain("index.js"),e()})}),f("#assert",function(){l("should throw an Error when using assert in a test",function(e){var t=function(){i.assert(!1,"my error message")};o(t).to.throw("my error message"),e()}),l("should throw an Error when using assert in a test with no message",function(e){var t=function(){i.assert(!1)};o(t).to.throw("Unknown error"),e()}),l("should throw an Error when using assert in a test with multipart message",function(e){var t=function(){i.assert(!1,"This","is","my message")};o(t).to.throw("This is my message"),e()}),l("should throw an Error when using assert in a test with object message",function(e){var t=function(){i.assert(!1,"This","is",{spinal:"tap"})};o(t).to.throw('This is {"spinal":"tap"}'),e()}),l("should throw an Error when using assert in a test with error object message",function(e){var t=function(){i.assert(!1,new Error("This is spinal tap"))};o(t).to.throw("This is spinal tap"),e()})}),f("#loadDirModules",function(){l("should load modules from directory",function(e){var t={};i.loadDirModules(__dirname+"/modules",["test2"],t),o(t.Test1.x).to.equal(1),o(t.Test2).to.not.exist,o(t.Test3.z).to.equal(3),e()}),l("should list modules from directory into function",function(e){var t={};i.loadDirModules(__dirname+"/modules",["test2"],function(e,n,r){t[n]=r}),o(t.test1).to.equal("Test1"),o(t.test2).to.not.exist,o(t.test3).to.equal("Test3"),e()})}),f("#rename",function(){l("should rename object key",function(e){var t={b:"c"};i.rename(t,"b","x"),o(t.b).to.not.exist,o(t.x).to.equal("c"),e()})}),f("Timer",function(){l("should return time elapsed",function(e){var t=new i.Timer;setTimeout(function(){o(t.elapsed()).to.be.above(9),e()},12)})}),f("#loadPackage",function(){l("should",function(e){var t=i.loadPackage();o(t.name).to.equal("hoek"),e()})}),f("#escapeRegex",function(){l("should escape all special regular expression characters",function(e){var t=i.escapeRegex('4^f$s.4*5+-_?%=#!:@|~\\/`"(>)[<]d{}s,');o(t).to.equal('4\\^f\\$s\\.4\\*5\\+\\-_\\?%\\=#\\!\\:@\\|~\\\\\\/`"\\(>\\)\\[<\\]d\\{\\}s\\,'),e()})}),f("#toss",function(){l("should call callback with new error",function(e){var t=function(t){o(t).to.exist,o(t.message).to.equal("bug"),e()};i.toss(!0,"feature",t),i.toss(!1,"bug",t)}),l("should call callback with new error and no message",function(e){i.toss(!1,function(t){o(t).to.exist,o(t.message).to.equal(""),e()})}),l("should call callback with error condition",function(e){i.toss(new Error("boom"),function(t){o(t).to.exist,o(t.message).to.equal("boom"),e()})}),l("should call callback with new error using message with error condition",function(e){i.toss(new Error("ka"),"boom",function(t){o(t).to.exist,o(t.message).to.equal("boom"),e()})}),l("should call callback with new error using passed error with error condition",function(e){i.toss(new Error("ka"),new Error("boom"),function(t){o(t).to.exist,o(t.message).to.equal("boom"),e()})})}),f("Base64Url",function(){var e="AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0-P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn-AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq-wsbKztLW2t7i5uru8vb6_wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t_g4eLj5OXm5-jp6uvs7e7v8PHy8_T19vf4-fr7_P3-_w",t=unescape("%00%01%02%03%04%05%06%07%08%09%0A%0B%0C%0D%0E%0F%10%11%12%13%14%15%16%17%18%19%1A%1B%1C%1D%1E%1F%20%21%22%23%24%25%26%27%28%29*+%2C-./0123456789%3A%3B%3C%3D%3E%3F@ABCDEFGHIJKLMNOPQRSTUVWXYZ%5B%5C%5D%5E_%60abcdefghijklmnopqrstuvwxyz%7B%7C%7D%7E%7F%80%81%82%83%84%85%86%87%88%89%8A%8B%8C%8D%8E%8F%90%91%92%93%94%95%96%97%98%99%9A%9B%9C%9D%9E%9F%A0%A1%A2%A3%A4%A5%A6%A7%A8%A9%AA%AB%AC%AD%AE%AF%B0%B1%B2%B3%B4%B5%B6%B7%B8%B9%BA%BB%BC%BD%BE%BF%C0%C1%C2%C3%C4%C5%C6%C7%C8%C9%CA%CB%CC%CD%CE%CF%D0%D1%D2%D3%D4%D5%D6%D7%D8%D9%DA%DB%DC%DD%DE%DF%E0%E1%E2%E3%E4%E5%E6%E7%E8%E9%EA%EB%EC%ED%EE%EF%F0%F1%F2%F3%F4%F5%F6%F7%F8%F9%FA%FB%FC%FD%FE%FF");f("#base64urlEncode",function(){l("should base64 URL-safe a string",function(n){o(i.base64urlEncode(t)).to.equal(e),n()})}),f("#base64urlDecode",function(){l("should un-base64 URL-safe a string",function(n){o(i.base64urlDecode(e)).to.equal(t),n()}),l("should return error on undefined input",function(e){o(i.base64urlDecode().message).to.exist,e()}),l("should return error on invalid input",function(e){o(i.base64urlDecode("*").message).to.exist,e()})})}),f("#escapeHeaderAttribute",function(){l("should not alter ascii values",function(e){var t=i.escapeHeaderAttribute("My Value");o(t).to.equal("My Value"),e()}),l("should escape all special HTTP header attribute characters",function(e){var t=i.escapeHeaderAttribute('I said go!!!#"'+String.fromCharCode(92));o(t).to.equal('I said go!!!#\\"\\\\'),e()}),l("should throw on large unicode characters",function(e){var t=function(){i.escapeHeaderAttribute("this is a test"+String.fromCharCode(500)+String.fromCharCode(300))};o(t).to.throw(Error),e()}),l("should throw on CRLF to prevent response splitting",function(e){var t=function(){i.escapeHeaderAttribute("this is a test\r\n")};o(t).to.throw(Error),e()})}),f("#escapeHtml",function(){l("should escape all special HTML characters",function(e){var t=i.escapeHtml("&<>\"'`");o(t).to.equal("&amp;&lt;&gt;&quot;&#x27;&#x60;"),e()}),l("should return empty string on falsy input",function(e){var t=i.escapeHtml("");o(t).to.equal(""),e()}),l("should return unchanged string on no reserved input",function(e){var t=i.escapeHtml("abc");o(t).to.equal("abc"),e()})}),f("#printEvent",function(){l("outputs event as string",function(e){var t={timestamp:(new Date(2013,1,1,6,30,45,123)).getTime(),tags:["a","b","c"],data:{some:"data"}};i.consoleFunc=function(t){i.consoleFunc=console.log,o(t).to.equal('130201/063045.123, a, {"some":"data"}'),e()},i.printEvent(t)}),l("outputs JSON error",function(e){var t={timestamp:(new Date(2013,1,1,6,30,45,123)).getTime(),tags:["a","b","c"],data:{some:"data"}};t.data.a=t.data,i.consoleFunc=function(t){i.consoleFunc=console.log,o(t).to.equal("130201/063045.123, a, JSON Error: Converting circular structure to JSON"),e()},i.printEvent(t)})}),f("#nextTick",function(){l("calls the provided callback on nextTick",function(e){var t=0,n=function(e,n){t+=e,n()},r=i.nextTick(n);r(5,function(){o(t).to.equal(6),e()}),o(t).to.equal(0),n(1,function(){o(t).to.equal(1)})})})})}})