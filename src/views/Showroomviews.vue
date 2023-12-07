<template>
  <v-sheet>
    <v-card
      class="d-flex align-center justify-center grayscale-image"
      image="/ourShowroom.png"
      :height="400"
    >
      <v-card-title
        ><h3 class="text-h3 text-white text-uppercase">
          Showroom
        </h3></v-card-title
      >
    </v-card>
    <v-container>
      <v-row>
        <v-col
          v-for="category in categorys"
          :key="category.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            variant="text"
            @click="prodectHandler(category)"
            :to="{ name: 'products', params: { name: category.name } }"
          >
            <v-card variant="text" :height="250" class="d-flex align-start">
              <!-- <v-img cover height="250" :src="category.url"></v-img> -->
              <img :src="category.url" class="img" alt="" />
            </v-card>
            <v-card-title class="text-wrap" align="center"
              ><h3 class="text-h6 font-weight-bold text-capitalize">
                {{ category.name }}
              </h3></v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useAppStore from "@/store/app";

export default {
  data() {
    return {};
  },

  created() {
    if (this.categorys === null) {
      this.getCategorys();
    }
  },
  methods: {
    prodectHandler(category) {
      localStorage.setItem("id", category.id);
      localStorage.setItem("name", category.name);
    },
    ...mapActions(useAppStore, ["getCategorys"]),
  },
  computed: {
    ...mapState(useAppStore, ["categorys"]),
  },
};
</script>

<style scoped>
.custom-image img {
  width: 100%;
  height: 250px;
}
.grayscale-image {
  filter: grayscale(100%);
}
.img {
  width: 100%;
  height: 100%;
}
</style>
