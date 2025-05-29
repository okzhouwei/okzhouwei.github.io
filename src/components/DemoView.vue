<template>
  <div>
    <h2>使用效果</h2>
    <img :src="src" width="375" alt="本地图片" />
  </div>
</template>

<script>
export default {
  name: "DemoView",
  props: ["src"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
