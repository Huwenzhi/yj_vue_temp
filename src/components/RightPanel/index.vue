<template>
  <el-drawer

          wrapperClosable
          :visible.sync="clickNotClose"
          :direction="direction"
          :before-close="handleClose">
    <slot />
  </el-drawer>
</template>

<script>

export default {
  name: 'RightPanel',
  props: {
    clickNotClose: {
      default: false,
      type: Boolean
    },
    buttonTop: {
      default: 250,
      type: Number
    }
  },

      data(){
        return{
          drawer:true,
          direction: 'rtl',
        }

  },

  methods: {
    handleClose(){
      this.$emit('handleClose',false)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
