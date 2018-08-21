var name = prompt('Whats your name?');

 if (name.length>3)
     
      {
      
    if (name=="User") {
        
      
      
                  {

                    var password = prompt("Enter your password");

                     if (password=null || password.length<1) { alert("Canceled");}

                          
                          

                    else if (password.length>1) 
                        
                            {
                                
                             if (password==="SuperUser") { var d = new Date();
                                                          var n = d.getHours();
                                                         if (n<20) {alert("Good day!");}
                                                          else  {alert("Good evening!");}
                                                        }
                            else {alert ("Wrong password");}
                            
                            
                            }


                      else {
                             alert("Canceled");
                           }

                    }



      else {
           alert("I don't know you");
           }    
          
      }
      
  else if (name.length< 4 ) { alert("I don't know any users having name length less than 4 symbols");}
    

}


 else if (name =null || name.length==0)  {alert("Canceled");}
else { alert("Canceled");}
    

 





