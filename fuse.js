const { FuseBox, BabelPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
  package:{
    name: "statestes",
    main: "index.ts",
  },
  globals: { "statestes": "statestes" },
  plugins: [
    BabelPlugin({ presets: ["es2015"] })
  ]
});

fuse.bundle("app")
  .instructions(">index.js");

fuse.run();
