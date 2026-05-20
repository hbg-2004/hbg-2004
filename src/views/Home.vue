<script setup lang="ts">import { useRouter } from 'vue-router';
import { Sofa, BedDouble, Utensils, Droplets, BookOpen, Baby, Sparkles } from 'lucide-vue-next';
import { useGuideStore } from '../stores/guide';
import Card from '../components/Card.vue';
const router = useRouter();
const guideStore = useGuideStore();
const iconMap: Record<string, any> = {
 'sofa': Sofa,
 'bed-double': BedDouble,
 'utensils': Utensils,
 'droplets': Droplets,
 'book-open': BookOpen,
 'baby': Baby
};
const topGuides = guideStore.allGuides.slice(0, 3);
</script>

<template>
  <div class="min-h-screen bg-warm-50">
    <section class="relative h-80 md:h-96 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700"></div>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div class="max-w-2xl">
          <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">
            打造理想家居空间
          </h1>
          <p class="text-primary-100 text-lg md:text-xl mb-8">
            专业的装修攻略，实用的设计灵感，让您的家成为梦想中的样子
          </p>
          <button
            @click="router.push('/style')"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-warm-100 transition-colors shadow-lg"
          >
            <Sparkles class="w-5 h-5" />
            探索装修风格
          </button>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          按房间类型浏览
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <button
            v-for="category in guideStore.categories"
            :key="category.id"
            @click="router.push(`/category/${category.id}`)"
            class="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center mb-3', category.color]">
              <component :is="iconMap[category.icon]" class="w-7 h-7" />
            </div>
            <span class="font-medium text-gray-800">{{ category.name }}</span>
            <span class="text-xs text-gray-400 mt-1">{{ category.description }}</span>
          </button>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800">
            热门攻略
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="guide in topGuides"
            :key="guide.id"
            :guide="guide"
          />
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800">
            全部攻略
          </h2>
          <span v-if="guideStore.searchQuery" class="text-sm text-gray-500">
            搜索结果: "{{ guideStore.searchQuery }}"
          </span>
        </div>
        <div v-if="guideStore.filteredGuides.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="guide in guideStore.filteredGuides"
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
          <p class="text-gray-500">未找到相关攻略</p>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16 bg-gradient-to-r from-primary-500 to-primary-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          开始您的装修之旅
        </h2>
        <p class="text-primary-100 mb-8">
          订阅我们的装修资讯，获取最新的装修攻略和设计灵感
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="输入您的邮箱"
            class="px-6 py-3 rounded-full w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button class="px-6 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-warm-100 transition-colors">
            订阅
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
