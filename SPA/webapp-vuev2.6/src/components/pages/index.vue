<template>
  <div class="flex-fill py-2 text-left">
    <div class="table-responsive">
      <table id="tb-result" class="table table-bordered">
        <tbody></tbody>
      </table>
    </div>
    <button
      type="button"
      id="add-user"
      class="btn btn-dark"
      data-toggle="modal"
      @click="showModal"
    >
      <span>Add</span>
    </button>
    <button
      type="button"
      id="csv-Export"
      class="btn btn-primary"
      data-toggle="modal"
      @click="csvExport"
    >
      <span>Export to CSV</span>
    </button>
  </div>
</template>

<script>
import modal from "@/components/pages/modal";
export default {
  name: "index",
  components: { modal },
  data() {
    return {
      cavdata: [],
      items: []
    };
  },
  methods: {
    showModal: function() {
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      $("#myModal").modal("show");
    },
    csvExport: function() {
      let table = document
        .getElementById("tb-result")
        .getElementsByTagName("tbody")[0];

      this.cavdata = [];
      for (var i = 0, row; (row = table.rows[i]); i++) {
        let col = row.cells[0];
        let name = $(col).data("name");
        let age = $(col).data("age");
        this.cavdata.push({ name: name, age: age });
      }
      const csv = convertToCSV(JSON.stringify(this.cavdata));
      const link = document.createElement("a");
      link.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
      link.target = "_blank";
      link.download = "users.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

function convertToCSV(obj) {
  const array = typeof obj !== "object" ? JSON.parse(obj) : obj;

  let str = "Name,Age" + "\r\n";
  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (const index in array[i]) {
      if (line !== "") line += ",";
      line += array[i][index];
    }
    str += line + "\r\n";
  }
  return str;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
