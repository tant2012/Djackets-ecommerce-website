<template>
  <div class="page-cart">
    <div class="columns is-multiline">
      <div class="columns is-12">
        <h1 class="title">Cart</h1>
      </div>

      <div class="column is-12 box">
        <table class="table is-fullwidth" v-if="cartTotalLength">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            <CartItem
              v-for="item in cart.items"
              :key="item.product.id"
              :initialItem="item"
              @removeFromCart="removeFromCart"
            />
          </tbody>
        </table>

        <p v-else>Your cart is empty</p>
      </div>

      <div class="column is-12 box">
        <h2 class="subtitle">Summary</h2>

        <strong>${{ cartTotalPrice.toFixed(2) }}</strong
        >, {{ cartTotalLength }} items
        <hr />

        <router-link to="/cart/checkout" class="button is-dark"
          >Proceed to checkout</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import CartItem from "@/components/CartItem";
import { ref, onMounted, computed } from "vue";
import { useStore } from "../store";

const cart = ref({ items: [] });
const store = useStore();

onMounted(() => {
  cart.value = store.cart;
});

const cartTotalLength = computed(() => {
  return cart.value.items.reduce((acc, curVal) => {
    return (acc += curVal.quantity);
  }, 0);
});

const cartTotalPrice = computed(() => {
  return cart.value.items.reduce((acc, curVal) => {
    return (acc += curVal.product.price * curVal.quantity);
  }, 0);
});


const removeFromCart = (item) => {
  cart.value.items = cart.value.items.filter(
    (i) => i.product.id !== item.product.id
  );
};


</script>
