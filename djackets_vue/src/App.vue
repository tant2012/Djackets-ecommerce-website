<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <strong>Djackets</strong></router-link
        >

        <a
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        class="navbar-menu"
        id="navbar-menu"
        :class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-end">
          <router-link to="/summer" class="navbar-item">Summer</router-link>
          <router-link to="/winter" class="navbar-item">Winter</router-link>

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light"
                >Login</router-link
              >

              <router-link to="/cart" class="button is-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart({{ cartTotalLength }})</span></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view />
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2021</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "./store";

const showMobileMenu = ref(false);
const store = useStore();
const cart = ref({ items: [] });

store.initializeStore(cart);

const cartTotalLength = computed(() => {
  let totalLength = 0;

  for (let i = 0; i < cart.value.items.length; i++) {
    totalLength += cart.value.items[i].quantity;
  }

  return totalLength;
});

onMounted(() => {
  cart.value = store.cart
})
</script>

<style lang="scss">
@import "../node_modules/bulma";
</style>
