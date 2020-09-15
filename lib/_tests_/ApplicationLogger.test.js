"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var l = new index_1.default();
describe('check logger instance', function () {
    test('Instantion', function () {
        expect(l).toBeInstanceOf(index_1.default);
    });
});
describe('functionUnderTest', function () {
    it('should throw a specific type of error.', function () {
        var initObject = {
            ENV: 'develop',
            APPLICATION: 'partner-dashboard',
            PARTNER_NAME: 'AYOPOP',
            CONSOLE: 'false',
            PUBLISH_URL: 'https://dev0pg.openapi.ayopop.id/v1/partnermanager/api/product/updateproductdetails',
        };
        try {
            l.init(initObject, 2);
        }
        catch (error) {
            expect(error).toHaveProperty('message', 'Mandatory parameter PUBLISH_URL');
        }
    });
});
