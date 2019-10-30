function iniciar()
{

    var tabhome = document.getElementById('home-tab');
    tabhome.onclick = tab;

    var tabprofile = document.getElementById('profile-tab');
    tabprofile.onclick = tab;
    
    var tabmessage = document.getElementById('messages-tab');
    tabmessage.onclick = tab;
    
    var tabsettings = document.getElementById('settings-tab');
    tabsettings.onclick = tab;    

}


function tab()
{
 
  var tabhomecontent = document.getElementById('home');
  var tabprofilecontent = document.getElementById('profile');
  var tabmessagescontent = document.getElementById('messages');
  var tabsettingscontent = document.getElementById('settings');

   switch(this.id) 
   {
    case 'home-tab':
        tabhomecontent.style.display='block';
        tabprofilecontent.style.display='none';
        tabmessagescontent.style.display='none';
        tabsettingscontent.style.display='none';
      break;

    case 'profile-tab':
        tabhomecontent.style.display='none';
        tabprofilecontent.style.display='block';
        tabmessagescontent.style.display='none';
        tabsettingscontent.style.display='none';    
      break;

      case 'messages-tab':
        tabhomecontent.style.display='none';
        tabprofilecontent.style.display='none';
        tabmessagescontent.style.display='block';
        tabsettingscontent.style.display='none';    
      break;    
      
      case 'settings-tab':
        tabhomecontent.style.display='none';
        tabprofilecontent.style.display='none';
        tabmessagescontent.style.display='none';
        tabsettingscontent.style.display='block';         
      break;      
   
  }   

}