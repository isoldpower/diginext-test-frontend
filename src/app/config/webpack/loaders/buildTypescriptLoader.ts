import {BuildOptions} from "../types/types";
import ReactRefreshTypescript from 'react-refresh-typescript';

export const buildTypescriptLoader = (options: BuildOptions) => {
    const isDevelopment = options.mode === 'development';

    return {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: isDevelopment,
                    getCustomTransformers: () => ({
                        before: [isDevelopment && ReactRefreshTypescript()].filter(Boolean),
                    })
                },
            },
        ]
    };
}