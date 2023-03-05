const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: false,
  columnLayout: 1,
  brandTitle: 'Test',
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'DVE',
    Browser: 'Chrome 110.0.5481.71',
    Platform: 'MAC OS 13.2.1 (22D68)',
  },
}

reporter.generate(options)
