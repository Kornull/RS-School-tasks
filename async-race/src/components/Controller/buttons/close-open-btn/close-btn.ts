export const closeAllBtns = () => {
  document.querySelectorAll('.btn').forEach((btn) => {
    if (!btn.classList.contains('btn__win') && !btn.classList.contains('btn__garage')) {
      if (!btn.classList.contains('btn__reset-all--car')) {
        btn.setAttribute('disabled', 'disabled');
      }
    }
  });
};

export const openAllBtns = () => {
  document.querySelectorAll('.btn').forEach((btn) => {
    if (!btn.classList.contains('btn__race-stop') && !btn.classList.contains('btn__update-car')) {
      if (!btn.classList.contains('btn__race-all--car')) {
        btn.removeAttribute('disabled');
      }
    }
    if (btn.classList.contains('close')) btn.classList.remove('close');
    if (btn.classList.contains('btn__race-stop')) btn.setAttribute('disabled', 'disabled');
  });
};

export const closeAllRaceBtn = () => {
  const allRacinng = document.querySelector('#all-race');
  allRacinng?.classList.add('close');
  allRacinng?.setAttribute('disabled', 'disabled');
};
