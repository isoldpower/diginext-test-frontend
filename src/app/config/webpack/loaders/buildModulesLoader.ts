import {BuildOptions} from "../types";

export function buildModulesLoader(options: BuildOptions) {
    const isDevelopment = options.mode === 'development';

    return {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: isDevelopment ? '[path][name]__[local]' : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ]
    }
}