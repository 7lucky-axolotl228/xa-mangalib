const elSiteThemeToggler = document.querySelector('.site-header-sign-in-button-moon-icon')

elSiteThemeToggler.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode')
})
