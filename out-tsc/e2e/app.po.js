"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Angular6ProjectPage = /** @class */ (function () {
    function Angular6ProjectPage() {
    }
    Angular6ProjectPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    Angular6ProjectPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return Angular6ProjectPage;
}());
exports.Angular6ProjectPage = Angular6ProjectPage;
//# sourceMappingURL=app.po.js.map