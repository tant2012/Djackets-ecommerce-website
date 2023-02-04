<template>
  <div class="page-my-account">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">My Account</h1>
      </div>

      <div class="column is-12">
        <button @click="logout" class="button is-danger">Log out</button>
      </div>

      <div class="column is-12">
        <h2 class="subtitle">My orders</h2>
        <OrderSummary v-for="order in orders" :key="order.id" :order="order" />
      </div>
    </div>
  </div>
</template>

<script setup>
import http from "@/utils/http";
import { useStore } from "@/store";
import router from "@/router";
import OrderSummary from "@/components/OrderSummary";
import { onMounted, ref } from "vue";

const orders = ref([]);
const store = useStore();

const logout = () => {
  http.defaults.headers.common["Authorization"] = "";
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("userid");
  store.removeToken();
  router.push("/");
};

const getMyOrders = async () => {
  store.setIsLoading(true);

  await http
    .get("/v1/orders/")
    .then((response) => {
      orders.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  store.setIsLoading(false);
};

onMounted(() => {
  document.title = "My account | TGHomie";

  getMyOrders();
});
</script>
