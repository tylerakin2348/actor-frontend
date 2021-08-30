<template>
  <fragment>
    <LoadingScreen v-if="is_loading" />

    <div id="do-not-scroll-on-mobile" v-if="!is_loading">
      <div :class="current_chat_status ? 'homepage-wrapper active-chat' : 'homepage-wrapper'">
        <img :src="require(`@/assets/next-to-normal/next_to_normal18.jpg`)" />
        <layout-row
          class="
                        calculated-subject-row-height
                        justify-content-between
                    "
        >
          <SubjectBlockClear
            link_url="upcoming-events"
            link_image_src="assets/next-to-normal/next_to_normal12.jpg"
            link_text_line_1="Upcoming"
            link_text_line_2="Events"
            classes="top-left h-100"
          />
          <SubjectBlockClear
            link_url="about"
            link_image_src="assets/next-to-normal/next_to_normal4.jpg"
            link_text_line_1="About"
            link_text_line_2="Me"
            classes="top-right h-100"
          />
        </layout-row>
        <layout-row class="middle-row">
          <layout-column
            class="
                            d-flex
                            align-items-center
                            justify-content-center
                            flex-column
                            col-12
                        "
            v-if="current_chat_status"
          >
            <div
              class="
                                d-flex
                                align-items-center
                                justify-content-center
                                flex-column
                                col-12
                            "
            >
              <span class="h2">Tyler Akin</span>
              <router-link
                class="
                                bg-transparent
                                text-sm
                                hover:bg-blue
                                hover:text-white
                                text-blue
                                border border-blue
                                no-underline
                                font-bold
                                py-2
                                px-4
                                rounded
                            "
                :to="{ path: '/live-chat' }"
              >
                Live Updates
              </router-link>
            </div>
          </layout-column>
          <layout-column
            class="
                            d-flex
                            align-items-center
                            justify-content-center
                            flex-column
                            col-12
                        "
            v-else
          >
            <span class="h5">Actor</span>
            <span class="h2">Tyler Akin</span>
            <span class="h5">Tenor</span>
          </layout-column>
        </layout-row>
        <layout-row
          class="
                        calculated-subject-row-height
                        justify-content-between
                    "
        >
          <SubjectBlockClear
            link_url="previous-roles"
            link_image_src="assets/next-to-normal/next_to_normal18.jpg"
            link_text_line_1="Previous"
            link_text_line_2="Roles"
            classes="bottom-left h-100"
          />
          <SubjectBlockClear
            link_url="contact-me"
            link_image_src="assets/next-to-normal/next_to_normal16.jpg"
            link_text_line_1="Contact"
            link_text_line_2="Me"
            classes="bottom-right h-100"
          />
        </layout-row>
        <AdminAccess v-if="is_logged_in" />
      </div>
    </div>
  </fragment>
</template>
<script>
/* eslint-disable */
import SubjectBlockClear from "@/components/homepage/SubjectBlockClear.vue";
import LayoutRow from "@/components/layout-containers/LayoutRow.vue";
import LayoutColumn from "@/components/layout-containers/LayoutColumn.vue";
import AdminAccess from "@/components/homepage/AdminAccess";
import LiveChatMessage from "@/components/crud/live/LiveChatMessage.vue";
import IntervalLifecycle from "@/components/interval-lifecycle.js";
import checkForAvailableData from "../helpers/checkForAvailableData";
import LoadingScreen from "@/views/LoadingScreen.vue";

export default {
  name: "Home",
  components: {
    SubjectBlockClear,
    LayoutRow,
    LayoutColumn,
    AdminAccess,
    LiveChatMessage,
    LoadingScreen
  },
  data() {
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
    let setUpLiveChatScripts = new IntervalLifecycle(this.checkForNewMessage);
    this.checkForNewMessage();

    setUpLiveChatScripts.setUpNewMessageListener();
  },
  unmounted() {
    setUpLiveChatScripts.tearDownNewMessageListener();
  },
  computed: {
    current_chat_status: function() {
      return this.$store.getters.currentChatStatus;
    },
    is_logged_in: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    setUpLoadingEffectTimer() {
      setTimeout(() => {
        this.is_loading = false;
      }, 5000);
    },
    checkForNewMessage: function() {
      this.$http.secured.get(`${this.$availableEndpoints.live_chat}`).then(response => {
        checkForAvailableData(this, response, "updateChatStatus");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  overflow: hidden;
}

.middle-row {
  overflow: hidden;
}

.homepage-wrapper {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:after {
    background-color: rgba(250, 250, 250, 0.9);
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
  opacity: 0.4;
  z-index: -1;
}

.h-relative-6 {
  height: 6em;
}

.calculated-subject-row-height {
  height: calc(50% - 3em);
  width: 100%;
}
#do-not-scroll-on-mobile {
  height: 100%;
}
</style>
