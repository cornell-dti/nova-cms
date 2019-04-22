<template>
  <div class="project">
    <h1 class="project-header project-header-main">{{`Edit Page`}}</h1>

    <form class="project-form">
      <h2 class="project-header project-header-sub">{{`Website Header`}}</h2>

      <div class="project-section">
        <label for="header" class="project-label">{{`Header`}}</label>
        <input type="text" name="header" class="project-input">

        <label for="subheader" class="project-label">{{`Sub-header`}}</label>
        <input type="text" name="subheader" class="project-input">

        <label for="link" class="project-label">{{`Link`}}</label>
        <input type="text" name="link" class="project-input">
      </div>
      <h2 class="project-header-sub">{{`Website Page`}}</h2>

      <div class="project-section">
        <label for="do" class="project-label">{{`What we do`}}</label>
        <input type="text" name="do" class="project-input">

        <div class="project-number" v-for="(feature, index) in [0, 1, 2]" :key="index">
          <label for="featureTitle" class="project-label">{{`Feature #`}}{{index + 1}}{{` Title`}}</label>
          <input type="text" name="featureTitle1" class="project-input">

          <label
            for="featureDescription"
            class="project-label"
          >{{`Feature #`}}{{index + 1}}{{` Description`}}</label>
          <textarea name="featureDescription" class="project-input project-textarea"/>

          <label for="featureImage" class="project-label">{{`Feature #`}}{{index + 1}}{{` Image`}}</label>
          <img
            name="featureImage"
            class="project-image"
            src="https://www.cornelldti.org/static/members/ew469.jpg"
          >
        </div>
      </div>

      <div class="project-section project-button-wrapper">
        <input type="submit" value="Apply" class="project-button">
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.project-button {
  border-radius: 20px;
  background: #ff324a;
  color: white;
  font-size: 24px;
  min-height: 90px;
  min-width: 260px;
  margin-top: 50px;

  &-wrapper {
    text-align: center;
  }
}

.project {
  margin-left: 20%;
  margin-right: 20%;
  font-size: 18px;
  font-weight: 500;
}

.project-header {
  text-align: left;

  &-main {
    text-decoration-line: underline;
    font-weight: normal;
    font-size: 30px;
  }
  &-sub {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 40px;
  }
}

.project-image {
  display: block;
  margin-right: auto;
  max-height: 165px;
  border-radius: 25px;
}

.project-input {
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 20px;
  min-height: 45px;
  width: 100%;
  margin-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  color: black;
}

.project-textarea {
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 90px;
  font: 400 18px Arial;
}

.project-form {
  text-align: left;
}

.project-section {
  width: 100%;
  display: block;
}

.project-label {
  margin: 20px 0 5px 15px;
  font-weight: 500;
  display: block;
  font-size: 18px;
  color: black;
}

.project-button {
  border-radius: 20px;
  background: #ff324a;
  color: white;
  font-size: 24px;
  min-height: 60px;
  min-width: 175px;
  margin-top: 85px;

  &-wrapper {
    text-align: center;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProjectPage extends Vue {}
</script>