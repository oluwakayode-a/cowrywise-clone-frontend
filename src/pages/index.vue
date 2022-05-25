<template>
    Hello                      
</template>

<script setup>
import { useMeta } from 'vue-meta'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

useMeta({
    title: 'Homepage',
})
</script>

<route lang="yaml">
meta:
    layout: default
</route>
