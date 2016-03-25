(function() {
    
    'use strict';
    
    describe('ContactUs Service', function() {
        
        var $httpBackend,
            contactUsService;
        
        beforeEach(module('app'));
        
        beforeEach(inject(function($injector, ContactUsService) { 
            $httpBackend = $injector.get('$httpBackend');
            contactUsService = new ContactUsService();
        }));
        
        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
        
        it('should submit comments succefully when valid', function() {
            
            $httpBackend.expectPOST('/api/contant-us', { 
                email: '1',
                firstName: '2',
                lastName: '3',
                comments: '4' 
            })
            .respond({ 
                hasError: false, 
                errorMessage: undefined, 
                data: 'SUCCESS'
            });
            
            contactUsService.submitComments({
                email: '1',
                firstName: '2',
                lastName: '3',
                comments: '4'                
            })
            .then(function(submitResponse) {
                expect(submitResponse).toBe('SUCCESS');
            });
        
            $httpBackend.flush();
            
        });
        
        
        it('should get server side error when expected', function() {
            
            $httpBackend.expectPOST('/api/contant-us', { 
                email: '2',
                firstName: '3',
                lastName: '4',
                comments: '5' 
            })
            .respond({ 
                hasError: true, 
                errorMessage: 'Some server side error message', 
                data: undefined
            });
            
            contactUsService.submitComments({
                email: '2',
                firstName: '3',
                lastName: '4',
                comments: '5'                
            })
            .then(function() {
            },
            function(error) {
                expect(error.message).toBe('Some server side error message');
            });
        
            $httpBackend.flush();
            
        });
        
        it('should get server error when expected', function() {
            
            $httpBackend.expectPOST('/api/contant-us', { 
                email: '3',
                firstName: '4',
                lastName: '5',
                comments: '6' 
            })
            .respond(404, {
                data: "Cannot POST /api/contact-us",
                status: 404,
                config: {},
                statusText: "Not Found"
            });
            
            contactUsService.submitComments({
                email: '3',
                firstName: '4',
                lastName: '5',
                comments: '6'                
            })
            .then(function() {
            },
            function(error) {
                expect(error.message).toBe('Not Found');
            });
        
            $httpBackend.flush();
            
        });
        
    });
    
}());