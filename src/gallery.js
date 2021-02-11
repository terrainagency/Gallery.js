window.addEventListener('DOMContentLoaded', function() {

    class Gallery {
        constructor(container, config) {
            this.container = container
            this.config = config || {}
            this.panelsContainer = this.config.panels || '.\\@panels'
            this.build()
            this.init()
        }
        build() {
            let panelsContainer = this.container.querySelector(this.panelsContainer)
            this.images = this.container.querySelectorAll("img")
            this.panels = panelsContainer.querySelectorAll("div")
        }
        init() {
            this.panels.forEach((panel, i) => {
                panel.addEventListener('mouseenter', (e) => {
                    this.play(i)
                })
            })
        }
        play(i) {
            this.images.forEach(image => {
                image.style.opacity = 0
            })
            this.images[i].style.opacity = 1
        }
    }

    const container = document.querySelector(".\\@gallery")
    const gallery = new Gallery(container)

})