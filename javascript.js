
/* Create a JavaScript function whose return value is used in your site. The function must be triggered by user action (ex: clicking a button). */
function goToHome () { 
    window.location.href = "index.html";
};

/*math equation function */
var x = 23;
var y = 187;
var z = 122;

var w = z + 4 * ( y - x)
console.log (w)
/* Answer is 778 */

/* Function to generate random number */ 
function randomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}  
 console.log("Random Number between 1 and 10: ")  
  
/* Function call */
console.log( randomNumber(1, 10) );