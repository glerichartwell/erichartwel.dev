import { ref } from 'vue'
import { defineStore } from 'pinia'

export const LARGE_SCREEN = 1440;

export const useScreenSizeStore = defineStore('screenSizeStore', () => {
  

  const isLargeScreen = ref(checkLargeScreen());

  function checkLargeScreen() {
    if (window.innerWidth <= LARGE_SCREEN)
      return false;
    else
      return true;
  }

  function setIsLargeScreen(value: boolean) {
    isLargeScreen.value = value;
  }

  return { isLargeScreen, setIsLargeScreen }
})