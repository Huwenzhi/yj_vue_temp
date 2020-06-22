<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div ref="topref" :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view />
      </div>
      <div :style="{'margin-top':topHeight+'px'}" ref="getheight">
        <app-main/>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  mixins: [ResizeMixin],
  data(){
    return{
      topHeight:'0px'
    }
  },
  beforeMount() {
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        // that.screenWidth =
        console.log('width=',window.screenWidth)
      })()
    }
    window.onresize = () => {
      return (() => {
        window.screenHeight= document.body.clientHeight
        // that.screenWidth =
        console.log('height=',window.screenHeight)
      })()
    }

    this.$nextTick(() => { // 页面渲染完成后的回调

      // 获取高度值 （内容高+padding+边框）
      let height= this.$refs.topref.offsetHeight;

      // 获取元素样式值 （存在单位）
      let height1 = window.getComputedStyle(this.$refs.topref).height;

      //获取元素内联样式值（非内联样式无法获取）
      let height2 = this.$refs.topref.style.height;
      this.topHeight=height
      sessionStorage.setItem('top',height)

      console.log(height,'--top--',height1,'---',height2,'----',document.documentElement.clientHeight,'---', window.innerHeight)
    })
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    // needTagsView() {
    //   return this.$store.state.settings.tagsView;
    // },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
