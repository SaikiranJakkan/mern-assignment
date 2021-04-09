function printPascal(n)
{
    for(let i = 1; i <= n; i++)
    {
        let y = 1;
        for(let j = 1; j <= i; j++)
        {
            process.stdout.write(y + " ");
            y = y * (i - j) / j;
        }
        process.stdout.write("\n");
    }
}
var n = 5;
printPascal(n);

/* 1
   1 1
   1 2 1
   1 3 3 1
   1 4 6 4 1 */