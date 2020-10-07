const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');


// module.exports = withPlugins([...plugins], nextConfiguration);


module.exports = withSass({
  cssModules: true
});
 
module.exports = withPlugins([
    [optimizedImages, {
      /* config for next-optimized-images */
    }],
   
    // your other plugins here
   
  ]);
