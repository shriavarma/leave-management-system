<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">

    <h1 class="text-3xl font-bold mb-6">
      Leave Management System
    </h1>

    <!-- Logout -->
    <button
      v-if="isLoggedIn"
      @click="logout"
      class="mb-4 bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>

    <!-- Logged in -->
    <div v-if="isLoggedIn">
      <Dashboard v-if="role === 'employee'" />
      <EmployerDashboard v-if="role === 'employer'" />
    </div>

    <!-- Not logged in -->
    <div v-else class="bg-white p-6 rounded shadow">

      <div class="flex gap-4 mb-4 justify-center">
        <button
          @click="page = 'login'"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>

        <button
          @click="page = 'signup'"
          class="bg-green-500 text-white px-4 py-2 rounded"
        >
          Signup
        </button>
      </div>

      <Login v-if="page === 'login'" />
      <Signup v-if="page === 'signup'" />

    </div>
  </div>
</template>
<script setup>
import { ref, watchEffect } from "vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Dashboard from "./components/Dashboard.vue";
import EmployerDashboard from "./components/EmployerDashboard.vue";

const page = ref("login");

// 🔥 reactive login state
const isLoggedIn = ref(false);
const role = ref("");

// 🔥 auto update state
watchEffect(() => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  isLoggedIn.value = !!token;
  role.value = userRole;
});
const logout = () => {
  localStorage.clear();
  window.location.reload();
};
</script>