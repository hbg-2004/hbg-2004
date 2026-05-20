<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Eye, Calendar, User } from 'lucide-vue-next'
import type { Guide } from '../data/guides'
import { categories } from '../data/guides'

defineProps<{
  guide: Guide
}>()

const router = useRouter()

const getCategoryName = (categoryId: string) => {
  const category = categories.find(c => c.id === categoryId)
  return category?.name || ''
}

const getCategoryColor = (categoryId: string) => {
  const category = categories.find(c => c.id === categoryId)
  return category?.color || 'bg-gray-100 text-gray-700'
}

const formatViews = (views: number) => {
  if (views >= 10000) {
    return (views / 10000).toFixed(1) + '万'
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'k'
  }
  return views.toString()
}
</script>

<template>
  <div
    class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
    @click="router.push(`/detail/${guide.id}`)"
  >
    <div class="relative overflow-hidden">
      <img
        :src="guide.cover"
        :alt="guide.title"
        class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div class="absolute top-3 left-3">
        <span :class="['px-3 py-1 rounded-full text-xs font-medium', getCategoryColor(guide.category)]">
          {{ getCategoryName(guide.category) }}
        </span>
      </div>
    </div>
    
    <div class="p-5">
      <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
        {{ guide.title }}
      </h3>
      <p class="text-gray-500 text-sm mb-4 line-clamp-2">
        {{ guide.summary }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in guide.tags.slice(0, 3)"
          :key="tag"
          class="px-2 py-1 bg-warm-100 text-primary-700 text-xs rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      
      <div class="flex items-center justify-between text-gray-400 text-sm">
        <div class="flex items-center gap-1">
          <User class="w-4 h-4" />
          <span>{{ guide.author }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Calendar class="w-4 h-4" />
          <span>{{ guide.date }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Eye class="w-4 h-4" />
          <span>{{ formatViews(guide.views) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
