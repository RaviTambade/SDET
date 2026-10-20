async function login(page, username, password) {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
}

module.exports = { login };
