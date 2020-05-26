<template>
  <!--工具栏-->
  <div class="head-container">
    <div v-if="searchToggle">
      <!-- 上方搜素的插槽 -->
      <slot name="top"/>
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
        @click="onAdd">新增 </el-button>
      <el-button
        :disabled="selectDatas.length !== 1"
        class="filter-item"
        size="mini"
        type="success"
        icon="el-icon-edit"
        @click="onEdit"> 修改</el-button>
      <el-button
        :disabled="selectDatas.length === 0"
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
        icon="el-icon-download">导出</el-button>
        <el-button-group v-for="(item, index) in rowsList" :key="index">

</el-button-group>
      <!--        右侧的插槽 适合放一些按钮-->
      <slot name="right"/>

    </span>
      <div class="crud-opts-right">
        <el-input size="mini" placeholder="搜索" v-model="input" @input="searchContent" clearable
                  prefix-icon="el-icon-search" style="width: auto;margin-right: 5px"/>
        <el-button-group>

          <el-button
            @click="onSearch()"
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
              <i class="fa fa-caret-down"
                 aria-hidden="true"/>
            </el-button>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">
              全选
            </el-checkbox>
            <div style="margin: 5px 0;"></div>
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
    name: "YjCrudTools",
    props: {

      // 表头数据
      rowHeader: {
        type: Array,
        default: () => {
          return []
        }
      },
      // 表头数据
      selectDatas: {
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
      onSearch() {
        this.searchToggle = !this.searchToggle
      },
      searchContent(val) {
        this.$emit('searchContentSend', val)
      },
      handleCheckAllChange(val) {
        this.checkedCities = (val ? this.copyHeard : []);
        this.isIndeterminate = false;
        this.$emit('filterHeard', this.checkedCities)
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.copyHeard.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.copyHeard.length;
        // let checkedCities
        let checkeds = []
        for (let heard of this.copyHeard) {
          let has = false
          for (let checkItem of value) {
            if (heard.label === checkItem.label) {
              has = true
              break
            }
          }
          if (has) {
            checkeds.push(heard)
          }
        }
        this.$emit('filterHeard', checkeds)

      },
      //刷新
      onRefresh() {
        this.$emit('onRefresh')
      },
      //新增
      onAdd() {
        this.$emit('onAdd')
      },
      //修改
      onEdit() {
        this.$emit('onEdit')
      },
      //删除
      onDel() {
        this.$emit('onDel')
      },
      //导出
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
