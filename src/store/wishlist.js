import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', () => {
  const wishlist = ref([])

  if (localStorage.getItem('wishlist')) {
    wishlist.value = JSON.parse(localStorage.getItem('wishlist'))
  }

  const addToWishlist = (poke) => {
    wishlist.value.push(poke)
    localStorage.setItem('wishlist', JSON.stringify(wishlist.value))
  }

  const removeToWishlist = (id) => {
    wishlist.value = wishlist.value.filter((poke) => poke.id != id)
    localStorage.setItem('wishlist', JSON.stringify(wishlist.value))
  }

  const findPoke = (name) => {
    return wishlist.value.find(x => x.name === name)
  }

  return {
    wishlist,
    addToWishlist,
    removeToWishlist,
    findPoke
  }
})