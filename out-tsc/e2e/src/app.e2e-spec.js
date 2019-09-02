'use strict'; // necessary for es6 output in node
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var protractor_1 = require("protractor");
var nameSuffix = 'X';
var Hero = /** @class */ (function () {
    function Hero() {
    }
    return Hero;
}());
describe('Architecture', function () {
    var expectedTitle = 'Architecture of Angular';
    var expectedH2 = ['Hero List', 'Sales Tax Calculator'];
    beforeAll(function () { return protractor_1.browser.get(''); });
    it("has title '" + expectedTitle + "'", function () {
        expect(protractor_1.browser.getTitle()).toEqual(expectedTitle);
    });
    it("has h2 '" + expectedH2 + "'", function () {
        var h2 = protractor_1.element.all(protractor_1.by.css('h2')).map(function (elt) { return elt.getText(); });
        expect(h2).toEqual(expectedH2);
    });
    describe('Hero', heroTests);
    describe('Salex tax', salesTaxTests);
});
function heroTests() {
    var _this = this;
    var targetHero = { id: 2, name: 'Dr Nice' };
    it('has the right number of heroes', function () {
        var page = getPageElts();
        expect(page.heroes.count()).toEqual(3);
    });
    it('has no hero details initially', function () {
        var page = getPageElts();
        expect(page.heroDetail.isPresent()).toBeFalsy('no hero detail');
    });
    it('shows selected hero details', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var page, hero;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.element(protractor_1.by.cssContainingText('li', targetHero.name)).click()];
                case 1:
                    _a.sent();
                    page = getPageElts();
                    return [4 /*yield*/, heroFromDetail(page.heroDetail)];
                case 2:
                    hero = _a.sent();
                    expect(hero.id).toEqual(targetHero.id);
                    expect(hero.name).toEqual(targetHero.name);
                    return [2 /*return*/];
            }
        });
    }); });
    it("shows updated hero name in details", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var input, page, hero, newName;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    input = protractor_1.element.all(protractor_1.by.css('input')).first();
                    input.sendKeys(nameSuffix);
                    page = getPageElts();
                    return [4 /*yield*/, heroFromDetail(page.heroDetail)];
                case 1:
                    hero = _a.sent();
                    newName = targetHero.name + nameSuffix;
                    expect(hero.id).toEqual(targetHero.id);
                    expect(hero.name).toEqual(newName);
                    return [2 /*return*/];
            }
        });
    }); });
}
function salesTaxTests() {
    it('has no sales tax initially', function () {
        var page = getPageElts();
        expect(page.salesTaxDetail.isPresent()).toBeFalsy('no sales tax info');
    });
    it('shows sales tax', function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var page;
            return tslib_1.__generator(this, function (_a) {
                page = getPageElts();
                page.salesTaxAmountInput.sendKeys('10', protractor_1.protractor.Key.ENTER);
                expect(page.salesTaxDetail.getText()).toEqual('The sales tax is $1.00');
                return [2 /*return*/];
            });
        });
    });
}
// Helper functions
function getPageElts() {
    return {
        heroes: protractor_1.element.all(protractor_1.by.css('app-root li')),
        heroDetail: protractor_1.element(protractor_1.by.css('app-root app-hero-detail')),
        salesTaxAmountInput: protractor_1.element(protractor_1.by.css('app-root app-sales-tax input')),
        salesTaxDetail: protractor_1.element(protractor_1.by.css('app-root app-sales-tax div'))
    };
}
function heroFromDetail(detail) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _id, _name;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, detail.all(protractor_1.by.css('div')).first().getText()];
                case 1:
                    _id = _a.sent();
                    return [4 /*yield*/, detail.element(protractor_1.by.css('h4')).getText()];
                case 2:
                    _name = _a.sent();
                    return [2 /*return*/, {
                            id: +_id.substr(_id.indexOf(' ') + 1),
                            name: _name.substr(0, _name.lastIndexOf(' '))
                        }];
            }
        });
    });
}
//# sourceMappingURL=app.e2e-spec.js.map