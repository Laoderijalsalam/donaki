function openLoginDialog() {
  document.querySelector('#login-dialog').showModal();
}

function closeLoginDialog() {
  document.querySelector('#login-dialog').close();
}

function handleLogin(event) {
  event.preventDefault();
  closeLoginDialog();
  return false;
}

function handleNewsletter(event) {
  event.preventDefault();
  event.currentTarget.reset();
  return false;
}

document.querySelector('#login-dialog').addEventListener('click', (event) => {
  if (event.target.id === 'login-dialog') closeLoginDialog();
});
