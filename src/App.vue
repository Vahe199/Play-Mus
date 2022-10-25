<template>
  <div id="app">

    <header>
      <h1>My Music</h1>
      <div>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/play" class="link">Music</router-link>
      </div>
    </header>
    <main>
      <router-view/>
      <img alt="Vue logo" src="./assets/logo.png">

<!--      <SVGBtn msg="Welcome to Your Vue.js App"/>-->
<!--      <PlayList/>-->
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #212121;
  color: #FFF;
}
main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 25px;
}
.link{
  color: #FFFFFF;
  margin: 0 10px;
  text-decoration: none;
}
.link:hover{
  opacity: 0.8;
}
</style>
