let n=5;
let i=1;

while(i <= n){
    let j=1;

    let k=n-i;
    while(k > 0){
        process.stdout.write("  ");
        k-=1;
    }

    j=i;
    while(j < i+i){
        process.stdout.write(j + " ");
        j+=1;
    }

    j-=2;
    while(j >= i){
        process.stdout.write(j + " ");
        j-=1;
    }

    process.stdout.write("\n");
    i+=1;
}

/*      1
      2 3 2
    3 4 5 4 3
  4 5 6 7 6 5 4
5 6 7 8 9 8 7 6 5 */