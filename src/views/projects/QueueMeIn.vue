<template>
  <projectpage pageName="QueueMeIn"/>
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator";
import ProjectPage from '@/views/ProjectPage.vue';

Vue.component('projectpage', ProjectPage);

@Component
export default class QueueMeIn extends Vue {}
</script>