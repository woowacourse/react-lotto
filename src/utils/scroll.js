function hideScroll() {
  document.body.classList.add('modal-opened');
}

function showScroll() {
  document.body.classList.remove('modal-opened');
}

export { hideScroll, showScroll };
