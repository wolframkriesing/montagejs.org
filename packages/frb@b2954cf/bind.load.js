montageDefine("b2954cf","bind",{dependencies:["./parse","./algebra","./stringify","./compile-observer","./compile-binder","./observers","./scope"],factory:function(e,t,n){function r(e,t,n){n.target=e,n.targetPath=t;var r=n.source=n.source||e,s=n["<-"]||n["<->"]||"",l=n.twoWay="<->"in n;n.sourcePath=s,n.value;var u=n.parameters=n.parameters||r,c=n.document,h=n.components,p=n.trace,f=n.sourceScope=new d(r);f.parameters=u,f.document=c,f.components=h;var m=n.targetScope=new d(e);if(m.parameters=u,m.document=c,m.components=h,n.converter){var v=n.converter;v.convert&&(n.convert=v.convert.bind(v)),v.revert&&(n.revert=v.revert.bind(v))}else if(n.reverter){var g=n.reverter;g.convert&&(n.revert=g.convert.bind(g)),g.revert&&(n.convert=g.revert.bind(g))}var b=n.convert,_=n.revert,y=n.sourceSyntax=o(s),w=n.targetSyntax=o(t);p&&console.log("DEFINE BINDING",t,"<-",s,e);var E=i(m,w,f,y,b,n,p),S=a;return l&&(p&&console.log("DEFINE BINDING",t,"->",s,r),S=i(f,y,m,w,_,n,p)),function(){E(),S()}}function i(e,t,n,r,i,a,o){var d=s(t,r);t=d[0],r=d[1];var p=u(r);i&&(p=h.makeConverterObserver(p,i,n));var f=c(t);return f(p,n,e,a,o?{sourcePath:l(r),targetPath:l(t)}:null)}function a(){}var o=e("./parse"),s=e("./algebra"),l=e("./stringify"),u=e("./compile-observer"),c=e("./compile-binder"),h=e("./observers"),d=e("./scope");n.exports=r}});