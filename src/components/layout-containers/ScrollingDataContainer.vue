<template>
    <div class="overflow-scroll-container block-container-row col-12 col-md-7 justify-content-start" component_classes="align-content-center">
      <div class="data-content-wrapper">
        <slot></slot>
      </div>
    </div>
</template>

<script>

export default {
  name: "Scrolling Data Container",
   props: {
    component_classes: {
      type: String,
    }
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 769px) {
  .block-container-row {
    align-items: flex-end;
    height: 100vh;
    &.align-content-center {
      align-items: center;
    }
  }
}
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
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

.overflow-scroll-container {
  overflow-y: hidden;

  @media screen and (min-width: 769px) {
    padding-top: 12vh;
    overflow-y: scroll;
  }
}
</style>
