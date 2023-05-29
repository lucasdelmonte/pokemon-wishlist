<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const backToHome = () => {
    router.push('/')
  }
</script>

<template>
  <main class="mt-4">
    <h1>Not found</h1>
    <button class="btn btn-danger" @click="backToHome">Back to home</button>
  </main>
</template>