<template>
  <div class="block-container d-flex flex-wrap align-items-end">
    <div class="block-container-row large-breakup-border col-12 col-md-5 p-0">
      <PageTitleBlock page_title="Add New Acting Credit" classes="h1" />
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

    <div class="overflow-scroll-container block-container-row col-12 col-md-7">
      <div class="text-red" v-if="error">{{ error }}</div>
      <CreateActingCredit />
    </div>
  </div>
</template>

<script>
import PageTitleBlock from "@/components/common/PageTitleBlock.vue";
import CreateActingCredit from "@/components/crud/acting-credit/CreateActingCredit.vue";
import GoBackLink from "@/components/common/go-back/GoBackLink.vue";
import GoBackLinkListItem from "@/components/common/go-back/GoBackLinkListItem.vue";
import GoBackNavigationList from "@/components/common/go-back/GoBackNavigationList.vue";

export default {
  name: "AdminActingCreditNew",
  components: {
    PageTitleBlock,
    CreateActingCredit,
    GoBackLink,
    GoBackLinkListItem,
    GoBackNavigationList
  },
  data() {
    return {
      artists: [],
      acting_credits: [],
      newRecord: [],
      error: "",
      actingCreditCurrentlyBeingEdited: "",
      addNewActingCredit: false
    };
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace("/");
    }
  },
  methods: {
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    },
    addRecord() {
      const value = this.newRecord;
      if (!value) {
        return;
      }
      this.$http.secured
        .post(`${this.$properApiURL}/api/v1/acting-credits`, {
          show_title: this.newRecord.show_title,
          show_role: this.newRecord.show_role,
          show_director_name: this.newRecord.show_director_name,
          show_company_name: this.newRecord.show_company_name
        })

        .then(response => {
          this.acting_credits.push(response.data);
          this.newRecord = "";
        })
        .catch(error => this.setError(error, "Cannot create record"));
    }
  }
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
  align-items: center;
  justify-content: center;
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

.outline-fixed-width-style {
  border-radius: 0;
  width: 15em;
}
</style>
