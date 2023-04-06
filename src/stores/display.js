import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDisplayStore = defineStore('display', {
    state: () => ({
        displayNav: false,
        displayJoinModal: false,

        //user questions
        user: {
            name: null,
            email: null,
            birthDate: null,
            question: null 
        }
    }),

    actions: {
        toggleNav() {
            this.displayNav = !this.displayNav
        },

        toggleJoin() {
            this.displayJoinModal = !this.displayJoinModal
            console.log('toggleJoin activated')
        },

        validateQuestionUser() {
            console.log('hello');
        }
    }
})
