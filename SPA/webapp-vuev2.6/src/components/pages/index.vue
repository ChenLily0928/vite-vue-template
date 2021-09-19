<template>
  <div>
    <p>{{ msg }}</p>
    <div class="d-flex justify-content-center">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <input type="button" value="Add" />
          <h5 class="card-title">這是卡片1</h5>
          <p class="card-text">這是卡片，裡面有很多東西</p>
          <a href="#" class="btn btn-primary">Press</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
