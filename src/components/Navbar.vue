<template>
    <div v-if="storeDisplay.displayNav" class="close" @click="storeDisplay.toggleNav">
        <font-awesome-icon icon="xmark" />
    </div>
    <div v-else class="open-container" @click="storeDisplay.toggleNav">
        <font-awesome-icon class="open" icon="fa-solid fa-bars" />
    </div>
    <nav v-if="storeDisplay.displayNav">
        <div class="main-menu">
            <p>LOGO</p>
            <RouterLink class="menu-item" to="/">Home</RouterLink>
            <!-- <RouterLink to="/join">Join the Workshop</RouterLink> -->
            <span class="menu-item" @click="storeDisplay.toggleJoin">Join the Workshop</span>
            <RouterLink class="menu-item" to="/about">Contact & About Me</RouterLink>
        </div>
    </nav>
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