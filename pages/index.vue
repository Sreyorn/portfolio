<template>
    <div class="flex flex-wrap justify-center">
      <div
        class=" pt-1 h-screen flex flex-col justify-center items-center"
      >
        <span class="text-6xl mb-2 text-center"><b>SREYORN LEN </b></span>
        <div class="justify-center text-center">
          <span class="text-2xl text-gray-500">
            Computer Engineering Student
          </span>
        </div>
        <span class="text-xl text-center text-gray-500"
          >Frontend Development</span
        >
        <!-- menu -->
        <div class="flex mt-5">
          <div class="hover:underline">
            <NuxtLink to="/about">ABOUT</NuxtLink>
            <span class="mx-5">|</span>
          </div>
          <div class="hover:underline">
            <NuxtLink to="/work">WORK</NuxtLink> <span class="mx-5">|</span>
          </div>
          <div class="hover:underline">
            <NuxtLink to="/contact"> CONTACT</NuxtLink>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "home",
};
</script>
