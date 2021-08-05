<template>
  <div
    class="centered-management-navigation block-container-row col-12 col-md-7 justify-content-center"
    :class="component_classes"
  >
    <div class="centered-management-navigation--inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CenteredManagementNavigation",
  props: {
    component_classes: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.data-content-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }
}

.block-container-row {
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
}

@media screen and (min-width: 769px) {
  .block-container-row {
    height: 100vh;
    &.align-content-center {
      align-items: center;
    }
  }
}

.centered-management-navigation--inner {
  display: flex;
  flex-direction: column;
}
</style>
