<template>
  <div class="edits">
    <h1 class="edits-header">{{`Pending Edits`}}</h1>
    <table class="edits-table">
      <tr class="row">
        <th class="edits-name col edits-table-heading">Category</th>
        <th class="edits-content col edits-table-heading">Edits</th>
        <th class="edits-date col edits-table-heading">Updated</th>
        <th class="edits-status col edits-table-heading">Status</th>
      </tr>
      <tr class="row" v-for="(field, index) in getProfileFormData('edits')" :key="index">
        <td class="edits-name col">{{field.name}}</td>
        <td class="edits-content col">{{field.content}}</td>
        <td class="edits-date col">{{field.date}}</td>
        <td class="edits-status col" :class="field.status.toLowerCase()">{{field.status}}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped lang="scss">
.edits {
  margin-left: 45px;
  margin-right: 45px;
  font-size: 18px;
  font-weight: 500;
}

.edits-header {
  text-align: left;
  text-decoration-line: underline;
  font-weight: normal;
  font-size: 30px;
}

.row {
  padding: 20px;
}

.row:nth-child(even) {
  background-color: #dddddd;
}

.col {
  padding: 20px;
  font-weight: normal;
}

.edits-table {
  margin-top: 45px;
  margin-bottom: 45px;
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
}

.edits-table-heading {
  font-weight: 600;
  text-decoration-line: underline;
}

.edits-name {
  width: 25%;
  text-align: left;
  font-weight: 600;
}

.edits-content {
  width: 50%;
}

.edits-date {
  width: 12.5%;
}

.edits-status {
  width: 12.5%;
}

.approved {
  color: green;
}

.rejected {
  color: #ff324a;
}

.pending {
  color: #464646;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as backend from "@/views/backend";

export default class WebsiteProfile extends Vue {
  getProfileFormData: Function = backend.getProfileFormData;
  getEditsFromName: Function = backend.getEditsFromName;
}
</script>
