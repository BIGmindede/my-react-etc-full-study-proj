import webpack from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions) : webpack.RuleSetRule[] {
    
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const babelLoader = {
    test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            [
                "i18next-extract",
                {
                    locales: ["ru", "en"],
                    keyAsDefaultValue: true
                }
            ]
          ]
        }
      }
    }

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
        babelLoader,
        typescriptLoader,
        sassloader,
        cssloader,
        svgLoader,
        fileLoader
    ]
}