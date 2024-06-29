import webpack from "webpack";
import {BuildOptions} from "./types";
import {buildDevServer} from "./buildDevServer";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const isDevelopment = options.mode === 'development';

    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name]-[contenthash].js',
            publicPath: '/',
            clean: true,
            assetModuleFilename: 'assets/[hash][ext][query]'
        },
        module: {
            rules: buildLoaders(options)
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        devtool: isDevelopment ? 'inline-source-map' : false,
        devServer: isDevelopment ? buildDevServer(options) : undefined
    }
}