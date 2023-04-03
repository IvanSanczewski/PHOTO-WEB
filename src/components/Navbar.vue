<template>
    <nav v-if="storeDisplay.displayNav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <span @click="storeDisplay.toggleNav">1</span>
    </nav>
    <div v-else>
        <span @click="storeDisplay.toggleNav">0</span>
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