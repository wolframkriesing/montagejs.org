function test8(){var e=new Buffer(4);mod_ctype.wuint8(23,"big",e,0),mod_ctype.wuint8(23,"big",e,1),mod_ctype.wuint8(23,"big",e,2),mod_ctype.wuint8(23,"big",e,3),ASSERT.equal(23,e[0]),ASSERT.equal(23,e[1]),ASSERT.equal(23,e[2]),ASSERT.equal(23,e[3]),mod_ctype.wuint8(23,"little",e,0),mod_ctype.wuint8(23,"little",e,1),mod_ctype.wuint8(23,"little",e,2),mod_ctype.wuint8(23,"little",e,3),ASSERT.equal(23,e[0]),ASSERT.equal(23,e[1]),ASSERT.equal(23,e[2]),ASSERT.equal(23,e[3]),mod_ctype.wuint8(255,"big",e,0),ASSERT.equal(255,e[0]),mod_ctype.wuint8(255,"little",e,0),ASSERT.equal(255,e[0])}function test16(){var e=9027,t=new Buffer(4);mod_ctype.wuint16(e,"big",t,0),ASSERT.equal(35,t[0]),ASSERT.equal(67,t[1]),mod_ctype.wuint16(e,"big",t,1),ASSERT.equal(35,t[1]),ASSERT.equal(67,t[2]),mod_ctype.wuint16(e,"big",t,2),ASSERT.equal(35,t[2]),ASSERT.equal(67,t[3]),mod_ctype.wuint16(e,"little",t,0),ASSERT.equal(35,t[1]),ASSERT.equal(67,t[0]),mod_ctype.wuint16(e,"little",t,1),ASSERT.equal(35,t[2]),ASSERT.equal(67,t[1]),mod_ctype.wuint16(e,"little",t,2),ASSERT.equal(35,t[3]),ASSERT.equal(67,t[2]),e=65408,mod_ctype.wuint16(e,"little",t,0),ASSERT.equal(255,t[1]),ASSERT.equal(128,t[0]),mod_ctype.wuint16(e,"big",t,0),ASSERT.equal(255,t[0]),ASSERT.equal(128,t[1])}function test32(){var e=new Buffer(6),t=3891858029;mod_ctype.wuint32(t,"big",e,0),ASSERT.equal(231,e[0]),ASSERT.equal(249,e[1]),ASSERT.equal(10,e[2]),ASSERT.equal(109,e[3]),mod_ctype.wuint32(t,"big",e,1),ASSERT.equal(231,e[1]),ASSERT.equal(249,e[2]),ASSERT.equal(10,e[3]),ASSERT.equal(109,e[4]),mod_ctype.wuint32(t,"big",e,2),ASSERT.equal(231,e[2]),ASSERT.equal(249,e[3]),ASSERT.equal(10,e[4]),ASSERT.equal(109,e[5]),mod_ctype.wuint32(t,"little",e,0),ASSERT.equal(231,e[3]),ASSERT.equal(249,e[2]),ASSERT.equal(10,e[1]),ASSERT.equal(109,e[0]),mod_ctype.wuint32(t,"little",e,1),ASSERT.equal(231,e[4]),ASSERT.equal(249,e[3]),ASSERT.equal(10,e[2]),ASSERT.equal(109,e[1]),mod_ctype.wuint32(t,"little",e,2),ASSERT.equal(231,e[5]),ASSERT.equal(249,e[4]),ASSERT.equal(10,e[3]),ASSERT.equal(109,e[2])}function test64(){var e=new Buffer(10),t=0x7cda8e7f90a6d,n=Math.floor(t/Math.pow(2,32)),r=t-n*Math.pow(2,32);ASSERT.equal(511400,n),ASSERT.equal(3891858029,r),mod_ctype.wuint64([n,r],"big",e,0),ASSERT.equal(0,e[0]),ASSERT.equal(7,e[1]),ASSERT.equal(205,e[2]),ASSERT.equal(168,e[3]),ASSERT.equal(231,e[4]),ASSERT.equal(249,e[5]),ASSERT.equal(10,e[6]),ASSERT.equal(109,e[7]),mod_ctype.wuint64([n,r],"little",e,0),ASSERT.equal(109,e[0]),ASSERT.equal(10,e[1]),ASSERT.equal(249,e[2]),ASSERT.equal(231,e[3]),ASSERT.equal(168,e[4]),ASSERT.equal(205,e[5]),ASSERT.equal(7,e[6]),ASSERT.equal(0,e[7])}var mod_ctype=require("../../../ctio.js"),ASSERT=require("assert");test8(),test16(),test32(),test64(),exports.test8=test8,exports.test16=test16,exports.test32=test32,exports.test64=test64