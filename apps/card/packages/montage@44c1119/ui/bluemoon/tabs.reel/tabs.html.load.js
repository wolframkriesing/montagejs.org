montageDefine("44c1119","ui/bluemoon/tabs.reel/tabs.html",{text:'<!DOCTYPE html>\n\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=tabs.css>\n    <script type="text/montage-serialization">{"navController":{"prototype":"ui/controller/array-controller","properties":{"selectObjectsOnAddition":true,"automaticallyOrganizeObjects":true},"bindings":{"content":{"<-":"@owner.tabs"}}},"repetition1":{"prototype":"ui/repetition.reel","properties":{"element":{"#":"tab-list"},"isSelectionEnabled":true,"contentController":{"@":"navController"}}},"owner":{"prototype":"ui/bluemoon/tabs.reel","properties":{"element":{"#":"tabs-nav"},"navController":{"@":"navController"},"_repetition":{"@":"repetition1"},"_indicator":{"#":"montage-Tabs-indicator"}},"bindings":{"selectedTabs":{"<-":"@navController.selectedObjects"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=tabs-nav class="montage-Tabs montage-container">\n        <div data-montage-id=montage-Tabs-indicator class=montage-Tabs-indicator style="display: none"></div>\n        <ul data-montage-id=tab-list class="montage-Tabs-list montage-clearfix">\n            <li></li>\n        </ul>\n    </div>\n</body>\n</html>'})