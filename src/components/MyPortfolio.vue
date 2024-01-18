<template>
  <flex-column gap='32px'>
    <flex-row 
      v-horizontal-scroll
      class='scroll-row' 
      wrap='nowrap' 
      padding='1.2rem 1.2rem' 
      :gap='screenSize.isLargeScreen ? "32px" : "16px"'
    >
      <div 
        v-for='item in portfolioItems'
        :class='`project-card ${selectedItem.key == item.key ? "selected" : ""}`'
        :key='item.key'
        role='button'
        @click='() => setSelectedItem(item)'
      >
        <img :src='item.src' :alt='item.alt'>
        <div>
          {{ item.title }}
        </div>
      </div>
    </flex-row>
    <flex-row>
      <flex-column gap='16px'>
        <h4>
          {{ selectedItem.title }}
        </h4>
        <div class='info'>
          {{ selectedItem.info }}
        </div>
        <Button 
          :size='"lg"' 
          :color='color.buttonTextColor' 
          :background-color='color.buttonBackgroundColor'
          :secondary-color='color.secondaryColor'
          @click='() => viewItem(selectedItem)'
        >
          View Project
        </Button>
      </flex-column>
    </flex-row>
  </flex-column>
</template>

<script setup lang='tsx'>
import { ref } from 'vue';

import type { PortfolioItem, MyPortfolioProps } from '@/types/myPortfolio';

import { useScreenSizeStore } from '@/stores/screenSize';
import { useColorStore } from '@/stores/color';

import FlexColumn from '@/components/FlexColumn.vue';
import FlexRow from '@/components/FlexRow.vue';
import Button from '@/components/Button.vue'


const { portfolioItems } = defineProps<MyPortfolioProps>();
const screenSize = useScreenSizeStore();
const color = useColorStore();

const selectedItem = ref<PortfolioItem>(portfolioItems ? portfolioItems[0] : {
  key: "",
  src: "",
  alt: "",
  title: "",
  info: ""
})
function setSelectedItem(newItem: PortfolioItem) {
  selectedItem.value = newItem
}

function viewItem(selectedItem: PortfolioItem) {
  window.open(selectedItem.url, "_blank")
}
</script>

<style scoped lang='scss'>
@import '../styles/base.scss';
.scroll-row {
  overflow-x: auto;
  overflow-y: hidden;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  height: 100%;
  width: 128px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.50));
  &:hover {
    transform: scale(110%);
  }
}

.selected {
  transform: scale(110%);
}
.project-card img {
  height: 128px;
  width: 128px;
  border-radius: 16px;
  object-fit: cover;
}

@media screen and (min-width: $large-screen) {
  
  .project-card {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    height: 100%;
    width: 148px;
    border-radius: 16px;
  }

  .project-card img {
    height: 148px;
    width: 148px;
    border-radius: 16px;
    object-fit: cover;
  }

  .info {
    width: 70%;
  }
}

</style>