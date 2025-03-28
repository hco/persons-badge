import type { UserConfig } from "vite";

export default {
  build: {
    lib: {
      entry: "src/persons-badge.ts",
      formats: ["es"],
      fileName: "persons-badge",
    },
    watch: {},
    outDir: "dist",
  },
} satisfies UserConfig;
