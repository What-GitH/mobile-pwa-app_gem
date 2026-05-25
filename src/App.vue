<script setup>
import { ref, onMounted, watch } from 'vue'

const memo = ref('')
const saveStatus = ref('')

// LocalStorage를 활용한 간단한 오프라인 데이터 캐싱 로직
onMounted(() => {
  const cachedData = localStorage.getItem('app_memo')
  if (cachedData) {
    memo.value = cachedData
  }
})

watch(memo, (newValue) => {
  localStorage.setItem('app_memo', newValue)
  saveStatus.value = '기기에 저장되었습니다.'
  setTimeout(() => { saveStatus.value = '' }, 2000)
})
</script>

<template>
  <!-- 모바일 뷰포트 제한 (360~420px) 및 다크 모드 대응 -->
  <div class="max-w-[420px] mx-auto min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl overflow-hidden relative">
    
    <!-- 앱 헤더 -->
    <header class="bg-indigo-600 dark:bg-indigo-800 text-white p-4 sticky top-0 z-10 shadow-md">
      <h1 class="text-xl font-bold tracking-tight">나의 모바일 앱</h1>
    </header>

    <!-- 메인 컨텐츠 영역 -->
    <main class="p-5 flex flex-col gap-4">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        이 화면은 스마트폰 비율에 최적화되어 있습니다. 작성한 내용은 오프라인 상태에서도 LocalStorage를 통해 기기에 유지됩니다.
      </p>

      <textarea 
        v-model="memo"
        class="w-full h-40 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none transition-colors"
        placeholder="메모를 입력해보세요..."
      ></textarea>

      <div class="h-6 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
        {{ saveStatus }}
      </div>

      <!-- 터치 영역이 충분히 확보된 버튼 -->
      <button class="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-4 rounded-xl transition-transform active:scale-95 text-lg shadow-sm">
        데이터 동기화 (예시)
      </button>
    </main>

  </div>
</template>