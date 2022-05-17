<template>
  <v-container class="product">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Create New Product</h2>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="title"
            :rules="[(v) => !!v || 'Title is required']"
            label="Title"
            required
          ></v-text-field>

          <v-text-field
            v-model="vendor"
            label="Vendor Product"
          ></v-text-field>

          <v-text-field
            v-model="material"
            label="Material Product"
          ></v-text-field>

          <v-text-field
            v-model="color"
            label="Color Product"
          ></v-text-field>

          <v-text-field
            v-model="price"
            :rules="[(v) => !!v || 'Price is required']"
            label="Price Product"
            required
          ></v-text-field>

           <v-col
            cols="12"
            class="text-area-wrapp"
           >
            <v-textarea
              name="description"
              label="Description Product"
              v-model="description"
            ></v-textarea>
            </v-col>

          <v-layout>
            <v-flex xs12 mb-4>
              <v-btn class="warning">
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12 mb-4>
              <img
                src=''
                height="200"
              />
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12 mb-4>
              <v-switch
                color='primary'
                :label="'Add to Promo'"
              >
              </v-switch>
            </v-flex>
          </v-layout>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="onSubmit"
          >
            Create Product
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'NewProductView',
    data() {
      return {
        title: '',
        vendor: '',
        material: '',
        color: '',
        price: 0,
        description: '',
        promo: false,
        valid: false
};
    },
    methods: {
      onSubmit() {
        if (this.$refs.form.validate()) {
          const product = {
            title: this.title,
            vendor: this.vendor,
            material: this.material,
            color: this.color,
            price: this.price,
            description: this.description,
            promo: this.promo
          }
          console.log(product)
        }
      },
      reset () {
        this.$refs.form.reset()
      }
    }
  };
</script>
<style scoped>
  .text-area-wrapp {
    padding: 0;
  }
</style>
