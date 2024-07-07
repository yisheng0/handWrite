<template>
    <div class="app">

      <virtualList
        :data="items"
        visible-count="10"
        item-height="40"
      >

        <template #default="{ data }">
          <div
            v-for="item in data"
            :key="item"
            class="list-item"
          >
            {{ item }}
          </div>
        </template>

      </virtualList>
    </div>
  </template>
  
  <script setup>
  import virtualList from './virtualList.vue'; 
  const items = Array.from({ length: 1000 }).map((_, i) => `Item ${i + 1}`);
  </script>
  
  <style scoped>
  .app {
    width: 100%;
    height: 600px;
  }
  
  .list-item {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    padding: 0 16px;
  }
  </style>