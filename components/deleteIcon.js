const trashIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", trashTask);
    return i;
  };

  const trashTask = (e) => {
    const parent = e.target.parentElement
    parent.remove();
  };

  export default trashIcon