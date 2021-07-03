<template>
  <div class="block-container d-flex flex-wrap align-items-end">
    <div class="block-container-row large-breakup-border col-12 col-md-5 p-0">
      <PageTitleBlock page_title="About Tyler" classes="h1" />
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
        A recurring membcer of the CenterStage company. And a trained vocalist.
        Outside of theatre and music in general, Tyler is a software developer
        in Louisville, Kentuky. He builds websites like the one holding the
        words you are reading.
        <br />
        <br />
        Vocal Experience includes:
        <ul>
          <li>Private Voice - Anna O'Byrne</li>
          <li>Private Voice - Dr. Gregory Brewton</li>
        </ul>
      </div>
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
</style>
