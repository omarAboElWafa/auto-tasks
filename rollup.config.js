import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.js", // Adjust the input file as needed
  output: {
    file: "dist/bundle.js",
    format: "cjs", // CommonJS format
  },
  plugins: [resolve(), commonjs(), json()],
};
