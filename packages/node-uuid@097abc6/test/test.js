function _log(e,t){t=t||"log",typeof document!="undefined"&&document.write('<div class="'+t+'">'+e.replace(/\n/g,"<br />")+"</div>");if(typeof console!="undefined"){var n={log:"[39m",warn:"[33m",error:"[31m"};console[t](n[t]+e+n.log)}}function log(e){_log(e,"log")}function warn(e){_log(e,"warn")}function error(e){_log(e,"error")}function assert(e,t){e?log("Pass: "+t):error("FAIL: "+t)}function compare(e,t){t=t.map(function(e){return e.split("-").reverse().join("-")}).sort();var n=[].concat(t).sort();assert(n.toString()==t.toString(),e+" have expected order")}function divergence(e,t){return Math.round(1e4*(e-t)/t)/100}function rate(e,t){log(e+": "+(N/(Date.now()-t)*1e3|0)+" uuids/second")}this.uuid||(uuid=require("../uuid"));var TIME=1321644961388;compare("uuids with current time",[uuid.v1(),uuid.v1(),uuid.v1(),uuid.v1(),uuid.v1()]),compare("uuids with time option",[uuid.v1({msecs:TIME-36e6}),uuid.v1({msecs:TIME-1}),uuid.v1({msecs:TIME}),uuid.v1({msecs:TIME+1}),uuid.v1({msecs:TIME+24192e5})]),assert(uuid.v1({msecs:TIME})!=uuid.v1({msecs:TIME}),"IDs created at same msec are different");var thrown=!1;try{uuid.v1({msecs:TIME,nsecs:1e4})}catch(e){thrown=!0}assert(thrown,"Exception thrown when > 10K ids created in 1 ms");var uidt=uuid.v1({msecs:TIME}),uidtb=uuid.v1({msecs:TIME-1});assert(parseInt(uidtb.split("-")[3],16)-parseInt(uidt.split("-")[3],16)===1,"Clock regression by msec increments the clockseq");var uidtn=uuid.v1({msecs:TIME,nsecs:10}),uidtnb=uuid.v1({msecs:TIME,nsecs:9});assert(parseInt(uidtnb.split("-")[3],16)-parseInt(uidtn.split("-")[3],16)===1,"Clock regression by nsec increments the clockseq");var id=uuid.v1({msecs:1321651533573,nsecs:5432,clockseq:14428,node:[97,205,60,187,50,16]});assert(id=="d9428888-122b-11e1-b85c-61cd3cbb3210","Explicit options produce expected id");var u0=uuid.v1({msecs:TIME,nsecs:9999}),u1=uuid.v1({msecs:TIME+1,nsecs:0}),before=u0.split("-")[0],after=u1.split("-")[0],dt=parseInt(after,16)-parseInt(before,16);assert(dt===1,"Ids spanning 1ms boundary are 100ns apart"),id="00112233445566778899aabbccddeeff",assert(uuid.unparse(uuid.parse(id.substr(0,10)))=="00112233-4400-0000-0000-000000000000","Short parse"),assert(uuid.unparse(uuid.parse("(this is the uuid -> "+id+id))=="00112233-4455-6677-8899-aabbccddeeff","Dirty parse");var generators={v1:uuid.v1,v4:uuid.v4},UUID_FORMAT={v1:/[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i,v4:/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i},N=1e4;for(var version in generators){var counts={},max=0,generator=generators[version],format=UUID_FORMAT[version];log("\nSanity check "+N+" "+version+" uuids");for(var i=0,ok=0;i<N;i++){id=generator();if(!format.test(id))throw Error(id+" is not a valid UUID string");id!=uuid.unparse(uuid.parse(id))&&assert(fail,id+" is not a valid id");if(version=="v4"){var digits=id.replace(/-/g,"").split("");for(var j=digits.length-1;j>=0;j--){var c=digits[j];max=Math.max(max,counts[c]=(counts[c]||0)+1)}}}if(version=="v4"){var limit=200*Math.sqrt(1/N);log("\nChecking v4 randomness.  Distribution of Hex Digits (% deviation from ideal)");for(var i=0;i<16;i++){var c=i.toString(16),bar="",n=counts[c],p=Math.round(n/max*100|0),ideal=N*30/16;i==4?ideal=N*2.875:i>=8&&i<=11?ideal=N*2.125:ideal=N*30/16;var d=divergence(n,ideal),s=n/max*50|0;while(s--)bar+="=";assert(Math.abs(d)<limit,c+" |"+bar+"| "+counts[c]+" ("+d+"% < "+limit+"%)")}}}for(var version in generators){log("\nPerformance testing "+version+" UUIDs");var generator=generators[version],buf=new uuid.BufferClass(16);for(var i=0,t=Date.now();i<N;i++)generator();rate("uuid."+version+"()",t);for(var i=0,t=Date.now();i<N;i++)generator("binary");rate("uuid."+version+"('binary')",t);for(var i=0,t=Date.now();i<N;i++)generator("binary",buf);rate("uuid."+version+"('binary', buffer)",t)}