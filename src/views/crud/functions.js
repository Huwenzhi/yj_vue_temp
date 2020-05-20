var myVue = {}

const Sm = {

  beforeCreate() {},
  methods: {
    add(res) {
      cus.adds(res)
    }
  },
  created() {},
  destroyed() {},
  mounted() {}

}

const cus = {
  adds: (res) => {
    // console.log(res)
  }
}

myVue.Sm = Sm
myVue.cus = cus
export default myVue
