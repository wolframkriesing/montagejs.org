var common=require("../common"),assert=common.assert,fake=common.fake.create(),DelayedStream=common.DelayedStream,Stream=require("stream").Stream;(function(){var t=new Stream,n=DelayedStream.create(t,{pauseStream:!1});t.emit("error",new Error("something went wrong"))})()