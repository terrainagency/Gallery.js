import { WindowQuery } from './components/WindowQuery.js'
import { Gallery } from './components/Gallery.js'

const app = new WindowQuery({
    mobile: '375px',
    desktop: '768px',
})

app.mobile = () => {
    const container = document.querySelector(".\\@gallery")

    const gallery = new Gallery(container, {
        panels: '.\\@panels',
        nav: '.\\@nav',
        prev: '.\\@prev',
        next: '.\\@next',
        onPlay: (self) => {
            self.images.forEach((image, i) => {
                if(self.bullets !== undefined) {self.bullets[i].classList.remove('active')}

                image.style.opacity = 0
            })
            if(self.bullets !== undefined) {self.bullets[self.current].classList.add('active')}
            self.images[self.current].style.opacity = 1
        },
        touch: {
            container: '.\\@images',
            startDelay: 100,
            endDelay: 500,
            onStart: () => {
                gallery.prevBtn.classList.add('hidden')
                gallery.nextBtn.classList.add('hidden')
            },
            onEnd: () => {
                gallery.prevBtn.classList.remove('hidden')
                gallery.nextBtn.classList.remove('hidden')
            },
        },
    })
}

app.desktop = () => {
    const container = document.querySelector(".\\@gallery")
    
    const gallery = new Gallery(container, {
        panels: '.\\@panels',
        nav: '.\\@nav',
        prev: '.\\@prev',
        next: '.\\@next',
        onPlay: (self) => {
            self.images.forEach((image, i) => {
                if(self.bullets !== undefined) {self.bullets[i].classList.remove('active')}

                image.style.opacity = 0
            })
            if(self.bullets !== undefined) {self.bullets[self.current].classList.add('active')}
            self.images[self.current].style.opacity = 1
        },
    })
}

app.init()

