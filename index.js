var btn = document.querySelector('.button');
var textColor = document.querySelector('.color')

const colors = ['aqua', 'blue', 'red', 'blueviolet', 'gold', 'crimson', 'gray', 'green', 'hotpink', 'magenta', 'olive', 'tomato', 'violet', 'tan'];


function rand(min, max) {
    return Math.floor(Math.random() * (max + min) - min);
}

function color() {
    var select = rand(0, colors.length);
    document.body.style.backgroundColor = colors[select];
    textColor.textContent = colors[select];
    console.log(colors[select]);
}


btn.addEventListener('click', function() {color()})