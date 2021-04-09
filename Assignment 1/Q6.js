function result(n){
    rev = 0 
    while(n>0){
        d = n % 10
        rev = rev*10 + d
        n = Math.floor(n / 10)
    }
    console.log(rev)
}

result(23525)