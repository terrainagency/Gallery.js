<p align="center">
  <img width="180" height="180" src="https://github.com/terrainagency/ghost/blob/main/assets/logo.svg" alt="Ghost: Agnostic GSAP and Tailwind Framework">
</p>

# Gallery.js

Dependencies: none 

Demo: https://terrainagency.com/ghost/objects/gallery/demo

# Usage

Gallery.js is a collection of agnostic gallery objects built for use with GSAP and Tailwind.

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
    next: '.\\@next',
    prev: '.\\@prev',
})
```

Key | Type | Default | Description
------------ | ------------ | ------------ | ------------
panels | string | undefined | Container element for hover panels
current | num | false | Start position for the gallery
nav | string | undefined | Query string for nav bullet container
next | string | undefined | Query string for next button
prev | string | undefined | Query string for next button

# Responsive design

To make Gallery.js responsive, you can build different gallery instances depending on the size of the window.

```javascript
// 1. Your resize function

// 2. If window > X, Create mobile gallery

// 2. If window > X, Create desktop gallery
```

# Status

Gallery.js is a part of Terrain's Ghost library, and is currently in development. Ghost is a library of foundational code blocks, designed for practical use on projects built with GSAP and Tailwind.

Ghost's code is non-obtrusive, and does not create any actions without your direction. It is designed to be as agnostic as possible, allowing it to function freely accross a large variety of applications.

v0.1:
- [x] Basic multi-state gallery
- [ ] Event callbacks for advanced animation
- [ ] Hide prev/next instead of all
- [ ] Enable type change at breakpoints