<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            is_loading: false,
        };
    },

    computed: {
        hideIfLoading() {
            return this.is_loading ? 'hide-router-views' : '';
        },
    },

    methods: {
        setUpLoadingEffectTimer() {
            setTimeout(() => {
                this.is_loading = false;
            }, 5000);
        },
        setError(error, text) {
            this.error =
                (error.response &&
                    error.response.data &&
                    error.response.data.error) ||
                text;
        },
    },
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

.hide-router-views {
    display: inline-block;
    opacity: 0;
}
</style>
