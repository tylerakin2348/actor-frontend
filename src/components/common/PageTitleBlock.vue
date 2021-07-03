<template>
  <div class="title_block d-flex">
    <h1 :class="classes + ' d-flex flex-column'">
      <span class="h4">{{ page_title }}</span>
      <span aria-hidden="true">Tyler Akin</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "PageTitleBlock",
  props: ["page_title", "classes"],

  data() {
    return {
      // msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.title_block {
  display: flex;
  text-decoration: none;
  padding: 1em;
  text-transform: uppercase;
  text-align: right;
}

@media screen and (min-width: 769px) {
  .title_block {
    height: 50vh;
  }
}
h1 {
  font-weight: 700;
}
</style>
