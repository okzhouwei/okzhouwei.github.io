<template>
  <div style="padding: 0px 40px; text-align: left">
    <h1>Color 色彩</h1>
    <div><b>OKColors</b>提供一套规范的颜色，为你的APP提供一致的外观视觉。</div>
    <h2>主色</h2>
    <div>主品牌颜色，APP主题色</div>
    <el-row :gutter="10">
      <el-col :span="6">
        <div
          :style="`background-color: ${brandColor.color};color:white;padding:30px;margin:10px 0px`"
        >
          <div style="font-weight: bold">{{ brandColor.name }}</div>
          <div>{{ brandColor.code }}</div>
          <div>{{ brandColor.color }}</div>
        </div>
      </el-col>
    </el-row>
    <h2>辅助色</h2>
    <div>辅助色用于提供辅助视觉效果，如成功、警告、错误等场景。</div>
    <el-row :gutter="10">
      <el-col v-for="(item, index) in assistColors" :key="index" :span="6">
        <div
          :style="`background-color: ${item.color};color:white;padding:30px;margin:10px 0px`"
        >
          <div style="font-weight: bold">{{ item.name }}</div>
          <div>{{ item.code }}</div>
          <div>{{ item.color }}</div>
        </div>
      </el-col>
    </el-row>
    <h2>文本色</h2>
    <div>文本色用于提供文本的颜色，如主要文字、次要文字、占位文字等。</div>
    <el-row :gutter="10">
      <el-col v-for="(item, index) in textColors" :key="index" :span="6">
        <div
          :style="`background-color: ${item.color};color:white;padding:30px;margin:10px 0px`"
        >
          <div style="font-weight: bold">{{ item.name }}</div>
          <div>{{ item.code }}</div>
          <div>{{ item.color }}</div>
        </div>
      </el-col>
    </el-row>
    <h2>边框色</h2>
    <div>边框色用于提供边框的颜色。</div>
    <el-row :gutter="10">
      <el-col v-for="(item, index) in borderColors" :key="index" :span="6">
        <div
          :style="`background-color: ${item.color};color:black;padding:30px;margin:10px 0px`"
        >
          <div style="font-weight: bold">{{ item.name }}</div>
          <div>{{ item.code }}</div>
          <div>{{ item.color }}</div>
        </div>
      </el-col>
    </el-row>
    <h2>填充色</h2>
    <div>填充色用于提供填充的颜色，如背景色、卡片背景色等。</div>
    <el-row :gutter="10">
      <el-col v-for="(item, index) in fillColors" :key="index" :span="6">
        <div
          :style="`background-color: ${item.color};color:black;padding:30px;margin:10px 0px`"
        >
          <div style="font-weight: bold">{{ item.name }}</div>
          <div>{{ item.code }}</div>
          <div>{{ item.color }}</div>
        </div>
      </el-col>
    </el-row>
    <h2>背景色</h2>
    <div>背景色用于提供背景的颜色。</div>
    <el-row :gutter="10">
      <el-col v-for="(item, index) in backgroundColors" :key="index" :span="6">
        <div
          :style="`background-color: ${item.color};color:black;padding:30px;margin:10px 0px`"
        >
          <div style="font-weight: bold">{{ item.name }}</div>
          <div>{{ item.code }}</div>
          <div>{{ item.color }}</div>
        </div>
      </el-col>
    </el-row>
    <h2>基础色</h2>
    <div>基础色用于提供基础的颜色，如白色、黑色等。</div>
    <el-row :gutter="10">
      <el-col v-for="(item, index) in baseColors" :key="index" :span="6">
        <div
          :style="`background-color: ${item.color};color:${item.textColor};padding:30px;margin:10px 0px`"
        >
          <div style="font-weight: bold">{{ item.name }}</div>
          <div>{{ item.code }}</div>
          <div>{{ item.color }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "ColorView",
  data() {
    return {
      brandColor: {
        name: "主色",
        code: "brandColor",
        color: "#165DFF",
      },
      assistColors: [
        {
          name: "成功",
          code: "successColor",
          color: "#00B42A",
        },
        {
          name: "警告",
          code: "warningColor",
          color: "#FF7D00",
        },
        {
          name: "危险",
          code: "dangerColor",
          color: "#F53F3F",
        },
        {
          name: "信息",
          code: "infoColor",
          color: "#86909C",
        },
      ],
      textColors: [
        {
          name: "主要文字",
          code: "primaryTextColor",
          color: "#1D2129",
        },
        {
          name: "常规文字",
          code: "regularTextColor",
          color: "#4E5969",
        },
        {
          name: "次要文字",
          code: "secondaryTextColor",
          color: "#86909C",
        },
        {
          name: "占位文字",
          code: "placeholderTextColor",
          color: "#A8ABB2",
        },
        {
          name: "禁用文字",
          code: "disabledTextColor",
          color: "#C0C4CC",
        },
      ],
      borderColors: [
        {
          name: "基础边框",
          code: "baseBorderColor",
          color: "#DCDFE6",
        },
        {
          name: "浅色边框",
          code: "lightBorderColor",
          color: "#EBEEF5",
        },
        {
          name: "深色边框",
          code: "darkBorderColor",
          color: "#CDD0D6",
        },
      ],
      fillColors: [
        {
          name: "基础填充",
          code: "baseFillColor",
          color: "#F0F2F5",
        },
        {
          name: "浅色填充",
          code: "lightFillColor",
          color: "#FAFAFA",
        },
        {
          name: "深色填充",
          code: "darkFillColor",
          color: "#E6E8EB",
        },
      ],
      backgroundColors: [
        {
          name: "基础背景",
          code: "baseBackgroundColor",
          color: "#FFFFFF",
        },
        {
          name: "页面背景",
          code: "pageBackgroundColor",
          color: "#F2F3F5",
        },
      ],
      baseColors: [
        {
          name: "白色",
          code: "white",
          color: "#FFFFFF",
          textColor: "#000000",
        },
        {
          name: "黑色",
          code: "black",
          color: "#000000",
          textColor: "#FFFFFF",
        },
      ],
    };
  },
};
</script>
