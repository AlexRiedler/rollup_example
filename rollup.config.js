import babel from "rollup-plugin-babel";
import builtins from "rollup-plugin-node-builtins";
import commonjs from "rollup-plugin-commonjs";
import { eslint } from "rollup-plugin-eslint";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/client/index.js",
  output: {
    name: "HEATDEATH",
    file: "public/heatdeath.js",
    sourcemap: true,
    format: "iife"
  },
  plugins: [
    builtins(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production"
      )
    }),
    resolve({
      browser: true,
      extensions: [".mjs", ".js", ".jsx", ".json"],
      jsnext: true,
      main: true
    }),
    commonjs({
      include: ["node_modules/**"]
    }),
    eslint(),
    babel({
      exclude: "node_modules/**"
    }),
    terser()
  ]
};
