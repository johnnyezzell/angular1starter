(function() {
    
    'use strict';
    
    describe('main-navigation directive', function() {
       
        var element, scope;
        
        beforeEach(module('app'));
        beforeEach(module('app/directive.main-navigation/main-navigation.tpl.html'));
        
        beforeEach(inject(function($rootScope, $compile, $state, lodash) {
            
            scope = $rootScope.$new();
            
            element = '<main-navigation brand="brand" states="states"></main-navigation>';
            
            scope.brand = 'Test Brand';
            
            scope.states = $state.get();
            scope.states = lodash.filter($state.get(), function(state) {
                return state.data && state.data.mainNav;
            });
            
            element = $compile(element)(scope);
            scope.$digest();
            
        }));
        
        it('should create one element per state', function() {
            expect(element.find('li').length).not.toBe(0);
        });
        
        it('should contain a link for home', function() {
            expect(element.html().indexOf('home')).not.toBe(-1); 
        });
        
    });
    
    
}());