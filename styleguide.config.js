const path = require('path'); 

module.exports = {
  components: 'src/components/**/*.{jsx,tsx}',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://bootswatch.com/3/cerulean/bootstrap.min.css'
        }
      ]
    }
  },
  propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath);
    return ext === '.tsx'
      ? require('react-docgen-typescript').parse(
          filePath,
          source,
          resolver,
          handlers
        )
      : require('react-docgen').parse(source, resolver, handlers);
  },
};
