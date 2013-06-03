var Url=require("url"),Lab=require("lab"),Hawk=require("../lib"),internals={},expect=Lab.expect,before=Lab.before,after=Lab.after,describe=Lab.experiment,it=Lab.test;describe("Hawk",function(){describe("client",function(){describe("#header",function(){it("should return a valid authorization header (sha1)",function(e){var t={id:"123456",key:"2983d45yun89q",algorithm:"sha1"},n=Hawk.client.header("http://example.net/somewhere/over/the/rainbow","POST",{credentials:t,ext:"Bazinga!",timestamp:1353809207,nonce:"Ygvqdz",payload:"something to write about"}).field;expect(n).to.equal('Hawk id="123456", ts="1353809207", nonce="Ygvqdz", hash="bsvY3IfUllw6V5rvk4tStEvpBhE=", ext="Bazinga!", mac="qbf1ZPG/r/e06F4ht+T77LXi5vw="'),e()}),it("should return a valid authorization header (sha256)",function(e){var t={id:"123456",key:"2983d45yun89q",algorithm:"sha256"},n=Hawk.client.header("https://example.net/somewhere/over/the/rainbow","POST",{credentials:t,ext:"Bazinga!",timestamp:1353809207,nonce:"Ygvqdz",payload:"something to write about",contentType:"text/plain"}).field;expect(n).to.equal('Hawk id="123456", ts="1353809207", nonce="Ygvqdz", hash="2QfCt3GuY9HQnHWyWD3wX68ZOKbynqlfYmuO2ZBRqtY=", ext="Bazinga!", mac="q1CwFoSHzPZSkbIvl0oYlD+91rBUEvFk763nMjMndj8="'),e()}),it("should return a valid authorization header (no ext)",function(e){var t={id:"123456",key:"2983d45yun89q",algorithm:"sha256"},n=Hawk.client.header("https://example.net/somewhere/over/the/rainbow","POST",{credentials:t,timestamp:1353809207,nonce:"Ygvqdz",payload:"something to write about",contentType:"text/plain"}).field;expect(n).to.equal('Hawk id="123456", ts="1353809207", nonce="Ygvqdz", hash="2QfCt3GuY9HQnHWyWD3wX68ZOKbynqlfYmuO2ZBRqtY=", mac="HTgtd0jPI6E4izx8e4OHdO36q00xFCU0FolNq3RiCYs="'),e()}),it("should return an empty authorization header on missing options",function(e){var t=Hawk.client.header("https://example.net/somewhere/over/the/rainbow","POST").field;expect(t).to.equal(""),e()}),it("should return an empty authorization header on invalid credentials",function(e){var t={key:"2983d45yun89q",algorithm:"sha256"},n=Hawk.client.header("https://example.net/somewhere/over/the/rainbow","POST",{credentials:t,ext:"Bazinga!",timestamp:1353809207}).field;expect(n).to.equal(""),e()}),it("should return an empty authorization header on invalid algorithm",function(e){var t={id:"123456",key:"2983d45yun89q",algorithm:"hmac-sha-0"},n=Hawk.client.header("https://example.net/somewhere/over/the/rainbow","POST",{credentials:t,payload:"something, anything!",ext:"Bazinga!",timestamp:1353809207}).field;expect(n).to.equal(""),e()})}),describe("#authenticate",function(){it("should return false on invalid header",function(e){var t={headers:{"server-authorization":'Hawk mac="abc", bad="xyz"'}};expect(Hawk.client.authenticate(t,{})).to.equal(!1),e()}),it("should return false on invalid mac",function(e){var t={headers:{"content-type":"text/plain","server-authorization":'Hawk mac="_IJRsMl/4oL+nn+vKoeVZPdCHXB4yJkNnBbTbHFZUYE=", hash="f9cDF/TDm7TkYRLnGwRMfeDzT6LixQVLvrIKhh0vgmM=", ext="response-specific"'}},n={method:"POST",host:"example.com",port:"8080",resource:"/resource/4?filter=a",ts:"1362336900",nonce:"eb5S_L",hash:"nJjkVtBE5Y/Bk38Aiokwn0jiJxt/0S2WRSUwWLCf5xk=",ext:"some-app-data",app:undefined,dlg:undefined,mac:"BlmSe8K+pbKIb6YsZCnt4E1GrYvY1AaYayNR82dGpIk=",id:"123456"},r={id:"123456",key:"werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn",algorithm:"sha256",user:"steve"};expect(Hawk.client.authenticate(t,r,n)).to.equal(!1),e()}),it("should return true on ignoring hash",function(e){var t={headers:{"content-type":"text/plain","server-authorization":'Hawk mac="XIJRsMl/4oL+nn+vKoeVZPdCHXB4yJkNnBbTbHFZUYE=", hash="f9cDF/TDm7TkYRLnGwRMfeDzT6LixQVLvrIKhh0vgmM=", ext="response-specific"'}},n={method:"POST",host:"example.com",port:"8080",resource:"/resource/4?filter=a",ts:"1362336900",nonce:"eb5S_L",hash:"nJjkVtBE5Y/Bk38Aiokwn0jiJxt/0S2WRSUwWLCf5xk=",ext:"some-app-data",app:undefined,dlg:undefined,mac:"BlmSe8K+pbKIb6YsZCnt4E1GrYvY1AaYayNR82dGpIk=",id:"123456"},r={id:"123456",key:"werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn",algorithm:"sha256",user:"steve"};expect(Hawk.client.authenticate(t,r,n)).to.equal(!0),e()}),it("should fail on invalid WWW-Authenticate header format",function(e){var t='Hawk ts="1362346425875", tsm="PhwayS28vtnn3qbv0mqRBYSXebN/zggEtucfeZ620Zo=", x="Stale timestamp"';expect(Hawk.client.authenticate({headers:{"www-authenticate":t}},{})).to.equal(!1),e()}),it("should fail on invalid WWW-Authenticate header format",function(e){var t={id:"123456",key:"werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn",algorithm:"sha256",user:"steve"},n='Hawk ts="1362346425875", tsm="hwayS28vtnn3qbv0mqRBYSXebN/zggEtucfeZ620Zo=", error="Stale timestamp"';expect(Hawk.client.authenticate({headers:{"www-authenticate":n}},t)).to.equal(!1),e()})})})})