//create a function to chnage the  background color
//set background

const $body = document.getElementById('body')
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
//setTitle('suh dude')

//setTitle
function setDescription(message){
    const $p = document.querySelector('p')
    $p.textContent = message
}

//invoke
//setDescription('this is my website now') 

//setFontColor 
function setFontColor(color) {
    $body.style.color = color 
}

//invoke 
//setFontColor('white')


function setTheme(theme) {
    $body.className = theme
}


//invoke
//setTheme('light') or
//setTheme('dark') 


 







