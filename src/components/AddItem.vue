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
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="newItem.name" placeholder="Item Name" required>
    <textarea v-model="newItem.description" placeholder="Item Description" required></textarea>
    <button type="submit">Add</button>
  </form>
</template>
