/* for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        process.stdout.write(j + " ");
    }
    process.stdout.write("\n");
} */

let i=1;
while(i<=5){
    let j=1;
    while(j<=i){
        process.stdout.write(j + " ");
        j+=1;
    }
    process.stdout.write("\n");
    i+=1;
}