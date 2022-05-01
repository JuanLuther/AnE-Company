<script lang="ts">
import Team from "@/components/Team.vue";
import Services from "@/components/Services.vue";
import Logo from "../components/Logo.vue";
export default {
  components: {
    Team,
    Services,
    Logo,
  },
};
</script>

<template>
  <main class="px-20 py-4 font-mono bg-background">
    <!-- main -->
    <Logo />
    <div class="text-2xl py-5">
      <p class="text-center font-semibold">
        An architectural firm that is dedicated on giving our clients the best
        treatment that they deserved (temporary).
      </p>
    </div>
    <!-- featured projects -->
    <div class="py-10">
      <p class="p-header">Featured Projects</p>
      <button
        class="text-white bg-primary rounded p-2 shadow hover:bg-secondary"
      >
        Learn More
      </button>
    </div>

    <Services />
  </main>
</template>
