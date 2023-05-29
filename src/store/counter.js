import { defineStore } from "pinia";
import { ref, computed } from 'vue'
// Composition API
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const increment = () => count.value++
  const decrement = () => count.value--

  const double = computed(() => {
    return counter.value * 2
  })

  return {
    count,
    increment,
    decrement,
    double
  }
})