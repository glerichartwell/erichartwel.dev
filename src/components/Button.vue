<template>
  <button :class='`btn ${typeof size !== "object" ? size : ""}`'>
    <slot />
  </button>
</template>

<script setup lang='tsx'>
import type { ButtonProps } from '@/types/button';

const { size, color, secondaryColor, backgroundColor } = defineProps<ButtonProps>()
</script>

<style scoped lang='scss'>

.btn {
  height: v-bind('typeof size == "object" && size.height ? size.height : "auto"');
  width: v-bind('typeof size == "object" && size.width ? size.width : "auto"');
  color: v-bind('color ? color : "black"');
  background-color: v-bind('backgroundColor ? backgroundColor : "white"');
  border-radius: 8px;
  border: none;
  box-shadow: 2px 4px 4px rgba(0, 0, 0);
  padding: 0px 16px;
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
  &:hover {
    background-color: v-bind('secondaryColor ? secondaryColor : "rgb(199, 199, 199)"');
  }
}

.sm {
  height: 24px;
}

.md {
  height: 36px;
}

.lg {
  height: 42px;
}

.xl {
  height: 48px;
}

</style>