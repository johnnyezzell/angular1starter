(function() {
    
    'use strict';
    
    angular.module('app', ['ui.router', 'ui.bootstrap', 'ngLodash', 'ngMessages', 'notyModule'])
    
    .config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
        
        $locationProvider.html5Mode(true);
        
        $urlRouterProvider.otherwise('/');
        
    }]);
    
}());  