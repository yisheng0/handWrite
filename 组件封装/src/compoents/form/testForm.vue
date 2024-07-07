<script setup>
import { ref, reactive, markRaw, shallowRef } from 'vue'
let { registerCom } = defineProps({
    registerCom: Object
})
let buttonArr = shallowRef([{ com: "input", name: "input" }])
buttonArr.value = buttonArr.value.concat(registerCom || [])

let formArr = reactive([])

let valueArr = reactive([]);

function addForm(com,props) {
    formArr.push({ 
        com: typeof com === "string" ? com : markRaw(com), 
        props: props || {}
    })
}

function formInput(e){
    let _index = e.target.getAttribute("sort")
    if(_index){
        valueArr[_index] = e.target.value
    }
}
</script>
<template>
    <form @click.prevent  @input="formInput">
        {{ valueArr }}
        <div v-for="(item, index) in formArr" :key="index">
            <component v-if="typeof item.com === 'string'" :is="item.com" v-bind="item.props" :sort = "index"></component>
            <component v-else  :is="item.com" v-bind="item.props" v-model="valueArr[index]"></component>
        </div>
        <button v-for="(item, index) in buttonArr" :key="index" @click="addForm(item.com,item.props)">
            {{ "添加" + item.name }}
        </button>
    </form>



</template>
<style></style>