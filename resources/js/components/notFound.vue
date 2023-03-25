<template>
    <!-- component -->
<!-- This is an example component -->
<div class="h-screen w-screen bg-emerald-700 flex items-center">
	<div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div class="max-w-md">
      		<div class="text-5xl font-dark font-bold text-white">404</div>
            <p
              class="text-2xl md:text-3xl font-light text-white leading-normal"
            >Sorry we couldn't find this page. </p>
          <p class="mb-8 text-white">But dont worry, you can find plenty of other things on our homepage.</p>
          
          <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700" @click="kembali">
            kembali ke beranda
          </button>
    </div>
  </div>
</div>
<div class="m-5 fixed bottom-0">
    <h5 class="text-white">Copyright&copy 2023 Backend INF UTY  </h5>
    </div>
</template>

<script>
    export default {
        methods: {
            kembali() {
            this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
</style>