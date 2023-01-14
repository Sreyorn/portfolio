<template>
  <div class="min-h-screen">
    <div class="lg:ml-24 lg:mr-24">
      <section
        class="mt-10 sm:grid xl:grid-cols-3 xl:grid-rows-2 gap-4 space-y-2"
      >
        <AboutBox title="Education" :content="content1" />
        <AboutBox title="Languages" :content="content2" :ratingBar=true />
        <AboutBox title="Awards" :content="content3" />
        <AboutBox title="Experiences" :content="content4" />
        <div class="col-span-2 box">
          <div class="text-2xl hover:text-gray-400">
            <strong>Activities</strong>
          </div>
          <div class="grid lg:grid-cols-3 space-x-4 space-y-3">
            <ActivityBox title="Hackathons" :actContent="actContent1" />
            <ActivityBox
              title="Internship and Volunteer"
              :actContent="actContent2"
            />
            <ActivityBox title="Others" :actContent="actContent3" />
          </div>
        </div>
      </section>
      <!-- Skills Section -->
      <section class="mt-5 border border-blue-800 p-4 rounded-2xl">
        <div class="text-2xl"><b> Skills</b></div>
        <div class="flex flex-wrap">
          <div v-for="(item, i) in tech" :key="i">
            <button class="btn">{{ item }}</button>
          </div>
        </div>
        <!-- Others tech -->
        <div class="text-lg mt-2"><b>Others </b></div>
        <div class="flex flex-wrap space-x-6 mx-4">
          <div v-for="(item, i) in others" :key="i">
            <div class="px-4 py-2 text-gray-500">{{ item }}</div>
          </div>
        </div>
      </section>
    </div>
    <!-- end wrapper -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tech: [
        "HTML/CSS",
        "React",
        "Nuxt",
        "PostgreSQL",
        "Node",
        "Java",
        "C/C++",
        "Linux",
        "OS",
        "Python",
      ],
      others: [
        "Django",
        "AI and Machine Learning",
        "Express",
        "Git",
        "Socket Programming",
        "OpenGL",
      ],
      content1: [
        "Inha University - Computer Engineering",
        "Royal University of Phnom Penh - Computer Science",
        "Cambodia Hope School - High School",
      ],
      content2: ["Khmer  ", "English  ", "Korean  ", "Chinese  "],
      content3: [
        "- Ilwoo Foundation Scholarship (Korean Air) - Bachelor's Degree",
        "- Thai Royal Scholarship - Bachelor's Degree (Dropped)",
        "- 1st Champion Junior Public Speaking Final Round",
        "- Middle School and High School Outstanding Student",
      ],
      content4: [
        "Dobpi - Intern, Frontend Developer",
        "Kontent - Junior Frontend Developer",
      ],
      actContent1: [
        "- LINE Blockchain Hackathon (Top 20 Final Teams)",
        "- Microsoft Azure Hackathon (First Round)",
      ],
      actContent2: [
        "- UNICEF Cambodia - Blog Writer",
        "- Barcamp ASEAN 2017 - PR team",
        "- PSE Cambodia - Translator",
      ],
      actContent3: [
        "- IGRUSE Coding Club (INHA Univ)",
        "- IFL Debate Club",
        "- CKCC Taekwondo",
      ],
    };
  },
};
</script>
<style lang='postcss'>
.btn {
  @apply border border-teal-300
        bg-gradient-to-b
        from-blue-800
        via-transparent
        to-blue-800
        rounded-3xl
        px-5
        py-1
        m-4;
}
.box {
  @apply p-4
        shadow
        rounded-md
        bg-gradient-to-r
        from-blue-800
        to-black
       
        transition
        duration-300
        transform;
}
</style>