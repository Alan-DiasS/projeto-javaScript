// Cart.ts
import Product from "./Product";

export interface CartItem {
    product: Product;
    qty: number;
}

export default class Cart {
    public items: CartItem[] = [];

    addProduct(product: Product, qty: number = 1) {
        if (qty <= 0) throw new Error("Quantidade inválida.");

        const existing = this.items.find(i => i.product.id === product.id);

        if (existing) {
            existing.qty += qty;
        } else {
            this.items.push({ product, qty });
        }
    }

    removeProduct(productId: number) {
        this.items = this.items.filter(i => i.product.id !== productId);
    }

    getTotal(): number {
        return this.items.reduce((acc, item) => acc + item.product.price * item.qty, 0);
    }

    listItems(): string {
        if (this.items.length === 0) return "Carrinho vazio.";

        return this.items
            .map(i => `${i.product.name} x${i.qty} — R$${(i.product.price * i.qty).toFixed(2)}`)
            .join("\n");
    }

    clear() {
        this.items = [];
    }
}
