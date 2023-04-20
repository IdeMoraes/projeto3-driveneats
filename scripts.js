let selectedItems = 0;
let dish;
let drink;
let dessert;
let dishPrice;
let drinkPrice;
let dessertPrice;
let totalPrice = 0;

const dishes = [
    {
        name: "Frango americano",
        image: "frango-americano.jpg",
        description: "Frango frito americano igual do Baldelícia",
        price: 27.90
    },
    {
        name: "Frango oriental",
        image: "frango-oriental.jpeg",
        description: "Tradicional Frango Xadrez com muito amendoim",
        price: 29.90
    },
    {
        name: "Frango a passarinho",
        image: "frango-passarinho.jpg",
        description: "O típico frango a passarinho que a sua avó faz",
        price: 25.90
    }
];
const drinks = [
    {
        name: "Água de coco",
        image: "agua-coco.jpeg",
        description: "Entregamos direto no coco",
        price: 5.90
    },
    {
        name: "Suco detox",
        image: "suco-detox.jpg",
        description: "Copo 350ml (com couve, limão e gengibre)",
        price: 7.90
    },
    {
        name: "Suco de Laranja",
        image: "suco-laranja.jpeg",
        description: "Copo 350ml (feito com laranjas pêra rio)",
        price: 4.90
    }
];
const desserts = [
    {
        name: "Doce de Leite",
        image: "doce-leite.jpg",
        description: "Doce de leite macio e gostoso",
        price: 12.90
    },
    {
        name: "Pé de moleque",
        image: "pe-moleque.jpg",
        description: "O delicioso doce de amendoim com rapadura",
        price: 10.90
    },
    {
        name: "Romeu e Julieta",
        image: "romeu-julieta.jpg",
        description: "Uma das combinações mais gostosas que você pode encontrar",
        price: 11.90
    }
];
const availableDishes = document.querySelector(".opcoes.prato");
dishes.map((dish)=>{
    availableDishes.innerHTML += `
        <div class="opcao" onclick="selectDish(this, \'${dish.name}\', ${dish.price})">\
            <img src="images/${dish.image}" />\
            <div class="titulo">${dish.name}</div>\
            <div class="descricao">${dish.description}</div>\
            <div class="fundo">\
                <div class="preco">R$ ${dish.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>\
                <div class="check">\
                    <ion-icon name="checkmark-circle"></ion-icon>\
                </div>\
            </div>\
        </div>
  `;
});
const availableDrinks = document.querySelector(".opcoes.bebida");
drinks.map((drink)=>{
    availableDrinks.innerHTML += `
        <div class="opcao" onclick="selectDrink(this, \'${drink.name}\', ${drink.price})">\
            <img src="images/${drink.image}" />\
            <div class="titulo">${drink.name}</div>\
            <div class="descricao">${drink.description}</div>\
            <div class="fundo">\
                <div class="preco">R$ ${drink.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>\
                <div class="check">\
                    <ion-icon name="checkmark-circle"></ion-icon>\
                </div>\
            </div>\
        </div>
  `;
});
const availableDesserts = document.querySelector(".opcoes.sobremesa");
desserts.map((dessert)=>{
    availableDesserts.innerHTML += `
        <div class="opcao" onclick="selectDessert(this, \'${dessert.name}\', ${dessert.price})">\
            <img src="images/${dessert.image}" />\
            <div class="titulo">${dessert.name}</div>\
            <div class="descricao">${dessert.description}</div>\
            <div class="fundo">\
                <div class="preco">R$ ${dessert.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>\
                <div class="check">\
                    <ion-icon name="checkmark-circle"></ion-icon>\
                </div>\
            </div>\
        </div>
  `;
});
function selectDish (element, name, price) {
    const selecionado = document.querySelector(".prato .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        selectedItems++;
    }
    dishPrice = price;
    dish = name;
    element.classList.add("selecionado");
    checkOrder();
}
function selectDrink (element, name, price) {
    const selecionado = document.querySelector(".bebida .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        selectedItems++;
    }
    drinkPrice = price;
    drink = name;
    element.classList.add("selecionado");
    checkOrder();
}
function selectDessert (element, name, price) {
    const selecionado = document.querySelector(".sobremesa .selecionado");
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        selectedItems++;
    }
    dessertPrice = price;
    dessert = name;
    element.classList.add("selecionado");
    checkOrder();
}
function confirmOrder() {
    if (selectedItems === 3) {
        const modal = document.querySelector(".overlay");
        modal.classList.remove("escondido");
        totalPrice = dishPrice + drinkPrice + dessertPrice;
        document.querySelector(".confirmar-pedido .prato .nome").innerHTML = dish;
        document.querySelector(".confirmar-pedido .prato .preco").innerHTML = `R$ ${dishPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        document.querySelector(".confirmar-pedido .bebida .nome").innerHTML = drink;
        document.querySelector(".confirmar-pedido .bebida .preco").innerHTML = `R$ ${drinkPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        document.querySelector(".confirmar-pedido .sobremesa .nome").innerHTML = dessert;
        document.querySelector(".confirmar-pedido .sobremesa .preco").innerHTML = `R$ ${dessertPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        document.querySelector(".confirmar-pedido .total .preco").innerHTML = `R$ ${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    }
}
function cancelarPedido() {
    const modal = document.querySelector(".overlay");
    modal.classList.add("escondido");
}
function sendMessage() {
    const name = prompt("Qual é o seu nome?")
    const address = prompt("Qual é o seu enderço?")
    const restaurantPhone = 5531986282005;
    const encodedText = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${dish}\n- Bebida: ${drink}\n- Sobremesa: ${dessert}\nTotal: R$ ${totalPrice.toFixed(2)}\nNome: ${name}\nEndereço: ${address}`);
    const urlWhatsapp = `https://wa.me/${restaurantPhone}?text=${encodedText}`;
    window.open(urlWhatsapp);
}
function checkOrder() {
    if (selectedItems === 3) {
        const botao = document.querySelector(".fazer-pedido");
        botao.classList.add("ativo");
        botao.innerHTML = "Fazer pedido";
    }
}