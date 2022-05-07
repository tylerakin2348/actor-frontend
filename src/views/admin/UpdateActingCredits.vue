<template>
  <bordered-left-title-style-container>
    <bordered-left-title-column>
      <PageTitleBlock page_title="Update Acting Credits" classes="h1" />
      <GoBackNavigationList>
        <GoBackLinkListItem>
          <GoBackLink
            url="/admin/manage-acting-credits"
            link_text="Back to Manage Acting Credits"
          />
        </GoBackLinkListItem>
        <GoBackLinkListItem>
          <GoBackLink url="/admin" link_text="Back to Dashboard" />
        </GoBackLinkListItem>
        <GoBackLinkListItem>
          <GoBackLink url="/" link_text="Back to Home" />
        </GoBackLinkListItem>
      </GoBackNavigationList>
    </bordered-left-title-column>

    <scrolling-data-container>
      <div class="text-red" v-if="error">{{ error }}</div>
      <single-db-entry-container v-for="acting_credit in acting_credits" :key="acting_credit.id">
        <SingleActingCredit
          :actingCreditCurrentlyBeingEdited="actingCreditCurrentlyBeingEdited"
          :acting_credit="acting_credit"
          :can_edit="true"
          :stagedForDeletion="stagedForDeletion"
          @set-record-being-edited="setRecordBeingEdited"
          @stage-record-for-deletion="stageRecordForDeletion"
        />
      </single-db-entry-container>
    </scrolling-data-container>
  </bordered-left-title-style-container>
</template>

<script>
import _orderBy from "lodash/orderBy";

import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import SingleActingCredit from "@/components/crud/acting-credit/SingleActingCredit.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";
import ScrollingDataContainer from "@/components/layout-containers/ScrollingDataContainer.vue";
import BorderedLeftTitleColumn from "@/components/layout-containers/BorderedLeftTitleColumn.vue";
import BorderedLeftTitleStyleContainer from "@/components/layout-containers/BorderedLeftTitleStyleContainer.vue";
import SingleDbEntryContainer from "@/components/layout-containers/SingleDbEntryContainer.vue";

export default {
  name: "AdminActingCreditNew",
  components: {
    PageTitleBlock,
    SingleActingCredit,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
    ScrollingDataContainer,
    BorderedLeftTitleColumn,
    BorderedLeftTitleStyleContainer,
    SingleDbEntryContainer
  },
  data() {
    return {
      newRecord: [],
      error: "",
      actingCreditCurrentlyBeingEdited: null,
      stagedForDeletion: null,
      addNewActingCredit: false
    };
  },
  created() {
    this.getCurrentActingCredits();
  },
  computed: {
    acting_credits: function() {
      return _orderBy(this.$store.state.acting_credits, ["_id"], ["desc"]);
    }
  },
  methods: {
    getCurrentActingCredits: function() {
      this.$http.secured.get(`${this.$properApiURL}/api/v1/acting-credits`).then(response => {
        this.$store.commit("get_acting_credits", response.data);
      });
    },
    setRecordBeingEdited: function(record) {
      this.actingCreditCurrentlyBeingEdited = record;
    },
    stageRecordForDeletion: function(record) {
      this.stagedForDeletion = record;
    },
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    }
  }
};
</script>

<style lang="scss" scoped></style>
