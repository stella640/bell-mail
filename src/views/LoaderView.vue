<template>
  <div class="loader-container">
    <div class="loader">
      <span v-if="step === 0">.</span>
      <span v-else-if="step === 1">..</span>
      <span v-else>...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderView",
  data() {
    return {
      step: 0,
      interval: null,
      timeout: null,
    };
  },
  mounted() {
    // Animate steps every 1 second
    this.interval = setInterval(() => {
      this.step = (this.step + 1) % 3;
    }, 1000);

    // Redirect after 5 seconds
    this.timeout = setTimeout(() => {
      clearInterval(this.interval);
      this.$router.replace("/form"); // redirect to your homepage route
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  },
};
</script>

<style>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center; /* fixed your typo */
  height: 100vh;
}

.loader {
  font-size: 2rem;
  font-weight: bold;
}
</style>
