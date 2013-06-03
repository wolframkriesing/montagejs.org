var Url=require("url"),Lab=require("lab"),Hawk=require("../lib"),internals={},expect=Lab.expect,before=Lab.before,after=Lab.after,describe=Lab.experiment,it=Lab.test;describe("Hawk",function(){var e=function(e,t){var n={id:e,key:"werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn",algorithm:e==="1"?"sha1":"sha256",user:"steve"};return t(null,n)};it("should generate a header then successfully parse it (configuration)",function(t){var n={method:"GET",url:"/resource/4?filter=a",host:"example.com",port:8080};e("123456",function(r,i){n.authorization=Hawk.client.header(Url.parse("http://example.com:8080/resource/4?filter=a"),n.method,{credentials:i,ext:"some-app-data"}).field,expect(n.authorization).to.exist,Hawk.server.authenticate(n,e,{},function(e,n,r){expect(e).to.not.exist,expect(n.user).to.equal("steve"),expect(r.ext).to.equal("some-app-data"),t()})})}),it("should generate a header then successfully parse it (node request)",function(t){var n={method:"POST",url:"/resource/4?filter=a",headers:{host:"example.com:8080","content-type":"text/plain;x=y"}},r="some not so random text";e("123456",function(i,s){var o=Hawk.client.header("http://example.com:8080/resource/4?filter=a",n.method,{credentials:s,ext:"some-app-data",payload:r,contentType:n.headers["content-type"]});n.headers.authorization=o.field,Hawk.server.authenticate(n,e,{},function(e,i,s){expect(e).to.not.exist,expect(i.user).to.equal("steve"),expect(s.ext).to.equal("some-app-data"),expect(Hawk.server.authenticatePayload(r,i,s,n.headers["content-type"])).to.equal(!0);var o={headers:{"content-type":"text/plain"}};o.headers["server-authorization"]=Hawk.server.header(i,s,{payload:"some reply",contentType:"text/plain",ext:"response-specific"}),expect(o.headers["server-authorization"]).to.exist,expect(Hawk.client.authenticate(o,i,s,{payload:"some reply"})).to.equal(!0),t()})})}),it("should generate a header then successfully parse it (no server header options)",function(t){var n={method:"POST",url:"/resource/4?filter=a",headers:{host:"example.com:8080","content-type":"text/plain;x=y"}},r="some not so random text";e("123456",function(i,s){var o=Hawk.client.header("http://example.com:8080/resource/4?filter=a",n.method,{credentials:s,ext:"some-app-data",payload:r,contentType:n.headers["content-type"]});n.headers.authorization=o.field,Hawk.server.authenticate(n,e,{},function(e,i,s){expect(e).to.not.exist,expect(i.user).to.equal("steve"),expect(s.ext).to.equal("some-app-data"),expect(Hawk.server.authenticatePayload(r,i,s,n.headers["content-type"])).to.equal(!0);var o={headers:{"content-type":"text/plain"}};o.headers["server-authorization"]=Hawk.server.header(i,s),expect(o.headers["server-authorization"]).to.exist,expect(Hawk.client.authenticate(o,i,s)).to.equal(!0),t()})})}),it("should generate a header then fails to parse it (missing server header hash)",function(t){var n={method:"POST",url:"/resource/4?filter=a",headers:{host:"example.com:8080","content-type":"text/plain;x=y"}},r="some not so random text";e("123456",function(i,s){var o=Hawk.client.header("http://example.com:8080/resource/4?filter=a",n.method,{credentials:s,ext:"some-app-data",payload:r,contentType:n.headers["content-type"]});n.headers.authorization=o.field,Hawk.server.authenticate(n,e,{},function(e,i,s){expect(e).to.not.exist,expect(i.user).to.equal("steve"),expect(s.ext).to.equal("some-app-data"),expect(Hawk.server.authenticatePayload(r,i,s,n.headers["content-type"])).to.equal(!0);var o={headers:{"content-type":"text/plain"}};o.headers["server-authorization"]=Hawk.server.header(i,s),expect(o.headers["server-authorization"]).to.exist,expect(Hawk.client.authenticate(o,i,s,{payload:"some reply"})).to.equal(!1),t()})})}),it("should generate a header then successfully parse it (with hash)",function(t){var n={method:"GET",url:"/resource/4?filter=a",host:"example.com",port:8080};e("123456",function(r,i){n.authorization=Hawk.client.header("http://example.com:8080/resource/4?filter=a",n.method,{credentials:i,payload:"hola!",ext:"some-app-data"}).field,Hawk.server.authenticate(n,e,{},function(e,n,r){expect(e).to.not.exist,expect(n.user).to.equal("steve"),expect(r.ext).to.equal("some-app-data"),t()})})}),it("should generate a header then successfully parse it then validate payload",function(t){var n={method:"GET",url:"/resource/4?filter=a",host:"example.com",port:8080};e("123456",function(r,i){n.authorization=Hawk.client.header("http://example.com:8080/resource/4?filter=a",n.method,{credentials:i,payload:"hola!",ext:"some-app-data"}).field,Hawk.server.authenticate(n,e,{},function(e,n,r){expect(e).to.not.exist,expect(n.user).to.equal("steve"),expect(r.ext).to.equal("some-app-data"),expect(Hawk.server.authenticatePayload("hola!",n,r)).to.be.true,expect(Hawk.server.authenticatePayload("hello!",n,r)).to.be.false,t()})})}),it("should generate a header then successfully parse it (app)",function(t){var n={method:"GET",url:"/resource/4?filter=a",host:"example.com",port:8080};e("123456",function(r,i){n.authorization=Hawk.client.header("http://example.com:8080/resource/4?filter=a",n.method,{credentials:i,ext:"some-app-data",app:"asd23ased"}).field,Hawk.server.authenticate(n,e,{},function(e,n,r){expect(e).to.not.exist,expect(n.user).to.equal("steve"),expect(r.ext).to.equal("some-app-data"),expect(r.app).to.equal("asd23ased"),t()})})}),it("should generate a header then successfully parse it (app, dlg)",function(t){var n={method:"GET",url:"/resource/4?filter=a",host:"example.com",port:8080};e("123456",function(r,i){n.authorization=Hawk.client.header("http://example.com:8080/resource/4?filter=a",n.method,{credentials:i,ext:"some-app-data",app:"asd23ased",dlg:"23434szr3q4d"}).field,Hawk.server.authenticate(n,e,{},function(e,n,r){expect(e).to.not.exist,expect(n.user).to.equal("steve"),expect(r.ext).to.equal("some-app-data"),expect(r.app).to.equal("asd23ased"),expect(r.dlg).to.equal("23434szr3q4d"),t()})})}),it("should generate a header then fail authentication due to bad hash",function(t){var n={method:"GET",url:"/resource/4?filter=a",host:"example.com",port:8080};e("123456",function(r,i){n.authorization=Hawk.client.header("http://example.com:8080/resource/4?filter=a",n.method,{credentials:i,payload:"hola!",ext:"some-app-data"}).field,Hawk.server.authenticate(n,e,{payload:"byebye!"},function(e,n,r){expect(e).to.exist,expect(e.response.payload.message).to.equal("Bad payload hash"),t()})})}),it("should generate a header for one resource then fail to authenticate another",function(t){var n={method:"GET",url:"/resource/4?filter=a",host:"example.com",port:8080};e("123456",function(r,i){n.authorization=Hawk.client.header("http://example.com:8080/resource/4?filter=a",n.method,{credentials:i,ext:"some-app-data"}).field,n.url="/something/else",Hawk.server.authenticate(n,e,{},function(e,n,r){expect(e).to.exist,expect(n).to.exist,t()})})})})