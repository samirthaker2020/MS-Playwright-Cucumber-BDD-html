class CommomFunction {
  async pause() {
    await page.waitForTimeout(3000)
  }
}
module.exports = { CommomFunction }
