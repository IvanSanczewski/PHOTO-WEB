<template>
    <nav v-if="storeDisplay.displayNav">
        <p>LOGO</p>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <span @click="storeDisplay.toggleNav">1</span>
    </nav>
    <div v-else>
        <span class="close-nav" @click="storeDisplay.toggleNav">X</span>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useDisplayStore} from '../stores/display.js'

const storeDisplay = useDisplayStore()
</script>

<style scoped>
span {
    cursor: pointer
}
</style>