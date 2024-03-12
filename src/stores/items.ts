import { ref } from 'vue'
import { defineStore } from 'pinia'

import axios from 'axios'

interface Item {
  name: string
  description: string
  createdAt?: Date
}

export const useItemsStore = defineStore('items', () => {
  const items = ref([{name: 'item1', description: 'lorem ipsum'}])

  const fetchItems = () => {
    const data = await axios()
    items.value = data.data
  }

  function addItem (item : Item) {
    console.log(item)
    items.value.push(item)
    console.log(items)
  }

  return { items, addItem }
})