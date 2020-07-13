<template>
  <!--  <FormCreate :rule="rule" v-model="fApi" :option="options" @name-focus="inputFocus" @name2-focus="inputFocus2"/>-->
  <FormCreate :rule="rule" v-model="fApi" :option="options" @prefix1-focus="focus" @prefix1-change="change"/>

</template>

<script>
  export default {
    name: "YjForm",
    data() {
      return {
        fApi: {},
        options: {
          onSubmit: (formData) => {
            alert(JSON.stringify(formData));
          }
        },
        rule: JSON.parse(
          '[{"type":"input","field":"inputField","title":"change 事件","emit":[{"name":"focus","inject":"hu"},{"name":"change","inject":"hu2"}],"emitPrefix":"prefix1","validate":[],"col":{"span":24},"props":{},"on":{},"options":[],"value":null},' +
          '{"type":"input","field":"inputField2","title":"blur 事件","emit":[{"name":"focus","inject":true}],"emitPrefix":"prefix1","validate":[],"col":{"span":24},"props":{},"on":{},"options":[],"value":null}]')

      }
    },
    beforeCreate() {
    },
    methods: {
      inputFocus() {
        this.$message.error('-----111----')
      },
      inputFocus2() {
        this.$message.error('-----22----')
      },

      // change(inject){
      //   this.$message.error('-----111----')
      //   // alert(`change: ${inject.inject}[${inject.$f.getValue('inputField')}]`);
      // },
      // common(){
      //   console.log(JSON.stringify(this.rule))
      //   this.$message.success('2')
      // },
      change(inject) {
        console.log(inject.inject)
      },
      focus(inject) {
        // alert(`blur: ${inject.self.test}`);
        console.log(inject.inject)
        console.log(JSON.stringify(this.rule))
        // this.$message.success(inject+'')
        // this.$message.error(`${inject.self.title}`)
        let title = (`${inject.self.title}`)

        switch (title) {
          case 'change 事件':
            this.$message.success('1')

            break
          case 'blur 事件':
            this.$message.success('2')
            break

        }
      }
    }

  }
</script>

<style scoped>

</style>
