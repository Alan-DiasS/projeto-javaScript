"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = seed;
const PhysicalProduct_1 = __importDefault(require("../PhysicalProduct"));
function seed() {
    return [
        new PhysicalProduct_1.default(1, "Camiseta", 59.90, 0.3, 20),
        new PhysicalProduct_1.default(2, "Caneca", 29.90, 0.5, 35),
        new PhysicalProduct_1.default(3, "Notebook 14\"", 3200.00, 1.5, 5),
    ];
}
