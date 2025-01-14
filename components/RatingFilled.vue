<template>
  <div class="flex space-x-2">
    <div v-for="(item, i) in filledRating" :key="i">
      <div class="w-3 h-3 bg-white rounded-full"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // console.log(this.filledRating);
  },
  props: {
    filledRating: Number,
  },
};
</script>