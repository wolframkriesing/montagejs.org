montageDefine("5d3b9c0","runtests_new",{dependencies:["util","fs","./new/htmlparser"],factory:function(e,t,n){var r=e("util"),i=e("fs"),s=e("./new/htmlparser"),o="./tests",u=5,a=i.readdirSync(o),f=0,l=0;for(var c in a){f++;var h=a[c].split(".");h.pop();var p=h.join("."),d=e(o+"/"+p),v=function(t){t&&r.puts("Handler error: "+t)},m=d.type=="rss"?new s.RssHandler(v,d.options.handler):new s.DefaultHandler(v,d.options.handler),g=new s.Parser(m,d.options.parser);g.parseComplete(d.html);var y=m.dom,b=0;g.reset();while(b<d.html.length)g.parseChunk(d.html.substring(b,b+u)),b+=u;g.done();var w=m.dom,E=r.inspect(y,!1,null)===r.inspect(d.expected,!1,null)&&r.inspect(w,!1,null)===r.inspect(d.expected,!1,null);r.puts("["+d.name+"]: "+(E?"passed":"FAILED")),E||(l++,r.puts("== Complete =="),r.puts(r.inspect(y,!1,null)),r.puts("== Chunked =="),r.puts(r.inspect(w,!1,null)),r.puts("== Expected =="),r.puts(r.inspect(d.expected,!1,null)))}r.puts("Total tests: "+f),r.puts("Failed tests: "+l)}})