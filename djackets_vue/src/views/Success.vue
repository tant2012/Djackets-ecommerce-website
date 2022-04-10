<template>
  <div class="page-success">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">Thank you</h1>
      </div>

      <p>
        Your order will be processed shortly. Please check your email for order
        details.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.title = "PaymentDone | Djackets";
});
</script>
