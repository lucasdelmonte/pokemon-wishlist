<script setup>
  import { useCounterStore } from '@/store/counter'
  import { storeToRefs } from "pinia";

  const useCounter = useCounterStore()

  const { increment, decrement } = useCounter
  const { count, double } = storeToRefs(useCounter)
</script>

<template>
  <main>
    <h1>Home counter: {{ useCounter.count }}</h1>
    <div class="btn-group">
      <div @click="decrement" class="btn btn-outline-primary">Decrement</div>
      <div @click="increment" class="btn btn-outline-primary">Increment</div>
    </div>
  </main>
</template>
