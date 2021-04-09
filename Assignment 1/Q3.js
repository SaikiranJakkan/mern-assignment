function gcd(a,b){
    if(b==0)
        return a;
    else
        return gcd(b,a%b);
}

res = gcd(11,44)
console.log(res)