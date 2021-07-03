<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";

export default {
  name: "GoBackLinkListItem",
  components: {
    GoBackLink,
  },

  data() {
    return {
      // msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
li {
  list-style: none;
}
</style>
