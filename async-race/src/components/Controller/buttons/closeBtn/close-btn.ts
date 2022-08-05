export const closeAllBtns = () => {
  document.querySelectorAll('.btn').forEach((btn) => {
    if (!btn.classList.contains('btn__win')) {
      btn.setAttribute('disabled', 'disabled');
    }
  });
};
