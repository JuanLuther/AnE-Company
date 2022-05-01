<script lang="ts">
import { useRoute, useRouter } from "vue-router";
import Logo from "./Logo.vue";
export default {
  components: { Logo },
  data() {
    return {};
  },
  computed: {
    getRouteName(): string {
      return useRoute().path;
    },
  },
};
</script>
<template>
  <section
    class="bg-text px-10 pt-5 pb-2 font-mono font-semibold text-background"
  >
    <nav class="block sm:flex sm:justify-between">
      <div>
        <div class="flex justify-center">
<<<<<<< HEAD
          <!-- <img src="./AE logo.png" alt="logo" class="rounded-full h-12" /> -->
=======
          <!-- <img src="/AE logo fin.svg" alt="logo" class="rounded-full h-12" /> -->
>>>>>>> gh-pages
        </div>
        <p class="italic text-sm mb-4 text-center">
          <span class="underline underline-offset-4">
            AE ARCHITECTS & ENGINEERS
          </span>
        </p>
      </div>
      <ul class="flex justify-evenly text-lg items-center sm:space-x-6">
        <li class="nav-item" :class="{ 'nav-active': getRouteName === '/' }">
          <router-link to="/">Home</router-link>
        </li>
        <li
          class="nav-item"
          :class="{ 'nav-active': getRouteName === '/about' }"
        >
          <router-link to="/about">About</router-link>
        </li>
        <li
          class="nav-item"
          :class="{ 'nav-active': getRouteName === '/portfolio' }"
        >
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        <li
          class="nav-item"
          :class="{ 'nav-active': getRouteName === '/permits' }"
        >
          <router-link to="/permits">Permits</router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>
