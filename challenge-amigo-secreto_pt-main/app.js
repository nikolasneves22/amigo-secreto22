let listaDeAmigos = [];
let listaDeNomesSorteados = [];
//adiçao de nomes
function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo');
    let nome = nomeDigitado.value.trim();
//Caso nenhum nome seja selecionado
    if (nome === '') {
        alert("Por favor digite um nome no campo indicado");
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();
    nomeDigitado.value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaDeAmigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function gerarNomeAleatorio() {
    let quantidadeDeNomesNaLista = listaDeAmigos.length;

    if (quantidadeDeNomesNaLista === 0) {
        alert("A lista está vazia!");
        return null;
    }

    if (listaDeNomesSorteados.length === quantidadeDeNomesNaLista) {
        listaDeNomesSorteados = []; // Reinicia sorteio
    }

    let nomeAleatorio;
    do {
        nomeAleatorio = Math.floor(Math.random() * quantidadeDeNomesNaLista);
    } while (listaDeNomesSorteados.includes(nomeAleatorio));

    listaDeNomesSorteados.push(nomeAleatorio);
    return listaDeAmigos[nomeAleatorio];
}
function sortearAmigo() {
    let nomeSorteado = gerarNomeAleatorio();

    if (nomeSorteado) {
        // Exibe como alerta
        alert(`O nome sorteado é: ${nomeSorteado}`);

        // Exibe na tela
        let ulResultado = document.getElementById("resultado");
        let li = document.createElement("li");
        li.textContent = `O nome sorteado é: ${nomeSorteado}`;
        ulResultado.appendChild(li);
    }
}
function limparLista() {
    listaDeAmigos = [];
    listaDeNomesSorteados = [];

    // Limpa a exibição da lista de amigos
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    // Limpa o campo de entrada
    let input = document.getElementById('amigo');
    input.value = '';

    // Limpa os resultados de sorteio
    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = '';
}


//teste de comando