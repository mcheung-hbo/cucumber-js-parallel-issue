const {
  runCucumber,
  loadConfiguration,
  loadSupport,
} = require('@cucumber/cucumber/api');

const { join } = require('path');

const test = async () => {
  const parallel = process.env.PARALLEL || 0;

  const { runConfiguration } = await loadConfiguration({
    provided: {
      paths: ['features'],
      require: ['stepDefinition'],
      parallel,
      tags: '@test',
      format: ['@cucumber/pretty-formatter']
    },
  });

  let support = await loadSupport(runConfiguration);

  if (parallel && process.env.WORKAROUND == '1') {
    // add support script manually to the support structure
    support.originalCoordinates.requirePaths.push(join(process.cwd(), 'stepDefinition', 'step.js'));
  }

  const { success } = await runCucumber({ ...runConfiguration, support });

  console.log(`runCucumber returns ${success}`);
}



setTimeout(test, 100);