montageDefine("5d3b9c0","tests/04-unescaped_in_script",{dependencies:[],factory:function(e,t,n){(function(){function r(){return typeof e=="function"&&typeof t=="object"&&typeof n=="object"&&typeof __filename=="string"&&typeof __dirname=="string"}r()||(this.Tautologistics||(this.Tautologistics={}),this.Tautologistics.NodeHtmlParser||(this.Tautologistics.NodeHtmlParser={}),this.Tautologistics.NodeHtmlParser.Tests||(this.Tautologistics.NodeHtmlParser.Tests=[]),t={},this.Tautologistics.NodeHtmlParser.Tests.push(t)),t.name="Unescaped chars in script",t.options={handler:{},parser:{}},t.html='<head><script language="Javascript">var foo = "<bar>"; alert(2 > foo); var baz = 10 << 2; var zip = 10 >> 1; var yap = "<<>>>><<";</script></head>',t.expected=[{raw:"head",data:"head",type:"tag",name:"head",children:[{raw:'script language="Javascript"',data:'script language="Javascript"',type:"script",name:"script",attribs:{language:"Javascript"},children:[{raw:'var foo = "<bar>"; alert(2 > foo); var baz = 10 << 2; var zip = 10 >> 1; var yap = "<<>>>><<";',data:'var foo = "<bar>"; alert(2 > foo); var baz = 10 << 2; var zip = 10 >> 1; var yap = "<<>>>><<";',type:"text"}]}]}]})()}})