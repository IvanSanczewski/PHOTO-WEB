import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDisplayStore = defineStore('display', {
    state: () => ({
        displayNav: true
    }),

    actions: {
        toggleNav() {
            this.displayNav = !this.displayNav
        }
    }
})
