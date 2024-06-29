import {BuildOptions} from "./types";
import webpack from "webpack";
import {
    buildAssetLoader,
    buildModulesLoader,
    buildStylesLoader,
    buildSvgLoader,
    buildTypescriptLoader
} from "./loaders";

export function buildLoaders(options: BuildOptions): webpack.ModuleOptions['rules'] {
    const tsLoader = buildTypescriptLoader(options);
    const modulesLoader = buildModulesLoader(options);
    const stylesLoader = buildStylesLoader(options);
    const assetLoader = buildAssetLoader(options);
    const svgLoader = buildSvgLoader(options);

    return [
        tsLoader,
        assetLoader,
        modulesLoader,
        stylesLoader,
        svgLoader
    ]
}