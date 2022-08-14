import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  // 获取 .env 环境配置文件
  const env = loadEnv(mode, process.cwd())
  console.log(env.VITE_APP_PORT)

  return {
    plugins: [vue()],
    // 本地反向代理解决浏览器跨域问题
    server: {
      // hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      host: 'localhost',
      port: Number(env.VITE_APP_PORT),
      open: true, // 运行时自动打开浏览器
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // target: 'http://localhost:3030',
          ws: true,
          changeOrigin: true,
          rewrite: (path: string) =>
            path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        },
      },
    },
    resolve: {
      // vite 路径别名配置
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
}
