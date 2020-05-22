<!--base 表格的封装-->
<template>
    <el-table ref="multipleTable" :border="isBorder" :stripe="isStripe" :size="tableSize" :data="tableDataCon"
              @selection-change="handleSelectionChange"
              highlight-current-row
              @current-change="handleCurrentChange">
        <el-table-column type="selection" width="50" v-if='isShowSelection&&!isSingle'></el-table-column>
        <el-table-column type="index" width="50" label="序号" v-if='isShowIndex'></el-table-column>

        <el-table-column v-for="(col,index) in rowHeader" :key="index" :prop="col.prop" :label="col.label"
                         align="center" :width="col.width" :type="col.type" :sortable=isCanSort>
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <ex-slot v-if="col.render" :render="col.render" :row="scope.row" :index="scope.$index"
                             :column="col"></ex-slot>
                    <span v-else-if="col.prop" v-html="format(scope.row[col.prop])"/>
                </div>
<!--                下面的这段代码显示的飘窗-->
<!--                <el-popover trigger="hover" placement="top">-->
<!--                    <p>{{ scope.row[col.prop] }}</p>-->
<!--                    <div slot="reference" class="name-wrapper">-->
<!--                        <ex-slot v-if="col.render" :render="col.render" :row="scope.row" :index="scope.$index"-->
<!--                                 :column="col"></ex-slot>-->
<!--                        <span v-else-if="col.prop" v-html="format(scope.row[col.prop])"/>-->
<!--                    </div>-->
<!--                </el-popover>-->
            </template>

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


        props: {
            isSingle:{
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
            },
            //过滤的内容
            searchContent: {
                type: String,
                default: () => {
                    return ''
                }
            }
        },
        computed: {
            tableDataCon() {
                const search = this.searchContent
                const that = this
                if (search) {
                    // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
                    // 注意： filter() 不会对空数组进行检测。
                    // 注意： filter() 不会改变原始数组。
                    return this.tdata.filter(data => {
                        // some() 方法用于检测数组中的元素是否满足指定条件;
                        // some() 方法会依次执行数组的每个元素：
                        // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
                        // 如果没有满足条件的元素，则返回false。
                        // 注意： some() 不会对空数组进行检测。
                        // 注意： some() 不会改变原始数组。
                        return Object.keys(data).some(key => {
                            // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
                            // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
                            return String(data[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }

                return this.tdata
                // return  this.isPaging?((this.tdata==null||this.tdata==undefined) ?this.tdata :this.tdata.slice((this.tcurrentPage - 1) * this.tpageSize, this.tcurrentPage * this.tpageSize) ):this.tdata
            },

        },
        data() {
            return {
                searchContent: '',//搜素的内容
                tdata: [],//表体的数据
            }
        },
        watch: {
            //接收传递过来的数据
            data(val) {
                this.tdata = val
            },
            //接收搜索的内容
            searchContent(val) {
                this.searchContent = val
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.tdata = this.data
            },
            //模糊查询对字体进行加粗变红显示
            format(val) {
                let data= JSON.stringify(val)
                if (data != undefined && data != '' && data != null && data != 'null' && data.indexOf(this.searchContent) !== -1 && this.searchContent !== '') {
                    let string = JSON.parse(data)
                    return string.replace(this.searchContent, ' <strong><font color="red">' + this.searchContent + '</font> </strong>')
                } else {
                    return val
                }

            },
            //单行编辑
            handleEdit(index,val){
                this.$emit('handleEdit',index,val)
            },
            //单行删改
            handleDelete(index,val){
                this.$emit('handleDelete',index,val)
            },
            //多选
            handleSelectionChange(val) {
                this.$emit('handleSelectionChange',val)
            },
            //单选
            handleCurrentChange(val){
                // if (!this.isSingle){
                //     this.$refs.multipleTable.toggleRowSelection(val)
                // }
                this.$emit('handleCurrentChange',val)

            }
        }
    }
</script>

<style scoped>

</style>
