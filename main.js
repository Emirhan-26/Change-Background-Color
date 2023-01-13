const button = document.getElementById("btn");
const body = document.body;

const colors = ['green', 'yellow', 'red', 'blue', 'purple', 'black', 'pink', 'brown', 'orange', 'magenta', 'darkgray']

button.addEventListener('click',changeBackground)

function changeBackground() {
    const colorsIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorsIndex]
}

body.style.backgroundColor = colors[0]