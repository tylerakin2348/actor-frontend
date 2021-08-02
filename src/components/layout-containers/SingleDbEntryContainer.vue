<template>
  <div class="single-db-entry-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Single DB Entry Container",
};
</script>

<style lang="scss" scoped>
    .single-db-entry-container {
        width: 100%;
        @media screen and (min-width: 769px) {
            width: 50%;
        }
    }
</style>
