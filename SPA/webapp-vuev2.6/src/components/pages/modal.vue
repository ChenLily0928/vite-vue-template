<template>
  <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    role="dialog"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog text-left" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New User</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- for 和 id 值必須相同 -->
          <div class="form-group">
            <label for="name"><strong>UserName</strong></label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="name"
              autocomplete="off"
              @keyup="checkName"
            />
            <div class="mag pt-2"></div>
          </div>
          <div class="form-group">
            <label for="age"><strong>Age(Years)</strong></label>
            <input
              type="text"
              id="age"
              name="age"
              class="form-control"
              placeholder="age"
              autocomplete="off"
              @keyup="checkAge"
            />
            <div class="mag pt-2"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info mr-auto" @click="addUser">
            Add User
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return { chkInput: true, items: [] };
  },
  methods: {
    checkName: function(e) {
      let error = [];
      this.chkInput = true;
      let regex = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/g; //不可使用特殊符號
      const input = e.target.value;
      if (!regex.test(input) && input != "") {
        this.chkInput = false;
        error.push(
          '<div class="alert alert-danger py-2 mb-0"><strong>Error!</strong> please check input, do not use invalid character.</div>'
        );
      } else error = [];
      e.target.nextElementSibling.innerHTML = error;
    },
    checkAge: function(e) {
      let error = [];
      this.chkInput = true;
      let regex = /^(0?[1-9]|[1-9][0-9])[0-9]{0,1}$/g;
      const input = e.target.value;
      if (!regex.test(input) && input != "") {
        this.chkInput = false;
        error.push(
          '<div class="alert alert-danger py-2 mb-0"><strong>Error!</strong> please enter number.</div>'
        );
      } else error = [];
      e.target.nextElementSibling.innerHTML = error;
    },
    addUser: function() {
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      let table = document
        .getElementById("tb-result")
        .getElementsByTagName("tbody")[0];

      if (this.chkInput) {
        // Insert a row at the end of table
        let row = table.insertRow(table.rows.length);
        let html =
          "<tr><td data-name=" +
          name +
          " data-age=" +
          age +
          ">" +
          name +
          " ( " +
          age +
          " years old )" +
          "<button type='button' class='close' onclick='document.getElementById(\"tb-result\").deleteRow(this.parentNode.parentNode.rowIndex);'>&times;</button>" +
          "</td></tr>";
        row.innerHTML = html;

        this.$swal({
          icon: "success",
          type: "success",
          title: "Success",
          html: "新增成功",
          confirmButtonColor: "#3085d6",
          allowOutsideClick: false
        });
        $("#myModal").modal("hide");
      } else {
        this.$swal({
          icon: "error",
          type: "error",
          title: "Error",
          html: "格式輸入錯誤",
          confirmButtonColor: "#dc3545",
          allowOutsideClick: false
        });
        this.chkInput = true;
        $("#myModal").modal("show");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
