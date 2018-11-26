const prizeMax=10;
let continueGame=true;
const MAGIC_NUMBER1=1;
let data={
    prizepool:0,
    rightRange:5,
    attempts:3,
    prizeArr:{
        3:prizeMax,
        2:prizeMax/2,
        1:prizeMax/4
    }
}
let data_cpy=Object.assign({},data);//cpy for refresh data
function getNumb(){
    let value=data.rightRange;
    return Math.floor(Math.random() * ++value);//Math.floor(Math.random() * (max - min + 1)) + min;
}
function increasePrize(){
    data.prizeArr[3]*=3;
    data.prizeArr[2]*=3;
    data.prizeArr[MAGIC_NUMBER1]*=3;//
}
function output(){
    return prompt(`Enter a number from 0 to ${data.rightRange} 
Attempts left:${data.attempts}
Total prize:${Math.floor(data.prizepool)}
Possible prize on current attempt:${Math.floor(data.prizeArr[data.attempts])}`);
}

function playGame(){
    while(data.attempts!==0){
        getNumb();
        console.log(getNumb());
        let choise=+output();
        if(choise===getNumb()){
            data.prizepool+=data.prizeArr[data.attempts];
            alert(`Congratulation! Your prize is:${Math.floor(data.prizepool)}`);
            
            if(confirm('Do you want to play again')){
                data.attempts=3;
                increasePrize();
                data.rightRange*=2;
                return playGame();
            }else{
                data=data_cpy;
                continueGame=false;
            }

        }
        data.attempts--;
       if(data.attempts===0){
        alert(`Thank you for a game.Your prize is:${Math.floor(data.prizepool)}`);
        data=data_cpy;
        if(confirm('Do you want to play again')){
            data.prizeArr[3]=prizeMax;
            data.prizeArr[2]=prizeMax/2;
            data.prizeArr[MAGIC_NUMBER1]=prizeMax/4;
            data.attempts=3;
            data.prizepool=0;
            data.rightRange=5;
            console.log(data.prizeArr);
            return playGame();
        }else{
            continueGame=false;
           
        }
        
    }if(!continueGame){
        break;
    }
    }
    
}

if(confirm('Do you want to play a game?')){
    playGame();
}
alert('You did not become a millionaire, but can.');
