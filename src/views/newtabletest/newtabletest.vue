<template>
  <div id="app">
    <yj-table-pro :column-attributes="columnAttributes" :data="tableData"/>
  </div>
</template>

<script>

  import YjTablePro from "@/views/commonview/YjTablePro";
  export default {
    name: "newtabletest",
    components: {YjTablePro},
    data() {
      return {
        tableData: [
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: false },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true },
          { date: '2018-09-30', content: '123', isDelay: false, delayReason: '', checked: true }
        ],
        columnAttributes: [
          { label: "序号", type: 'index', width: '50', align: 'center' },
          { type: 'selection', align: 'center', width: 55 },
          { label: '日期', prop: 'date', width: '120', align: 'center', sortable: true },
          { label: '工作内容', prop: 'content', headerAlign: 'center',  align: 'center' },
          { label: '工期是否延误', prop: 'isDelay', headerAlign: 'center', width: 130 },
          { label: '延误原因', prop: 'delayReason', headerAlign: 'center' }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
