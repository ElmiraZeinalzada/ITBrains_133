let removeElement = document.querySelector('h1')
removeElement.remove()
let newElement = document.createElement('li')
newElement.innerText = 'TITAN RTX'
let parentElement = document.querySelector('ul')
parentElement.append(newElement)