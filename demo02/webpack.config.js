module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/dev/ts/main.ts",
    output: {
      path: __dirname + "/static/js",
      filename: "bundle.js"
    },
    resolve:{
        extensions:[".ts",".js"]
    },
    module: {
        loaders: [
          { test: /\.ts$/, loader: 'ts-loader' }
        ]
      }

  }