<template>
  <div style="text-align: left; padding: 0px">
    <el-menu router style="padding-right: 40px">
      <el-menu-item index="1" route="/">
        <span>Home</span>
      </el-menu-item>
      <el-menu-item index="2" route="/color">
        <span slot="title">Color 色彩</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
