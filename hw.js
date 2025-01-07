// // 1
// const inputButton = document.getElementById('button') 

// button.addEventListener('click',function(event) {
// button.style.background = 'green'
    
// })

// // 2
// const inputButtonStiles = document.getElementById('button-styles') 
// const inputTitle = document.getElementById('title') 


// inputButtonStiles.addEventListener('click',function() {
//     inputTitle.classList.add('title')
// })

// // 3

// const enterData = prompt('Enter data')
// const buttonPrompt = document.getElementById('button-prompt') 
// buttonPrompt.addEventListener('click',function(event) {
//     event.preventDefault()
//    const newText =  document.createElement('p')
//     newText.textContent = enterData;
//     document.body.append(newText)
// })





// 5 && 9
// const world = document.querySelector('.world') 
// world.addEventListener('click',function() {
// alert('Hello world')
// })

// 6
// const input = document.getElementById('input')
// const buttonHello = document.getElementById('button-hello')

// buttonHello.addEventListener('click',function() {
//     alert(`Hello ${input.value}`)
// })

//7
// const webSite = document.querySelector('.web-site')
// console.log(webSite);

// webSite.addEventListener('click',function() {
//  document.querySelector('body').style.background = `rgb(${Math.round(Math.random()*255)}, 
//     ${Math.round(Math.random()*255)}, 
//     ${Math.round(Math.random()*255)} `
// })

//8

// const photo = document.querySelector('.photo')
// const carp = document.querySelector('.carp')
// const toggle = document.querySelector('.toggle')

// photo.addEventListener('click',function() {
// toggle.classList.toggle('carp')
// })

//10
const zoomIn = document.querySelector('.zoom-in')
const zoomOut = document.querySelector('.zoom-out')
const names = document.querySelector('.names')

zoomIn.addEventListener('click',function() {
// names.style.fontSize = Number(`${names.style.fontSize}-40px`)
const currentFontSize = parseInt(names.style.fontSize, 10);
const newFontSize = currentFontSize - 2;
names.style.fontSize = `${newFontSize}px`
})


zoomOut.addEventListener('click',function() {
    names.style.fontSize = '34px'
    })