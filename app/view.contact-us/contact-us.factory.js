(function() {
    
    'use strict';
    
    angular.module('app')
    
    .factory('contactUsFactory', ['ContactUsService', function(ContactUsService) {
        
        return new ContactUsService();
        
    }]);
    
}());