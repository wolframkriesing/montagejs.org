var Lab=require("lab"),Hoek=require("hoek"),Hawk=require("../lib"),internals={},expect=Lab.expect,before=Lab.before,after=Lab.after,describe=Lab.experiment,it=Lab.test;describe("Hawk",function(){describe("README",function(){describe("core",function(){var e={id:"dh37fgj492je",key:"werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn",algorithm:"sha256"},t={credentials:e,timestamp:1353832234,nonce:"j4h3g2",ext:"some-app-ext-data"};it("should generate a header protocol example",function(e){var n=Hawk.client.header("http://example.com:8000/resource/1?b=1&a=2","GET",t).field;expect(n).to.equal('Hawk id="dh37fgj492je", ts="1353832234", nonce="j4h3g2", ext="some-app-ext-data", mac="6R4rV5iE+NPoym+WwjeHzjAGXUtLNIxmo1vpMofpLAE="'),e()}),it("should generate a normalized string protocol example",function(n){var r=Hawk.crypto.generateNormalizedString("header",{credentials:e,ts:t.timestamp,nonce:t.nonce,method:"GET",resource:"/resource?a=1&b=2",host:"example.com",port:8e3,ext:t.ext});expect(r).to.equal("hawk.1.header\n1353832234\nj4h3g2\nGET\n/resource?a=1&b=2\nexample.com\n8000\n\nsome-app-ext-data\n"),n()});var n=Hoek.clone(t);n.payload="Thank you for flying Hawk",n.contentType="text/plain",it("should generate a header protocol example (with payload)",function(e){var t=Hawk.client.header("http://example.com:8000/resource/1?b=1&a=2","POST",n).field;expect(t).to.equal('Hawk id="dh37fgj492je", ts="1353832234", nonce="j4h3g2", hash="Yi9LfIIFRtBEPt74PVmbTF/xVAwPn7ub15ePICfgnuY=", ext="some-app-ext-data", mac="aSe1DERmZuRl3pI36/9BdZmnErTw3sNzOOAUlfeKjVw="'),e()}),it("should generate a normalized string protocol example (with payload)",function(r){var i=Hawk.crypto.generateNormalizedString("header",{credentials:e,ts:t.timestamp,nonce:t.nonce,method:"POST",resource:"/resource?a=1&b=2",host:"example.com",port:8e3,hash:Hawk.crypto.calculatePayloadHash(n.payload,e.algorithm,n.contentType),ext:t.ext});expect(i).to.equal("hawk.1.header\n1353832234\nj4h3g2\nPOST\n/resource?a=1&b=2\nexample.com\n8000\nYi9LfIIFRtBEPt74PVmbTF/xVAwPn7ub15ePICfgnuY=\nsome-app-ext-data\n"),r()})})})})