<template>
  <div class="bg-white shadow-md rounded-lg p-6">
    <h2 class="text-2xl font-semibold mb-6 text-gray-800">Riwayat Transaksi</h2>

    <div v-if="transactions.length === 0" class="text-center py-8 text-gray-500">
      Belum ada transaksi
    </div>

    <table v-else class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-100 text-gray-600 text-left">
          <th class="p-3 border-b border-gray-200">Tanggal</th>
          <th class="p-3 border-b border-gray-200">Kategori</th>
          <th class="p-3 border-b border-gray-200">Tipe</th>
          <th class="p-3 border-b border-gray-200">Nominal</th>
          <th class="p-3 border-b border-gray-200">Catatan</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(tx, index) in transactions"
          :key="index"
          class="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
        >
          <td class="p-3 text-gray-700">{{ tx.tanggal }}</td>
          <td class="p-3 font-medium text-gray-800">{{ tx.kategori }}</td>
          <td class="p-3">
            <span
              :class="{
                'bg-green-100 text-green-800': tx.tipe === 'Pemasukan',
                'bg-red-100 text-red-800': tx.tipe === 'Pengeluaran',
              }"
              class="px-2 py-1 rounded-full font-medium"
            >
              {{ tx.tipe }}
            </span>
          </td>
          <td
            class="p-3 font-medium"
            :class="tx.tipe === 'Pemasukan' ? 'text-green-600' : 'text-red-600'"
          >
            Rp{{ tx.nominal.toLocaleString() }}
          </td>
          <td class="p-3 text-gray-500">{{ tx.catatan || "-" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps(["transactions"]);
</script>
