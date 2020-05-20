<!--base 表格的封装-->
<template>
    <el-table :size="tableSize" :data="data">
        <el-table-column type="selection" width="50" v-if='isShowSelection'></el-table-column>
        <el-table-column type="index" width="50" label="序号" v-if='isShowIndex'></el-table-column>

        <el-table-column   v-for="(col,index) in rowHeader" :key="index" :prop="col.prop" :label="col.label"
                         align="center" :width="col.width"  :type="col.type" :sortable=isCanSort>
        </el-table-column>
        <el-table-column v-if='isShowRowDoSomething' align="center" label="操作">
            <template slot-scope="scope">
                <el-button
                        icon="el-icon-edit"
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"></el-button>
                <el-button
                        icon="el-icon-delete"
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "YjTable",
        props:{
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
            isCanSort:{
                type:Boolean,
                default:()=>{
                    return false
                }
            } ,
            //表格的大小
            tableSize:{
                type:String,
                default:()=>{
                    return 'medium'
                }
            },
            //是否显示单行操作
            isShowRowDoSomething:{
                type:Boolean,
                default:()=>{
                    return false
                }
            }
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
