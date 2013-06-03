montageDefine("876ff31","apis/CurrencyConverter.html",{text:'<!DOCTYPE html>\n<html lang=en>\n<head>\n    <meta charset=utf-8>\n    <title>JSDoc: CurrencyConverter</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="stylesheets/normalize.css">\n    <link rel=stylesheet href="stylesheets/base.css">\n    <link rel=stylesheet href="stylesheets/pages.css">\n    <link rel=stylesheet href="stylesheets/solarized.css">\n\n    <script src="scripts/prettify/prettify.js"> </script>\n    <script src="scripts/prettify/lang-css.js"> </script>\n    <script src="scripts/search.js"> </script>\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <link type="text/css" rel=stylesheet href="styles/prettify-tomorrow.css">\n    <link type="text/css" rel=stylesheet href="styles/jsdoc-default.css">\n</head>\n\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="http://montagejs.org/apps">Apps</a>\n                <a class=nav-item href="http://montagejs.org/docs">Docs</a>\n                <a class="nav-item active" href="http://montagejs.org/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    \n\n    <section id=docs>\n\n\n\n\n<header>\n    <h2>\n    CurrencyConverter\n    </h2>\n\n        <div class=class-description><p>Formats a value as a currency.</p>\n</div>\n\n</header>\n\n<article>\n\n        <dl>\n            <dt>Extends</dt>\n            <dd><a href=NumberConverter.html>NumberConverter</a> </dd>\n        </dl>\n\n    <div class=container-overview>\n\n\n\n\n<dt>\n    <h4 class=name id=CurrencyConverter></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/currency-converter.js, line 61\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n        <h3 class=subsection-title>Properties</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=allowFloat><span class=type-signature></span>allowFloat<span class=type-signature> :Property</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="NumberConverter.html#allowFloat">NumberConverter#allowFloat</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{Boolean} true</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/number-converter.js, line 338\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=allowNegative><span class=type-signature></span>allowNegative<span class=type-signature> :Property</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="NumberConverter.html#allowNegative">NumberConverter#allowNegative</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{Boolean} true</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/number-converter.js, line 345\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=allowPartialConversion><span class=type-signature></span>allowPartialConversion<span class=type-signature> :Property</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="NumberConverter.html#allowPartialConversion">NumberConverter#allowPartialConversion</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{Boolean} false</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/number-converter.js, line 292\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=currency><span class=type-signature></span>currency<span class=type-signature> :String</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{String} \'$\'</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/currency-converter.js, line 72\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=decimals><span class=type-signature></span>decimals<span class=type-signature> :Number</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{Number} 2</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/currency-converter.js, line 80\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=round><span class=type-signature></span>round<span class=type-signature> :Property</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="NumberConverter.html#round">NumberConverter#round</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{Number} null</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/number-converter.js, line 323\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=shorten><span class=type-signature></span>shorten<span class=type-signature> :Property</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="NumberConverter.html#shorten">NumberConverter#shorten</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{String} null</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/number-converter.js, line 308\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=useParensForNegative><span class=type-signature></span>useParensForNegative<span class=type-signature> :Boolean</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{Boolean} false</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/currency-converter.js, line 88\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=validator><span class=type-signature></span>validator<span class=type-signature> :Function</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="NumberConverter.html#validator">NumberConverter#validator</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>{attribute} NumberValidator Uses this object.</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/number-converter.js, line 299\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n        </dl>\n\n\n\n        <h3 class=subsection-title>Methods</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=convert><span class=type-signature></span>convert<span class=signature>(amount)</span><span class=type-signature> → {String}</span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>amount</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>Number</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"></td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/currency-converter.js, line 97\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n    <h5>Returns:</h5>\n\n\n<div class=param-desc>\n    <p>The formatted currency value.</p>\n\n</div>\n\n\n\n<dl>\n	<dt class=return-type-label>\n		Type\n	</dt>\n	<dd class=return-type>\n\n<span class=param-type>String</span>\n\n\n	</dd>\n</dl>\n\n\n\n\n\n</dd>\n\n\n\n<dt>\n    <h4 class=name id=revert><span class=type-signature></span>revert<span class=signature>(stringValue)</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n\n\n\n\n\n\n        <h5>Parameters:</h5>\n\n\n<table class=params>\n    <thead>\n	<tr>\n\n		<th>Name</th>\n\n\n		<th>Type</th>\n\n\n\n\n\n		<th class=last>Description</th>\n	</tr>\n	</thead>\n\n	<tbody>\n\n\n        <tr>\n\n                <td class=name><code>stringValue</code></td>\n\n\n            <td class=type>\n\n\n<span class=param-type>String</span>\n\n\n\n            </td>\n\n\n\n\n\n            <td class="description last"><p>The value of the string.</p>\n</td>\n        </tr>\n\n\n	</tbody>\n</table>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="NumberConverter.html#revert">NumberConverter#revert</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        core/converter/number-converter.js, line 395\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n        </dl>\n\n\n\n\n\n</article>\n\n\n\n\n\n    </section>\n\n    <nav class=docs>\n        <h2>Search</h2><input type=search id=index-search placeholder="search for"><details open=""><summary>Types</summary><ul><li><a href=Application.html>Application</a></li><li><a href=ArrayController.html>ArrayController</a></li><li><a href=BindingDescriptor.html>BindingDescriptor</a></li><li><a href=BitField.html>BitField</a></li><li><a href=Button.html>Button</a></li><li><a href=BytesConverter.html>BytesConverter</a></li><li><a href=ChangeEventDispatchingArray.html>ChangeEventDispatchingArray</a></li><li><a href=CheckInput.html>CheckInput</a></li><li><a href=Component.html>Component</a></li><li><a href=Composer.html>Composer</a></li><li><a href=Condition.html>Condition</a></li><li><a href=Converter.html>Converter</a></li><li><a href=CurrencyConverter.html>CurrencyConverter</a></li><li><a href=DateConverter.html>DateConverter</a></li><li><a href=DateValidator.html>DateValidator</a></li><li><a href=DefaultLocalizer.html>DefaultLocalizer</a></li><li><a href=Deserializer.html>Deserializer</a></li><li><a href=DynamicElement.html>DynamicElement</a></li><li><a href=DynamicText.html>DynamicText</a></li><li><a href=EditableText.html>EditableText</a></li><li><a href=Enum.html>Enum</a></li><li><a href=EventManager.html>EventManager</a></li><li><a href=Exception.html>Exception</a></li><li><a href=Gate.html>Gate</a></li><li><a href=InputText.html>InputText</a></li><li><a href=InvertConverter.html>InvertConverter</a></li><li><a href=KeyComposer.html>KeyComposer</a></li><li><a href=KeyManager.html>KeyManager</a></li><li><a href=Localizer.html>Localizer</a></li><li><a href=Logger.html>Logger</a></li><li><a href=LowerCaseConverter.html>LowerCaseConverter</a></li><li><a href=MediaController.html>MediaController</a></li><li><a href=MessageFormat.html>MessageFormat</a></li><li><a href=MessageLocalizer.html>MessageLocalizer</a></li><li><a href=Montage.html>Montage</a></li><li><a href=MontageWindow.html>MontageWindow</a></li><li><a href=MutableEvent.html>MutableEvent</a></li><li><a href=NativeControl.html>NativeControl</a></li><li><a href=NewLineToBrConverter.html>NewLineToBrConverter</a></li><li><a href=NumberConverter.html>NumberConverter</a></li><li><a href=NumberValidator.html>NumberValidator</a></li><li><a href=ObjectController.html>ObjectController</a></li><li><a href=PressComposer.html>PressComposer</a></li><li><a href=PropertyChangeBindingListener.html>PropertyChangeBindingListener</a></li><li><a href=Repetition.html>Repetition</a></li><li><a href=RootComponent.html>RootComponent</a></li><li><a href=Serializer_.html>Serializer</a></li><li><a href=Slot.html>Slot</a></li><li><a href=State.html>State</a></li><li><a href=StateChart.html>StateChart</a></li><li><a href=Substitution.html>Substitution</a></li><li><a href=SwipeComposer.html>SwipeComposer</a></li><li><a href=Template_.html>Template</a></li><li><a href=TranslateComposer.html>TranslateComposer</a></li><li><a href=TrimConverter.html>TrimConverter</a></li><li><a href=UndoManager.html>UndoManager</a></li><li><a href=UpperCaseConverter.html>UpperCaseConverter</a></li><li><a href=Uuid_.html>Uuid</a></li><li><a href=Validator.html>Validator</a></li></ul></details><details><summary>Externals</summary><ul><li><a href=external-Array.html>Array</a></li><li><a href=external-Element.html>Element</a></li><li><a href=external-Function.html>Function</a></li><li><a href=external-Object.html>Object</a></li><li><a href=external-RegExp.html>RegExp</a></li><li><a href=external-String.html>String</a></li></ul></details><details><summary>Events</summary><ul><li><a href="PressComposer.html#event:longPress">longPress</a></li><li><a href="PressComposer.html#event:press">press</a></li><li><a href="PressComposer.html#event:pressCancel">pressCancel</a></li><li><a href="PressComposer.html#event:pressStart">pressStart</a></li></ul></details><details><summary>Tutorials</summary><ul><li><a href=tutorial-README.html>README</a></li></ul></details><details><summary>Global</summary><ul><li><a href="global.html#_bezierTubeBoundingSphere">_bezierTubeBoundingSphere</a></li><li><a href="global.html#_computeRotationValuesToXAxis">_computeRotationValuesToXAxis</a></li><li><a href="global.html#_rayRectangleIntersection">_rayRectangleIntersection</a></li><li><a href="global.html#_rayRectangleIntersectionPosition">_rayRectangleIntersectionPosition</a></li><li><a href="global.html#_sphereIntersection">_sphereIntersection</a></li><li><a href="global.html#linearScrollingVector">linearScrollingVector</a></li><li><a href="global.html#relative">relative</a></li><li><a href="global.html#resolve">resolve</a></li><li><a href="global.html#test">test</a></li></ul></details>\n    </nav>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n    <script>var codes=document.getElementsByTagName("code");codes&&Array.prototype.forEach.call(codes,function(e){e.classList.contains("lang-javascript")&&e.classList.add("prettyprint")}),prettyPrint()</script>\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})