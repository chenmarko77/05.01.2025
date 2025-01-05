// 1
const inputButton = document.getElementById('button') 

button.addEventListener('click',function(event) {
button.style.background = 'green'
    
})

// 2
const inputButtonStiles = document.getElementById('button-styles') 
const inputTitle = document.getElementById('title') 


inputButtonStiles.addEventListener('click',function() {
    inputTitle.classList.add('title')
})

// 3

const enterData = prompt('Enter data')
const buttonPrompt = document.getElementById('button-prompt') 
buttonPrompt.addEventListener('click',function(event) {
    event.preventDefault()
   const newText =  document.createElement('p')
    newText.textContent = enterData;
    document.body.append(newText)
})

// 4
