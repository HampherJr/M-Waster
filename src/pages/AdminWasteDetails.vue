<template>
  <div class="q-pa-md">
    <q-table
      grid
      grid-header
      bordered
      title="Wastes"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
      <template v-slot:top-right>
        <q-input
          outlined
          rounded
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "desc",
    required: true,
    label: "Waste Type",
    align: "center",
    field: (row) => row.name,
    sortable: true,

  },
  {
    name: "quantity",
    align: "center",
    label: "Quantity",
    field: "quantity",
    sortable: true,
  },
  { name: "dscription",
    label: "Description",
    field: "Description",
    sortable: true
  },
  { name: "image",
    label: "image",
    field: ""
  },
  { name: "location",
    label: "Location",
    field: "location",
    sortable: true
  },
];

const rows = [
  {
    name: "Plastics",
    quantity: 159,
    Description: "cups and basins",
    image:"",
    location: "luwinga"
  },
  {
    name: "Electronic waste",
    quantity: 237,
    Description: "phones, computers and printers",
    image: 37,
  },
  {
    name: "food wastes",
    quantity: 262,
    Description: 16.0,
    image: 23,
  },
  {
    name: "Metals",
    quantity : 4,
    Description: "aluminium",
    image: 67,
  },
  {
    name: "Glass",
    quantity: 356,
    Description: 16.0,
    carbs: 49,
  }
];

export default {
  setup() {
    return {
      filter: ref(""),
      columns,
      rows,
    };
  },
};
</script>
