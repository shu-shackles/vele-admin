import type { UserConfig, ConfigEnv } from "vite";
import { loadEnv } from "vite";
import { resolve } from "path";
import { createVitePlugins } from "./build/vite/plugins";
import { wrapperEnv } from "./build/vite/env";

export default ({ mode, command }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === "build";

  return {
    base: process.env.VITE_PUBLIC_PATH,
    resolve: {
      alias: [
        {
          find: /^\/@\//,
          replacement: `${resolve(__dirname, "./src")}/`,
        },
      ],
    },
    server: {
      proxy: {
        "/api": {
          target: "https://www.yueyingxuan.online",
          changeOrigin: true,
          rewrite: (path: any) => path.replace(/^\/api/, ""),
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve(
              "src/style/global/config.less"
            )}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    optimizeDeps: {
      include: ["nprogress", "md5"],
    },
  };
};
