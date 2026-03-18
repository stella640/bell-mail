import { createRouter, createWebHistory } from 'vue-router'
import LoaderView from '../views/LoaderView.vue'
import HomeView from '../views/HomeView.vue'
import ModalFormPage from '../views/ModalFormPage.vue'  // Import the page where ModalForm will be displayed
import FrenchModalFormPage from '../views/FrenchModalFormPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  // New route for modal form page
      name: 'loader',
      component: LoaderView,  // This page will render the ModalForm
    },
    {
      path: '/form',  // New route for modal form page
      name: 'form',
      component: ModalFormPage,  // This page will render the ModalForm
    },

    {
      path: '/form/french',
      name: 'french',
      component: FrenchModalFormPage,
    }
  ],
})

router.beforeEach((to, from, next) => {
  console.log('Navigating to:', to.path); // Logs the path you are navigating to
  next(); // Allow navigation to continue
});

export default router
