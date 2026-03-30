function favoritar(jogo) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  favoritos.push(jogo);

  localStorage.setItem('favoritos', JSON.stringify(favoritos));

  alert(jogo + " adicionado aos favoritos!");
}
