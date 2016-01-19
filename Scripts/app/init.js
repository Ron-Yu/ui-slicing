requirejs.config({
    "baseUrl": "scripts",
    "paths": {
        knockout:"lib/knockout-3.4.0",
        text : "lib/text",
        domReady:"lib/domReady",
    }
});

require(['knockout', 'app/appViewModel','domReady!'], function(ko, appViewModel) {
    ko.components.register('cms-header', { require: 'components/header' });
    ko.components.register('cms-footer', { require: 'components/footer' });
    ko.applyBindings(app);
});