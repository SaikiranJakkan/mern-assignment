function result(n){
    ans = 0 
    while(n>0){
        n = Math.floor(n / 10)
        ans+=1
    }
    console.log(ans)
}
result(23525)