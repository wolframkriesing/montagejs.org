montageDefine("8f8df40","ui/native/button.reel/button-blueprint.json",{exports:{blueprint_button_autofocus:{prototype:"core/meta/property-blueprint",properties:{name:"autofocus",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},blueprint_button_enabled:{prototype:"core/meta/property-blueprint",properties:{name:"enabled",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"boolean",enumValues:[],helpKey:""}},blueprint_button_form:{prototype:"core/meta/property-blueprint",properties:{name:"form",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},blueprint_button_formaction:{prototype:"core/meta/property-blueprint",properties:{name:"formaction",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"url",enumValues:[],helpKey:""}},blueprint_button_formenctype:{prototype:"core/meta/property-blueprint",properties:{name:"formenctype",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"enum",enumValues:["application/x-www-form-urlencoded","multipart/form-data","text/plain"],helpKey:""}},blueprint_button_formmethod:{prototype:"core/meta/property-blueprint",properties:{name:"formmethod",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"enum",enumValues:["get","post"],helpKey:""}},blueprint_button_formnovalidate:{prototype:"core/meta/property-blueprint",properties:{name:"formnovalidate",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"boolean",enumValues:[],helpKey:""}},blueprint_button_formtarget:{prototype:"core/meta/property-blueprint",properties:{name:"formtarget",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},blueprint_button_name:{prototype:"core/meta/property-blueprint",properties:{name:"name",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},blueprint_button_label:{prototype:"core/meta/property-blueprint",properties:{name:"label",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},blueprint_button_type:{prototype:"core/meta/property-blueprint",properties:{name:"type",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"enum",enumValues:["button","reset","submit"],helpKey:""}},blueprint_button_value:{prototype:"core/meta/property-blueprint",properties:{name:"value",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},blueprint_nativecontrol_reference:{prototype:"core/meta/blueprint-reference",properties:{valueReference:{blueprintName:"NativeControl",blueprintModuleId:"ui/native-control-blueprint.json",prototypeName:"NativeControl"}}},root:{prototype:"core/meta/blueprint",properties:{name:"button",blueprintModuleId:"ui/native/button.reel/button-blueprint.json",prototypeName:"button",customPrototype:!1,parent:{"@":"blueprint_nativecontrol_reference"},propertyBlueprints:[{"@":"blueprint_button_autofocus"},{"@":"blueprint_button_enabled"},{"@":"blueprint_button_form"},{"@":"blueprint_button_formaction"},{"@":"blueprint_button_formenctype"},{"@":"blueprint_button_formmethod"},{"@":"blueprint_button_formnovalidate"},{"@":"blueprint_button_formtarget"},{"@":"blueprint_button_name"},{"@":"blueprint_button_label"},{"@":"blueprint_button_type"},{"@":"blueprint_button_value"}],propertyBlueprintGroups:{button:[{"@":"blueprint_button_label"},{"@":"blueprint_button_type"},{"@":"blueprint_button_name"},{"@":"blueprint_button_enabled"},{"@":"blueprint_button_autofocus"}],"button-form":[{"@":"blueprint_button_form"},{"@":"blueprint_button_formaction"},{"@":"blueprint_button_formenctype"},{"@":"blueprint_button_formmethod"},{"@":"blueprint_button_formnovalidate"},{"@":"blueprint_button_formtarget"}]},propertyValidationRules:{}}}}})