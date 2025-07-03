import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            sourcemap: true,
            exports: "named",
        },
        {
            file: "dist/index.esm.js",
            format: "es",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve({
            browser: true,
            preferBuiltins: false,
        }),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
    ],
    external: ["react", "react-dom", "@tanstack/react-query"],
};
