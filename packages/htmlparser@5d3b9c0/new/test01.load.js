montageDefine("5d3b9c0","new/test01",{dependencies:[],factory:function(e,t,n){function o(e){switch(e.mode){case i.Text:return u(e);case i.Tag:return f(e);case i.Attr:return d(e);case i.CData:return v(e);case i.Comment:return m(e)}}function u(e){var t=e.data.indexOf("<",e.pos),n=t===-1?e.data.substring(e.pos,e.data.length):e.data.substring(e.pos,t);if(t===-1)e.pendingText||(e.pendingText=[]),e.pendingText.push(e.data.substring(e.pos,e.data.length)),e.pos=e.data.length;else{var n;e.pendingText?(e.pendingText.push(e.data.substring(e.pos,t)),n=e.pendingText.join(""),e.pendingText=null):n=e.data.substring(e.pos,t),e.output.push({type:i.Text,data:n}),e.pos=t+1,e.mode=i.Tag}}function f(e){a.lastIndex=e.pos;var t=a.exec(e.data);if(t){if(t[2].substr(0,3)==="!--"){e.mode=i.Comment,e.pos+=3;return}if(t[2].substr(0,8)==="![CDATA["){e.mode=i.CData,e.pos+=8;return}var n;t[4]===">"?(e.mode=i.Text,n=t[0].substr(0,t[0].length-1)):(e.mode=i.Attr,n=t[0]),e.pos+=t[0].length;var r={type:i.Tag,name:t[2].toLowerCase(),name_raw:t[2],raw:n};e.mode===i.Attr&&(e.lastTag=r),e.output.push(r)}else e.needData=!0}function c(e){l.lastIndex=e.pos;var t=l.exec(e.data);return t?e.pos+t[0].length!==l.lastIndex?null:(e.pos+=t[0].length,e.lastTag.raw+=t[0],t[1]):null}function p(e){h.lastIndex=e.pos;var t=h.exec(e.data);return t?e.pos+t[0].length!==h.lastIndex?null:(e.pos+=t[0].length,e.lastTag.raw+=t[0],t[1]||t[2]||t[3]):null}function d(e){var t=c(e);if(!t){var n=e.data.indexOf(">",e.pos);n<0?e.needData=!0:(e.lastTag=null,e.pos=n+1,e.mode=i.Text);return}e.output.push({type:i.Attr,name:t,name_raw:t.toLowerCase(),value:p(e)})}function v(e){var t=e.data.indexOf("]]>",e.pos);if(t<0)e.pendingText||(e.pendingText=[]),e.pendingText.push(e.data.substr(e.pos,e.data.length)),e.pos=e.data.length,e.needData=!0;else{var n;e.pendingText?(e.pendingText.push(e.data.substring(e.pos,t)),n=e.pendingText.join(""),e.pendingText=null):n=e.data.substring(e.pos,t),e.output.push({type:i.CData,data:n}),e.mode=i.Text,e.pos=t+3}}function m(e){var t=e.data.indexOf("-->",e.pos);if(t<0)e.pendingText||(e.pendingText=[]),e.pendingText.push(e.data.substr(e.pos,e.data.length)),e.pos=e.data.length,e.needData=!0;else{var n;e.pendingText?(e.pendingText.push(e.data.substring(e.pos,t)),n=e.pendingText.join(""),e.pendingText=null):n=e.data.substring(e.pos,t),e.output.push({type:i.Comment,data:n}),e.mode=i.Text,e.pos=t+3}}var r="starting text\naaa<!--xxx-->bbb\n<![CDATA[This is the CData content]]>\n< htmL >\n    <body>\n        <div style=\"width:100%\"></div>\n        <div name='\"foo\"'>xxx</div>\n        <div bar=baz>yyyyyyyyyyyy</div>\n        <div wrong='<foo>'> zzzz zzz </div>\n        <div a='b' c=d e=\"f\">aaaa</div>\n    </BODY>\n</html>\nending text<unclosed tag='foo' xxx='",i={Text:"text",Tag:"tag",Attr:"attr",CData:"cdata",Comment:"comment"},s={mode:i.Text,pos:0,data:r,pendingText:null,lastTag:null,needData:!1,output:[]},a=/(\s*)([^\s>]+)(\s*)(>?)/g,l=/\s*([^=<>\s'"]+)\s*/g,h=/\s*=\s*(?:'([^']*)'|"([^"]*)"|([^'"\s>]*))/g;while(s.pos<s.data.length&&!s.needData)o(s);s.pendingText&&(s.output.push({type:s.mode,data:s.pendingText}),s.pendingText=null),console.log(s);var g=[],y;for(var b=0,w=s.output.length;b<w;b++){var E=s.output[b];(y===i.Attr&&E.type!==i.Attr||y===i.Tag&&E.type!==i.Attr)&&g.push(">");switch(E.type){case i.Text:g.push(E.data);break;case i.Comment:g.push("<!--",E.data,"-->");break;case i.CData:g.push("<![CDATA[",E.data,"]]>");break;case i.Tag:g.push("<",E.name);break;case i.Attr:var S=E.value.indexOf("'")<0?"'":'"';g.push(" ",E.name,"=",S,E.value,S)}y=E.type}(y===i.Tag||y===i.Attr)&&g.push(">"),console.log(g.join(""))}})