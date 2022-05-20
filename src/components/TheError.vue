<template>
  <v-snackbar
    :multi-line="true"
    :timeout="8000"
    color="error"
    :value="true"
    @input="closeError"
  >
    {{ error }}

    <v-btn color="dark" text @click="closeError"> Close </v-btn>
  </v-snackbar>
</template>
<script>
export default {
  props: {
    error: {
    default: ''
    }
  },
  methods: {
      closeError() {
        this.$store.dispatch('clearError');
      },
  },

}
</script>