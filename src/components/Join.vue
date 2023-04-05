<template>
    <div class="backdrop" @click.self="storeDisplay.toggleJoin">   
        <div class="join-modal">
            <p class="close" @click="storeDisplay.toggleJoin" style="cursor: pointer">
                <font-awesome-icon icon="xmark" />
            </p>
            <div class="form-logo">
                <span>LOGO</span>
            </div>
            <form class="modal-form" @submit.prevent="storeDisplay.validateQuestionUser">
            
                <div class="input-wrap">
                    <!-- <label>Name</label> -->
                    <!-- <input :class="{inputFail : (storeGetUser.firstNameErr)}" type="text" v-model="storeDisplay.user.name"> -->
                    <input type="text" placeholder="Name" v-model="storeDisplay.user.name">
                    <!-- <span v-show="storeGetUser.firstNameErr" class="firstNameErr"> {{ storeGetUser.firstNameErrMsg }}</span> -->
                </div>
            
                <div class="input-wrap">
                    <!-- <label>Email</label> -->
                    <!-- <input :class="{inputFail : (storeGetUser.emailErr || storeGetUser.emptyEmailErr)}" type="text" v-model="storeDisplay.user.email"> -->
                    <input  type="text" placeholder="Email" v-model="storeDisplay.user.email">
                    <!-- <span v-show="storeGetUser.emailErr" class="emailErr"> {{ storeGetUser.emailErrMsg }}</span>
                    <span v-show="storeGetUser.emptyEmailErr" class="emptyEmailErr"> {{ storeGetUser.emptyEmailErrMsg }}</span> -->
                </div>
            
                <div class="input-wrap">
                    <!-- <label>Date of birth</label> -->
                    <!-- <input :class="{inputFail : (storeGetUser.lastNameErr)}" type="text" v-model="storeDisplay.user.birthDate"> -->
                    <input  type="text" placeholder="Date of birth" v-model="storeDisplay.user.birthDate">
                    <!-- <span v-show="storeGetUser.lastNameErr" class="lastNameErr"> {{ storeGetUser.lastNameErrMsg }}</span> -->
                </div>

                <div class="input-wrap">
                    <!-- <label>Write your question</label> -->
                    <!-- <input :class="{inputFail : (storeGetUser.lastNameErr)}" type="text" v-model="storeDisplay.user.birthDate"> -->
                    <textarea class="textarea" rows="5" type="textarea" placeholder="Write your question" v-model="storeDisplay.user.question"></textarea>
                    <!-- <span v-show="storeGetUser.lastNameErr" class="lastNameErr"> {{ storeGetUser.lastNameErrMsg }}</span> -->
                </div>
            
                <div class="btn-container">
                    <button>SEND</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useDisplayStore } from '../stores/display.js';

const storeDisplay = useDisplayStore()

</script>