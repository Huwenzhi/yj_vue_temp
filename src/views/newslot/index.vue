<template>
    <yj-crud-table  @onRefresh="onRefresh" :table-size="mini" :is-show-row-do-something="true"
                   :is-can-sort="true" :row-header="heards" :data="tableData" :is-show-index="true" @onAdd="onAdd"
                   :is-show-selection="true" @onSave="onSave" @onCancel="onCancel">
        <input slot="top"></input>
        <yj-search-tools  v-show="!showForm" slot="left">
            <el-button slot="search">测试插槽</el-button>
        </yj-search-tools>
      <input slot="bottom" v-show="showForm"></input>
    </yj-crud-table>
</template>

<script>
    import YjCrudTable from "../commonview/YjCrudTable";
    import YjSearchTools from "../commonview/YjSearchTools";
    export default {
        name: "index",
        components: {YjSearchTools, YjCrudTable},
        data() {
            return {
                showForm:false,
                mini: 'medium',
                heards: [{prop: "date", label: "日期", },
                    {prop: "name", label: "名称", },
                    {prop: "address", label: "地址",}],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        beforeMount() {
            // this.getTableHeard()
        },
        methods: {
            getTableHeard() {
                this.heards = [
                    {prop: "date", label: "日期"},
                    {prop: "name", label: "名称"},
                    {prop: "address", label: "地址"},
                ]
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
          onAdd(){
              this.showForm=true
          } ,
          onEdit(){
              this.showForm=true
          },
          //保存的回调事件
          onSave(){
            this.showForm=false
          },
          //取消的回调事件
          onCancel(){
            this.showForm=false
          }
        }

    }
</script>

<style scoped>

</style>
