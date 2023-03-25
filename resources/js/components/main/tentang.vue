<template>
    <Navbar />
    <p class="text-center mt-6 font-bold text-xl">Tentang</p>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
        <div class="md:flex">
            <div class="md:shrink-0">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src="../assets/img/laravel.png">
            </div>
            <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Laravel 10</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Backend Framework</a>
            <p class="mt-2 text-slate-500 text-justify">Laravel adalah framework berbasis bahasa pemrograman PHP yang bisa digunakan untuk membantu proses pengembangan sebuah website agar lebih maksimal. Dengan menggunakan Laravel, 
            website yang dihasilkan akan lebih dinamis.Kehadiran framework Laravel menjadikan bahasa pemrograman PHP menjadi lebih powerful. Perlu kita ketahui bahwa kehadiran framework Laravel selalu menghadirkan fitur-fitur 
            terbaru dibandingkan framework lainnya. Framework Laravel menggunakan struktur MVC (Model View Controller). MVC merupakan model aplikasi yang memisahkan antara data dan tampilan berdasarkan komponen aplikasi. 
            Dengan adanya model MVC, pengguna Laravel menjadi lebih mudah dalam mempelajari Laravel. Serta menjadikan proses pembuatan aplikasi berbasis website menjadi lebih cepat..</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Navbar from "../layout/navbar.vue";
</script>

<style lang="scss" scoped></style>
