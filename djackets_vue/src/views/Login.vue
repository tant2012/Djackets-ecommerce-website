<template>
  <div class="page-log-in">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Log In</h1>

        <form @submit.prevent="submitForm">
          <div class="field">
            <label>Username</label>
            <div class="control">
              <input type="text" class="input" v-model="userData.username" />
            </div>
          </div>
          <div class="field">
            <label>Password</label>
            <div class="control">
              <input
                type="password"
                class="input"
                v-model="userData.password"
              />
            </div>
          </div>

          <div class="notification is-danger" v-if="userData.errors.length">
            <p v-for="error in userData.errors" :key="error">{{ error }}</p>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-dark">Login</button>
            </div>
          </div>

          <hr />

          Don't have an account?
          <router-link to="/sign-up">click here </router-link>to Sign up!
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import http from "@/utils/http";
import { reactive, onMounted } from "vue";
import { useStore } from "../store";
import router from "../router";

const userData = reactive({
  username: "",
  password: "",
  errors: [],
});

const store = useStore();

const submitForm = async () => {
  http.defaults.headers.common["Authorization"] = "";
  localStorage.removeItem("token");
  const formData = {
    username: userData.username,
    password: userData.password,
  };
  await http
    .post("/v1/token/login/", formData)
    .then((response) => {
      const token = response.data.auth_token;
      store.setToken(token);

      http.defaults.headers.common["Authorization"] = "Token " + token;
      localStorage.setItem("token", token);
      const toPath = router.currentRoute.value.query.to || "/cart";
      router.push(toPath);
    })
    .catch((error) => {
      if (error.response) {
        for (const property in error.response.data) {
          userData.errors.push(`${property}: ${error.response.data[property]}`);
        }
      } else {
        userData.errors.push("Something went wrong. Please try again");

        console.log(JSON.stringify(error));
      }
    });
};

onMounted(() => {
  document.title = "Log in | TGHomie";
});
</script>
