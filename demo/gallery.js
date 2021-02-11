window.addEventListener('DOMContentLoaded', function() {

    class Gallery {
        constructor(container, config) {
            this.container = container
            this.config = config || {}
            this.images = this.container.querySelectorAll("img")
            this.nav = this.container.querySelector(this.config.nav) || undefined
            this.prevBtn = this.container.querySelector(this.config.prev) || undefined
            this.nextBtn = this.container.querySelector(this.config.next) || undefined
            this.panelsContainer = this.container.querySelector(this.config.panels) || undefined
            this.current = this.config.start || 0
            this.build()
            this.init()
        }
        build() {
            // 1. Build panels
            if(this.panelsContainer !== undefined) {
                let str = ``
                this.images.forEach(image => {
                    str += `<div class="flex-1"></div>`
                })
                this.panelsContainer.innerHTML = str
    
                this.panels = this.panelsContainer.querySelectorAll('div')

                this.panels.forEach((panel, i) => {
                    panel.addEventListener('mouseenter', (e) => {
                        this.current = i
                        this.play()
                    })
                })
            }

            // 2. If navigation exists, add functionality 
            if(this.nav !== undefined) {
                for(var i = 0; i < this.images.length-1; i++) {
                    console.log(i)
                }
            }
            
            // 3. If prev button exists, add functionality
            if(this.prevBtn !== undefined) {
                this.prevBtn.addEventListener('click', (e) => {
                    e.preventDefault()
                    this.prev()
                })
            }

            // 4. If next button exists, add functionality
            if(this.nextBtn !== undefined) {
                this.nextBtn.addEventListener('click', (e) => {
                    e.preventDefault()
                    this.next()
                })
            }
        }
        init() {
            console.log(this)
        }
        play() {
            if(this.current < 0) {this.current = this.images.length-1} 
            else if(this.current > this.images.length-1) {this.current = 0}

            this.images.forEach(image => {
                image.style.opacity = 0
            })
            this.images[this.current].style.opacity = 1
        }
        next() {
            this.current++
            this.play()
        }
        prev() {
            this.current--
            this.play()
        }
    }

    const container = document.querySelector(".\\@gallery")
    const gallery = new Gallery(container, {
        panels: '.\\@panels',
        nav: '.\\@nav',
        prev: '.\\@prev',
        next: '.\\@next',
    })

})