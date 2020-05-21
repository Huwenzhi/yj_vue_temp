<template>
    <div>

        <div class="crud-opts">
            <span class="crud-opts-left">
      <!--左侧插槽-->
      <slot name="left"/>
      <el-button
              class="filter-item"
              size="mini"
              type="primary"
              icon="el-icon-plus"
      >
        新增
      </el-button>
      <el-button
              class="filter-item"
              size="mini"
              type="success"
              icon="el-icon-edit"
      >
        修改
      </el-button>
      <el-button

              slot="reference"
              class="filter-item"
              type="danger"
              icon="el-icon-delete"
              size="mini"
      >
        删除
      </el-button>
      <el-button

              class="filter-item"
              size="mini"
              type="warning"
              icon="el-icon-download"

      >导出</el-button>
        <el-button-group v-for="(item, index) in rowsList" :key="index">

</el-button-group>

      <slot name="right"/>

    </span>
            <div class="crud-opts-right">
                <el-input size="mini" placeholder="搜索" v-model="input" clearable prefix-icon="el-icon-search"
                          style="width: auto;margin-right: 5px"/>
                <el-button-group>

                    <el-button
                            size="mini"
                            plain
                            type="info"
                            class="filter-item"
                            icon="el-icon-search"/>
                    <el-button
                            size="mini"
                            class="filter-item"
                            icon="el-icon-refresh"/>

                    <el-popover
                            placement="bottom-end"
                            width="150"
                            trigger="click">
                        <el-button
                                slot="reference"
                                size="mini"
                                icon="el-icon-s-grid">
                            <i
                                    class="fa fa-caret-down"
                                    aria-hidden="true"
                            />
                        </el-button>

                        <el-checkbox :indeterminate="isIndeterminate" v-model='cheackAllChecked' @change='checkAllFun'>全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox v-for="(item,index) in List" :key="index"  v-model='checkArr' :label=item.id  @change="changevalue">{{item.name}}</el-checkbox>

                    </el-popover>

                </el-button-group>
            </div>
        </div>
        <yj-table ref="yjtable" :search-content="input" :table-size="tableSize"
                  :is-show-row-do-something="isShowRowDoSomething"
                  :is-can-sort="isCanSort"
                  :row-header="rowHeader" :data="data" :is-show-index="isShowIndex"
                  :is-show-selection="isShowSelection"/>
    </div>
</template>

<script>
    import YjTable from "./YjTable";

    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        name: "YjTableWithToolsExpand",
        components: {YjTable},
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


        data() {
            return {
                rowsList: [],
                input: '',//模糊查询的内容

                copyHeard: [],

                checkAll: false,
                checkedCities: ['上海', '北京'],
                cities: cityOptions,
                isIndeterminate: true,

                List: [
                    {
                        id: "1",
                        name:'香蕉'
                    },
                    {
                        id: "2",
                        name:'苹果'
                    },
                    {
                        id: "3",
                        name:'橙子'
                    },
                    {
                        id: "4",
                        name:'鸭梨'
                    },
                    {
                        id: "5",
                        name:'葡萄'
                    }
                ],
                cheackAllChecked: false,
                checkArr: [],
                checkCompleteArr: []
            }
        },
        watch: {},
        mounted() {
            this.init()
            var _this = this;
            this.List.forEach(function(item, index) {
                if (index >= 0) {
                    _this.checkCompleteArr.push(item.id);
                }
            });
        },
        methods: {
            init() {
                this.copyHeard = this.rowHeader
                this.checkedCities = this.rowHeader
            },
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            //实现全选
            checkAllFun() {
                var _this = this;
                this.checkArr = [];
                if (this.cheackAllChecked) {
                    this.List.forEach(function(item, index) {
                        if (index >= 0) {
                            _this.checkArr.push(item.id);
                        }
                    });
                }
            },
            //实现反选
            reverseChecked() {
                var changeArr = [];
                this.List.forEach(function(item, index) {
                    if (index >= 0) {
                        changeArr.push(item.id);
                    }
                });
                this.removeByValue(changeArr, this.checkArr);
            },
            //反选过滤函数
            removeByValue(changearr, checkarr) {
                var _this = this;
                for (var j = 0; j < checkarr.length; j++) {
                    for (var i = 0; i < changearr.length; i++) {
                        if (changearr[i] === checkarr[j]) {
                            changearr.splice(i, 1);
                            break;
                        }
                    }
                }
                this.checkArr = changearr;
                if (changearr.length <= _this.checkCompleteArr.length) {
                    this.cheackAllChecked = false;
                }
                if (changearr.length === _this.checkCompleteArr.length) {
                    this.cheackAllChecked = true;
                }
            },
//选项的change事件
            changevalue() {
                var _this = this;
                if (this.checkArr.length <= _this.checkCompleteArr.length) {
                    this.cheackAllChecked = false;
                }
                if (this.checkArr.length === _this.checkCompleteArr.length) {
                    this.cheackAllChecked = true;
                }
            }

        }

    }
</script>

<style scoped>
    .crud-opts {
        padding: 6px 0;
        display: -webkit-flex;
        display: flex;
        align-items: center;
    }

    .crud-opts .crud-opts-right {
        margin-left: auto;
    }
</style>
