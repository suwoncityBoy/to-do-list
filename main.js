// 리팩토링 코드 
const inputEl = document.querySelector('.input')
const contentEl = document.querySelector('.add__content')
const formEl = document.querySelector('form')


formEl.addEventListener('submit', function (e) {
  e.preventDefault() // 새로고침 방지해준다. 
  if (!inputEl.value) {
    return alert('내용을 입력하세요.')
  }
  let listEl = document.createElement('div')
  let checkboxEl = document.createElement('input')
  checkboxEl.type = 'checkbox'
  let textEl = document.createElement('span')
  let delEl = document.createElement('button')
  delEl.textContent = 'X'
  console.log(listEl)
  textEl.innerText = inputEl.value

  contentEl.appendChild(listEl)
  listEl.appendChild(checkboxEl)
  listEl.appendChild(textEl)
  listEl.appendChild(delEl)
  inputEl.value = ''


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





// 기존에 작성 코드 
// const inputEl = document.querySelector('.input')
// const buttonEl = document.querySelector('.add')
// const contentEl = document.querySelector('.add__content')

// buttonEl.addEventListener('click', function () {
//   let listEl = document.createElement('div')
//   let checkboxEl = document.createElement('input')
//   checkboxEl.type='checkbox'
//   let textEl = document.createElement('span')
//   let delEl = document.createElement('button')
//   delEl.textContent='X'

//   if (!inputEl.value) {
//     alert('내용을 입력하세요.')
//   } else {
//     textEl.innerText = inputEl.value
//     console.log(textEl.innerText)
    
//     contentEl.appendChild(listEl)
//     listEl.appendChild(checkboxEl)
//     listEl.appendChild(textEl)
//     listEl.appendChild(delEl)
//     inputEl.value = ''
//   }

//   checkboxEl.addEventListener('click', function (e) {
//     if (e.currentTarget.checked) {
//       textEl.style.textDecoration = 'line-through'
//     } else {
//       textEl.style.textDecoration = 'none' 
//     }
//   })

//   delEl.addEventListener('click', function (e) {
//     contentEl.removeChild(e.currentTarget.parentNode)
//   })

// })
