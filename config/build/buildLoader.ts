import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [{
      loader: 'file-loader'
    }]
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  return [
    svgLoader,
    fileLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ]
}
