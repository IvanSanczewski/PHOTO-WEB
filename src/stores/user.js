import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        // user:
        userRequest: {
            name: '',
            familyName: '',
            email: '',
            question: '',
        },

        // validation errors
        userRequestErr: {
            nameErr: false,
            familyNameErr: false,
            emptyEmailErr: false,
            mailRegEx: /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/,
            emailErr: false,
            questionErr: false,
        },
        
        // validation error messages
        userRequestErrMsg: {
            nameErrMsg: 'This field is required',
            familyNameErrMsg: 'This field is required',
            emptyEmailErrMsg: 'This field is required',
            emailErrMsg: 'Please enter a valid email',
            questionErrMsg: 'Please ask a question or type "Join the workshop"'
        }
        //user validation data:
    }),

    actions: {
        validateUserQuestion() {
            console.log('VALIDATE USER QUESTION');
            //name validation
            if (this.userRequest.name.trim() === '' || this.userRequest.name.trim() === null) {
                this.userRequestErr.nameErr = true
            } else {
                this.userRequestErr.nameErr = false
            }
            
            //family name validation
            if (this.userRequest.familyName.trim() === '' || this.userRequest.familyName.trim() === null) {
                this.userRequestErr.familyNameErr = true
            } else {
                this.userRequestErr.familyNameErr = false
            }

            //email validation
            if (this.userRequest.email.trim() === '' || this.userRequest.email.trim() === null) {
                this.userRequestErr.emptyEmailErr = true
                this.userRequestErr.emailErr = false
            } else if (!this.userRequestErr.mailRegEx.test(this.userRequest.email.trim())) {
                this.userRequestErr.emptyEmailErr = false
                this.userRequestErr.emailErr = true
            } else {
                this.userRequestErr.emptyEmailErr = false
                this.userRequestErr.emailErr = false
            }

            //question validation
            if (this.userRequest.question.trim() === '' || this.userRequest.familyName.trim() === null) {
                this.userRequestErr.questionErr = true
            } else {
                this.userRequestErr.questionErr = false
            }
            

            if (!this.userRequestErr.nameErr &&
                !this.userRequestErr.familyNameErr &&
                !this.userRequestErr.emptyEmailErr &&
                !this.userRequestErr.emailErr &&
                !this.userRequestErr.questionErr) {
                    sendUserQuestion()
                    console.log('ALL VALIDATIONS ARE CORRECT');
                }
        },

        sendUserQuestion(){
            console.log('USER QUESTION SENT');
        }
    }
})