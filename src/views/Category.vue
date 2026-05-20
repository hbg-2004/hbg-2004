<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useGuideStore } from '../stores/guide'
import Card from '../components/Card.vue'

const route = useRoute()
const guideStore = useGuideStore()

const categoryType = computed(() => route.params.type as string)

const categoryName = computed(() => {
  const category = guideStore.categories.find(c => c.id === categoryType.value)
  return category?.name || ''
})

const categoryDescription = computed(() => {
  const category = guideStore.categories.find(c => c.id === categoryType.value)
  return category?.description || ''
})

const guides = computed(() => {
  return guideStore.getGuidesByCategory(categoryType.value)
})
</script>

<template>
  <div class="min-h-screen bg-warm-50 pt-20">
    <section class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800">{{ categoryName }}装修攻略</h1>
            <p class="text-gray-500 mt-2">{{ categoryDescription }}</p>
          </div>
          <div class="flex items-center gap-2 text-gray-400">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7.5 19.5a2.121 2.121 0 0 1-3-3z"/>
            </svg>
            <span>{{ guides.length }} 篇攻略</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="guides.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="guide in guides"
            :key="guide.id"
            :guide="guide"
          />
        </div>
        <div v-else class="text-center py-12">
          <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </div>
          <p class="text-gray-500">该分类暂无攻略</p>
        </div>
      </div>
    </section>
  </div>
</template>
