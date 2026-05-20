<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGuideStore } from '../stores/guide'
import { Eye, Calendar, User, Share2, Bookmark, ArrowLeft, Heart } from 'lucide-vue-next'
import Card from '../components/Card.vue'

const route = useRoute()
const router = useRouter()
const guideStore = useGuideStore()

const guideId = computed(() => Number(route.params.id))
const guide = computed(() => guideStore.getGuideById(guideId.value))
const isBookmarked = ref(false)

const relatedGuides = computed(() => {
  if (!guide.value) return []
  return guideStore.allGuides.filter(g => 
    g.id !== guide.value!.id && 
    (g.category === guide.value!.category || g.style === guide.value!.style)
  ).slice(0, 3)
})

const formatViews = (views: number) => {
  if (views >= 10000) {
    return (views / 10000).toFixed(1) + '万'
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'k'
  }
  return views.toString()
}

const toggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value
}

const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: guide.value?.title || '',
      text: guide.value?.summary || '',
      url: window.location.href
    })
  }
}
</script>

<template>
  <div class="min-h-screen bg-warm-50 pt-20">
    <div v-if="guide" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        @click="router.back()"
        class="flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft class="w-5 h-5" />
        <span>返回</span>
      </button>

      <article class="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div class="relative">
          <img
            :src="guide.cover"
            :alt="guide.title"
            class="w-full h-64 md:h-80 object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <h1 class="text-2xl md:text-3xl font-bold text-white mb-2">
              {{ guide.title }}
            </h1>
            <div class="flex items-center gap-4 text-white/80 text-sm">
              <span class="flex items-center gap-1">
                <User class="w-4 h-4" />
                {{ guide.author }}
              </span>
              <span class="flex items-center gap-1">
                <Calendar class="w-4 h-4" />
                {{ guide.date }}
              </span>
              <span class="flex items-center gap-1">
                <Eye class="w-4 h-4" />
                {{ formatViews(guide.views) }}
              </span>
            </div>
          </div>
        </div>

        <div class="p-6 md:p-8">
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tag in guide.tags"
              :key="tag"
              class="px-3 py-1 bg-warm-100 text-primary-700 text-sm rounded-full"
            >
              {{ tag }}
            </span>
          </div>

          <div class="prose prose-lg max-w-none">
            <div v-html="guide.content.replace(/\n/g, '<br>')"></div>
          </div>
        </div>
      </article>

      <div class="flex items-center justify-center gap-4 mb-8">
        <button
          @click="toggleBookmark"
          :class="[
            'flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all',
            isBookmarked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          ]"
        >
          <Bookmark :class="['w-5 h-5', isBookmarked ? 'fill-current' : '']" />
          {{ isBookmarked ? '已收藏' : '收藏' }}
        </button>
        <button
          @click="handleShare"
          class="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
        >
          <Share2 class="w-5 h-5" />
          分享
        </button>
        <button
          class="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          <Heart class="w-5 h-5" />
          点赞
        </button>
      </div>

      <div v-if="relatedGuides.length > 0" class="mb-8">
        <h2 class="text-xl font-bold text-gray-800 mb-6">相关攻略</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="relatedGuide in relatedGuides"
            :key="relatedGuide.id"
            :guide="relatedGuide"
          />
        </div>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      </div>
      <p class="text-gray-500">攻略不存在</p>
    </div>
  </div>
</template>
