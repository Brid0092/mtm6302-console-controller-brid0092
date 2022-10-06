//create a function to chnage the  background color
//set background

const $body = document.getElementById('body')
function setBackgroundColor(color){
    $body.style.backgroundColor = color
}

//invoke
//setBackgroundColor('pink')

//set title
const $h1 = document.querySelector('h1')
function setTitle(message){
    $h1.textContent = message 
}

//invoke 
//setTitle('hello')

//setTitle
const $p = document.querySelector('p')
function setDescription(message){
    $p.textContent = message
}

//invoke
//setDescription('pizza with pinapple?') 

//setFontColor 
function setFontColor(color) {
    $body.style.color = color 
}

//invoke 
//setFontColor('white')


function setTheme(){ 
    $body.classList.toggle('dark')

}


//invoke 
//setTheme('light')







