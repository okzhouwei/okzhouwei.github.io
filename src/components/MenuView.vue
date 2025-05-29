<template>
  <div style="text-align: left; padding: 0px">
    <el-menu router style="padding-right: 40px">
      <el-menu-item
        v-for="(item, index) in menuList"
        :key="index"
        :index="item.index"
        :route="item.route"
      >
        <span style="font-weight: bold">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          index: "1",
          name: "Home",
          route: "/",
        },
        {
          index: "2",
          name: "Color 色彩",
          route: "/color",
        },
        {
          index: "3",
          name: "Tag 标签",
          route: "/tag",
        },
        {
          index: "4",
          name: "Progress 进度条",
          route: "/progress",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
