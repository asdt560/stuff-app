import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', () => {
  const items = ref([{name: 'item1'}])

  function addItem (item) {
    console.log(item)
    items.value.push(item)
    console.log(items)
  }

  return { items, addItem }
})