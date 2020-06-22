<template>
  <div>
    <el-input
      style="width: 80%;margin-left: 2%;margin-top: 5%"
      size="mini"
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>

    <el-tree
      class="filter-tree"
      :data="treeData"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree">
    </el-tree>
  </div>
</template>

<script>
  export default {
    name: "YjTree",
    props: ['treeData'],
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },
    data() {
      return {
        filterText: '',
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }

  }
</script>

<style scoped>

</style>
