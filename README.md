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
```

# 1. HTML Structure

`@gallery` is used to target the container of the gallery. `@panels` is used to target the container of the hover panel elements where event listeners will be added. Both of these targets can be customized.

```html
<div class="@gallery relative w-1/4 my-48 mx-auto">
    <div class="@panels absolute flex items-stretch w-full h-full">
        <div class="flex-1"></div>
        <!-- The number of panel divs must match number of images below -->
    </div>

    <div class="relative overflow-hidden w-full pb-full pointer-events-none">
        <img class="absolute object-cover h-full w-full" src="">
        <!-- Images -->
    </div>
</div>
```

# 2. Create a new Gallery

```javascript
const container = document.querySelector(".\\@gallery")

const gallery = new Gallery(container, {
    panels: '.\\@panels'
})
```

Key | Type | Default | Description
------------ | ------------ | ------------ | ------------
panels | string | `.\\@panels` | Container element for panels

# Status

Gallery.js is a part of Terrain's Ghost library, and is currently in development. Ghost is a library of foundational code blocks, designed for practical use on projects built with GSAP and Tailwind.

Ghost's code is non-obtrusive, and does not create any actions without your direction. It is designed to be as agnostic as possible, allowing it to function freely accross a large variety of applications.

v0.1:
- [x] Basic multi-state gallery
- [ ] Event callbacks for advanced animation
- [ ] Hide prev/next instead of all
- [ ] Enable type change at breakpoints