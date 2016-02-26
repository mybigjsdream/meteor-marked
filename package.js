// Source: https://github.com/chjj/marked

Package.describe({
  summary: "a available 1.2.21",
  version: "1.2.21",
  name: "shanyue:marked",
  git: "https://github.com/mybigjsdream/meteor-marked.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.2.1");
  api.use("templating", "client", {weak: true});

  api.add_files("pre-marked.js");
  api.add_files("marked/lib/marked.js");
  api.add_files("post-marked.js");

  //api.add_files('template-integration.js', 'client');
  api.export('marked');
});
