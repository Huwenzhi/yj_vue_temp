<template>
    <div>
    <pre>
      前端分页+动态列案例：
      （使用方式基本和原生 el-table 一样）
      1、开启动态列功能：设置dynamicColumnSetting属性为true
      2、设置初始隐藏的列下标数组：设置columnVisibles属性，列下标从0开始
      3、设置不允许隐藏的列下标数组：设置alwaysShowColumnIndexs属性，列下标从0开始
      4、通过展示列设置功能动态设置展示列
    </pre>

        <PageTable
                :data="tableData"
                :dynamicColumnSetting="true"
                :hidenColumnIndexs="[3]"
                :alwaysShowColumnIndexs="[1,5]"
                :pageSizes="[5,10]"
                :pageSize="5"
                ref="dataTable"
        >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="账号" prop="name"></el-table-column>
            <el-table-column label="名称" prop="nickname"></el-table-column>
            <el-table-column label="邮箱" prop="email"></el-table-column>
            <el-table-column label="状态">
                <template slot-scope="scope">{{ scope.row.state%2===0?'正常':'锁定' }}</template>
            </el-table-column>
            <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                    <el-button size="small" type="text" @click.stop="clickFunc(scope.row)">操作按钮</el-button>
                </template>
            </el-table-column>
        </PageTable>
    </div>
</template>

<script>
    import PageTable from "../commonview/page-table";
    export default {
        name: "index",
        components: {PageTable},
        data() {
            return {
                tableData: []
            };
        },
        methods: {
            queryData() {
                // 模拟后台数据
                let data = [];
                for (var i = 1; i <= 2300; i++) {
                    data.push({ name: i, nickname: i, email: i, state: i });
                }

                this.tableData = data;
            },
            clickFunc(row) {
                // console.log(row);
                alert(JSON.stringify(row));
            }
        },
        mounted() {
            // 发起查询请求
            this.queryData();
        }
    }
</script>

<style lang="scss"  scoped>

</style>
