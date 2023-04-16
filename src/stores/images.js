import { defineStore } from "pinia"

export const useImagesStore = defineStore('images', {
    state: () => ({
        //images
        images:[
            {      
                id: '',
                path: 'src/assets/images/IVAN_GARDA.jpg',
                caption: 'Photo by Sergio Sarnicola',
                alt: 'portrait of Ivan Sanzewski',
                location: 'Garda, Italy',
                genre: 'portrait',
                site: 'about',
                page: 'about',
                category: '',
                isBackground: false
            },
            {      
                id: '',
                path: 'src/assets/images/ISP_NORVILISKES_282.jpg',
                caption: 'landscape',
                alt: 'lone road surrounded by trees',
                location: 'Norviliškes, Lithuania',
                genre: 'landscape',
                site: '',
                page: 'landing',
                category: '',
                isBackground: true
            },
            {      
                id: '',
                path: 'src/assets/images/ISP_BLACK_SEA_1873_Edit_225_300.jpg',
                caption: 'street photo',
                alt: 'birds like notes on a staff',
                location: 'Odesa, Ukraine',
                genre: 'street',
                site: '',
                page: 'landing',
                category: '',
                isBackground: true
            },
            {      
                id: '',
                path: 'src/assets/images/ISP_BCN_NOCTAMBUL_254.jpg',
                caption: 'street photo',
                alt: 'lone man walking at night',
                location: 'Barcelona, Spain',
                genre: 'street',
                site: '',
                page: 'landing',
                category: '',
                isBackground: true
            },
            {      
                id: '',
                path: 'src/assets/images/ISP_SARAJEVO_1571_2parts.jpg',
                caption: 'portrait',
                alt: 'muslim man showing a mosquee tattoo',
                location: 'Sarajevo, Bosnia Herzegovina',
                genre: 'portrait',
                site: '',
                page: 'landing',
                category: '',
                isBackground: false
            },
            {      
                id: '',
                path: 'src/assets/images/ISP_NORVILISKES_112.jpg',
                caption: 'landscape',
                alt: 'cross by the road',
                location: 'Norviliškes, Lithuania',
                genre: 'landscape',
                site: 'sliderJoin',
                page: 'landing',
                category: 'slider',
                isBackground: false
            },
        ],
        sliderJoin: [
            {      
                id: '',
                path: 'src/assets/images/ISP_NORVILISKES_137.jpg',
                caption: 'landscape',
                alt: 'timber',
                location: 'Norviliškes, Lithuania',
                genre: 'landscape',
                site: 'sliderJoin',
                page: 'landing',
                category: 'slider',
                isBackground: false
            },
            {      
                id: '',
                path: 'src/assets/images/ISP_BASIC_2.jpg',
                caption: 'portrait',
                alt: 'portrait of two young women',
                location: 'Perppignan, France',
                genre: 'portrait',
                site: 'sliderJoin',
                page: 'landing',
                category: 'slider',
                isBackground: false
            },
            {      
                id: '',
                path: 'src/assets/images/ISP_LIBRARY_DONETSK_08.jpg',
                caption: 'portrait',
                alt: 'woman in front of Ukrain map',
                location: 'Donetsk, Ukraine',
                genre: '',
                site: 'sliderJoin',
                page: 'landing',
                category: '',
                isBackground: false
            },
            {      
                id: '',
                path: 'src/assets/images/ISP_STREET_PHOTO_50001.jpg',
                caption: 'street photo',
                alt: 'dog and woman',
                location: 'Barcelona, Spain',
                genre: 'street',
                site: 'sliderJoin',
                page: 'landing',
                category: '',
                isBackground: false
            },
            {      
                id: '',
                path: 'src/assets/images/ISP_BERGAMO_470.jpg',
                caption: 'street photo',
                alt: 'man smoking',
                location: 'Bergamo Alta, Italy',
                genre: 'street',
                site: 'sliderJoin',
                page: 'landing',
                category: 'slider',
                isBackground: false
            },
            {      
                id: '',
                path: 'src/assets/images/ISP_MUSEOS_122_Edit.jpg',
                caption: 'street photo',
                alt: 'statue of the British Museum',
                location: 'London, UK',
                genre: 'street',
                site: 'sliderJoin',
                page: 'landing',
                category: 'slider',
                isBackground: false
            },

        ]
    })
})