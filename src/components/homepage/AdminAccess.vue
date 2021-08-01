<template>
  <router-link class="admin_dashboard_link" :to="{ path: admin_dashboard_url }">
    {{current_user}} - Admin Dashboard
  </router-link>
</template>

<script>
export default {
  name: "Subject Block",
  props: [],

  data() {
    return {
      admin_dashboard_url: "/admin",
      // msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    current_user: function() {
      return this.$store.getters.currentUser
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.admin_dashboard_link {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  position: absolute;
  right: 0%;
  padding: 1em;
  bottom: 0;
}
</style>
