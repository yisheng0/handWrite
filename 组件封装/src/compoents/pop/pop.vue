<template>
    pop
    <button @click="close">关闭</button>
</template>
<script setup>
let {modelValue} = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
let  emit  = defineEmits(['update:modelValue'])
function close() {
    emit('update:modelValue', false)
}
</script>