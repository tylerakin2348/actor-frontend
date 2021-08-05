<template>
  <div class="absolutely-positioned-container" :class="component_classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AbsolutelyPositionedContainer",
  props: {
    component_classes: {
      type: String
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.absolutely-positioned-container {
  position: absolute;
  left: 1em;
  top: 1em;

  &.right {
    left: auto;
    right: 1em;
  }
  &.bottom {
    bottom: 1em;
    top: auto;
  }
}
</style>
