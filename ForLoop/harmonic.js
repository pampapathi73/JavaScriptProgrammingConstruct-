const readline = require("prompt-sync");
const prompt=readline();

let number = prompt('Enter the value of n to find Harmonic: ');
let sum = 0;

for(i=1; i <= number; i++){
    sum=sum+(1/i);
}
 console.log("Harmonic value value is: " + sum);