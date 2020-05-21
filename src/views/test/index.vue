<template>
<!--    <el-button-->
<!--            slot="left"-->
<!--            class="filter-item"-->
<!--            size="mini"-->
<!--            type="primary"-->
<!--            icon="el-icon-plus"-->
<!--    >复制</el-button>-->


    <yj-table-with-tools-expand :table-size="mini" :is-show-row-do-something="true" :is-can-sort="true" :row-header="heards" :data="tableData" :is-show-index="true" :is-show-selection="true">
        <el-button
                        slot="right"
                        class="filter-item"
                        size="mini"
                        type="primary"
                        icon="el-icon-plus"
                >复制</el-button>
    </yj-table-with-tools-expand>

<!--    <yj-table-with-tools :table-size="mini" :is-show-row-do-something="true" :is-can-sort="true" :row-header="heards" :data="tableData" :is-show-index="true" :is-show-selection="true"/>-->
<!--    <yj-table :table-size="mini" :is-show-row-do-something="true" :is-can-sort="true" :row-header="heards" :data="tableData" :is-show-index="true" :is-show-selection="true"/>-->
</template>
<script>
    import YjTable from "../commonview/YjTable";
    import YjTableWithTools from "../commonview/YjTableWithTools";
    import YjTableWithToolsExpand from "../commonview/YjTableWithToolsExpand";

    export default {
        name: 'Index',
        components: {YjTableWithToolsExpand, YjTableWithTools, YjTable},
        data() {
            return {
                mini:'medium',
                heards: [{prop: "date", label: "日期", sortable: true},
                    {prop: "name", label: "名称", sortable: 'true'},
                    {prop: "address", label: "地址", sortable: "true"}],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        beforeMount() {
            this.getTableHeard()
        },
        methods: {
            getTableHeard() {
                this.heards = [
                    {prop: "date", label: "日期"},
                    {prop: "name", label: "名称"},
                    {prop: "address", label: "地址"},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
