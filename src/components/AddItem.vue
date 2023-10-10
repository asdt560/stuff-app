<script setup>
  import { ref } from 'vue'
  import { useItemsStore } from '../stores/items.ts'

  const newItem = ref('')

  const itemsStore = useItemsStore()

  const handleSubmit = () => {
    console.log(newItem.value)
    if(newItem.value.length > 0) {
      console.log('adding item')
      itemsStore.addItem({name: newItem.value})
    }
    newItem.value = ''
  }
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="newItem" placeholder="Item Name">
    <button type="submit">Add</button>
  </form>
</template>
