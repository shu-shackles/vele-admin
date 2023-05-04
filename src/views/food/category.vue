<script lang="ts" setup>
import dayjs from "dayjs";
import TableHeader from "./components/TableHeader.vue";
import { addCategory, delCategory, getCategories, updateCategory } from "/@/api";
import { useDialog } from "/@/components/VeDialog/useDialog";
import { ElForm, ElMessage, ElButton, ElMessageBox } from "element-plus";
import { nanoid } from "nanoid";

const tableData = ref([]);
const allData = ref([]);

type FormInstance = InstanceType<typeof ElForm>;

const ruleFormRef = ref<FormInstance>();
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

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      await updateCategory(id.value, ruleForm.value);
      await getCategoriesList();
      centeredAction(false);
      ElMessage.success('修改成功');
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const submitForm2 = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      await addCategory(ruleForm.value);
      await getCategoriesList();
      centeredAction2(false);
      ElMessage.success('新建成功');
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const [centeredRegister, { actionDialog: centeredAction }] = useDialog({
  title: "编辑品类",
  center: true,
  destroyOnClose: true,
  closeOnClickModal: false,
});

const [centeredRegister2, { actionDialog: centeredAction2 }] = useDialog({
  title: "新建品类",
  center: true,
  destroyOnClose: true,
  closeOnClickModal: false,
});

const edit = (row: any) => {
  id.value = row.id;
  ruleForm.value = {
    catName: row.catName,
    isEnable: row.isEnable,
    sort: row.sort,
  }
  centeredAction(true);
}
const deleteCat = (row: any) => {
  id.value = row.id;
  ElMessageBox.confirm('是否确认删除该品类？',
    '提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    },
  ).then(async () => {
    await delCategory(id.value);
    await getCategoriesList();
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
  })
}
const addNew = () => {
  ruleForm.value.catId = nanoid();
  centeredAction2(true);
}

const getCategoriesList = async () => {
  const data = await getCategories({
    _sort: "sort",
  });
  data.forEach((item: any) => {
    item.created_at = dayjs(item.created_at).format("YYYY-MM-DD HH:mm:ss");
    item.updated_at = dayjs(item.updated_at).format("YYYY-MM-DD HH:mm:ss");
    item.foodsLength = item.foods.length;
    item.foodsList = [];
    item.foods.forEach((food: any) => {
      item.foodsList.push(food.foodName);
    });
    item.foodsList = item.foodsList.join("<br>");
    item.isEnableText = item.isEnable ? "启用" : "禁用";
  });
  tableData.value = allData.value = data;
}

onMounted(async () => {
  await getCategoriesList();
});

async function onSearch(searchKey: string) {
  tableData.value = allData.value.filter((item: any) =>
    item.catName.includes(searchKey)
  );
}
</script>

<template>
  <TableHeader
    title="品类管理"
    placeholder="请输入搜索的名字"
    @search="onSearch"
  >
    <slot>
      <ElButton @click="addNew" type="primary">新建</ElButton>
    </slot>
  </TableHeader>
  <el-table :data="tableData" :border="true" stripe style="width: 100%">
    <el-table-column prop="sort" label="排序号" width="100" sortable />
    <el-table-column prop="catName" label="品类名称" width="200" sortable />
    <el-table-column
      prop="isEnableText"
      label="是否启用"
      width="120"
      sortable
    />
    <el-table-column prop="foodsLength" label="包含菜品" width="120" sortable>
      <template v-slot="{ row }">
        <el-tooltip placement="top">
          {{ row.foodsLength }}
          <template #content>
            <div v-html="row.foodsList"></div>
          </template>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column prop="created_at" label="创建时间" sortable />
    <el-table-column prop="updated_at" label="更新时间" sortable />
    <el-table-column fixed="right" label="操作" width="120">
      <template v-slot="{ row }">
        <el-button type="text" size="small" @click="() => edit(row)"
          >编辑</el-button
        >
        <el-button type="text" size="small" @click="() => deleteCat(row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <VeDialog @register="centeredRegister">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="品类名称" prop="catName">
        <el-input v-model="ruleForm.catName" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="排序号" prop="sort">
        <el-input-number v-model="ruleForm.sort" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="是否启用" prop="isEnable">
        <el-switch v-model="ruleForm.isEnable"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确认
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </VeDialog>
  <VeDialog @register="centeredRegister2">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="品类名称" prop="catName">
        <el-input v-model="ruleForm.catName" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="排序号" prop="sort">
        <el-input-number v-model="ruleForm.sort" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="是否启用" prop="isEnable">
        <el-switch v-model="ruleForm.isEnable"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm2(ruleFormRef)">
          确认
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </VeDialog>
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
