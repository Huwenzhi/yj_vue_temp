<template>
    <!--工具栏-->
    <div class="head-container">
        <div v-if="searchToggle">
            <!-- 搜索 -->
            <el-input

                    clearable
                    size="small"
                    placeholder="输入名称或者邮箱搜索"
                    style="width: 200px;"
                    class="filter-item"/>
        </div>
        <div class="crud-opts">
    <span class="crud-opts-left">
      <!--左侧插槽-->
      <slot name="left"/>
      <el-button
              class="filter-item"
              size="mini"
              type="primary"
              icon="el-icon-plus"
              @click="onAdd"
      >
        新增
      </el-button>
      <el-button
              class="filter-item"
              size="mini"
              type="success"
              icon="el-icon-edit"
              @click="onEdit"
      >
        修改
      </el-button>
      <el-button
              @click="onDel"
              slot="reference"
              class="filter-item"
              type="danger"
              icon="el-icon-delete"
              size="mini"> 删除 </el-button>
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
                <el-input size="mini" placeholder="搜索" v-model="input" @input="searchContent" clearable
                          prefix-icon="el-icon-search" style="width: auto;margin-right: 5px"/>
                <el-button-group>

                    <el-button
                            @click="toggleSearch()"
                            size="mini"
                            plain
                            type="info"
                            class="filter-item"
                            icon="el-icon-search"/>
                    <el-button
                            size="mini"
                            class="filter-item"
                            icon="el-icon-refresh"
                    @click="onRefresh"/>

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
    </div>
</template>

<script>
    export default {
        name: "YjTableTools",
        props: {

            // 表头数据
            rowHeader: {
                type: Array,
                default: () => {
                    return []
                }
            },
        },
        data() {
            return {
                input: '',
                rowsList: [],
                searchToggle: false,
                copyHeard: [],//头部备份
                checkAll: true,//是否全选
                checkedCities: [],//选中的数据
                isIndeterminate: false

            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.copyHeard = this.rowHeader
                this.checkedCities = this.copyHeard
            },
            toggleSearch() {
                this.searchToggle = !this.searchToggle
            },
            searchContent(val) {
                this.$emit('searchContentSend', val)
            },
            handleCheckAllChange(val) {
                this.checkedCities = (val ? this.copyHeard : []);
                this.isIndeterminate = false;
                this.$emit('filterHeard',this.checkedCities)
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.copyHeard.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.copyHeard.length;
                this.$emit('filterHeard',value)

            },
            //
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
