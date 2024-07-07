<template>
    <div class="container">
      <div class="handle">拖动我</div>
      <div ref="targetRef" class="draggable">这是一个可拖动的元素</div>
    </div>
  </template>
  <script setup>
import { ref } from 'vue';
import {useDraggable} from './useDraggable ';

const targetRef = ref(null);
const draggable = ref(true); // 控制拖动功能的开关
const overflow = ref(false); // 控制是否允许超出父元素边界

useDraggable(targetRef, draggable, overflow);
</script>
<style>
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #000;
}

.handle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 30px;
  background-color: #f00;
  cursor: move;
}

.draggable {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  background-color: #0f0;
}
</style>