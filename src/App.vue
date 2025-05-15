<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link to="/contact">联系我们</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  padding: 20px;
}

nav {
  padding-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

nav a.router-link-active {
  color: #42b983;
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
