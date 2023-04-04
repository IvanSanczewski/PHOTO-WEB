<template>
    <section class="hero">
        <div class="container">
            <div class="container-main">
                <div class="hero__content--title">
                    <p>learn</p>
                    <h1>black & white</h1>
                    <h1>photography workshop</h1>
                </div>
                <h2>Practice and theory</h2>
                <div class="hero__content--cta">
                    <RouterLink to="/Join" class="cta-btn">join workshop</RouterLink>
                </div>
            </div>
            <div class="container-footer">
                <a href="#join"><span class="next-section-down">V</span></a>
            </div>
        </div>
    </section>

    <section id="join" class="join">
        <div class="container">
            <div class="container-main">
                <div class="join--title">
                    <h2>An all-practice workshop</h2>
                </div>
                <img src="../assets/images/ISP_BASIC_2.jpg" alt="">
                <div class="join--sessions">
                    <p>3 Outdoor shooting sessions</p>
                    <p><span>portrait </span><span> landscape</span><span> street photo</span></p>
                    <p>6 Photoshop editing sessions</p>
                    <p>18 hours of lectures</p>
                </div>
                <div class="join--price">
                    <p>105 euros</p>
                </div>
            </div>
            <div class="container-footer">
                <a href="#syllabus"><span class="next-section">V</span></a>
            </div>
        </div>
    </section>

    <section id="heading" class="heading">
        <div class="container">
            <div class="container-main">
                <h2>Improve your skill and technique, develop your photographic style and give your images a narrative sense</h2>
                <h2>Learn professional developing & retouching with Photoshop and understand its core functions in a step-by-step methodology </h2>
                <h2>Individual porfolio reviews and classmate based discussions in every editing session</h2>
            </div>
            <div class="container-footer">
                <a href="#syllabus"><span class="next-section">V</span></a>
            </div>
            
        </div>
    </section>

    <section id="syllabus" class="syllabus">
        <div class="container">
            <div class="container-main">
                <div class="syllabus--shooting">
                    <p>Shooting</p>
                    <h2>photograph for black & white</h2>
                    <img src="../assets/images/ISP_NORVILISKES_112.jpg" alt="wooden cross in Lithuania">
                    <p>Three shooting sessions to learn photographing techniques and think ahead in black & white</p>
                    <p><span>portrait </span><span> landscape</span><span> street photo</span></p>
                    
                    <!-- <p>In each shooting session we will choose a different scenario to photograph and cover different technique and narrative aspects. The images that taken during the shooting sessions will be our starting point for the editing sessions </p> -->
                </div>
                <div class="syllabus--editing">
                    <p>Editing</p>
                    <h2>Professional retouching conversion to black & white</h2>
                    <img src="../assets/images/ISP_SARAJEVO_1571_2parts.jpg" alt="before-after black and white retouched portait">
                    <p>Direct black & white conversion, color vs contrast methods, destructive vs non-destructive methods, layers & masks, brush, curves, double raw developing</p>
                    <!-- <p>We'll use Lightroom and Photoshop to turn the images we took in our shooting sessions into black & white. From direct and destructive converting techniques, to more elaborated and non destructive ones, we'll learn to use Photoshop in depth main tools and techniques. All we will learn can be applied </p> -->
                </div>
            </div>
            <div class="container-footer">
                <a href="#contact"><span class="next-section">V</span></a>
            </div>
        </div>
        <!-- TODO: ADD CONTACT & CONTACT FORM -->
    </section>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>