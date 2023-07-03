function solve(decimal, p) {

   let result = decimal >> p & 1;
   console.log(result);

} 
solve(2145, 5);