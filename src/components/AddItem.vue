<script setup lang="ts">
  import { ref } from 'vue'
  import { useItemsStore } from '../stores/items'

  interface Item {
    name: string
    description: string
    createdAt?: Date
  }

  const initialState = () : Item => ({
    name: '',
    description: ''
  })

  const newItem = ref(initialState())

  const itemsStore = useItemsStore()

  const handleSubmit = () => {
    newItem.value.createdAt = new Date()
    console.log(newItem.value, 'item in addItem on submit')
    itemsStore.addItem(newItem.value)
    Object.assign(newItem, initialState())
  }
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
    <input class="border-2 p-2 border-green-700" type="text" v-model="newItem.name" placeholder="Item Name" required>
    <textarea class="border-2 p-2 border-green-700" v-model="newItem.description" placeholder="Item Description" required></textarea>
    <button class="border-2 p-2 border-green-700" type="submit">Add</button>
  </form>
</template>
