<template>
  <v-container class="register">
    <h2>Registration</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model.trim="email"
        :rules="emailRules"
        label="Email"
        prepend-icon="mdi-account-circle"
        required
      ></v-text-field>

      <v-text-field
        v-model.trim="password"
        :rules="passwordRules"
        type="password"
        label="Password"
        prepend-icon="mdi-security"
        :counter="6"
        required
      ></v-text-field>

      <v-text-field
        v-model.trim="confirmPassword"
        :rules="confirmPasswordRules"
        type="password"
        label="Confirm Password"
        prepend-icon="mdi-repeat"
        :counter="6"
        required
        v-on:keyup.enter="onSubmit"
      ></v-text-field>

      <v-btn 
        color="success" 
        class="mr-4" 
        @click="onSubmit"
        :disabled="!valid || loading" 
        :loading="loading"
        >
        Create Account
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: 'RegistrationView',
    data() {
      return {
        valid: false,
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passwordRules: [
          (v) => !!v || 'Password is required',
          (v) =>
            (v && v.length >= 6) ||
            'Password must be equal or than 6 characters',
        ],
        confirmPassword: '',
        confirmPasswordRules: [
          (v) => !!v || 'Confirm Password',
          (v) => v === this.password || 'Password should match',
        ],
      };
    },
    methods: {
      onSubmit() {
        if (this.$refs.form.validate()) {
          const userData = {
            email: this.email,
            password: this.password
          };
          this.$store.dispatch('registrationUser', userData)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
        }
      },
      reset() {
        this.$refs.form.reset();
      },
    },
    computed: {
      loading() {
        return this.$store.getters.getLoading
      }
    }
  };
</script>

<style lang="scss" scoped>
  .register {
    max-width: 500px;
  }
</style>
