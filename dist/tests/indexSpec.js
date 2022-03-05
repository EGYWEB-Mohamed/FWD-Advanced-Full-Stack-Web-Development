"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
it('expect myFunc(10) to equal 100', () => {
    expect((0, index_1.default)(10)).toEqual(100);
});
