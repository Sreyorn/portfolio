<template>
  <div class="flex space-x-2">
    <div v-for="(item, i) in unfilledRating" :key="i">
      <div class="w-3 h-3  border border-white rounded-full"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    unfilledRating: Number,
  },
};
</script>
