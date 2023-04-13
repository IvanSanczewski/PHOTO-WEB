<template>
    <div v-if="!storeDisplay.displayDesktopMenu">
        <div v-if="storeDisplay.displayNav" class="close" @click="storeDisplay.toggleNav">
            <font-awesome-icon icon="xmark" />
        </div>
        <div v-else class="open-container" @click="storeDisplay.toggleNav">
            <div class="logo-container">
                <!-- <div class="logo">
                    <font-awesome-icon icon="fa-solid fa-camera-retro" />
                </div> -->
                <div class="logo-name">
                    <p class="ivan">Ivan Sanczewski</p>
                    <div class="logo-line"></div>
                    <p class="workshops">WORKSHOPS</p>
                </div>
            </div>
            <font-awesome-icon class="open" icon="fa-solid fa-bars" />
        </div>
        <nav v-if="storeDisplay.displayNav">
            <div class="main-menu" >
                <div class="logo-container-in-menu">
                    <!-- <div class="logo">
                        <font-awesome-icon icon="fa-solid fa-camera-retro" />
                    </div> -->
                    <div class="logo-name">
                        <p class="ivan">Ivan Sanczewski</p>
                        <div class="logo-line"></div>
                        <p class="workshops">WORKSHOPS</p>
                    </div>
                </div>
                <RouterLink class="menu-item" to="/">Home</RouterLink>
                <span class="menu-item" @click="storeDisplay.toggleJoin">Join the Workshop</span>
                <RouterLink class="menu-item" to="/about">Contact & About Me</RouterLink>
                <div class="social-menu">
                    <a target="blank" href="https://www.facebook.com/IvanSanczewskiPhotography/">
                        <font-awesome-icon class="menu-item" icon="fa-brands fa-facebook" />
                    </a>
                    <a target="blank" href="https://www.instagram.com/ivan.sanczewski/">
                        <font-awesome-icon class="menu-item" icon="fa-brands fa-instagram" />
                    </a>
                </div>
            </div>
        </nav>
    </div>
    <div v-if="storeDisplay.displayDesktopMenu">
        <nav>
            <div class="main-menu" >
                <div class="logo-container">
                    <!-- <div class="logo">
                        <font-awesome-icon icon="fa-solid fa-camera-retro" />
                    </div> -->
                    <div class="logo-name">
                        <p class="ivan">Ivan Sanczewski</p>
                        <div class="logo-line"></div>
                        <p class="workshops">WORKSHOPS</p>
                    </div>
                </div>
                <div class="menu__links">
                    <RouterLink class="menu-item" to="/">Home</RouterLink>
                    <span class="menu-item" @click="storeDisplay.toggleJoin">Join the Workshop</span>
                    <RouterLink class="menu-item" to="/about">Contact & About Me</RouterLink>
                </div>
                <div class="social-menu">
                <a target="blank" href="https://www.facebook.com/IvanSanczewskiPhotography/">
                    <font-awesome-icon class="menu-item" icon="fa-brands fa-facebook" />
                </a>
                <a target="blank" href="https://www.instagram.com/ivan.sanczewski/">
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
import { isSVGTag } from '@vue/shared';

const storeDisplay = useDisplayStore()
</script>

<style scoped>
span {
    cursor: pointer
}
</style>