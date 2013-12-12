'use strict';

var expect = require('chai').expect;

var UserModel = require('../../app/models').UserModel;


describe('@user model', function () {
    
    describe('Instance', function () {
        it('user should instance UserModel', function () {
            var user = new UserModel();
            expect(user).to.be.instanceOf(UserModel);
        });
    });
});
