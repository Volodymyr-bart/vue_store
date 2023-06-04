<template>
  <div class="main-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainWrapper",
  data() {
    return {};
  },
  props: {},

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
.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
