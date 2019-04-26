<template>
  <div class="home">
    <h1>Login</h1>
    <button v-on:click="getAuth()">getAuth</button>
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

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.emulateJSON = true
const http=Vue.http

//export default class Home extends Vue {}
export default {
  methods: {
    login() {
      (this as any).$gAuth
        .signIn()
        .then(GoogleUser => {
          console.log("user", GoogleUser);
          //console.log(GoogleUser.getId()); //: Get the user's unique ID string.
          console.log(GoogleUser.getAuthResponse().id_token);

          // console.log(http);
          // console.log(Vue.http);
          // console.log(this.$http);
          //  console.log((this as any).$http);

          return http.post("http://localhost:3000/login", {
            id_token: GoogleUser.getAuthResponse().id_token,
          });
          // GoogleUser.getBasicProfile() : Get the user's basic profile information.
          // GoogleUser.getAuthResponse() : Get the response object from the user's auth session. access_token and so on
          (this as any).isSignIn = (this as any).$gAuth.isAuthorized;
        })
        .catch(error => {
          console.log(error);
          //on fail do something
        });
    }
  }
};
</script>
