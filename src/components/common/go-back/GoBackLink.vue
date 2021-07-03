<template>
  <router-link class="go-back-arrow-link" :to="{ path: this.determined_url }">
    <img class="arrow-icon" alt="" :src="require(`@/assets/arrow.svg`)" />
    <span v-if="link_text">{{ link_text }}</span>
    <span v-else>Go back</span>
  </router-link>
</template>

<script>
export default {
  name: "GoBack",
  props: ["url", "link_text"],

  data() {
    return {
      determined_url: this.$props.url ? this.$props.url : "",
      // msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.go-back-arrow-link {
  color: #000;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  padding: 0.5em;

  .arrow-icon {
    margin-right: 0.5em;
    height: 1em;
    width: 1em;
  }
}
</style>
