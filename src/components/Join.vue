<template>
    <div class="backdrop" @click.self="storeDisplay.toggleJoin">   
        <div class="join-modal">
            <p class="close" @click="storeDisplay.toggleJoin" style="cursor: pointer">
                <font-awesome-icon icon="xmark" />
            </p>
            <div class="form-logo">
                <!-- TODO: ADD LOGO -->
            </div>
            <form action="https://formspree.io/f/xwkjwnvn" method="POST" class="modal-form">
            <!-- <form action="https://formsubmit.co/isanczewski@gmail.com" method="POST" class="modal-form"> -->
            <!-- <form action="https://formsubmit.co/isanczewski@gmail.com" method="POST" class="modal-form" @submit.prevent="storeUser.validateUserQuestion"> -->
            <!-- <form class="modal-form" @submit.prevent="storeUser.validateUserQuestion"> -->
                <p>Send a request to join the workshop and receive the procedure instructions.</p>
                <p>You can also ask any question you need.</p>
                
                <!-- NAME -->
                <div class="input-wrap">
                    <input type="text" name="text" placeholder="Name" v-model="storeUser.userRequest.name" :class="{inputFail : (storeUser.userRequestErr.nameErr)}">
                    <span v-show="storeUser.userRequestErr.nameErr" class="inputErr"> {{ storeUser.userRequestErrMsg.nameErrMsg }}</span>
                </div>
            
                <!-- FAMILY NAME -->
                <div class="input-wrap">
                    <input type="text" name="text" placeholder="Family Name" v-model="storeUser.userRequest.familyName" :class="{inputFail : (storeUser.userRequestErr.familyNameErr)}">
                    <span v-show="storeUser.userRequestErr.familyNameErr" class="inputErr"> {{ storeUser.userRequestErrMsg.familyNameErrMsg }}</span>
                </div>
            
                <!-- EMAIL -->
                <div class="input-wrap">
                    <input type="email" name="email" placeholder="Email" v-model="storeUser.userRequest.email" :class="{inputFail : (storeUser.userRequestErr.emailErr || storeUser.userRequestErr.emptyEmailErr)}">
                    <span v-show="storeUser.userRequestErr.emailErr" class="inputErr"> {{ storeUser.userRequestErrMsg.emailErrMsg }}</span>
                    <span v-show="storeUser.userRequestErr.emptyEmailErr" class="inputErr"> {{ storeUser.userRequestErrMsg.emptyEmailErrMsg }}</span>
                </div>
            
                <!-- QUESTION -->
                <div class="input-wrap">
                    <textarea class="textarea" name="textarea" :class="{inputFail : (storeUser.userRequestErr.questionErr)}" rows="5" type="textarea" placeholder="Write your question" v-model="storeUser.userRequest.question"></textarea>
                    <span v-show="storeUser.userRequestErr.questionErr"> {{ storeUser.userRequestErrMsg.questionErrMsg }}</span>
                </div>
            
                <!-- <input type="hidden" name="_next" value="https://https://workshops.ivansanczewski.com/about">
                <input type="hidden" name="_subject" value="New request from Workshops page"> -->

                <div class="btn-container">
                    <button type="submit">SEND</button>
                </div>
                <p>Or you can send me an email <br> to <span class="mail-to">isanczewski@gmail.com</span></p>

            </form>
        </div>
    </div>
</template>

<script setup>
import { useDisplayStore } from '../stores/display.js';
import { useUserStore } from '../stores/user.js';


const storeDisplay = useDisplayStore()
const storeUser = useUserStore()

</script>