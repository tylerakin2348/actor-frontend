<template>
  <form action="" @submit.prevent="addRecord(acting_credit)">
    <div class="mb-6 p-4 bg-white rounded border border-grey-light mt-4">
      {{ error }}
      <div class="mb-6 credit-row">
        <label for="show_title" class="label credit-row-title">Show Title</label>
        <input
          id="show_title"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Type a record name"
          v-model="newRecord.show_title"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="show_role" class="label credit-row-title">Show Role</label>
        <input
          id="show_role"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Year"
          v-model="newRecord.show_role"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="show_director_name" class="label credit-row-title">Director Name</label>
        <input
          id="show_director_name"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Year"
          v-model="newRecord.show_director_name"
        />
      </div>

      <div class="mb-6 credit-row">
        <label for="show_company_name" class="label credit-row-title">Company Name</label>
        <input
          id="show_company_name"
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Year"
          v-model="newRecord.show_company_name"
        />
      </div>

      <input
        type="submit"
        value="Create"
        class="bg-transparent text-sm hover:bg-blue hover:text-white text-blue border border-blue no-underline font-bold py-2 px-4 mr-2 rounded"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "CreateActingCredit",
  props: ["acting_credit"],
  data() {
    return {
      artists: [],
      acting_credits: [],
      newRecord: [],
      error: "",
      actingCreditCurrentlyBeingEdited: ""
    };
  },
  mounted() {},

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
        .post(`${this.$properApiURL}/api/v1/acting-credits/`, {
          show_title: this.newRecord.show_title,
          show_role: this.newRecord.show_role,
          show_director_name: this.newRecord.show_director_name,
          show_company_name: this.newRecord.show_company_name
        })

        .then(response => {
          this.acting_credits.push(response.data);
          this.newRecord = "";
          location.replace("/admin/manage-acting-credits/update");
        })
        .catch(error => this.setError(error, "Cannot create acting record"));
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  max-width: 30em;
}
.credit-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.credit-row-title {
  color: gray;
  font-size: 0.85em;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-top: 0.5em;
  text-align: left;
}
</style>
