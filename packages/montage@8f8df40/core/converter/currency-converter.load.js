montageDefine("8f8df40","core/converter/currency-converter",{dependencies:["montage","core/converter/converter","core/converter/number-converter"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/converter/converter"),s=e("core/converter/number-converter").numericValueToString,o=e("core/converter/number-converter").NumberConverter,u=function(e,t,n,r){var i=s(e,n);return t=t||"$",e<0&&r&&(i="("+i.substring(1,i.length)+")"),i=i+" "+t,i};t.CurrencyConverter=r.create(o,{currency:{value:"$"},decimals:{value:2},useParensForNegative:{value:!1},convert:{value:function(e){return u(e,this.currency,this.decimals,this.useParensForNegative)}}})}})