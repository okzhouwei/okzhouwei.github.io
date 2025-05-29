<template>
  <div>
    <h2>参数说明</h2>
    <el-table :data="paramsList" style="width: 100%" border>
      <el-table-column
        prop="name"
        label="参数名"
        align="center"
        min-width="80"
      />
      <el-table-column
        prop="type"
        label="参数类型"
        align="center"
        min-width="100"
      />
      <el-table-column
        prop="content"
        label="作用"
        align="center"
        min-width="120"
      />
      <el-table-column
        prop="required"
        label="是否必填"
        align="center"
        min-width="80"
      >
        <template slot-scope="scope">
          <el-tag :type="scope.row.required ? 'success' : 'info'">
            {{ scope.row.required ? "是" : "否" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="options"
        label="可选值"
        align="center"
        min-width="150"
      >
        <template slot-scope="scope">
          <div>{{ scope.row.options }}</div>
        </template>
      </el-table-column>
      <el-table-column
        prop="defaultValue"
        label="默认值"
        align="center"
        min-width="100"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ParamsView",
  props: {
    paramsList: {
      type: Array,
      default: () => [
        {
          name: "参数名",
          type: "参数类型",
          content: "作用",
          required: false,
          options: [],
          defaultValue: "默认值",
        },
      ],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
