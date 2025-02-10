const amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (!nome) {
        alert('Por favor, insira um nome válido.');
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = '';
}

function resetarLista() {
    amigos.length = 0;
    atualizarLista();
    document.getElementById('resultado').innerHTML = '';
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    if (amigos.length == 0) {
        resultado.textContent = 'Por favor, adicione alguns nomes.';
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}