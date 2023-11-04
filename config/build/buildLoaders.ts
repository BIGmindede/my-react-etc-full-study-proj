import webpack from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions) : webpack.RuleSetRule[] {
    
    const cssloader = {
        test: /\.css$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module.css$/i,
                        localIdentName: options.isDev 
                            ? "[path][name]__[local]--[hash:base64:8]" 
                            : "[hash:base64:8]"
                    }
                }
            }, 
        ]
    }

    const sassloader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module.s[ac]ss$/i,
                        localIdentName: options.isDev 
                            ? "[path][name]__[local]--[hash:base64:8]" 
                            : "[hash:base64:8]"
                    }
                }
            },            
            "sass-loader"
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,   
    }

    return [
        typescriptLoader,
        sassloader,
        cssloader,
    ]
}