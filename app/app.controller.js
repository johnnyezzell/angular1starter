(function() {
    
    'use strict';
    
    angular.module('app')
    
    .controller('appController', ['$state', 'lodash', function($state, _) {
        
        var that = this;
        
        that.brand = "Angular Starter";
        
        that.states = _.filter($state.get(), function(state) {
            return state.data && state.data.mainNav;
        });
        
    }]);
    
    
}());
