import Vue from 'vue';
import Skeleton from './views/skeleton/skeleton.vue';

export default new Vue({
  components: {
    Skeleton,
  },
  render: h => h(Skeleton),
});
