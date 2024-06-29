import {Configuration} from "webpack";
import {BuildOptions} from "./types";
import {buildDevPlugins, buildGlobalPlugins, buildProdPlugins} from "./plugins";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDevelopment = options.mode === 'development';
    const isProduction = options.mode === 'production';

    let plugins = buildGlobalPlugins(options);

    if (isDevelopment) plugins = plugins.concat(buildDevPlugins(options));
    if (isProduction) plugins = plugins.concat(buildProdPlugins(options));

    return plugins;
}