<template>
    <div>
        <yj-table-tools @searchContentSend="searchContentRec"/>
        <yj-table :search-content="searchContent" :table-size="tableSize" :is-show-row-do-something="isShowRowDoSomething" :is-can-sort="isCanSort"
                  :row-header="rowHeader" :data="data" :is-show-index="isShowIndex"
                  :is-show-selection="isShowSelection" ref="yjtable"/>
    </div>
</template>

<script>
    import YjTable from "./YjTable";
    import YjTableTools from "./YjTableTools";

    export default {
        name: "YjTableWithTools",
        components: {YjTableTools, YjTable},
        props: {
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
          }
        },
        methods:{
            //搜索的内容
            searchContentRec(val){
                this.searchContent=val
            }
        }
    }
</script>

<style scoped>

</style>
