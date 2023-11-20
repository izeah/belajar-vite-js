import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        index: "./index.html",
        blog: "./blog.html",
        contact: "./other/contact.html",
      },
    },
  },
  server: {
    port: 3000,
  },
});
