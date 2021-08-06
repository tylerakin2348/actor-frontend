<template>
  <fragment>
    <div
      v-if="!content_is_loading"
      class="overflow-scroll-container block-container-row col-12 col-md-7 justify-content-start"
      :class="component_classes"
    >
      <div class="data-content-wrapper">
        <slot></slot>
      </div>
    </div>
    <centered-management-navigation v-else>
      <ClockLoading component_classes="color-scheme-dark small-clock" />
    </centered-management-navigation>
  </fragment>
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
