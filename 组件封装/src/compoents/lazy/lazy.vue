<script setup>
import src from "../../assets/1.png"
let arr = [src, src,]
const vLazy = async (el, bingding) => {
    let def = await import("../../assets/logo.svg")
    el.src = def.default;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting > 0) {
                setTimeout(() => {
                    el.src = bingding.value;
                }, 2000);

                observer.unobserve(el);
            }
        })
    })
    observer.observe(el);
}
</script>

<template>
    <div>
        <img v-lazy="item" v-for="(item, index) in arr" :key="index" style="width: 300px;height: 300px;">
    </div>
</template>