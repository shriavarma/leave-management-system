<template>
  <div>
    <h2 class="text-xl font-bold mb-4 text-center">Signup</h2>

    <input v-model="name"
      placeholder="Name"
      class="border p-2 w-full mb-2 rounded" />

    <input v-model="email"
      placeholder="Email"
      class="border p-2 w-full mb-2 rounded" />

    <input v-model="password"
      type="password"
      placeholder="Password"
      class="border p-2 w-full mb-2 rounded" />

    <select v-model="role"
      class="border p-2 w-full mb-4 rounded">
      <option value="employee">Employee</option>
      <option value="employer">Employer</option>
    </select>

    <button @click="signup"
      class="bg-green-500 text-white w-full py-2 rounded">
      Signup
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const role = ref("employee");

const signup = async () => {
  console.log("Signup clicked");

  try {
    const res = await fetch("https://leave-management-system-2-p1md.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        role: role.value,
      }),
    });

    const data = await res.json();
    console.log("Response:", data);

    alert(data.message || "Done");
  } catch (err) {
    console.error("Error:", err);
  }
};
</script>