import PhysicalProduct from "../PhysicalProduct";

export default function seed() {
    return [
        new PhysicalProduct(1, "Camiseta", 59.90, 0.3, 20),
        new PhysicalProduct(2, "Caneca", 29.90, 0.5, 35),
        new PhysicalProduct(3, "Notebook 14\"", 3200.00, 1.5, 5),
    ];
}
