import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
    base: mode === "production" ? "/Portfolio/" : "/",
    plugins: [react()],
    resolve: {
        tsconfigPaths: true
    },
    build: { outDir: "build", sourcemap: true },
    server: {
        port: 3000,
        host: true,
    },
}));