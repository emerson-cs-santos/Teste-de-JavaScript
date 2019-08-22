function preencher()
{

// VETOR PARA CRIAR AS COLUNAS
var colunas = 
    [
        "Nome"
        ,"Ano de fabricação"
        ,"Número de controles"
        ,"CPU"
        ,"Mídia"
    ]
  ;  

  // VETOR COM OS NOMES USADOS NO VETOR OBJETO DAS LINHAS PARA CRIAR AS COLUNAS
var colunas_name = 
[
    "nome"
    ,"ano_fab"
    ,"nro_control"
    ,"cpu"
    ,"midia"
]
;  
    
    // VETOR COM OBJETO, POSSUI AS LINHAS E COLUNAS JÁ PREENCHIDAS
    var videogame = new Object ();
    videogame[0] = 
    {
        nome : 'Master System'
        ,ano_fab : 1982   
        ,nro_control : 1
        ,cpu : 8
        ,midia : 'fita'
    };

    videogame[1] = 
    {
        nome : 'Mega-Drive'
        ,ano_fab : 1987   
        ,nro_control : 2
        ,cpu : 16
        ,midia : 'Fita'
    };  

    videogame[2] = 
    {
        nome : 'Sega CD'
        ,ano_fab : 1992   
        ,nro_control : 3
        ,cpu : 24
        ,midia : 'CD'
    };
    
    videogame[3] = 
    {
        nome : 'Sega 32X'
        ,ano_fab : 1994  
        ,nro_control : 4
        ,cpu : 32
        ,midia : 'CD'
    };  
    
    videogame[4] = 
    {
        nome : 'Sega Saturn'
        ,ano_fab : 1995  
        ,nro_control : 5
        ,cpu : 48
        ,midia : 'CD'
    };    
    


// TABELA JÁ EXISTE NA ESTRUTURA BASE DO XML, PRECISAMOS DO ID DELE PARA ADICIONAR NELE AS PROXIMAS TAGS (NESTE CASO PARTES DA TABELA)
var table = document.getElementById('tb');

// CRIAÇÃO DAS TAGS, AO CRIAR UM ELEMENTO (TAG) ELE AINDA NÃO VAI APARECER EM LUGAR NENHUM, POIS PRECISAMOS RELACIONAR ELE A UMA TAG
// QUE ESTEJA JÁ ATIVA NO XML, COMO O TABLE ACIMA.
// AO ADICIONAR AS TAGS NO XML (APPEND CHILD), TOMAR CUIDADO COM A ARVORE DO XML (DOM)

// CRIANDO TAGS/ELEMENTOS
// CRIA CABEÇALHO DA TABELA
var thead = document.createElement('thead');
// A CADA COLUNA É UM GRUPO DE tr, AS LINHAS PROPRIAMENTE DITAS SÃO th
var tr = document.createElement('tr');

// ADICIONA CABEÇALHO A TABELA
table.appendChild(thead);

// ADICIONA GRUPO DA COLUNA AO CABEÇALHO
thead.appendChild(tr);

// TESTE USADO PARA CRIAR UMA COLUNA COM VALOR
// var th = document.createElement('th');
// tr.appendChild(th);
// th.innerHTML='teste';

// CRIANDO COUNAS CONFORME O ARRAY DE COLUNAS ACIMA
for (var ncount = 0; ncount < Object.keys(colunas).length; ncount++) {
	
    // CRIA COLUNA
    var thfor = document.createElement('th');   
    
    // ADICIONA COLUNA DO GRUPO DA COLUNA
    tr.appendChild(thfor);   
    
    // PREENCHE VALOR DA COLUNA
    thfor.innerHTML = colunas[ncount];   
}


// CRIA CORPO DAS LINHAS
var tbody = document.createElement('tbody');

// ADICIONA CORPO A TABELA
table.appendChild(tbody);

// TESTE USADO PARA CRIAR UMA LINHA COM VALOR
// CRIA GRUPO DE LINHA
// A CADA LINHA É UM GRUPO DE tr, AS LINHAS PROPRIAMENTE DITAS SÃO td
// var tr = document.createElement('tr');

// // ADICIONA GRUPO DA LINHA AO CORPO
// tbody.appendChild(tr);

// // CRIA LINHA
// var td = document.createElement('td');

// // ADICIONA LINHA AO GRUPO DE LINHA
// tr.appendChild(td);

//td.innerHTML='teste';
ncount_coluna = 0;
alert(colunas_name[ncount_coluna]);

// ALIMENTANDO TABELA
 for (var ncount_coluna = 0; ncount_coluna < Object.keys(colunas_name).length; ncount_coluna ++) {

    // CRIA GRUPO DE LINHA
    // A CADA LINHA É UM GRUPO DE tr, AS LINHAS PROPRIAMENTE DITAS SÃO td
    var trfor = document.createElement('tr');
    // ADICIONA GRUPO DA LINHA AO CORPO
    tbody.appendChild(trfor);

    for (var ncount_linha = 0; ncount_linha < Object.keys(videogame).length; ncount_linha ++) {
        
      Object.keys(videogame[ncount_linha]).forEach(function(value) {
        var valor_linha = videogame[ncount_linha][value];

        // CRIA LINHA
        var tdfor = document.createElement('td');
        // ADICIONA LINHA AO GRUPO DE LINHA
        trfor.appendChild(tdfor);        
        
        tdfor.innerHTML = valor_linha;
		});      

      // tdfor.innerHTML=videogame[ncount_linha].colunas_name[ncount_coluna];
       //tdfor.innerHTML=videogame[ncount_linha].nome;
    }
 }

// ABAIXO ESTÁ OUTRA FORMA DE ADICIONAR COLUNAS E LINHAS NA TABELA, MAS APENAS FUNCIONA EM TABLE, NÃO NAS OUTRAS TAGS DE XML
// AINDA SIM O PROFESSOR RECOMNDA USAR O MODO DE CREATEELEMENT E APPENDCHILD PARA ADICIONAR AS TAGS.
// Find a <table> element with id="myTable":
// var table = document.getElementById('tb');

// // Create an empty <thead> element and add it to the table:
// var cabecalho = table.createTHead();

// // Create an empty <tr> element and add it to the first position of <thead>:
// var linha = cabecalho.insertRow(0);  

// // Insert a new cell (<td>) at the first position of the "new" <tr> element:
// var cell = linha.insertCell(0);

// // Add some bold text in the new cell:
// cell.innerHTML = "<b>This is a table header</b>";



/* Outra forma de criar objetos dentro do vetor
    var products = [
        {
          name: "chair",
          inventory: 5,
          unit_price: 45.99
        },
        {
          name: "table",
          inventory: 10,
          unit_price: 123.75
        },
        {
          name: "sofa",
          inventory: 2,
          unit_price: 399.50
        }
      ];    
*/


}