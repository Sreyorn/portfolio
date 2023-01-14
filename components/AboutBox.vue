<template>
  <div class="box lg:col-span-1 hover:scale-110 hover:from-black">
    <div class="text-2xl mb-1">
      <strong>{{ title }}</strong>
    </div>
    <div class="flex flex-col">
      <div class="flex" v-for="(item, i) in content" :key="i">
        {{ item }}
        <div class="ml-4 mt-1" v-if="ratingBar">
          <div class="flex space-x-2">
            <RatingFilled :filledRating="rating[i].filled" />
            <RatingUnfilled :unfilledRating="rating[i].unfilled" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rating: [
        { filled: 5, unfilled: 0 },
        { filled: 4, unfilled: 1 },
        { filled: 3, unfilled: 2 },
        { filled: 1, unfilled: 4 },
      ],
    };
  },
  props: {
    title: String,
    content: Array,
    ratingBar: Boolean,
  },
};
</script>

<style lang="postcss">
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