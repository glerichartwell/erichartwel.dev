<template>
  <div class='row'>
    <slot/>
  </div>
</template>

<script setup lang='tsx'>
import type { FlexRowProps } from '@/types/containers';

const {
  reverse,
  wrap,
  flex,
  gap,
  justifyContent,
  alignItems,
  margin,
  padding,
  width,
  height,
} = defineProps<FlexRowProps>()
</script>
<style scoped lang='scss'>
@import '../styles/base.scss';

.row {
  display: flex;
  flex-direction: v-bind('reverse ? "row-reverse" : "row"');
  flex-wrap: v-bind('wrap ? wrap : "wrap"');
  flex: v-bind('flex ? flex : "auto"');
  justify-content: v-bind('justifyContent ? justifyContent : "flex-start"');
  align-items: v-bind('alignItems ? alignItems : "flex-start"');
  gap: v-bind('gap ? gap : "0px"');
  width: v-bind('width ? width : "100%"');
  height: v-bind('height ? height : "auto"');
  margin: v-bind('margin ? margin : "0"');
  padding: v-bind('padding ? padding : "0"');
  background-color: transparent;
}
</style>