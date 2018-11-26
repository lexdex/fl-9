// Your code goes here
const login=prompt('Enter login','0');
const hours=new Date().getHours();
function checkPass(){
    const pass=prompt('Enter password','0');

    if(pass==='0'||pass===null||pass.length===0){
        alert('Canceled');
    }
    if(pass==='SuperUser'){
        console.log(hours);
        if(hours<20){
            alert('Good day!');
        }else{
            alert('Good evening');
        }
    }else{
        alert('Wrong password');
    }

}

if(login==='0'||login===null||login.length===0){
    alert('Canceled');
}else{
    if(login==='User'){
    checkPass();
    }else{
            if(login.length<4 && login.length>0){
                alert('I dont know any users having name length less than 4 symbols');
            }else{
                alert('I don’t know you');
            }   
    }
}

