<template>
    <div>
        <div class="flex flex-col px-3 py-10 w-64 bg-white h-screen">
            <div class="space-y-3">
                <div class="flex justify-between flex-col pl-7">
                    <span class="h-10 w-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 352 352"
                            svg-inline=""
                            role="presentation"
                            focusable="false"
                            tabindex="-1"
                            class="global-mobile-nav__logo"
                        >
                            <path
                                fill="#0067F5"
                                d="M175.657 5.343H80.205l-.183.332L66.85 29.672h108.808c80.598 0 145.978 65.36 145.978 145.985 0 80.625-65.36 145.984-145.978 145.984-80.62 0-145.985-65.366-145.985-145.984a145.673 145.673 0 017.078-44.919h27.87c-19.757 48.823-5.303 104.824 35.614 137.987 40.918 33.163 98.698 35.706 142.371 6.267 43.674-29.44 62.992-83.954 47.6-134.324-15.39-50.37-61.88-84.777-114.548-84.778H52.463l-13.35 24.322h136.544c42.893.009 80.51 28.634 91.953 69.972 11.443 41.339-6.1 85.233-42.884 107.296-36.783 22.064-83.767 16.877-114.85-12.68-31.083-29.558-38.628-76.222-18.441-114.069h31.575c-21.076 24.742-22.095 60.816-2.45 86.709 19.645 25.892 54.66 34.626 84.164 20.992 29.504-13.634 45.545-45.962 38.557-77.703-6.988-31.741-35.123-54.343-67.624-54.326H24.727l-13.356 24.335a170.604 170.604 0 00-6.028 44.919c0 94.056 76.25 170.313 170.314 170.313 94.063 0 170.313-76.257 170.313-170.313 0-94.057-76.257-170.314-170.313-170.314zm0 125.395c24.807 0 44.918 20.11 44.918 44.919 0 24.807-20.11 44.918-44.918 44.918s-44.919-20.11-44.919-44.918 20.11-44.919 44.919-44.919z"
                            ></path>
                        </svg>
                    </span>
                    <div class="mt-5">
                        <span class="text-gray-300 mt-5 text-2xl font-bold"
                            >Howdy,
                            <span class="text-blue-400">Kayode</span></span
                        >
                    </div>
                </div>
                <div class="flex-1">
                    <ul class="pt-2 pb-4 space-y-1 text-gray-700">
                        <li
                            class="rounded-sm px-5"
                            v-for="(route, index) in routes"
                            :key="index"
                        >
                            <router-link
                                :to="route.path"
                                :class="isActive(route.path) && 'nav-active'"
                                rel="noopener noreferrer"
                                href="#"
                                class="
                                    flex
                                    items-center
                                    p-3
                                    pr-10
                                    space-x-3
                                    rounded-md
                                "
                            >
                                <span v-html="route.icon"></span>
                                <span>{{ route.name }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import appRoutes from '@/utils/routes'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const routes = ref(appRoutes)

function isActive(path) {
    return route.path.includes(path)
}
</script>

<style scoped>
.nav-active {
    @apply bg-blue-200 text-blue-600;
}
</style>