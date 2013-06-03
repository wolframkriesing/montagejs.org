montageDefine("eb81de5","lib/parse",{dependencies:["./CSSStyleSheet","./CSSStyleRule","./CSSImportRule","./CSSMediaRule","./CSSFontFaceRule","./CSSStyleDeclaration","./CSSKeyframeRule","./CSSKeyframesRule"],factory:function(e,t,n){var r={};r.parse=function(t){var n=0,i="before-selector",s,o="",u={selector:!0,value:!0,atRule:!0,"importRule-begin":!0,importRule:!0,atBlock:!0},a=new r.CSSStyleSheet,f=a,l,c,h,p,d="",v,m,g,y,b,w,E=/@(-(?:\w+-)+)?keyframes/g,S=function(e){var r=t.substring(0,n).split("\n"),i=r.length,s=r.pop().length+1,o=new Error(e+" (line "+i+", char "+s+")");throw o.line=i,o.char=s,o.styleSheet=a,o};for(var x;x=t.charAt(n);n++)switch(x){case" ":case"	":case"\r":case"\n":case"\f":u[i]&&(o+=x);break;case'"':s=t.indexOf('"',n+1)+1,s||S('Unmatched "'),o+=t.slice(n,s),n=s-1;switch(i){case"before-value":i="value";break;case"importRule-begin":i="importRule"}break;case"'":s=t.indexOf("'",n+1)+1,s||S("Unmatched '"),o+=t.slice(n,s),n=s-1;switch(i){case"before-value":i="value";break;case"importRule-begin":i="importRule"}break;case"/":t.charAt(n+1)==="*"?(n+=2,s=t.indexOf("*/",n),s===-1?S("Missing */"):n=s+1):o+=x,i==="importRule-begin"&&(o+=" ",i="importRule");break;case"@":if(t.indexOf("@media",n)===n){i="atBlock",m=new r.CSSMediaRule,m.__starts=n,n+="media".length,o="";break}if(t.indexOf("@import",n)===n){i="importRule-begin",n+="import".length,o+="@import";break}if(t.indexOf("@font-face",n)===n){i="fontFaceRule-begin",n+="font-face".length,y=new r.CSSFontFaceRule,y.__starts=n,o="";break}E.lastIndex=n;var T=E.exec(t);if(T&&T.index===n){i="keyframesRule-begin",b=new r.CSSKeyframesRule,b.__starts=n,b._vendorPrefix=T[1],n+=T[0].length-1,o="";break}i=="selector"&&(i="atRule"),o+=x;break;case"{":i==="selector"||i==="atRule"?(v.selectorText=o.trim(),v.style.__starts=n,o="",i="before-name"):i==="atBlock"?(m.media.mediaText=o.trim(),f=l=m,m.parentStyleSheet=a,o="",i="before-selector"):i==="fontFaceRule-begin"?(l&&(y.parentRule=l),y.parentStyleSheet=a,v=y,o="",i="before-name"):i==="keyframesRule-begin"?(b.name=o.trim(),l&&(b.parentRule=l),b.parentStyleSheet=a,f=l=b,o="",i="keyframeRule-begin"):i==="keyframeRule-begin"&&(v=new r.CSSKeyframeRule,v.keyText=o.trim(),v.__starts=n,o="",i="before-name");break;case":":i==="name"?(h=o.trim(),o="",i="before-value"):o+=x;break;case"(":i==="value"?(s=t.indexOf(")",n+1),s===-1&&S('Unmatched "("'),o+=t.slice(n,s+1),n=s):o+=x;break;case"!":i==="value"&&t.indexOf("!important",n)===n?(d="important",n+="important".length):o+=x;break;case";":switch(i){case"value":v.style.setProperty(h,o.trim(),d),d="",o="",i="before-name";break;case"atRule":o="",i="before-selector";break;case"importRule":g=new r.CSSImportRule,g.parentStyleSheet=g.styleSheet.parentStyleSheet=a,g.cssText=o+x,a.cssRules.push(g),o="",i="before-selector";break;default:o+=x}break;case"}":switch(i){case"value":v.style.setProperty(h,o.trim(),d),d="";case"before-name":case"name":v.__ends=n+1,l&&(v.parentRule=l),v.parentStyleSheet=a,f.cssRules.push(v),o="",f.constructor===r.CSSKeyframesRule?i="keyframeRule-begin":i="before-selector";break;case"keyframeRule-begin":case"before-selector":case"selector":l||S("Unexpected }"),f.__ends=n+1,a.cssRules.push(f),f=a,l=null,o="",i="before-selector"}break;default:switch(i){case"before-selector":i="selector",v=new r.CSSStyleRule,v.__starts=n;break;case"before-name":i="name";break;case"before-value":i="value";break;case"importRule-begin":i="importRule"}o+=x}return a},t.parse=r.parse,r.CSSStyleSheet=e("./CSSStyleSheet").CSSStyleSheet,r.CSSStyleRule=e("./CSSStyleRule").CSSStyleRule,r.CSSImportRule=e("./CSSImportRule").CSSImportRule,r.CSSMediaRule=e("./CSSMediaRule").CSSMediaRule,r.CSSFontFaceRule=e("./CSSFontFaceRule").CSSFontFaceRule,r.CSSStyleDeclaration=e("./CSSStyleDeclaration").CSSStyleDeclaration,r.CSSKeyframeRule=e("./CSSKeyframeRule").CSSKeyframeRule,r.CSSKeyframesRule=e("./CSSKeyframesRule").CSSKeyframesRule}})