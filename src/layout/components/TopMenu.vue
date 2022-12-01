<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Flutter 学习</el-menu-item>
        <el-menu-item index="2">Node.js 交流</el-menu-item>
        <el-menu-item index="3">Nest.js</el-menu-item>
        <el-menu-item index="4">MongoDB</el-menu-item>
        <el-menu-item index="5">PostgreSQL</el-menu-item>
        <el-menu-item index="6">娱乐</el-menu-item>
    </el-menu>
    <div class="h-6" />
</template>

<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TopMenu',
    setup() {
        const activeIndex = ref('1');
        const handleSelect = (key: string, keyPath: string[]) => {
            console.log(key, keyPath);
        };
        return {
            activeIndex,
            handleSelect,
        };
    },
});
</script>
