<template>
  <v-container class="product">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="page-title">Create New Product</h2>
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
              <v-btn 
                class="warning"
                @click="upload"
                >
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
              </v-btn>
              <input 
                class="file-loader"
                type="file"
                accept="image/*"
                ref="fileInput"
                @change="onFileChange"
                />
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12 mb-4>
              <img
              v-if="imageSrc"
                :src='imageSrc'
                height="200"
              />
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex xs12 mb-4>
              <v-switch
                color='primary'
                :label="'Add to Promo'"
                :v-model="promo"
                @click="handlePromo"
              >
              </v-switch>
            </v-flex>
          </v-layout>

          <v-btn
            :loading="loading"
            :disabled="!valid || !image ||loading "
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
        valid: false,
        image: null,
        imageSrc: ''
};
    },
    methods: {
      handlePromo() {
        this.promo = !this.promo;
      },
      upload() {
        this.$refs.fileInput.click()
      },
      onFileChange(event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
            this.imageSrc = reader.result
            console.log(e)
        }
        reader.readAsDataURL(file)
        this.image = file
      },
      onSubmit() {
        if (this.$refs.form.validate() && this.image) {
          const product = {
            title: this.title,
            vendor: this.vendor,
            material: this.material,
            color: this.color,
            price: this.price,
            description: this.description,
            promo: this.promo,
            image: this.image
          }
          this.$store.dispatch('createProduct', product)
          .then(() => this.$router.push('/list'))
          .catch((err) => console.log('Error', err))
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
    }
  };
</script>
<style scoped>
  .text-area-wrapp {
    padding: 0;
  }

  .file-loader {
    display: none;
  }
</style>
