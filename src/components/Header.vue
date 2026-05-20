<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Menu, X, Home, Palette } from 'lucide-vue-next'
import { useGuideStore } from '../stores/guide'

const router = useRouter()
const guideStore = useGuideStore()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const searchInput = ref('')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const handleSearch = () => {
  guideStore.setSearchQuery(searchInput.value)
  router.push('/')
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    handleSearch()
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <div class="flex items-center gap-2 cursor-pointer" @click="router.push('/')">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
              <path d="M12.5 8.5l.5 4"/>
              <path d="M9 17l6-3"/>
            </svg>
          </div>
          <span class="text-xl font-bold text-primary-700 hidden sm:block">家居装修攻略</span>
        </div>

        <nav class="hidden md:flex items-center gap-8">
          <button
            @click="router.push('/')"
            class="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Home class="w-4 h-4" />
            <span>首页</span>
          </button>
          <button
            @click="router.push('/style')"
            class="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Palette class="w-4 h-4" />
            <span>装修风格</span>
          </button>
        </nav>

        <div class="flex items-center gap-4">
          <div class="hidden sm:flex items-center relative">
            <input
              v-model="searchInput"
              type="text"
              placeholder="搜索装修攻略..."
              class="w-64 pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
              @keydown="handleKeydown"
            />
            <Search class="w-4 h-4 text-gray-400 absolute left-3" />
          </div>

          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-gray-600 hover:text-primary-600"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-white border-t"
    >
      <div class="px-4 py-4 space-y-3">
        <div class="flex items-center relative">
          <input
            v-model="searchInput"
            type="text"
            placeholder="搜索装修攻略..."
            class="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            @keydown="handleKeydown"
          />
          <Search class="w-4 h-4 text-gray-400 absolute left-3" />
        </div>
        <button
          @click="router.push('/'); closeMobileMenu()"
          class="flex items-center gap-2 w-full py-2 text-gray-600"
        >
          <Home class="w-4 h-4" />
          <span>首页</span>
        </button>
        <button
          @click="router.push('/style'); closeMobileMenu()"
          class="flex items-center gap-2 w-full py-2 text-gray-600"
        >
          <Palette class="w-4 h-4" />
          <span>装修风格</span>
        </button>
      </div>
    </div>
  </header>
</template>
