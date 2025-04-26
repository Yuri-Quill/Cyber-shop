import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), mkcert()],
    server: {
		https: {},
        host: 'localhost',
        port: 5173,
    },
	css: {
		postcss: "./postcss.config.js",
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use "sass:color";
          @use "@/helpers/variables" as *;
          @use "@/helpers/mixins" as *;
        `,
			},
		},
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
