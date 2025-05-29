<template>
  <div style="padding: 0px 40px; text-align: left">
    <h1>Tag 标签</h1>
    <DemoView :src="require('@/assets/images/img_tag.png')"></DemoView>
    <CodeView :code="code" />
    <ParamsView :paramsList="paramsList"></ParamsView>
  </div>
</template>
<script>
import DemoView from "@/components/DemoView.vue";
import CodeView from "@/components/CodeView.vue";
import ParamsView from "@/components/ParamsView.vue";
export default {
  name: "TagView",
  components: {
    DemoView,
    CodeView,
    ParamsView,
  },
  data() {
    return {
      code: `
      ZWTag(
          text: "Tag",
          effect: ZWEffect.dark,
          type: ZWType.success,
          size: ZWSize.small,
        )
      `,
      paramsList: [
        {
          name: "effect",
          type: "ZWEffect",
          content: "主题",
          required: false,
          options: ["dark", "light", "plain"],
          defaultValue: "light",
        },
        {
          name: "size",
          type: "ZWSize",
          content: "尺寸",
          required: false,
          options: ["large", "normal", "small"],
          defaultValue: "normal",
        },
        {
          name: "type",
          type: "ZWType",
          content: "类型",
          required: false,
          options: [
            "primary",
            "success",
            "warning",
            "danger",
            "info",
            "custom",
          ],
          defaultValue: "primary",
        },
        {
          name: "text",
          type: "String",
          content: "内容",
          required: true,
          options: [],
          defaultValue: "",
        },
        {
          name: "margin",
          type: "EdgeInsets",
          content: "外间距",
          required: false,
          options: [],
          defaultValue: "0",
        },
        {
          name: "padding",
          type: "EdgeInsets",
          content: "内间距",
          required: false,
          options: [],
          defaultValue: "2",
        },
        {
          name: "color",
          type: "Color",
          content: "背景颜色",
          required: false,
          options: [],
          defaultValue: "brandColor",
        },
        {
          name: "fontSize",
          type: "double",
          content: "字体大小",
          required: false,
          options: [],
          defaultValue: "12",
        },
        {
          name: "borderRadius",
          type: "double",
          content: "圆角半径",
          required: false,
          options: [],
          defaultValue: "2.0",
        },
      ],
    };
  },
};
</script>
