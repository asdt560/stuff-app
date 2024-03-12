import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Item {
  name: string
  description: string
  createdAt?: Date
}

export const useItemsStore = defineStore('items', () => {
  let items = ref([{name: 'item1', description: 'lorem ipsum'}])

  const fetchItems = () => {
    let items = fetch()
  }

  function addItem (item : Item) {
    console.log(item)
    items.value.push(item)
    console.log(items)
  }

  return { items, addItem }
})