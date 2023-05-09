<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog_list">
      <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @sendArticle="showChildArticle" />
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue";
import { products } from "./../products";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CatalogList",
  data() {
    return { products };
  },
  props: {},

  components: { CatalogItem },

  created() {},

  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },

  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API"]),
    showChildArticle(data) {
      console.log("hello", data);
    },
  },

  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  watch: {},

  directives: {},

  filters: {},
};
</script>

<style scoped lang="scss">
.catalog {
  &_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
