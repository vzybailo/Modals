<template>
    <modal
        title="Modal with validate form"
        @close="$emit('close')">
        <div slot="body">
            <form @submit.prevent="onSubmit" id="form">
                <!-- name -->
                <div class="form-item" :class="{ errorInput: $v.name.$error }">
                    <label for="name">
                        Name:
                        <p class="errorText" v-if="!$v.name.required">Field is required</p>
                        <p class="errorText" v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }}! </p>
                        <input 
                            id="name" 
                            v-model="name" 
                            :class="{error: $v.name.$error}"
                            @change="$v.name.$touch()">
                    </label>
                </div>
                <!-- email -->
                <div class="form-item" :class="{ errorInput: $v.email.$error }">
                    <label for="email">
                        Email:
                        <p class="errorText" v-if="!$v.email.required">Field is required</p> 
                        <p class="errorText" v-if="!$v.email.email">Email is not correct! </p> 
                        <input 
                            id="email" 
                            v-model="email"
                            :class="{error: $v.email.$error}"
                            @change="$v.email.$touch()">
                    </label>
                </div> 
                <!-- password -->
                <div class="form-item" :class="{ errorInput: $v.password.$error }">
                    <label class="form__label">
                        Password
                        <p class="errorText" v-if="!$v.password.required">Password is required.</p>  
                        <p class="errorText" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</p>    
                        <input 
                            type="password" 
                            class="form__input" 
                            v-model.trim="$v.password.$model"
                            :class="{ error: $v.password.$error }">
                    </label>                      
                </div>
                <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">                               
                    <label class="form__label">
                        Repeat password
                        <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p> 
                        <input 
                            type="password" 
                            class="form__input" 
                            v-model.trim="$v.repeatPassword.$model"
                            :class="{ error: $v.repeatPassword.$error }">
                    </label>    
                </div>
                <!-- button         -->
                <button class="btn btnPrimary">submit</button>
            </form>
        </div>
        </modal>
</template>

<script>
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'
import modal from '@/components/UI/Modal.vue'

export default {
    components: {
        modal
    },
    props: {
      modalValidate: {
        type: Boolean,
      }
    },
    data () {
        return {
            email: '',
            name: '',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
            sameAsPassword: sameAs('password')
        }
    },
    methods: {
        onSubmit () {
            this.$v.$touch()
            if (!this.$v.$invalid){
                const user = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                console.log(user)

                //done
                this.name = '',
                this.email = '',
                this.password = '',
                this.repeatPassword = ''
                this.$v.$reset()
                this.$emit('close')
            }
        },
        resetForm() {
            this.modalValidate == false
        }
    }
}
</script>

<style lang="scss">
    .form-item .errorText {
        display: none;
        margin-bottom: 8px;
        font-size: 13.4px;
        color: #e91b1b;
    }
    .form-item {
            &.errorInput .errorText {
            display: block;
        }
    } 
    input.error {
        border-color: #e91b1b
    }
</style>