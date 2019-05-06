<template>
  <div class="home">
    <h1>Login</h1>
    <button v-on:click="login()">Login</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GAuth from "vue-google-oauth2";
import axios from "axios";

const gauthOption = {
  clientId:
    "336331681014-5chk8fh6ireimubt8kir7n23d4395h2h.apps.googleusercontent.com"
};

Vue.use(GAuth, gauthOption);

import * as backend from "@/views/backend";

//export default class Home extends Vue {}
export default {
  methods: {
    login() {
      (this as any).$gAuth
        .signIn()
        .then(GoogleUser => {
          axios.post("http://localhost:3000/login", {
            
                id_token: GoogleUser.getAuthResponse().id_token
              });.then(x => {
                x.userid
              })
          let email = GoogleUser.getBasicProfile().getEmail();
          let userID = email.substring(0, email.indexOf("@cornell.edu"));
          backend.initUser(userID).then(response => {
            backend.initUsersNames().then(response2 => {

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
<style scoped lang="scss">
.home {
  width: 100%;
  margin: 4vh 10vw 4vh 10vw;
}
</style>