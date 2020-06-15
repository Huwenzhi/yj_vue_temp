<template>
    <div>
     <yj-save-tools @onSave="onSave" @onCancel="onCancel"></yj-save-tools>
      <input />
    </div>
</template>

<script>
    import YjSaveTools from "@/views/commonview/YjSaveTools";
    export default {
        name: "formtest",
      components: {YjSaveTools},
      methods:{
        onSave(){},
        onCancel(){}
      }
    }
</script>

<style scoped>

</style>
