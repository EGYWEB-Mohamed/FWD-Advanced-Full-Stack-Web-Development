"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plusNumber_1 = __importDefault(require("../plusNumber"));
it('Should Equl', () => {
    expect((0, plusNumber_1.default)(10)).toEqual(20);
});
