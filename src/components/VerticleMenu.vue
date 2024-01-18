<template>
  <div class='verticle-menu'>
    <slot/>
  </div>
</template>

<script setup lang='tsx'>
import type { MenuProps } from '@/types/menu';

const { shadow, margin, gap, borderRadius, backgroundColor } = defineProps<MenuProps>()
</script>

<style scoped lang='scss'>
  
  .verticle-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 16px 48px 32px 48px;
    margin: v-bind(margin);
    gap: v-bind(gap);
    border-radius: v-bind('borderRadius ? borderRadius : "none"');
    background-color: v-bind('backgroundColor ? backgroundColor : "inherit"');
    box-shadow: v-bind('shadow ? "-4px 6px 4px 2px rgba(0,0,0,0.33)" : "none"');
    -webkit-box-shadow: v-bind('shadow ? "-4px 6px 4px 2px rgba(0,0,0,0.33)" : "none"');
    -moz-box-shadow: v-bind('shadow ? "-4px 6px 4px 2px rgba(0,0,0,0.33)" : "none"');
  }
</style>