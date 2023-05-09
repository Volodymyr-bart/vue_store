<template>
  <div class="catalog_item">
    <img class="catalog_item_image" src="" alt="img" />
    <!-- <img
      class="catalog_item_image"
      :src="require('../assets/images/' + product_data.image)"
      alt="img" /> -->
    <p class="catalog_item_name">{{ product_data.name }}</p>
    <p class="catalog_item_price">Price: {{ product_data.price }}</p>
    <button
      class="catalog_item_btn"
      @click="sendDataToParent(product_data.article)">
      Add to card
    </button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  data() {
    return {};
  },
  props: {
    product_data: {
      type: Object,
      default: () => {},
    },
  },

  components: {},

  created() {},

  mounted() {},

  methods: {
    sendDataToParent() {
      this.$emit("sendArticle", this.product_data.article);
    },
  },

 

  watch: {},

  directives: {},

  filters: {},
};
</script>

<style scoped lang="scss">
.catalog_item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #2c3e50;
  padding: 20px;
  margin-bottom: 20px;
  &_image {
    width: 100px;
  }
}
</style>
