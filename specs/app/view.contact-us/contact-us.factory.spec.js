(function() {
    
    'use strict';
    
    describe('ContactUs Factory', function() {
        
        beforeEach(module('app'));
                    
        it('should return an instance of contactUsService', inject(function (contactUsFactory) {
            expect(contactUsFactory).toBeDefined();
            expect(contactUsFactory.submitComments).toBeDefined();
        }));
      
    });
    
}());