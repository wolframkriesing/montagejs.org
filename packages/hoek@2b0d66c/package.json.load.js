montageDefine("2b0d66c","package.json",{exports:{name:"hoek",description:"General purpose node utilities",version:"0.8.5",author:{name:"Eran Hammer",email:"eran@hueniverse.com",url:"http://hueniverse.com"},contributors:[{name:"Van Nguyen",email:"the.gol.effect@gmail.com"}],repository:{type:"git",url:"git://github.com/spumko/hoek"},main:"index",keywords:["utilities"],engines:{node:">=0.8.0"},dependencies:{},devDependencies:{lab:"0.1.x","complexity-report":"0.x.x"},scripts:{test:"make test-cov"},licenses:[{type:"BSD",url:"http://github.com/spumko/hoek/raw/master/LICENSE"}],readme:'<a href="https://github.com/spumko"><img src="https://raw.github.com/spumko/spumko/master/images/from.png" align="right" /></a>\r\n![hoek Logo](https://raw.github.com/spumko/hoek/master/images/hoek.png)\r\n\r\nGeneral purpose node utilities\r\n\r\n[![Build Status](https://secure.travis-ci.org/spumko/hoek.png)](http://travis-ci.org/spumko/hoek)\r\n\r\n# Table of Contents\r\n\r\n* [Introduction](#introduction "Introduction")\r\n* [Object](#object "Object")\r\n  * [clone](#cloneobj "clone")\r\n  * [merge](#mergetarget-source-isnulloverride-ismergearrays "merge")\r\n  * [applyToDefaults](#applytodefaultsdefaults-options "applyToDefaults")\r\n  * [unique](#uniquearray-key "unique")\r\n  * [mapToObject](#maptoobjectarray-key "mapToObject")\r\n  * [intersect](#intersectarray1-array2 "intersect")\r\n  * [matchKeys](#matchkeysobj-keys "matchKeys")\r\n  * [flatten](#flattenarray-target "flatten")\r\n  * [removeKeys](#removekeysobject-keys "removeKeys")\r\n  * [reach](#reachobj-chain "reach")\r\n  * [inheritAsync](#inheritasyncself-obj-keys "inheritAsync")\r\n  * [rename](#renameobj-from-to "rename")\r\n* [Timer](#timer "Timer")\r\n* [Binary Encoding/Decoding](#binary "Binary Encoding/Decoding")\r\n  * [base64urlEncode](#binary64urlEncodevalue "binary64urlEncode")\r\n  * [base64urlDecode](#binary64urlDecodevalue "binary64urlDecode")\r\n* [Escaping Characters](#escaped "Escaping Characters")\r\n  * [escapeHtml](#escapeHtmlstring "escapeHtml")\r\n  * [escapeHeaderAttribute](#escapeHeaderAttributeattribute "escapeHeaderAttribute")\r\n  * [escapeRegex](#escapeRegexstring "escapeRegex")\r\n* [Errors](#errors "Errors")\r\n  * [assert](#assertmessage "assert")\r\n  * [abort](#abortmessage "abort")\r\n  * [displayStack](#displayStackslice "displayStack")\r\n  * [callStack](#callStackslice "callStack")\r\n  * [toss](#tosscondition "toss")\r\n* [Load files](#load-files "Load Files")\r\n  * [loadPackage](#loadPackagedir "loadpackage")\r\n  * [loadDirModules](#loadDirModulespath-excludefiles-target "loaddirmodules")\r\n\r\n\r\n\r\n# Introduction\r\n\r\nThe *Hoek* general purpose node utilities library is used to aid in a variety of manners. It comes with useful methods for Arrays (clone, merge, applyToDefaults), Objects (removeKeys, copy), Asserting and more. \r\n\r\nFor example, to use Hoek to set configuration with default options:\r\n```javascript\r\nvar Hoek = require(\'hoek\');\r\n\r\nvar default = {url : "www.github.com", port : "8000", debug : true}\r\n\r\nvar config = Hoek.applyToDefaults(default, {port : "3000", admin : true});\r\n\r\n// In this case, config would be { url: \'www.github.com\', port: \'3000\', debug: true, admin: true }\r\n```\r\n\r\nUnder each of the sections (such as Array), there are subsections which correspond to Hoek methods. Each subsection will explain how to use the corresponding method. In each js excerpt below, the var Hoek = require(\'hoek\') is omitted for brevity.\r\n\r\n## Object\r\n\r\nHoek provides several helpful methods for objects and arrays.\r\n\r\n### clone(obj)\r\n\r\nThis method is used to clone an object or an array. A *deep copy* is made (duplicates everything, including values that are objects). \r\n\r\n```javascript\r\n\r\nvar nestedObj = {\r\n        w: /^something$/ig,\r\n        x: {\r\n            a: [1, 2, 3],\r\n            b: 123456,\r\n            c: new Date()\r\n        },\r\n        y: \'y\',\r\n        z: new Date()\r\n    };\r\n\r\nvar copy = Hoek.clone(nestedObj);\r\n\r\ncopy.x.b = 100;\r\n\r\nconsole.log(copy.y)        // results in \'y\'\r\nconsole.log(nestedObj.x.b) // results in 123456\r\nconsole.log(copy.x.b)      // results in 100\r\n```\r\n\r\n### merge(target, source, isNullOverride, isMergeArrays)\r\nisNullOverride, isMergeArrays default to true\r\n\r\nMerge all the properties of source into target, source wins in conflic, and by default null and undefined from source are applied\r\n\r\n\r\n```javascript\r\n\r\nvar target = {a: 1, b : 2}\r\nvar source = {a: 0, c: 5}\r\nvar source2 = {a: null, c: 5}\r\n\r\nvar targetArray = [1, 2, 3];\r\nvar sourceArray = [4, 5];\r\n\r\nvar newTarget = Hoek.merge(target, source);     // results in {a: 0, b: 2, c: 5}\r\nnewTarget = Hoek.merge(target, source2);        // results in {a: null, b: 2, c: 5}\r\nnewTarget = Hoek.merge(target, source2, false); // results in {a: 1, b: 2, c: 5}\r\n\r\nnewTarget = Hoek.merge(targetArray, sourceArray)              // results in [1, 2, 3, 4, 5]\r\nnewTarget = Hoek.merge(targetArray, sourceArray, true, false) // results in [4, 5]\r\n\r\n\r\n\r\n\r\n```\r\n\r\n### applyToDefaults(defaults, options)\r\n\r\nApply options to a copy of the defaults\r\n\r\n```javascript\r\n\r\nvar defaults = {host: "localhost", port: 8000};\r\nvar options = {port: 8080};\r\n\r\nvar config = Hoek.applyToDefaults(defaults, options); // results in {host: "localhost", port: 8080};\r\n\r\n\r\n```\r\n\r\n### unique(array, key)\r\n\r\nRemove duplicate items from Array\r\n\r\n```javascript\r\n\r\nvar array = [1, 2, 2, 3, 3, 4, 5, 6];\r\n\r\nvar newArray = Hoek.unique(array); // results in [1,2,3,4,5,6];\r\n\r\narray = [{id: 1}, {id: 1}, {id: 2}];\r\n\r\nnewArray = Hoek.unique(array, "id") // results in [{id: 1}, {id: 2}]\r\n\r\n```\r\n\r\n### mapToObject(array, key)\r\n\r\nConvert an Array into an Object\r\n\r\n```javascript\r\n\r\nvar array = [1,2,3];\r\nvar newObject = Hoek.mapToObject(array); // results in [{"1": true}, {"2": true}, {"3": true}]\r\n\r\narray = [{id: 1}, {id: 2}];\r\nnewObject = Hoek.mapToObject(array, "id") // results in [{"id": 1}, {"id": 2}]\r\n\r\n```\r\n### intersect(array1, array2)\r\n\r\nFind the common unique items in two arrays\r\n\r\n```javascript\r\n\r\nvar array1 = [1, 2, 3];\r\nvar array2 = [1, 4, 5];\r\n\r\nvar newArray = Hoek.intersect(array1, array2) // results in [1]\r\n\r\n```\r\n\r\n### matchKeys(obj, keys) \r\n\r\nFind which keys are present\r\n\r\n```javascript\r\n\r\nvar obj = {a: 1, b: 2, c: 3};\r\nvar keys = ["a", "e"];\r\n\r\nHoek.matchKeys(obj, keys) // returns ["a"]\r\n\r\n```\r\n\r\n### flatten(array, target)\r\n\r\nFlatten an array\r\n\r\n```javascript\r\n\r\nvar array = [1, 2, 3];\r\nvar target = [4, 5]; \r\n\r\nvar flattenedArray = Hoek.flatten(array, target) // results in [4, 5, 1, 2, 3];\r\n\r\n```\r\n\r\n### removeKeys(object, keys)\r\n\r\nRemove keys\r\n\r\n```javascript\r\n\r\nvar object = {a: 1, b: 2, c: 3, d: 4};\r\n\r\nvar keys = ["a", "b"];\r\n\r\nHoek.removeKeys(object, keys) // object is now {c: 3, d: 4}\r\n\r\n```\r\n\r\n### reach(obj, chain)\r\n\r\nConverts an object key chain string to reference\r\n\r\n```javascript\r\n\r\nvar chain = \'a.b.c\';\r\nvar obj = {a : {b : { c : 1}}};\r\n\r\nHoek.reach(obj, chain) // returns 1\r\n\r\n```\r\n\r\n### inheritAsync(self, obj, keys) \r\n\r\nInherits a selected set of methods from an object, wrapping functions in asynchronous syntax and catching errors\r\n\r\n```javascript\r\n\r\nvar targetFunc = function () { };\r\n\r\nvar proto = {\r\n                a: function () {\r\n                    return \'a!\';\r\n                },\r\n                b: function () {\r\n                    return \'b!\';\r\n                },\r\n                c: function () {\r\n                    throw new Error(\'c!\');\r\n                }\r\n            };\r\n\r\nvar keys = [\'a\', \'c\'];\r\n\r\nHoek.inheritAsync(targetFunc, proto, [\'a\', \'c\']);\r\n\r\nvar target = new targetFunc();\r\n\r\ntarget.a(function(err, result){console.log(result)}         // returns \'a!\'       \r\n\r\ntarget.c(function(err, result){console.log(result)}         // returns undefined\r\n\r\ntarget.b(function(err, result){console.log(result)}         // gives error: Object [object Object] has no method \'b\'\r\n\r\n```\r\n\r\n### rename(obj, from, to)\r\n\r\nRename a key of an object\r\n\r\n```javascript\r\n\r\nvar obj = {a : 1, b : 2};\r\n\r\nHoek.rename(obj, "a", "c");     // obj is now {c : 1, b : 2}\r\n\r\n```\r\n\r\n\r\n# Timer\r\n\r\nA Timer object. Initializing a new timer object sets the ts to the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.\r\n\r\n```javascript\r\n\r\n\r\nexample : \r\n\r\n\r\nvar timerObj = new Hoek.Timer();\r\nconsole.log("Time is now: " + timerObj.ts)\r\nconsole.log("Elapsed time from initialization: " + timerObj.elapsed() + \'milliseconds\')\r\n\r\n```\r\n\r\n# Binary Encoding/Decoding\r\n\r\n### base64urlEncode(value)\r\n\r\nEncodes value in Base64 or URL encoding\r\n\r\n### base64urlDecode(value)\r\n\r\nDecodes data in Base64 or URL encoding.\r\n# Escaping Characters\r\n\r\nHoek provides convenient methods for escaping html characters. The escaped characters are as followed:\r\n\r\n```javascript\r\n\r\ninternals.htmlEscaped = {\r\n    \'&\': \'&amp;\',\r\n    \'<\': \'&lt;\',\r\n    \'>\': \'&gt;\',\r\n    \'"\': \'&quot;\',\r\n    "\'": \'&#x27;\',\r\n    \'`\': \'&#x60;\'\r\n};\r\n\r\n```\r\n\r\n### escapeHtml(string)\r\n\r\n```javascript\r\n\r\nvar string = \'<html> hey </html>\';\r\nvar escapedString = Hoek.escapeHtml(string); // returns &lt;html&gt; hey &lt;/html&gt;\r\n\r\n```\r\n\r\n### escapeHeaderAttribute(attribute)\r\n\r\nEscape attribute value for use in HTTP header\r\n\r\n```javascript\r\n\r\nvar a = Hoek.escapeHeaderAttribute(\'I said "go w\\\\o me"\');  //returns I said \\"go w\\\\o me\\"\r\n\r\n\r\n```\r\n\r\n\r\n### escapeRegex(string)\r\n\r\nEscape string for Regex construction\r\n\r\n```javascript\r\n\r\nvar a = Hoek.escapeRegex(\'4^f$s.4*5+-_?%=#!:@|~\\\\/`"(>)[<]d{}s,\');  // returns 4\\^f\\$s\\.4\\*5\\+\\-_\\?%\\=#\\!\\:@\\|~\\\\\\/`"\\(>\\)\\[<\\]d\\{\\}s\\,\r\n\r\n\r\n\r\n```\r\n\r\n# Errors\r\n\r\n### assert(message)\r\n\r\n```javascript\r\n\r\nvar a = 1, b =2;\r\n\r\nHoek.assert(a === b, \'a should equal b\');  // ABORT: a should equal b\r\n\r\n```\r\n\r\n### abort(message)\r\n\r\nFirst checks if process.env.NODE_ENV === \'test\', and if so, throws error message. Otherwise,\r\ndisplays most recent stack and then exits process.\r\n\r\n\r\n\r\n### displayStack(slice)\r\n\r\nDisplays the trace stack\r\n\r\n```javascript\r\n\r\nvar stack = Hoek.displayStack();\r\nconsole.log(stack) // returns something like:\r\n\r\n[ \'null (/Users/user/Desktop/hoek/test.js:4:18)\',\r\n  \'Module._compile (module.js:449:26)\',\r\n  \'Module._extensions..js (module.js:467:10)\',\r\n  \'Module.load (module.js:356:32)\',\r\n  \'Module._load (module.js:312:12)\',\r\n  \'Module.runMain (module.js:492:10)\',\r\n  \'startup.processNextTick.process._tickCallback (node.js:244:9)\' ]\r\n\r\n```\r\n\r\n### callStack(slice)\r\n\r\nReturns a trace stack array.\r\n\r\n```javascript\r\n\r\nvar stack = Hoek.callStack();\r\nconsole.log(stack)  // returns something like:\r\n\r\n[ [ \'/Users/user/Desktop/hoek/test.js\', 4, 18, null, false ],\r\n  [ \'module.js\', 449, 26, \'Module._compile\', false ],\r\n  [ \'module.js\', 467, 10, \'Module._extensions..js\', false ],\r\n  [ \'module.js\', 356, 32, \'Module.load\', false ],\r\n  [ \'module.js\', 312, 12, \'Module._load\', false ],\r\n  [ \'module.js\', 492, 10, \'Module.runMain\', false ],\r\n  [ \'node.js\',\r\n    244,\r\n    9,\r\n    \'startup.processNextTick.process._tickCallback\',\r\n    false ] ]\r\n\r\n\r\n```\r\n\r\n### toss(condition)\r\n\r\ntoss(condition /*, [message], callback */)\r\n\r\nReturn an error as first argument of a callback\r\n\r\n\r\n# Load Files\r\n\r\n### loadPackage(dir)\r\n\r\nLoad and parse package.json process root or given directory\r\n\r\n```javascript\r\n\r\nvar pack = Hoek.loadPackage();  // pack.name === \'hoek\'\r\n\r\n```\r\n\r\n### loadDirModules(path, excludeFiles, target) \r\n\r\nLoads modules from a given path; option to exclude files (array).\r\n\r\n\r\n\r\n\r\n',readmeFilename:"README.md",_id:"hoek@0.8.5",_from:"hoek@0.8.x",directories:{lib:"./"},hash:"2b0d66c",mappings:{},production:!0,useScriptInjection:!0}})