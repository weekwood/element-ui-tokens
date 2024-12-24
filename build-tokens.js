const StyleDictionary = require('style-dictionary');

const tokens = {
  spacing: {
    none: { value: '0' },
    xxs: { value: '4px' },
    // ...
  },
  // ...
};

StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: ({ dictionary }) => {
    return `${dictionary.allProperties.map(prop => 
      `--${prop.name}: ${prop.value};`
    ).join('\n')}`;
  }
});

StyleDictionary.registerFormat({
  name: 'javascript/module',
  formatter: ({ dictionary }) => {
    return `export const tokens = ${JSON.stringify(dictionary.tokens, null, 2)};`;
  }
});

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ['./tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/styles/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/module'
      }]
    }
  }
});

StyleDictionaryExtended.buildAllPlatforms(); 