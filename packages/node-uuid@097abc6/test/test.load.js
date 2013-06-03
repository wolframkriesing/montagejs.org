montageDefine("097abc6","test/test",{dependencies:["../uuid"],factory:function(e,t,n){function r(e,t){t=t||"log",typeof document!="undefined"&&document.write('<div class="'+t+'">'+e.replace(/\n/g,"<br />")+"</div>");if(typeof console!="undefined"){var n={log:"[39m",warn:"[33m",error:"[31m"};console[t](n[t]+e+n.log)}}function i(e){r(e,"log")}function s(e){r(e,"warn")}function o(e){r(e,"error")}function u(e,t){e?i("Pass: "+t):o("FAIL: "+t)}function f(e,t){t=t.map(function(e){return e.split("-").reverse().join("-")}).sort();var n=[].concat(t).sort();u(n.toString()==t.toString(),e+" have expected order")}function N(e,t){return Math.round(1e4*(e-t)/t)/100}function C(e,t){i(e+": "+(T/(Date.now()-t)*1e3|0)+" uuids/second")}this.uuid||(uuid=e("../uuid"));var a=1321644961388;f("uuids with current time",[uuid.v1(),uuid.v1(),uuid.v1(),uuid.v1(),uuid.v1()]),f("uuids with time option",[uuid.v1({msecs:a-36e6}),uuid.v1({msecs:a-1}),uuid.v1({msecs:a}),uuid.v1({msecs:a+1}),uuid.v1({msecs:a+24192e5})]),u(uuid.v1({msecs:a})!=uuid.v1({msecs:a}),"IDs created at same msec are different");var l=!1;try{uuid.v1({msecs:a,nsecs:1e4})}catch(c){l=!0}u(l,"Exception thrown when > 10K ids created in 1 ms");var h=uuid.v1({msecs:a}),p=uuid.v1({msecs:a-1});u(parseInt(p.split("-")[3],16)-parseInt(h.split("-")[3],16)===1,"Clock regression by msec increments the clockseq");var d=uuid.v1({msecs:a,nsecs:10}),v=uuid.v1({msecs:a,nsecs:9});u(parseInt(v.split("-")[3],16)-parseInt(d.split("-")[3],16)===1,"Clock regression by nsec increments the clockseq");var m=uuid.v1({msecs:1321651533573,nsecs:5432,clockseq:14428,node:[97,205,60,187,50,16]});u(m=="d9428888-122b-11e1-b85c-61cd3cbb3210","Explicit options produce expected id");var g=uuid.v1({msecs:a,nsecs:9999}),y=uuid.v1({msecs:a+1,nsecs:0}),b=g.split("-")[0],w=y.split("-")[0],E=parseInt(w,16)-parseInt(b,16);u(E===1,"Ids spanning 1ms boundary are 100ns apart"),m="00112233445566778899aabbccddeeff",u(uuid.unparse(uuid.parse(m.substr(0,10)))=="00112233-4400-0000-0000-000000000000","Short parse"),u(uuid.unparse(uuid.parse("(this is the uuid -> "+m+m))=="00112233-4455-6677-8899-aabbccddeeff","Dirty parse");var S={v1:uuid.v1,v4:uuid.v4},x={v1:/[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i,v4:/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i},T=1e4;for(var k in S){var L={},A=0,O=S[k],M=x[k];i("\nSanity check "+T+" "+k+" uuids");for(var _=0,D=0;_<T;_++){m=O();if(!M.test(m))throw Error(m+" is not a valid UUID string");m!=uuid.unparse(uuid.parse(m))&&u(fail,m+" is not a valid id");if(k=="v4"){var P=m.replace(/-/g,"").split("");for(var H=P.length-1;H>=0;H--){var B=P[H];A=Math.max(A,L[B]=(L[B]||0)+1)}}}if(k=="v4"){var j=200*Math.sqrt(1/T);i("\nChecking v4 randomness.  Distribution of Hex Digits (% deviation from ideal)");for(var _=0;_<16;_++){var B=_.toString(16),F="",I=L[B],q=Math.round(I/A*100|0),R=T*30/16;_==4?R=T*2.875:_>=8&&_<=11?R=T*2.125:R=T*30/16;var U=N(I,R),z=I/A*50|0;while(z--)F+="=";u(Math.abs(U)<j,B+" |"+F+"| "+L[B]+" ("+U+"% < "+j+"%)")}}}for(var k in S){i("\nPerformance testing "+k+" UUIDs");var O=S[k],W=new uuid.BufferClass(16);for(var _=0,X=Date.now();_<T;_++)O();C("uuid."+k+"()",X);for(var _=0,X=Date.now();_<T;_++)O("binary");C("uuid."+k+"('binary')",X);for(var _=0,X=Date.now();_<T;_++)O("binary",W);C("uuid."+k+"('binary', buffer)",X)}}})