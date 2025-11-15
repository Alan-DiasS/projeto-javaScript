"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Product.ts
class Product {
    constructor(id, name, price) {
        if (new.target === Product) {
            throw new Error("Product é abstrata e não pode ser instanciada diretamente.");
        }
        this._id = id;
        this._name = name;
        this._price = price;
    }
    get id() { return this._id; }
    get name() { return this._name; }
    get price() { return this._price; }
    set price(value) {
        if (value < 0)
            throw new Error("Preço não pode ser negativo.");
        this._price = value;
    }
}
exports.default = Product;
