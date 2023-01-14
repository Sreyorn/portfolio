<template>
  <div class="flex flex-wrap justify-center">
    <div class=" h-screen flex flex-col justify-center items-center">
      
      <div class="mb-5 flex justify-center">
        <a href="mailto:lensreyorn@gmail.com">
          <svg
            class="animation svg hover:scale-125"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </a>
        <span class="text-lg hover:underline"> lensreyorn@gmail.com </span>
      </div>

      <section class="flex justify-center gap-10">
        <a
          class="animation hover:scale-125"
          href="https://www.facebook.com/sreyorn7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path
              d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
            />
          </svg>
        </a>
        <a
          class="animation hover:scale-125"
          href="https://www.instagram.com/ornikhano/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="svg mr-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
        <a
          class="animation hover:scale-125"
          href="https://www.youtube.com/channel/UCcYQA0gLwWzAmrfXDlTQy7A/videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
            />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
          </svg>
        </a>
      </section>
      <!-- back to index -->
      <div class="mt-5 text-gray-600 animate-pulse">
        <NuxtLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexPage",
  layout: "home",
};
</script>

<style lang="postcss">
.animation {
  @apply transition duration-300 transform;
}
.svg {
  @apply h-8 w-8 text-gray-400;
}
</style>