function test(){var e,t;e=JSON.parse(mod_fs.readFileSync("./float.json").toString()),t=mod_ctype.parseCTF(e,{endian:"big"}),mod_assert.deepEqual(t.lstypes(),{})}var mod_fs=require("fs"),mod_ctype=require("../../ctype.js"),mod_assert=require("assert");test()