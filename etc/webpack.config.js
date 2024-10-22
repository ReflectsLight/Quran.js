const path = require("path");
module.exports = (env, argv) => {
  return {
    mode: "development",
    devtool: "source-map",
    entry: './src/index.ts',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, "..", "dist"),
      library: { type: 'module' },
    },
    experiments: { outputModule: true },
    resolve: {
      modules: [path.resolve(__dirname, "..", "node_modules")],
      alias: {
	"@json": path.resolve(__dirname, "..", "src", "json"),
	"~": path.resolve(__dirname, "..", "src", "js"),
      },
      extensions: [".js", ".ts", ".json"],
    },
    module: {
      rules: [
	{
	  test: /\.tsx?$/,
	  loader: "babel-loader",
	  exclude: /node_modules/,
	  options: { presets: ["@babel/preset-env", "@babel/preset-typescript"] },
	},
      ],
    },
    plugins: [],
    optimization: {}
  }
};
