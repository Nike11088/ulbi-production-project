import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'
import path from 'path'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }
  const mode: BuildMode = env.mode || 'development'
  const isDev: boolean = mode === 'development'
  const PORT = env.port || 3000

  const config: webpack.Configuration = buildWebpackConfig({
    mode: env.mode,
    paths,
    isDev,
    port: PORT
  })

  return config
}
