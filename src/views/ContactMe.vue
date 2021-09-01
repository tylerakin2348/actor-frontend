<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="Contact Me" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </bordered-left-title-column>
    <centered-management-navigation>
      <h2>Contact Me</h2>
      <div class="contact-row">
        <b class="contact-row-title">tel:</b>
        <a href="tel:502-645-9250">(502) 645-9250</a>
      </div>
      <div class="contact-row">
        <b class="contact-row-title">email:</b>
        <a href="mail:tylerakinmwc@gmail.com">tylerakinmwc@gmail.com</a>
      </div>
      <a class="tylerakin_dot_com_link" href="http://tylerakin.com/">
        a tylerakin.com site
      </a>
      <span class="copyright_signal"> All rights reserved {{ theCurrentDate }}</span>
    </centered-management-navigation>
  </bordered-left-title-style-container>
</template>
<script>
/* eslint-disable */
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";
import ScrollingDataContainer from "@/components/layout-containers/ScrollingDataContainer.vue";
import BorderedLeftTitleColumn from "@/components/layout-containers/BorderedLeftTitleColumn.vue";
import BorderedLeftTitleStyleContainer from "@/components/layout-containers/BorderedLeftTitleStyleContainer.vue";
import CenteredManagementNavigation from "@/components/layout-containers/CenteredManagementNavigation.vue";

export default {
  name: "ContactMe",
  components: {
    PageTitleBlock,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    ScrollingDataContainer,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer,
    CenteredManagementNavigation
  },
  data() {
    return {
      theCurrentDate: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss" scoped>
.contact-row {
  display: flex;
  flex-direction: column;
  font-size: 0.75em;

  a {
    color: #000;
    text-decoration: underline;

    &:focus,
    &:hover {
      text-decoration: none;
    }
  }
}
.contact-row-title {
  color: gray;
  text-transform: uppercase;
  margin-top: 0.5em;
}

.copyright_signal {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1em;
  @media screen and (min-width: 769px) {
    position: absolute;
    bottom: 0%;
    right: 0;
  }
}
.tylerakin_dot_com_link {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1em;

  @media screen and (min-width: 769px) {
    position: absolute;
    bottom: 0%;
    left: 0;
  }
}
</style>
