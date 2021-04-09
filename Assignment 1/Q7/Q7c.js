let n=5;
let i=1;

while(i <= n){
    let j=1;
    let k=n-i;

    while(k > 0){
        process.stdout.write("  ");
        k-=1;
    }

    while(j <= i){
        process.stdout.write(j + " ");
        j+=1;
    }

    j-=2;

    while(j >= 1){
        process.stdout.write(j + " ");
        j-=1;
    }

    process.stdout.write("\n");
    i+=1;
}

/*      1
      1 2 1
    1 2 3 2 1
  1 2 3 4 3 2 1
1 2 3 4 5 4 3 2 1 */