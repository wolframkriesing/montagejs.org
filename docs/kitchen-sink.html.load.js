montageDefine("28f0767","docs/kitchen-sink.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Kitchen Sink - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Montage Components<a class=anchor id=Montage-Components href="#Montage-Components"></a>\n</h1>\n\n<p><strong>Text</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904314">Hello World</a></li>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904331">Set text programmatically</a></li>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904335">Set text with a binding</a></li>\n</ul><p><strong>Page Controls</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904339">Simple repetition</a></li>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5906283">Simple substitution</a></li>\n</ul><p><strong>Converters</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904344">Number converters</a></li>\n</ul><h1>UI Components (Digit)<a class=anchor id="UI-Components-(Digit)" href="#UI-Components-(Digit)"></a>\n</h1>\n\n<p><strong>Button</strong></p>\n\n<ul>\n<li>\n<a href="http://montagejs.github.io/mfiddle/#!/5906286">Button with an explicit identifier</a> (used to link to a handler method)</li>\n<li>\n<a href="http://montagejs.github.io/mfiddle/#!/5906289">Button with a default identifier</a> (serialization label is the default identifier)</li>\n<li>\n<a href="http://montagejs.github.io/mfiddle/#!/5906291">Submit button without a specific handler</a> (the <code>handleAction()</code> method will be called on when the "action" event is dispatched)</li>\n</ul><p><strong>TextField</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5906293">A simple text field</a></li>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5906294">A text field with a placeholder</a></li>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5906296">A disabled text field enabled by a button click</a></li>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5906297">A text field action</a></li>\n</ul><p><strong>TextArea</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904443">A simple text area</a></li>\n</ul><p><strong>Slider</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904461">A simple slider</a></li>\n<li>\n<a href="http://montagejs.github.io/mfiddle/#!/5904468">Two-way binding</a> between a slider and a text field</li>\n</ul><p><strong>NumberField</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904473">A simple number field</a></li>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904479">Bindings between number fields</a></li>\n</ul><p><strong>Select</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904481">A simple select</a></li>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904482">A select powered by a range controller</a></li>\n</ul><p><strong>Checkbox</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904488">A simple checkbox</a></li>\n</ul><p><strong>RadioButton</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904493">A radio button group</a></li>\n</ul><p><strong>Image</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904495">An image</a></li>\n</ul><p><strong>List</strong></p>\n\n<ul>\n<li><a href="http://montagejs.github.io/mfiddle/#!/5904497">A list of categories</a></li>\n</ul><h1>Draw Cycle<a class=anchor id=Draw-Cycle href="#Draw-Cycle"></a>\n</h1>\n\n<ul>\n<li>Changing the background color of an element with a <a href="http://montagejs.github.io/mfiddle/#!/5904498">slider</a>\n</li>\n</ul>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(e,t,r){var n,i=e.getElementsByTagName(t)[0];e.getElementById(r)||(n=e.createElement(t),n.id=r,n.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(n,i))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(e,t,r){var n,i=e.getElementsByTagName(t)[0];e.getElementById(r)||(n=e.createElement(t),n.id=r,n.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(n,i))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();</script>\n\n</body>\n</html>'});