<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-grey-4 text-black" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <h3></h3><q-toolbar-title>
          <q-avatar>
            <img src="src/assets/waste.jpg"/>
          </q-avatar>
         Waste Collectors Hub
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-card class="my-card">
      <q-img src="../assets/truck.jpg" height="280px">
        <div class="absolute-bottom text-h6">
          Find Wastes
          <div class="text-subtitle2">Buy wastes from Waste producers at your disporsal</div>
        </div>
      </q-img>
    </q-card>
    <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8" v-model="tab">
          <q-tab name="home" label="Items" icon="category"/>
          <q-tab name="payment" label="Trash4Cash" icon="paid" />
          <q-tab name="profile" label="Chats" icon="mail"/>
        </q-tabs>
        <q-img src="../assets/mzuzu.png" height="160px"></q-img>

    <div>
    <q-footer elevated class="bg-grey-3 text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8" v-model="tab">
          <q-tab name="home" label="Home" icon="home"/>
          <q-tab name="payment" label="Pricing" icon="payments" />
          <q-tab name="profile" label="Profile" icon="person"/>
        </q-tabs>
      </q-footer>
    </div>
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      behavior="mobile"
      elevated
    >
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>

  <router-view />
</q-page-container>


  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

