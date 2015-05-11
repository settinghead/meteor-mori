Package.describe({
	name: 'settinghead:mori',
  version: '0.3.2'
});

Package.onUse(function (api) {
	api.addFiles('mori.js', ['client']);
  api.addFiles('expose-mori.js', ['server']);
  api.export('mori');
});

Npm.depends({
  'mori': '0.3.2'
});