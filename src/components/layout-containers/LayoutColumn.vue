<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LayoutColumn",
  props: ["classes"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.layout_row {
  // display: flex;
  // align-items: flex-end;
  // height: 97%;
  // width: 48%;
  // text-decoration: none;
  // padding: 1em;
}

.align-content-center {
  align-content: center;
}
</style>
