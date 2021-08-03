<template>
    <div class="block-container d-flex flex-wrap" :class="component_classes">
        <slot></slot>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "BorderedLeftTitleStyleRow",
  props: {
    component_classes: {
      type: String,
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 769px) {
  .block-container {
    align-items: flex-end;
    height: 100vh;
    &.align-content-center {
      align-items: center;
    }
  }
}
</style>
