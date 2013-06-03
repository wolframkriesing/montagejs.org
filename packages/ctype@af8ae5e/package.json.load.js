montageDefine("af8ae5e","package.json",{exports:{name:"ctype",version:"0.5.2",description:"read and write binary structures and data types",homepage:"https://github.com/rmustacc/node-ctype",author:{name:"Robert Mustacchi",email:"rm@fingolfin.org"},engines:{node:">= 0.4"},main:"ctype.js",readme:"Node-CType is a way to read and write binary data in structured and easy to use\nformat. Its name comes from the C header file.\n\nTo get started, simply clone the repository or use npm to install it. Once it is\nthere, simply require it.\n\ngit clone git://github.com/rmustacc/node-ctype\nnpm install ctype\nvar mod_ctype = require('ctype')\n\n\nThere are two APIs that you can use, depending on what abstraction you'd like.\nThe low level API let's you read and write individual integers and floats from\nbuffers. The higher level API let's you read and write structures of these. To\nillustrate this, let's looks look at how we would read and write a binary\nencoded x,y point.\n\nIn C we would define this structure as follows:\n\ntypedef struct point {\n	uint16_t	p_x;\n	uint16_t	p_y;\n} point_t;\n\nTo read a binary encoded point from a Buffer, we first need to create a CType\nparser (where we specify the endian and other options) and add the typedef.\n\nvar parser = new mod_ctype.Parser({ endian: 'big' });\nparser.typedef('point_t', [\n	{ x: { type: 'uint16_t' } },\n	{ y: { type: 'uint16_t' } }\n]);\n\nFrom here, given a buffer buf and an offset into it, we can read a point.\n\nvar out = parser.readData([ { point: { type: 'point_t' } } ], buffer, 0);\nconsole.log(out);\n{ point: { x: 23, y: 42 } }\n\nAnother way to get the same information would be to use the low level methods.\nNote that these require you to manually deal with the offset. Here's how we'd\nget the same values of x and y from the buffer.\n\nvar x = mod_ctype.ruint16(buf, 'big', 0);\nvar y = mod_ctype.ruint16(buf, 'big', 2);\nconsole.log(x + ', ' + y);\n23, 42\n\nThe true power of this API comes from the ability to define and nest typedefs,\njust as you would in C. By default, the following types are defined by default.\nNote that they return a Number, unless indicated otherwise.\n\n    * int8_t\n    * int16_t\n    * int32_t\n    * int64_t (returns an array where val[0] << 32 + val[1] would be the value)\n    * uint8_t\n    * uint16_t\n    * uint32_t\n    * uint64_t (returns an array where val[0] << 32 + val[1] would be the value)\n    * float\n    * double\n    * char (either returns a buffer with that character or a uint8_t)\n    * char[] (returns an object with the buffer and the number of characters read which is either the total amount requested or until the first 0)\n\n\nctf2json integration:\n\nNode-CType supports consuming the output of ctf2json. Once you read in a JSON file,\nall you have to do to add all the definitions it contains is:\n\nvar data, parser;\ndata = JSON.parse(parsedJSONData);\nparser = mod_ctype.parseCTF(data, { endian: 'big' });\n\nFor more documentation, see the file README.old. Full documentation is in the\nprocess of being rewritten as a series of manual pages which will be available\nin the repository and online for viewing.\n\nTo read the ctio manual page simple run, from the root of the workspace:\n\nman -Mman -s 3ctype ctio\n",readmeFilename:"README",_id:"ctype@0.5.2",_from:"ctype@0.5.2",directories:{lib:"./"},hash:"af8ae5e",mappings:{},production:!0,useScriptInjection:!0}})