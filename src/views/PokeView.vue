<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { useGetData } from '@/composables/getData'
  import { useWishlistStore } from '@/store/wishlist'
  import { computed } from "vue"
  import { storeToRefs } from "pinia"

  const { getData, data, loading, error } = useGetData()

  const useWishlist = useWishlistStore()
  const { addToWishlist, findPoke } = useWishlist
  const { wishlist } = storeToRefs(useWishlist) // Only use with ref() and computed(()=>{}), not valid with methods

  const route = useRoute()
  const router = useRouter()

  getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

  const backToList = () => router.push('/pokemons')
</script>

<template>
  <div class="alert alert-danger" v-if="!loading && error">{{ error }}</div>
  <p v-if="loading">Loading information...</p>
  <div v-else-if="data" class="text-center">
    <h1>Pokemon name: {{ $route.params.name }}</h1>
    <img :src="data.sprites?.front_default" :alt="data.name">
    <button :disabled="findPoke(data.name)" @click="addToWishlist(data)" class="d-block btn btn-primary mb-2">Add to wishlist</button>
  </div>

  <button class="d-block btn btn-danger" @click="backToList">Back</button>
</template>