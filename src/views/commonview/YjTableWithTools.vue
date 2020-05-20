<template>

<div>
    <yj-table-tools>
        <el-button
                slot="left"
                class="filter-item"
                size="mini"
                type="primary"
                icon="el-icon-plus"
        >复制</el-button>
    </yj-table-tools>
    <yj-table/>
</div>

</template>

<script>
    import YjTable from "./YjTable";
    import YjTableTools from "./YjTableTools";
    export default {
        name: "YjTableWithTools",
        components: {YjTableTools, YjTable}
    }
</script>

<style scoped>

</style>
