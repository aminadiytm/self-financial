<template>
  <form
    @submit.prevent="submitForm"
    class="bg-white shadow-md rounded-lg p-6 space-y-4 w-full max-w-2xl mx-auto"
  >
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Tambah Transaksi</h2>

    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2 col-span-1">
        <label class="text-sm font-medium text-gray-700">Tipe Transaksi</label>
        <select
          v-model="form.tipe"
          class="input border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled selected>Pilih Transaksi</option>
          <option value="Pemasukan">Pemasukan</option>
          <option value="Pengeluaran">Pengeluaran</option>
        </select>
      </div>

      <div class="space-y-2 col-span-1">
        <label class="text-sm font-medium text-gray-700">Tanggal</label>
        <input
          v-model="form.tanggal"
          type="date"
          class="input border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div class="space-y-2 col-span-1">
        <label class="text-sm font-medium text-gray-700">Kategori</label>
        <select
          v-model="form.kategori"
          class="input border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled selected>Pilih Kategori</option>
          <option value="Makanan">Makanan</option>
          <option value="Minuman">Minuman</option>
          <option value="Lain-Lain">Lain-Lain</option>
          <option value="Tambahan">Tambahan (+)</option>
        </select>
      </div>

      <div class="space-y-2 col-span-1">
        <label class="text-sm font-medium text-gray-700">Nominal (Rp)</label>
        <input
          v-model.number="form.nominal"
          placeholder="0"
          type="number"
          class="input border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div class="space-y-2 col-span-2">
        <label class="text-sm font-medium text-gray-700">Catatan</label>
        <textarea
          v-model="form.catatan"
          placeholder="Tambahkan catatan jika perlu"
          rows="3"
          class="input border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
    </div>

    <div class="flex justify-end space-x-3 pt-4">
      <button
        @click="$emit('cancel')"
        class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition duration-200"
      >
        Batal
      </button>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200"
      >
        Simpan Transaksi
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const emit = defineEmits(["success"]);

const form = ref({
  tipe: "",
  tanggal: new Date().toISOString().split("T")[0], // Set default date to today
  kategori: "",
  nominal: null,
  catatan: "",
});

const submitForm = async () => {
  await axios.post("http://localhost:8000/api/transactions", form.value);
  form.value = { tipe: "", tanggal: "", kategori: "", nominal: null, catatan: "" };
  emit("success");
};
</script>

<style scoped>
.input {
  @apply w-full border p-2 rounded;
}
</style>
