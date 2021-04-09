function result(n){
    j=0
    for(i=2; i<=n; j=j+2,i=i+2*j){
        console.log(i)
    }
}

result(75)