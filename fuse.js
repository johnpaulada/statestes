const {
  FuseBox, BabelPlugin, UglifyJSPlugin,
} = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.min.js',
  package: {
    name: 'statestes',
    main: 'index.js',
  },
  globals: { statestes: 'statestes' },
  plugins: [
    [
      BabelPlugin({ presets: ['es2015'] }),
      UglifyJSPlugin(),
    ],
  ],
});

fuse.bundle('statestes')
  .instructions('>index.js')
  .hmr()
  .watch();

fuse.run();
