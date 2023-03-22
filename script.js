
(()=>{
const btn = document.querySelector("[data-form-btn]")
const createTask = (e) =>{
    e.preventDefault()
    const textTask = document.querySelector("[data-form-input]")
    const value = textTask.value
    const card = document.querySelector('[data-card]')
    const task = document.createElement('li')
    task.classList.add("card")
    textTask.value = ""
    const taskContent = document.createElement('div')
    taskContent.appendChild(checkComplete())
    const titleTask = document.createElement('span')
    titleTask.classList.add('task')
    titleTask.innerText = value
    taskContent.appendChild(titleTask)
    const content = `
    
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  //task.innerHTML=content
  task.appendChild(taskContent)
  card.appendChild(task)
}
btn.addEventListener("click", createTask)

const checkComplete = () =>{
    const i = document.createElement('i')
    i.classList.add('far','fa-check-square','icon')
    i.addEventListener('click', completeTask)
    return i
}

const completeTask = (e)=>{
    const element = e.target
    element.classList.toggle('fas')
    element.classList.toggle('completeIcon')
    element.classList.toggle('far')
}})();