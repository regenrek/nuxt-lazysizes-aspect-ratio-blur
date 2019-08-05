# Nuxtjs + lazysizes + aspect-ratio + blur-up

### Demo

[Codesandbox Demo](https://codesandbox.io/s/nuxtjs-lazysizes-aspect-ratio-blur-5e3rv)

### Features

- [lazysizes](https://github.com/aFarkas/lazysizes) as nuxt plugin
- Define [Aspect Ratio](https://css-tricks.com/snippets/sass/maintain-aspect-ratio-mixin/) for imagecontainers
- Supports lqip [blur-up](https://github.com/aFarkas/lazysizes#lqipblurry-image-placeholderblur-up-image-technique)
- Supports webp with [nuxt-optimizied-images](https://github.com/bazzite/nuxt-optimized-images)

### Install Project

```bash
$ git clone https://github.com/regenrek/nuxt-lazysizes-aspect-ratio-blur

$ yarn

$ yarn dev
```

### Usage

```html
<template>
  <div>
    <!-- blur up + optimizied image lazyload -->
    <LazyImage
        data-src="cat1.jpg"
        aspect-ratio="16:9"
        object-fit="cover"
        fetchMode="img"
    />

    <!-- srcset lazyload -->
    <LazyImage
        data-src="cat1.jpg"
        aspect-ratio="16:9"
        object-fit="cover"
        fetchMode="srcset"
    />

    <!-- simple image lazyload -->
    <LazyImage
        data-src="cat1.jpg"
        aspect-ratio="16:9"
        object-fit="cover"
    />
  </div>
</template>


```

### Todo

- Better `<LazyImage>` API
- Create vue-plugin
- Create nuxt-module

### Credits:

Credit to [Alex](http://twitter.com/ignore_you): [Minify, generate WebP and lazyload images in your Vue & Nuxt application](https://dev.to/ignore_you/minify-generate-webp-and-lazyload-images-in-your-vue-nuxt-application-1ilm)

### Other examples

[Aspect Ratio + vanilla/lazyload](https://codepen.io/kkern/pen/LKmvjx)
