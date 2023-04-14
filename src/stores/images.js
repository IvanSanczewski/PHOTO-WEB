import { defineStore } from "pinia"

export const useImagesStore = defineStore('images', {
    state: () => ({
        //images
        images:[
            {      
                id: '',
                path: '../assets/images/IVAN_GARDA.jpg',
                caption: 'Photo by Sergio Sarnicola',
                alt: 'portrait of Ivan Sanzewski',
                location: 'Garda, Italy',
                page: 'about',
                isBackground: false
            },
            {      
                id: '',
                path: '../assets/images/ISP_NORVILISKES_112.jpg',
                caption: 'landscape',
                alt: 'cross by the road',
                location: 'Norviliškes, Lithuania',
                page: 'home',
                isBackground: false
            },
            {      
                id: '',
                path: '../assets/images/ISP_NORVILISKES_282.jpg',
                caption: 'landscape',
                alt: 'lone road surrounded by trees',
                location: 'Norviliškes, Lithuania',
                page: 'home',
                isBackground: true
            },
            {      
                id: '',
                path: '../assets/images/ISP_BLACK_SEA_1873_Edit_225_300.jpg',
                caption: 'street photo',
                alt: 'birds like notes on a staff',
                location: 'Odesa, Ukraine',
                page: 'home',
                isBackground: true
            },
            {      
                id: '',
                path: '../assets/images/ISP_BASIC_2.jpg',
                caption: 'portrait',
                alt: 'portrait of two young women',
                location: 'Perppignan, France',
                page: 'home',
                isBackground: false
            },
            {      
                id: '',
                path: '../assets/images/ISP_BCN_NOCTAMBUL_254.jpg',
                caption: 'street photo',
                alt: 'lone man walking at night',
                location: 'Barcelona, Spain',
                page: 'home',
                isBackground: true
            },
            {      
                id: '',
                path: '../assets/images/ISP_SARAJEVO_1571_2parts.jpg',
                caption: 'portrait',
                alt: 'muslim man showing a mosquee tattoo',
                location: 'Sarajevo, Bosnia Herzegovina',
                page: 'home',
                isBackground: false
            },

        ]
    })
})