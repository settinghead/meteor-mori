Package.describe({
	name: 'settinghead:mori',
  version: '0.3.2',
	"summary": "mori integration for Meteor. Both client & server sides are supported.",
  "git": "https://github.com/settinghead/meteor-mori.git"
});

Package.onUse(function (api) {
	api.addFiles('mori.js', ['client']);
  api.addFiles('expose-mori.js', ['server']);
  api.export('mori');
});

Npm.depends({
  'mori': '0.3.2'
});
