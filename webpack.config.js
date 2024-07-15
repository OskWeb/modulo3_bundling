import path, { resolve } from "path";
import url from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  entry: ["./src/index.ts"],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    //static: path.join(__dirname, "./src"),
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      scriptLoading: "blocking",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx", ".css", ".scss"],
  },
};
