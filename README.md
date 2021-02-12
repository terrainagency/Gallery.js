<p align="center">
  <img width="180" height="180" src="https://github.com/terrainagency/ghost/blob/main/assets/logo.svg" alt="Ghost: Agnostic GSAP and Tailwind Framework">
</p>

# Gallery.js

Dependencies: none 

Demo: https://terrainagency.com/ghost/objects/gallery/demo

> Note: Tailwind's spacing utilities must be extended to use `pb` aspect ratios

# Usage

Gallery.js is a collection of agnostic gallery objects built for use with GSAP and Tailwind. Gallery.js was built to allow for entirely different functionality at different window sizes.

```javascript
import {Gallery} from './ghost/components/Gallery.js'

const gallery = new Gallery(container, {})
```

# 1. Basic HTML Structure

`@gallery` is used to target the container of the gallery. `@panels` is used to target the container of the hover panel elements where event listeners will be added. Both of these targets can be customized.

```html
<div class="@gallery relative w-1/4 my-48 mx-auto">
    <div class="@panels absolute flex items-stretch w-full h-full">
        <!-- Panels will be generated here -->
    </div>

    <div class="relative overflow-hidden w-full pb-full pointer-events-none">
        <img class="absolute object-cover h-full w-full" src="">
        <!-- Images -->
    </div>

    <div class="@nav relative">
        <div class="w-4 h-8 bg-black">
        <!-- Declare the button style -->
    </div>
</div>
```

# 2. Create a new Gallery

```javascript
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
```

Key | Type | Default | Description
------------ | ------------ | ------------ | ------------
panels | string | undefined | Container element for hover panels
current | num | false | Start position for the gallery
onPlay | function | undefined | Callback triggered on play event
nav | string | undefined | Query string for nav bullet container
navAction | Function | .classList.add('active') | Action to take when a nav bullet is active
next | string | undefined | Query string for next button
prev | string | undefined | Query string for next button
loop | boolean | undefined | Determines if the gallery loops when breaching max or min
touch | {} | undefined | Enables touch event listeners
autoplay | num | undefined | Enables autoplay 
zoom* | boolean | undefined | Enables pinch zooming on mobile

> *Proposed feature

# Ex: Touch Events

```javascript
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
```

Key | Type | Default | Description
------------ | ------------ | ------------ | ------------
container | string | undefined | Container element for touch events
startDelay | num | undefined | Delay before running onStart()
endDelay | num | undefined | Delay before running onEnd()
onStart | function | undefined | Callback for touchstart
onEnd | function | undefined | Callback for touchend

# Responsive design

To make Gallery.js responsive, you can build different gallery instances depending on the size of the window.

```javascript
// 1. Imports
import { WindowQuery } from './components/WindowQuery.js'
import { Gallery } from './components/Gallery.js'

// 2. Define query sizes
const app = new WindowQuery({
    mobile: '375px',
    desktop: '768px',
})

// 3. Define gallery instances for each query size
app.mobile = () => {
    const gallery = new Gallery(container, {})
}
app.desktop = () => {
    const gallery = new Gallery(container, {})
}

```

# Status

Gallery.js is a part of Terrain's Ghost library, and is currently in development. Ghost is a library of foundational code blocks, designed for practical use on projects built with GSAP and Tailwind.

Ghost's code is non-obtrusive, and does not create any actions without your direction. It is designed to be as agnostic as possible, allowing it to function freely accross a large variety of applications.

v0.1:
- [x] Basic multi-state gallery
- [x] Enable type change at breakpoints
- [x] Event callbacks for advanced animation
- [x] Panel-based touch events
- [x] Touch event callbacks


v0.2: 
- [ ] Pinch to zoom
- [ ] Hide prev/next instead of all

Thumbnail v0.1: 
- [ ] Bullets as generated thumbnails
- [ ] Max bullets (auto scrolling)

[<- Back to Ghost](https://github.com/terrainagency/Ghost)