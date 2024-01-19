// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    switch(n){

        case 1:
            return 1;  
        case 2:
            return 1;
        default:  

        let f1 = 1;
        let f2 = 1;

            for(let i = 3; i <= n; i++ ){
                f3 = f1 + f2;
                f1 = f2;
                f2 = f3;
            }

        return f3;
        
    }
  }
module.exports = fib;
