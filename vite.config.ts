import type { UserConfig } from "vite";

export default {
  build: {
    lib: {
      entry: "src/persons-badge.ts",
      formats: ["es"],
      fileName: "persons-badge",
    },
    outDir: "dist",
  },
} satisfies UserConfig;
