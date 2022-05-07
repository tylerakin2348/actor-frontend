<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="About Tyler" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </bordered-left-title-column>

    <scrolling-data-container>
      <div class="about-page-wrapper col-12">
        <div class="headshot">
          <img :src="require(`@/assets/tyler_a.jpg`)" alt="Tyler Akin headshot" />
        </div>
        <p>
          Based in Louisville Kentucky, Tyler Akin is an actor currently collaborating with a number
          of local, community theatre companies. He has most recently been seen in Big Fish
          (TheatreWorks), Guys and Dolls (METC), Joseph (CenterStage), and Next To Normal (CAMT). He
          is slated to portray Guy in the musical ONCE this summer and looks forward to working with
          the cast and crew of
          <a href="https://www.timesliptheatre.org/" target="_blank">Time Slip Theatre</a>.
        </p>
        <p>
          He holds a Bachelors of Science in Music and Worship, with a Vocal Studies concentration.
          Post-undergraduate work, he has continued vocal training and currently works with Anna
          O'Byrne— the actress who originated the role of Christine in the Australian production of
          Love Never Dies.
        </p>
        <p>
          Outside of acting, Tyler works as a software engineer, drinking an unhealthy amount of
          coffee to get him through it. He builds websites like the one holding the words you are
          reading.
        </p>
      </div>
    </scrolling-data-container>
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

export default {
  name: "AboutPage",
  components: {
    PageTitleBlock,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    ScrollingDataContainer,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer
  }
};
</script>

<style lang="scss" scoped>
.no-list-style {
  list-style: none;
}
.headshot {
  width: 100%;
  max-width: 20em;
  margin: auto;
  margin-bottom: 1em;
  border: 2px solid white;
  box-shadow: 0 0 7px;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
.about-page-wrapper {
  padding-top: 1em;
  text-align: left;
  margin: auto;
  max-width: 40em;
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
