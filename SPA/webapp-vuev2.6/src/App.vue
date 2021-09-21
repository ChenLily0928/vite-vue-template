<template>
  <div id="app" class="container-fluid d-flex justify-content-center">
    <div class="container row p-3 container-bd">
      <div class="col-md-12">
        <img src="./assets/logo.png" style="width: 50px;" />
        <h4>{{ title }}</h4>
      </div>
      <div class="col-md-12 d-flex align-items-start">
        <router-view class="view one" />
      </div>
      <router-view name="dialog" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "SPA (Single Page Application) website practice with Vue.js App"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container-bd {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
</style>
