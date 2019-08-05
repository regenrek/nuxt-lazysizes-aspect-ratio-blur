<template>
  <div class="container">
    <section class="gallery">
      <div class="col">
        <LazyImage aspect-ratio="16:9" object-fit="cover" fetchMode="img"/>
      </div>
      <div class="col">
        <LazyImage
          data-src="https://placekitten.com/110/202"
          aspect-ratio="16:9"
          object-fit="cover"
        />
        <LazyImage
          data-src="https://placekitten.com/110/202"
          aspect-ratio="16:9"
          object-fit="cover"
        />
      </div>
    </section>

    <section>
      <LazyImage data-src="cat1.jpg" aspect-ratio="16:9" object-fit="cover" fetchMode="img"/>
    </section>
    <section>
      <LazyImage data-src="https://placekitten.com/200/300" aspect-ratio="9:16" object-fit="cover"/>
    </section>
  </div>
</template>
<script>
import LazyImage from "~/components/LazyImage";

export default {
  components: {
    LazyImage
  }
};
</script>
<style lang="postcss">
figure {
  border: 1px solid blue;
}

.gallery {
  display: flex;
  flex-grow: 1;
  .col {
    width: 100%;
  }
}

section {
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;
}

.container {
  margin: 0 auto;
  max-width: 600px;
  border-left: 1px solid red;
  border-right: 1px solid red;
}
</style>
