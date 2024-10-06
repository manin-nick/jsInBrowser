let button = document.getElementById('myButton')
let message = document.getElementById('message')

button.addEventListener('click', function(){
    message.textContent = 'Он нажал на кнопку'
})
// обращаемся к переменной button, в скобках указываем событие 'click' и функцию. В теле функции 
// мы присваиваем переменной message строку 'Он нажал на кнопку' с помощью textContent


let form = document.getElementById('myForm')
let result = document.getElementById('result')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    let name = document.getElementById('inputName').value 

    result.textContent = `Привет, ${name} `
})