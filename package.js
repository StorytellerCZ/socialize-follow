Package.describe({
  name: 'socialize:follow',
  summary: 'A social follow package',
  version: '0.1.0',
  git: 'https://github.com/copleykj/socialize-follow.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use(['socialize:user-model@1.0.0']);

  api.imply('socialize:user-model');

  //Add the follow-model files
  api.addFiles('follow-model/common/follow-model.js');
  api.addFiles('follow-model/common/user-extensions.js');
  api.addFiles('follow-model/server/server.js', 'server');

  api.export(['Follow']);
});
