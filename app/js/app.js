// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
  /**
   * .........................Menu.........................
   */

  function menuInit() {
    const menu = document.querySelector('.header__menu')
    menu.addEventListener('click', (e) => {
      document.documentElement.classList.toggle('menu-open')

      const target = e.target
      const href = target.getAttribute('href')
      const el = document.querySelector(href)

      if (target.classList.contains('menu__link') && href.match('#')) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    })
  }

  menuInit()
})
