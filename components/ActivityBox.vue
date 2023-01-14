<template>
  <div
    class="
      box2
      lg:col-span-1
      hover:border-4 hover:shadow-md hover:scale-125 hover:bg-black
    "
  >
    <div class="underline">
      <strong>{{ title }}</strong>
    </div>
    <div v-for="(item, i) in actContent" :key="i">
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    actContent: Array,
  },
};
</script>

<style lang="postcss">
.box2 {
  @apply p-4
        bg-transparent
        ml-4
        mt-4
        transition
        duration-300
        transform;
}
</style>