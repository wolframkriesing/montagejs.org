function Contextify(e){typeof e!="object"&&(e={});var t=new ContextifyContext(e);return e.run=function(){return t.run.apply(t,arguments)},e.getGlobal=function(){return t.getGlobal()},e.dispose=function(){e.run=function(){throw new Error("Called run() after dispose().")},e.getGlobal=function(){throw new Error("Called getGlobal() after dispose().")},e.dispose=function(){throw new Error("Called dispose() after dispose().")},t=null},e}var binding=require("bindings")("contextify"),ContextifyContext=binding.ContextifyContext,ContextifyScript=binding.ContextifyScript;Contextify.createContext=function(e){return typeof e!="object"&&(e={}),new ContextifyContext(e)},Contextify.createScript=function(e,t){if(typeof e!="string")throw new TypeError("Code argument is required");return new ContextifyScript(e,t)},module.exports=Contextify