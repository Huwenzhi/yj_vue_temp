<template>
  <div style="margin-left: 10px">
    <el-button
      class="filter-item"
      size="mini"
      type="success"
      icon="el-icon-check"
      @click="onSave">保存</el-button>

    <el-button
      class="filter-item"
      size="mini"
      type="info"
      icon="el-icon-close"
      @click="onCancel">取消</el-button>

  </div>
</template>

<script>
    export default {
        name: "YjSaveTools",
      methods:{
        onSave(){
          this.$emit('onSave')
        },
        onCancel(){
          this.$emit('onCancel')
        }
      }
    }
</script>

<style scoped>

</style>
