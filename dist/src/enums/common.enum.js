"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = exports.AppEnvironment = exports.SortType = void 0;
var SortType;
(function (SortType) {
    SortType["ASC"] = "ASC";
    SortType["DESC"] = "DESC";
})(SortType = exports.SortType || (exports.SortType = {}));
var AppEnvironment;
(function (AppEnvironment) {
    AppEnvironment["LOCAL"] = "local";
    AppEnvironment["TEST"] = "test";
    AppEnvironment["DEVELOPMENT"] = "development";
    AppEnvironment["PRODUCTION"] = "production";
})(AppEnvironment = exports.AppEnvironment || (exports.AppEnvironment = {}));
var Language;
(function (Language) {
    Language["VN"] = "vn";
    Language["EN"] = "en";
})(Language = exports.Language || (exports.Language = {}));
