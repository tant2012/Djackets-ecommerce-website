<template>
  <tr>
    <td>
      <router-link :to="item.product.get_absolute_url">{{
        item.product.name
      }}</router-link>
    </td>
    <td>${{ item.product.price }}</td>
    <td>
      {{ item.quantity }}
      <a @click="decrementQuantity(item)">-</a>
      <a @click="incrementQuantity(item)">+</a>
    </td>
    <td>{{ getItemTotal(item).toFixed(2) }}</td>
    <td><button class="delete" @click="removeFromCart(item)"></button></td>
  </tr>
</template>

<script setup>
import { useStore } from "../store";

const props = defineProps({
  initialItem: {
    type: Object,
  }
});

const emits = defineEmits(['removeFromCart'])

let item = props.initialItem;
const store = useStore()

const getItemTotal = (item) => {
  return item.quantity * item.product.price;
};

const updateCart = () => {
    localStorage.setItem('cart', JSON.stringify(store.cart))
}

const removeFromCart = () =>{
    emits('removeFromCart',item)
    updateCart()
}

const incrementQuantity = (item) => {
  item.quantity += 1;
  if (item.quantity === 0) {
    removeFromCart(item);
  }
  updateCart();
};

const decrementQuantity = (item) => {
  item.quantity -= 1;
  updateCart();
};


</script>

<style></style>
