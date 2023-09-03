<template>
  <div class="mt-2 p-6 border border-gray-600 rounded-lg">
    <a :href="description.url" target="_blank" rel="noopener noreferrer">
      <div
        class="
          flex
          justify-center
          transition
          duration-300
          transform
          hover:scale-105
        "
      >
        <img
          class="rounded-lg max-w-full lg:h-20 md:h-24 sm:h-auto"
          :src="require(`@/assets/images/logo-${description.img}`)"
          alt="logo"
        />
      </div>
    </a>
    <div class="m-4 text-2xl text-center">
      <b>{{ workplace }}</b>
    </div>

    <div>
      {{ description.about }}
    </div>
    <div>- {{ description.position }}</div>
    <div>- {{ description.techUse }}</div>
    <div class="md:font-bold"> {{ description.other }}</div>
  </div>
</template>
<script>
export default {
  props: { workplace: String, description: Object },
};
</script>