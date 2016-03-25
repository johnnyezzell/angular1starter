(function() {
    
    'use strict';
    
    angular.module('app')
    
    .config(['$stateProvider', function($stateProvider) {
        
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/view.home/home.tpl.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl',
            data: {
                label: 'Home',
                mainNav: true
            }
        });
        
    }]);
    
}()); 