<template>
  <div id="app">
    <LoadingScreen v-if="is_loading" />
    <router-view v-if="!is_loading" />
  </div>
</template>

<script>
import LoadingScreen from "@/views/LoadingScreen.vue";
export default {
  components: {
    LoadingScreen
  },
  data: () => {
    return {
      is_loading: false
    };
  },

  mounted() {
    if (window.history.length < 3) {
      this.is_loading = true;
      this.setUpLoadingEffectTimer();
    } else {
      this.is_loading = false;
    }
  },

  methods: {
    setUpLoadingEffectTimer() {
      setTimeout(() => {
        this.is_loading = false;
      }, 5000);
    },
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    }
  }
};
</script>
<style lang="scss" scoped>
body {
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  // overflow: hidden;
}

// fix for style overlapping. Serves as a wrapper on pages requiring mobile scrolling.
#do-not-scroll-on-mobile {
  // @media screen and (max-width: 768px) {
  // overflow-y: hidden !important;
  height: 100vh;
  // }
}
</style>
