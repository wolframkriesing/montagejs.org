montageDefine("95ef556","test/integration/test-unpaused-streams",{dependencies:["../common","fs"],factory:function(e,t,n){var r=e("../common"),i=r.assert,s=r.CombinedStream,o=e("fs"),u=r.dir.fixture+"/file1.txt",a=r.dir.fixture+"/file2.txt",f=o.readFileSync(u)+o.readFileSync(a);(function(){var t=s.create({pauseStreams:!1});t.append(o.createReadStream(u)),t.append(o.createReadStream(a));var n=t._streams[0],l=t._streams[1];n.on("end",function(){i.ok(l.dataSize>0)});var c=r.dir.tmp+"/combined.txt",h=o.createWriteStream(c);t.pipe(h),h.on("end",function(){var e=o.readFileSync(c,"utf8");i.strictEqual(e,f)})})()}})