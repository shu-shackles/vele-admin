<script lang="ts" setup>
import dayjs from "dayjs";
import TableHeader from "./components/TableHeader.vue";
import { addCategory, delCategory, getCategories, getOrders, updateCategory, updateOrder, updateTables } from "/@/api";
import { useDialog } from "/@/components/VeDialog/useDialog";
import { ElForm, ElMessage, ElButton, ElMessageBox } from "element-plus";
import { nanoid } from "nanoid";
import OrderDetail from './components/OrderDetail.vue';

const tableData = ref([]);
const allData = ref([]);

type FormInstance = InstanceType<typeof ElForm>;

const id = ref();
const ruleForm = ref({
  catName: "",
  isEnable: true,
  sort: 0,
});
const rules = reactive<any>({
  catName: [
    {
      required: true,
      message: "请输入品类名称",
      trigger: "blur",
    },
  ],
  isEnable: [
    {
      required: true,
      message: "请选择是否启用",
      trigger: "change",
    },
  ],
  sort: [
    {
      required: true,
      message: "请输入排序号",
      trigger: "blur",
    },
  ],
});

const openDetail = (row: any) => {
  const list = []
  orderDetailRef.value.dialogVisible = true
  row.foods.forEach((food) => {
    const data = {}
    data.foodName = food.foodName
    data.price = food.price
    Object.keys(row.foodAmount).forEach((amount) => {
      if (amount == food.id) {
        data.amount = row.foodAmount[amount]
      }
    })
    list.push(data)
  })
  orderDetailRef.value.data = list
  console.log(list)
}
const pay = (row: any) => {
  id.value = row.id;
  ElMessageBox.confirm('是否确认该顾客已支付？',
    '提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    },
  ).then(async () => {
    await updateOrder(id.value, {
      status: true
    });
    await updateTables(row.table.tableId, {
      isAvailable: true,
    });
    await getOrdersList();
    ElMessage({
      type: 'success',
      message: '支付成功'
    })
  })
}
const getOrdersList = async () => {
  let data = await getOrders({
    _sort: 'created_at'
  });
  data = data.reverse()
  data.forEach((item: any) => {
    item.created_at = dayjs(item.created_at).format("YYYY-MM-DD HH:mm:ss");
    if (!item.status) {
      item.updated_at = '-';
    } else {
      item.updated_at = dayjs(item.updated_at).format("YYYY-MM-DD HH:mm:ss");
    }
    item.statusText = item.status ? "已完单" : "未完单";
  });
  allData.value = data;
  getListData(data);
}

onMounted(async () => {
  await getOrdersList();
});
const listData = ref([])
const pageLength = ref(0)
const curPage = ref(1)
const getListData = (data: any) => {
  listData.value = [];
  for(let i = 0; i < data.length; i+=10) {
    const tmp = [];
    for(let j = i; j < i + 10 && j < data.length; j++) {
      tmp.push(data[j]);
    }
    listData.value.push(tmp);
  }
  tableData.value = listData.value[0];
  pageLength.value = listData.value.length;
}
watch(curPage, (newVal) => {
  // console.log(ruleFormRef);
  tableData.value = listData.value[newVal - 1];
});
async function onSearch(searchKey: string) {
  const realSearchKey = {
    _sort: 'created_at',
  }
  if (searchKey?.orderId !== '') {
    realSearchKey.orderId = searchKey.orderId;
  }
  if (searchKey?.['user.username'] !== '') {
    realSearchKey['user.username_contains'] = searchKey?.['user.username'];
  }
  if (searchKey?.status !== '') {
    realSearchKey.status = searchKey?.status;
  }
  console.log(searchKey?.createTime)
  if (searchKey?.createTime?.length) {
    realSearchKey.created_at_gte = dayjs(searchKey?.createTime[0]).format("YYYY-MM-DD HH:mm:ss");
    realSearchKey.created_at_lt = dayjs(searchKey?.createTime[1]).format("YYYY-MM-DD HH:mm:ss");
  }
  if (searchKey?.updateTime?.length) {
    realSearchKey.updated_at_gte = dayjs(searchKey?.updateTime[0]).format("YYYY-MM-DD HH:mm:ss");
    realSearchKey.updated_at_lt = dayjs(searchKey?.updateTime[1]).format("YYYY-MM-DD HH:mm:ss");
  }
  let data = await getOrders(realSearchKey);
  data = data.reverse()
  data.forEach((item: any) => {
    item.created_at = dayjs(item.created_at).format("YYYY-MM-DD HH:mm:ss");
    if (!item.status) {
      item.updated_at = '-';
    } else {
      item.updated_at = dayjs(item.updated_at).format("YYYY-MM-DD HH:mm:ss");
    }
    item.statusText = item.status ? "已完单" : "未完单";
  });
  allData.value = data;
  getListData(data);
}
const orderDetailRef = ref(null)
</script>

<template>
  <TableHeader
    title="订单管理"
    placeholder="请输入搜索的名字"
    @search="onSearch"
  >
  </TableHeader>
  <el-table :data="tableData" :border="true" stripe style="width: 100%">
    <el-table-column prop="orderId" label="订单编号" width="110" />
    <el-table-column prop="user.username" label="顾客手机号" width="150" />
    <el-table-column prop="table.id" label="就餐桌号" width="120" sortable />
    <el-table-column prop="totalPrice" label="订单总价" width="120" sortable />
    <el-table-column prop="statusText" label="订单状态" width="120" sortable />
    <el-table-column prop="created_at" label="下单时间" sortable />
    <el-table-column prop="updated_at" label="完单时间" sortable />
    <el-table-column fixed="right" label="操作" width="120">
      <template v-slot="{ row }">
        <el-button type="text" size="small" @click="() => pay(row)" :disabled="row.status"
          >支付</el-button
        >
        <el-button type="text" size="small" @click="() => openDetail(row)"
          >详情</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination v-model:current-page="curPage" background layout="prev, pager, next" :page-count="pageLength"
    hide-on-single-page />
  <OrderDetail ref="orderDetailRef"/>
</template>

<style lang="less" scoped>
.tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .title {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
