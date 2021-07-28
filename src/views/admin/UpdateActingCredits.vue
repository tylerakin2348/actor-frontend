<template>
  <div class="block-container d-flex flex-wrap align-items-end">
    <div class="block-container-row large-breakup-border col-12 col-md-5 p-0">
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
    </div>

    <div
      class="overflow-scroll-container block-container-row col-12 col-md-7 align-items-end justify-content-start"
    >
      <div class="text-red" v-if="error">{{ error }}</div>

      <div class="acting-credit-wrapper col-12">
        <SingleActingCredit
          v-for="acting_credit in acting_credits"
          :key="acting_credit.id"
          :actingCreditCurrentlyBeingEdited="actingCreditCurrentlyBeingEdited"
          :acting_credit="acting_credit"
          :can_edit="true"
          :stagedForDeletion="stagedForDeletion"
          v-on:set-record-being-edited="setRecordBeingEdited"
          v-on:stage-record-for-deletion="stageRecordForDeletion"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import SingleActingCredit from "@/components/crud/acting-credit/SingleActingCredit.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";

export default {
  name: "AdminActingCreditNew",
  components: {
    PageTitleBlock,
    SingleActingCredit,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList,
  },
  data() {
    return {
      // acting_credits: [],
      newRecord: [],
      error: "",
      actingCreditCurrentlyBeingEdited: null,
      stagedForDeletion: null,
      addNewActingCredit: false,
    };
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace("/");
    } else {
      this.getCurrentActingCredits();
      // this.$http.secured
      //   .get(`${this.$properApiURL}/api/v1/acting-credits`)
      //   .then((response) => {
      //     this.$store.commit('')
      //     this.acting_credits = response.data;
      //   })
      //   .catch((error) => this.setError(error, "Something went wrong"));
    }
  },
  computed: {
    acting_credits: function() {
      return this.$store.state.acting_credits
    }
  },
  methods: {
    getCurrentActingCredits: function() {
        this.$http.secured
        .get(`${this.$properApiURL}/api/v1/acting-credits`)
        .then((response) => {
          this.$store.commit('get_acting_credits', response.data)
        })
    },
    setRecordBeingEdited: function (record) {
      this.actingCreditCurrentlyBeingEdited = record;
    },
    stageRecordForDeletion: function (record) {
      this.stagedForDeletion = record;
    },
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  overflow-y: scroll;
}
.acting-credit-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }
  .single_acting_credit {
    // @media screen and (min-width: 769px) {
    //   width: 50%;
    // }
    @media screen and (min-width: 992px) {
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
  position: relative;

  @media screen and (min-width: 769px) {
    padding-top: 12vh;
    overflow-y: scroll;
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
