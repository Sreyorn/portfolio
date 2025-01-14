<template>
  <div class="box lg:col-span-1 hover:scale-110 ">
    <div class="text-2xl mb-1">
      <strong>{{ title }}</strong>
    </div>
    <div class="flex flex-col">
      <div class="flex subBox rounded-md hover:border hover:shadow-md hover:scale-105 hover:bg-black" v-for="(item, i) in content" :key="i">
        <!-- <Box  :subContent="item"/>    -->
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
.gradientBox{
  @apply shadow
        rounded-md
        bg-gradient-to-r
        from-blue-800
        to-black
}
.subBox{
  @apply border border-blue-800  ml-1 mt-1 bg-transparent transition duration-100 transform shadow
  rounded-md
  bg-gradient-to-r
  from-blue-700
  to-black;
}
</style>