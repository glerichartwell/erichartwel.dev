<template>
  <component :is='screenSize.isLargeScreen ? FlexRow : FlexColumn' gap='16px' justify-content='center' align-items='center' wrap='nowrap'>
    <flex-column
      align-items='center'
      flex='0'
      class='shadow'
    >
      <div class='outline-container large-image-container'>
        <div class='image-container large-image align-center'>
          <img :src='source' alt=''>
        </div>
      </div>
    </flex-column>
    <component 
      :is='screenSize.isLargeScreen ? FlexColumn : FlexRow'
      :gap='screenSize.isLargeScreen ? "16px" : "4px"'
      :padding='screenSize.isLargeScreen ? "0" : "16px"'
      :align-items='screenSize.isLargeScreen ?  "flex-start" : "center"'
      :justify-content='screenSize.isLargeScreen ? "flex-start" : "center"'
      wrap='nowrap'
      flex='0'
      class='shadow transparent'
    >
      <div role='button' tabindex='0' :id='"position-"+index' v-for='(source, index) in sources' :key='index' >
        <div :class='"outline-container no-filter small-image-container"+`${selectedIndex == index ? " selected" : ""}`'>
          <div class='image-container no-filter small-image'>
            <img :src='source' :class='"clickable-image"' @click='()=>{selectImage(source, index)}' />
          </div>
        </div>
      </div>
    </component>
  </component>
</template>

<script setup lang='tsx'>
import { ref } from 'vue';

import type { PhotoGalleryProps } from '@/types/photoGallery';

import { useScreenSizeStore } from '@/stores/screenSize';

import FlexRow from '@/components/FlexRow.vue';
import FlexColumn from '@/components/FlexColumn.vue';

const { sources } = defineProps<PhotoGalleryProps>();
const screenSize = useScreenSizeStore();


const source = ref(sources[0]);
function changeSource(src: any) {
  source.value = src
}

const selectedIndex = ref(0);
function changeIndex(index: number) {
  selectedIndex.value = index
}

function selectImage(source: any, index: number) {
  changeSource(source);
  changeIndex(index);
}

</script>

<style scoped lang='scss'>
@import '../styles/main.scss';
  .gap {
    gap: 16px;
  }

  .small-gap {
    gap: 4px;
  }

  .outline-container {
    display: flex;
    justify-content: center;
    clip-path: circle();
  }

  .selected, .small-image-container:hover {
    background-color: $light-green-shade;
    transform: scale(115%);
    transition: 0.15s;
  }

  .small-image-container {
    height: 3.3rem;
    width: 3.3rem;
  }

  .large-image-container {
    height: 15.4rem;
    width: 15.4rem;
    background-color: $light-green-shade;
  }

  .image-container {
    display: flex;
    clip-path: circle();
  }

  .small-image img {
    height: auto;
    width: 3rem;
  }

  .large-image img {
    height: auto;
    width: 15rem;
  }

  .no-flex {
    flex: 0;
  }

  .image-container img {
    object-fit: cover;
  }

  #position-0 {
    transform: translate(0, -98px);
  }

  #position-1 {
    transform: translate(-16px, -40px);
  }

  #position-2 {
    transform: translate(-8px, -8px);
  }

  #position-3 {
    transform: translate(8px, -8px);
  }

  #position-4 {
    transform: translate(16px, -40px);
  }

  #position-5 {
    transform: translate(0, -98px);
  }

  .clickable-image {
    cursor: pointer;
  }
  
  .shadow {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.75));
  }

  
  .pad-row {
    padding: 16px 0;
  }

  @media screen and (min-width: 1080px) {
    
    .small-image-container {
      height: 5.4rem;
      width: 5.4rem;
    }
    .small-image img {
      height: auto;
      width: 5rem;
    }

    .large-image img {
      height: auto;
      width: 30rem;
    }

    .large-image-container {
      height: 30.75rem;
      width: 30.75rem;
    }

    .large-gap {
      gap: 16px;
    }

    #position-0 {
      transform: translate(-48px, -180px);
    }

    #position-1 {
      transform: translate(-48px, -68px);
    }

    #position-2 {
      transform: translate(-16px, -16px);
    }

    #position-3 {
      transform: translate(16px, -16px);
    }

    #position-4 {
      transform: translate(48px, -68px);
    }

    #position-5 {
      transform: translate(48px, -180px);
    }
  }

  @media screen and (min-width: $large-screen) {
    
    .small-image-container {
      height: 5.4rem;
      width: 5.4rem;
    }
    .small-image img {
      height: auto;
      width: 5rem;
    }

    .large-image img {
      height: auto;
      width: 30rem;
    }

    .large-image-container {
      height: 30.75rem;
      width: 30.75rem;
    }

    .large-gap {
      gap: 16px;
    }

    #position-0 {
      transform: translate(-116px, 4px);
    }

    #position-1 {
      transform: translate(-32px, 0px);
    }

    #position-2 {
      transform: translate(0px, 0px);
    }

    #position-3 {
      transform: translate(0px, 0px);
    }

    #position-4 {
      transform: translate(-32px, 0px);
    }

    #position-5 {
      transform: translate(-116px, -4px);
    }
  }
</style>