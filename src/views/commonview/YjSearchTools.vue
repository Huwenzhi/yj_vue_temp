<template>
    <div style="display: inline-block;margin-left: 10px">
        <el-button
                class="filter-item"
                size="mini"
                type="primary"
                icon="el-icon-plus"
                @click="search">查询</el-button>
        <right-panel @handleClose="handleClose" :click-not-close="clickNotClose">
            <slot name="search"/>
        </right-panel>
    </div>


</template>

<script>
    import RightPanel from "../../components/RightPanel/index";

    export default {
        name: "YjSearchTools",
        components: {RightPanel},
        data() {
            return {
                clickNotClose: false
            }
        },
        methods: {
            search() {
                this.clickNotClose = true
            },
            handleClose(val) {
                this.clickNotClose = val
            }
        }
    }
</script>

<style scoped>

</style>
