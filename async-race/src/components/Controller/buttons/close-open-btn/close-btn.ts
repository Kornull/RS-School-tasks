export const closeAllBtns = () => {
  document.querySelectorAll('.btn').forEach((btn) => {
    if (!btn.classList.contains('btn__win')) {
      btn.setAttribute('disabled', 'disabled');
    }
  });
};

export const openAllBtns = () => {
  document.querySelectorAll('.btn').forEach((btn) => {
    if (!btn.classList.contains('btn__race-stop')) {
      btn.removeAttribute('disabled');
    }
  });
};
