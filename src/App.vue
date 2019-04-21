<template>
  <div id="app">
    <sidebar/>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css?family=Raleway:200,400,500,600|Space+Mono');
  font-family: 'Raleway', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display:flex;
  width:100%;
  align-items:stretch;
}
</style>
