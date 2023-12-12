<template>
  <q-page class="q-pt-l">
    <q-header class="bg-white q-pb-md shadow-1">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          color="dark"
          icon="close"
          aria-label="Menu"

        />

        <q-toolbar-title class="text-dark text-center text-h4">
          Sign Up
        </q-toolbar-title>

        <q-btn
          label="Login"
          unelevated
          text-color="green"
          class="text-capitalize"
          @click="$router.push({path: '/auth/login'})"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <div>
     
      <q-input rounded outlined
        v-model="fullName"
        label="Full Name"
        class="q-mx-md q-mt-md"
        />
      <q-input rounded outlined
        v-model="email"
        label="Email"
        class="q-mx-md q-mt-md"
        />
      <q-input rounded outlined
         v-model="phone"
         label="Contact Number"
         class="q-mx-md q-mt-md"
         />
      <q-input autogrow
        rounded outlined
        v-model="address"
        label="Home Address"
        class="q-mx-md q-mt-md"
        />
      <q-input rounded
         outlined
         v-model="password"
         label="Password"
         class="q-mx-md q-mt-md"
         >
        <template v-slot:append>
          <q-btn icon="visibility"
                  unelevated/>
        </template></q-input>
      <q-input rounded
          outlined
          v-model="ConfirmPassword"
          label="Confirm Password"
          class="q-mx-md q-mt-md"/>
    </div>
    <div class="flex flex-center row q-mt-lg">
        <q-btn rounded
                color="green"
                label="sign up"
                text="capitilize"
                class=" col-11 q-pa-md text-capitalize"
                @click="register()"
        />
      </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import axios from "axios";

export default {
  setup(){
    return{
      email: ref(""),
      password: ref(""),
      fullName: ref(""),
      phone: ref(""),
      address: ref(""),
      ConfirmPassword: ref("")
    };
  },
mounted(){

},
methods: {
  register(){
    axios.post("", {})
    console.log(this.email, this.password, this.fullName, this.phone, this.address, this.confirmPassword);
  }
}
}
</script>
