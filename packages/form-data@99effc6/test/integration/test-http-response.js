var common=require("../common"),assert=common.assert,http=require("http"),path=require("path"),mime=require("mime"),request=require("request"),parseUrl=require("url").parse,fs=require("fs"),FormData=require(common.dir.lib+"/form_data"),IncomingForm=require("formidable").IncomingForm,remoteFile="http://nodejs.org/images/logo.png",FIELDS,server,parsedUrl=parseUrl(remoteFile),options={method:"get",port:parsedUrl.port||80,path:parsedUrl.pathname,host:parsedUrl.hostname};http.request(options,function(e){FIELDS=[{name:"my_field",value:"my_value"},{name:"my_buffer",value:new Buffer([1,2,3])},{name:"remote_file",value:e}];var t=new FormData;FIELDS.forEach(function(e){t.append(e.name,e.value)}),server.listen(common.port,function(){t.submit("http://localhost:"+common.port+"/",function(e,t){if(e)throw e;assert.strictEqual(t.statusCode,200),server.close()})})}).end(),server=http.createServer(function(e,t){var n=new IncomingForm({uploadDir:common.dir.tmp});n.parse(e),n.on("field",function(e,t){var n=FIELDS.shift();assert.strictEqual(e,n.name),assert.strictEqual(t,n.value+"")}).on("file",function(e,t){var n=FIELDS.shift();assert.strictEqual(e,n.name),assert.strictEqual(t.name,path.basename(n.value.path||remoteFile)),assert.strictEqual(t.type,mime.lookup(t.name))}).on("end",function(){t.writeHead(200),t.end("done")})}),process.on("exit",function(){assert.strictEqual(FIELDS.length,0)})