<template>
    <div class="virtual-list-outer" ref="scrollContainer" @scroll="handleScroll">
      <div class="virtual-list-inner" :style="{ height: totalHeight + 'px' }">
        <div v-for="(item, index) in visibleItems" :key="item.key" :style="{ transform: `translateY(${itemTop(index)}px)` }">
          <slot :data="item.data"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed, onMounted, watch } from 'vue';
  
  const props = defineProps({
    items: Array,
    estimatedItemHeight: Number
  });
  
  const state = reactive({
    itemHeights: new Map(),
    itemPositions: new Map(),
    totalHeight: 0,
    start: 0,
    end: props.items.length
  });
  
  const scrollContainer = ref(null);
  
  const visibleItems = computed(() => {
    return props.items.slice(state.start, state.end);
  });
  
  const itemTop = (index) => {
    return state.itemPositions.get(props.items[index].key) || 0;
  };
  
  const updatePositions = () => {
    let position = 0;
    props.items.forEach((item, index) => {
      state.itemHeights.set(item.key, item.height || props.estimatedItemHeight);
      state.itemPositions.set(item.key, position);
      position += state.itemHeights.get(item.key);
    });
    state.totalHeight = position;
  };
  
  const binarySearch = (value) => {
    let low = 0;
    let high = props.items.length;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let midValue = state.itemPositions.get(props.items[mid].key) || 0;
      if (midValue === value) {
        return mid;
      } else if (midValue < value) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return low > 0 ? low - 1 : 0;
  };
  
  const handleScroll = () => {
    const scrollTop = scrollContainer.value.scrollTop;
    const startIndex = binarySearch(scrollTop);
    const endIndex = binarySearch(scrollTop + scrollContainer.value.clientHeight);
    state.start = startIndex;
    state.end = endIndex;
  };
  
  onMounted(() => {
    updatePositions();
  });
  
  watch(() => props.items, () => {
    updatePositions();
  });
  </script>
  
  <style scoped>
  .virtual-list-outer {
    overflow-y: auto;
  }
  .virtual-list-inner {
    position: relative;
  }
  </style>
  