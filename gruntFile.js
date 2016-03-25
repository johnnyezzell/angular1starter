module.exports = function(grunt) {
    
    "use strict";
    
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-istanbul-coverage");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    
    var modRewrite = require("connect-modrewrite");
    
    grunt.registerTask("default", ["jshint", "connect:server", "karma:unit:start", "watch"]);
    grunt.registerTask("build", ["clean:build", "less:build", "concat:build", "cssmin:bulid", "uglify:build", "copy:build"]);
    
    grunt.initConfig({
        
        // Temporary HTML server, great for local development
        "connect": {
       
            "server": {
            
                "options": {
                    "port": 3000,
                    "base": "",
                    "livereload": true,
                    "hostname": "localhost",
                    "middleware": function(connect, options) {
                        var middlewares = [];
                        middlewares.push(modRewrite(["^[^\\.]*$ /index.html [L]"]));
                        options.base.forEach(function(base) {
                            middlewares.push(connect.static(base));
                        });
                        return middlewares;
                    }
                
                }
                
            }
            
        },
        
        // Watch the specified folders and files for changes.
        // If a change occurs, perform the specified actions.
        "watch": {
            
            "options": {
                "livereload": true
            },
            
            "html": {
                "files": ["app/**/*.html"]
            },
            
            "htmlIndex": {
                "files": ["index.html"],
                "tasks": ["karma:unit:run"]
            },
            
            "lessApp": {
                "files": ["app/**/*.less"],
                "tasks": ["less:app"]
            },
            
            "javascript": {
                "files": ["app/**/*.js", "specs/**/*.js", "gruntFile.js", "karma.conf.js"],
                "tasks": ["jshint"]
            },
            
            "karma": {
                "files": ["app/**/*.js", "specs/**/*.js"],
                "tasks": ["clean:coverage", "karma:unit:run"]
            }
            
        },
        
        "karma": {
            "unit": {
                "configFile": "karma.conf.js",
                "background": true,
                "singleRun": false,
                "autoWatch": false
            }
        },
        
        "jshint": {
            "options": {
                "jshintrc": ".jshintrc",
                "reporter": require("jshint-stylish")
            },
            "main": {
                "src": [
                    "app/**/*.js",
                    "specs/**/*.js"
                ]
            }
        },
        
        "less": {
            "app": {
                "files": {
                    "app/app.css": "app/app.less"
                }
            },
            "build": {
                "options": {
                    "cleancss": true,
                    "report": "min"
                },
                "files": {
                    "app/app.css": "app/app.less"
                }
            }
        },
        
        "clean": {
            "options": {
                "force": true
            },
            "coverage": ["coverage/**/*.*"],
            "build": ["build/**/*.*"]
        },
        
        "coverage": {
            "options": {
                "thresholds": {
                    "statements": 90,
                    "branches": 90,
                    "lines": 90,
                    "functions": 90
                },
                "dir": "coverage/json",
                "root": ""
            }
        },
        
        "concat": {
            "build": {
                "files": {
                    "build/build.js": [
                        "app/**/*.js"
                    ],
                    "build/app.css": [
                        "app/app.css"
                    ]
                }
            }
        },
        
        "uglify": {
            "options": {
                "mingle": false
            },
            "build": {
                "files": {
                    "build/build.min.js": ["build/build.js"]
                }
            }
        },
        
        "copy": {
            "build": {
                "files": [
                    { "src": "node_modules/angular/angular.min.js", "dest": "build/scripts/angular.min.js" },
                    { "src": "node_modules/angular-aria/angular-aria.min.js", "dest": "build/scripts/angular-aria.min.js" },
                    { "src": "node_modules/angular-resource/angular-resource.min.js", "dest": "build/scripts/angular-resource.min.js" },
                    { "src": "node_modules/angular-ui-router/release/angular-ui-router.min.js", "dest": "build/scripts/angular-ui-router.min.js" },
                    { "src": "node_modules/jquery/dist/jquery.min.js", "dest": "build/scripts/jquery.min.js" },
                    { "src": "node_modules/bootstrap/dist/js/bootstrap.min.js", "dest": "build/scripts/bootstrap.min.js" },
                    { "src": "node_moduels/angular-ui-bootstrap/dist/ui-bootstrap.js", "dest": "build/scripts/ui-bootstrap.js" },
                    { "src": "node_moduels/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js", "dest": "build/scripts/ui-bootstrap-tpls.js" },
                    { "src": "index.build.html", "dest": "build/index.html" },
                ]
            }
        },
        
        "cssmin": {
            "build": {
                "files": [{
                    "expand": true,
                    "cwd": "build",
                    "src": ["*.css", "!*.min.css"],
                    "dest": "build",
                    "ext": ".min.css"
                }]
            }
        }
        
    });
    
};