<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="Previous Roles" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </bordered-left-title-column>
    <scrolling-data-container>
      <!-- <div class="acting-credit-wrapper col-12"> -->
        <ClockLoading color_scheme="color-scheme-dark" v-if="is_loading" />
        <SingleActingCredit
          v-else
          v-for="acting_credit in acting_credits"
          :key="acting_credit.id"
          :acting_credit="acting_credit"
          :can_edit="false"
        />
      <!-- </div> -->
    </scrolling-data-container>
  </bordered-left-title-style-container>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import SingleActingCredit from "@/components/crud/acting-credit/SingleActingCredit.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";
import ClockLoading from "@/components/loading/ClockLoading.vue";
import ScrollingDataContainer from "@/components/layout-containers/ScrollingDataContainer.vue";
import BorderedLeftTitleColumn from "@/components/layout-containers/BorderedLeftTitleColumn.vue";
import BorderedLeftTitleStyleContainer from '../components/layout-containers/BorderedLeftTitleStyleContainer.vue';

export default {
  name: "Upcoming Events",
  components: {
    PageTitleBlock,
    SingleActingCredit,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    ClockLoading,
    ScrollingDataContainer,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer
  },
  data() {
    return {
      acting_credits: [],
      name: [],
      relationship: [],
      errors: [],
      is_loading: true,
    };
  },
  created() {
    axios
      .get(`${this.$properApiURL}/api/v1/acting-credits`)
      .then(response => {
        this.acting_credits = response.data;
        console.log(response);

        // setTimeout(() => {
          this.is_loading = false;
        // }, 13000);
      })
      .catch(e => {
        this.error.push(e);
      });
  }
};
</script>

<style lang="scss" scoped>
.acting-credit-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }
  .single-db-entry-container {
    @media screen and (min-width: 769px) {
      width: 50%;
    }
  }
}

@media screen and (min-width: 769px) {
  .block-container {
    height: 100vh;
  }
}

@media screen and (min-width: 769px) {
  .block-container {
    height: 100vh;
  }

}
</style>
