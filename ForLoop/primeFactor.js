const readline = require("prompt-sync");
const prompt=readline();

const num = prompt('Enter any number to find its prime factors: ')


let isPrime = 0;


for ( i = 2; i*i <= num; i++ ) {

    if ( num % i == 0 ) {
        isPrime = 1;
        for ( j = 2; j <= i / 2; j++ ) {
            if ( i % j == 0) {
                isPrime = 0;
            }
        }
        if ( isPrime == 1 ) {
            console.log(i);
        }
    }
    
}
