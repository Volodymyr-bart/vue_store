<template>
  <div class="trash_item">
    <img class="trash_item_image" src="" alt="img" />
    <!-- <img
      class="catalog_item_image"
      :src="require('../assets/images/' + product_data.image)"
      alt="img" /> -->
    <div class="trash_item_info">
      <p class="trash_item_name">{{ card_item_data.name }}</p>
      <p class="trash_item_price">Price: {{ card_item_data.price }}</p>
      <p class="trash_item_price">Price: {{ card_item_data.price }}</p>
    </div>
    <button class="catalog_item_btn">Add to card</button>
  </div>
</template>

<script>
export default {
  name: "TrashItem",
  data() {
    return {};
  },
  props: {
    card_item_data: {
      type: {
        default() {
          return {};
        },
      },
    },
  },

  components: {},

  created() {},

  mounted() {},

  methods: {},

  computed: {},

  watch: {},

  directives: {},

  filters: {},
};
</script>

<style scoped lang="scss">
.trash_item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>
