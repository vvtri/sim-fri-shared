"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEnvironment = exports.SortType = void 0;
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
