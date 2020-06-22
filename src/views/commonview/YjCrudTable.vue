<template>
  <div>
    <div ref="topRef" v-scroll-lock="true">
      <yj-crud-tools :is-show-form="isShowForm" @onAdd="onAdd" @onEdit="onEdit" @onDel="onDel"
                     :select-datas="selectDatas" :row-header="rowHeader"
                     @searchContentSend="searchContentRec" @filterHeard="filterHeard" @onRefresh="onRefresh"
                     @onSave="onSave" @onCancel="onCancel">
        <slot name="top" slot="top" v-show="!isShowForm"/>
        <slot name="left" slot="left" v-show="isShowForm"/>
        <slot name="right" slot="right" v-show="!isShowForm"/>
      </yj-crud-tools>
    </div>

    <div :is-show-form="isShowForm">
      <slot name="maincard"/>
    </div>

    <yj-table :height="height" :is-show-form="isShowForm" :is-border="isBorder" :is-stripe="isStripe"
              :search-content="searchContent" :table-size="tableSize"
              :is-show-row-do-something="isShowRowDoSomething" :is-can-sort="isCanSort"
              :row-header="rowHeaderSend" :data="data" :is-show-index="isShowIndex"
              :is-show-selection="isShowSelection" ref="yjtable" @handleEdit="handleEdit" @handleDelete="handleDelete"
              @handleCurrentChange="handleCurrentChange" @handleSelectionChange="handleSelectionChange"
              :is-single="isSingle"/>

  </div>
</template>

<script>
  import YjCrudTools from "./YjCrudTools";
  import YjTable from "./YjTable";

  export default {
    name: "YjCrudTable",
    components: {YjTable, YjCrudTools},
    props: {
      isShowForm: {
        type: Boolean,
        default: () => {
          return false
        }
      },
      isSingle: {
        type: Boolean,
        default: () => {
          return true
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
    data() {
      return {
        searchContent: '',//传递过来的模糊查询的内容
        rowHeaderSend: [],//转发的头部
        selectDatas: [],//选中的数据
        heightall: '',
        height: ''
      }
    },
    watch: {
      data(val) {
        this.$nextTick(() => {
          this.selectDatas = []
        })

      }
    },
    created() {
      this.$nextTick(() => {
        // 获取高度值 （内容高+padding+边框）
        let height = this.$refs.topRef.offsetHeight;
        this.height = (window.innerHeight - height-sessionStorage.getItem('top')) + 'px'
        console.log(this.height,'---height--',height)
      })
    },
    mounted() {
      window.onresize = () => {
        return (() => {
          window.screenHeight= document.body.clientHeight
          // that.screenWidth =
          console.log('height=',window.screenHeight)
          localStorage.
          this.height = (window.screenHeight - height-sessionStorage.getItem('top')) + 'px'
        })()
      }

      this.init()

    },
    methods: {
      //拦截转发头信息
      init() {
        this.rowHeaderSend = this.rowHeader
      },
      //搜索的内容
      searchContentRec(val) {
        this.searchContent = val
      },
      //过滤后的头信息 转发到table中
      filterHeard(val) {
        this.rowHeaderSend = val
      },
      //暴露的刷新方法
      onRefresh() {
        this.selectDatas = []
        this.$emit('onRefresh')
      },
      //新增
      onAdd() {
        this.$emit('onAdd', this.selectDatas)
      },
      //新增
      onEdit() {
        this.$emit('onEdit', this.selectDatas[0])
      },
      //新增
      onDel() {
        this.$emit('onDel', this.selectDatas)
      },
      handleEdit(index, val) {
        this.$emit('handleEdit', index, val)
      },
      handleDelete(index, val) {
        this.$emit('handleDelete', index, val)
      },
      //多选
      handleSelectionChange(val) {
        if (!this.isSingle) {
          this.selectDatas = []
          this.selectDatas = val
        }
        console.log(val)
        this.$emit('handleSelectionChange', val)
      },
      //单选
      handleCurrentChange(val) {
        if (this.isSingle) {
          this.selectDatas = []
          this.selectDatas.push(val)
          // this.$refs.yjtable.toggleRowSelection(val)
        }
        this.$emit('handleCurrentChange', val)

      },
      //保存的回调事件
      onSave() {
        this.$emit('onSave')
      },
      //取消的回调事件
      onCancel() {
        this.$emit('onCancel')
      }
    }
  }
</script>

<style scoped>
  .fixed-header {
    position: fixed;
   margin-top: 200px;
  }
</style>
