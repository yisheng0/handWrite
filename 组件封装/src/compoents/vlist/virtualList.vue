<template>
  <div class="vistual-list-outer" :style="{height: visibleHeight + 'px',}" @scroll="handleScroll">
    <div class="vistual-list-inner" :style="{height: totalHeight + 'px'}">
      <div class="wrapper" :style="{ transform: `translateY(${curScroll}px)`}">
      <slot :data="curVisible" :scroll="curScroll" />
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed } from 'vue';
function throttle(func, wait) {
  let inThrottle;
  let lastRan = 0;

  return function () {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = +new Date();
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, wait);
    }
  };
}

const props = defineProps<{
  data: any[];
  //可视区域的元素个数
  visibleCount: number;
  //每一个元素的高度
  itemHeight: number;
}>();

defineSlots<{
  default(props: { data: any; scroll: number }): any;
}>();

const { data, visibleCount, itemHeight } = toRefs(props);
const visibleHeight = computed(() => visibleCount.value * itemHeight.value);
const totalHeight = computed(() => data.value.length * itemHeight.value);

const curScroll = ref<number>(0);
const startIndex = ref<number>(0);
const endIndex = ref<number>(visibleCount.value);

const curVisible = computed(() =>
  data.value.slice(startIndex.value, endIndex.value)
);

const calculate = throttle(() => {
  if (curScroll.value + visibleHeight.value > totalHeight.value) return;
  startIndex.value = Math.floor(curScroll.value / itemHeight.value);
  endIndex.value = Math.floor(
    (curScroll.value + visibleHeight.value) / itemHeight.value
  );
}, 50);
const handleScroll = (e: any) => {
  curScroll.value = e.target.scrollTop;
  calculate();
};
</script>

<style scoped>
.vistual-list-outer {
  overflow: auto;
}
</style>