import type { UserConfig } from "vite";

export default {
  build: {
    lib: {
      entry: "src/person-badge.ts",
      formats: ["es"],
      fileName: "person-badge",
    },
    watch: {},
    outDir: "dist",
  },
} satisfies UserConfig;
