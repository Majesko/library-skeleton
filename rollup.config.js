import pkg from './package.json'
import typescript from "@rollup/plugin-typescript";
import {terser} from 'rollup-plugin-terser';
import progress from "rollup-plugin-progress";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const ENV = {
    PROD: 'production',
    DEV: 'development',
};

const config = {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true,
        },
        {
            file: pkg.browser,
            format: 'iife',
            name: pkg.pkgName,
            sourcemap: true,
        },
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
        progress(),
        typescript(),
        nodeResolve(),
        commonjs(),
    ],
};

if (process.env.NODE_ENV === ENV.PROD) {
    config.plugins.push(terser());
}

export default config;