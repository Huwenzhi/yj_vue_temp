<template>
  <div class="crud-opts">
    <span class="crud-opts-left">
      <!--左侧插槽-->
      <slot name="left" />
      <el-button
        class="filter-item"
        size="mini"
        type="primary"
        icon="el-icon-plus"
      >
        新增
      </el-button>
    </span>
  </div>
</template>

<script>
    export default {
  name: 'CRUD'
}
</script>

<style scoped>

</style>
