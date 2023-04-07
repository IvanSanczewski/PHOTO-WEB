<template>
    <div v-if="!storeDisplay.displayDesktopMenu">
        <div v-if="storeDisplay.displayNav" class="close" @click="storeDisplay.toggleNav">
            <font-awesome-icon icon="xmark" />
        </div>
        <div v-else class="open-container" @click="storeDisplay.toggleNav">
            <font-awesome-icon class="open" icon="fa-solid fa-bars" />
        </div>
        <nav v-if="storeDisplay.displayNav">
            <p>LOGO</p>
            <div class="main-menu" >
                <RouterLink class="menu-item" to="/">Home</RouterLink>
                <!-- <RouterLink to="/join">Join the Workshop</RouterLink> -->
                <span class="menu-item" @click="storeDisplay.toggleJoin">Join the Workshop</span>
                <RouterLink class="menu-item" to="/about">Contact & About Me</RouterLink>
                <div class="social-menu">
                    <a href="https://www.facebook.com/IvanSanczewskiPhotography/">
                        <font-awesome-icon class="menu-item" icon="fa-brands fa-facebook" />
                    </a>
                    <a href="https://www.instagram.com/ivan.sanczewski/">
                        <font-awesome-icon class="menu-item" icon="fa-brands fa-instagram" />
                    </a>
                </div>
            </div>
        </nav>
    </div>
    <div v-if="storeDisplay.displayDesktopMenu">
        <nav>
            <p>LOGO</p>
            <div class="main-menu" >
                <div class="menu__links">
                    <RouterLink class="menu-item" to="/">Home</RouterLink>
                    <span class="menu-item" @click="storeDisplay.toggleJoin">Join the Workshop</span>
                    <RouterLink class="menu-item" to="/about">Contact & About Me</RouterLink>
                </div>
                <div class="social-menu">
                <a href="https://www.facebook.com/IvanSanczewskiPhotography/">
                    <font-awesome-icon class="menu-item" icon="fa-brands fa-facebook" />
                </a>
                <a href="https://www.instagram.com/ivan.sanczewski/">
                    <font-awesome-icon class="menu-item" icon="fa-brands fa-instagram" />
                </a>
            </div>
            </div>
        </nav>

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