/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");



function mycolor() {
  document.getElementById("demo").style.backgroundColor = "red";
}

function time() {
  var clock = document.getElementById('clock');

  var time = new Date();

  clock.textContent = time.toLocaleString('en-US', { weekday:"long", hour: '2-digit', minute: 'numeric', second: 'numeric', hour12: false })

}

setInterval(time, 2);
