<template>
  <div class="h-screen w-screen">
    <div class="flex h-full">
      <!-- Sidebar -->
      <transition name="fade" mode="out-in">
        <div class=" w-[400px] h-full  text-white transition" v-show="showSideBar">
          <div class="h-[50px] bg-gray-900 flex items-center">
            <div class="font-bold text-xl px-[20px]">KonektiBloom</div>
          </div>
          <div class="bg-gray-800 h-[calc(100%-50px)] px-[20px] py-[20px]">
            <div class="flex flex-col justify-between h-full">
              <div class="flex flex-col space-y-[10px]">
                <router-link to="/home" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                  <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                  </svg>
                  Home
                </router-link>
                <router-link to="/dashboard" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                  <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                  </svg>
                  Dashboard
                </router-link>
                <router-link to="/testimoni" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                  <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path>
                  </svg>
                  Testimoni
                </router-link>

              </div>
              <div class="h-[50px]">
        
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- Main -->
      <div class="w-full h-full ">
        <!-- header -->
        <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
          <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-[25px] h-[25px]">
              <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
          
        </div>
        <div class="bg-gray-50  h-[calc(100%-50px)] p-[20px]">
          <div class="border rounded-md h-full p-[20px]">
            <router-view></router-view>
          </div>
        </div>
        <!-- Main body -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-app',
  data() {
    return {
      showSideBar: true,
      showDropDown: false
    }
  },
  created() {
  },
  methods: {
    closeIfClickedOutside() {
      this.showDropDown = false
    },
    toggleSideBar() {
      this.showSideBar = !this.showSideBar
    },
    toggleDrop() {
      this.showDropDown = !this.showDropDown
    }
  }

}
</script>

<style>
.router-link-exact-active {
  @apply bg-gray-200 text-gray-800
}
</style>