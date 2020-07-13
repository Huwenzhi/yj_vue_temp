<template>
  <div id="app">
    <yj-save-tools @onSave="onSave"/>
   <yj-form  />
  </div>
</template>

<script>
  import YjSaveTools from "@/views/commonview/YjSaveTools";
  import YjForm from "@/views/commonview/YjForm";

  export default {
    name: "formcreat",
    components: {YjForm, YjSaveTools},
    data() {
      return {
        rule: [
          {
            type: 'input',
            field: 'name',
            title: '名称',
            col: {
              span: 12
            },
            validate: [{type: 'string', required: true, message: '请输入名称'}],
            props: {
              type: 'datetimerange'
            },
            emit:['focus'],},
          {
            type: 'input',
            field: 'name2',
            title: '名称2',
            col: {
              span: 12
            },
            emit:['focus'],
            validate: [{type: 'string', required: true, message: '请输入名称2'}]
          },
          {
            type: 'datePicker',
            title: '活动日期',
            field: 'section_day',
            value: ['2018-02-20 12:12:12', '2018-03-20 12:12:12'],
            col: {
              span: 24
            },
            props: {
              type: 'datetimerange'
            }

          },
          {
            type: 'timePicker',
            title: '活动时间',
            field: 'section_time',
            value: ['11:11:11', '22:22:22'],
            props: {
              isRange: true,
              placeholder: "请选择活动时间"
            },
            col: {
              span: 12
            },
          },
          {
            type: 'inputNumber',
            title: '排序',
            field: 'sort',
            value: 0,
            props: {
              precision: 2
            },
            col: {
              span: 12
            },
            validate: [{require: true, type: 'number', min: 10, message: '最小为10'}]
          },
        ]
      }
    },
    methods: {
      inputFocus() {
        this.$message.error('---------')
      },
      onSave() {
        this.fApi.submit((formData, $f) => {
          alert(JSON.stringify(formData));
        })
      }
    }
  }
</script>

<style scoped>

</style>
