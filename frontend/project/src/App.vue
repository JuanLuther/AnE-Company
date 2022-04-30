<script lang="ts">
import FooterVue from "./components/Footer.vue";
import TopNavVue from "./components/TopNav.vue";
export default {
  data() {
    return {
      dark: true,
    };
  },
  components: { FooterVue, TopNavVue },
};
</script>

<template>
  <main class="bg-background text-text dark:bg-dbackground dark:text-dtext">
    <TopNavVue />
    <router-view></router-view>
    <FooterVue />
  </main>
</template>
