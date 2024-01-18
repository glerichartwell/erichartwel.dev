<template>
  <div class='horizontal-menu'>
    <slot/>
    {{ text }}
  </div>
</template>

<script setup lang='tsx'>
import type { MenuProps } from '@/types/menu';

const { text, margin, gap, backgroundColor } = defineProps<MenuProps>()
 
</script>

<style scoped lang='scss'>
  .horizontal-menu {
    display: flex;
    flex-direction: row;
    margin: v-bind(margin);
    gap: v-bind(gap);
    background-color: v-bind('backgroundColor');
  }
</style>