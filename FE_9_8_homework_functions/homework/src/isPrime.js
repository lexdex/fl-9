function isPrime(argA){
    let result=true;
    const MAGIC_NUMBER2=2;
    for(let i=2;i<=argA/MAGIC_NUMBER2; ++i){
        if(argA%i === 0){
            result = false;
            break;
        }
    }
    return result;
}

