<template>
  <div>
    <router-link 
      :to='to'
      :active-class='activeClass'  
      class='menu-item' 
    >
      <slot/>
    </router-link>
  </div>
</template>

<script setup lang='tsx'>
import { RouterLink } from 'vue-router';

import type { MenuItemProps } from '@/types/menu';

const { to, activeClass } = defineProps<MenuItemProps>();
</script>

<style scoped lang='scss'>
@import '../styles/base.scss';
  .menu-item {
    text-decoration: none;
    color: inherit;
  }

</style>