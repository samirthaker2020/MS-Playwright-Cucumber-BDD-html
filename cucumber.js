const common = `
    --require setup/assertion.js
    --require setup/hooks.js
    --require step-defination/**/*.step.js
`
module.exports = {
  default: `${common} feature/**/*.feature`,
}
