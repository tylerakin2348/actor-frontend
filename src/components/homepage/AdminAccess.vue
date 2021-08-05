<template>
  <absolutely-positioned-container component_classes="bottom right">
    <router-link class="admin_dashboard_link" :to="{ path: admin_dashboard_url }">
      {{ current_user }} - Admin Dashboard
    </router-link>
  </absolutely-positioned-container>
</template>

<script>
import AbsolutelyPositionedContainer from "@/components/layout-containers/AbsolutelyPositionedContainer.vue";

export default {
  name: "AdminDashboardLink",
  components: {
    AbsolutelyPositionedContainer
  },

  data() {
    return {
      admin_dashboard_url: "/admin"
    };
  },
  computed: {
    current_user: function() {
      return this.$store.getters.currentUser;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.admin_dashboard_link {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1em;
}
</style>
