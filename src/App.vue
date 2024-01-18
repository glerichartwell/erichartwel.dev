<template>
  <div>
    <router-view :key='rerenderKey'/>
  </div>
</template>

<script setup lang="tsx">
import { onMounted, onUnmounted, ref } from 'vue';

import { useScreenSizeStore, LARGE_SCREEN } from './stores/screenSize';
import { useColorStore } from './stores/color';

const colorStore = useColorStore();
const screenSize = useScreenSizeStore();
const rerenderKey = ref(0);

onMounted(() => {
  window.addEventListener("resize", handleWindowSizeChange);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", handleColorSchemeChange);
  handleWindowSizeChange();
});
onUnmounted(() => {
  window.removeEventListener("resize", handleWindowSizeChange);
  window.matchMedia('(prefers-color-scheme: dark)').removeEventListener("change", handleColorSchemeChange);
});

function handleColorSchemeChange() {
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colorStore.darkMode() : colorStore.lightMode();
  rerenderKey.value += 1
}

function handleWindowSizeChange() {
  if (window.innerWidth < LARGE_SCREEN)
    screenSize.setIsLargeScreen(false);
  else
    screenSize.setIsLargeScreen(true);
}
</script>

<style scoped lang='scss'>


</style>