<template>
    <modal
        title="Register an account"
        @close="resetForm">
        <div slot="body">
            <form @submit.prevent="onSubmit">
                <!-- email -->
                <div class="form-item" :class="{ errorInput: $v.email.$error }">
                    <label for="email">
                        Email:
                        <p class="errorText" v-if="!$v.email.required">Field is required</p> 
                        <p class="errorText" v-if="!$v.email.email">Email is not correct! </p> 
                        <input 
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
                <button class="btn btnPrimary">Register</button>
            </form>
            <p @click="$emit('showLogin')" class="btn-change">I have an account</p>
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
    data () {
        return {
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    props: {
        auth: {
            type: Object
        }
    },
    validations: {
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
                    email: this.email,
                    password: this.password
                }
                console.log(user)

                //done
                this.email = '',
                this.password = '',
                this.repeatPassword = ''
                this.$v.$reset()
                this.$emit('close')
            }
        },
        resetForm() {
            this.email = '',
            this.password = '',
            this.repeatPassword = ''
            this.$v.$reset()
            this.$emit('close')
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
    .btn-change {
       font-size: 12px;
       cursor: pointer;
    }
</style>