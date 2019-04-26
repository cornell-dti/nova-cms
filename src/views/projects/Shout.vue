<template>
  <projectpage pageName="Shout"/>
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator";
import ProjectPage from '@/views/ProjectPage.vue';

Vue.component('projectpage', ProjectPage);

@Component
export default class Shout extends Vue {}
</script>