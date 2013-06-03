var common=require("../common"),assert=common.assert,CombinedStream=common.CombinedStream,fs=require("fs"),FILE1=common.dir.fixture+"/file1.txt",FILE2=common.dir.fixture+"/file2.txt",EXPECTED=fs.readFileSync(FILE1)+fs.readFileSync(FILE2);(function(){var t=CombinedStream.create();t.append(function(e){e(fs.createReadStream(FILE1))}),t.append(function(e){e(fs.createReadStream(FILE2))});var n=common.dir.tmp+"/combined.txt",r=fs.createWriteStream(n);t.pipe(r),r.on("end",function(){var e=fs.readFileSync(n,"utf8");assert.strictEqual(e,EXPECTED)})})()