<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../src/components/Navbar.vue'

// const storeDisplay = useDisplayStore()

</script>

<template>
  <div class="app-container">
    <header>
      <div class="header">
        <Navbar />
        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <span @click="storeDisplay.toggleNav">X</span>
        </nav> -->
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
