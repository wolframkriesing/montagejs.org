montageDefine("af8ae5e","tst/ctio/int/tst.64",{dependencies:["../../../ctio.js","assert"],factory:function(e,t,n){function s(){var e,t;t=new Buffer(10),t[0]=50,t[1]=101,t[2]=66,t[3]=86,t[4]=35,t[5]=255,t[6]=255,t[7]=255,t[8]=137,t[9]=17,e=r.rsint64(t,"big",0),i.equal(845496918,e[0]),i.equal(603979775,e[1]),e=r.rsint64(t,"big",1),i.equal(1698846243,e[0]),i.equal(4294967177,e[1]),e=r.rsint64(t,"big",2),i.equal(1112941567,e[0]),i.equal(4294936849,e[1]),e=r.rsint64(t,"little",0),i.equal(-220,e[0]),i.equal(-2847775438,e[1]),e=r.rsint64(t,"little",1),i.equal(-1979711488,e[0]),i.equal(-3702111643,e[1]),e=r.rsint64(t,"little",2),i.equal(294256639,e[0]),i.equal(4280505922,e[1]),t.fill(0),e=r.rsint64(t,"big",0),i.equal(0,e[0]),i.equal(0,e[1]),e=r.rsint64(t,"big",1),i.equal(0,e[0]),i.equal(0,e[1]),e=r.rsint64(t,"big",2),i.equal(0,e[0]),i.equal(0,e[1]),e=r.rsint64(t,"little",0),i.equal(0,e[0]),i.equal(0,e[1]),e=r.rsint64(t,"little",1),i.equal(0,e[0]),i.equal(0,e[1]),e=r.rsint64(t,"little",2),i.equal(0,e[0]),i.equal(0,e[1]),t.fill(255),e=r.rsint64(t,"big",0),i.equal(0,e[0]),i.equal(-1,e[1]),e=r.rsint64(t,"big",1),i.equal(0,e[0]),i.equal(-1,e[1]),e=r.rsint64(t,"big",2),i.equal(0,e[0]),i.equal(-1,e[1]),e=r.rsint64(t,"little",0),i.equal(0,e[0]),i.equal(-1,e[1]),e=r.rsint64(t,"little",1),i.equal(0,e[0]),i.equal(-1,e[1]),e=r.rsint64(t,"little",2),i.equal(0,e[0]),i.equal(-1,e[1]),t[0]=128,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,e=r.rsint64(t,"big",0),i.equal(-2147483648,e[0]),i.equal(0,e[1]),t[7]=128,t[6]=0,t[5]=0,t[4]=0,t[3]=0,t[2]=0,t[1]=0,t[0]=0,e=r.rsint64(t,"little",0),i.equal(-2147483648,e[0]),i.equal(0,e[1]),t[0]=128,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=1,e=r.rsint64(t,"big",0),i.equal(-2147483647,e[0]),i.equal(-4294967295,e[1])}function o(){var e,t;t=new Buffer(10),t.fill(102),e=[0,0],r.wsint64(e,"big",t,0),i.equal(0,t[0]),i.equal(0,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(0,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),t.fill(102),e=[0,0],r.wsint64(e,"big",t,1),i.equal(102,t[0]),i.equal(0,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(0,t[7]),i.equal(0,t[8]),i.equal(102,t[9]),t.fill(102),e=[0,0],r.wsint64(e,"big",t,2),i.equal(102,t[0]),i.equal(102,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(0,t[7]),i.equal(0,t[8]),i.equal(0,t[9]),t.fill(102),e=[0,0],r.wsint64(e,"little",t,0),i.equal(0,t[0]),i.equal(0,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(0,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),t.fill(102),e=[0,0],r.wsint64(e,"little",t,1),i.equal(102,t[0]),i.equal(0,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(0,t[7]),i.equal(0,t[8]),i.equal(102,t[9]),t.fill(102),e=[0,0],r.wsint64(e,"little",t,2),i.equal(102,t[0]),i.equal(102,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(0,t[7]),i.equal(0,t[8]),i.equal(0,t[9])}function u(){var e,t;t=new Buffer(10),e=[2311254,135],t.fill(102),r.wsint64(e,"big",t,0),i.equal(0,t[0]),i.equal(35,t[1]),i.equal(68,t[2]),i.equal(86,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(135,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"big",t,1),i.equal(102,t[0]),i.equal(0,t[1]),i.equal(35,t[2]),i.equal(68,t[3]),i.equal(86,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(0,t[7]),i.equal(135,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"big",t,2),i.equal(102,t[0]),i.equal(102,t[1]),i.equal(0,t[2]),i.equal(35,t[3]),i.equal(68,t[4]),i.equal(86,t[5]),i.equal(0,t[6]),i.equal(0,t[7]),i.equal(0,t[8]),i.equal(135,t[9]),t.fill(102),r.wsint64(e,"little",t,0),i.equal(135,t[0]),i.equal(0,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(86,t[4]),i.equal(68,t[5]),i.equal(35,t[6]),i.equal(0,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"little",t,1),i.equal(102,t[0]),i.equal(135,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(86,t[5]),i.equal(68,t[6]),i.equal(35,t[7]),i.equal(0,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"little",t,2),i.equal(102,t[0]),i.equal(102,t[1]),i.equal(135,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(86,t[6]),i.equal(68,t[7]),i.equal(35,t[8]),i.equal(0,t[9]),e=[13345,883674554],t.fill(102),r.wsint64(e,"big",t,0),i.equal(0,t[0]),i.equal(0,t[1]),i.equal(52,t[2]),i.equal(33,t[3]),i.equal(52,t[4]),i.equal(171,t[5]),i.equal(205,t[6]),i.equal(186,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"big",t,1),i.equal(102,t[0]),i.equal(0,t[1]),i.equal(0,t[2]),i.equal(52,t[3]),i.equal(33,t[4]),i.equal(52,t[5]),i.equal(171,t[6]),i.equal(205,t[7]),i.equal(186,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"big",t,2),i.equal(102,t[0]),i.equal(102,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(52,t[4]),i.equal(33,t[5]),i.equal(52,t[6]),i.equal(171,t[7]),i.equal(205,t[8]),i.equal(186,t[9]),t.fill(102),r.wsint64(e,"little",t,0),i.equal(186,t[0]),i.equal(205,t[1]),i.equal(171,t[2]),i.equal(52,t[3]),i.equal(33,t[4]),i.equal(52,t[5]),i.equal(0,t[6]),i.equal(0,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"little",t,1),i.equal(102,t[0]),i.equal(186,t[1]),i.equal(205,t[2]),i.equal(171,t[3]),i.equal(52,t[4]),i.equal(33,t[5]),i.equal(52,t[6]),i.equal(0,t[7]),i.equal(0,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"little",t,2),i.equal(102,t[0]),i.equal(102,t[1]),i.equal(186,t[2]),i.equal(205,t[3]),i.equal(171,t[4]),i.equal(52,t[5]),i.equal(33,t[6]),i.equal(52,t[7]),i.equal(0,t[8]),i.equal(0,t[9]),e=[-2147483648,0],t.fill(102),r.wsint64(e,"big",t,0),i.equal(128,t[0]),i.equal(0,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(0,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"little",t,0),i.equal(0,t[0]),i.equal(0,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(128,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),e=[-2147483647,-4294967295],t.fill(102),r.wsint64(e,"big",t,0),i.equal(128,t[0]),i.equal(0,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(1,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"little",t,0),i.equal(1,t[0]),i.equal(0,t[1]),i.equal(0,t[2]),i.equal(0,t[3]),i.equal(0,t[4]),i.equal(0,t[5]),i.equal(0,t[6]),i.equal(128,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),e=[0,-1],t.fill(102),r.wsint64(e,"big",t,0),i.equal(255,t[0]),i.equal(255,t[1]),i.equal(255,t[2]),i.equal(255,t[3]),i.equal(255,t[4]),i.equal(255,t[5]),i.equal(255,t[6]),i.equal(255,t[7]),i.equal(102,t[8]),i.equal(102,t[9]),t.fill(102),r.wsint64(e,"little",t,0),i.equal(255,t[0]),i.equal(255,t[1]),i.equal(255,t[2]),i.equal(255,t[3]),i.equal(255,t[4]),i.equal(255,t[5]),i.equal(255,t[6]),i.equal(255,t[7]),i.equal(102,t[8]),i.equal(102,t[9])}function a(){var e,t;t=new Buffer(4),e=[0,0],i.throws(function(){r.wsint64(e,"big",t,0)},Error,"buffer too small"),i.throws(function(){r.wsint64(e,"little",t,0)},Error,"buffer too small"),t=new Buffer(12),e=[0,0],i.throws(function(){r.wsint64(e,"little",t,11)},Error,"write beyond end of buffer"),i.throws(function(){r.wsint64(e,"big",t,11)},Error,"write beyond end of buffer"),t=new Buffer(12),e=[3.33,0],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write fractions"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write fractions"),e=[0,3.3],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write fractions"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write fractions"),e=[-3.33,0],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write fractions"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write fractions"),e=[0,-3.3],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write fractions"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write fractions"),e=[3.33,2.42],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write fractions"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write fractions"),e=[3.33,-2.42],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write fractions"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write fractions"),e=[-3.33,-2.42],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write fractions"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write fractions"),e=[-3.33,2.42],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write fractions"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write fractions"),t=new Buffer(12),e=[8388608,-50],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write too large"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write too large"),e=[-8388608,50],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write too large"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write too large"),t=new Buffer(12),e=[2147483648,0],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write too large"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write too large"),e=[2147483647,4294967296],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write too large"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write too large"),e=[0,34359738368],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write too large"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write too large"),e=[0xffffffffff,68719473208],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write too large"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write too large"),e=[35,68719473208],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write too large"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write too large"),e=[-2147483648,-16773688],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write too large"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write too large"),e=[-2147483652,-16773688],i.throws(function(){r.wsint64(e,"big",t,1)},Error,"write too large"),i.throws(function(){r.wsint64(e,"little",t,1)},Error,"write too large")}var r=e("../../../ctio.js"),i=e("assert");s(),u(),o(),a()}})