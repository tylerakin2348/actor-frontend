<template>
  <div class="layout-row" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LayoutRow",
  props: ["classes"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.layout-row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
