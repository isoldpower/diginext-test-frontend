import HtmlWebpackPlugin from "html-webpack-plugin";
import {Configuration} from "webpack";
import {BuildOptions} from "../types";
import path from "path";

export function buildGlobalPlugins(options: BuildOptions): Configuration['plugins'] {
    return [
        new HtmlWebpackPlugin({
            template: options.paths.html,
            favicon: path.resolve(options.paths.public, 'favicon.ico')
        })
    ]
}