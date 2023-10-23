<script setup lang="ts">
  import ItemCard from '../components/ItemCard.vue'
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useItemsStore } from '../stores/items'

  const itemsStore = useItemsStore()

  const { items } = storeToRefs(itemsStore)

  const route = useRoute()

  const item = items.value[route.params.id]
  
</script>

<template>
  <main>
    <ItemCard>
      <template #name>
        {{ item?.name }}
      </template>
    </ItemCard>
  </main>
</template>