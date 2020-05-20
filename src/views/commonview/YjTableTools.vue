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
              @click="onAdd()"
      >
        新增
      </el-button>
      <el-button
              class="filter-item"
              size="mini"
              type="success"
              icon="el-icon-edit"
              @click="onEdit()"
      >
        修改
      </el-button>
      <el-button

              slot="reference"
              class="filter-item"
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="onDel"
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
                <el-input size="mini" placeholder="搜索" v-model="input" clearable="true"  prefix-icon="el-icon-search" style="width: auto;"/>
                <el-button-group >

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
                        <el-checkbox>
                            全选
                        </el-checkbox>
                    </el-popover>
                    <!--                    </div>-->

                </el-button-group>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "YjTableTools",
        data() {
            return {
                input:'',
                rowsList: [{
                    type: "danger",
                    btnText: 'cejjj',
                }],
                searchToggle: false,
                permission: {
                    add: ['admin', 'user:add'],
                    edit: ['admin', 'user:edit'],
                    del: ['admin', 'user:del']
                },
            }
        },

        methods: {
            toggleSearch() {
                this.searchToggle = !this.searchToggle
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
