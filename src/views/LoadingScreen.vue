<template>
  <transition name="loading-screen-fade">
    <div class="homepage-wrapper align-items-center justify-content-center">
      <img :src="require(`@/assets/once_guitar.jpg`)" alt="" />
      <ClockLoading component_classes="color-scheme-light" />
    </div>
  </transition>
</template>
<script>
/* eslint-disable */
import ClockLoading from "@/components/loading/ClockLoading.vue";

export default {
  name: "LoadingScreen",
  components: {
    ClockLoading
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.loading-screen-fade-enter-active,
.loading-screen-fade-leave-active {
  transition: opacity 0.5s;
}
.loading-screen-fade-enter, .loading-screen-fade-leave-to /* .loading-screen-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.homepage-wrapper {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:after {
    background-color: rgba(21, 20, 20, 0.69) !important;
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}

.homepage-wrapper img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.35s ease-in-out;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  z-index: -1;
}
</style>
