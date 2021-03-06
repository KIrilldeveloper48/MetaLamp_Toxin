const path = require(`path`); // Методе node.js позволяющий работать с путями

//* Подключение плагинов
const HTMLWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
// const OptimizeCssAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);
const TerserPlugin = require(`terser-webpack-plugin`);

//* Режимы сборки
const isDev = process.env.NODE_ENV === `development`; // Опеределяем находимся ли мы в режиме разработки
const isBuild = !isDev;

//* Для поля optimization
const optimization = () => {
  const config = {
    splitChunks: { // Выносит общий код в отдельный файл vendors. Это нужно для оптимизации при подключении библиотек
      chunks: `all`
    },
  };

  if (isBuild) {
    config.minimizer = [
      // new OptimizeCssAssetsPlugin(), // Минизация css
      new TerserPlugin() // Минимазция js
    ];
  }

  return config;
};

//* Обработчики сss для поля use в module
const cssLoaders = (extra) => {
  const loaders = [MiniCssExtractPlugin.loader, `css-loader`];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

//* Пресеты babel
const babelOption = (extra) => {
  const options = {
    presets: [`@babel/preset-env`]
  };

  if (extra) {
    options.presets.push(extra);
  }
  return options;
};


const jsLoaders = () => {
  const loaders = [{
    loader: `babel-loader`,
    options: babelOption()
  }];

  return loaders;
};

//* Объект с настройками webpack
module.exports = {

  //* Указывает на папку в которое лежат все исходники. В этом случае можно сократить пути
  context: path.resolve(__dirname, `src`),

  /*
    * Точка входа. Можно указать несколько точек входа, для получения нескольких бандлов.
    * Чтобы не возникало проблем с именованием файлов нужно указывать в output.filename динамические имена
    * [name].[contenthash].js
  */
  entry: {
    main: [`@babel/polyfill`, `./index.jsx`],
  },

  //* Как и куда складывать
  output: {
    filename: `js/[name].[contenthash].js`, // Название итогового файла js
    path: path.resolve(__dirname, `dist`),
    publicPath: '/'
  },

  //* Сокращения путей и расширений
  resolve: {
    extensions: [`.js`, `.jsx`, `.json`, `.png`, `.jpg`, `.svg`], // Какие расширения нужно понимать по умолчанию, чтобы их можно было не указывать при импорте
    alias: { // Сокращения для путей
      '@components': path.resolve(__dirname, `./src/components`),
      '@styles': path.resolve(__dirname, `./src/styles`),
      '@fonts': path.resolve(__dirname, `./src/assets/fonts`),
      '@': path.resolve(__dirname, `./src`)
    }
  },

  //* Оптимизация всякого
  optimization: optimization(),

  //* Настройка dev сервера
  devServer: {
    port: 4200,
  },

  //*  Нужны для конфигурирования выходных данных
  devtool: isDev ? `source-map` : ``, // Позволяет корректно просмтаривать исходный код в интрументах разработчика

  //* Список всех плагинов. Плагины позволяют расширить функционал webpack
  plugins: [

    // ? Позволяет автоматически подключать скрипты в html
    new HTMLWebpackPlugin({
      template: `./index.html`, // Указывает на исходный файл
      minify: {
        collapseWhitespace: isBuild // Минифицирует html
      }
    }),

    // ? Очищает папку dist
    new CleanWebpackPlugin(),

    // ? Переносит файлы или папки которые не учавствуют в сборке в dist
    // new CopyWebpackPlugin({
    //   patterns: []
    // }),

    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash].css`
    }),

  ],


  //* Добавляет в webpack  функционал, которые позволяет работать с различными типами файлов
  module: {

    rules: [ // Правила для обработки

      // ? Обработка css
      {
        test: /\.css$/, // Расширения файлов
        use: cssLoaders() // Способ обработки. Лоадеры применяются справо налево
      },

      // ? Обработка Препроцессора sass
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders(`sass-loader`)
      },

      // ? Обработка изображений
      {
        test: /\.(png|jpg|svg|gif|jpeg)$/,
        use: {
          loader: `file-loader`,
          options: {
            outputPath: './assets/img'
          }
        }
      },

      // ? Обработка шрифтов
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: {
          loader: `file-loader`,
          options: {
            outputPath: `./assets/fonts`
          }
        }
      },

      // ? Обработка js с помощью babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },

      // ? Обработка jsx с помощью babel
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
          options: babelOption(`@babel/preset-react`)
        }
      }
    ]
  }
};
