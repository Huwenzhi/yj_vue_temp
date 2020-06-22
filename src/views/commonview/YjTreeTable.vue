<template>
  <div>
    <el-row>
      <el-col :span=span>
        <yj-tree :tree-data="treeData"/>
      </el-col>
      <el-col :span=24-span>
        <yj-table :data="tableData" :row-header="tableHeader"/>
      </el-col>
    </el-row>


  </div>


</template>

<script>
  import YjTree from "@/views/commonview/YjTree";
  import YjTable from "@/views/commonview/YjTable";

  export default {
    name: "YjTreeTable",

    props: {
      span: {
        type: Number,
        default: () => {
          return 12;
        }
      },
      'treeData': {},
      'tableData': {},
      'tableHeader': {}
    },
    components: {YjTable, YjTree}
  }
</script>

<style scoped>

</style>
