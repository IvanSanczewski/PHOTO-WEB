import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDisplayStore = defineStore('display', {
    state: () => ({
        displayNav: false,
        displayJoinModal: false,
        displayDesktopMenu: false,

    }),

    actions: {
        toggleDesktopMenu() {
            // (window.innerWidth >= 769) ? this.displayDesktopMenu : !this.displayDesktopMenu
            (window.innerWidth >= 769) ? this.displayDesktopMenu = true : this.displayDesktopMenu = false
        },
        
        toggleNav() {
            this.displayNav = !this.displayNav
        },

        toggleJoin() {
            this.displayJoinModal = !this.displayJoinModal
            console.log('toggleJoin activated')
        },

        validateQuestionUser() {
            console.log('hello');
        },
    }
})

