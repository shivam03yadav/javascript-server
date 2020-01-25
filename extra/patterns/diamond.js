var rows = Number(process.argv[2])
n = rows
var s=n-1
var st = " "
for(var i=1;i<=n;i++)
{
     st = ""
     for (var c = 1;c<=s;c++)
      st = st+" "

    s--;

     for(c=1;c<=i-1;c++)
         st = st + "* "
    console.log(st + "\n")
}
s = 1;
for(i=1;i<=n;i++)
{

st = ""
   for(c=1;c<s;c++) 
    st = st + " ";
    
    s++;
    
    for(c=1;c<=(n-i);c++)
     st = st + "* ";
     
    console.log(st + "\n");
}