import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Static hosts (Vercel, Netlify, etc.) rewrite trailing-slash requests to
// their directory's index.html; Vite's dev server doesn't. This middleware
// makes `vite dev` behave the same way for the standalone tools in public/.
function publicDirIndexFallback(publicDir: string): Plugin {
  return {
    name: "public-dir-index-fallback",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();
        const [urlPath, query = ""] = req.url.split("?");
        if (urlPath.endsWith("/") && urlPath !== "/") {
          const indexPath = path.join(publicDir, urlPath, "index.html");
          if (fs.existsSync(indexPath)) {
            req.url = urlPath + "index.html" + (query ? `?${query}` : "");
          }
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: '/',
  build: {
    outDir: "dist",
    emptyOutDir: true
  },
  plugins: [
    react(),
    publicDirIndexFallback(path.resolve(__dirname, "public")),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));