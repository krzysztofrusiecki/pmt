import { expect, test } from "@playwright/test";

test("index page has expected div", async ({ page }) => {
	await page.goto("/");
	expect(await page.textContent("h1")).toContain("PMT: Boost Your Team's Productivity");
});
