<template>
  <div class="min-h-screen">
    <div class="xl:mx-32 lg:mx-4">
      <div
        class="
          mt-10
          xl:mx-20
          lg:mx-auto
          sm:grid
          lg:grid-cols-3 lg:grid-rows-2 lg:gap-8
          xl:gap-20
          space-y-2
        "
      >
        <!-- TODO: change to using component -->
        <WorkCard workplace="Computer Vision and Learning Lab" :description="work6" />
        <WorkCard workplace="Dobpi" :description="work1" />
        <WorkCard workplace="Kontent" :description="work2" />
        <WorkCard workplace="Space Project" :description="work3" />
        <WorkCard workplace="TypeLyrcis.xyz" :description="work4" />
        <WorkCard workplace="Dalgo.xyz" :description="work5" />

      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(work1);
  },
  data() {
    return {
      work1: {
        img: "dobpi.png",
        about: "Tech Startup Company Based in Cambodia",
        position: "Intern Frontend Developer",
        techUse: "Frontend: Reactjs, Material-UI",
        url: "https://dobpi.shop/",
      },
      work2: {
        img: "kontent.png",
        about: "Stealth Mode Startup",
        position: "Junior Frontend Developer",
        techUse: "Frontend: Nextjs, Chakra-UI",
      },
      work3: {
        img: "space.png",
        about: "Personal Project",
        position: "Frontend & Backend",
        techUse: "Used: Nuxtjs, Vuetify | Express, PostgreSQL, AWS-S3",
        url: "https://space-orncif.netlify.app/",

      },
      work4: {
        img: "typelyrics.png",
        about: "Personal Project",
        position: "Frontend: Development and UI Design",
        techUse: "Used: React.js, Chakra-UI",
        url: "https://typelyrics.xyz/",
      },
      work5: {
        img: "dalgo.png",
        about: "Personal Project",
        position: "Frontend: Development and UI Design",
        techUse: "Used: Nuxt.js, Chakra-UI",
        url: "https://dalgo.xyz/",
      },
      work6: {
        img: "cvl.png",
        about: "Computer Vision Lab",
        position: "Intern student working on training machine learning models",
        techUse: "Topics: Object Detection, Knowledge Distillation",
        url: "https://cvl.inha.ac.kr/index.html",
      },

    };
  },
};
</script>