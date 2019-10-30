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
    
    // nomes
    document.getElementById('nome1').innerHTML = videogame[0].nome;
    document.getElementById('nome2').innerHTML = videogame[1].nome;
    document.getElementById('nome3').innerHTML = videogame[2].nome;
    document.getElementById('nome4').innerHTML = videogame[3].nome;
    document.getElementById('nome5').innerHTML = videogame[4].nome;

    // ano_fab
    document.getElementById('ano1').innerHTML = videogame[0].ano_fab;
    document.getElementById('ano2').innerHTML = videogame[1].ano_fab;
    document.getElementById('ano3').innerHTML = videogame[2].ano_fab;
    document.getElementById('ano4').innerHTML = videogame[3].ano_fab;
    document.getElementById('ano5').innerHTML = videogame[4].ano_fab;    

    // nro_control
    document.getElementById('nro1').innerHTML = videogame[0].nro_control;
    document.getElementById('nro2').innerHTML = videogame[1].nro_control;
    document.getElementById('nro3').innerHTML = videogame[2].nro_control;
    document.getElementById('nro4').innerHTML = videogame[3].nro_control;
    document.getElementById('nro5').innerHTML = videogame[4].nro_control;   
    
    // cpu
    document.getElementById('cpu1').innerHTML = videogame[0].cpu;
    document.getElementById('cpu2').innerHTML = videogame[1].cpu;
    document.getElementById('cpu3').innerHTML = videogame[2].cpu;
    document.getElementById('cpu4').innerHTML = videogame[3].cpu;
    document.getElementById('cpu5').innerHTML = videogame[4].cpu;     
    
    // midia
    document.getElementById('midia1').innerHTML = videogame[0].midia;
    document.getElementById('midia2').innerHTML = videogame[1].midia;
    document.getElementById('midia3').innerHTML = videogame[2].midia;
    document.getElementById('midia4').innerHTML = videogame[3].midia;
    document.getElementById('midia5').innerHTML = videogame[4].midia;        


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