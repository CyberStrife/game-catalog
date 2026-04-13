function favoritar(jogo) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  favoritos.push(jogo);

  localStorage.setItem('favoritos', JSON.stringify(favoritos));

  alert(jogo + " salvo!");

  mostrarFavoritos();
}

function mostrarFavoritos() {
  const lista = document.getElementById("lista-favoritos");

  if (!lista) return;

  lista.innerHTML = "";

  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  for (let i = 0; i < favoritos.length; i++) {
    let li = document.createElement("li");
    li.textContent = favoritos[i];
    lista.appendChild(li);
  }
}

window.onload = function () {
  mostrarFavoritos();
};
