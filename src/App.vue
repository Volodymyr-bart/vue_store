<template>
  <MainWrapper>
    <CatalogList />
  </MainWrapper>
</template>

<script>
import MainWrapper from "./components/MainWrapper.vue";
import CatalogList from "./components/CatalogList.vue";
export default {
  name: "App",
  components: { MainWrapper, CatalogList },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
