import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { guides, categories, styles, type Guide } from '../data/guides'

export const useGuideStore = defineStore('guide', () => {
  const allGuides = ref<Guide[]>(guides)
  const searchQuery = ref('')

  const filteredGuides = computed(() => {
    if (!searchQuery.value) return allGuides.value
    const query = searchQuery.value.toLowerCase()
    return allGuides.value.filter(guide =>
      guide.title.toLowerCase().includes(query) ||
      guide.summary.toLowerCase().includes(query) ||
      guide.tags.some(tag => tag.toLowerCase().includes(query))
    )
  })

  const getGuideById = (id: number): Guide | undefined => {
    return allGuides.value.find(guide => guide.id === id)
  }

  const getGuidesByCategory = (categoryId: string): Guide[] => {
    return allGuides.value.filter(guide => guide.category === categoryId)
  }

  const getGuidesByStyle = (styleId: string): Guide[] => {
    return allGuides.value.filter(guide => guide.style === styleId)
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  return {
    allGuides,
    filteredGuides,
    searchQuery,
    categories,
    styles,
    getGuideById,
    getGuidesByCategory,
    getGuidesByStyle,
    setSearchQuery
  }
})
