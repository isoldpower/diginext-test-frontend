import {BuildOptions} from "../types/types";

export function buildStylesLoader(options: BuildOptions) {
    const isDevelopment = options.mode === 'development';

    return {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    }
}