function makeParser(e){return function(t){var n,i=0,r=1,a=e.apply(this,[function(e){return n=e,expectEof()}].concat(Array.prototype.slice.call(arguments,1)));try{for(var o=0;t.length>o;o++)a=a(t[o],{index:o,line:r,column:i}),"\n"===t[o]?(r++,i=0):i++;a=a("",{index:o,line:r,column:i})}catch(s){if(s.loc){var l=s.loc;s.message+=t.length>80?" at line "+l.line+", column "+l.column:" in "+JSON.stringify(t)+" at index "+l.index}throw s}return n}}function expectEof(){return function(e,t){if(""!==e){var n=Error("Unexpected "+JSON.stringify(e));throw n.loc=t,n}return function i(){return i}}}function makeExpect(e){return function(t){return function(n,i){return n===e?t(n,i):t(null,i)(n,i)}}}exports.makeParser=makeParser,exports.expectEof=expectEof,exports.makeExpect=makeExpect;