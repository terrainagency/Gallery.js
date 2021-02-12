import { debounce } from '../utils/debounce.js'

export class Gallery {
    constructor(container, config) {
        this.container = container
        this.config = config || {}
        this.images = this.container.querySelectorAll("img")
        this.onPlay = config.onPlay || undefined
        this.panels = this.buildPanels(config.panels) || undefined
        this.nav = this.buildNav(config.nav) || undefined
        this.prevBtn = this.buildPrevBtn(config.prev) || undefined
        this.nextBtn = this.buildNextBtn(config.next) || undefined
        this.touch = this.buildTouch(config.touch) || undefined
        this.auto = this.autoplay(config.autoplay) || undefined
        this.current = config.start || 0
        this.init()
    }
    buildPanels(sel) {
        const container = this.container.querySelector(sel)

        // 1. Add panels to DOM
        let str = ``
        this.images.forEach(image => {
            str += `<div class="flex-1"></div>`
        })
        container.innerHTML = str

        // 2. Add events to each panel
        this.panels = container.querySelectorAll('div')
        this.panels.forEach((panel, i) => {
            panel.addEventListener('mouseenter', (e) => {
                this.current = i
                this.play()
            })
        })
    }
    buildPrevBtn(sel) {
        const btn = this.container.querySelector(sel)
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            this.prev()
        })

        return btn
    }
    buildNextBtn(sel) {
        const btn = this.container.querySelector(sel)
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            this.next()
        })

        return btn
    }
    buildNav(sel) {
        let container = this.container.querySelector(sel)

        // 1. Add bullets to DOM
        let str = ''
        let elHTML = container.querySelector('div').outerHTML
        for(var i = 0; i < this.images.length; i++) {
            str += elHTML
        }
        container.innerHTML = str

        // 2. Add events to bullets
        this.bullets = container.querySelectorAll('div')
        this.bullets.forEach((bullet, i) => {
            bullet.addEventListener('click', (e) => {
                e.preventDefault()
                this.current = i
                this.play()
            })
        })
    }
    buildTouch(settings) {
        if(this.config.touch !== undefined) {
            let container = this.container.querySelector(settings.container)
            const factor = this.container.offsetWidth / (this.images.length - 1)

            // 1. Touchstart
            container.addEventListener('touchstart', (e) => {
                e.preventDefault()
                setTimeout(settings.onStart, settings.startDelay)
            })

            // 2. Touchmove
            container.addEventListener('touchmove', debounce((e) => {
                e.preventDefault()
                let xPos =  Math.round(e.touches[0].pageX / factor)

                this.current = xPos
                this.play()
            }, 0))

            // 3. Touchend
            container.addEventListener('touchend', (e) => {
                e.preventDefault()
                setTimeout(settings.onEnd, settings.endDelay)
            })
        }
    }
    autoplay() {}
    play() {
        if(this.current < 0) {this.current = this.images.length-1} 
        else if(this.current > this.images.length-1) {this.current = 0}

        if(this.onPlay !== undefined) {this.onPlay(this)}
    }
    next() {this.play(this.current++)}
    prev() {this.play(this.current--)}
    init() {this.play(this.current)}
}