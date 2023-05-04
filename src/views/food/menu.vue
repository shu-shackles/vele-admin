<script lang="ts" setup>
import dayjs from "dayjs";
import TableHeader from "./components/TableHeader.vue";
import { addCategory, addFoods, delCategory, delFoods, getCategories, getFoods, updateCategory, updateFoods } from "/@/api";
import { useDialog } from "/@/components/VeDialog/useDialog";
import { ElForm, ElMessage, ElButton, ElMessageBox } from "element-plus";
import { nanoid } from "nanoid";
import { onMounted, reactive, ref } from "vue";
import { genFileId } from 'element-plus';
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus';


const tableData = ref([]);
const allData = ref([]);
const listData = ref([])
const curPage = ref(1);
const pageLength = ref(0);
const catOp = ref([]);

type FormInstance = InstanceType<typeof ElForm>;

const ruleFormRef = ref<FormInstance>();
const id = ref();
const ruleForm = ref({
  foodName: "",
  price: 0,
  sort: 0,
  isEnable: true,
  categoryId: "",
  description: "",
  image: "",
  imageURL: "",
});
const rules = reactive<any>({
  foodName: [
    {
      required: true,
      message: "请输入菜品名称",
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
  categoryId: [
    {
      required: true,
      message: "请选择所属品类",
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
  description: [
    {
      required: true,
      message: "请输入菜品描述",
      trigger: "blur",
    }
  ],
  price: [
    {
      required: true,
      message: "请输入菜品价格",
      trigger: "blur",
    }
  ],
  image: [
    {
      required: true,
      message: "请上传菜品图片",
      trigger: "change",
    }
  ]
});
const baseUrl = 'https://www.yueyingxuan.online';

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      await updateFoods(id.value, ruleForm.value);
      await getFoodsList();
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
      await addFoods(ruleForm.value);
      await getFoodsList();
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
  title: "编辑菜品",
  center: true,
  destroyOnClose: true,
  closeOnClickModal: false,
});

const [centeredRegister2, { actionDialog: centeredAction2 }] = useDialog({
  title: "新建菜品",
  center: true,
  destroyOnClose: true,
  closeOnClickModal: false,
});

const edit = (row: any) => {
  id.value = row.id;
  ruleForm.value = {
    foodName: row.foodName,
    price: row.price,
    sort: row.sort,
    isEnable: row.isEnable,
    categoryId: row.categoryId.id,
    description: row.description,
    image: row.image,
    imageURL: baseUrl + row.image.url,
  }
  console.log(ruleForm.value);
  centeredAction(true);
}
const deleteFood = (row: any) => {
  id.value = row.id;
  ElMessageBox.confirm('是否确认删除该菜品？',
    '提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    },
  ).then(async () => {
    await delFoods(id.value);
    await getFoodsList();
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
  })
}
const addNew = () => {
  // ruleForm.value.catId = nanoid();
  ruleForm.value = {
    foodName: "",
    price: 0,
    sort: 0,
    isEnable: true,
    categoryId: "",
    description: "",
    image: "",
    imageURL: "",
  }
  centeredAction2(true);
}

const getListData = (data: any) => {
  listData.value = [];
  for(let i = 0; i < data.length; i+=5) {
    const tmp = [];
    for(let j = i; j < i + 5 && j < data.length; j++) {
      tmp.push(data[j]);
    }
    listData.value.push(tmp);
  }
  tableData.value = listData.value[0];
  pageLength.value = listData.value.length;
}

const getFoodsList = async () => {
  const data = await getFoods({
    _sort: "categoryId",
  });
  data.forEach((item: any) => {
    item.created_at = dayjs(item.created_at).format("YYYY-MM-DD HH:mm:ss");
    item.updated_at = dayjs(item.updated_at).format("YYYY-MM-DD HH:mm:ss");
    item.isEnableText = item.isEnable ? "启用" : "禁用";
  });
  allData.value = data;
  getListData(data);
}

watch(curPage, (newVal) => {
  tableData.value = listData.value[newVal - 1];
});

onMounted(async () => {
  await getFoodsList();
  catOp.value = await getCategories();
});
const upload = ref<UploadInstance>()

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  ruleForm.value.image = response[0].id;
  ruleForm.value.imageURL = URL.createObjectURL(uploadFile.raw!);
}

async function onSearch(searchKey: string) {
  const data = allData.value.filter((item: any) =>
    item.foodName.includes(searchKey)
  );
  getListData(data);
}
</script>

<template>
  <TableHeader
    title="菜品管理"
    placeholder="请输入搜索的名字"
    @search="onSearch"
  >
    <slot>
      <ElButton @click="addNew" type="primary">新建</ElButton>
    </slot>
  </TableHeader>
  <el-table :data="tableData" :border="true" stripe style="width: 100%">
    <el-table-column prop="foodName" label="菜品名称" width="120" sortable />
    <el-table-column prop="categoryId.catName" label="所属品类" width="110" sortable />
    <el-table-column prop="sort" label="排序号" width="100" sortable />
    <el-table-column prop="isEnableText" label="是否启用" width="110" sortable />
    <el-table-column prop="price" label="价格" width="80" sortable />
    <el-table-column label="菜品图片" width="106">
      <template v-slot="{ row }">
        <el-image style="width: 80px; height: 80px; border-radius: 50%" :src="`${baseUrl}${row?.image?.url}`"></el-image>
      </template>
    </el-table-column>
    <el-table-column prop="description" label="菜品描述" width="180" show-overflow-tooltip />
    <el-table-column prop="created_at" label="创建时间" sortable />
    <el-table-column prop="updated_at" label="更新时间" sortable />
    <el-table-column fixed="right" label="操作" width="100">
      <template v-slot="{ row }">
        <el-button type="text" size="small" @click="() => edit(row)"
          >编辑</el-button
        >
        <el-button type="text" size="small" @click="() => deleteFood(row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination v-model:current-page="curPage" background layout="prev, pager, next" :page-count="pageLength"
    hide-on-single-page />
  <VeDialog @register="centeredRegister">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      inline
    >
      <el-form-item label="菜品名称" prop="foodName" style="width: calc(100% - 120px)">
        <el-input v-model="ruleForm.foodName" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="所属品类" prop="categoryId">
        <el-select v-model="ruleForm.categoryId" placeholder="请选择">
          <el-option
            v-for="item in catOp"
            :key="item.id"
            :label="item.catName"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="是否启用" prop="isEnable">
        <el-switch v-model="ruleForm.isEnable"></el-switch>
      </el-form-item>
      <el-form-item label="排序号" prop="sort">
        <el-input-number v-model="ruleForm.sort" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="菜品价格" prop="price">
        <el-input-number v-model="ruleForm.price" :min="0" :precision="2"></el-input-number>
      </el-form-item>
      <el-form-item label="菜品描述" prop="description" style="width: calc(100% - 120px)">
        <el-input type="textarea" v-model="ruleForm.description" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="菜品图片" prop="image">
        <el-upload
          class="avatar-uploader"
          :action="`/api/upload`"
          :headers="{Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgxODIxMTcxLCJleHAiOjE2ODQ0MTMxNzF9.r2cF7uQmneg7tXqug4JT2Uc1ukol8jf1A3AHukB19k0'}"
          name="files"
          :show-file-list="false"
          :limit="1"
          :on-exceed="handleExceed"
          :on-success="handleAvatarSuccess"
          :auto-upload="true"
        >
          <template #trigger>
            <img v-if="ruleForm.imageURL" :src="ruleForm.imageURL" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </template>
        </el-upload>
      </el-form-item>
      <div style="margin-left: 120px">
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确认
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </div>
    </el-form>
  </VeDialog>
  <VeDialog @register="centeredRegister2">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      inline
    >
      <el-form-item label="菜品名称" prop="foodName" style="width: calc(100% - 120px)">
        <el-input v-model="ruleForm.foodName" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="所属品类" prop="categoryId">
        <el-select v-model="ruleForm.categoryId" placeholder="请选择">
          <el-option
            v-for="item in catOp"
            :key="item.id"
            :label="item.catName"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="是否启用" prop="isEnable">
        <el-switch v-model="ruleForm.isEnable"></el-switch>
      </el-form-item>
      <el-form-item label="排序号" prop="sort">
        <el-input-number v-model="ruleForm.sort" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="菜品价格" prop="price">
        <el-input-number v-model="ruleForm.price" :min="0" :precision="2"></el-input-number>
      </el-form-item>
      <el-form-item label="菜品描述" prop="description" style="width: calc(100% - 120px)">
        <el-input type="textarea" v-model="ruleForm.description" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="菜品图片" prop="image">
        <el-upload
          class="avatar-uploader"
          :action="`/api/upload`"
          :headers="{Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgxODIxMTcxLCJleHAiOjE2ODQ0MTMxNzF9.r2cF7uQmneg7tXqug4JT2Uc1ukol8jf1A3AHukB19k0'}"
          name="files"
          :show-file-list="false"
          :limit="1"
          :on-exceed="handleExceed"
          :on-success="handleAvatarSuccess"
          :auto-upload="true"
        >
          <template #trigger>
            <img v-if="ruleForm.imageURL" :src="ruleForm.imageURL" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </template>
        </el-upload>
      </el-form-item>
      <div style="margin-left: 120px">
        <el-button type="primary" @click="submitForm2(ruleFormRef)">
          确认
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </div>
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
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>

