<template>
  <div class="bg-white p-6 rounded shadow w-[400px]">

    <h2 class="text-2xl font-bold mb-4 text-center">
      Employee Dashboard
    </h2>

    <!-- Apply Leave -->
    <h3 class="font-semibold mb-2">Apply Leave</h3>

    <input v-model="leaveType"
      placeholder="Leave Type"
      class="border p-2 w-full mb-2 rounded" />

    <input v-model="startDate"
      type="date"
      class="border p-2 w-full mb-2 rounded" />

    <input v-model="endDate"
      type="date"
      class="border p-2 w-full mb-2 rounded" />

    <input v-model="reason"
      placeholder="Reason"
      class="border p-2 w-full mb-3 rounded" />

    <button @click="applyLeave"
      class="bg-blue-500 text-white w-full py-2 rounded mb-4 hover:bg-blue-600">
      Apply Leave
    </button>

    <!-- My Leaves -->
    <h3 class="font-semibold mb-2">My Leaves</h3>

    <ul>
      <li
        v-for="leave in leaves"
        :key="leave._id"
        class="border p-2 mb-2 rounded flex justify-between"
      >
        <span>{{ leave.leaveType }}</span>
        <span class="font-bold">{{ leave.status }}</span>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const leaveType = ref("");
const startDate = ref("");
const endDate = ref("");
const reason = ref("");
const leaves = ref([]);

const token = localStorage.getItem("token");

const applyLeave = async () => {
  const res = await fetch("https://leave-management-system-2-p1md.onrender.com/api/leave/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      leaveType: leaveType.value,
      startDate: startDate.value,
      endDate: endDate.value,
      reason: reason.value,
    }),
  });

  const data = await res.json();
  alert("Leave Applied");
  fetchLeaves();
};

const fetchLeaves = async () => {
  const res = await fetch("https://leave-management-system-2-p1md.onrender.com/api/leave/my", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const data = await res.json();
  leaves.value = data;
};

onMounted(fetchLeaves);
</script>