<template>
  <flex-row 
    gap='16px'
    :wrap='screenSize.isLargeScreen ? "nowrap" : "wrap-reverse"'
    justify-content='center'
  >
    <flex-column gap='4px' :flex='screenSize.isLargeScreen ? "1" : "auto"'>
      <flex-row gap='0px 16px' align-items='flex-end'>
        <div class='company'>
          {{ selectedItem?.company }}
        </div>
        <div class='title'>
          {{ selectedItem?.title }}
        </div>
      </flex-row>
      <flex-row gap='16px' align-items='flex-end'>
        <div class='location'>
          {{ selectedItem?.location }}
        </div>
        <div class='dates'>
          {{ selectedItem?.dates }}
        </div>
      </flex-row>
      <flex-row>
        <bullet-list 
          :list='selectedItem.bullets'
          class='bullets'
        />
      </flex-row>
    </flex-column>
    <flex-column 
      :flex='screenSize.isLargeScreen ? "1" : "auto"' 
      justify-content='flex-start'
      height='100%'
      class='scroll-column'
    >
      <flex-column 
        :width='screenSize.isLargeScreen ? "auto" : "100%"' 
        :margin='screenSize.isLargeScreen ? "0 0 0 0" : "0 0 0 0"'
      >
        <span>{{ title ? title : "Timeline:"}}</span>
        <span>{{ subtitle ? subtitle : "Select a point on the timeline to view its information" }}</span>
      </flex-column>
      <ul v-horizontal-scroll class='timeline'>
        <li 
          v-for='(item, index) in experienceItems'
          :key='item.key'
          class='timeline-item'
          @click='() => setSelectedItem(item)'
        >
          <div 
            v-if='selectedItem.key === item.key'
            :class='index % 2 == 0 ? "selected-bottom" : "selected-top"'
          />
          <div 
          :class='index % 2 == 0 ? "year-bottom" : "year-top"'
          >
            {{ item.year }}
          </div>
        </li>
      </ul>
    </flex-column>
  </flex-row>
</template>

<script setup lang='tsx'>
import { ref } from 'vue';

import type { ExperienceItem, MyExperienceProps } from '@/types/myExperience';

import { useScreenSizeStore } from '@/stores/screenSize';

import FlexRow from '@/components/FlexRow.vue';
import FlexColumn from '@/components/FlexColumn.vue';
import BulletList from '@/components/BulletList.vue';

const { title, subtitle, shadow, backgroundColor, selectedColor, experienceItems } = defineProps<MyExperienceProps>();
const screenSize = useScreenSizeStore();

const selectedItem = ref<ExperienceItem>(experienceItems ? experienceItems[0] : 
  {
    key: "", 
    company: "", 
    title: "",
    location: "",
    dates: "",
    year: ""
  }
);
function setSelectedItem(newItem: ExperienceItem) {
  selectedItem.value = newItem
}
</script>

<style scoped lang='scss'>
@import '../styles/base.scss';
$max-exp-length: 16;

.scroll-column {
  overflow: hidden;
}

.timeline {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  justify-content: flex-start;
  width: 100%;
  list-style-type: none;
  padding-inline-start: 0;
  overflow-x: auto;
  padding: 108px 0;
  filter: v-bind('shadow ? "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.50))" : "none"');
  &::before {
    position: absolute;
    width: 100%;
    content: "";
    top: 50%;
    border-radius: 16px;
  }
}

.timeline-item {
  position: relative;
  display: inline-block;
  padding: 0 32px;
  width: 160px;
  height: 8px;
  background-color: v-bind('backgroundColor ? backgroundColor : "white"');
  pointer-events: none;
  // Bottom timeline items
  &:nth-child(odd) {
    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: calc(50% - 6px);
      height: 48px;
      width: 12px;
      background-color: v-bind('backgroundColor ? backgroundColor : "white"');
      cursor: pointer;
      pointer-events: auto;
    }
    &::after {
      content: '';
      position: absolute;
      top: 650%;
      left: calc(50% - 12px);
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background-color: v-bind('backgroundColor ? backgroundColor : "white"');
      cursor: pointer;
      pointer-events: auto;
    }
  }
  // Top timeline items
  &:nth-child(even) {
    &::before {
      content: '';
      position: absolute;
      top: -600%;
      left: calc(50% - 6px);
      height: 48px;
      width: 12px;
      background-color: v-bind('backgroundColor ? backgroundColor : "white"');
      cursor: pointer;
      pointer-events: auto;
    }
    &::after {
      content: '';
      position: absolute;
      top: -850%;
      left: calc(50% - 12px);
      height: 24px;
      width: 24px;
      border-radius: 50%;
      background-color: v-bind('backgroundColor ? backgroundColor : "white"');
      cursor: pointer;
      pointer-events: auto;
    }
  }
  &:first-child {
    border-radius: 16px 0 0 16px;
  }
  &:last-child {
    border-radius: 0 16px 16px 0;
  }
}

.selected-top {
  position: relative;
  pointer-events: auto;
  &::after {
    content: '';
    position: absolute;
    top: -64px;
    left: calc(50% - 8px);
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: v-bind('selectedColor ? selectedColor : "black"');
    cursor: pointer;
    pointer-events: auto;
    z-index: 2;
  }
}

.selected-bottom {
  position: relative;
  pointer-events: auto;

  &::after {
    content: '';
    position: absolute;
    top: 56px;
    left: calc(50% - 8px);
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: v-bind('selectedColor ? selectedColor : "black"');
    cursor: pointer;
    pointer-events: auto;
    z-index: 2;
  }
}

.year-top {
  position: relative;
  top: 16px;
  left: calc(50% - 22px);
}

.year-bottom {
  position: relative;
  top: -38px;
  left: calc(50% - 20px);
}

.title, .dates {
  font-size: 1.0rem;
}

.bullets {
  padding-inline-start: 20px;
}

.side-scroll {
  overflow-x: auto;
  overflow-y: hidden;
}

@media screen and (min-width: $large-screen) {
  
  .timeline {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: relative;
    width: 100%;
    list-style-type: none;
    padding-inline-start: 0;
    overflow-x: auto;
    padding: 108px 0;
    &::before {
      position: absolute;
      width: 100%;
      content: "";
      top: 50%;
      border-radius: 16px;
    }
  }

  .timeline-item {
    position: relative;
    display: inline-block;
    padding: 0 32px;
    width: 160px;
    height: 8px;
    background-color: v-bind('backgroundColor ? backgroundColor : "white"');
    pointer-events: none;
    // Bottom timeline items
    &:nth-child(odd) {
      &::before {
        content: '';
        position: absolute;
        top: 100%;
        left: calc(50% - 6px);
        height: 64px;
        width: 16px;
        background-color: v-bind('backgroundColor ? backgroundColor : "white"');
        cursor: pointer;
        pointer-events: auto;
      }
      &::after {
        content: '';
        position: absolute;
        top: 650%;
        left: calc(50% - 12px);
        height: 28px;
        width: 28px;
        border-radius: 50%;
        background-color: v-bind('backgroundColor ? backgroundColor : "white"');
        cursor: pointer;
        pointer-events: auto;
      }
    }
    // Top timeline items
    &:nth-child(even) {
      &::before {
        content: '';
        position: absolute;
        top: -600%;
        left: calc(50% - 6px);
        height: 48px;
        width: 16px;
        background-color: v-bind('backgroundColor ? backgroundColor : "white"');
        cursor: pointer;
        pointer-events: auto;
      }
      &::after {
        content: '';
        position: absolute;
        top: -900%;
        left: calc(50% - 12px);
        height: 28px;
        width: 28px;
        border-radius: 50%;
        background-color: v-bind('backgroundColor ? backgroundColor : "white"');
        cursor: pointer;
        pointer-events: auto;
      }
    }
    &:first-child {
      border-radius: 16px 0 0 16px;
    }
    &:last-child {
      border-radius: 0 16px 16px 0;
    }
  }

  .selected-top {
    position: relative;
    pointer-events: auto;
    &::after {
      content: '';
      position: absolute;
      top: -67px;
      left: calc(50% - 7px);
      height: 18px;
      width: 18px;
      border-radius: 50%;
      background-color: v-bind('selectedColor ? selectedColor : "black"');
      cursor: pointer;
      pointer-events: auto;
      z-index: 2;
    }
  }

  .selected-bottom {
    position: relative;
    pointer-events: auto;

    &::after {
      content: '';
      position: absolute;
      top: 57px;
      left: calc(50% - 7px);
      height: 18px;
      width: 18px;
      border-radius: 50%;
      background-color: v-bind('selectedColor ? selectedColor : "black"');
      cursor: pointer;
      pointer-events: auto;
      z-index: 2;
    }
  }

  .year-top {
    position: relative;
    top: 16px;
    left: calc(50% - 20px);
  }

  .year-bottom {
    position: relative;
    top: -38px;
    left: calc(50% - 20px);
  }

}
</style>