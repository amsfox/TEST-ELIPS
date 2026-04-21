document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menuToggle')
  const nav = document.querySelector('.navLinks')
  if (!toggle || !nav) return

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open')
    nav.classList.toggle('open')
    toggle.setAttribute('aria-expanded', String(nav.classList.contains('open')))
  })
})
