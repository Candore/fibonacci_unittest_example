const functions ={
 getNextNum: function fib(n){
     return (2*n)-1
 },
 getFibSequence: function fibSequence(n){
        if (n <= 1) return n;
        return fibSequence(n - 1) + fibSequence(n - 2); 
 }
}
module.exports = functions