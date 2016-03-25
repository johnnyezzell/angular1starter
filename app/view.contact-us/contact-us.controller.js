(function() {
    
    'use strict';
    
    angular.module('app')
    
    .controller('contactUsController', ['contactUsFactory', '$window', 'noty', function(contactUsFactory, $window, noty) {

        var that = this;
        
        that.dataObject = {
            email: '',
            firstName: '',
            lastName: '',
            comments: ''
        };
        
        that.submit = function() {
            contactUsFactory.submitComments(that.dataObject)
            .then(function() {
                noty.show({
                    type: 'success',
                    text: 'Saved Successfully!'
                });
            },
            function() {
                noty.showError('Error Saving!');
            });
        };
        
    }]);

}());