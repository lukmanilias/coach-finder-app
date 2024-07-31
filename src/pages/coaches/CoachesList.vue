<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>REFRESH</button>
      <router-link to="/register">Register a Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      LIST OF COACHES
      <li v-for="coach in coachesList" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No coaches found.</h3>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('coaches', ['hasCoaches', 'coachesList']),
  },
};
</script>
