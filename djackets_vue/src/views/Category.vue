<template>
  <div class="page-category">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">{{ category.name }}</h2>
      </div>

      <ProductBox
        v-for="product in category.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { toast } from "bulma-toast";
import { ref, onMounted, watch } from "vue";
import router from "@/router";
import { useStore } from "@/store";
import http from "@/utils/http";
import ProductBox from "@/components/ProductBox.vue";

const category = ref({ products: [] });
const store = useStore();

const getCategory = async () => {
  const categorySlug = router.currentRoute.value.params.category_slug;
  store.setIsLoading(true);

  await http
    .get(`/v1/products/${categorySlug}/`)
    .then((response) => {
      category.value = response.data;

      document.title = category.value.name + " | Djackets";
    })
    .catch((error) => {
      console.log(error);

      toast({
        message: "Something went wrong. Please try again.",
        type: "is-danger",
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: "bottom-right",
      });
    });
  store.setIsLoading(false);
};

onMounted(() => {
  getCategory();
});

watch(
  () => router.currentRoute.value,
  (to) => {
    if (to.name === "Category") {
      getCategory();
    }
  }
);
</script>

<style></style>
