<template>
  <div id="app">
    <div style="display: flex; flex-direction: row">
      <MenuView />
      <div style="flex: 1">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import MenuView from "@/components/MenuView.vue";
export default {
  name: "App",
  components: {
    MenuView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px 200px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
