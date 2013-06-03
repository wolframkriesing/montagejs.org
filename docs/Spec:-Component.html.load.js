montageDefine("876ff31","docs/Spec:-Component.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: Component - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<ul>\n<li>Draft -\nComponent   Editor Heather Douglass</li>\n</ul><p>Index\nIntroduction\nFunctional Description\nAPI\nExamples\nIntegration\nDependencies\nConcerns\n\nIntroduction</p>\n\n<p>A component is the basic building block of a Montage application.  It is an encapsulation of a document fragment and the controller logic for that fragment.\nFunctional Description</p>\n\n<p>Remove if unnecessary\nAPI</p>\n\n<p>Properties\nread-only\napplication\neventManager\nrootComponent\nparentComponent\nchildComponents\nownerComponent\noriginalContent\nread/write-once\nelement\nread/write\ndelegate - this is not used anywhere that I can tell\nparentProperty\ntemplate\nhasTemplate\ntemplateModuleId\ntemplateObjects\ndomContent\nneedsDraw\ncomposerList    - make this private?\nGates\ncanDrawGate\nblockDrawGate - make this private?</p>\n\n<p>Methods\nComposer Methods\naddComposer(composer)\naddComposerForElement(composer, element)\nscheduleComposer(composer)\nremoveComposer(composer)\nclearAllComposers()</p>\n\n<p>Draw Methods\ncanDraw()\nprepareForDraw()\nwillDraw(timestamp)\ndraw(timestamp)\ndidDraw(timestamp)\nchildComponentWillPrepareForDraw(child)</p>\n\n<p>Component tree methods\nsetElementWithParentComponent(element, parent)\nfindParentComponent()\nattachToParentComponent()\ndetachFromParentComponent()\nremoveChildComponent(childComponent)\nquerySelectorComponent(selector)\nquerySelectorAllComponent(selector)</p>\n\n<p>cleanupDeletedComponentTree()\nloadComponentTree(callback)\ntraverseComponentTree(visitor, callback)\nexpandComponent(callback)</p>\n\n<p>Serialization Methods\ndeserializedFromSerialization()\nserializeSelf(serializer, propertyNames)</p>\n\n<p>Template Methods\nloadTemplate(callback)\ntemplateDidDeserializeObject(object)\ndeserializedFromTemplate(object)</p>\n\n<p>Unspecified\n_dispatchActionEvent()\ncreateActionEvent()\nacceptsDirectFocus() - deprecated?\nelementControllerFromEvent(event, targetElementController) - deprecated?\ngateDidBecomeTrue(gate)\nprepareForActivationEvents()\nsurrenderPointer(pointer, demandingComponent)</p>\n\n<p>Future API\n    Dynamically adding and removing components?\n    Notification of component element insertion or removal from DOM\n    Ability to specify the template element for a component gh-942</p>\n\n<p>Events\naction\nfirstDraw\nExamples</p>\n\n<p>Creating components programmatically</p>\n\n<p>Component Lifecycle</p>\n\n<ul>\n<li>Components with/without templates</li>\n<li>Loading, stasis, unloading</li>\n<li>Components instantiated through deserialization vs. created programmatically</li>\n</ul>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n\n</body>\n</html>'})