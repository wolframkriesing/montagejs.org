montageDefine("5d3b9c0","tests/22-position_data",{dependencies:[],factory:function(e,t,n){(function(){function r(){return typeof e=="function"&&typeof t=="object"&&typeof n=="object"&&typeof __filename=="string"&&typeof __dirname=="string"}r()||(this.Tautologistics||(this.Tautologistics={}),this.Tautologistics.NodeHtmlParser||(this.Tautologistics.NodeHtmlParser={}),this.Tautologistics.NodeHtmlParser.Tests||(this.Tautologistics.NodeHtmlParser.Tests=[]),t={},this.Tautologistics.NodeHtmlParser.Tests.push(t)),t.name="Postion data",t.options={handler:{},parser:{includeLocation:!0}},t.html="<html>\r\n\n	<title>The Title</title><body>\nHello world\r\n\n</body>\n\n</html>",t.expected=[{raw:"html",data:"html",type:"tag",name:"html",location:{line:1,col:1},children:[{raw:"\r\n\n	",data:"\r\n\n	",type:"text",location:{line:1,col:7}},{raw:"title",data:"title",type:"tag",name:"title",location:{line:3,col:2},children:[{raw:"The Title",data:"The Title",type:"text",location:{line:3,col:9}}]},{raw:"body",data:"body",type:"tag",name:"body",location:{line:3,col:26},children:[{raw:"\nHello world\r\n\n",data:"\nHello world\r\n\n",type:"text",location:{line:3,col:32}}]},{raw:"\n\n",data:"\n\n",type:"text",location:{line:6,col:8}}]}]})()}})