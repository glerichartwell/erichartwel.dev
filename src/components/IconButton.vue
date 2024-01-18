<template>
    <a :class='`icon-button ${size ? size : "auto"}`' :href='href'>
      <img v-if='src' :src='src' />
      <slot v-else />
    </a>
</template>

<script setup lang='tsx'>
import type { IconButtonProps } from '@/types/button';

const { color, fontSize, shadow, size, src, href, margin, padding } = defineProps<IconButtonProps>();

</script>

<style scoped lang='scss'>
.icon-button {
  display: flex;
  align-items: flex-end;
  background-color: transparent;
  border: none;
  color: v-bind('color ? color : "inherit"');
  text-shadow: v-bind('shadow ? "0px 4px 4px rgba(0, 0, 0, 0.50)" : "none"');
  font-size: v-bind('fontSize ? fontSize : "inherit"');
  margin: v-bind('margin ? margin : ""');
  padding: v-bind('padding ? padding : "0"');
  text-decoration: none;
  filter: v-bind('shadow ? "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.50))" : "none"');
  cursor: pointer;
}

img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}
.auto {
  width: auto;
  height: auto;
}

.xs {
  width: 16px;
  height: 16px;
}


.sm {
  width: 20px;
  height: 20px;
}

.md {
  width: 28px;
  height: 28px;
}

.lg {
  width: 36px;
  height: 36px;
}

.xl {
  width: 48px;
  height: 48px;
}

slot {
  max-width: 100%;
  max-height: 100%;
}
</style>