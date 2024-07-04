import { test, expect } from '@playwright/test';

test('addition', async ({ page }) => {
  await page.goto('http://localhost:5174/');

  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'sum' }).click() 
  await page.getByRole('button', { name: '2' }).click();

  await page.getByRole('button', { name: '=' }).click();

  const result = await page.locator('.screen').textContent();
  expect(result).toBe('3 '); 

});

test('multiplication', async ({ page }) => {
    await page.goto('http://localhost:5174/');
  
    await page.getByRole('button', { name: '1' }).click();
    await page.getByRole('button', { name: 'multiplication' }).click() 
    await page.getByRole('button', { name: '2' }).click();
  
    await page.getByRole('button', { name: '=' }).click();
  
    const result = await page.locator('.screen').textContent();
    expect(result?.trim()).toBe('2'); 
  
  });

  test('soustraction', async ({ page }) => {
    await page.goto('http://localhost:5174/');
  
    await page.getByRole('button', { name: '5' }).click();
    await page.getByRole('button', { name: 'soustraction' }).click() 
    await page.getByRole('button', { name: '4' }).click();
  
    await page.getByRole('button', { name: '=' }).click();
  
    const result = await page.locator('.screen').textContent();
    expect(result?.trim()).toBe('1'); 
  
  });


