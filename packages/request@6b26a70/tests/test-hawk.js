var createServer=require("http").createServer,request=require("../index"),hawk=require("hawk"),assert=require("assert"),server=createServer(function(e,t){var n=function(e,t){assert.equal(e,"dh37fgj492je");var n={key:"werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn",algorithm:"sha256",user:"Steve"};return t(null,n)};hawk.server.authenticate(e,n,{},function(e,n,r){t.writeHead(e?401:200,{"Content-Type":"text/plain"}),t.end(e?"Shoosh!":"Hello "+n.user)})});server.listen(8080,function(){var e={key:"werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn",algorithm:"sha256",id:"dh37fgj492je"};request("http://localhost:8080",{hawk:{credentials:e}},function(e,t,n){assert.equal(200,t.statusCode),assert.equal(n,"Hello Steve"),server.close()})})