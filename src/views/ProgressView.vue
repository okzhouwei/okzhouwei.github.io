<template>
  <div style="padding: 0px 40px; text-align: left">
    <h1>Progress 进度条</h1>
    <DemoView :src="require('@/assets/images/img_progress.png')"></DemoView>
    <CodeView :code="code" />
    <ParamsView :paramsList="paramsList"></ParamsView>
  </div>
</template>
<script>
import DemoView from "@/components/DemoView.vue";
import CodeView from "@/components/CodeView.vue";
import ParamsView from "@/components/ParamsView.vue";
export default {
  name: "ProgressView",
  components: {
    DemoView,
    CodeView,
    ParamsView,
  },
  data() {
    return {
      code: `
      ZWProgress(
        type: ZWType.warning,
        progress: 0.55,
        height: 20,
        text: "TEXT",
        detailText: "DETAIL",
      )
      `,
      paramsList: [
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
          content: "左边内容",
          required: false,
          options: [],
          defaultValue: "",
        },
        {
          name: "detailText",
          type: "String",
          content: "右边内容",
          required: false,
          options: [],
          defaultValue: "",
        },
        {
          name: "padding",
          type: "EdgeInsets",
          content: "内间距",
          required: false,
          options: [],
          defaultValue: "0",
        },
        {
          name: "color",
          type: "Color",
          content: "进度颜色",
          required: false,
          options: [],
          defaultValue: "brandColor",
        },
        {
          name: "backgroundColor",
          type: "Color",
          content: "背景颜色",
          required: false,
          options: [],
          defaultValue: "进度颜色半透明",
        },
        {
          name: "progress",
          type: "double",
          content: "进度值（0-1）",
          required: false,
          options: [],
          defaultValue: "",
        },
        {
          name: "height",
          type: "double",
          content: "进度条高度",
          required: false,
          options: [],
          defaultValue: "22.0",
        },
      ],
    };
  },
};
</script>
