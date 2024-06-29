import {buildStylesLoader} from "./buildStylesLoader";
import {BuildOptions} from "../types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildSassLoader(options: BuildOptions) {
    const isDevelopment = options.mode === 'development';
    const cssLoader = buildStylesLoader(options);

    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoader,
            'styles-loader'
        ]
    }
}