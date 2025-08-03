// variável do tipo array que armazenará os nomes dos amigos inseridos.
let listaDeAmigos = [];

// função para adicionar amigos
function adicionarAmigo() {
    // capturar o valor do campo de entrada
    let amigo = document.getElementById('amigo').value;
    
    // validação para garantir que o campo não esteja vazio
    if (amigo === '') {
        alert('Por favor, insira um nome.');
    }
    else {  // valor válido
        listaDeAmigos.push(amigo);
        console.log(listaDeAmigos)
        atualizarListaDeAmigos();
    }

    // Limpar o campo de entrada após adicionar o nome
    amigo = document.getElementById('amigo');
    amigo.value = '';
}

// função para atualizar a lista de amigos

function atualizarListaDeAmigos() {
    
    // obter o elemento da lista
    let listaAmigos = document.getElementById('listaAmigos');

    // limpar a lista que vai ser exibida
    listaAmigos.innerHTML = '';
    
    // percorre a listaDeAmigos e adiciona cada nome como um elemento <li> dentro de uma lista HTML
    let contadorDeNomes = 0;
    while (contadorDeNomes < listaDeAmigos.length) {
        let item = document.createElement('li'); // cria o elemento (<li>) no html
        item.innerHTML += `${listaDeAmigos[contadorDeNomes]}`; // adiciona ao html o item
        listaAmigos.appendChild(item);// adiciona o elemento filho (<li>) a lista que vai ser exibida
        contadorDeNomes++;
    }
}