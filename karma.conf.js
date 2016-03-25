(function() {
    
    'use strict';
    
    module.exports = function(config) {
        
        var configOptions = {
            
            "basePath": "",
            
            "files": [
                "specs/helper.js",
                "node_modules/angular/angular.js",
                "node_modules/angular-messages/angular-messages.js",
                "node_modules/angular-mocks/angular-mocks.js",
                "node_modules/angular-ui-router/release/angular-ui-router.min.js",
                "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
                "node_modules/ng-lodash/build/ng-lodash.min.js",
                "node_modules/jquery/dist/jquery.min.js",
                "node_modules/bootstrap/dist/js/bootstrap.min.js",          
                "node_modules/noty/js/noty/packaged/jquery.noty.packaged.min.js",
                "node_modules/angular-noty-nao/angular-noty.js",           
                "app/**/*.tpl.html",
                "app/app.js",
                "app/**/*.js",
                "specs/app/**/*.js"
            ],
            
            "color": true,
            
            "frameworks": ["jasmine"],
            
            "reporters": ["progress", "coverage"],
            
            "browsers": ["PhantomJS"],
            
            "plugins": [
                "karma-phantomjs-launcher",
                "karma-jasmine",
                "karma-mocha-reporter",
                "karma-coverage",
                "karma-ng-html2js-preprocessor"
            ],
            
            "preprocessors": {
                "app/**/*.js": ["coverage"],
                "app/**/*.tpl.html": ["ng-html2js"]
            },
            
            "coverageReport": {
                "reporters": [
                    { "type": "html", "dir": "coverage", "subdir": "html" },
                    { "type": "json", "dir": "coverage", "subdir": "json" },
                    { "type": "text" }
                ]
            },
            
            "logLevel": config.LOG_INFO
            
        };
        
        config.set(configOptions);
        
    };
    
}());