import{produtos} from './products.js'

function displayItems() {
    const iphones = document.getElementById('Copo')
    const Copo500 = document.getElementById('copo500')
    const Copo700 = document.getElementById('copo700')
    const ipad = document.getElementById('Especial')
    const montar = document.getElementById('Montar')
    const mac = document.getElementById('Adicionais')
    const endereco = document.querySelector('.endereco');
    const close = document.querySelector('.voltar');

    endereco.innerHTML = `
        <button id="voltar" onclick="Close()"><i class="bi bi-arrow-right"></i></button>
        <span>Retirada no:</span>
        <select name="" id="Seletor">
            <option value="Delivery">Delivery</option>
            <option value="Local">Local</option>
        </select>

        <div id="ValidacaoEndereco">
            <span>Rua</span>
            <input class="rua" type="text" placeholder="Caso for delivery">
            <span>Bairro</span>
            <input class="bairro" type="text" placeholder="Caso for delivery">
            <span>Numero da casa</span>
            <input class="numero" type="text" placeholder="Caso for delivery">
        </div>
        <span>Tipo de pagamento:</span>
        <select name="" id="Select">
            <option value="Cartão">Cartão</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Pix">Pix</option>
        </select>
        <div class="money" id="money">
            <span>Troco para:</span>
            <input class="troco" type="text" placeholder="Caso for dinheiro">
        </div>
        <a id="enviar">Enviar Pedido</a>
        `

    const iphonesItems = produtos.filter((item) => item.category == 'Copo');
    function formatarValor(valor) {
        return valor.toLocaleString('pt-BR');
    }

    iphonesItems.map(item => {

        var itemCard = document.createElement('div');
        var objdescricao = document.createElement('div')
        objdescricao.setAttribute('class', 'descricao-container')
        itemCard.setAttribute('id', 'item-card')

        var img = document.createElement('img');
        img.src = item.img;

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var heart = document.createElement('button');
        heart.setAttribute('class', 'add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = 'Adicionar'

        cardTop.appendChild(heart);

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.nome;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'A partir de ' + formatarValor(item.price) + ',00 R$';

        var Descricao = document.createElement('p')
        Descricao.setAttribute('id', 'descricaoCopo')
        Descricao.innerText = item.descricao

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        objdescricao.appendChild(itemPrice)
        objdescricao.appendChild(Descricao)
        itemCard.appendChild(objdescricao)

        iphones.appendChild(itemCard);

    })

    const copo500 = produtos.filter((item) => item.category == 'Copo500ml');
    copo500.map(item => {
        var itemCard = document.createElement('div');
        var objdescricao = document.createElement('div')
        objdescricao.setAttribute('class', 'descricao-container')
        itemCard.setAttribute('id', 'item-card')

        var img = document.createElement('img');
        img.src = item.img;

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var heart = document.createElement('button');
        heart.setAttribute('class', 'add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = 'Adicionar'

        cardTop.appendChild(heart);

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.nome;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'A partir de ' + formatarValor(item.price) + ',00 R$';

        var Descricao = document.createElement('p')
        Descricao.setAttribute('id', 'descricaoCopo')
        Descricao.innerText = item.descricao

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        objdescricao.appendChild(itemPrice)
        objdescricao.appendChild(Descricao)
        itemCard.appendChild(objdescricao)

        Copo500.appendChild(itemCard);

    })

    const copo700 = produtos.filter((item) => item.category == 'Copo700ml');
    copo700.map(item => {
        var itemCard = document.createElement('div');
        var objdescricao = document.createElement('div')
        objdescricao.setAttribute('class', 'descricao-container')
        itemCard.setAttribute('id', 'item-card')

        var img = document.createElement('img');
        img.src = item.img;

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var heart = document.createElement('button');
        heart.setAttribute('class', 'add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = 'Adicionar'

        cardTop.appendChild(heart);

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.nome;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'A partir de ' + formatarValor(item.price) + ',00 R$';

        var Descricao = document.createElement('p')
        Descricao.setAttribute('id', 'descricaoCopo')
        Descricao.innerText = item.descricao

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        objdescricao.appendChild(itemPrice)
        objdescricao.appendChild(Descricao)
        itemCard.appendChild(objdescricao)

        Copo700.appendChild(itemCard);

    })

    const MontarCopo = produtos.filter((item) => item.category == 'Montar Copo');
    MontarCopo.map(item => {
        var itemCard = document.createElement('div');
        var objdescricao = document.createElement('div')
        objdescricao.setAttribute('class', 'descricao-container')
        itemCard.setAttribute('id', 'item-card')

        var img = document.createElement('img');
        img.src = item.img;

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var heart = document.createElement('a');
        heart.setAttribute('class', 'add-to-cart');
        heart.setAttribute('href', '#Adicionais');
        heart.setAttribute('id', item.id)
        heart.innerText = 'Adicionar'

        cardTop.appendChild(heart);

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.nome;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'A partir de ' + formatarValor(item.price) + ',00 R$';

        var Descricao = document.createElement('p')
        Descricao.setAttribute('id', 'descricaoCopo')
        Descricao.innerText = item.descricao

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        objdescricao.appendChild(itemPrice)
        objdescricao.appendChild(Descricao)
        itemCard.appendChild(objdescricao)

        montar.appendChild(itemCard);

    })

    const macItens = produtos.filter((item) => item.category == 'Adicionais');
    macItens.map(item => {
        var itemCard = document.createElement('div');
        var objdescricao = document.createElement('div')
        objdescricao.setAttribute('class', 'descricao-container')
        itemCard.setAttribute('id', 'item-card')

        var img = document.createElement('img');
        img.src = item.img;

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var heart = document.createElement('button');
        heart.setAttribute('class', 'add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = 'Adicionar'

        cardTop.appendChild(heart);

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.nome;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'A partir de ' + formatarValor(item.price) +',00 R$';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        objdescricao.appendChild(itemPrice)
        itemCard.appendChild(objdescricao)

        mac.appendChild(itemCard);

    })

    const ipadItens = produtos.filter((item) => item.category == 'Especial');
    ipadItens.map(item => {
        var itemCard = document.createElement('div');
        var objdescricao = document.createElement('div')
        objdescricao.setAttribute('class', 'descricao-container')
        itemCard.setAttribute('id', 'item-card')

        var img = document.createElement('img');
        img.src = item.img;

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        var heart = document.createElement('button');
        heart.setAttribute('class', 'add-to-cart');
        heart.setAttribute('id', item.id)
        heart.innerText = 'Adicionar'

        cardTop.appendChild(heart);

        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.nome;

        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = 'A partir de ' + formatarValor(item.price) + ',00 R$';

        var Descricao = document.createElement('p')
        Descricao.setAttribute('id', 'descricaoCopo')
        Descricao.innerText = item.descricao

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        objdescricao.appendChild(itemPrice)
        objdescricao.appendChild(Descricao)
        itemCard.appendChild(objdescricao)

        ipad.appendChild(itemCard);

    })
}

displayItems()

document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart)
})

var cartData = [];
const testeNomes = [];
function addToCart() {

    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = produtos.find(element => element.nome == itemToAdd);

    var index = cartData.indexOf(itemObj);
    if (index === -1) {
        document.getElementById(itemObj.id).classList.add('ativo');
        document.getElementById(itemObj.id).innerText = 'Adicionado';
        cartData = [...cartData, itemObj];
    }
    else if (index > -1) {
        alert("Já está adicionado ao carrinho!");
    }

    var sum = 0;
    cartData.map(item => {
        sum += item.price;
    })
    document.getElementById('total-item').innerText = 'Total Item: ' + cartData.length;
    function formatarValor(valor) {
        return valor.toLocaleString('pt-BR');
    }
    document.getElementById('total-price').innerText = 'VALOR TOTAL: ' + formatarValor(sum)+',00 R$';

    document.getElementById('cart-plus').innerText = ' ' + cartData.length;
    
    cartItems();
}

function cartItems() {
    const carrin = document.querySelector('.Comprados')
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    cartData.map(item => {
        var tableRow = document.createElement('div');
        tableRow.setAttribute('class', 'lista')

        var rowData1 = document.createElement('div');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('div');
        rowData2.setAttribute('class', 'listaNome')
        rowData2.innerText = item.nome;

        var rowData3 = document.createElement('div');
        rowData3.setAttribute('class', 'btns')
        var btn1 = document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerText = '-';
        var span = document.createElement('span');
        span.innerText = item.quantity;
        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerText = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('div');
        rowData4.setAttribute('class', 'precoItem')
        rowData4.innerText = formatarValor(item.price) + ',00 R$';

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem)
    })

    if (cartData.length == 0){
        carrin.classList.remove('ativo')
    }
}

function incrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    var incObj = cartData.find(element => element.nome == itemToInc);
    incObj.quantity += 1;

    currPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1);
    incObj.price = currPrice * incObj.quantity;
    totalAmount()
    cartItems();
}

var currPrice = 0;
function decrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element => element.nome == itemToInc);
    let ind = cartData.indexOf(decObj);
    if (decObj.quantity > 1) {
        currPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) / (decObj.quantity);
        decObj.quantity -= 1;
        decObj.price = currPrice * decObj.quantity;
    }
    else {
        document.getElementById(decObj.id).classList.remove('ativo')
        document.getElementById(decObj.id).innerText = 'Adicionar'
        cartData.splice(ind, 1);
        document.getElementById('cart-plus').innerText = ' ' + cartData.length;
    }
    totalAmount()
    cartItems()
}

function totalAmount() {
    var sum = 0;
    var quantidade = 0
    cartData.map(item => {
        sum += item.price;
        quantidade += item.quantity

    })
    function formatarValor(valor) {
        return valor.toLocaleString('pt-BR');
    }
    document.getElementById('total-item').innerText = 'Total Item: ' + quantidade;
    document.getElementById('total-price').innerText = 'VALOR TOTAL: ' + formatarValor(sum) + ',00 R$';
}

function Menssagemwhatt(rua, Bairro, Numero, valuesect, valueselector, dataAtual, horarioAtual, valores, preco, troco){

document.querySelector('#enviar').setAttribute('href', `https://wa.me/5519999857719/?text=${[`
    Olá, Tudo bem ?%0A
    %0A
${dataAtual} - ${horarioAtual}%0A
%0A
Seu pedido está sendo processado%0A
%0A
*Tipo de serviço: ${valueselector}*%0A
%0A
*Produtos:*%0A
${valores}%0A
%0A
*Endereço:*%0A
Rua: ${rua}%0A
Bairro: ${Bairro}%0A
Numero da casa ${Numero}%0A
%0A
*Tipo de pagamento:* ${valuesect}%0A
Troco pra: ${troco}%0A
%0A
*${preco}*%0A
%0A
%0A
Obrigado pela preferência, se precisar de algo é só chamar!`
    ]}`)
}

document.querySelector('#enviar').addEventListener('click', async function vamosla() {
    const values = Object.values(cartData);

    for (const value of values) {
        const NomesProdutos = value.nome
        const quantidadeProdutos = value.quantity
        const PrecoProduto = value.price
        const juntar = `${quantidadeProdutos}X ${NomesProdutos} - ${PrecoProduto},00 R$%0A
`
        testeNomes.push(juntar)
    }

    var valores = testeNomes

    var preco = document.getElementById('total-price').innerText
    var rua = document.querySelector('.rua').value
    var Bairro = document.querySelector('.bairro').value
    var Numero = document.querySelector('.numero').value
    var select = document.querySelector('#Select')
    var valuesect = select.options[select.selectedIndex].value
    var troco = document.querySelector('.troco').value

    var seletor = document.querySelector('#Seletor')
    var valueselector = seletor.options[seletor.selectedIndex].value

    const data = new Date()
    var day = String(data.getDate()).padStart(2, '0')
    var mes = String(data.getMonth() + 1).padStart(2, '0')
    var ano = data.getFullYear()
    var dataAtual = `${day}/${mes}/${ano}`

    var horas = data.getHours()
    var minutos = data.getMinutes()
    var horarioAtual = `${horas}:${minutos}`
    
    Menssagemwhatt(rua, Bairro, Numero, valuesect, valueselector, dataAtual, horarioAtual, valores, preco, troco)

    setTimeout(function() {
      location.reload();
    }, 500);
    
})

