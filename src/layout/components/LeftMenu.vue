<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
            <el-icon><icon-menu /></el-icon>
            <span>知识点-1</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>知识点-2</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>知识点-3</span>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>知识点-4</span>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue';
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>
