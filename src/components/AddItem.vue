<script setup lang="ts">
  import { ref } from 'vue'
  import { useItemsStore } from '../stores/items'

  const initialState = () => ({
    name: '',
    description: ''
  })

  const newItem = ref(initialState())

  const itemsStore = useItemsStore()

  const handleSubmit = () => {
    console.log(newItem.value, 'item in addItem on submit')
    itemsStore.addItem(newItem.value)
    Object.assign(newItem, initialState())
  }
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <input class="border-2 p-2 border-green-500" type="text" v-model="newItem.name" placeholder="Item Name" required>
    <textarea class="border-2 p-2 border-green-500" v-model="newItem.description" placeholder="Item Description" required></textarea>
    <button class="border-2 p-2 border-green-500" type="submit">Add</button>
  </form>
</template>
