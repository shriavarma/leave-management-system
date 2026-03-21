<template>
  <div class="bg-white p-6 rounded shadow w-[500px]">
    <h2 class="text-2xl font-bold mb-4 text-center">
      Employer Dashboard
    </h2>

    <h3 class="font-semibold mb-3">All Leave Requests</h3>

    <ul>
      <li
        v-for="leave in leaves"
        :key="leave._id"
        class="border p-3 mb-3 rounded flex justify-between items-center"
      >
        <div>
          <p class="font-semibold">
            {{ leave.user.name }}
          </p>

         <div class="text-sm text-gray-600">
  <p><strong>Type:</strong> {{ leave.leaveType }}</p>
  <p><strong>From:</strong> {{ leave.startDate?.slice(0,10) }}</p>
  <p><strong>To:</strong> {{ leave.endDate?.slice(0,10) }}</p>
  <p><strong>Reason:</strong> {{ leave.reason }}</p>
  <p>
    <strong>Status:</strong>
    <span class="font-bold">{{ leave.status }}</span>
  </p>
</div>
        </div>

        <div class="flex gap-2">
          <button
            @click="updateStatus(leave._id, 'approved')"
            class="bg-green-500 text-white px-3 py-1 rounded"
          >
            Approve
          </button>

          <button
            @click="updateStatus(leave._id, 'rejected')"
            class="bg-red-500 text-white px-3 py-1 rounded"
          >
            Reject
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const leaves = ref([]);
const token = localStorage.getItem("token");

const fetchLeaves = async () => {
  const res = await fetch("https://leave-management-system-2-p1md.onrender.com/api/leave/all", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const data = await res.json();
  leaves.value = data;
};

const updateStatus = async (id, status) => {
  console.log("Clicked:", id, status);

  const res = await fetch(`https://leave-management-system-2-p1md.onrender.com/api/leave/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ status }),
  });

  const data = await res.json();
  console.log("Response:", data);

  fetchLeaves();
};

onMounted(fetchLeaves);
</script>