function TestReader(e){R.apply(this),this._buffer=new Buffer(e||100),this._buffer.fill("x"),this._pos=0,this._bufs=10}function TestWriter(){EE.apply(this),this.received=[],this.flush=!1}function test(e,t){count++,tests.push([e,t])}function run(){var e=tests.shift();if(!e)return console.error("ok");var t=e[0],n=e[1];console.log("# %s",t),n({same:assert.deepEqual,ok:assert,equal:assert.equal,end:function(){count--,run()}})}var common=require("../common.js"),R=require("../../lib/_stream_readable"),assert=require("assert"),util=require("util"),EE=require("events").EventEmitter;util.inherits(TestReader,R),TestReader.prototype.read=function(e){if(0===e)return null;var t=this._buffer.length-this._pos;e=e||t,e=Math.max(e,0);var n=Math.min(e,t);if(0===n)return setTimeout(function(){this._pos=0,this._bufs-=1,0>=this._bufs?this.ended||(this.emit("end"),this.ended=!0):this.emit("readable")}.bind(this),10),null;var a=this._buffer.slice(this._pos,this._pos+n);return this._pos+=n,a},util.inherits(TestWriter,EE),TestWriter.prototype.write=function(e){return this.received.push(""+e),this.emit("write",e),!0},TestWriter.prototype.end=function(e){e&&this.write(e),this.emit("end",this.received)};var tests=[],count=0;process.on("exit",function(){assert.equal(count,0)}),process.nextTick(run),test("a most basic test",function(e){function t(){for(var e;null!==(e=n.read(r++));)a.push(""+e);n.once("readable",t)}var n=new TestReader(20),a=[],s=["x","xx","xxx","xxxx","xxxxx","xxxxx","xxxxxxxx","xxxxxxxxx","xxx","xxxxxxxxxxxx","xxxxxxxx","xxxxxxxxxxxxxxx","xxxxx","xxxxxxxxxxxxxxxxxx","xx","xxxxxxxxxxxxxxxxxxxx","xxxxxxxxxxxxxxxxxxxx","xxxxxxxxxxxxxxxxxxxx","xxxxxxxxxxxxxxxxxxxx","xxxxxxxxxxxxxxxxxxxx"];n.on("end",function(){e.same(a,s),e.end()});var r=1;t()}),test("pipe",function(e){var t=new TestReader(5),n=["xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx"],a=new TestWriter;a.on("end",function(t){e.same(t,n),e.end()}),t.pipe(a)}),[1,2,3,4,5,6,7,8,9].forEach(function(e){test("unpipe",function(t){var n=new TestReader(5),a=["xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx"];a=[a.slice(0,e),a.slice(e)];var s=[new TestWriter,new TestWriter],r=e;s[0].on("write",function(){0===--r&&(n.unpipe(),t.equal(n._readableState.pipes,null),s[0].end(),n.pipe(s[1]),t.equal(n._readableState.pipes,s[1]))});var i=0,o=!1,l=!1;s[0].on("end",function(e){t.equal(o,!1),o=!0,i++,t.same(e,a[0])}),s[1].on("end",function(e){t.equal(l,!1),l=!0,i++,t.equal(i,2),t.same(e,a[1]),t.end()}),n.pipe(s[0])})}),test("multipipe",function(e){var t=new TestReader(5),n=[new TestWriter,new TestWriter],a=["xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx"],s=2;n[0].on("end",function(t){e.same(t,a,"first"),0===--s&&e.end()}),n[1].on("end",function(t){e.same(t,a,"second"),0===--s&&e.end()}),t.pipe(n[0]),t.pipe(n[1])}),[1,2,3,4,5,6,7,8,9].forEach(function(e){test("multi-unpipe",function(t){var n=new TestReader(5),a=["xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx","xxxxx"];a=[a.slice(0,e),a.slice(e)];var s=[new TestWriter,new TestWriter,new TestWriter],r=e;s[0].on("write",function(){0===--r&&(n.unpipe(),s[0].end(),n.pipe(s[1]))});var i=0;s[0].on("end",function(e){i++,t.same(e,a[0])}),s[1].on("end",function(e){i++,t.equal(i,2),t.same(e,a[1]),t.end()}),n.pipe(s[0]),n.pipe(s[2])})}),test("back pressure respected",function(e){function t(){}var n=new R({objectMode:!0});n._read=t;var a=0;n.push(["one"]),n.push(["two"]),n.push(["three"]),n.push(["four"]),n.push(null);var s=new R;s.write=function(e){assert.equal(e[0],"one"),s.emit("close"),process.nextTick(function(){n.pipe(i),n.pipe(o)})},s.end=t,n.pipe(s);var r=["two","two","three","three","four","four"],i=new R;i.write=function(e){return assert.equal(e[0],r.shift()),assert.equal(a,0),a++,"four"===e[0]?!0:(setTimeout(function(){a--,i.emit("drain")},10),!1)},i.end=t;var o=new R;o.write=function(e){return assert.equal(e[0],r.shift()),assert.equal(a,1),a++,"four"===e[0]?!0:(setTimeout(function(){a--,o.emit("drain")},50),!1)},o.end=function(){assert.equal(a,2),assert.equal(r.length,0),e.end()}}),test("read(0) for ended streams",function(e){var t=new R,n=!1,a=!1;t._read=function(){},t.push(new Buffer("foo")),t.push(null);var s=t.read(0);assert.equal(s,null);var r=new R;r.write=function(e){n=!0,assert.equal(a,!1),assert.equal(""+e,"foo")},r.end=function(){a=!0,assert.equal(n,!0),e.end()},t.pipe(r)}),test("sync _read ending",function(e){var t=new R,n=!1;t._read=function(){t.push(null)},t.once("end",function(){n=!0}),t.read(),process.nextTick(function(){assert.equal(n,!0),e.end()})}),test("adding readable triggers data flow",function(e){var t=new R({highWaterMark:5}),n=!1,a=0;t._read=function(){2===a++?t.push(null):t.push(new Buffer("asdf"))},t.on("readable",function(){n=!0,t.read()}),t.on("end",function(){e.equal(a,3),e.ok(n),e.end()})});