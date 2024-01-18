<template>
  <div class='col'>
    <slot/>
  </div>
</template>

<script setup lang='tsx'>
import type { FlexColumnProps } from '@/types/containers';

const {
  reverse,
  flex,
  gap,
  justifyContent,
  alignItems,
  margin,
  padding,
  width,
  height,
} = defineProps<FlexColumnProps>()
</script>

<style scoped lang='scss'>
@import '../styles/base.scss';

.col {
  display: flex;
  flex-direction: v-bind('reverse ? "column-reverse" : "column"');
  flex: v-bind('flex ? flex : "auto"');
  justify-content: v-bind('justifyContent ? justifyContent : "flex-start"');
  align-items: v-bind('alignItems ? alignItems : "flex-start"');
  gap: v-bind('gap ? gap : "0px"');
  width: v-bind('width ? width : "100%"');
  height: v-bind('height ? height : "auto"');
  margin: v-bind('margin ? margin : "0"');
  padding: v-bind('padding ? padding : "0"');
}
</style>