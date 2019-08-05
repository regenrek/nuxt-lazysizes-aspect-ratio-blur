<template>
  <figure
    :class="[objectFit !== '' ? 'is-' + objectFit : '']"
    :data-aspect-ratio="aspectRatio"
  >
    <picture v-if="fetchMode === 'srcset'">
      <source :data-srcset="image.webp" type="image/webp" />
      <source :data-srcset="image.opt" type="image/jpg" />
      <img
        :src="image.placeholder"
        class="lazyload blur"
        :data-src="image.opt"
      />
    </picture>
    <img
      v-else-if="fetchMode === 'img'"
      :src="image.placeholder"
      class="lazyload blur"
      :data-src="image.opt"
    />
    <img v-else class="lazyload" :data-src="dataSrc" />
  </figure>
</template>

<script>
export default {
  props: {
    aspectRatio: {
      default: "16:9",
      required: false,
      type: String
    },
    dataSrc: {
      default: "cat2.jpg",
      required: false,
      type: String
    },
    objectFit: {
      default: "cover",
      required: false,
      type: String
    },
    fetchMode: {
      default: "none",
      required: false,
      type: String
    },
    lqip: {
      default: true,
      required: false,
      type: Boolean
    }
  },
  computed: {
    image() {
      return {
        original: require(`~/assets/images/${this.dataSrc}?original`),
        opt: require(`~/assets/images/${this.dataSrc}`),
        placeholder: require(`~/assets/images/${this.dataSrc}?lqip`),
        placeholderBlur: require(`~/assets/images/${this.dataSrc}?lqip`),
        colors: require(`~/assets/images/${this.dataSrc}?lqip-colors`),
        webp: require(`~/assets/images/${this.dataSrc}?webp`)
      };
    }
  }
};
</script>

<style scoped lang="postcss">
img.blur {
  filter: blur(25px);
}

img.lazyloaded {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.blur {
    filter: blur(0);
  }
}
</style>
