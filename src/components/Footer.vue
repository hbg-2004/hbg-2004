<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                <path d="M12.5 8.5l.5 4"/>
                <path d="M9 17l6-3"/>
              </svg>
            </div>
            <span class="text-xl font-bold">家居装修攻略</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            专注于为您提供专业、实用的家具装修攻略，帮助您轻松打造理想家居空间。
            我们汇集了最新的装修趋势、设计灵感和实用技巧，让装修变得简单有趣。
          </p>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">快速链接</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="/" class="hover:text-primary-400 transition-colors">首页</a></li>
            <li><a href="/style" class="hover:text-primary-400 transition-colors">装修风格</a></li>
            <li><a href="/category/living" class="hover:text-primary-400 transition-colors">客厅攻略</a></li>
            <li><a href="/category/bedroom" class="hover:text-primary-400 transition-colors">卧室攻略</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-semibold mb-4">联系我们</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li>邮箱: contact@homeguide.com</li>
            <li>微信: HomeGuide2024</li>
            <li>客服热线: 400-123-4567</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-sm">
          © 2024 家居装修攻略. 保留所有权利.
        </p>
        <p class="text-gray-500 text-sm flex items-center gap-1">
          用 <Heart class="w-4 h-4 text-red-500" /> 打造温馨家居
        </p>
      </div>
    </div>
  </footer>
</template>
