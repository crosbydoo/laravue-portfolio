<template>
    <Navbar />
    <div>
        <p class="text-center mt-3 font-bold text-xl">
            Anggota Kelompok
        </p>
    </div>
    <div class="flex flex-wrap justify-center">
      <div v-for="(card, index) in cards" :key="index" class="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <!-- <img class="w-1/2" :src="'../assets/'+card.image" :alt="card.alt" /> -->
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-justify">{{ card.title }}</div>
          <p class="text-gray-700 text-base text-justify">{{ card.description }}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <a v-for="(social, index) in card.socialMedia" :key="index" :href="social.link" target="_blank" rel="noopener noreferrer">
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
    import Navbar from "../layout/navbar.vue";
</script>
<script >
export default {
  data() {
    return {
      cards: [
        {
          title: "Ristu",
          description: "Ristu Aji Wijayanto dengan NPM 5200411407 Fakultas Sains dan Teknologi, Program Studi Informatika, Universitas Teknologi Yogyakarta. Seorang Fullstack Developer namun lebih menyukai pemrograman mobile, masih berusaha untuk meraih mimpi.",
          image: "img/wolf.png",
          alt: "Card 1",
          socialMedia: [
            {
              icon: "fab fa-twitter mx-2",
              link: "https://twitter.com/"
            },
            {
              icon: "fab fa-instagram mx-2",
              link: "https://www.facebook.com/"
            }
          ]
        },
        {
          title: "Mogar",
          description: "Mogar Nurhandi dengan NPM 5200411436, Fakultas Sains dan Teknologi, Program Studi Informatika, Universitas Teknologi Yogyakarta. Seorang Fullstack Developer namun lebih menyukai jaringan, masih berusaha untuk meraih mimpi.",
          image: "/assets/images/card2.jpg",
          alt: "Card 2",
          socialMedia: [
            {
              icon: "fab fa-twitter mx-2",
              link: "https://twitter.com/"
            },
            {
              icon: "fab fa-instagram mx-2",
              link: "https://www.facebook.com/"
            }
          ]
        },
        {
          title: "Argenta",
          description: "Argenta Maulana Isnan dengan NPM 5200411428 Fakultas Sains dan Teknologi, Program Studi Informatika, Universitas Teknologi Yogyakarta. Seorang Fullstack Developer namun lebih menyukai UI/UX, masih berusaha untuk meraih mimpi.",
          image: "/assets/images/card2.jpg",
          alt: "Card 2",
          socialMedia: [
            {
              icon: "fab fa-twitter mx-2",
              link: "https://twitter.com/"
            },
            {
              icon: "fab fa-instagram mx-2",
              link: "https://www.facebook.com/"
            }
          ]
        },
        {
          title: "Rizky",
          description: "Rizki Hidayat dengan NPM 5200411344 Fakultas Sains dan Teknologi, Program Studi Informatika, Universitas Teknologi Yogyakarta. Seorang Fullstack Developer namun lebih menyukai web, masih berusaha untuk meraih mimpi.",
          image: "/assets/images/card2.jpg",
          alt: "Card 2",
          socialMedia: [
            {
              icon: "fab fa-twitter mx-2",
              link: "https://twitter.com/"
            },
            {
              icon: "fab fa-instagram mx-2",
              link: "https://www.facebook.com/"
            }
          ]
        },
      ]
    };
  }
};
</script>
<style>
svg[data-fa-i2svg] {
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
  fill: currentColor;
  overflow: hidden;
}
</style>