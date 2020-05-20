<template>
    <elFrame :src="url" />

</template>

<script>
    import elFrame from '@/components/Iframe/index'
    export default {
        name: "dd",
        components: { elFrame },
        data(){
          return{
              url:'http://10.10.25.128:6969/',
          }
        },
    }
</script>

<style scoped>

</style>
