function favoritar(jogo) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  if (favoritos.includes(jogo)) {
    // REMOVE se já existir
    favoritos = favoritos.filter(item => item !== jogo);
    alert(jogo + " removido dos favoritos ❌");
  } else {
    // ADICIONA se não existir
    favoritos.push(jogo);
    alert(jogo + " adicionado aos favoritos ⭐");
  }

  localStorage.setItem('favoritos', JSON.stringify(favoritos));

  mostrarFavoritos();
}function mostrarFavoritos() {
  const lista = document.getElementById("lista-favoritos");

  if (!lista) return;

  lista.innerHTML = "";

  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  favoritos.forEach(jogo => {
    const li = document.createElement("li");
    li.textContent = jogo;
    lista.appendChild(li);
  });
}window.onload = function () {
  mostrarFavoritos();
};
