<template>
  <div>
    <nav class="bg-black p-6">
      <!-- div wrapper -->
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center h-16">
          <div class="flex items-center">
            <!-- Menu title -->
            <div class="flex-shrink-0">
              <NuxtLink to="/">
                <p class="text-5xl px-2 text-white hover:underline">
                   SREYORN
                </p>
              </NuxtLink>
            </div>
            <!-- menu items lg:w-screen -->
            <div class="hidden md:block">
              <div class="ml-10 flex justify-center">
                <div v-for="(menu, i) in menuItems" :key="i">
                  <NuxtLink :to="menu.path">
                    <a
                      class="
                        menuItem
                        mr-10
                        text-xl
                        hover:text-gray-600
                        focus:outline-none focus:bg-black focus:text-white
                      "
                    >
                      <b>{{ menu.name }}</b></a
                    ></NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- right side -->
          <div class="mt-3 ml-8 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              @click="toggle"
              class="
                inline-flex
                items-center
                justify-center
                p-2
                hover:text-white hover:bg-white
                focus:outline-none focus:bg-black focus:text-white
              "
            >
              <svg
                :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                stroke="white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                stroke="white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- open mobile menu -->
      <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
        <div class="mt-5 px-2 pt-2 pb-3 sm:px-3 text-center">
          <div v-for="(menu, i) in menuItems" :key="i">
            <NuxtLink :to="menu.path">
              <a
                class="
                  block
                  px-3
                  py-2
                  text-base text-white
                  hover:text-black hover:bg-white
                  focus:outline-none focus:bg-black focus:text-white
                "
              >
                {{ menu.name }}</a
              >
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      // menuItems: ["ABOUT", "WORK", "CONTACT"],
      menuItems: [
        { name: "ABOUT", path: "/about" },
        { name: "WORK", path: "/work" },
        { name: "CONTACT", path: "/contact" },
      ],
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="postcss">
.menuItem {
  @apply px-3
        py-2
        text-white
        rounded-3xl;
}
</style>