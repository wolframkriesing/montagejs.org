var assert=require("assert"),http=require("http"),path=require("path"),mime=require("mime"),request=require("../index"),fs=require("fs"),remoteFile="http://nodejs.org/images/logo.png",FIELDS=[{name:"my_field",value:"my_value"},{name:"my_buffer",value:new Buffer([1,2,3])},{name:"my_file",value:fs.createReadStream(__dirname+"/unicycle.jpg")},{name:"remote_file",value:request(remoteFile)}],server=http.createServer(function(e,t){var n="";e.setEncoding("utf8"),e.on("data",function(e){n+=e}),e.on("end",function(){var e=FIELDS.shift();assert.ok(n.indexOf('form-data; name="'+e.name+'"')!=-1),assert.ok(n.indexOf(e.value)!=-1);var e=FIELDS.shift();assert.ok(n.indexOf('form-data; name="'+e.name+'"')!=-1),assert.ok(n.indexOf(e.value)!=-1);var e=FIELDS.shift();assert.ok(n.indexOf('form-data; name="'+e.name+'"')!=-1),assert.ok(n.indexOf('; filename="'+path.basename(e.value.path)+'"')!=-1),assert.ok(n.indexOf("2005:06:21 01:44:12")!=-1),assert.ok(n.indexOf("Content-Type: "+mime.lookup(e.value.path))!=-1);var e=FIELDS.shift();assert.ok(n.indexOf('form-data; name="'+e.name+'"')!=-1),assert.ok(n.indexOf('; filename="'+path.basename(e.value.path)+'"')!=-1),assert.ok(n.indexOf("ImageReady")!=-1),assert.ok(n.indexOf("Content-Type: "+mime.lookup(remoteFile))!=-1),t.writeHead(200),t.end("done")})});server.listen(8080,function(){var e=request.post("http://localhost:8080/upload",function(){server.close()}),t=e.form();FIELDS.forEach(function(e){t.append(e.name,e.value)})}),process.on("exit",function(){assert.strictEqual(FIELDS.length,0)})