<template>
  <div class="flex-fill d-flex">
    <div>
      <button
        type="button"
        class="btn btn-dark"
        v-on:click="addFormElement('text')"
      >
        Add User
      </button>
    </div>
    <div class="table-responsive"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  data: {
    fields: []
  },
  methods: {
    addFormElement: function(type) {
      this.fields.push({
        type: type,
        placeholder: "Textbox"
      });
    },
    deleteUser: function(index) {
      this.inputs.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
