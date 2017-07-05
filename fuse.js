const { FuseBox, BabelPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js",
  plugins: [
    BabelPlugin({ presets: ["es2015"] })
  ]
});

fuse.bundle("app")
  .instructions(">*.js");

fuse.run();
