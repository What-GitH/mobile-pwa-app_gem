import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import basicSsl from '@vitejs/plugin-basic-ssl' // <-- 1. 이 줄을 추가합니다.

export default defineConfig({
  plugins: [
    vue(),
    basicSsl(), // <-- 2. 이 줄을 추가합니다.
    VitePWA({
      registerType: 'autoUpdate', // 서비스 워커 자동 업데이트
      devOptions: {
        enabled: true // 개발 환경에서도 PWA 기능 활성화
      }
    })
  ]
})
