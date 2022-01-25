
document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector("form")
form.addEventListener('submit', (e) => {
  e.preventDefault()
 
  buildToDo(e.target.elements[0].value)
  form.reset()
})
})

function buildToDo(todo){
  let li = document.createElement('li');
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' x '
  li.textContent = `${todo}  `
  li.appendChild(btn)
  document.querySelector("#tasks").appendChild(li)
  let dropDownList = document.createElement('select');
  dropDownList.classList.add("priority")
  li.appendChild(dropDownList)
  let high = document.createElement('option')
  high.textContent = "High"
  dropDownList.appendChild(high)
  let med = document.createElement('option')
  med.textContent = "Med"
  dropDownList.appendChild(med)
  let low = document.createElement('option')
  low.textContent = "Low"
  dropDownList.appendChild(low)
  dropDownList.addEventListener('change', (e) => {
    let choice = e.target.value
  if (choice === "High"){
    li.style.color = "red"}
  else if (choice === "Med"){
    li.style.color = "yellow"
  }
  }
  )

}


function handleDelete(e){
  e.target.parentNode.remove()

}

  