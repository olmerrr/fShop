<template>
  <v-container class="login">
     <h2 class="page-title">Login</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        prepend-icon="mdi-account-circle"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        prepend-icon="mdi-security"
        :counter="6"
        type="password"
        required
        v-on:keyup.enter="onSubmit"
      ></v-text-field>


      <v-btn 
        color="success" 
        class="mr-4" 
        @click="onSubmit"
        :disabled="!valid || loading" 
        :loading="loading"
        >Submit
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: 'LoginView',
    data() {
      return {
        valid: false,
        email: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
        password: '',
        passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be equal or than 6 characters',
      ],
      }
    },
     methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const userData = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('loginUser', userData)
           .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
        } 
      },
      reset () {
        this.$refs.form.reset()
      }
    },
    computed: {
      loading() {
        return this.$store.getters.getLoading
      }
    },
    created() {
      if(this.$route.query['loginError']) {
        this.$store.dispatch('setError', 'Please log in to access this page')
      }
    }
  };
</script>

<style lang="scss" scoped>
  .login {
    max-width: 500px;
  }
</style>
