(function() {
    
    'use strict';
    
    describe('Home Config', function() {
       
        var homeScope;
        
        beforeEach(module('app'));
        
        beforeEach(inject(function($rootScope, $templateCache) {
            homeScope = $rootScope.$new();
            $templateCache.put('app/view.home/home.tpl.html', '');
        }));
        
        it('should go to home when navigating to /', inject(function($state, $location) {
            $location.path('/');
            homeScope.$apply();
            expect($state.current.name).toBe('home');
        }));
        
    });
    
}()); 