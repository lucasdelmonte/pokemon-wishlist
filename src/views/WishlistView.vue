<script setup>
  import { useWishlistStore } from '@/store/wishlist'
  import { storeToRefs } from "pinia"
  import { RouterLink } from 'vue-router'

  const useWishlist = useWishlistStore()
  const { removeToWishlist } = useWishlist
  const { wishlist } = storeToRefs(useWishlist)

</script>

<template>
  <h1>Wishlist</h1>
  <p v-if="wishlist.length === 0">Void</p>
  <ul class="list-group" v-else>
    <li class="list-group-item d-flex gap-2 justify-content-between align-items-center" v-for="(poke, index) in wishlist" :key="poke.id">
      <div>
        🖤 &nbsp; {{ poke.name }}
      </div>
      <div>
        <router-link :to="`/pokemons/${poke.name}`" class="text-decoration-none text-body me-2">More info</router-link>
        <button class="btn btn-danger" @click="removeToWishlist(poke.id)">Delete</button>
      </div>
    </li>
  </ul>
</template>