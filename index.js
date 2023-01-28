const modalViews = document.querySelectorAll('.select-modal'),
  modalBtns = document.querySelectorAll('.select-button'),
  modalCloses = document.querySelectorAll('.selector-modal-close'),

  let modal - function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
  }

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalCloses) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})