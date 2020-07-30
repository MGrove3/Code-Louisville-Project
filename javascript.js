
/* Create a JavaScript function whose return value is used in your site. The function must be triggered by user action (ex: clicking a button). */
function goToHome () { 
    window.location.href = "index.html";
};


/* Use JavaScript to perform math operations and display the result on your site */
alert(30 * 42);
/* Equal to 1260 */
alert(12 + 56);
/* Equal to 68 */
alert(33 / 2.5);
/* Equal to 13.2 */

/* A math equation instead of just an alert */
var w = 10
var x = 43
var y = 4

var z = x * y - w
alert(z)
/* Equals to 162 */

/* Slider Javascript */
var slider_content = document.getElementById('box');

/* Containing the images in an array */
var image = ['a', 'b', 'c'];

var i = image.length;

// function for next slide
function nextImage(){
    if (i<image.length) {
        i= image.length;
    }else{
        i=1;
    }
        slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}

//function for previous slide
function prevImage() {
    if (i<image.length+1 && i>1) {
        i=image.length;
    }else{
        i=1;
    }
        slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}
