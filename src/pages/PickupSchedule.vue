<template>
  <di class="flex flex-center"> </di>
  <q-header class="bg-white q-pb-md shadow-1">
    <q-toolbar>
      <q-btn flat dense round color="dark" icon="close" aria-label="Menu" />

      <q-toolbar-title class="text-dark text-center">
        Waste Details
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

  <div class="q-pa-md" style="max-width: 400px">
    <div class="q-gutter-md">
      <q-select
        rounded
        outlined
        v-model="model"
        :options="options"
        label="Select Waste Category"
      />
      <q-select
        rounded
        outlined
        v-model="model"
        :options="BuyerOptions"
        label="Select Buyer"
      />
      <q-select
        rounded
        outlined
        v-model="model"
        :options="ModeOptions"
        label="Select pickup mode"
      />
      <q-input
        autogrow
        v-model="desc"
        outlined
        rounded
        label="Waste Description"
        style="max-width: 400px"
      />
      <q-input
        v-model.number="model"
        type="number"
        label="Waste quantity"
        style="max-width: 400px"
        outlined
        rounded
      />
      <q-input
        rounded
        outlined
        bottom-slots
        v-model="text"
        label="Send current location"
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close"
          @click="text = ''" class="cursor-pointer" />
        </template>
      </q-input>
      <q-file
        v-model="files"
        label="Pick images"
        rounded
        outlined
        counter
        :counter-label="counterLabelFn"
        max-files="3"
        multiple
        style="max-width: 400px">

        
        <template v-slot:prepend>
          <q-icon name="photo_camera"/>
        </template>
      </q-file>

      <div class="flex flex-center row q-mt-lg">
        <q-btn
          rounded
          color="green"
          label="Send"
          text="capitilize"
          class="col-11 q-pa-md text-capitalize"
        />
    <q-footer elevated class="bg-grey-3 text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8" v-model="tab">
          <q-tab name="images" label="Home" icon="home"/>
          <q-tab name="videos" label="Pricing" icon="payments" />
          <q-tab name="articles" label="Profile" icon="person"/>
        </q-tabs>
      </q-footer>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("images"),
      model: ref(null),
      options: ["plastics", "Metal", "Electronic wastes", "Glass", "Oracle"],
      BuyerOptions: ["All", "Company"],
      ModeOptions: ["To be Picked", "To be delivered"],
    };
  },
};
</script>
