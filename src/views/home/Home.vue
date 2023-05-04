<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <div>总销售额</div>
          </div>
        </template>
        <div class="info">
          <div>￥ {{ totalPrice }}</div>
          <el-icon>
            <data-analysis />
          </el-icon>
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <div>{{ `${curYear}年${curMonth}` }}月销售额</div>
          </div>
        </template>
        <div class="info">
          <div>￥ {{ monthPrice }}</div>
          <el-icon>
            <shopping-cart />
          </el-icon>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <!-- <el-row class="chart-container">
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div>总销量</div>
        </template>
        <div class="chartPie" ref="chartThreeRef"></div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div>总销量</div>
        </template>
        <div class="chartPie" ref="chartFourRef"></div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card>
        <template #header>
          <div>总销量</div>
        </template>
        <div class="chartPie" ref="chartFiveRef"></div>
      </el-card>
    </el-col>
  </el-row> -->
  <el-row class="chart-container">
    <!-- <el-col :span="12">
      <el-card class="box-card">
        <template #header>
          <div>总销量</div>
        </template>
        <div class="chart" ref="chartOneRef"></div>
      </el-card>
    </el-col> -->
    <el-col :span="24">
      <el-card>
        <template #header>
          <div>过去7天销售量折线图</div>
        </template>
        <div class="chart" ref="chartTwoRef"></div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { DataAnalysis, Sell, ShoppingCart, Trophy } from "@element-plus/icons";
import dayjs from "dayjs";
import * as echarts from "echarts";
import {
  // chartOneOptions,
  chartTwoOptions,
  // chartFiveOptions,
  // chartFourOptions,
  // chartThreeOptions,
} from "./const";
import { getOrders } from "/@/api";

// const chartOneRef = ref<HTMLElement>();
const chartTwoRef = ref<HTMLElement>();
// const chartThreeRef = ref<HTMLElement>();
// const chartFourRef = ref<HTMLElement>();
// const chartFiveRef = ref<HTMLElement>();
const totalPrice = ref('');
const monthPrice = ref('');
const curMonth = ref(0);
const curYear = ref(0);

// 正则表达式
const toThousands = (num = 0) => {
   return num.toString().replace(/\d+/, function(n) {
      return n.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
   });
};

onMounted(async () => {
  const date = new Date();
  curYear.value = date.getFullYear();
  curMonth.value = date.getMonth() + 1;
  const orders = await getOrders({status: true});
  let totalP = 0;
  let monthP = 0;
  orders.forEach((order: any) => {
    totalP += order?.totalPrice;
    if (new Date(order?.updatedAt).getFullYear() === curYear.value
      && new Date(order?.updatedAt).getMonth() + 1 === curMonth.value) {
        monthP += order?.totalPrice;
      }
  })
  totalPrice.value = toThousands(totalP);
  monthPrice.value = toThousands(monthP);
  const oneDay = 24*60*60*1000;
  const now = Date.now();
  const sevenDays = [];
  const sevenDaysMoney = [];
  const tomorrow = dayjs(now + oneDay).format('YYYY-MM-DD');
  for (let i = 6 ; i >= 0; i--) {
    sevenDays.push(dayjs(now - oneDay * i).format('YYYY-MM-DD'))
  }
  chartTwoOptions.xAxis[0].data = structuredClone(sevenDays);
  sevenDays.push(tomorrow);
  for (let i = 0; i < 7; i++) {
    let money = 0;
    const res = await getOrders({
      status: true,
      updated_at_gte: sevenDays[i],
      updated_at_lt: sevenDays[i + 1],
    })
    res.forEach((item: any) => {
      money += item.totalPrice;
    })
    sevenDaysMoney.push(money);
  }
  chartTwoOptions.series[0].data = structuredClone(sevenDaysMoney);

  // const chartOne = echarts.init(chartOneRef.value as HTMLElement);
  const chartTwo = echarts.init(chartTwoRef.value as HTMLElement);
  // const chartThree = echarts.init(chartThreeRef.value as HTMLElement);
  // const chartFour = echarts.init(chartFourRef.value as HTMLElement);
  // const chartFive = echarts.init(chartFiveRef.value as HTMLElement);
  // chartOne.setOption(chartOneOptions);
  chartTwo.setOption(chartTwoOptions);
  // chartThree.setOption(chartThreeOptions);
  // chartFour.setOption(chartFourOptions);
  // chartFive.setOption(chartFiveOptions);
});
</script>

<style lang="less" scoped>
:deep(.el-card__header) {
  padding: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  padding: 10px 0;

  svg {
    font-size: 20px;
  }
}

.chart-container {
  padding: 20px 0;

  .box-card {
    width: calc(100% - 20px);
  }

  .chart {
    width: 100%;
    height: 300px;
  }

  .chartPie {
    width: 100%;
    height: 260px;
  }
}
</style>
