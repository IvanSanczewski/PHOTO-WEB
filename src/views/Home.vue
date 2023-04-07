<template>
    <div v-if="storeDisplay.displayJoinModal">
        <Join />
    </div>
    <section id="hero" class="hero">
        <div class="hero--background">
            <div class="container">
                <div class="container-main">
                    <div class="hero__content--title">
                        <p>learn</p>
                        <h1>black & white</h1>
                        <h1>photography workshop</h1>
                    </div>
                    <h2>Practice and theory</h2>
                    <div class="hero__content--cta">
                        <button @click="storeDisplay.toggleJoin" class="cta-btn">join workshop</button>
                        <!-- <RouterLink to="/Join" class="cta-btn">join workshop</RouterLink> -->
                    </div>
                </div>
                <div class="container-footer">
                    <a href="#join" class="arrow-down" >
                        <font-awesome-icon icon="fa-solid fa-circle-arrow-down" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="join" class="join">
        <div class="join--backgound">
            <div class="container">
                <div class="container-main">
                    <div class="join--title">
                        <h2>An all-practice workshop</h2>
                    </div>
                    <img src="../assets/images/ISP_BASIC_2.jpg" alt="">
                    <p class="image-caption"><span>portrait </span><span> landscape</span><span> street photo</span></p>
                    <div class="join--sessions">
                        <div class="details">
                            <p>Thursday 4:30pm - 6:30pm</p>
                            <p>From 4th May to 28th June</p>
                            <p>At Lojoteka, Šv. Kazimiero g. 8, Vilnius</p>
                        </div>
                        <div class="line"></div>
                        <p>3 Outdoor shooting sessions</p>
                        <p>6 Photoshop editing sessions</p>
                        <p>18 hours of lectures</p>
                    </div>
                    <div class="join--price">
                        <p>price: <span>100.00 €</span></p>
                    </div>
                </div>
                <div class="container-footer">
                    <a href="#heading" class="arrow-down">
                        <font-awesome-icon icon="fa-solid fa-circle-arrow-down" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="heading" class="heading">
        <div class="heading-background">
            <div class="container">
                <div class="container-main">
                    <h3>Improve your skill and technique, develop your photographic style and give your images a narrative sense</h3>
                    <h3>Learn professional developing and retouching with Photoshop and understand its core functions in a step-by-step methodology </h3>
                    <h3>Individual porfolio reviews and classmate based discussions in every editing session</h3>
                </div>
                <div class="container-footer">
                    <a href="#syllabus" class="arrow-down">
                        <font-awesome-icon icon="fa-solid fa-circle-arrow-down" />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="syllabus" class="syllabus">
        <div class="syllabus-background">
            <div class="container">
                <div class="container-main">
                    <div class="syllabus--shooting">
                        <div class="syllabus--shooting-header">
                            <p>Shooting:</p>
                            <h2>Photograph for <br> B&W</h2>
                        </div>
                        <div class="syllabus--shooting-content">
                            <img src="../assets/images/ISP_NORVILISKES_112.jpg" alt="wooden cross in Lithuania">
                            <!-- <p><span>portrait </span><span> landscape</span><span> street photo</span></p>     -->
                            <p>Three shooting sessions to learn photographing techniques and think ahead in black and white</p>
                            <!-- <ul>
                                <li>Portrait</li>
                                <li>Landscape</li>
                                <li>Street Photo</li>
                            </ul> -->
                            <!-- <p>In each shooting session we will choose a different scenario to photograph and cover different technique and narrative aspects. The images that taken during the shooting sessions will be our starting point for the editing sessions </p> -->
                        </div>
                    </div>
                    <div class="syllabus--editing">
                        <div class="syllabus--editing-header">
                            <p>Editing:</p>
                            <h2>Professional conversion to B&W</h2>
                        </div>
                        <div class="syllabus--editing-content">
                            <img src="../assets/images/ISP_SARAJEVO_1571_2parts.jpg" alt="before-after black and white retouched portait">
                            <p>Direct black and white conversion, color vs contrast methods, destructive vs non-destructive methods, layers and masks, brush, curves, double raw developing</p>
                            <!-- <p>We'll use Lightroom and Photoshop to turn the images we took in our shooting sessions into black & white. From direct and destructive converting techniques, to more elaborated and non destructive ones, we'll learn to use Photoshop in depth main tools and techniques. All we will learn can be applied </p> -->
                        </div>
                    </div>
                </div>
                <div class="container-footer">
                    <a href="#hero" class="arrow-down">
                        <font-awesome-icon icon="fa-solid fa-circle-arrow-up" />
                    </a>
                </div>
            </div>
        </div>
        <!-- TODO: ADD CONTACT & CONTACT FORM -->
    </section>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useDisplayStore } from '../stores/display.js';
import Join from '../components/Join.vue'

const storeDisplay = useDisplayStore()


</script>