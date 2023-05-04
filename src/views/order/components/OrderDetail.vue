<template>
  <el-dialog
    v-model="dialogVisible"
    title="订单菜品详情"
    width="50%"
    center
  >
  <el-table :data="data" :border="true" stripe style="width: 100%">
    <el-table-column prop="foodName" label="名称" width="360" sortable />
    <el-table-column prop="price" label="价格" width="180" sortable />
    <el-table-column prop="amount" label="例数" sortable />
  </el-table>
  </el-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import { ElDialog } from 'element-plus'
export default {
  name: 'OrderDetail',
  components: { ElDialog },
  setup() {
    const dialogVisible = ref(false);
    const data = ref(null)
    return {
      dialogVisible,
      data,
    }
  }
}

</script>

<style>
.el-dialog__body {
  max-height: 50vh;
  overflow: auto;
}
</style>