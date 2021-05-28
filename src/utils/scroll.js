function hideScroll(className) {
  document.body.classList.add(className);
}

function showScroll(className) {
  document.body.classList.remove(className);
}

export { hideScroll, showScroll };
