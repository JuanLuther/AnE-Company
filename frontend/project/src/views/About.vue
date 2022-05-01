<script lang="ts">
import Team from "@/components/Team.vue";
export default {
  components: { Team },
};
</script>
<template>
  <!-- <section
    class="py-3 px-10 bg-fixed"
    style="background-image: url(/about.jpg)"
  > -->
  <section class="py-3 px-20 from-rose-900">
    <!-- About -->
    <div class="sm:flex sm:justify-around gap-5">
      <div class="bg-white p-5 rounded shadow-xl my-5">
        <p class="p-header text-left">About Us</p>
        <hr class="border-red-500" />
        <p class="p-body">
          AE Architects &amp; Engineers was established in the year 2019 by the
          group of architects; Loquillano, Vega and Suficiencia Associated with
          the engineers. We already handled different types of projects such as
          Residential and Commercial projects for four years. Our primary line
          of work are Design and Construction. We also provide technical support
          services for our formworks clients.
        </p>
        <p class="p-body">
          Before AE firm, the team was involved in different major companies
          until we decided to build our own. Since it is an establishment, we
          assertively led AE Firm, making our reputation as a dependable
          provider of quality design and construction services.
        </p>
        <hr class="border-red-500" />
      </div>
      <!-- vision -->
      <div class="my-5">
        <div class="bg-white p-5 rounded shadow-xl">
          <p class="p-header">Vision</p>
          <hr class="border-red-500" />
          <p class="p-body">
            To be the leading construction company, sought after by potential
            clients and employees by building our strengths in reliable
            execution, cost efficient, innovative designs, and timely completion
            with the highest standards of workmanship.
          </p>
          <hr class="border-red-500" />
        </div>
      </div>
      <!-- mission -->
      <div class="my-5">
        <div class="bg-white p-5 rounded shadow-xl">
          <p class="p-header">Mission</p>
          <hr class="border-red-500" />
          <p class="p-body">
            To provide quality workmanship and highest level of construction
            services with professionalism, integrity, honesty and fairness.
          </p>
          <hr class="border-red-500" />
        </div>
      </div>
    </div>

    <!-- Meet the Team -->
    <Team />
  </section>
</template>
