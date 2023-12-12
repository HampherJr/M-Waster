<template>
  <di class="flex flex-center"> </di>
  <q-header class="bg-white q-pb-md shadow-1">
    <q-toolbar>
      <q-btn flat dense round color="dark" icon="arrow_back" aria-label="Menu" />

      <q-toolbar-title class="text-dark text-center">
     Items We Collect
      </q-toolbar-title>

      <q-btn
        label="Log Out"
        unelevated
        text-color="green"
        class="text-capitalize"
        @click="$router.push({ path: '/auth/homepage' })"
      ></q-btn>
    </q-toolbar>
  </q-header>

    <q-card class="my-card">
      <q-img src="../assets/plasticbottle.jpg" height="120px">
        <div class="absolute-bottom text-h4">
          <q-btn flat>Plastics</q-btn>
          <div class="text-subtitle2">plastic bottles </div>
        </div>
      </q-img>
    </q-card>

    <q-card class="my-card">
      <q-img src="../assets/phonewaste.jpg" height="120px">
        <div class="absolute-bottom text-h4">
          <q-btn flat>E-Wastes</q-btn>
          <div class="text-subtitle2">Computers, printers</div>
        </div>
      </q-img>

    </q-card>
    <q-card class="my-card">
      <q-img src="../assets/metal.jpg" height="120px">
        <div class="absolute-bottom text-h4">
          <q-btn flat>Metals</q-btn>
          <div class="text-subtitle2">Aluminium, Silver and scrap metals</div>
        </div>
      </q-img>

    </q-card>  <q-card class="my-card">
      <q-img src="../assets/glass.jpg" height="120px">
        <div class="absolute-bottom text-h4">
          <q-btn flat>Glass</q-btn>
          <div class="text-subtitle2">glass bottles </div>
        </div>
      </q-img>

    </q-card>
    <q-card class="my-card">
      <q-img src="../assets/foodwaste.jpg" height="120px">
        <div class="absolute-bottom text-h4">
          <q-btn flat>Food wastes</q-btn>

        </div>
      </q-img>

    </q-card>
</template>

