function testRead(){var e,t;t=new Buffer(10),t[0]=50,t[1]=101,t[2]=66,t[3]=86,t[4]=35,t[5]=255,t[6]=255,t[7]=255,t[8]=137,t[9]=17,e=mod_ctype.rsint64(t,"big",0),ASSERT.equal(845496918,e[0]),ASSERT.equal(603979775,e[1]),e=mod_ctype.rsint64(t,"big",1),ASSERT.equal(1698846243,e[0]),ASSERT.equal(4294967177,e[1]),e=mod_ctype.rsint64(t,"big",2),ASSERT.equal(1112941567,e[0]),ASSERT.equal(4294936849,e[1]),e=mod_ctype.rsint64(t,"little",0),ASSERT.equal(-220,e[0]),ASSERT.equal(-2847775438,e[1]),e=mod_ctype.rsint64(t,"little",1),ASSERT.equal(-1979711488,e[0]),ASSERT.equal(-3702111643,e[1]),e=mod_ctype.rsint64(t,"little",2),ASSERT.equal(294256639,e[0]),ASSERT.equal(4280505922,e[1]),t.fill(0),e=mod_ctype.rsint64(t,"big",0),ASSERT.equal(0,e[0]),ASSERT.equal(0,e[1]),e=mod_ctype.rsint64(t,"big",1),ASSERT.equal(0,e[0]),ASSERT.equal(0,e[1]),e=mod_ctype.rsint64(t,"big",2),ASSERT.equal(0,e[0]),ASSERT.equal(0,e[1]),e=mod_ctype.rsint64(t,"little",0),ASSERT.equal(0,e[0]),ASSERT.equal(0,e[1]),e=mod_ctype.rsint64(t,"little",1),ASSERT.equal(0,e[0]),ASSERT.equal(0,e[1]),e=mod_ctype.rsint64(t,"little",2),ASSERT.equal(0,e[0]),ASSERT.equal(0,e[1]),t.fill(255),e=mod_ctype.rsint64(t,"big",0),ASSERT.equal(0,e[0]),ASSERT.equal(-1,e[1]),e=mod_ctype.rsint64(t,"big",1),ASSERT.equal(0,e[0]),ASSERT.equal(-1,e[1]),e=mod_ctype.rsint64(t,"big",2),ASSERT.equal(0,e[0]),ASSERT.equal(-1,e[1]),e=mod_ctype.rsint64(t,"little",0),ASSERT.equal(0,e[0]),ASSERT.equal(-1,e[1]),e=mod_ctype.rsint64(t,"little",1),ASSERT.equal(0,e[0]),ASSERT.equal(-1,e[1]),e=mod_ctype.rsint64(t,"little",2),ASSERT.equal(0,e[0]),ASSERT.equal(-1,e[1]),t[0]=128,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,e=mod_ctype.rsint64(t,"big",0),ASSERT.equal(-2147483648,e[0]),ASSERT.equal(0,e[1]),t[7]=128,t[6]=0,t[5]=0,t[4]=0,t[3]=0,t[2]=0,t[1]=0,t[0]=0,e=mod_ctype.rsint64(t,"little",0),ASSERT.equal(-2147483648,e[0]),ASSERT.equal(0,e[1]),t[0]=128,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=1,e=mod_ctype.rsint64(t,"big",0),ASSERT.equal(-2147483647,e[0]),ASSERT.equal(-4294967295,e[1])}function testWriteZero(){var e,t;t=new Buffer(10),t.fill(102),e=[0,0],mod_ctype.wsint64(e,"big",t,0),ASSERT.equal(0,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),t.fill(102),e=[0,0],mod_ctype.wsint64(e,"big",t,1),ASSERT.equal(102,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(0,t[8]),ASSERT.equal(102,t[9]),t.fill(102),e=[0,0],mod_ctype.wsint64(e,"big",t,2),ASSERT.equal(102,t[0]),ASSERT.equal(102,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(0,t[8]),ASSERT.equal(0,t[9]),t.fill(102),e=[0,0],mod_ctype.wsint64(e,"little",t,0),ASSERT.equal(0,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),t.fill(102),e=[0,0],mod_ctype.wsint64(e,"little",t,1),ASSERT.equal(102,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(0,t[8]),ASSERT.equal(102,t[9]),t.fill(102),e=[0,0],mod_ctype.wsint64(e,"little",t,2),ASSERT.equal(102,t[0]),ASSERT.equal(102,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(0,t[8]),ASSERT.equal(0,t[9])}function testWrite(){var e,t;t=new Buffer(10),e=[2311254,135],t.fill(102),mod_ctype.wsint64(e,"big",t,0),ASSERT.equal(0,t[0]),ASSERT.equal(35,t[1]),ASSERT.equal(68,t[2]),ASSERT.equal(86,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(135,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"big",t,1),ASSERT.equal(102,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(35,t[2]),ASSERT.equal(68,t[3]),ASSERT.equal(86,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(135,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"big",t,2),ASSERT.equal(102,t[0]),ASSERT.equal(102,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(35,t[3]),ASSERT.equal(68,t[4]),ASSERT.equal(86,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(0,t[8]),ASSERT.equal(135,t[9]),t.fill(102),mod_ctype.wsint64(e,"little",t,0),ASSERT.equal(135,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(86,t[4]),ASSERT.equal(68,t[5]),ASSERT.equal(35,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"little",t,1),ASSERT.equal(102,t[0]),ASSERT.equal(135,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(86,t[5]),ASSERT.equal(68,t[6]),ASSERT.equal(35,t[7]),ASSERT.equal(0,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"little",t,2),ASSERT.equal(102,t[0]),ASSERT.equal(102,t[1]),ASSERT.equal(135,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(86,t[6]),ASSERT.equal(68,t[7]),ASSERT.equal(35,t[8]),ASSERT.equal(0,t[9]),e=[13345,883674554],t.fill(102),mod_ctype.wsint64(e,"big",t,0),ASSERT.equal(0,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(52,t[2]),ASSERT.equal(33,t[3]),ASSERT.equal(52,t[4]),ASSERT.equal(171,t[5]),ASSERT.equal(205,t[6]),ASSERT.equal(186,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"big",t,1),ASSERT.equal(102,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(52,t[3]),ASSERT.equal(33,t[4]),ASSERT.equal(52,t[5]),ASSERT.equal(171,t[6]),ASSERT.equal(205,t[7]),ASSERT.equal(186,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"big",t,2),ASSERT.equal(102,t[0]),ASSERT.equal(102,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(52,t[4]),ASSERT.equal(33,t[5]),ASSERT.equal(52,t[6]),ASSERT.equal(171,t[7]),ASSERT.equal(205,t[8]),ASSERT.equal(186,t[9]),t.fill(102),mod_ctype.wsint64(e,"little",t,0),ASSERT.equal(186,t[0]),ASSERT.equal(205,t[1]),ASSERT.equal(171,t[2]),ASSERT.equal(52,t[3]),ASSERT.equal(33,t[4]),ASSERT.equal(52,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"little",t,1),ASSERT.equal(102,t[0]),ASSERT.equal(186,t[1]),ASSERT.equal(205,t[2]),ASSERT.equal(171,t[3]),ASSERT.equal(52,t[4]),ASSERT.equal(33,t[5]),ASSERT.equal(52,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(0,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"little",t,2),ASSERT.equal(102,t[0]),ASSERT.equal(102,t[1]),ASSERT.equal(186,t[2]),ASSERT.equal(205,t[3]),ASSERT.equal(171,t[4]),ASSERT.equal(52,t[5]),ASSERT.equal(33,t[6]),ASSERT.equal(52,t[7]),ASSERT.equal(0,t[8]),ASSERT.equal(0,t[9]),e=[-2147483648,0],t.fill(102),mod_ctype.wsint64(e,"big",t,0),ASSERT.equal(128,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(0,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"little",t,0),ASSERT.equal(0,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(128,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),e=[-2147483647,-4294967295],t.fill(102),mod_ctype.wsint64(e,"big",t,0),ASSERT.equal(128,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(1,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"little",t,0),ASSERT.equal(1,t[0]),ASSERT.equal(0,t[1]),ASSERT.equal(0,t[2]),ASSERT.equal(0,t[3]),ASSERT.equal(0,t[4]),ASSERT.equal(0,t[5]),ASSERT.equal(0,t[6]),ASSERT.equal(128,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),e=[0,-1],t.fill(102),mod_ctype.wsint64(e,"big",t,0),ASSERT.equal(255,t[0]),ASSERT.equal(255,t[1]),ASSERT.equal(255,t[2]),ASSERT.equal(255,t[3]),ASSERT.equal(255,t[4]),ASSERT.equal(255,t[5]),ASSERT.equal(255,t[6]),ASSERT.equal(255,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9]),t.fill(102),mod_ctype.wsint64(e,"little",t,0),ASSERT.equal(255,t[0]),ASSERT.equal(255,t[1]),ASSERT.equal(255,t[2]),ASSERT.equal(255,t[3]),ASSERT.equal(255,t[4]),ASSERT.equal(255,t[5]),ASSERT.equal(255,t[6]),ASSERT.equal(255,t[7]),ASSERT.equal(102,t[8]),ASSERT.equal(102,t[9])}function testWriteInvalid(){var e,t;t=new Buffer(4),e=[0,0],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,0)},Error,"buffer too small"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,0)},Error,"buffer too small"),t=new Buffer(12),e=[0,0],ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,11)},Error,"write beyond end of buffer"),ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,11)},Error,"write beyond end of buffer"),t=new Buffer(12),e=[3.33,0],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write fractions"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write fractions"),e=[0,3.3],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write fractions"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write fractions"),e=[-3.33,0],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write fractions"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write fractions"),e=[0,-3.3],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write fractions"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write fractions"),e=[3.33,2.42],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write fractions"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write fractions"),e=[3.33,-2.42],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write fractions"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write fractions"),e=[-3.33,-2.42],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write fractions"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write fractions"),e=[-3.33,2.42],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write fractions"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write fractions"),t=new Buffer(12),e=[8388608,-50],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write too large"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write too large"),e=[-8388608,50],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write too large"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write too large"),t=new Buffer(12),e=[2147483648,0],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write too large"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write too large"),e=[2147483647,4294967296],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write too large"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write too large"),e=[0,34359738368],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write too large"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write too large"),e=[0xffffffffff,68719473208],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write too large"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write too large"),e=[35,68719473208],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write too large"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write too large"),e=[-2147483648,-16773688],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write too large"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write too large"),e=[-2147483652,-16773688],ASSERT.throws(function(){mod_ctype.wsint64(e,"big",t,1)},Error,"write too large"),ASSERT.throws(function(){mod_ctype.wsint64(e,"little",t,1)},Error,"write too large")}var mod_ctype=require("../../../ctio.js"),ASSERT=require("assert");testRead(),testWrite(),testWriteZero(),testWriteInvalid()