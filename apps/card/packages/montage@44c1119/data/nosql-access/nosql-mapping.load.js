montageDefine("44c1119","data/nosql-access/nosql-mapping",{dependencies:["montage","data/mapping","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("data/mapping").BinderMapping,s=e("data/mapping").BlueprintMapping,o=e("data/mapping").AttributeMapping,u=e("data/mapping").AssociationMapping,a=e("core/logger").logger("nosql-mapping"),f=t.NoSqlBinderMapping=r.create(i,{}),l=t.NoSqlBlueprintMapping=r.create(s,{}),c=t.NoSqlAttributeMapping=r.create(o,{}),h=t.NoSqlAssociationMapping=r.create(u,{})}})