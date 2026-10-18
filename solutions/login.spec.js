import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('');
  await page.getByRole('textbox', { name: 'Username' }).press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Username' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Username' }).fill('Password123');
  await page.getByRole('textbox', { name: 'Username' }).press('ControlOrMeta+z');
  await page.getByRole('textbox', { name: 'Username' }).fill('');
  await page.getByText('student').nth(1).click();
  await page.getByText('Press "Enter" to skip to content Home Practice Courses AI Workshop Blog Contact').press('ControlOrMeta+c');
  await page.getByRole('textbox', { name: 'Username' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Username' }).fill('Password123');
  await page.getByRole('textbox', { name: 'Username' }).press('ControlOrMeta+z');
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});