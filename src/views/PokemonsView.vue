<script setup>
  import { RouterLink } from 'vue-router'
  import { useGetData } from '@/composables/getData'
  import { useWishlistStore } from "@/store/wishlist"

  const useWishlist = useWishlistStore()
  const { findPoke } = useWishlist

  const { getData, data, loading, error } = useGetData()

  getData('https://pokeapi.co/api/v2/pokemon?limit=10",')
</script>

<template>
  <main>
    <h1>Pokemons</h1>
    <hr>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <p v-if="loading">Loading information...</p>
    <div v-else-if="data">
      <ul class="list-group list-group mb-3">
        <li class="list-group-item" v-for="pokemon in data?.results">
          <router-link :to="`/pokemons/${pokemon.name}`" class="text-decoration-none text-body">👉🏼 &nbsp; {{ pokemon.name }}</router-link>
          <div class="wishlist-icon" v-if="findPoke(pokemon.name)">
            🖤 
          </div>
        </li>
      </ul>
      <div class="btn-group text-center w-100">
        <button 
          :disabled="!data.previous"
          type="button"
          class="btn btn-outline-primary"
          @click="getData(data.previous)"
        >
          Previous
        </button>
        <button 
          :disabled="!data.next"
          type="button"
          class="btn btn-outline-primary"
          @click="getData(data.next)"
        >
          Next
        </button>
      </div>
    </div>
  </main>
</template>

<style>
  .list-group-item {
    position: relative;
  }
  .wishlist-icon {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
</style>