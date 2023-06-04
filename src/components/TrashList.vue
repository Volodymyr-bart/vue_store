<template>
  <div class="container">
    <h1>Trash</h1>
    <TrashItem
      v-for="item in card_data"
      :key="item.name"
      :card_item_data="item" />
  </div>
</template>

<script>
import TrashItem from "@/components/TrashItem.vue";
export default {
  name: "TrashList",
  data() {
    return {};
  },
  props: {
    card_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  components: { TrashItem },

  created() {},

  mounted() {},

  methods: {},

  computed: {},

  watch: {},

  directives: {},

  filters: {},
};
</script>

<style scoped lang="scss"></style>
