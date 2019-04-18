<template>
  <div class="admin">
    <h1 class="admin-header-main">{{`Admin Tools`}}</h1>

    <div class="admin-toggle">
      <div class="admin-toggle-row">
        <span class="admin-toggle-text">{{`Accepting Applications`}}</span>
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      <div class="admin-toggle-row">
        <span class="admin-toggle-text">{{`Giving Day`}}</span>
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
    </div>

    <div class="admin-dropdown">
      <div class="admin-dropdown-top">
        <span class="admin-dropdown-text">{{`DTI Members`}}</span>
        <div class="admin-dropdown-arrow"></div>
      </div>
      <div class="admin-dropdown-content">
        <div class="admin-dropdown-main">
          <table class="admin-table">
            <tr class="row" v-for="(field, index) in getProfileFormData('members')" :key="index">
              <td class="admin-name col">{{field.name}}</td>
              <td class="admin-email col">{{field.email}}</td>
              <td class="admin-type col">{{field.type}}</td>
              <td class="admin-edit col">{{`Edit`}}</td>
            </tr>
          </table>
        </div>
        <div class="admin-button--wrapper">
          <button class="admin-button">{{`+ Add a Member`}}</button>
        </div>
      </div>
    </div>

    <div class="admin-dropdown">
      <div class="admin-dropdown-top">
        <span class="admin-dropdown-text">{{`Forms`}}</span>
        <div class="admin-dropdown-arrow"></div>
      </div>
      <div class="admin-dropdown-content">
        <div class="admin-dropdown-main"></div>
        <div class="admin-button--wrapper">
          <button class="admin-button">{{`+ Add a Form`}}</button>
        </div>
      </div>
    </div>

    <div class="admin-dropdown">
      <div class="admin-dropdown-top">
        <span class="admin-dropdown-text">{{`Events`}}</span>
        <div class="admin-dropdown-arrow"></div>
      </div>
      <div class="admin-dropdown-content">
        <div class="admin-dropdown-main"></div>
        <div class="admin-button--wrapper">
          <button class="admin-button">{{`+ Add an Event`}}</button>
        </div>
      </div>
    </div>

    <div class="admin-dropdown">
      <div class="admin-dropdown-top">
        <span class="admin-dropdown-text">{{`Edit Product Pages`}}</span>
        <div class="admin-dropdown-arrow"></div>
      </div>
      <div class="admin-dropdown-content">
        <div class="admin-dropdown-main admin-buttons">
          <button
            class="page-button"
            v-for="(product, index) in getProfileFormData('products')"
            :key="index"
            :style="{ backgroundColor: product.color}"
          >{{product.name}}</button>
        </div>
      </div>
    </div>

    <div class="admin-dropdown">
      <div class="admin-dropdown-top">
        <span class="admin-dropdown-text">{{`Edit DTI Team Pages`}}</span>
        <div class="admin-dropdown-arrow"></div>
      </div>
      <div class="admin-dropdown-content">
        <div class="admin-dropdown-main admin-buttons">
          <button
            class="page-button"
            v-for="(page, index) in getProfileFormData('pages')"
            :key="index"
          >{{page.name}}</button>
        </div>
      </div>
    </div>

    <div class="admin-dropdown">
      <div class="admin-dropdown-top">
        <span class="admin-dropdown-text">{{`Approve Edits`}}</span>
        <div class="admin-dropdown-arrow"></div>
      </div>
      <div class="admin-dropdown-content">
        <div class="admin-dropdown-main">
          <table class="admin-table">
            <tr class="row">
              <th class="admin-name col admin-table-heading">Category</th>
              <th class="admin-content col admin-table-heading">admin</th>
              <th class="admin-date col admin-table-heading">Updated</th>
              <th class="admin-status col admin-table-heading">Status</th>
            </tr>
            <tr class="row" v-for="(field, index) in getProfileFormData('edits')" :key="index">
              <td class="admin-name col">{{field.name}}</td>
              <td class="admin-content col">{{field.content}}</td>
              <td class="admin-date col">{{field.date}}</td>
              <td class="admin-status col" :class="field.status.toLowerCase()">{{field.status}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 30px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #eea4ad;

  &:before {
    background-color: #ff324a;
  }
}

input:focus + .slider {
  box-shadow: 0 0 1px #eea4ad;

  &:before {
    background-color: #ff324a;
  }
}

input:checked + .slider:before {
  -webkit-transform: translateX(55px);
  -ms-transform: translateX(55px);
  transform: translateX(55px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.row {
  padding: 20px;
}

.row:nth-child(odd) {
  background-color: #dddddd;
}

.col {
  padding: 20px;
  font-weight: normal;
}

.admin-table {
  margin-top: 45px;
  margin-bottom: 45px;
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
}

.admin-name {
  width: 25%;
  text-align: left;
  font-weight: 600;
}

.admin-email {
  width: 50%;
}

.admin-type {
  width: 12.5%;
}

.admin-edit {
  width: 12.5%;
}

.admin {
  margin-left: 20%;
  margin-right: 20%;
  font-size: 18px;
  font-weight: 500;
}

.admin-dropdown-main {
  margin-left: 20px;
  margin-right: 20px;
}

.admin-header {
  &-main {
    text-decoration-line: underline;
    font-weight: normal;
    font-size: 30px;
    text-align: left;
    margin-bottom: 60px;
  }
}

.admin-toggle-row {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.admin-toggle-text {
  text-align: left;
  font-weight: 600;
  font-size: 28px;
  color: #000000;
}

.admin-dropdown {
  margin-top: 60px;
}

.admin-dropdown-top {
  background-color: #eeeeee;
  padding: 15px 20px 15px 20px;
  font-weight: 600;
  font-size: 28px;
  color: #000000;
  display: flex;
}

.admin-button {
  background: #747474;
  color: white;
  border-radius: 19px;
  width: 100%;
  display: flex;
  justify-content: left;
  font-size: 24px;
  font-weight: normal;
  height: 55px;
  padding-left: 20px;

  &--wrapper {
    width: 75%;
    margin-top: 30px;
  }
}

.admin-buttons {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.page-button {
  color: #000000;
  background-color: #c4c4c4;
  padding: 8px 21px 8px 21px;
  border-radius: 19px;
  margin-right: 20px;
  margin-bottom: 12px;
  font-weight: normal;
  font-size: 18px;
  border: none;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as backend from "@/views/backend";
// import MemberProfileModal from "@/views/MemberProfileModal.vue";

export default class WebsiteProfile extends Vue {
  getProfileFormData: Function = backend.getProfileFormData;
}
</script>
