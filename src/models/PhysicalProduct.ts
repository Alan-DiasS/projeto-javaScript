// PhysicalProduct.ts
import Product from "./Product";

export default class PhysicalProduct extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        public weightKg: number,
        public stock: number
    ) {
        super(id, name, price);
    }

    getDescription(): string {
        return `${this.name} — R$${this.price.toFixed(2)} — ${this.weightKg}kg — Estoque: ${this.stock}`;
    }

    calculateShipping(distanceKm: number): number {
        const base = 10;
        return base + 2 * distanceKm + this.weightKg;
    }

    reduceStock(qty: number) {
        if (qty > this.stock) throw new Error("Quantidade maior que o estoque disponível.");
        this.stock -= qty;
    }
}
