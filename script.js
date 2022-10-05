//create a function to chnage the  background color
//set background

const $body = document.querySelector('body')
function setBackgroundColor(color){
    $body.style.backgroundColor = color
}

//invoke
//setBackgroundColor('pink')

//set title
function setTitle(message){
    const $h1 = document.querySelector('h1')
    $h1.textContent = message 
}

//invoke 
//setTitle('hello')

//setTitle
function setDescription(message){
    const $p = document.querySelector('p')
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

const $dark = document.querySelector('.dark')

function setTheme(theme){
    
}



