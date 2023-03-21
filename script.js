const btn = document.querySelector("[data-form-btn]")


console.log(btn)

const createTask = (e) =>{
    e.preventDefault()
    const textTask = document.querySelector("[data-form-input]")
    const value = textTask.value
    const card = document.querySelector('[data-card]')
    const task = document.createElement('li')
    task.classList.add("card")
    textTask.value = ""
    const content = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
  task.innerHTML=content
  card.appendChild(task)
    console.log(content)
}



btn.addEventListener("click", createTask)