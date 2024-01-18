import { ref } from 'vue'
import { defineStore } from 'pinia'
import colors from '../styles/colors.module.scss'

export const useColorStore = defineStore('colorStore', () => {
  const primaryColor = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colors.darkGreen : colors.lightGreen);
  const primaryShadeColor = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colors.darkGreenShade : colors.lightGreenShade);
  const secondaryColor = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colors.lightGreen : colors.darkGreen);
  const secondaryShadeColor = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colors.lightGreenShade : colors.darkGreenShade);
  const backgroundColor = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colors.darkGreenShade : colors.white);
  const textColor = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colors.white : colors.black);
  const isDarkMode = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false);
  const timelineBackgroundColor = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colors.white : colors.green);
  const timelineSelectedColor = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colors.green : colors.white);
  const buttonBackgroundColor = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colors.white : colors.green);
  const buttonTextColor = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? colors.green : colors.white);


  function darkMode() {
    primaryColor.value = colors.darkGreen;
    primaryShadeColor.value = colors.darkGreenShade;
    secondaryColor.value = colors.lightGreen;
    secondaryShadeColor.value = colors.lightGreenShade;
    backgroundColor.value = colors.darkGreenShadow;
    textColor.value = colors.white;
    timelineBackgroundColor.value = colors.white;
    timelineSelectedColor.value = colors.green;
    buttonBackgroundColor.value = colors.white;
    buttonTextColor.value = colors.green
    isDarkMode.value = true;
  }

  function lightMode() {
    primaryColor.value = colors.lightGreen;
    primaryShadeColor.value = colors.lightGreenShade;
    secondaryColor.value = colors.darkGreen;
    secondaryShadeColor.value = colors.darkGreenShade;
    backgroundColor.value = colors.white;
    textColor.value = colors.black;
    timelineBackgroundColor.value = colors.green;
    timelineSelectedColor.value = colors.white;
    buttonBackgroundColor.value = colors.green;
    buttonTextColor.value = colors.white
    isDarkMode.value = false;
  }

  return { primaryColor, primaryShadeColor, secondaryColor, secondaryShadeColor, backgroundColor, textColor, timelineBackgroundColor, timelineSelectedColor, buttonBackgroundColor, buttonTextColor, darkMode, lightMode, isDarkMode }
})