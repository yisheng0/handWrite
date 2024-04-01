<template>
  <div class="vistual-list-outer" :style="{
    height: visibleHeight + 'px',
  }" @scroll="handleScroll">

    <div class="vistual-list-inner" :style="{
      height: totalHeight + 'px',
    }">
      <div class="wrapper" :style="{
        transform: translateY(`${curScroll}px`),
      }">
        <slot :data="curVisible" :scroll="curScroll" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, computed } from 'vue';
import { throttle } from 'lodash-es';

export default {
  props: {
    data: Array,
    //可视区域的元素个数
    visibleCount: Number,
    //每一个元素的高度
    itemHeight: Number,
  },
  slots: {
    default: function (props) {
      return props.data;
    },
  },
};

const { data, visibleCount, itemHeight } = toRefs(props);
const visibleHeight = computed(() => visibleCount.value * itemHeight.value);
const totalHeight = computed(() => data.value.length * itemHeight.value);
const curScroll = ref(0);

const startIndex = ref(0);
const endIndex = ref(visibleCount.value);

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
const handleScroll = (e) => {
  curScroll.value = e.target.scrollTop;
  calculate();
};
</script>

<style lang="less" scoped>
.vistual-list-outer {
  overflow: auto;
}
</style>
