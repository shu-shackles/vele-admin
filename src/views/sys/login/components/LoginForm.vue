<template>
  <el-form :model="formData" ref="formRef" label-width="60px">
    <el-form-item label="用户名" prop="identifier">
      <el-input
        v-model="formData.identifier"
        placeholder="please enter username"
      />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="formData.password"
        placeholder="please enter password"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" @click="submitForm">
        提交
      </el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";
import router from "/@/router";
import { userStore } from "/@/store/modules/user";

export default defineComponent({
  setup() {
    const formData = reactive({
      identifier: "",
      password: "",
    });
    const loading = ref(false);
    const formRef = ref();

    function submitForm() {
      loading.value = true;
      formRef.value.validate(async (valid: any) => {
        if (valid) {
          const ans = await userStore.loginAction(formData as any);
          console.log(ans);
          if (!ans) {
            ElMessage.error('用户名或密码错误')
          }
        }
        loading.value = false;
      });
    }

    function resetForm() {
      formData.identifier = '';
      formData.password = '';
    }

    return { formData, formRef, loading, submitForm, resetForm };
  },
});
</script>

<style></style>
