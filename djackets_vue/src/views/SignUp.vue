<template>
  <div class="page-sign-up">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Sign up</h1>

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
          <div class="field">
            <label>Confirm Passworde</label>
            <div class="control">
              <input
                type="password"
                class="input"
                v-model="userData.password2"
              />
            </div>
          </div>

          <div class="notification is-danger" v-if="userData.errors.length">
            <p v-for="error in userData.errors" :key="error">{{ error }}</p>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-dark">Sign up</button>
            </div>
          </div>

          <hr />

          Or <router-link to="/log-in">click here </router-link>to Log in!
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import http from "@/utils/http";
import { toast } from "bulma-toast";
import { reactive } from "vue";
import router from "../router";

const userData = reactive({
  username: "",
  password: "",
  password2: "",
  errors: [],
});

const submitForm = () => {
  userData.errors = [];

  if (userData.username === "") {
    userData.errors.push("Username can't be empty");
  }
  if (userData.password === "") {
    userData.errors.push("Password can't be empty");
  }
  if (userData.password !== userData.password2) {
    userData.errors.push("The passwords doesn't match");
  }
  if (!userData.errors.length) {
    const formData = {
      username: userData.username,
      password: userData.password,
    };

    http
      .post("/v1/users/", formData)
      .then((response) => {
        toast({
          message: "Account successfully created, please log in!",
          type: "is-success",
          dismissible: true,
          pauseOnHover: true,
          duration: 2000,
          position: "bottom-right",
        });
        router.push("/log-in");
      })
      .catch((error) => {
        if (error.response) {
          for (const property in error.response.data) {
            userData.errors.push(`${property}: ${error.response.data[property]}`);
          }
          console.log(JSON.stringify(error.response.data));
        } else if (error.message) {
          userData.errors.push("Something went wrong. Please try again");

          console.log(JSON.stringify(error));
        }
      });
  }
};
</script>
