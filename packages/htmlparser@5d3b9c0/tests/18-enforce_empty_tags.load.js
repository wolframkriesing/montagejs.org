montageDefine("5d3b9c0","tests/18-enforce_empty_tags",{dependencies:[],factory:function(e,t,n){(function(){function r(){return typeof e=="function"&&typeof t=="object"&&typeof n=="object"&&typeof __filename=="string"&&typeof __dirname=="string"}r()||(this.Tautologistics||(this.Tautologistics={}),this.Tautologistics.NodeHtmlParser||(this.Tautologistics.NodeHtmlParser={}),this.Tautologistics.NodeHtmlParser.Tests||(this.Tautologistics.NodeHtmlParser.Tests=[]),t={},this.Tautologistics.NodeHtmlParser.Tests.push(t)),t.name="Enforce empty tags",t.options={handler:{},parser:{}},t.html="<link>text</link>",t.expected=[{raw:"link",data:"link",type:"tag",name:"link"},{raw:"text",data:"text",type:"text"}]})()}})