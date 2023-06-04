<template>
  <MainWrapper>
    <CatalogList />
    <TrashList v-if="CART.length" />
  </MainWrapper>
</template>

<script>
import MainWrapper from "./components/MainWrapper.vue";
import CatalogList from "./components/CatalogList.vue";
import TrashList from "./components/TrashList.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { MainWrapper, CatalogList, TrashList },
  computed: {
    ...mapGetters(["CART"]),
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
  margin-top: 60px;
}
</style>
