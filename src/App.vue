<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">日历 & 时钟</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
body{
  margin: 0 8px;
  height: 100vh;
}
#app {
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  font-size: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
