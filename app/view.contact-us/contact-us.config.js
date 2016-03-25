(function() {
    
    'use strict';
    
    angular.module('app')
    
    .config(['$stateProvider', function($stateProvider) {
        
        $stateProvider
        .state('contact-us', {
            url: '/contact-us',
            templateUrl: 'app/view.contact-us/contact-us.tpl.html',
            controller: 'contactUsController',
            controllerAs: 'contactUsCtrl',
            data: {
                label: 'Contact Us',
                mainNav: true
            }
        });
        
    }]);
    
}()); 