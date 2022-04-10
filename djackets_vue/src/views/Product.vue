<template>
  <div class="page-product">
    <div class="columns is-multiline">
      <div class="column is-9">
        <figure class="image mb-6"><img :src="product.get_image" /></figure>

        <h1 class="title">{{ product.name }}</h1>

        <p>{{ product.description }}</p>
      </div>

      <div class="column is-3">
        <h2 class="subtitle">Information</h2>
        <p><strong>Price:</strong>{{ product.price }}</p>

        <div class="field has-addons mt-6">
          <div class="control">
            <input type="number" class="input" min="1" v-model="quantity" />
          </div>

          <div class="control">
            <a class="button is-dark" @click="addToCart">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import http from "../utils/http";
import router from "@/router";
import { useStore } from "../store";
import { toast } from "bulma-toast";

const store = useStore();
let quantity = ref(1);
let product = ref({});

const getProducts = async () => {
  store.setIsLoading(store.isLoading, true);

  const category_slug = router.currentRoute.value.params.category_slug;
  const product_slug = router.currentRoute.value.params.product_slug;

  await http
    .get(`/v1/products/${category_slug}/${product_slug}`)
    .then((response) => {
      product.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  store.setIsLoading(store.isLoading, false);
};

const addToCart = () => {
  if (isNaN(quantity.value) || quantity.value < 1) {
    quantity.value = 1;
  }
  const item = {
    product: product.value,
    quantity: quantity.value,
  };
  store.addToCart(store.cart, item);

  toast({
    message: "The product was added to the cart",
    type: "is-success",
    dismissible: true,
    pauseOnHover: true,
    duration: 2000,
    position: "bottom-right",
  });
};

onMounted(() => {
  getProducts();
});
</script>
