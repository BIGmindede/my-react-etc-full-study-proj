import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildStyleLoaders } from './buildLoaders/styleLoader'
import { buildSvgLoader } from './buildLoaders/svgLoader'
import { buildFileLoader } from './buildLoaders/fileLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader()

    const [cssloader, scssloader] = buildStyleLoaders(isDev)

    const fileLoader = buildFileLoader()

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const babelLoader = {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    }

    return [
        babelLoader,
        tsLoader,
        scssloader,
        cssloader,
        svgLoader,
        fileLoader
    ]
}
