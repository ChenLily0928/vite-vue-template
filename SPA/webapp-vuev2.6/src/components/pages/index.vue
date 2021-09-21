<template>
  <div class="flex-fill py-2 text-left">
    <button
      type="button"
      id="add-user"
      class="btn btn-dark"
      data-toggle="modal"
      data-target="#myModal"
    >
      <span>Add User</span>
    </button>
    <div class="table-responsive"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return { showModal: false };
  },
  methods: {
    addUser: function() {
      console.log($(".modal"));
      $("#myModal").modal({
        backdrop: "static",
        keyboard: false
      });
      $("#myModal").modal("show");
    },
    deleteUser: function(index) {
      this.inputs.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
