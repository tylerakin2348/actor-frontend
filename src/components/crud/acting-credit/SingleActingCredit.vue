<template>
  <div id="contacts" class="single_acting_credit">
    <div class="flex items-center justify-between flex-wrap">
      <div class="single-acting-credit-wrapper flex-1 flex justify-between flex-wrap">
        <article class="block font-mono font-semibold flex items-center">
          {{acting_credit}}
          <h1>{{ acting_credit.show_title }}</h1>
          <div class="credit-row">
            <b class="credit-row-title">Role</b>
            {{ acting_credit.show_role }}
          </div>
          <div class="credit-row">
            <b class="credit-row-title">Director:</b>
            {{ acting_credit.show_director_name }}
          </div>
          <div class="credit-row">
            <b class="credit-row-title">Company:</b>
            {{ acting_credit.show_company_name }}
          </div>
        </article>
      </div>
      <div v-if="can_edit" class="single-acting-crud-options">
        <button
          class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-2 mr-2 rounded"
          @click.prevent="editRecord(acting_credit)"
          data-target="#update-acting-credit-modal"
          data-toggle="modal"
        >
          Edit
        </button>

        <button
          class="bg-transparent text-sm hover:bg-red text-red hover:text-white no-underline font-bold py-2 px-2 rounded border border-red"
          @click.prevent="removeRecord(acting_credit)"
          data-target="#remove-acting-credit-modal"
          data-toggle="modal"
        >
          Delete
        </button>
      </div>
    </div>
    <div v-if="actingCreditCurrentlyBeingEdited">
      <UpdateActingCredit
        :record_to_update="actingCreditCurrentlyBeingEdited"
        modal_id="update-acting-credit-modal"
      />
    </div>

    <div v-if="stagedForDeletion">
      <RemoveActingCredit
        :acting_credit="stagedForDeletion"
        modal_id="remove-acting-credit-modal"
      />
    </div>
  </div>
</template>

<script>
import UpdateActingCredit from "@/components/crud/acting-credit/UpdateActingCredit.vue";
import RemoveActingCredit from "@/components/crud/acting-credit/RemoveActingCredit.vue";

export default {
  props: {
    acting_credit: Object,
    actingCreditCurrentlyBeingEdited: {
      default: null,
      type: Object
    },
    stagedForDeletion: Object,
    can_edit: {
      default: true,
      type: Boolean
    }
  },
  components: {
    UpdateActingCredit,
    RemoveActingCredit
  },
  data() {
    return {
      newRecord: []
    };
  },
  mounted() {},
  updated() {},

  methods: {
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    },

    removeRecord(record) {
      this.$emit("stage-record-for-deletion", record);
    },
    editRecord(record) {
      this.$emit("set-record-being-edited", record);
    }
  }
};
</script>

<style lang="scss" scoped>
.single-acting-crud-options {
  width: 15em;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 769px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
}

.credit-row {
  display: flex;
  flex-direction: column;
}
.single_acting_credit {
  list-style: none;
  padding: 1em 0;

  &:last-of-type {
    border-bottom: 0;
  }
}

.single-acting-credit-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
article {
  margin-bottom: 1rem;
  width: 15em;
  @media screen and (min-width: 769px) {
    text-align: left;
  }
}

.credit-row-title {
  color: gray;
  font-size: 0.85em;
  text-transform: uppercase;
  margin-top: 0.5em;
}
</style>
