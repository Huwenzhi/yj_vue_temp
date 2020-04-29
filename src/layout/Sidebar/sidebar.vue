<template>
    <div>
        <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
                :background-color="variables.menuBg"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
                :collapse-transition="false"
                mode="vertical"
                style="min-height:100vh;width:230px;">
            <sidebar-item></sidebar-item>
        </el-menu>
        </el-scrollbar>
    </div>
</template>
<script>
    import variables from '@/assets/styles/variables.scss'
    import SidebarItem from "./SidebarItem";

    export default {
        name: "sidebar",
        components: {SidebarItem},
        computed: {
            variables() {
                return variables
            },
            isCollapse() {
                // return !this.sidebar.opened
                return false
            }
        }
    }
</script>

<style scoped>

</style>
