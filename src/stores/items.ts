import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Item {
  name: string
  description: string
}

export const useItemsStore = defineStore('items', () => {
  const items = ref([{name: 'item1', description: 'lorem ipsum'}])

  function addItem (item : Item) {
    console.log(item)
    items.value.push(item)
    console.log(items)
  }

  return { items, addItem }
})