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

  /**
   * .........................Parallax.........................
   */

  function Parallax(options) {
    options = options || {}
    this.nameSpaces = {
      wrapper: options.wrapper || '.parallax',
      layers: options.layers || '.parallax-layer',
      deep: options.deep || 'data-parallax-deep',
    }
    this.init = function () {
      var self = this,
        parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper)
      for (var i = 0; i < parallaxWrappers.length; i++) {
        ;(function (i) {
          parallaxWrappers[i].addEventListener('mousemove', function (e) {
            var x = e.clientX,
              y = e.clientY,
              layers = parallaxWrappers[i].querySelectorAll(
                self.nameSpaces.layers
              )
            for (var j = 0; j < layers.length; j++) {
              ;(function (j) {
                var deep = layers[j].getAttribute(self.nameSpaces.deep),
                  disallow = layers[j].getAttribute('data-parallax-disallow'),
                  itemX = disallow && disallow === 'x' ? 0 : x / deep,
                  itemY = disallow && disallow === 'y' ? 0 : y / deep
                if (disallow && disallow === 'both') return
                layers[j].style.transform =
                  'translateX(' + itemX + '%) translateY(' + itemY + '%)'
              })(j)
            }
          })
        })(i)
      }
    }
    this.init()
    return this
  }

  new Parallax({
    wrapper: '.hero',
  })

  // function paralax() {
  //   let currentX = ''
  //   let currentY = ''
  //   const movementSpeed = 0.025

  //   document.documentElement.addEventListener('mousemove', (e) => {
  //     if (currentX == '') currentX = e.pageX
  //     const xdiff = e.pageX - currentX
  //     currentX = e.pageX
  //     if (currentY == '') currentY = e.pageY
  //     const ydiff = e.pageY - currentY
  //     currentY = e.pageY

  //     const elements = document.querySelectorAll('.paralax__layer')
  //     Array.from(elements).forEach((el, i) => {
  //       console.log(el)
  //       const movement = (i + 1) * (xdiff * movementSpeed)
  //       const movementy = (i + 1) * (ydiff * movementSpeed)
  //       const newX = el.position().left + movement
  //       const newY = el.position().top + movementy
  //       const cssObj = {
  //         left: newX + 'px',
  //         top: newY + 'px',
  //       }

  //       // $(el).css('left', newX + 'px');
  //       // $(el).css('top', newY + 'px');
  //       el.style.cssText = `
  //       transform: translate(${newX}px, ${newY}px)
  //       `
  //     })
  //   })
  // }

  // paralax()
})
