<template>
  <div>
    <h2>使用示例</h2>
    <div class="code-area">
      <pre>
        <code class="language-dart">
          {{ code }}
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeView",
  props: ["code"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.code-area {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}
pre {
  margin: 0;
}
code {
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.5;
}
.language-dart {
  color: #333;
}
</style>
