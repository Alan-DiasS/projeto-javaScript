// Product.ts
export default abstract class Product {
    protected _id: number;
    protected _name: string;
    protected _price: number;

    constructor(id: number, name: string, price: number) {
        if (new.target === Product) {
            throw new Error("Product é abstrata e não pode ser instanciada diretamente.");
        }
        this._id = id;
        this._name = name;
        this._price = price;
    }

    get id(): number { return this._id; }
    get name(): string { return this._name; }
    get price(): number { return this._price; }

    set price(value: number) {
        if (value < 0) throw new Error("Preço não pode ser negativo.");
        this._price = value;
    }

    abstract getDescription(): string;
}
