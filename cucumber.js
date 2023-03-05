const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require E2E/step-definitions/**/*.step.js
`
module.exports = {
  default: `${common} E2E/features/**/*.feature`,
}
