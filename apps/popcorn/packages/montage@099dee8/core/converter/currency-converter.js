var Montage=require("montage").Montage,Converter=require("core/converter/converter"),numericValueToString=require("core/converter/number-converter").numericValueToString,NumberConverter=require("core/converter/number-converter").NumberConverter,formatCurrency=function(e,t,n,r){var i=numericValueToString(e,n);return t=t||"$",e<0&&r&&(i="("+i.substring(1,i.length)+")"),i=i+" "+t,i};exports.CurrencyConverter=Montage.create(NumberConverter,{currency:{value:"$"},decimals:{value:2},useParensForNegative:{value:!1},convert:{value:function(e){return formatCurrency(e,this.currency,this.decimals,this.useParensForNegative)}}})