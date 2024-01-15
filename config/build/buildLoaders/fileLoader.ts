export const buildFileLoader = () => ({
    test: /\.(ttf|otf|png|jpe?g|gif)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }
    ]
})
