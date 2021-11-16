const readline = require("prompt-sync");


 const prompt=readline();

 
 function isPalindrome(x,y){
	let a = x.toString();
	let b = y.toString();
	if(a.length != b.length){
		console.log("Not palindrome!");
		return;
	}
	let n = a.length;
	let palindrome = true;
	for(let i=0;i<n;i++){
		if(a.charAt(i)!=b.charAt(n-1-i)){
			palindrome = false;
			break;
		}
	}
	if(palindrome){
		console.log("Palindrome");
	}else{
		console.log("Not a palindrome!");
	}
}
isPalindrome(534,435);
isPalindrome(414,404);