<template>
  <ul v-if='list'>
    <li
      v-for='item in list'
      :key='item.content'
    >
      {{ item.content }}
      <bullet-list 
        v-if='item.bullets'
        :list='item.bullets'
      />
    </li>
  </ul>
</template>

<script setup lang='tsx'>
import type { BulletListProps } from '@/types/bulletList';

const { list } = defineProps<BulletListProps>();
</script>

<style scoped lang='scss'>

</style>