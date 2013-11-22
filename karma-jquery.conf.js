var angularFiles = require('./angularFiles');
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config, {testName: 'AngularJS: jQuery', logFile: 'karma-jquery.log'});

  config.set({
    files: angularFiles.mergeFilesFor('karmaJquery'),
    exclude: angularFiles.mergeFilesFor('karmaJqueryExclude'),

    junitReporter: {
      outputDir: 'test_out/jquery/',
      suite: 'jQuery'
    }
  });
};
