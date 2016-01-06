var inputs = process.argv.slice(2);

var result = inputs.map((e)=>{ return e.slice(0,1); })
                   .reduce((prev, curr)=>{ return prev + curr; });

//console.log(result);


//Could be reduced further:
//If function is simple, you can leave out braces and then you do not require a return statement
var resultTwo = inputs.map((e) => e[0]).reduce((prev, curr) => prev + curr);
console.log(resultTwo);

