montageDefine("7530409","package.json",{exports:{author:{name:"Robert Kieffer",email:"robert@broofa.com",url:"http://github.com/broofa"},contributors:[{name:"Benjamin Thomas",email:"benjamin@benjaminthomas.org",url:"http://github.com/bentomas"}],dependencies:{},description:"A comprehensive library for mime-type mapping",devDependencies:{},keywords:["util","mime"],main:"mime.js",name:"mime",repository:{url:"https://github.com/broofa/node-mime",type:"git"},version:"1.2.9",readme:"# mime\n\nComprehensive MIME type mapping API. Includes all 600+ types and 800+ extensions defined by the Apache project, plus additional types submitted by the node.js community.\n\n## Install\n\nInstall with [npm](http://github.com/isaacs/npm):\n\n    npm install mime\n\n## API - Queries\n\n### mime.lookup(path)\nGet the mime type associated with a file. Performs a case-insensitive lookup using the extension in `path` (the substring after the last '/' or '.').  E.g.\n\n    var mime = require('mime');\n\n    mime.lookup('/path/to/file.txt');         // => 'text/plain'\n    mime.lookup('file.txt');                  // => 'text/plain'\n    mime.lookup('.TXT');                      // => 'text/plain'\n    mime.lookup('htm');                       // => 'text/html'\n\n### mime.extension(type)\nGet the default extension for `type`\n\n    mime.extension('text/html');                 // => 'html'\n    mime.extension('application/octet-stream');  // => 'bin'\n\n### mime.charsets.lookup()\n\nMap mime-type to charset\n\n    mime.charsets.lookup('text/plain');        // => 'UTF-8'\n\n(The logic for charset lookups is pretty rudimentary.  Feel free to suggest improvements.)\n\n## API - Defining Custom Types\n\nThe following APIs allow you to add your own type mappings within your project.  If you feel a type should be included as part of node-mime, see [requesting new types](https://github.com/broofa/node-mime/wiki/Requesting-New-Types).\n\n### mime.define()\n\nAdd custom mime/extension mappings\n\n    mime.define({\n        'text/x-some-format': ['x-sf', 'x-sft', 'x-sfml'],\n        'application/x-my-type': ['x-mt', 'x-mtt'],\n        // etc ...\n    });\n\n    mime.lookup('x-sft');                 // => 'text/x-some-format'\n\nThe first entry in the extensions array is returned by `mime.extension()`. E.g.\n\n    mime.extension('text/x-some-format'); // => 'x-sf'\n\n### mime.load(filepath)\n\nLoad mappings from an Apache \".types\" format file\n\n    mime.load('./my_project.types');\n\nThe .types file format is simple -  See the `types` dir for examples.\n",readmeFilename:"README.md",_id:"mime@1.2.9",_from:"mime@~1.2.9",scripts:{},directories:{lib:"./"},hash:"7530409",mappings:{},production:!0,useScriptInjection:!0}})