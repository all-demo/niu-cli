import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import pkg from "./package.json";

const extensions = [".js", ".ts"];
export default {
  input: "src/index.ts",
  output: {
    file: path.resolve(__dirname, pkg.main),
    format: "cjs",
  },
  plugins: [
    json(),
    nodeResolve({ extensions }),
    commonjs(),
    babel({ exclude: "node_modules/**", include: "src/**", extensions }),
  ],
};
