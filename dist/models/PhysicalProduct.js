"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// PhysicalProduct.ts
const Product_1 = __importDefault(require("./Product"));
class PhysicalProduct extends Product_1.default {
    constructor(id, name, price, weightKg, stock) {
        super(id, name, price);
        this.weightKg = weightKg;
        this.stock = stock;
    }
    getDescription() {
        return `${this.name} — R$${this.price.toFixed(2)} — ${this.weightKg}kg — Estoque: ${this.stock}`;
    }
    calculateShipping(distanceKm) {
        const base = 10;
        return base + 2 * distanceKm + this.weightKg;
    }
    reduceStock(qty) {
        if (qty > this.stock)
            throw new Error("Quantidade maior que o estoque disponível.");
        this.stock -= qty;
    }
}
exports.default = PhysicalProduct;
