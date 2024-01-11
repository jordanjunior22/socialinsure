module.exports = {
    presets: [
      [
        'next/babel',
        {
          'preset-env': {
            targets: {
              ie: '11',
            },
          },
        },
      ],
    ],
    // Add additional plugins or settings as needed
  };
  