function favoritar(jogo) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  if (favoritos.includes(jogo)) {
    // REMOVE
    favoritos = favoritos.filter(item => item !== jogo);
  } else {
    // ADICIONA
    favoritos.push(jogo);
  }

  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  mostrarFavoritos();
}

function mostrarFavoritos() {
  const lista = document.getElementById("lista-favoritos");
  if (!lista) return;

  lista.innerHTML = "";

  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  favoritos.forEach(jogo => {
    const li = document.createElement("li");
    li.textContent = jogo;
    lista.appendChild(li);
  });
}

window.onload = mostrarFavoritos;
