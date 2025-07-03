import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
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
        copy({
            targets: [
                {
                    src: "src/styles/globals.css",
                    dest: "dist",
                    rename: "styles.css",
                },
            ],
        }),
    ],
    external: ["react", "react-dom", "@tanstack/react-query"],
};
