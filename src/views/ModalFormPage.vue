<template>
    <div class="modal-form-page">
      <AppNavbar />
      <MainContainer />
    </div>
  </template>
  
  <script>
  import AppNavbar from '@/components/AppNavbar.vue';
  import MainContainer from '@/components/MainContainer.vue';
  
  export default {
    components: {
      AppNavbar,
      MainContainer,
    },
  };
  </script>
  
  <style scoped>
  .modal-form-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ensure full height */
    width: 100%;      /* Ensure full width */
    box-sizing: border-box; /* Include padding/borders in height/width */
  }
  
  /* Ensure AppNavbar doesn't shrink and takes fixed height */
  .modal-form-page > AppNavbar {
    flex-shrink: 0; 
  }
  
  /* MainContainer should take remaining space */
  .modal-form-page > MainContainer {
    flex-grow: 1;     /* This takes up remaining space */
    display: flex;    /* Apply flexbox in case MainContainer needs layout */
    flex-direction: column;  /* Ensure MainContainer's children are arranged in column if necessary */
  }
  </style>