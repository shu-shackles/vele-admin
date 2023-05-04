<script lang="ts" setup>
const searchKey = ref({
  orderId: '',
  'user.username': '',
  status: '',
  createTime: [],
  updateTime: [],
});
const statusOptions = [
  {
    label: '已完单',
    value: 'true',
  },
  {
    label: '未完单',
    value: 'false',
  }
]
defineProps<{ title: string; placeholder?: string }>();
const emit = defineEmits(["search"]);
function onSearch() {
  emit("search", searchKey.value);
}
function clear() {
  searchKey.value = {
    orderId: '',
    'user.username': '',
    status: '',
    createTime: [],
    updateTime: [],
  };
}
</script>

<template>
  <div class="table-header-container">
    <div class="title">{{ title }}</div>
  </div>
  <div class="table-header-container" style="margin-bottom: 10px;">
    <el-form
      ref="searchRef"
      :model="searchKey"
      label-width="85px"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="订单编号" prop="orderId">
            <el-input
              class="input"
              v-model="searchKey.orderId"
              placeholder="请输入订单编号"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="顾客手机号" prop="user.username">
            <el-input
              class="input"
              v-model="searchKey['user.username']"
              placeholder="请输入顾客手机号，支持模糊搜索"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="订单状态" prop="status">
            <el-select v-model="searchKey.status" placeholder="请选择订单状态" clearable>
              <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="9">
          <el-form-item label="下单日期" prop="createTime">
            <el-date-picker
              v-model="searchKey.createTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="完单日期" prop="updateTime">
            <el-date-picker
              v-model="searchKey.updateTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button @click="onSearch" type="primary">搜索</el-button>
            <el-button @click="clear()">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.table-header-container {
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin-bottom: 20px;

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .search {
    display: flex;

  }

  .input {
      margin-right: 10px;
    }
}
</style>
