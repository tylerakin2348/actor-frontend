<template>
  <div class="single-db-entry-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SingleDBEntryContainer"
};
</script>

<style lang="scss" scoped>
.single-db-entry-container {
  margin: 2em 0;
  width: 100%;
  @media screen and (min-width: 769px) {
    width: 50%;
  }
}
</style>
