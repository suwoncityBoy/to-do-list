const inputEl = document.querySelector('.input')
const buttonEl = document.querySelector('.add')
const contentEl = document.querySelector('.add__content')

buttonEl.addEventListener('click', function () {
  let listEl = document.createElement('div')
  let checkboxEl = document.createElement('input')
  checkboxEl.type='checkbox'
  let textEl = document.createElement('span')
  let delEl = document.createElement('button')
  delEl.textContent='X'

  if (!inputEl.value) {
    alert('내용을 입력하세요.')
  } else {
    textEl.innerText = inputEl.value
    console.log(textEl.innerText)
    
    contentEl.appendChild(listEl)
    listEl.appendChild(checkboxEl)
    listEl.appendChild(textEl)
    listEl.appendChild(delEl)
    inputEl.value = ''
  }

  checkboxEl.addEventListener('click', function (e) {
    if (e.currentTarget.checked) {
      textEl.style.textDecoration = 'line-through'
    } else {
      textEl.style.textDecoration = 'none' 
    }
  })

  delEl.addEventListener('click', function (e) {
    contentEl.removeChild(e.currentTarget.parentNode)
  })

})



