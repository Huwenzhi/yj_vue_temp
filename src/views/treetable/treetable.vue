<template>
  <yj-tree-table :tree-data="data" :span='4' :table-data="tableData" :table-header="headers"/>
</template>

<script>
  import YjTreeTable from "@/views/commonview/YjTreeTable";
  import YjTree from "@/views/commonview/YjTree";

  export default {
    name: "treetable",
    components: {YjTree, YjTreeTable},
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        sapn: 6,
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        headers: [
          {prop: "date", label: "日期"},
          {prop: "name", label: "名称"},
          {prop: "address", label: "地址"},
          {prop: "address2", label: "地址2"}
        ],
        tableData: [
          {
            date: '2020-01-01',
            name: '0202020',
            address: '000',
            address2: '000'
          }
        ]

      }
    },

  }
</script>

<style scoped>

</style>
