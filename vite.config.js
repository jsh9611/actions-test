import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/actions-test/' // base 경로를 추가
/*
Github는 리소스가 위치한 assets의 기본 루트 경로로 github 저장소 Repository 경로인 `actions-test`를 참조함
따라서 아래의 경로로 요청할 수 있도록 설정이 필요
-> https://{github username}.github.io/actions-test/assets/index-해시값.js
*/
})
