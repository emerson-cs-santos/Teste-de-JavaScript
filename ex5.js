function iniciar()
{
    
  var form = document.getElementById('form');

  form.onsubmit = function(event)
  {

    var texts = document.querySelectorAll ('.txt');
    for (cont = 0; cont <= (texts.length); cont++) 
    { 
      if ( texts[cont].value == '' )
      {
        alert('Todos os campos devem ser preenchidos!');
        event.preventDefault();
        return false;
      }

      var teste = document.getElementById(texts[cont].id);

      if(teste.id =='numero')
      {
        var numero = teste.value;
        // e é considerado um número por conta do exponencial
        numero = numero.replace('e','');
        numero = parseInt(numero, 10);

        if( isNaN(numero) )
        {
          alert('Campo de número só permite números!');
          event.preventDefault();
          return false;
        }
      }

      if(teste.id=='cep')
      {
        var cep = teste.value;
        // e é considerado um número por conta do exponencial
        cep = cep.replace('e','');

        var cepcorreto = true;

        if(! ( cep.length < 10 || cep.length > 10 )  )
        {
          cepcorreto = false;
        }

        for (var count = 0; count < cep.length; count ++) 
        {
          if(count==5 && ! (cep.charAt(count) == '-') )
          {
            cepcorreto=false;
            break;
          }
          
          if ( isNaN(parseInt(cep.charAt(count), 10)) )
          {
            if( !(count == 5) )
            {
              cepcorreto=false;
            }
          }
        }

        if(cepcorreto==false)
        {
          alert('CEP incorreto!');
          event.preventDefault();
          return false;          
        }
      }

      if(teste.id=='email')
      {
        var email = teste.value;
        emailcorreto=false;

        for (var count = 0; count < email.length; count ++) 
        {
          if(email.charAt(count) == '@' )
          {
            emailcorreto=true;
            break;
          }
        }

        if(emailcorreto==false)
        {
          alert('E-mail incorreto!');
          event.preventDefault();
          return false;          
        }
      }
    }
  }
}


