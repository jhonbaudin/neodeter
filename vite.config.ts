import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const configuredBasePath = process.env.VITE_APP_BASE_PATH?.trim() || "/neodeter/";
const basePath = configuredBasePath.startsWith("/")
  ? configuredBasePath
  : `/${configuredBasePath}`;
const normalizedBasePath = basePath.endsWith("/") ? basePath : `${basePath}/`;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  base: normalizedBasePath,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
