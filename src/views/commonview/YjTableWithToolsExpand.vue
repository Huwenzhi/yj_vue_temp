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
                            @click="onRefresh"
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

                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">
                            全选
                        </el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                            <el-checkbox v-for="item in copyHeard" :label="item" :key="item.prop">{{item.label}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-popover>

                </el-button-group>
            </div>
        </div>
        <yj-table ref="yjtable" :search-content="input" :table-size="tableSize"
                  :is-show-row-do-something="isShowRowDoSomething"
                  :is-can-sort="isCanSort"
                  :row-header="copyHeardSend" :data="data" :is-show-index="isShowIndex"
                  :is-show-selection="isShowSelection"/>
    </div>
</template>

<script>
    import YjTable from "./YjTable";

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
                copyHeardSend: [],//拦截pors数据的头部 再转发
                copyHeard: [],//头部备份
                checkAll: true,//是否全选
                checkedCities: [],//选中的数据
                isIndeterminate: false
            }
        },
        watch: {},
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.copyHeardSend = this.rowHeader
                this.copyHeard = this.rowHeader
                this.checkedCities = this.copyHeard
            },
            handleCheckAllChange(val) {
                this.checkedCities = (val ? this.copyHeard : []);
                this.isIndeterminate = false;
                this.copyHeardSend = this.checkedCities
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.copyHeard.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.copyHeard.length;
                this.copyHeardSend = value

            },
            //暴露的刷新方法
            onRefresh(){
              this.$emit('onRefresh')
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
