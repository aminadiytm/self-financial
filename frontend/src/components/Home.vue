<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Transaksi Keuangan</h1>

    <div class="flex justify-center mb-6">
      <button
        @click="showForm = false"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-l-lg transition duration-200"
      >
        Lihat Riwayat
      </button>
      <button
        @click="showForm = true"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-r-lg transition duration-200"
      >
        Tambah Transaksi
      </button>
    </div>

    <TransactionForm v-if="showForm" @success="fetchTransactions" />
    <TransactionList v-else :transactions="transactions" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import TransactionForm from "./TransactionForm.vue";
import TransactionList from "./TransactionList.vue";

const transactions = ref([]);
const showForm = ref(false);

const fetchTransactions = async () => {
  const res = await axios.get("http://localhost:8000/api/transactions");
  transactions.value = res.data;
};

onMounted(fetchTransactions);
</script>
