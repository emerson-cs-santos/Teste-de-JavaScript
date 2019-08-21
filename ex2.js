function preencher()
{
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
	

// Find a <table> element with id="myTable":
var table = document.getElementById('tb');

// Create an empty <thead> element and add it to the table:
var cabecalho = table.createTHead();

// Create an empty <tr> element and add it to the first position of <thead>:
var linha = cabecalho.insertRow(0);  

// Insert a new cell (<td>) at the first position of the "new" <tr> element:
var cell = linha.insertCell(0);

// Add some bold text in the new cell:
cell.innerHTML = "<b>This is a table header</b>";
	
for (var ncount = 0; ncount < Object.keys(videogame).length; ncount++) {
	
	
	
	document.getElementById('nome' + (ncount + 1)).innerHTML = videogame[ncount].nome;
	document.getElementById('ano' + (ncount + 1)).innerHTML = videogame[ncount].ano_fab;
	document.getElementById('nro' + (ncount + 1)).innerHTML = videogame[ncount].nro_control;
	document.getElementById('cpu' + (ncount + 1)).innerHTML = videogame[ncount].cpu;
	document.getElementById('midia' + (ncount + 1)).innerHTML = videogame[ncount].midia;
   
}

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