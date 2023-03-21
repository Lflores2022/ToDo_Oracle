const btn = document.querySelector("[data-form-btn]")


console.log(btn)

const createTask = (e) =>{
    e.preventDefault()
    const textTask = document.querySelector("[data-form-input]")
    console.log(textTask.value)
}



btn.addEventListener("click", createTask)