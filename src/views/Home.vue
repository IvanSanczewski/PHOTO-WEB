<template>
    <div class="hero__content">
        <p>learn</p>
        <div class="hero__content--title">
            <h1>black & white</h1>
            <h1>workshop</h1>
        </div>
        <h2>practice & theory</h2>
        <div class="hero__content--cta">
            <RouterLink to="/Join" class="btn">join workshop</RouterLink>
        </div>
        <a href="#join"><span class="link-down">V</span></a>
    </div>

    <div id="join" class="join">
        <div class="join--sessions">
            <p>3 shooting lessons</p>
            <p>6 photoshop lessons</p>
        </div>
        <div class="join--price">
            <p>105 eur for 18hourrs</p>
        </div>
        <a href="#syllabus"><span class="link-down">V</span></a>
    </div>

    <div id="syllabus" class="syllabus">
        <div class="join--sessions">
            <p>That's what you will learn</p>
        </div>
        <div class="join--price">
            <p>Shooting: photograph for black & white</p>
            <p>Editing: professional retouching conversion to black & white</p>
        </div>
        <a href="#contact"><span class="link-down">V</span></a>
    </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>