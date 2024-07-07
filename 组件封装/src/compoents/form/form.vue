<script setup>
import {ElDatePicker, ElForm, ElFormItem, ElInput, ElOption, ElSelect, ElTimePicker} from "element-plus"
import testForm from "./testForm.vue"
import el from  "./el.vue"
let registerCom = [
    {
        com:ElInput,
        name:"时间",
        props:{
            valueFormat:"yyyy-MM-dd",
        }
    },
    {
        com:ElTimePicker,
        name:"时间"
    },
    // {
    //     com:el,
    //     name:"时间"
    // }
]
</script>
<template>
 <test-form :registerCom="registerCom"></test-form>
</template>