<template>
  <div class="page-checkout">
    <div class="column is-multiline">
      <div class="column is-12">
        <h1 class="title">Checkout</h1>
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
            <tr v-for="item in cart.items" :key="item.product.id">
              <td>{{ item.product.name }}</td>
              <td>${{ item.product.price }}</td>
              <td>
                {{ item.quantity }}
              </td>
              <td>{{ getItemTotal(item).toFixed(2) }}</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colspan="2">Total</td>
              <td>{{ cartTotalLength }}</td>
              <td>${{ cartTotalPrice.toFixed(2) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="column is-12 box">
        <h2 class="subtitle">Shipping details</h2>

        <p class="has-text-grey mb-4">* All fields are required</p>

        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="field">
              <label>First name*</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  v-model="buyerDetails.first_name"
                />
              </div>
            </div>

            <div class="field">
              <label>Last name*</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  v-model="buyerDetails.last_name"
                />
              </div>
            </div>

            <div class="field">
              <label>E-mail*</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  v-model="buyerDetails.email"
                />
              </div>
            </div>

            <div class="field">
              <label>Phone*</label>
              <div class="control">
                <input type="text" class="input" v-model="buyerDetails.phone" />
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="field">
              <label>Address*</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  v-model="buyerDetails.address"
                />
              </div>
            </div>

            <div class="field">
              <label>Zip code*</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  v-model="buyerDetails.zipcode"
                />
              </div>
            </div>

            <div class="field">
              <label>Place*</label>
              <div class="control">
                <input type="text" class="input" v-model="buyerDetails.place" />
              </div>
            </div>
          </div>
        </div>

        <div
          class="notification is-danger mt-4"
          v-if="buyerDetails.errors.length"
        >
          <p v-for="error in buyerDetails.errors" v-bind:key="error">
            {{ error }}
          </p>
        </div>

        <hr />

        <div id="card-element" class="mb-5"></div>

        <template v-if="cartTotalLength">
          <hr />

          <button class="button is-dark" @click="submitForm">
            Pay with Stripe
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import http from "@/utils/http";
import { reactive, ref, onMounted, computed } from "vue";
import { useStore } from "@/store";
import router from "@/router";

const store = useStore();

const buyerDetails = reactive({
  stripe: {},
  card: {},
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  address: "",
  zipcode: "",
  place: "",
  errors: [],
});
const cart = ref({ items: [] });

onMounted(() => {
  document.title = "Checkout | TGHomie";

  cart.value = store.cart;

  if (cartTotalLength.value > 0) {
    buyerDetails.stripe = Stripe(
      "pk_test_51Kn34eLYK7e5CI3yMMTCqZvFevruZPhSLtK0p9oVtDZwsJK8zt6Br0HNjNNOtGMNXPE8am7939XOuNK0AlvNcoOT00nzt4zfvr"
    );
    const elements = buyerDetails.stripe.elements();
    buyerDetails.card = elements.create("card", { hidePostalCode: true });
    buyerDetails.card.mount("#card-element");
  }
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

const getItemTotal = (item) => {
  return item.quantity * item.product.price;
};

const submitForm = () => {
  buyerDetails.errors = [];
  if (buyerDetails.first_name === "") {
    buyerDetails.errors.push("The first name field is missing!");
  }
  if (buyerDetails.last_name === "") {
    buyerDetails.errors.push("The last name field is missing!");
  }
  if (buyerDetails.email === "") {
    buyerDetails.errors.push("The email field is missing!");
  }
  if (buyerDetails.phone === "") {
    buyerDetails.errors.push("The phone field is missing!");
  }
  if (buyerDetails.address === "") {
    buyerDetails.errors.push("The address field is missing!");
  }
  if (buyerDetails.zipcode === "") {
    buyerDetails.errors.push("The zip code field is missing!");
  }
  if (buyerDetails.place === "") {
    buyerDetails.errors.push("The place field is missing!");
  }

  if (!buyerDetails.errors.length) {
    store.setIsLoading(true);
    buyerDetails.stripe.createToken(buyerDetails.card).then((result) => {
      if (result.error) {
        store.setIsLoading(false);
        buyerDetails.errors.push(
          "Something went wrong with Stripe. Please try again"
        );
        console.log(result.error.message);
      } else {
        stripeTokenHandler(result.token);
      }
    });
  }
};

const stripeTokenHandler = async (token) => {
  const items = [];
  for (let i = 0; i < cart.value.items.length; i++) {
    const item = cart.value.items[i];
    const obj = {
      product: item.product.id,
      quantity: item.quantity,
      price: item.product.price * item.quantity,
    };
    items.push(obj);
  }
  const data = {
    first_name: buyerDetails.first_name,
    last_name: buyerDetails.last_name,
    email: buyerDetails.email,
    address: buyerDetails.address,
    zipcode: buyerDetails.zipcode,
    place: buyerDetails.place,
    phone: buyerDetails.phone,
    items: items,
    stripe_token: token.id,
  };
  await http
    .post("/v1/checkout/", data)
    .then((response) => {
      store.clearCart();
      router.push("/cart/success");
    })
    .catch((error) => {
      buyerDetails.errors.push("Something went wrong. Please try again");
      console.log(error);
    });
  store.setIsLoading(false);
};
</script>
