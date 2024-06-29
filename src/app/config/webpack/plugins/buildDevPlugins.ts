import webpack, {Configuration} from "webpack";
import {BuildOptions} from "../types/types";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

export function buildDevPlugins(options: BuildOptions): Configuration['plugins'] {
    return [
        new webpack.ProgressPlugin(),
        new ReactRefreshWebpackPlugin(),
        options.analyzer && new BundleAnalyzerPlugin()
    ]
}