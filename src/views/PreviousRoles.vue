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
    <ClockLoading color_scheme="color-scheme-dark" v-if="is_loading" />
    <scrolling-data-container v-else>
      <single-db-entry-container v-for="acting_credit in acting_credits" :key="acting_credit.id">
        <SingleActingCredit :acting_credit="acting_credit" :can_edit="false" />
      </single-db-entry-container>
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
import BorderedLeftTitleStyleContainer from "@/components/layout-containers/BorderedLeftTitleStyleContainer.vue";
import SingleDbEntryContainer from "@/components/layout-containers/SingleDbEntryContainer.vue";

export default {
  name: "PreviousRoles",
  components: {
    PageTitleBlock,
    SingleActingCredit,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    ClockLoading,
    ScrollingDataContainer,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer,
    SingleDbEntryContainer
  },
  data() {
    return {
      acting_credits: [],
      name: [],
      relationship: [],
      errors: [],
      is_loading: true
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

<style lang="scss" scoped></style>
