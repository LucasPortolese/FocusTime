let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light')

  const mode = darkMode ? 'licht' : 'dark'
  event.currentTarget
    .querySelector('span').textContent = `${mode} modo ativado`
  darkMode = !darkMode
})