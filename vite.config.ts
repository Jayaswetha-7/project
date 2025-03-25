import { defineConfig } from 'vite';
import path from 'path';
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true, // Allows access from other devices
    port: 5174, // Custom port
  },
});
