<template>
<el-tree
  :data="data"
  node-key="id"
  default-expand-all
  @node-drag-start="handleDragStart"
  @node-drag-enter="handleDragEnter"
  @node-drag-leave="handleDragLeave"
  @node-drag-over="handleDragOver"
  @node-drag-end="handleDragEnd"
  @node-drop="handleDrop"
  draggable
  :allow-drop="allowDrop"
  :allow-drag="allowDrag">
</el-tree>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '一级 1',
          parentid:0,
          children: [{
            id: 4,
            label: '二级 1-1',
            parentid:1,
            children: [{
              parentid:4,
              id: 9,
              label: '三级 1-1-1'
            }, {
              parentid:4,
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          parentid:0,
          children: [{
            parentid:2,
            id: 5,
            label: '二级 2-1'
          }, {
            parentid:2,
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          parentid:0,
          id: 3,
          label: '一级 3',
          children: [{
            parentid:3,
            id: 7,
            label: '二级 3-1'
          }, {
            parentid:3,
            id: 8,
            label: '二级 3-2',
            children: [{
              parentid:8,
              id: 11,
              label: '三级 3-2-1'
            }, {
              parentid:8,
              id: 12,
              label: '三级 3-2-2'
            }, {
              parentid:8,
              id: 13,
              label: '三级 3-2-3'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode && dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        // console.log('tree drop: ', dropNode.label, dropType);
        console.log(draggingNode,'----draggingNode')
        draggingNode.data.parentid=dropNode.data.id
        console.log(dropNode,'----dropNode')
        console.log(dropType,'----dropType')
        console.log(this.data,'----完成')
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === '二级 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
      }
    }
  }
</script>
<style scoped>

</style>
