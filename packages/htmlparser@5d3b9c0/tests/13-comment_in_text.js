(function(){function e(){return typeof require=="function"&&typeof exports=="object"&&typeof module=="object"&&typeof __filename=="string"&&typeof __dirname=="string"}e()||(this.Tautologistics||(this.Tautologistics={}),this.Tautologistics.NodeHtmlParser||(this.Tautologistics.NodeHtmlParser={}),this.Tautologistics.NodeHtmlParser.Tests||(this.Tautologistics.NodeHtmlParser.Tests=[]),exports={},this.Tautologistics.NodeHtmlParser.Tests.push(exports)),exports.name="Comment within text",exports.options={handler:{},parser:{}},exports.html="this is <!-- the comment --> the text",exports.expected=[{raw:"this is ",data:"this is ",type:"text"},{raw:" the comment ",data:" the comment ",type:"comment"},{raw:" the text",data:" the text",type:"text"}]})()