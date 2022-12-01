<template>
    <TopMenu></TopMenu>

    <el-row>
        <el-col :span="3">
            <LeftMenu></LeftMenu>
        </el-col>
        <el-col :span="21">
            <RouterView></RouterView>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import TopMenu from './components/TopMenu.vue';
import LeftMenu from './components/LeftMenu.vue';

export default defineComponent({
    name: 'LayoutIndex',
    components: {
        TopMenu,
        LeftMenu,
        RouterView,
    },
    setup() {
        const handleOpen = (key: string, keyPath: string[]) => {
            console.log(key, keyPath);
        };
        const handleClose = (key: string, keyPath: string[]) => {
            console.log(key, keyPath);
        };
        return {
            handleOpen,
            handleClose,
        };
    },
});
</script>

<style></style>
