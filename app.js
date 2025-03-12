let nomeDosAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    if (campo) {
        campo.innerHTML = texto;
    }
}

function atualizarNumeroLimite() {
    return nomeDosAmigos.length;
}

// Atualiza o texto inicial corretamente
exibirTextoNaTela('h2', 'Insira seu nome');

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    let lista = document.getElementById('listaAmigos');

    if (!input || !lista) {
        console.error('Elemento não encontrado!');
        return;
    }

    if (nome === '') {
        alert('O campo deve ser preenchido');
        return;
    }

    let regex = /^[a-zA-ZÀ-ÿ\s]+$/; // Apenas letras e espaços permitidos
    if (!regex.test(nome)) {
        alert('O nome deve conter apenas caracteres válidos.');
        return;
    }

    if (nomeDosAmigos.includes(nome)) {
        alert('Esse nome já está na lista!');
        return;
    }

    nomeDosAmigos.push(nome);
    exibirTextoNaTela('h2', 'Adicione mais amigos');
    console.log(`${nomeDosAmigos.length} - ${nome}`);

    let novoItem = document.createElement('li');
    novoItem.textContent = nome;
    lista.appendChild(novoItem);

    input.value = '';
}

function sortearAmigo() {
    if (nomeDosAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para o sorteio.');
        return;
    }

    let numeroSorteado = Math.floor(Math.random() * nomeDosAmigos.length);
    let amigoSorteado = nomeDosAmigos[numeroSorteado];

    alert(`O seu amigo secreto é ${amigoSorteado}!`);

    // Resetando a lista
    nomeDosAmigos = [];
    document.getElementById('amigo').value = "";
    document.getElementById('listaAmigos').innerHTML = "";
    exibirTextoNaTela('h2', 'Acrescente seu nome');
}
