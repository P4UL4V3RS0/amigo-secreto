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
    }

    // Limpar o campo de entrada após adicionar o nome
    
    amigo = document.getElementById('amigo');
    amigo.value = '';
}