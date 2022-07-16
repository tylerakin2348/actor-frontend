<template>
  <main class="main-content col-12 col-md-7 pr-0 justify-content-start align-content-center">
    <div
      v-if="!content_is_loading"
      class="overflow-scroll-container block-container-row justify-content-start"
      :class="component_classes"
    >
      <div class="data-content-wrapper">
        <slot></slot>
      </div>
    </div>
    <centered-management-navigation v-else>
      <ClockLoading component_classes="color-scheme-dark small-clock" />
    </centered-management-navigation>
  </main>
</template>

<script>
import CenteredManagementNavigation from "@/components/layout-containers/CenteredManagementNavigation.vue";
import ClockLoading from "@/components/loading/ClockLoading.vue";

export default {
  name: "ScrollingDataContainer",
  props: {
    component_classes: {
      type: String
    }
  },
  components: {
    CenteredManagementNavigation,
    ClockLoading
  },
  computed: {
    content_is_loading: function() {
      return this.$store.getters.contentIsLoading;
    }
  }
};
</script>

<style lang="scss" scoped>
.data-content-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }
}

.block-container-row {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.overflow-scroll-container {
  overflow-y: hidden;

  @media screen and (min-width: 769px) {
    padding-top: 12vh;
    overflow-y: scroll;
  }
}
@media screen and (min-width: 769px) {
  .block-container-row {
    align-items: flex-start;
    height: 100vh;
    &.align-content-center {
      align-items: center;
    }
  }
}
</style>
