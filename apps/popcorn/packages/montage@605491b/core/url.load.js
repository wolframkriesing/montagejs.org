montageDefine("605491b","core/url",{dependencies:[],factory:function(e,t,n){(function(n){typeof bootstrap!="undefined"?bootstrap("core/url",n):n(e,t)})(function(e,t){var n=["url","scheme","authorityRoot","authority","userInfo","user","password","domain","port","path","root","directory","file","search","query","hash"],r=new RegExp("^(?:([^:/?#]+):)?(?:(//)((?:(([^:@]*):?([^@]*))?@)?([^:/?#]*)(?::(\\d*))?))?((/?)((?:[^?#/]*/)*)([^?#]*))(\\?([^#]*))?(?:#(.*))?$");t.parse=function(e){e=String(e);var t={},i=r.exec(e),s;for(s=0;s<i.length;s++)t[n[s]]=i[s]?i[s]:"";t.root=t.root||t.authorityRoot?"/":"",t.directories=t.directory.split("/"),t.directories[t.directories.length-1]==""&&t.directories.pop();var o=[];for(s=0;s<t.directories.length;s++){var u=t.directories[s];u!="."&&(u==".."?o.length&&o[o.length-1]!=".."?o.pop():o.push(".."):o.push(u))}return t.directories=o,t.domains=t.domain.split("."),t},t.format=function(e){if(typeof e=="undefined")throw new Error("UrlError: URL undefined for urls#format");if(e instanceof String||typeof e=="string")return e;var t=e.domains?e.domains.join("."):e.domain,n=e.user||e.password?(e.user||"")+(e.password?":"+e.password:""):e.userInfo,r=n||t||e.port?(n?n+"@":"")+(t||"")+(e.port?":"+e.port:""):e.authority,i=e.directories?e.directories.join("/"):e.directory,s=i||e.file?(i?i+"/":"")+(e.file||""):e.path,o=e.query?"?"+e.query:e.search||"";return(e.scheme?e.scheme+":":"")+(r?"//"+r:"")+(e.root||r&&s?"/":"")+(s?s:"")+o+(e.hash?"#"+e.hash:"")||e.url||""},t.resolveObject=function(e,n){if(!e)return n;e=t.parse(e),n=t.parse(n);if(n.url=="")return e;delete e.url,delete e.authority,delete e.domain,delete e.userInfo,delete e.path,delete e.directory,delete e.search,delete e.query,delete e.hash;if(n.authorityRoot)n.scheme||(n.scheme=e.scheme),e=n;else if(n.scheme&&n.scheme!=e.scheme||n.authority&&n.authority!=e.authority)e=n;else if(n.root)e.directories=n.directories;else{var r=e.directories.concat(n.directories);e.directories=[];for(var i=0;i<r.length;i++){var s=r[i];s!=""&&s!="."&&(s==".."?e.directories.length?e.directories.pop():e.directories.push(".."):e.directories.push(s))}n.file=="."?n.file="":n.file==".."&&(e.directories.pop(),n.file="")}n.root&&(e.root=n.root),n.protcol&&(e.scheme=n.scheme);if(n.path||!n.hash)e.file=n.file;return n.query&&(e.query=n.query),n.hash&&(e.hash=n.hash),e},t.relativeObject=function(e,n){n=t.parse(n),e=t.parse(e),delete n.url;if(n.scheme==e.scheme&&n.authority==e.authority){delete n.scheme,delete n.authority,delete n.userInfo,delete n.user,delete n.password,delete n.domain,delete n.domains,delete n.port;if(!!n.root==!!e.root&&(!n.root||n.directories[0]==e.directories[0])){delete n.path,delete n.root,delete n.directory;while(e.directories.length&&n.directories.length&&n.directories[0]==e.directories[0])n.directories.shift(),e.directories.shift();while(e.directories.length)e.directories.shift(),n.directories.unshift("..");!n.root&&!n.directories.length&&!n.file&&e.file&&n.directories.push("."),e.file==n.file&&delete n.file,e.query==n.query&&delete n.query,e.hash==n.hash&&delete n.hash}}return n},t.resolve=function(e,n){return t.format(t.resolveObject(e,n))},t.relative=function(e,n){return t.format(t.relativeObject(e,n))}})}})