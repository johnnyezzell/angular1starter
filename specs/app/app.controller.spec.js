(function() {
    
    'use strict';
    
    describe('App Controller', function() {
        
        var scope, _;
        
        beforeEach(module('app'));
        
        beforeEach(inject(function($controller, $rootScope, lodash) {
            _ = lodash;
            scope = $rootScope.$new();
            $controller('appController as appCtrl', {
                $scope: scope 
            });
        }));
        
        it('should match the specified interface', function() {
            expect(scope.appCtrl.brand).toBeDefined();
            expect(scope.appCtrl.states).toBeDefined();
        });
        
    });
    
}());