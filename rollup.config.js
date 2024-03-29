/**
 * @type {import('rollup').RollupOptions}
 */

import swc from "@qiuqfang/rollup-plugin-swc";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";

export default {
  input: "./src/index.ts",
  output: [
    { file: "dist/index.cjs", format: "cjs" },
    { file: "dist/index.mjs", format: "es" },
  ],
  external: ["fs/promises", "path", "prettier", "chokidar"],
  plugins: [
    swc(),
    nodeResolve({ extensions: [".ts", ".js", ".json"] }),
    commonjs(),
    json(),
    del({ targets: "dist/*" }),
  ],
};
