import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui-components",
      fileName: "ui-components",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      include: ["src/**/*.ts", "src/**/*.vue"],
      outDir: "dist",
      // tsconfigPath: "./tsconfig.app.json",
      tsconfigPath: "./tsconfig.simple.json",
      compilerOptions: {
        declaration: true, // 生成 .d.ts 类型声明文件
        emitDeclarationOnly: true, // 只输出类型声明文件，不输出编译后的 JS 文件
      },
    }),
  ],
});
