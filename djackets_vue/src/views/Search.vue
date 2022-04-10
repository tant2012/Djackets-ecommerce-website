<template>
  <div class="page-search">
    <div class="colums is-multiline">
      <div class="column is-12">
        <h1 class="title">Search</h1>

        <h2 class="is-size-5 has-text grey">Search term: "{{ query }}"</h2>
      </div>
      <ProductBox
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import http from "@/utils/http";
import ProductBox from "@/components/ProductBox";
import { ref, onMounted } from "vue";
import { useStore } from "@/store";

const products = ref([]);
const query = ref('');
const store = useStore()

const performSearch = async () => {
    store.setIsLoading(true)

    await http
    .post('/v1/products/search/', {'query' : query.value})
    .then((response) => {
        products.value = response.data;
    })
    .catch((error) => {
        console.log(error);
    })

        store.setIsLoading(false)
}

onMounted(() => {
  document.title = "Search | Djackets";

  let uri = window.location.search.substring(1);
  let params = new URLSearchParams(uri);
  if (params.get("query")) {
    query.value = params.get("query");
    performSearch();
  }
});
</script>
