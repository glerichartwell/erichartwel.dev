<template>
  <nav class='nav-bar'>
    <slot />
  </nav>
</template>

<script setup lang='tsx'>
import type { NavBarProps } from '@/types/navBar';

const { shadow, backgroundColor, textColor } = withDefaults(defineProps<NavBarProps>(), {
  backgroundColor: "#000",
  textColor: "#FFF",
});
</script>

<style scoped lang='scss'>
  @import '../styles/base.scss';
  .nav-bar {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    height: $nav-height;
    width: 100%;
    padding: 0 1.6rem;
    background-color: v-bind('backgroundColor');
    color: v-bind('textColor'); 
    box-shadow: v-bind('shadow ? "0px 4px 4px 0px rgba(0,0,0,0.33)" : "none"');
    -webkit-box-shadow: v-bind('shadow ? "0px 4px 4px 0px rgba(0,0,0,0.33)" : "none"');
    -moz-box-shadow: v-bind('shadow ? "0px 4px 4px 0px rgba(0,0,0,0.33)" : "none"');
    z-index: 999;
  }
  

  // Tablets
  @media screen and (min-width: 481px) {
    .nav-bar {
      padding: 0 3.6rem;
    }
  }

  // Computers
  @media screen and (min-width: $large-screen) {
      .nav-bar {
        padding: 0 10rem;
      }
  }
  
  @media (prefers-color-scheme: dark) {
    .nav-bar {
      background-color: $dark-green;
      color: $light-green-shade;
    }
  }

</style>