<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Navbar from '../src/components/Navbar.vue'
import { useDisplayStore } from './stores/display.js';

const storeDisplay = useDisplayStore()

storeDisplay.toggleDesktopMenu()

// const desktop = ref(false)
// console.log(desktop.value)

// function toggleDesktopMenu(desktop) {
//   desktop.value = (window.innerWidth >=769) ? true : false

// }

</script>

<template>
  <div class="app-container">
    <header>
      <div class="header">
        <Navbar />
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
  