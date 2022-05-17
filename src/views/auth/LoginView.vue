<template>
  <v-container class="login">
     <h2>Login</h2>
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
        required
      ></v-text-field>


      <v-btn :disabled="!valid" color="success" class="mr-4" @click="onSubmit">
        Submit
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
          console.log(userData)
        } 
      },
      reset () {
        this.$refs.form.reset()
      }
    },
  };
</script>

<style lang="scss" scoped>
  .login {
    max-width: 500px;
  }
</style>
