const btn = document.querySelector('button')
const  body = document.querySelector("body")
const color = ['red', 'brown','blue', 'yellow', 'purple', 'green','gray','pink','orange','rose', 'lime', 'purple', 'maroon', 'teal', 'navy', 'golden']

body.style.backgroundColor = 'yellow'

btn.addEventListener('click', changeB)
function changeB(){
     const colorValue = parseInt(Math.random()*color.length)
     body.style.backgroundColor = color[colorValue]
}
