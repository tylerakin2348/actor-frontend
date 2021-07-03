<template>
  <div class="block-container d-flex flex-wrap align-items-end">
    <div class="block-container-row large-breakup-border col-12 col-md-5 p-0">
      <PageTitleBlock page_title="Contact Me" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </div>
    <div
      class="overflow-scroll-container block-container-row col-12 col-md-7 align-items-end justify-content-start"
    >
      <div class="about-page-wrapper col-12 h2">
        Contact Me
        <div class="contact-row">
          <b class="contact-row-title">tel:</b>
          <a href="tel:502-645-9250">(502) 645-9250</a>
        </div>
        <div class="contact-row">
          <b class="contact-row-title">email:</b>
          <a href="mail:tylerakinmwc@gmail.com">tylerakinmwc@gmail.com</a>
        </div>
      </div>
      <a class="tylerakin_dot_com_link" href="https://tylerakin.com/">
        a tylerakin.com site
      </a>
      <span class="copyright_signal">
        All rights reserved {{ theCurrentDate }}</span
      >
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";

export default {
  name: "Page Title Block",
  components: {
    PageTitleBlock,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
  },
  data() {
    return {
      theCurrentDate: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.about-page-wrapper {
  padding-top: 1em;
  text-align: left;

  .single_acting_credit {
    @media screen and (min-width: 769px) {
      width: 50%;
    }
  }
}
.large-breakup-border {
  padding: 0;
}

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
.large-breakup-border:after {
  background-color: rgba(200, 139, 139, 1);
  content: "";
  display: inline-block;
  height: 0.75em;
  width: 100%;

  @media screen and (min-width: 769px) {
    height: 85%;
    width: 1.5em;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

@media screen and (min-width: 769px) {
  .block-container {
    height: 100vh;
  }
}

.block-container-row {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
}

@media screen and (min-width: 769px) {
  .block-container {
    height: 100vh;
  }

  .block-container-row {
    align-items: center;
  }
}

.overflow-scroll-container {
  overflow-y: hidden;

  @media screen and (min-width: 769px) {
    padding-top: 12vh;
  }
}

.block-container-row-center {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2em;
  height: 4%;

  span {
    font-size: 0.5em;
  }
}

.copyright_signal {
  // border-top-right-radius: 1em;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  position: absolute;
  bottom: 0%;
  right: 0%;
  padding: 1em;
}
.tylerakin_dot_com_link {
  // border-top-left-radius: 1em;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  position: absolute;
  bottom: 0%;
  left: 0;
  padding: 1em;
  &:focus,
  &:hover {
  }
}
</style>
