<script setup lang="ts">
import ItemCard from '../components/ItemCard.vue'
import { storeToRefs } from 'pinia'
import { useItemsStore } from '../stores/items'

const itemsStore = useItemsStore()

const { items } = storeToRefs(itemsStore)
console.log(items.value)
</script>

<template>
  <main>
    <ItemCard v-for="(item, index) in items" :key="index">
      <template #name>
        {{ item.name }}
      </template>
    </ItemCard>
  </main>
</template>
