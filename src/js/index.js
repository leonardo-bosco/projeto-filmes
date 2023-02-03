var listaNomeFilmesFavoritos = ['Interestellar', 'I Am Legend', 'Rocky Balboa', 'Batman: The Dark Knight'];
var listaFilmesFavoritos = ['https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w','https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-filme-eu-sou-lenda-pode-ser-usado-nas-aulas-biologia-por-abordar-temas-como-doencas-virais-imunizacao-5bcf030bce2eb.jpg', 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/95/32/20171186.jpg','https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg'];
var listaTrailersFilmesFavoritos = ['https://youtu.be/mbbPSq63yuM', 'https://youtu.be/sFNPNT_4Qww', 'https://youtu.be/8tab8fK2_3w', 'https://youtu.be/EXeTwQWrcwY'];

var listaInicial = document.getElementById('listaFilmes')
for(i=0; i < listaFilmesFavoritos.length ; i++){
    listaInicial.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} " target="blank"><img src=" ${listaFilmesFavoritos[i]} ">${listaNomeFilmesFavoritos[i]}</a>`;
}  



function adicionarFilme(){
  
  var nomeFilmeFavorito = document.getElementById('nomefilme').value;
  var filmeFavorito = document.getElementById('filme').value;
  var trailerFilmeFavorito = document.getElementById('trailer').value;
  
    if((filmeFavorito.endsWith('jpg') ) || (filmeFavorito.endsWith('jpeg') ) || (filmeFavorito.endsWith('png') ) || (filmeFavorito.endsWith('svg') )){
      
      document.getElementById('mensagemDeErro').innerHTML = '';
      listaNomeFilmesFavoritos.push(nomeFilmeFavorito)
      listaFilmesFavoritos.push(filmeFavorito);
      listaTrailersFilmesFavoritos.push(trailerFilmeFavorito);
      
      limpaCampos();
      recarregarFilmes();
      
    } else {
      
      document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
      limpaCampos();
      
    }
  }

function recarregarFilmes(){
 
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = '';
  for(i=0; i < listaFilmesFavoritos.length ; i++){
    elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} " target="blank"><img src=" ${listaFilmesFavoritos[i]} ">${listaNomeFilmesFavoritos[i]}</a>`;
  }
}

function limpaCampos(){
  document.getElementById('nomefilme').value = '';
  document.getElementById('filme').value = '';
  document.getElementById('trailer').value = '';
}

function removerFilme(){
    var nomeFilme = document.getElementById('nomefilme').value;
    var posicao = listaNomeFilmesFavoritos.indexOf(nomeFilme)
    var elementoListaFilmes = document.getElementById('listaFilmes');
    if (posicao == -1) {
      alert("O filme não encontrado! Insira o nome do filme!");
    } else {
      listaNomeFilmesFavoritos.splice(posicao, 1)
      listaFilmesFavoritos.splice(posicao, 1)
      listaTrailersFilmesFavoritos.splice(posicao, 1)
      document.getElementById('nomefilme').value = "";

      elementoListaFilmes.innerHTML = "";
      for(i=0; i < listaFilmesFavoritos.length ; i++){
      elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} " target="blank"><img src=" ${listaFilmesFavoritos[i]} ">${listaNomeFilmesFavoritos[i]}</a>`;
    }
}
}