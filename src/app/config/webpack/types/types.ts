export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    output: string;
    src: string;
    public: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode,
    port: number,
    paths: BuildPaths,
    analyzer?: boolean;
}