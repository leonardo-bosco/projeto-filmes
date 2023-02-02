var addCapaFilme = document.getElementById('capaFilme')
var addNomeFilme = document.getElementById('nomeFilme')
var res = document.getElementById('res')

var listaFilmes = ['https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w','https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-filme-eu-sou-lenda-pode-ser-usado-nas-aulas-biologia-por-abordar-temas-como-doencas-virais-imunizacao-5bcf030bce2eb.jpg', 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/95/32/20171186.jpg','https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg']

var listaNomeDosFilmes = ['Interestelar', 'I Am Legend', 'Rocky Balboa', 'Batman: The Dark Knight']
res.innerHTML = ''
function adicionar(){
  if(listaNomeDosFilmes.includes(addNomeFilme.value)){
    alert("Esse Filme já foi adicionado!")
  }else if(addCapaFilme.value.endsWith(".jpg")){
      listaFilmes.push(addCapaFilme.value)
      listaNomeDosFilmes.push(addNomeFilme.value)
      res.innerHTML += '<div class="texto-imagem"><figure><img src=' + listaFilmes.at(-1) + '>' +  '<figcaption>' + listaNomeDosFilmes.at(-1) + '</figcaption></figure>'
      } else{
        alert("Formato não suportado, busque uma imagem no formato .jpg")
      }
  document.getElementById("nomeFilme").value = ''
  document.getElementById("capaFilme").value = ''  
}
/*
  //while
  
  let i = 0
  while(i < listaFilmes.length){
    res.innerHTML+= '<div class="texto-imagem"><figure><img src=' + listaFilmes[i] + '>' +  '<figcaption>' + listaNomeDosFilmes[i] + '</figcaption></figure>'
    i++
  }
*/



  //for
  
  for(let i = 0; i < listaFilmes.length; i++){
    res.innerHTML+= '<div class="texto-imagem"><figure><img src=' + listaFilmes[i] + '>' +  '<figcaption>' + listaNomeDosFilmes[i] + '</figcaption></figure>'
  } 
 
