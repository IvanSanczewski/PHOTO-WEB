<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../src/components/Navbar.vue'

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
