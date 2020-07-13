<template>
  <div ref="getheight">
    <yj-crud-table :is-show-form="showForm" @onRefresh="onRefresh" :table-size="mini" :is-show-row-do-something="true"
                   :is-can-sort="true" :row-header="heards" :data="tableData" :is-show-index="true" @onAdd="onAdd"
                   :is-show-selection="true" @onSave="onSave" @onCancel="onCancel">
      <input slot="top"></input>
      <yj-search-tools v-show="!showForm" slot="left">
        <el-button slot="search">测试插槽</el-button>
      </yj-search-tools>
    </yj-crud-table>
    <!--    <yj-save-tools/>-->
  </div>

</template>

<script>
  import YjCrudTable from "../commonview/YjCrudTable";
  import YjSearchTools from "../commonview/YjSearchTools";
  import YjSaveTools from "@/views/commonview/YjSaveTools";
  import Formtest from "@/views/newslot/formtest";

  export default {
    name: "index",
    components: {Formtest, YjSaveTools, YjSearchTools, YjCrudTable},
    data() {
      return {
        showForm: false,
        mini: 'medium',
        heards: [{prop: "date", label: "日期" },
          {prop: "name", label: "名称"},
          {prop: "address", label: "地址"},
          {prop: "address2", label: "地址2" },
        ],
        tableData: []
      }
    },
    beforeMount() {
      this.getTableData()
    },
    mounted() {
      this.$nextTick(() => { // 页面渲染完成后的回调

        // 获取高度值 （内容高+padding+边框）
        let height = this.$refs.getheight.offsetHeight;

        // 获取元素样式值 （存在单位）
        let height1 = window.getComputedStyle(this.$refs.getheight).height;

        //获取元素内联样式值（非内联样式无法获取）
        let height2 = this.$refs.getheight.style.height;


        console.log(height, '----', height1, '---', height2, '----')
      })
    },
    methods: {
      getTableHeard() {
        this.heards = [
          {prop: "date", label: "日期"},
          {prop: "name", label: "名称"},
          {prop: "address", label: "地址"},
        ]
      },
      getTableData() {
        for (let i = 0; i < 100; i++) {
          this.tableData.push({
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
            address2: '上海市普陀区金沙江路 1517 弄',
          })
        }
      },
      onRefresh() {
        this.$message.success('onRefresh')
      },
      handleEdit(index, val) {
        console.log(index, val, '----')
      },
      handleDelete(index, val) {
        console.log(index, val, '----')
      },
      search() {
        if (this.clickNotClose) {
          this.clickNotClose = false
        }
        this.clickNotClose = true
      },
      onAdd() {
        this.showForm = true
      },
      onEdit() {
        this.showForm = true
      },
      //保存的回调事件
      onSave() {
        this.showForm = false
      },
      //取消的回调事件
      onCancel() {
        this.showForm = false
      }
    }

  }
</script>

<style scoped>

</style>
