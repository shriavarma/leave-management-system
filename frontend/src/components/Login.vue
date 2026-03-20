<template>
  <div class="w-80">
    <h2 class="text-xl font-bold mb-4 text-center">Login</h2>

    <input v-model="email" placeholder="Email"
      class="border p-2 w-full mb-2 rounded" />

    <input v-model="password" type="password" placeholder="Password"
      class="border p-2 w-full mb-4 rounded" />

    <button @click="login"
      class="bg-blue-500 text-white w-full py-2 rounded">
      Login
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const login = async () => {
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role); // 🔥 FIX

    window.location.reload();
  } else {
    alert("Login failed");
  }
};
</script>