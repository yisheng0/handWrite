<template>

<button @click="show=true">显示</button>
<div v-show="show">
   <pop v-model="show"></pop> 
</div>

</template>
<script setup>
import { ref } from 'vue';
let show = ref(false);
import pop from './pop.vue';
</script>