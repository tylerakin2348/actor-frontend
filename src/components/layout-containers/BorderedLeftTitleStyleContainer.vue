<template>
    <div class="block-container d-flex flex-wrap align-items-end">
        <slot></slot>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "BorderedLeftTitleStyleRow",
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .block-container {
    height: 100vh;
  }
}
</style>
