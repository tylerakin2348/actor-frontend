<template>
  <nav>
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "GoBackNavigationList",

  data() {
    return {
      // msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style: none;
  margin-bottom: 2rem;
  padding-left: 0;
}
</style>
