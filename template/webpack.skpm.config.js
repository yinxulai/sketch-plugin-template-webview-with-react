module.exports = config => {
  config.resolve.extensions = ['.js', '.jsx'];

  config.module.rules.push({
    test: /\.(html)$/,
    use: [
      {
        loader: "html-loader",
        options: {
          attrs: [
            'img:src',
            'link:href'
          ],
          interpolate: true,
        },
      },
    ]
  })

  config.module.rules.push({
    test: /\.(css)$/,
    use: ["css-loader"]
  })

  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", { loader: 'css-loader', options: { modules: true } }, "sass-loader"]
  })

  config.module.rules.push({
    test: /\.less$/,
    use: ["style-loader", { loader: 'css-loader', options: { modules: true } }, "less-loader"]
  })
};
