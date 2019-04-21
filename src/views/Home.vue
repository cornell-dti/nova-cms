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
    "399535557982-gqdln1sugjp69fr9ocsjv692qr76g4aj.apps.googleusercontent.com"
};

Vue.use(GAuth, gauthOption);

//export default class Home extends Vue {}
export default {
  methods: {
    getAuth() {
      this.$gAuth
        .getAuthCode()
        .then(authCode => {
          // On success
          return this.$http.post("http://your-backend-server.com/auth/google", {
            code: authCode,
            redirect_uri: "postmessage"
          });
        })
        .then(response => {
          // And then
        })
        .catch(error => {
          console.log(error);
          // On fail do something
        });
    },
    login() {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          // On success do something, refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleusergetid
          console.log("user", GoogleUser);
          // GoogleUser.getId() : Get the user's unique ID string.
          // GoogleUser.getBasicProfile() : Get the user's basic profile information.
          // GoogleUser.getAuthResponse() : Get the response object from the user's auth session. access_token and so on
          this.isSignIn = this.$gAuth.isAuthorized;
        })
        .catch(error => {
          console.log(error);
          //on fail do something
        });
    }
  }
};
</script>
