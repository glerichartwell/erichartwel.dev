<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id='Home'>
    <nav-bar 
      shadow 
      :background-color='colorStore.primaryColor' 
      :text-color='colorStore.secondaryColor' 
    >
      <router-link class='logo' to="/about"><h1>erichartwell.dev</h1></router-link>
      <div 
        role='button' 
        class='nav-menu-btn'
        @click.stop='toggle'
      >
        <div :class="`${menuOpen ? 'top-open' : 'top'} nav-menu-btn-bg`" />
        <div :class="`${menuOpen ? 'middle-open' : 'middle'} nav-menu-btn-bg`" />
        <div :class="`${menuOpen ? 'bottom-open' : 'bottom'} nav-menu-btn-bg`" />
      </div>
      <horizontal-menu
        v-if='screenSizeStore.isLargeScreen'
        margin='0 0 0 auto' 
        gap='1.2rem'
      >
        <menu-item v-for='route in routes' :to='route' active-class='active-link' :key='route.name'>{{route.name}}</menu-item>
        <icon-button size='auto' href='gh_resume.pdf' target='_blank'>Resume</icon-button>
        <icon-button size='auto' :href='`mailto:${email}`'>Contact</icon-button>
      </horizontal-menu>
      <div
        v-else
        class='vert-menu-wrapper'
      >
        <verticle-menu
          v-if='menuOpen'
          v-click-outside='closeMenu'
          gap='16px'
          border-radius='0 0 4px 4px'
          :background-color='colorStore.primaryColor'
          shadow
        >
          <menu-item v-for='route in routes' :to='route' :key='route.name'>{{route.name}}</menu-item>
          <icon-button size='auto' href='/gh_resume.pdf' target='_blank'>Resume</icon-button>
          <icon-button size='auto' :href='`mailto:${email}`'>Contact</icon-button>
        </verticle-menu>
      </div>
    </nav-bar>
    <div class='gradient-background' />
    <section id='Content' class='content'>
      <section id='About' class='section-content'>
        <flex-row 
          :reverse='!screenSize.isLargeScreen' 
          :wrap='screenSize.isLargeScreen ? "nowrap" : "wrap-reverse"'
          align-items='center'
        >
          <flex-column>
            <component 
              :is='screenSize.isLargeScreen ? FlexRow : FlexColumn'
              :align-items='screenSize.isLargeScreen ? "flex-end" : "center"'
              wrap='nowrap'
            >
              <h1 class='name'>Eric Hartwell</h1>
              <span>Software Engineer</span>
              <flex-row 
                :justify-content='screenSize.isLargeScreen ? "flex-start" : "center"'
                :margin='screenSize.isLargeScreen ? "0 0 7px 16px" : "8px 0 0 0"'
                gap='16px'
                wrap='nowrap'
              >
                <icon-button shadow :size='screenSize.isLargeScreen ? "sm" : "md"' :src='linkedInLogo' @click='() => openExternalLink(linkedinUrl)'/>
                <icon-button shadow :size='screenSize.isLargeScreen ? "sm" : "md"' :src='githubLogo'  @click='() => openExternalLink(githubUrl)'/>
              </flex-row>
            </component>
            <p>
              I am a recent graduate of the University of Central Florida Computer Science program where I focused 
              on web development fundementals and machine learning. I most recently worked as a full stack 
              developer for Retail Business Services, the service company for grocery retailer, Ahold Delhaize.
            </p>
            <p>
              I am a lover of travel and culture and look forward to spending my free time exploring what the 
              world has to offer. I enjoy hiking, skiing, disc golfing, and just about any other outdoor activity 
              or sport you can imagine. I am always looking to experience new things and thrive in a 
              constantly changing environment.
            </p>
            <p>
              My natural love for solving puzzles lead me to a career in software development. As soon as I was 
              introduced to web development, I became obsessed. Working on full stack applications allows me to 
              exercise both the problem solving, organizational side of my personality as well as the creative, 
              free-spirited side. I also enjoy working with machine learning tasks, especially when they can be 
              implemented into websites. I have more recently become interested in devices programming, and I am
              actively exploring that area's programming paradigms and practices.
            </p>
            <p>
              I am always looking to expand my knowledge, skill, and portfolio, and I am currently open to various 
              positions in software engineering teams.
            </p>
            <router-link v-if='!screenSize.isLargeScreen' to='/about' class='section-link'>
              Back to top of section
            </router-link>
          </flex-column>
          <flex-column justify-content='center'>
            <photo-gallery :sources='photoGallerySources' />
          </flex-column>
        </flex-row>
      </section>
      <section id='Experience' class='section-content'>
        <flex-column>
          <h1>My Experience</h1>
          <p class='section-intro'>
            I spent the first decade of my professional life working in retail and hospitality which gave me the skills 
            necessary for excellent communication, multi-tasking, and handling high-pressure situations. Below you can 
            find my past work experience and what I contributed to each company. I have included some of the more recent
            experience I have in the hospitality industy as well as my work as an engineer.
          </p>
          <my-experience shadow :experience-items='experienceItems' :background-color='colorStore.timelineBackgroundColor' :selected-color='colorStore.timelineSelectedColor'/>
          <router-link v-if='!screenSize.isLargeScreen' to='/experience' class='section-link'>
            Back to top of section
          </router-link>
          <router-link v-else to='/about' class='section-link'>
            Back to top
          </router-link>
        </flex-column>
      </section>
      <section id='Portfolio' class='section-content'>
        <flex-column>
          <h1>My Portfolio</h1>
          <p class='section-intro'>
            One of my favorite things about being a software developer is getting to write solutions for a multitude 
            of use cases and problems. You will find my experience in development ranges from designing a trainer-client portal 
            to building a native mobile application to enhance travel itinerary and entertainment. There is no problem too large or too small for me to tackle.
          </p>
          <my-portfolio :portfolio-items='portfolioItems'/>
          <router-link v-if='!screenSize.isLargeScreen' to='/portfolio' class='section-link'>
            Back to top of section
          </router-link>
          <router-link v-else to='/about' class='section-link'>
            Back to top
          </router-link>
        </flex-column>
      </section>
    </section>
  </div>
</template>

<script setup lang="tsx">
import { computed, ref } from 'vue';

import type { HomeProps } from '@/types/home';

import {
  email,
  linkedinUrl,
  githubUrl,
  linkedInLogoBlueSrc,
  linkedInLogoWhiteSrc,
  githubLogoBlackSrc,
  githubLogoWhiteSrc,
  photoGallerySources,
  experienceItems,
  portfolioItems
} from '@/constants/constants'
import { useColorStore } from '@/stores/color';
import { useScreenSizeStore } from '@/stores/screenSize';

import FlexRow from '@/components/FlexRow.vue';
import FlexColumn from '@/components/FlexColumn.vue'
import NavBar from '@/components/NavBar.vue'
import HorizontalMenu from '@/components/HorizontalMenu.vue';
import VerticleMenu from '@/components/VerticleMenu.vue';
import MenuItem from '@/components/MenuItem.vue';
import PhotoGallery from '@/components/PhotoGallery.vue';
import IconButton from '@/components/IconButton.vue';
import MyExperience from '@/components/MyExperience.vue';
import MyPortfolio from '@/components/MyPortfolio.vue';


const { routes } = defineProps<HomeProps>()
const screenSizeStore = useScreenSizeStore();
const menuOpen = ref(false);
const colorStore = useColorStore();
const screenSize = useScreenSizeStore();

const githubLogo = computed(() => {
  return colorStore.isDarkMode ? githubLogoWhiteSrc : githubLogoBlackSrc
})
const linkedInLogo = computed(() => {
  return colorStore.isDarkMode ? linkedInLogoWhiteSrc : linkedInLogoBlueSrc
})

function toggle() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  if (menuOpen.value) {
    menuOpen.value = !menuOpen.value;
  }
}

function openExternalLink(url: string) {
  window.open(url, '_blank', 'noreferrer');
}

</script>

<style scoped lang='scss'>
@import '../styles/base.scss';
.gradient-background {
  height: calc(100dvh - 104px);
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  background: $light-mode-gradient;
  transform: translateY(104px);
}

.name {
  line-height: 3.2rem;
  padding: 0;
  width: 100%;
  text-align: center;
  white-space: nowrap;
}

span {
  white-space: nowrap;
}

p {
  padding: 32px 0 0 0;
}

@media (prefers-color-scheme: dark) {
  .gradient-background {
    background: $dark-mode-gradient;
  }
}

#Home {
  background-color: transparent;
  color: v-bind('colorStore.textColor');
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
}

// #PersonalInfo {

// }

// #About {

// }
// #Portfolio {

// }
// #Experience {

// }
.content-padding {
  padding: 0 32px;
}
.section-content {
  padding: 3rem 0;
}

.section-intro {
  padding: 1.6rem 0 2.4rem 0;
}

.section-link {
  color: inherit;
  margin-top: 1.6rem;
}

.content {
  padding: 0 1.6rem;
  height: calc(100dvh - $nav-height);
  width: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-color: $light-green-shade transparent;
}

.nav-menu-btn {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0 0 0 auto;
  cursor: pointer;
}

.nav-menu-btn-bg {
  background-color: v-bind('colorStore.secondaryColor');
}

.top {
  width: 32px;
  height: 2px;
  transition: 0.5s;
}

.top-open {
  width: 32px;
  height: 2px;
  transform: rotate(45deg) translate(0px, 11px);
  transition: 0.5s;
}

.middle {
  width: 32px;
  height: 2px;
  transition: 1s;
}

.middle-open {
  width: 32px;
  height: 2px;
  transform: translate(-10px, 0px) rotate(720deg) scale(0%);
  transition: 1.5s;
}

.bottom {
  width: 32px;
  height: 2px;
  transition: 0.5s;
}

.bottom-open {
  width: 32px;
  height: 2px;
  transform: rotate(-45deg) translate(0px, -11px);
  transition: 0.5s;
}

.logo {
  text-decoration: none;          
  font-size: 2.8rem;
  color: v-bind('colorStore.secondaryColor');
  cursor: pointer;
}

.vert-menu-wrapper {
  position: fixed;
  top: 104px;
  right: 0;
  
}

// Tablets
@media screen and (min-width: 481px) {
  .content {
    padding: 0 3.6rem;
  }
}

// Computers
@media screen and (min-width: $large-screen) {

  .content {
    padding: 0 10rem;
  }
  .section-content {
    padding: 4rem 0 8rem 0;
  }

  .section-intro {
    width: 70%;
    padding: 1.6rem 0 2.4rem 0;
  }

  .name {
    padding: 0 32px 0 0;
    width: auto;
  }

  .nav-menu-btn {
    display: none;
  }
}

</style>