(function() {
    
    'use strict';
    
    describe('ContactUs Controller', function() {
        
        var scope;
        
        beforeEach(module('app', function($provide) {
            $provide.value('contactUsFactory', {
                submitComments: function(testValue) {
                    return { 
                        then: function(success, failure) {
                            if(testValue) {
                                success();
                            }
                            else {
                                failure();
                            }
                        } 
                    };
                }
            });
        }));
        
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            $controller('contactUsController as contactUsCtrl', {
                $scope: scope
            });
        }));
        
        it('should have a dataObject', inject(function () {
            expect(scope.contactUsCtrl.dataObject).toBeDefined();
        }));
        
        it('should return success on valid submit', inject(function (noty) {
            spyOn(noty, 'show');
            scope.contactUsCtrl.dataObject = "{something:'else'}";
            scope.contactUsCtrl.submit();
            expect(noty.show).toHaveBeenCalledWith({ text: 'Saved Successfully!', type: 'success' });
        }));
        
        it('should return failure on invalid submit or errored submit', inject(function (noty) {
            spyOn(noty, 'showError');
            scope.contactUsCtrl.dataObject = undefined;
            scope.contactUsCtrl.submit();
            expect(noty.showError).toHaveBeenCalledWith('Error Saving!');
        }));
      
    });
    
}());