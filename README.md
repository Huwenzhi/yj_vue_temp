**yj-table 使用说明**

基于vue 3.0开发

### 工具配置注释

字段名称 | 字段解释 | 默认值类型
---|--- |---
is-border| 是否显示表格外框 | boolean
is-stripe | 是否显示表格姗格 | boolean
is-show-row-do-something| 显示操作按钮 | boolean
is-can-sort | 显示排序 | boolean
is-show-index| 显示行号 | boolean
is-show-selection | 显示勾选框 | boolean
row-header| 头部数据源 | array
data | 数据源 | array
table-size| 表格的大小 |String （medium ，mini，small）

### 事件配置注释

事件名称 | 事件解释 | 参数
---|--- |---
onRefresh | 刷新按钮 | 无
onAdd| 增加| bean
onEdit | 修改 | bean
onDel | 删除 | array[bean]
handleEdit| 行编辑 | index, val
handleDelete | 行删除 | index, val
handleSelectionChange |多选 | array[bean]
handleCurrentChange| 单选 |bean


### 使用说明

 <yj-crud-tools/>
 

 支持top left right 三个方位的插槽 
 
###  单保存和取消按钮组
 
      <yj-save-tools @onSave="onSave" @onCancel="onCancel"></yj-save-tools>
      
### 表格搭配按钮组的使用          
      
       <yj-crud-table :is-show-form="showForm"  @onRefresh="onRefresh" :table-size="mini" :is-show-row-do-something="true"
                   :is-can-sort="true" :row-header="heards" :data="tableData" :is-show-index="true" @onAdd="onAdd"
                   :is-show-selection="true" @onSave="onSave" @onCancel="onCancel">
      <input slot="top"></input>
      <yj-search-tools  v-show="!showForm" slot="left">
        <el-button slot="search">测试插槽</el-button>
      </yj-search-tools>
    </yj-crud-table>
    <yj-save-tools/>


