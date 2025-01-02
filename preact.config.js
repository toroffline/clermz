  const results = helpers.getLoadersByName(config, 'postcss-loader');
  for (const result of results) {
    result.loader.options.plugins = [
      tailwindcss('./tailwind.config.js'),
      ...result.loader.options.plugins
    ];
  }
