let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';

function doDemo(button) {
    var square = document.getElementById("square")
    square.style.backgroundColor = "#fa4"
    button.setAttribute("disabled", "true")
    setTimeout(clearDemo, 2000, button)
}

function clearDemo(button) {
    var square = document.getElementById("square")
    square.style.backgroundColor = "blue"
    button.removeAttribute("disabled")
}
