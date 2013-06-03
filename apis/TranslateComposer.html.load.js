montageDefine("876ff31","apis/TranslateComposer.html",{text:'<!DOCTYPE html>\n<html lang=en>\n<head>\n    <meta charset=utf-8>\n    <title>JSDoc: TranslateComposer</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="stylesheets/normalize.css">\n    <link rel=stylesheet href="stylesheets/base.css">\n    <link rel=stylesheet href="stylesheets/pages.css">\n    <link rel=stylesheet href="stylesheets/solarized.css">\n\n    <script src="scripts/prettify/prettify.js"> </script>\n    <script src="scripts/prettify/lang-css.js"> </script>\n    <script src="scripts/search.js"> </script>\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n    <link type="text/css" rel=stylesheet href="styles/prettify-tomorrow.css">\n    <link type="text/css" rel=stylesheet href="styles/jsdoc-default.css">\n</head>\n\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="http://montagejs.org/apps">Apps</a>\n                <a class=nav-item href="http://montagejs.org/docs">Docs</a>\n                <a class="nav-item active" href="http://montagejs.org/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    \n\n    <section id=docs>\n\n\n\n\n<header>\n    <h2>\n    TranslateComposer\n    </h2>\n\n</header>\n\n<article>\n\n        <dl>\n            <dt>Extends</dt>\n            <dd><a href=Composer.html>Composer</a> </dd>\n        </dl>\n\n    <div class=container-overview>\n\n\n\n\n<dt>\n    <h4 class=name id=TranslateComposer></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Provides translateX and translateY properties that are updated when the\n    user clicks/touches and drags on the given element. Should be used wherever\n    a user interacts with an element by dragging it.</p>\n\n    </div>\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 41\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n        <h3 class=subsection-title>Properties</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=allowFloats><span class=type-signature></span>allowFloats<span class=type-signature> :Boolean</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Allow (@link translateX} and translateY to be floats.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>false</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 123\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=axis><span class=type-signature></span>axis<span class=type-signature> :String</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Which axis translation is restricted to.</p>\n<pre><code>    Can be "vertical", "horizontal" or "both".</code></pre>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>"both"</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 320\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=component><span class=type-signature></span>component<span class=type-signature> :<a href=Component.html>Component</a></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>The Montage component that the composer will listen for mouse events on.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="Composer.html#component">Composer#component</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>null</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/composer.js, line 52\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=element><span class=type-signature></span>element<span class=type-signature> :<a href=Component.html>Component</a></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>The DOM element that the composer will listen for events on. If no element is specified then the composer will use the element associated with its &lt;code&gt;component&lt;/code&gt; property.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="Composer.html#element">Composer#element</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>null</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/composer.js, line 70\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=hasMomentum><span class=type-signature></span>hasMomentum<span class=type-signature> :Boolean</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Whether to keep translating after the user has releases the cursor.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>true</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 420\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=invertAxis><span class=type-signature></span>invertAxis<span class=type-signature> :Boolean</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Invert direction of translation on both axes.</p>\n<pre><code>    This inverts the effect of cursor motion on both axes. For example\n    if set to true moving the mouse up will increase the value of\n    translateY instead of decreasing it.\n\n    Depends on invertXAxis and invertYAxis.</code></pre>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>false</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 350\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=invertXAxis><span class=type-signature></span>invertXAxis<span class=type-signature> :Boolean</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Invert direction of translation along the X axis.</p>\n<pre><code>    This inverts the effect of left/right cursor motion on translateX.</code></pre>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>false</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 370\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=invertYAxis><span class=type-signature></span>invertYAxis<span class=type-signature> :Boolean</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Invert direction of translation along the Y axis.</p>\n<pre><code>    This inverts the effect of up/down cursor motion on translateX.</code></pre>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>false</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 388\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=lazyLoad><span class=type-signature></span>lazyLoad<span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>This property controls when a composer\'s &lt;code&gt;load()&lt;/code&gt; method is called, which is where the composer create event listeners. If <code>false</code>\nthe composer\'s &lt;code&gt;load()&lt;/code&gt; method is called immediately as part of the next draw\ncycle after &lt;code&gt;addComposer()&lt;/code&gt; has been called on its associated component.  If\n<code>true</code>, the loading of the composer is delayed until its associated component\nhas had its &lt;code&gt;prepareForActivationEvents()&lt;/code&gt; called. Delaying the creation of event listeners until necessary can improve performance.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="Composer.html#lazyLoad">Composer#lazyLoad</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>false</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/composer.js, line 88\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=maxTranslateX><span class=type-signature></span>maxTranslateX<span class=type-signature> :number|null</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>The maximum value translateX can take. If set to null then\n        there is no maximum.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>null</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 239\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=maxTranslateY><span class=type-signature></span>maxTranslateY<span class=type-signature> :number|null</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>The maximum value translateY can take. If set to null then\n        there is no maximum.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>null</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 292\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=minTranslateX><span class=type-signature></span>minTranslateX<span class=type-signature> :number|null</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>The minimum value translateX can take. If set to null then\n        there is no minimum.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>null</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 213\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=minTranslateY><span class=type-signature></span>minTranslateY<span class=type-signature> :number|null</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>The minimum value translateY can take. If set to null then\n        there is no minimum.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>null</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 266\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=needsFrame><span class=type-signature></span>needsFrame<span class=type-signature> :boolean</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>This property should be set to \'true\' when the composer wants to have its &lt;code&gt;frame()&lt;/code&gt; method executed during the next draw cycle.Setting this property to \'true\' will cause Montage to schedule a new draw cycle if one has not already been.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="Composer.html#needsFrame">Composer#needsFrame</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>false</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/composer.js, line 101\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=pointerSpeedMultiplier><span class=type-signature></span>pointerSpeedMultiplier<span class=type-signature> :Number</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>How many pixels to translate by for each pixel of cursor movement.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>1</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 94\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=startTranslateSpeed><span class=type-signature></span>startTranslateSpeed<span class=type-signature> :Number</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>How fast the cursor has to be moving before translating starts. Only\n        applied when another component has claimed the pointer.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>500</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 403\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=translateX><span class=type-signature></span>translateX<span class=type-signature> :Number</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Amount of translation in the X (left/right) direction. Can be inverted with\n        invertXAxis, and restricted to a range with\n        minTranslateX and maxTranslateX.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>0</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 146\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n\n\n<dt>\n    <h4 class=name id=translateY><span class=type-signature></span>translateY<span class=type-signature> :Number</span></h4>\n\n\n</dt>\n<dd>\n\n    <div class=description>\n        <p>Amount of translation in the Y (up/down) direction. Can be inverted with\n        invertYAxis, and restricted to a range with\n        minTranslateY and maxTranslateY.</p>\n\n    </div>\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-default>Default Value:</dt>\n    <dd class=tag-default><ul class=dummy><li>0</li></ul></dd>\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/translate-composer.js, line 180\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n</dd>\n\n\n        </dl>\n\n\n\n        <h3 class=subsection-title>Methods</h3>\n\n        <dl>\n\n<dt>\n    <h4 class=name id=unload><span class=type-signature></span>unload<span class=signature>()</span><span class=type-signature></span></h4>\n\n\n</dt>\n<dd>\n\n\n    <div class="description markdown-body">\n        <p>Called when a component removes a composer.  Any event listeners that the composer needs to remove should\n        be removed in this method and any additional cleanup should be performed.</p>\n\n    </div>\n\n\n\n\n\n\n\n\n\n<dl class=details>\n\n\n\n\n\n\n\n    <dt class=inherited-from>Inherited From:</dt>\n    <dd class=inherited-from><ul class=dummy><li>\n        <a href="Composer.html#unload">Composer#unload</a>\n    </li></ul></dd>\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <dt class=tag-source>Source:</dt>\n    <dd class=tag-source><ul class=dummy><li>\n        ui/composer/composer.js, line 170\n    </li></ul></dd>\n\n\n\n\n\n\n\n</dl>\n\n\n\n\n\n\n\n\n\n</dd>\n\n        </dl>\n\n\n\n\n\n</article>\n\n\n\n\n\n    </section>\n\n    <nav class=docs>\n        <h2>Search</h2><input type=search id=index-search placeholder="search for"><details open=""><summary>Types</summary><ul><li><a href=Application.html>Application</a></li><li><a href=ArrayController.html>ArrayController</a></li><li><a href=BindingDescriptor.html>BindingDescriptor</a></li><li><a href=BitField.html>BitField</a></li><li><a href=Button.html>Button</a></li><li><a href=BytesConverter.html>BytesConverter</a></li><li><a href=ChangeEventDispatchingArray.html>ChangeEventDispatchingArray</a></li><li><a href=CheckInput.html>CheckInput</a></li><li><a href=Component.html>Component</a></li><li><a href=Composer.html>Composer</a></li><li><a href=Condition.html>Condition</a></li><li><a href=Converter.html>Converter</a></li><li><a href=CurrencyConverter.html>CurrencyConverter</a></li><li><a href=DateConverter.html>DateConverter</a></li><li><a href=DateValidator.html>DateValidator</a></li><li><a href=DefaultLocalizer.html>DefaultLocalizer</a></li><li><a href=Deserializer.html>Deserializer</a></li><li><a href=DynamicElement.html>DynamicElement</a></li><li><a href=DynamicText.html>DynamicText</a></li><li><a href=EditableText.html>EditableText</a></li><li><a href=Enum.html>Enum</a></li><li><a href=EventManager.html>EventManager</a></li><li><a href=Exception.html>Exception</a></li><li><a href=Gate.html>Gate</a></li><li><a href=InputText.html>InputText</a></li><li><a href=InvertConverter.html>InvertConverter</a></li><li><a href=KeyComposer.html>KeyComposer</a></li><li><a href=KeyManager.html>KeyManager</a></li><li><a href=Localizer.html>Localizer</a></li><li><a href=Logger.html>Logger</a></li><li><a href=LowerCaseConverter.html>LowerCaseConverter</a></li><li><a href=MediaController.html>MediaController</a></li><li><a href=MessageFormat.html>MessageFormat</a></li><li><a href=MessageLocalizer.html>MessageLocalizer</a></li><li><a href=Montage.html>Montage</a></li><li><a href=MontageWindow.html>MontageWindow</a></li><li><a href=MutableEvent.html>MutableEvent</a></li><li><a href=NativeControl.html>NativeControl</a></li><li><a href=NewLineToBrConverter.html>NewLineToBrConverter</a></li><li><a href=NumberConverter.html>NumberConverter</a></li><li><a href=NumberValidator.html>NumberValidator</a></li><li><a href=ObjectController.html>ObjectController</a></li><li><a href=PressComposer.html>PressComposer</a></li><li><a href=PropertyChangeBindingListener.html>PropertyChangeBindingListener</a></li><li><a href=Repetition.html>Repetition</a></li><li><a href=RootComponent.html>RootComponent</a></li><li><a href=Serializer_.html>Serializer</a></li><li><a href=Slot.html>Slot</a></li><li><a href=State.html>State</a></li><li><a href=StateChart.html>StateChart</a></li><li><a href=Substitution.html>Substitution</a></li><li><a href=SwipeComposer.html>SwipeComposer</a></li><li><a href=Template_.html>Template</a></li><li><a href=TranslateComposer.html>TranslateComposer</a></li><li><a href=TrimConverter.html>TrimConverter</a></li><li><a href=UndoManager.html>UndoManager</a></li><li><a href=UpperCaseConverter.html>UpperCaseConverter</a></li><li><a href=Uuid_.html>Uuid</a></li><li><a href=Validator.html>Validator</a></li></ul></details><details><summary>Externals</summary><ul><li><a href=external-Array.html>Array</a></li><li><a href=external-Element.html>Element</a></li><li><a href=external-Function.html>Function</a></li><li><a href=external-Object.html>Object</a></li><li><a href=external-RegExp.html>RegExp</a></li><li><a href=external-String.html>String</a></li></ul></details><details><summary>Events</summary><ul><li><a href="PressComposer.html#event:longPress">longPress</a></li><li><a href="PressComposer.html#event:press">press</a></li><li><a href="PressComposer.html#event:pressCancel">pressCancel</a></li><li><a href="PressComposer.html#event:pressStart">pressStart</a></li></ul></details><details><summary>Tutorials</summary><ul><li><a href=tutorial-README.html>README</a></li></ul></details><details><summary>Global</summary><ul><li><a href="global.html#_bezierTubeBoundingSphere">_bezierTubeBoundingSphere</a></li><li><a href="global.html#_computeRotationValuesToXAxis">_computeRotationValuesToXAxis</a></li><li><a href="global.html#_rayRectangleIntersection">_rayRectangleIntersection</a></li><li><a href="global.html#_rayRectangleIntersectionPosition">_rayRectangleIntersectionPosition</a></li><li><a href="global.html#_sphereIntersection">_sphereIntersection</a></li><li><a href="global.html#linearScrollingVector">linearScrollingVector</a></li><li><a href="global.html#relative">relative</a></li><li><a href="global.html#resolve">resolve</a></li><li><a href="global.html#test">test</a></li></ul></details>\n    </nav>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n    <script>var codes=document.getElementsByTagName("code");codes&&Array.prototype.forEach.call(codes,function(e){e.classList.contains("lang-javascript")&&e.classList.add("prettyprint")}),prettyPrint()</script>\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})