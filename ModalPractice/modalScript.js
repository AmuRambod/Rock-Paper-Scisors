const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-modal-close-button]");
const overlay = document.querySelector("#overlay");

//adding the event listeners to open modal buttons to open their target modal.
openModalButtons.forEach(openModalBtn => {
  openModalBtn.addEventListener("click", () => {
    const targetModal = document.querySelector(openModalBtn.dataset.modalTarget);
    //"dataset" gets the set of data attributes of an object and camel-cases them to use.
    openModal(targetModal);
  })
})

//adding the event listeners to close modal buttons to close the modal they're in.
closeModalButtons.forEach(closeModalBtn => {
  closeModalBtn.addEventListener("click", () => {
    const targetModal = closeModalBtn.closest(".modal");
    //"closest()" selects the nearest parent element to the "closeModalBtn" that has the specified selector. In this case, the closest parent element with "modal" class.
    closeModal(targetModal);
  })
})

function openModal(modal){
  if(modal == null) return;  //if fo some reason this function gets called whitout a modal input => exit out of function
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal){
  if(modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}