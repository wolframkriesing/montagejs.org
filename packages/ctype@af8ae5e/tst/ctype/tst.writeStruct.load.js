montageDefine("af8ae5e","tst/ctype/tst.writeStruct",{dependencies:["../../ctype.js","assert"],factory:function(e,t,n){function s(){var e,t,n;e=new r.Parser({endian:"little"}),e.typedef("point_t",[{x:{type:"uint8_t"}},{y:{type:"uint8_t"}}]),t=new Buffer(4),n=[{point1:{type:"point_t"}},{point2:{type:"point_t"}}],e.writeData(n,t,0,[[23,42],[91,18]]),i.ok(t[0]==23),i.ok(t[1]==42),i.ok(t[2]==91),i.ok(t[3]==18)}var r=e("../../ctype.js"),i=e("assert");s()}})