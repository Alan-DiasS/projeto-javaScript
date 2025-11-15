import promptSync from "prompt-sync";
import seed from "./models/data/seedProducts";
import Cart from "./models/Cart";
import PhysicalProduct from "./models/PhysicalProduct";

const prompt = promptSync();
const products = seed();
const cart = new Cart();
const orders = new Map<number, any>();
let nextOrderId = 1;

function showMenu() {
    console.log("\n===== E-COMMERCE EM TYPESCRIPT =====");
    console.log("1 - Listar produtos");
    console.log("2 - Ver detalhes do produto");
    console.log("3 - Adicionar ao carrinho");
    console.log("4 - Ver carrinho");
    console.log("5 - Finalizar compra");
    console.log("6 - Listar pedidos");
    console.log("0 - Sair");
}

function listProducts() {
    console.log("\n--- Produtos ---");
    products.forEach((p) => console.log(p.getDescription()));
}

function findProduct(id: number) {
    return products.find(p => p.id === id);
}

function main() {
    while (true) {
        try {
            showMenu();
            const opt = Number(prompt("Escolha uma opção: "));

            switch (opt) {
                case 0:
                    console.log("Até logo!");
                    return;

                case 1:
                    listProducts();
                    break;

                case 2: {
                    const id = Number(prompt("ID do produto: "));
                    const p = findProduct(id);
                    if (!p) console.log("Produto não encontrado.");
                    else console.log(p.getDescription());
                    break;
                }

                case 3: {
                    const id = Number(prompt("ID do produto para adicionar: "));
                    const qty = Number(prompt("Quantidade: "));
                    const p = findProduct(id);

                    if (!p) { console.log("Produto não encontrado."); break; }

                    try {
                        (p as PhysicalProduct).reduceStock(qty);
                        cart.addProduct(p, qty);
                        console.log("Adicionado ao carrinho.");
                    } catch (err: any) {
                        console.log("Erro: " + err.message);
                    }
                    break;
                }

                case 4:
                    console.log("\n--- Carrinho ---");
                    console.log(cart.listItems());
                    console.log("Total: R$" + cart.getTotal().toFixed(2));
                    break;

                case 5: {
                    if (cart.items.length === 0) {
                        console.log("Carrinho vazio.");
                        break;
                    }

                    const id = nextOrderId++;
                    const total = cart.getTotal();
                    orders.set(id, {
                        items: JSON.parse(JSON.stringify(cart.items)),
                        total,
                        date: new Date()
                    });

                    console.log(`Compra finalizada! Pedido #${id} — Total R$${total.toFixed(2)}`);
                    cart.clear();
                    break;
                }

                case 6:
                    console.log("\n--- Pedidos ---");
                    if (orders.size === 0) {
                        console.log("Nenhum pedido realizado.");
                        break;
                    }
                    for (const [id, order] of orders.entries()) {
                        console.log(`Pedido #${id} — Total R$${order.total.toFixed(2)} — Data: ${order.date}`);
                    }
                    break;

                default:
                    console.log("Opção inválida.");
            }
        } catch (err: any) {
            console.log("Erro inesperado: " + err.message);
        }
    }
}

main();
