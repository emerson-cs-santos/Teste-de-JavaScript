function iniciar()
{
    var vetortabatual = document.querySelectorAll ('.nav-link');
    for (cont = 0; cont <= (vetortabatual.length-1); cont++) 
    { 
      vetortabatual[cont].onclick=tab;
    }   
}


function tab()
{
 
// Tira o modo de ativa de todas as abas
  var vetorDetabs = document.querySelectorAll ('.nav-link');
  for (cont = 0; cont <= (vetorDetabs.length-1); cont++) 
  { 
    vetorDetabs[cont].classList.remove('active');
  }  

  // Esconde todos os conteudos das abas
  var vetorDeElementos = document.querySelectorAll ('.tab-pane');
  for (cont = 0; cont <= (vetorDeElementos.length-1); cont++) 
  { 
    vetorDeElementos[cont].style.display='none';
  }

  // Deixa a aba atual ativa
  // Exibe o conteudo do da aba atual

  // id "nome"-tab foi definido na criação do HTML, sendo os ID's das tabs
  var tabatual = document.getElementById(this.id);
  tabatual.classList.add('active');

  // id "nome" sem o -tab, também foi definido na criação do HTML, sendo ID's dos conteudos das tabs
  tabIDABA = this.id;
  tabIDCONTEUDO = tabIDABA.replace('-tab','');
  var tabcontent = document.getElementById(tabIDCONTEUDO);
  tabcontent.style.display='block';

}