import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";

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
        resolve({
            browser: true,
            preferBuiltins: false,
        }),
        commonjs(),
        postcss({
            extract: false,
            inject: false,
            minimize: true,
        }),
        typescript({
            tsconfig: "./tsconfig.json",
            exclude: ["**/*.test.ts", "**/*.test.tsx", "src/examples/**/*"],
        }),
        copy({
            targets: [
                {
                    src: "src/styles/globals.css",
                    dest: "dist",
                    rename: "styles.css",
                },
                {
                    src: "src/styles/schilling-widgets.css",
                    dest: "dist",
                    rename: "schilling-widgets.css",
                },
            ],
        }),
    ],
    external: ["react", "react-dom"],
};
