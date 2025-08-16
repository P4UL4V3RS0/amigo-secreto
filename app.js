// variável do tipo array que armazenará os nomes dos amigos inseridos.
let listaDeAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    
    // validação 
    if (amigo === '' ) {
        alert('Por favor, insira um nome.');
    } if (listaDeAmigos.includes(amigo)){
        alert('Por favor, insira outro nome.');
    }
    else {
        listaDeAmigos.push(amigo);
        atualizarListaDeAmigos();
    }

    // Limpa o campo de entrada após adicionar o nome
    amigo = document.getElementById('amigo');
    amigo.value = '';
}

function atualizarListaDeAmigos() {
    
    // obter o elemento da lista
    let listaAmigos = document.getElementById('listaAmigos');

    // limpar a lista que vai ser exibida
    listaAmigos.innerHTML = '';
    
    // percorre a listaDeAmigos e adiciona cada nome como um elemento <li> dentro de uma lista HTML
    for (let contadorDeNomes = 0; contadorDeNomes < listaDeAmigos.length; contadorDeNomes++) {
        let item = document.createElement('li');
        item.innerHTML += `${listaDeAmigos[contadorDeNomes]}`;
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    // validar se há amigos disponíveis
    let listaDeAmigosSorteados = [];
    if (listaDeAmigos.length > 0) {
        if (listaDeAmigos.length >= 1){
            let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
            let amigoEscolhido = listaDeAmigos[indiceAleatorio];
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `O amigo secreto sorteado é: ${amigoEscolhido}`;}
    } else {
            alert('Por favor, insira um nome para ser sorteado');
        }
}
