<template>

  <q-page class="q-pt-l">
  <di class="flex flex-center">
    <q-img
        src="../assets/login.png"
        style="height: 140px; max-width: 150px"
></q-img>

</di>
    <q-header class="bg-white q-pb-md shadow-1">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          color="dark"
          icon="close"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-dark text-center text-h4">
          Login
        </q-toolbar-title>

        <q-btn
          label="sign up"
          unelevated
          text-color="green"
          class="text-capitalize"
          @click="$router.push({path: '/auth/register'})"
        ></q-btn>
      </q-toolbar>
    </q-header>
    <div>
      <q-input rounded
                outlined
                v-model="text"
                label="Email"
                class="q-mx-md q-mt-md"
                />
      <q-input v-model="password"
      class="q-mx-md q-mt-md"
      label="Password"
               rounded
                outlined
                :type="isPwd ? 'password' : 'text'"
                >
        <template v-slot:append>
             <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

    </div>
    <div class="flex flex-center row q-mt-lg">
        <q-btn rounded
                color="green"
                label="Login"
                text="capitilize"
                class=" col-11 q-pa-md text-capitalize"
                />

        <q-btn text-color="green"
                unelevated l
                abel="Forgot your password ?"
                class=" col-11 q-pa-md text-capitalize"/>

      </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(){
return{
  password: ref(''),
  isPwd: ref(true),
      }
    }
}
</script>







