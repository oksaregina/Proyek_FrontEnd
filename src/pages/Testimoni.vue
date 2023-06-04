<template>
  <div>
    <h1 class="home-title font-bold text-center text-2xl mt-4 text-cyan-blue-500">Testimoni</h1>
    <div class="overflow-x-auto mt-4">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <!-- Tabel Header -->
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">Id</th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Nama
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Testimoni
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <div class="flex items-center">
                Rating
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"></path>
                  </svg></a>
              </div>
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit</span>
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in tableData" :key="data.id">
            <td class="py-3 px-6">{{ data.id }}</td>
            <td class="py-3 px-6">{{ data.nama }}</td>
            <td class="py-3 px-6">{{ data.testimoni }}</td>
            <td class="py-3 px-6">{{ data.rating }}</td>
            <td class="py-3 px-6">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="editData(data)">
                Edit
              </button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="deleteData(data)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add data button -->
    <div class="mt-4 flex justify-end">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addData">
        Tambah Data
      </button>
    </div>

    <!-- Form for adding/editing data -->
    <div v-if="showForm" class="mt-4">
      <label for="id" class="block">Id:</label>
      <input type="text" id="id" v-model="newData.id" class="border border-gray-300 rounded py-2 px-4 w-full">
      
      <label for="nama" class="block mt-2">Nama:</label>
      <input type="text" id="nama" v-model="newData.nama" class="border border-gray-300 rounded py-2 px-4 w-full">
      
      <label for="testimoni" class="block mt-2">Testimoni:</label>
      <input type="text" id="testimoni" v-model="newData.testimoni" class="border border-gray-300 rounded py-2 px-4 w-full">
      
      <label for="rating" class="block mt-2">Rating:</label>
      <input type="text" id="rating" v-model="newData.rating" class="border border-gray-300 rounded py-2 px-4 w-full">
      
      <div class="mt-4 flex justify-end">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="saveData">
          Simpan
        </button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" @click="cancelForm">
          Batal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        // ...
      ],
      newData: {
        id: '',
        nama: '',
        testimoni: '',
        rating: '',
      },
      showForm: false
    };
  },
  methods: {
    addData() {
      this.newData = {
        id: '',
        nama: '',
        testimoni: '',
        rating: '',
      };
      this.showForm = true;
    },
    saveData() {
      // Perform validation here if needed
      // Save the new data to the tableData array
      this.tableData.push(this.newData);
      this.showForm = false;
    },
    editData(data) {
      // Set the new data to the existing data for editing
      this.newData = { ...data };
      this.showForm = true;
    },
    deleteData(data) {
      // Find the index of the data in the tableData array
      const index = this.tableData.indexOf(data);
      if (index > -1) {
        // Remove the data from the tableData array
        this.tableData.splice(index, 1);
      }
    },
    cancelForm() {
      this.showForm = false;
    }
  }
};
</script>

<style>
/* Add your custom styles here */

.text-cyan-blue-500 {
  color: #284a6d;
}

.home-title {
  text-align: center;
  font-weight: bold;
}

.overflow-x-auto {
  position: relative;
  border-radius: 0.5rem;
}

.text-sm {
  font-size: 0.875rem;
}

.text-left {
  text-align: left;
}

.text-gray-500 {
  color: #6b7280;
}

.dark:text-gray-400 {
  color: #d1d5db;
}

.text-xs {
  font-size: 0.75rem;
}

.text-gray-700 {
  color: #374151;
}

.uppercase {
  text-transform: uppercase;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

.dark:bg-gray-700 {
  background-color: #374151;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.ml-1 {
  margin-left: 0.25rem;
}

.w-3 {
  width: 0.75rem;
}

.h-3 {
  height: 0.75rem;
}

.text-blue-500 {
  color: #3b82f6;
}

.hover\:bg-blue-700:hover {
  background-color: #1d4ed8;
}

.text-white {
  color: #ffffff;
}

.font-bold {
  font-weight: bold;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.rounded {
  border-radius: 0.25rem;
}

.bg-red-500 {
  background-color: #ef4444;
}

.hover\:bg-red-700:hover {
  background-color: #dc2626;
}

.mt-2 {
  margin-top: 0.5rem;
}

.border {
  border-width: 1px;
}

.border-gray-300 {
  border-color: #e5e7eb;
}

.w-full {
  width: 100%;
}

.mt-4 {
  margin-top: 1rem;
}

.justify-end {
  justify-content: flex-end;
}

.bg-green-500 {
  background-color: #10b981;
}

.hover\:bg-green-700:hover {
  background-color: #047857;
}

.ml-2 {
  margin-left: 0.5rem;
}
</style>
