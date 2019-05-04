<template>
  <div class="home">
    <h1>Login</h1>
    <button v-on:click="login()">Login</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GAuth from "vue-google-oauth2";

const gauthOption = {
  clientId:
    "336331681014-5chk8fh6ireimubt8kir7n23d4395h2h.apps.googleusercontent.com"
};

Vue.use(GAuth, gauthOption);

import VueResource from "vue-resource";
Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
const http = Vue.http;

import * as backend from "@/views/backend";

//export default class Home extends Vue {}
export default {
  methods: {
    login() {
      (this as any).$gAuth
        .signIn()
        .then(GoogleUser => {
          let email = GoogleUser.getBasicProfile().getEmail();
          let userID = email.substring(0, email.indexOf("@cornell.edu"));
          backend.initUser(userID).then(response => {
            backend.initUsersNames().then(response2 => {
              return http.post("http://localhost:3000/login", {
                id_token: GoogleUser.getAuthResponse().id_token
              });
            });

            (this as any).isSignIn = (this as any).$gAuth.isAuthorized;
          });
        })
        .catch(error => {
          console.log(error);
          //on fail do something
        });
    }
  }
};
</script>
