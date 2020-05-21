<template>
    <div>
        <yj-table-tools :row-header="rowHeader" @searchContentSend="searchContentRec" @filterHeard="filterHeard" @onRefresh="onRefresh"/>
        <yj-table :is-border="isBorder" :is-stripe="isStripe" :search-content="searchContent" :table-size="tableSize" :is-show-row-do-something="isShowRowDoSomething" :is-can-sort="isCanSort"
                  :row-header="rowHeaderSend" :data="data" :is-show-index="isShowIndex"
                  :is-show-selection="isShowSelection" ref="yjtable" @handleEdit="handleEdit"  @handleDelete="handleDelete" @handleCurrentChange="handleCurrentChange" @handleCurrentChange="handleCurrentChange" :is-single="isSingle"/>
    </div>
</template>

<script>
    import YjTable from "./YjTable";
    import YjTableTools from "./YjTableTools";

    export default {
        name: "YjTableWithTools",
        components: {YjTableTools, YjTable},
        props: {
            isSingle:{
                type: Boolean,
                default: () => {
                    return false
                }
            },
            //是否斑马显示
            isStripe: {
                type: Boolean,
                default: () => {
                    return false
                }
            },
            //是否带边框
            isBorder: {
                type: Boolean,
                default: () => {
                    return false
                }
            },
            // 表格数据
            data: {
                type: Array,
                default: () => {
                    return []
                }
            },
            // 表头数据
            rowHeader: {
                type: Array,
                default: () => {
                    return []
                }
            },
            //显示序号
            isShowIndex: {
                type: Boolean,
                default: () => {
                    return false
                }
            }, //显示序号
            isShowSelection: {
                type: Boolean,
                default: () => {
                    return false
                }
            },
            //是否支持排序
            isCanSort: {
                type: Boolean,
                default: () => {
                    return false
                }
            },
            //表格的大小
            tableSize: {
                type: String,
                default: () => {
                    return 'medium'
                }
            },
            //是否显示单行操作
            isShowRowDoSomething: {
                type: Boolean,
                default: () => {
                    return false
                }
            }
        },
        data(){
          return{
              searchContent:'',//传递过来的模糊查询的内容
              rowHeaderSend:[],//转发的头部
          }
        },
        mounted() {
            this.init()
        },
        methods:{
            //拦截转发头信息
            init(){
              this.rowHeaderSend=this.rowHeader
            },
            //搜索的内容
            searchContentRec(val){
                this.searchContent=val
            },
            //过滤后的头信息 转发到table中
            filterHeard(val){
                this.rowHeaderSend=val
            },
            //暴露的刷新方法
            onRefresh(){
                this.$emit('onRefresh')
            },
            //新增
            onAdd(){
                this.$emit('onAdd')
            },
            //新增
            onEdit(){
                this.$emit('onEdit')
            },
            //新增
            onDel(){
                this.$emit('onDel')
            },
            handleEdit(index,val){
                this.$emit('handleEdit',index,val)
            },
            handleDelete(index,val){
                this.$emit('handleDelete',index,val)
            },
            //多选
            handleSelectionChange(val) {
                this.$emit('handleSelectionChange',val)
            },
            //单选
            handleCurrentChange(val){
                if (!this.isSingle){
                    this.$refs.multipleTable.toggleRowSelection(val)
                }
                this.$emit('handleCurrentChange',val)

            }
        }
    }
</script>

<style scoped>

</style>
