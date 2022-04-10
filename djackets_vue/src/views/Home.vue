<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">Welcome to Djacket</p>
        <p class="subtitle">The best jacket store online</p>
      </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Latest products</h2>
      </div>
      <ProductBox
        v-for="product in latestProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import http from "../utils/http";
import { ref, onMounted } from "vue";
import { useStore } from "../store";
import ProductBox from "@/components/ProductBox";

const store = useStore();

const latestProducts = ref([]);

const getLatestProducts = async () => {
  store.setIsLoading(true);

  await http
    .get("/v1/latest-products/")
    .then((response) => {
      latestProducts.value = response.data;
    })
    .catch((error) => console.log(error));

  store.setIsLoading(false);
};

onMounted(() => {
  getLatestProducts();
  document.title = "Home | Djackets";
});
</script>
