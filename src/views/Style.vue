<script setup lang="ts">
import { ref } from 'vue'
import { useGuideStore } from '../stores/guide'
import { ArrowRight, Check } from 'lucide-vue-next'

const guideStore = useGuideStore()
const selectedStyle = ref<string | null>(null)

const selectStyle = (styleId: string) => {
  selectedStyle.value = selectedStyle.value === styleId ? null : styleId
}
</script>

<template>
  <div class="min-h-screen bg-warm-50 pt-20">
    <section class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">装修风格</h1>
          <p class="text-gray-500">
            选择适合您的装修风格，打造独一无二的家居空间。每种风格都有其独特的魅力和特点。
          </p>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            v-for="style in guideStore.styles"
            :key="style.id"
            :class="[
              'relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 cursor-pointer',
              selectedStyle === style.id ? 'ring-4 ring-primary-500' : 'hover:shadow-xl'
            ]"
            @click="selectStyle(style.id)"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                :src="style.image"
                :alt="style.name"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-4 left-6 right-6">
                <h3 class="text-xl font-bold text-white mb-2">{{ style.name }}</h3>
                <p class="text-white/80 text-sm">{{ style.description }}</p>
              </div>
            </div>
            
            <div class="p-6 bg-white">
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="feature in style.features"
                  :key="feature"
                  class="inline-flex items-center gap-1 px-3 py-1 bg-warm-100 text-primary-700 text-sm rounded-full"
                >
                  <Check class="w-3 h-3" />
                  {{ feature }}
                </span>
              </div>
              <button class="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
                <span>查看相关攻略</span>
                <ArrowRight class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16 bg-gradient-to-r from-primary-500 to-primary-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          不确定选择哪种风格？
        </h2>
        <p class="text-primary-100 mb-8">
          我们的风格测试可以帮助您找到最适合您的装修风格
        </p>
        <button class="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-warm-100 transition-colors shadow-lg">
          开始风格测试
        </button>
      </div>
    </section>
  </div>
</template>
