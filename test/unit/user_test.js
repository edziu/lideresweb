'use strict';

var expect = require('chai').expect;

var UserModel = require('../../app/models').UserModel;


describe('@user model', function () {
    
    beforeEach(function () {
        this.user = new UserModel({
            displayName : 'Eduardo Diaz',
            userName    : 'EduardoDiaz',
            email       : 'eduar.diaz37@gmail.com'
        });
    });


    describe('Instance', function () {
        it('user should instance UserModel', function () {
            expect(this.user).to.be.instanceOf(UserModel);
        });

        it('user should attributes', function () {
            expect(this.user.get('displayName')).to.be.equal('Eduardo Diaz');
            expect(this.user.get('userName')).to.be.equal('EduardoDiaz');
            expect(this.user.get('email')).to.be.equal('eduar.diaz37@gmail.com');
        });

        it('createAt attribute should be created by default', function () {
            expect(this.user.get('createAt')).to.be.instanceOf(Date);
        });
    });
});
