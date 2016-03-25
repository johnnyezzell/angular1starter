(function() {
    
    'use strict';
    
    describe('Home Controller', function() {
        
        var scope;
        
        beforeEach(module('app'));
        
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            $controller('homeController as homeCtrl', {
                $scope: scope 
            });
        }));
        
        it('should mathe the title', inject(function () {
            expect(scope.homeCtrl.title).toBe('Home');
        }));
      
    });
    
}());