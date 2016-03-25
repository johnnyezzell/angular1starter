(function() {
    
    'use strict';
    
    angular.module('app')
    
    .directive('mainNavigation', function() {
       
        return {
            restrict: 'E',
            scope: {
                brand: '=brand',
                states: '=states'
            },
            templateUrl: 'app/directive.main-navigation/main-navigation.tpl.html'
        };
        
    });
    
}());